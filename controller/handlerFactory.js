const catchAsync = require('../utilities/catchAsync');
const AppError = require('../utilities/AppError');
const APIFeatures = require('../utilities/postAPIfeatures');

// exports.getAll = (Model) =>
//   catchAsync(async (req, res, next) => {
//     //form comments- allow nested get comments on post=> post/:id/comments
//     let filter = {};
//     if (req.params.postid) filter = { post: req.params.postid };
//     //execte query
//     const features = new APIFeatures(Model.find({ filter }), req.query)
//       .filter()
//       .sort()
//       .limitedFields()
//       .pagination();
//     const document = await features.query;
//     //send response
//     res.status(200).json({
//       status: 'success',
//       results: document.length,
//       data: {
//         data: document,
//       },
//     });
//   });
exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    //form comments- allow nested get comments on post=> post/:id/comments
    let filter = {};
    if (req.params.postid) filter = { post: req.params.postid };
    //execte query
    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitedFields()
      .pagination();
    const document = await features.query;

    //send response
    res.status(200).json({
      status: 'success',
      results: document.length,
      data: {
        data: document,
      },
    });
  });

exports.getByID = (Model, populateOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (populateOptions) query = query.populate(populateOptions);
    const document = await query;

    if (!document) {
      return next(new AppError('Invalid ID', 404));
    }
    res.status(200).json({
      status: 'success',
      data: {
        data: document,
      },
    });
  });

exports.addOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const newdoc = await Model.create(req.body);
    //newPost.publisher = req.user.id;
    res.status(201).json({
      status: 'success',
      data: {
        data: newdoc,
      },
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!document) {
      return next(new AppError('Invalid ID', 404));
    }
    res.status(200).json({
      status: 'success',
      data: {
        data: document,
      },
    });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const document = await Model.findByIdAndDelete(req.params.id);
    if (!document) {
      return next(new AppError('Invalid ID', 404));
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  });
