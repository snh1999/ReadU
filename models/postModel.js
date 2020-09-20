const mongoose = require('mongoose');
const slugify = require('slugify');
//const validator = require('validator');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      //maxlength: [40, 'Title too big'],
      //minlength: [10, 'title too short'],
      //validate: [validator.isAlpha, 'Title must only have numbers'],
    },
    slug: String, //add before saving to DB
    videoLength: {
      type: String,
    },
    videoQuality: {
      type: String,
      enum: {
        values: ['144p', '240p', '360p', '480p', '720p', '1080p'],
        message: 'Invalid input',
      },
      default: '720p',
    },
    views: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: [true, 'Category is required field'],
      trim: true,
    },
    subject: {
      type: String,
      trim: true,
    },
    ratingAverage: {
      type: Number,
      min: [1, 'must be 1-5'],
      max: [5, 'must be 1-5'],
      set: (val) => Math.round(val * 10) / 10,
    },
    totalComment: {
      type: Number,
      default: 0,
      /*validate: {
        validator: function (val) {
          return val < this.views;
        },
        message: 'view should be bigger than comments',
      },*/
    },
    summary: {
      type: String,
      required: [true, 'Post need to have a description'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Post need to have a description'],
    },
    coverImage: {
      type: String,
    },
    mediaFiles: {
      type: String,
    },
    publishTime: {
      type: Date,
      default: Date.now(),
    },
    contributor: {
      type: [String],
      trim: true,
    },
    publisher: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    postPrivacy: {
      type: Boolean,
      default: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
/* //not in database
postSchema.virtual('postedTime').get(function () {
  //time elasped
});
*/

//postSchema.index({ publishTime: 1 });

postSchema.virtual('comments', {
  ref: 'Comment',
  foreignField: 'post',
  localField: '_id',
});
//doc middleware
//additional data process saving to DB
postSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});
//query middleware
//additional privacy
postSchema.pre(/^find/, function (next) {
  this.find({ postPrivacy: { $ne: false } });
  //this.start = Date.now();
  next();
});
/*postSchema.post(/^find/, function (docs, next) {
  console.log(Date.now() - this.start);
  next();
});*/

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
