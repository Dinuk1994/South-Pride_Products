import jwt from 'jsonwebtoken';

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) {
        return res.status(401).json({ msg: "Unauthorized user!" });
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next(); 
    } catch (error) {
        res.status(500).json({ msg: "Internal server error in middleware" });
    }
};
