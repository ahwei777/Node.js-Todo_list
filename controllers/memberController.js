const db = require('../models');
const bcrypt = require('bcrypt');
const { Members } = db;

const memberController = {
  handleLogin: async (req, res) => {
    const { account, passwd } = req.body;
    if (!account || !passwd) {
      return res.status(400).json({
        ok: 0,
        message: 'Please send all necessary data',
      });
    }
    try {
      const findMember = await Members.findOne({
        where: { account },
      });
      if (!findMember) {
        return res.status(404).json({
          ok: 0,
          message: 'Cannot find member',
        });
      }
      const isValid = await bcrypt.compare(passwd, findMember.passwd);
      if (!isValid) {
        return res.status(400).json({
          ok: 0,
          message: 'wrong password',
        });
      }
      // success
      req.session.account = findMember.account;
      return res.status(200).json({
        ok: 1,
        redirect: '/welcome',
        message: 'Successfully login',
      });
    } catch (error) {
      // 捕捉其他預期外的錯誤並印出
      console.log(error.toString());
      res.status(400).json({
        ok: 0,
        message: error.toString(),
      });
    }
  },
  handleLogout: (req, res) => {
    req.session.account = null;
    req.flash('successMessage', 'Successfully logout');
    return res.redirect('/login');
  },
};

module.exports = memberController;
