//login user 

import User from '../model/user.model.js';
import jwt from 'jsonwebtoken';

 const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d' });
 }


export const loginUser = async(req, res) => {
    res.json({message: 'login user'});
};

export const signupUser = async(req, res) => {

    const {email, password } = req.body;

    try {
        const user = await User.signup(email, password);

        // create a token

        const token = createToken(user._id);

        res.status(200).json({email, token});
    } catch (error) {
        res.status(400).json({error: error.message })
    }

};
