import jwt from "jsonwebtoken"
import {User} from "../models/User.js";


export const validateJWT = async (req, res, next)=>{
    
    // x-token headers
    const token = req.header('x-token');
    
    if(!token){
        return res.status(401).json({
            "msg":"There is no token in the request"
        })
    }

    try {
        
        const payload = jwt.verify(
            token,
            'Th1S1SMyS3CR37k3Y'
        )

        const user = await User.findByPk(payload.id)

        if(!user){
            return res.status(401).json({
                "msg":"The user doesnt exists"
            })
        }

        req.user=user;

    } catch (error) {
        return res.status(401).json({
            "msg":"Token not valid"
        })
    }

    next();



}

