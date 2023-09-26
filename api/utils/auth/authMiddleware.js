function isAuth(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect("/auth/fail");
    console.log(req.user);
  }
}
export { isAuth };
