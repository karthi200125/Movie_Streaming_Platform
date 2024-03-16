import UserModel from "../Modals/UserModel.js";
import bcrypt from 'bcryptjs';

export const Register = async (req, res, next) => {
    try {
        const { username, email, password: enteredPassword } = req.body.inputs;
        const user = await UserModel.findOne({ email });
        if (user) return res.status(404).json("This email already registered");
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(enteredPassword, salt);
        const newuser = await UserModel.create({ username, email, password: hashedPassword });
        res.status(201).json("User has been created");
    } catch (error) {
        console.error(error);
        res.status(500).json("User register failed");
    }
};

export const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body.inputs;
        const user = await UserModel.findOne({ email });
        if (!user) return res.status(404).json("Wrong email");
        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) return res.status(401).json("Wrong password");
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json("User login failed");
    }
};

export const userUpdate = async (req, res, next) => {
    try {
        const profilePic = 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600'
        const { email, username, phone } = req.body.inputs;
        const { userId } = req.params
        const updateuser = await UserModel.findByIdAndUpdate(userId, { username, email, profilePic }, { new: true });
        res.status(200).json(updateuser);
    } catch (error) {
        console.error(error);
        res.status(500).json("User update failed");
    }
};

export const userWatchedMovies = async (req, res, next) => {
    try {
        const { userId, movieId } = req.params;
        await UserModel.findByIdAndUpdate(userId, { $push: { watchedMovies: movieId } }, { new: true });
        res.status(200).json("Movie added to watched list");
    } catch (error) {
        console.error(error);
        res.status(500).json("Adding movie to watched list failed");
    }
};
