import User from './Model';

export default function userGetAll(req, res) {
  User.find()
}
