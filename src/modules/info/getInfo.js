const names = [];
export default function getInfo(req, res) {
  names.push(req.body.name);
  /*   res.json({
    info: 'lorem intion',
    name: req.body.name,
    count: count++,
  }); */
  res.send('Info ' + names);
}
