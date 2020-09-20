const Comment = require('../models/commentModel');
//const catchAsync = require('../utilities/catchAsync');
const factory = require('./handlerFactory');

// exports.getAllComments = catchAsync(async (req, res, next) => {
//   let filter = {};
//   if (req.params.postid) filter = { post: req.params.postid };

//   const comments = await Comment.find(filter);
//   res.status(200).json({
//     status: 'success',
//     results: comments.length,
//     data: { comments },
//   });
// });

exports.addPostUserIds = (req, res, next) => {
  if (!req.body.post) req.body.post = req.params.postid;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};
exports.getAllComments = factory.getAll(Comment);
exports.getCommentByID = factory.getByID(Comment);
exports.addComment = factory.addOne(Comment);
exports.updateComment = factory.updateOne(Comment);
exports.deleteComment = factory.deleteOne(Comment);
