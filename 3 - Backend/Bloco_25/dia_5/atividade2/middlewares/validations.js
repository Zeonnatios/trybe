const isValidToken = (req, res, next) => {
  const token = req.headers.authorization;
  const tokenRegex = !/^[a-zA-Z0-9]{12}$/;

  const validToken = () => {
    if(token.length !== 12) return true;
    return false;
  }
  
  if (!token || validToken()) {
    console.log(token)
    return res.status(401).json({ message: 'invalid token' });
  };

    next();
  };
  
  module.exports = { isValidToken };