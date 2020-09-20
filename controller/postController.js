exports.aliasTopPost = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = 'ratingAverage,views';
  next();
};

const Post = require('../models/postModel');
const catchAsync = require('../utilities/catchAsync');
//const AppError = require('../utilities/AppError');
const factory = require('./handlerFactory');

exports.getAllPosts = factory.getAll(Post);
exports.getPostByID = factory.getByID(Post, { path: 'comments' });
exports.addPost = factory.addOne(Post);
exports.updatePost = factory.updateOne(Post);
exports.deletePost = factory.deleteOne(Post);

exports.addPublisher = (req, res, next) => {
  req.body.publisher = req.user.id;
  next();
};

//aggregation pipeline
exports.getPostStatus = catchAsync(async (req, res, next) => {
  const stats = await Post.aggregate([
    /*{
      $match: { ratingAverage: { gte: 4.5 } },
    },*/
    {
      $group: {
        _id: null, //$views/publishdate
        totalPosts: { $sum: 1 },
        avgRating: { $avg: '$ratingAverage' },
        maxView: { $max: '$views' },
        totalView: { $sum: '$views' },
      },
    },
    /*{ $sort: {avgPrice: 1-ascending}},
    { $match: { _id: { $ne: 'DATE'}}}
    */
  ]);
  res.status(200).json({
    status: 'success',
    data: {
      stats,
    },
  });
});
