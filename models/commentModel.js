const mongoose = require('mongoose');
const Post = require('./postModel');

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, 'please write something'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    post: {
      type: mongoose.Schema.ObjectId,
      ref: 'Post',
      required: [true, 'comment must belong to a post'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'comment must belong to a user'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
commentSchema.index({ post: 1, user: 1 });
commentSchema.pre(/^find/, function (next) {
  // this.populate({
  //   path: 'post',
  //   select: 'title',
  // }).populate({
  //   path: 'user',
  //   select: 'name',
  // });
  this.populate({
    path: 'user',
    select: 'name',
  });
  next();
});
commentSchema.statics.calcAvgTotal = async function (postId) {
  const stats = await this.aggregate([
    {
      $match: { post: postId },
    },
    {
      $group: {
        _id: '$post',
        nComment: { $sum: 1 },
        avgRating: { $avg: '$rating' },
      },
    },
  ]);
  if (stats.length > 0) {
    await Post.findByIdAndUpdate(postId, {
      totalComment: stats[0].nComment,
      ratingAverage: stats[0].avgRating,
    });
  } else {
    await Post.findByIdAndUpdate(postId, {
      totalComment: 0,
      ratingAverage: undefined,
    });
  }
};
commentSchema.post('save', function () {
  this.constructor.calcAvgTotal(this.post);
});

commentSchema.pre(/^findOneAnd/, async function (next) {
  this.temp = await this.findOne();
  next();
});

commentSchema.post(/^findOneAnd/, async function () {
  await this.temp.constructor.calcAvgTotal(this.temp.post);
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
