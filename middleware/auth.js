const checkIsLogin = (req, res, next) => {
  if (!req.session.account) {
    req.flash('errorMessage', 'Permission denied');
    return res.redirect('/login');
  }
  return next();
};

module.exports = {
  checkIsLogin,
};
