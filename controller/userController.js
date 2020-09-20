const User = require('../models/userModel');
const catchAsync = require('../utilities/catchAsync');
const AppError = require('../utilities/AppError');
const factory = require('./handlerFactory');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  //password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError('Please use /updateMyPassword to change your password', 400)
    );
  }

  // unwanted fields names not allowed to be updated
  const filteredBody = filterObj(req.body, 'name', 'email');

  //Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.addUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'undefined route. use /signup instead',
  });
};
exports.getAllUsers = factory.getAll(User);
exports.getUserByID = factory.getByID(User);
exports.updateUser = factory.updateOne(User); //NOT PASSWORD
exports.deleteUser = factory.deleteOne(User);
