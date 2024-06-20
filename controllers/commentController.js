const CommentModel = require('../models/commentModel');

class CommentController {
  async createComment(req, res) {
    try {
      const bodyData = req.body;
      const newComment = await CommentModel.create(bodyData);
      res.redirect('/comments');
    } catch (error) {
      console.log(error.message);
      return res.status(error.status || 500).json(error.message || 'Lỗi không xác định được!');
    }
  }

  async renderCreateCommentPage(req, res) {
    try {
      res.render('createcomment.ejs', { layout: '' });
    } catch (error) {
      console.log(error.message);
      return res.status(error.status || 500).json(error.message || 'Lỗi không xác định được!');
    }
  }
}

module.exports = new CommentController();
