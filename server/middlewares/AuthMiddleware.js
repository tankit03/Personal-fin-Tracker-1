import User from '../model/user.model.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const userVerifications = (req, res) => {
    const token = req.cookies.token;

    if(!token) {
        return res.json({status: false});
    }
    jwt.verify(token, process.env.SECRET, async (error, data) => 
        {
            if(error){
                return res.json({status: false});
            } else {
                const user = await User.findById(data._id);
                // console.log("this is the current user: ", user);
                if (user){
                    return res.json({status: true, user: user.email})
                } else {
                    return res.json({status: false, message: "in here"});
                }
            } 
        }
    )
}