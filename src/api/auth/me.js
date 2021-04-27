const me = (req, res) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split('Bearer')[1].trim();

    if (token === '111111111') {
      return res.json({
        name: 'Mario',
        lastName: 'Cárdenas',
        rut: '257370151'
      });
    }
  }

  res.status(400);
  return res.json({
    message: 'Credenciales inválidas',
  });
};

module.exports = me;
