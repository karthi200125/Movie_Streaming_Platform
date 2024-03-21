import UserModel from "../Modals/UserModel.js";
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken'

export const Register = async (req, res, next) => {
    try {
        const { username, email, password: enteredPassword } = req.body.inputs;
        const user = await UserModel.findOne({ email });
        if (user) return res.status(404).json({ message: { email: "This email already registered" } });
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(enteredPassword, salt);
        const newuser = await UserModel.create({ username, email, password: hashedPassword });
        res.status(201).json({ message: "User has been created" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "User register failed" });
    }
};

export const Login = async (req, res, next) => {
    try {
        const { email, password: enteredPassword } = req.body.inputs;
        const user = await UserModel.findOne({ email });
        if (!user) return res.status(404).json({ message: { email: "Wrong email" } });
        const checkPassword = await bcrypt.compare(enteredPassword, user.password);
        if (!checkPassword) return res.status(401).json({ message: { password: "Wrong password" } });
        const { password, ...others } = user._doc;
        const token = JWT.sign({ id: user._id }, process.env.SECRET_KEY_JWT, { expiresIn: '1d' })
        res.cookie("access_token", token, { httpOnly: true, secure: true, sameSite: 'Lax' }).status(200).json({ ...others, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "User login failed" });
    }
};

export const userUpdate = async (req, res, next) => {
    try {
        const { userId } = req.params
        const updateuser = await UserModel.findByIdAndUpdate(userId, req.body, { new: true });
        res.status(200).json(updateuser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "User update failed" });
    }
};

export const userWatchedMovies = async (req, res, next) => {
    try {
        const { userId, movieId } = req.body;
        await UserModel.findByIdAndUpdate(userId, { $addToSet: { watchedMovies: movieId } }, { new: true });
        res.status(200).json(movieId);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Adding movie to watched list failed" });
    }
}