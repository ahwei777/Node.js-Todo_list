const db = require('../models');
const { Todos } = db;

const startID = 10001;
const msg_unKnowError = 'Please try again later';
const msg_404 = 'Can not find requested resource';

const todoController = {
  listPage: (req, res) => res.render('to-do-list.hbs'),

  getTodoList: async (req, res) => {
    try {
      const todos = await Todos.findAll({
        order: [['to_do_id', 'ASC']],
      });
      return res.status(200).json({
        result: todos,
      });
    } catch (error) {
      console.log(error.toString());
      return res.status(500).json({
        ok: 0,
        errorMessage: msg_unKnowError,
      });
    }
  },

  createPage: async (req, res) => {
    try {
      // 回傳最新 to_do_id
      const lastRow = await Todos.findOne({
        attributes: ['to_do_id'],
        order: [['to_do_id', 'DESC']],
      });
      let newID = lastRow === null ? startID : lastRow.to_do_id + 1;
      return res.render('to-do-detail.hbs', {
        todoData: {
          to_do_id: newID,
        },
      });
    } catch (error) {
      console.log(error.toString());
      return res.status(500).json({
        ok: 0,
        errorMessage: msg_unKnowError,
      });
    }
  },

  updatePage: async (req, res) => {
    const { to_do_id } = req.params;
    try {
      const todoData = await Todos.findOne({
        where: {
          to_do_id,
        },
      });
      if (!todoData) {
        return res.redirect('/to-do-list/page');
      }
      return res.render('to-do-detail.hbs', {
        todoData,
      });
    } catch (error) {
      console.log(error.toString());
      return res.status(500).json({
        ok: 0,
        errorMessage: msg_unKnowError,
      });
    }
  },

  handleUpdateTodo: async (req, res) => {
    // check
    const { to_do_id } = req.params;
    const { mode } = req.query;
    if (!mode || (mode !== 'create' && mode !== 'edit')) {
      return res.status(400).json({
        ok: 0,
        errorMessage: 'Please select legal mode',
      });
    }
    const { subject, reserved_time, brief, level, author, content } = req.body;
    if (!subject || !reserved_time || !brief || !level || !author || !content) {
      return res.status(400).json({
        ok: 0,
        errorMessage: 'Please send all necessary data',
      });
    }
    try {
      if (mode === 'create') {
        const createResult = await Todos.create({
          to_do_id,
          subject,
          reserved_time,
          brief,
          level,
          author,
          content,
        });
        if (createResult) {
          return res.status(200).json({
            message: 'ok.',
          });
        }
        return res.status(500).json({
          ok: 0,
          errorMessage: msg_unKnowError,
        });
      }
      if (mode === 'edit') {
        const updateResult = await Todos.update(
          {
            to_do_id,
            subject,
            reserved_time,
            brief,
            level,
            author,
            content,
          },
          {
            where: {
              to_do_id,
            },
          }
        );
        if (updateResult) {
          return res.status(200).json({
            message: 'ok.',
          });
        }
        return res.status(404).json({
          ok: 0,
          errorMessage: msg_404,
        });
      }
    } catch (error) {
      // 捕捉其他預期外的錯誤並印出
      console.log(error.toString());
      return res.status(500).json({
        ok: 0,
        errorMessage: msg_unKnowError,
      });
    }
  },
  handleDeleteTodo: async (req, res) => {
    const { id } = req.params;
    const deleteResult = await Todos.destroy({
      where: { id },
    });
    if (deleteResult === 1) {
      return res.status(200).json({
        message: 'ok.',
      });
    } else {
      return res.status(404).json({
        message: msg_404,
      });
    }
  },
};

module.exports = todoController;
