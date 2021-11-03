function apiNotFound(req, res) {
  res.status(400).send('API not found..');
}

export default function errorHandler(app) {
  app.use(apiNotFound);
}
