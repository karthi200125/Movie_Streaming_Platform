import UserModel from "../Modals/UserModel.js";
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken'
import stripe from 'stripe';
const stripeInstance = stripe("sk_test_51ObHAQSFUNMmDRylrz3YefGhLWiwCz80DekgO7dklS80gAj6QQ6UCyo4Sb6hAMVjqEOm836kcym8vqu4YJG7fdMW00w7gWzPjw");

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

export const updateIsSub = async (req, res, next) => {
    try {
        await UserModel.findByIdAndUpdate(user?._id, { $set: { isSub: true } });
        res.status(201).json({ message: "uswer subscription sucessfull" });
    } catch (error) {
        res.status(500).json({ message: "uswer subscription failed" });
    }
}


export const Stripe = async (req, res, next) => {
    const { user, price } = req.body;

    const lineItems = [{
        price_data: {
            currency: "inr",
            product_data: {
                name: user?.username,
            },
            unit_amount: price * 100
        },
        quantity: 1
    }];

    try {
        const session = await stripeInstance.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            payment_method_types: ['card'],
            success_url: 'http://localhost:5173/success=true',
            cancel_url: 'http://localhost:5173/success=false',
        });

        res.status(201).json(session.id);

    } catch (error) {
        res.status(500).json({ message: "user subscription failed" });
    }
};
