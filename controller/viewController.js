const Post = require('../models/postModel');
const catchAsync = require('../utilities/catchAsync');
const AppError = require('../utilities/AppError');

exports.getOverview = catchAsync(async (req, res, next) => {
  const posts = await Post.find();
  console.log(posts.length);
  res.status(200).render('overview', {
    title: 'All Posts',
    posts,
  });
});
exports.getPost = catchAsync(async (req, res, next) => {
  const post = await Post.findOne({ slug: req.params.slug }).populate({
    path: 'comments',
    fields: 'comment rating createdAt user',
  });
  if (!post) {
    return next(new AppError('No post found with that name', 404));
  }
  //console.log(post);
  res.status(200).render('post', {
    title: req.params.title,
    post,
  });
});
exports.getLogInForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into Your Account',
  });
};
exports.getSignUpForm = (req, res) => {
  res.status(200).render('signup', {
    title: 'Sign Up for ReadU',
  });
};

exports.getaccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your account',
  });
}
