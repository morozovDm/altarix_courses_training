import { Request, Response, Router } from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import config from '@config/config';
import { IUser, UserModel } from '@model/user';
import HashPassword from '@helpers/HashPassword';

const router = Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const login = (req: Request, res: Response) => {
  const { username, password } = req.body;
  UserModel.findOne({ username })
    .exec()
    .then((user: IUser | null) => {
      if (!user) {
        return res.status(404).send('User not found');
      }
      const isValid = HashPassword(password) === user.password;
      if (!isValid) {
        return res.status(401).send({ auth: false, token: null });
      }
      const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: 86400 })
      res.status(200).send({ auth: true, token })
    })
    .catch((err: Error) => {
      if (err) {
        return res.status(500).send('Error on server');
      }
    });
}

const logout = (req: Request, res: Response) => res.status(200).send({ auth: false, token: null })

const register = (req: Request, res: Response) => {
  let { username, password } = req.body;
  UserModel.findOne({ username })
    .exec()
    .then((user: IUser | null) => {
      if (user) {
        return res.status(401).json({ message: "username is taken, please try again" });
      }
      password = HashPassword(password);
      new UserModel({ username, password }).save();
    })
    .then(() => res.status(200).send("item saved to database"))
    .catch((err: Error) => {
      if (res.statusCode === 400)
        res.status(400).send(`unable to save to database ${err}`);
      res.status(500).json({ message: err.message });
    })
}

const me = (req: Request, res: Response) => {
  UserModel.findById(req.body.userId, { password: 0 })
    .exec()
    .then((user: IUser | null) => {
      if (!user) {
        return res.status(404).send("No user found.");
      }
      res.status(200).send(user);
    })
    .catch((err: Error) => {
      if (err) {
        return res.status(500).send("There was a problem finding the user.");
      }
    })
}

export default {
  login,
  logout,
  register,
  me
}