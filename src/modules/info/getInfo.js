export default function getInfo(req, res) {
  console.log(req.body.name);
  res.json({
    info: 'lorem intion',
    name: req.body.name,
  });
}
