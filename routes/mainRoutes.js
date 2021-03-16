const express = require('express');
const mainRoutes = express.Router();
const todoListRoutes = express.Router();
const todoController = require('../controllers/todoController');
const memberController = require('../controllers/memberController');
const { checkIsLogin } = require('../middleware/auth');

// purePage
mainRoutes.get('/', (req, res) => res.redirect('/login'));
mainRoutes.get('/login', (req, res) => res.render('login.hbs'));
mainRoutes.get('/welcome', checkIsLogin, (req, res) => res.render('welcome.hbs'));

// auth
mainRoutes.post('/auth', memberController.handleLogin);
mainRoutes.get('/logout', memberController.handleLogout);

// todo
mainRoutes.use('/to-do-list', checkIsLogin, todoListRoutes);
todoListRoutes.get('/page', todoController.listPage);
todoListRoutes.get('/list', todoController.getTodoList);
todoListRoutes.get('/detail/create/page', todoController.createPage);
todoListRoutes.get('/detail/:to_do_id', todoController.updatePage);
todoListRoutes.put('/detail/:to_do_id', todoController.handleUpdateTodo);
todoListRoutes.delete('/detail/:id', todoController.handleDeleteTodo);

// 亂輸入的壞份子都導去登入
mainRoutes.get('*', (req, res) => res.redirect('/login'));

module.exports = mainRoutes;
