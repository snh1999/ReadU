const express = require('express');
const commentController = require('../controller/commentController');
const authController = require('../controller/authController');

const router = express.Router({ mergeParams: true });

router.use(authController.protection); //protect all afterwards

router
  .route('/')
  .get(authController.restricted('admin'), commentController.getAllComments)
  .post(
    authController.restricted('user', 'moderator'),
    commentController.addPostUserIds,
    commentController.addComment
  ); //donot use to post comments

router
  .route('/:id')
  .get(authController.restricted('admin'), commentController.getCommentByID)
  .patch(
    authController.restricted('user', 'admin'),
    commentController.updateComment
  )
  .delete(
    authController.restricted('user', 'admin'),
    commentController.deleteComment
  );

module.exports = router;
