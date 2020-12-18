module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `your user was registered! ${req.body.email}`,
    });
  });
}
