import jwt from 'jsonwebtoken';

export const VerifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    if (!authHeader) return res.status(404).json({ message: 'You are not authenticated' });
    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Invalid token format' });
    jwt.verify(token, process.env.SECRET_KEY_JWT, (err, decoded) => {
        if (err) return res.status(401).json({ message: "Token is not valid" });
        req.userId = decoded;
        next();
    });
};

export const VerifyUser = async (req, res, next) => {
    try {
        const userVerified = req.userId.id === req.params.userId || req.body.userId;        
        if (userVerified) {
            next();
        }
        else {
            res.status(500).json({ message: "Verify user failed" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Verify user failed" });
    }
};
