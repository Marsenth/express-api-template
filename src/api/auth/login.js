const login = (req, res) => {
  const { body } = req;

  if (body.username === 'mario' && body.password === 'mariolo89') {
    res.json('111111111');
  } else {
    res.status(400);
    res.json({
      message: 'Credenciales inválidas',
    });
  }
};

module.exports = login;
