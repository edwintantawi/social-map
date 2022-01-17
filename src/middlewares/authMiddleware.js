const authMiddleware = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(401).json({
      status: 'fail',
      message: 'Unauthorized, please login',
    });
  }
};

export { authMiddleware };
