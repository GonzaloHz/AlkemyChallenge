import { generateJWT } from "../helpers/jwt.js"
import { User } from "../models/User.js"
import { Op } from "sequelize"
import bcrypt from "bcryptjs"

export const getUsers=async (req, res)=>{
    try {
        const allUsers = await User.findAll()
        return res.status(201).json(allUsers)
    } catch (error) {
        console.log(error)
    }
}

export const getUserById=async (req, res)=>{
    try {
        const { id } = req.params;
        if(id){
            const chosenUser = await User.findByPk(id)

            return res.status(201).json(chosenUser)
        }

    } catch (error) {
        console.log(error)
    }
}

export const postUser = async(req, res)=>{
    try {

        const { name, email, state, password } = req.body;

        const findEmail = await User.findOne({
            where:{
                email:{
                    [Op.eq]:email
                }
            }
        })
        if(findEmail){
            return res.status(500).json({
                "msg":"Email already exists"
            })
        }

        //Encrypt password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await User.create({
            name:name, email:email, password:hash, state:state
        })

        const token = await generateJWT(newUser.id, newUser.name)

        return res.status(201).json({newUser, token})

    } catch (error) {
        console.log(error)
        res.status(500).json(`Server problem, contact admin`);
    }
}
export const deleteUser=async (req, res)=>{
    try {
        const { id } = req.params;
        await User.destroy({
            where:{
                id:{
                    [Op.eq]: id
                }
            }
        })
        return res.status(201).json({
            "msg": "User deleted succesfully"
        })
    } catch (error) {
        console.log(error)
    }
}
export const updateUser=async (req, res)=>{
    try {
        const { id } = req.params;
        const { name, email, state, password } = req. body;
        
        //Encrypt password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        
        const chosenUser = await User.update({name, email, state, hash},{
            where:{
                id:{
                    [Op.eq]: id
                }
            }
        })
        if(!chosenUser){
            return res.status(404).json({
                "msg":"I dont have that id on my DB"
            })
        }
        return res.status(201).json({
            "msg": "User actualiced succesfully"
        })
    } catch (error) {
        console.log(error)
    }
}

export const loginUser= async(req, res)=>{
    const { email, password } = req.body;
    try {
        const userLoged = await User.findOne({
            where:{
                email:{
                    [Op.eq]:email
                }
            }
        })
        if(!userLoged){
            return res.status(500).json({
                "msg":"Error on User, please contact the admin"
            })
        }
        const validPassword = bcrypt.compareSync(password, userLoged.password);
        if(!validPassword){
            return res.status(400).json({
                "msg":"Password is not valid"
            })
        }
        return res.status(201).json({
            "ok":true,
            "msg":"User logged succesfully"
        })
    } catch (error) {
        console.log(error)
    }
}