function isAuth(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect("/auth/fail");
  }
}
export { isAuth };
