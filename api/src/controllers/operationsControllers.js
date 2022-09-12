import {Operation} from "../models/Operation.js"
import { Op } from "sequelize"

export const getOperations= async (req, res)=>{
    try{
        const allOperation = await Operation.findAll()
        
        return res.status(201).json(allOperation)
    }catch(error){console.log(error)}

}
export const createOperations= async (req, res)=>{
    const { Name, Concept, Total, Date, Type } = req.body;
    try{
        if(Name && Concept && Total && Date && Type){
            const newOperation = await Operation.create({
                Name: Name,
                Concept: Concept,
                Total: Total,
                Date: Date,
                Type : Type
            })
            return res.status(201).json(newOperation)
        }
    }catch(error){
        console.log(error) 
    }
}
export const getOperationById = async (req, res)=>{
    try {
        const { id } = req.params;
        // console.log(id)
        const chosenOperation =await Operation.findByPk(id)
        return res.status(201).json(chosenOperation)
    } catch (error) {
        console.log(error)
    }
    return res.status(404).msg("The id provided doesnt match with a valid Id")
}
export const deleteOperationById = async (req, res)=>{
    try {
        const { id } = req.params;
        // console.log(id)
        if(id){
            await Operation.destroy({
                where:{
                    id: {
                        [Op.eq]: [id]
                    }
                }
            })
            return res.status(201).json({
                "msg":"The operation solicited was deleted"
            })
        }
    } catch (error) {
        console.log(error)
    }
    return res.status(404).json({
        "msg":"I need a valid Id"
    })
}
export const updateOperationById = async (req, res)=>{
    try {
        const { id } = req.params;
        const { Name, Concept, Total, Date, Type } = req.body;
        // console.log(id)
        if(id){
            await Operation.update({Name, Concept, Total, Date, Type},{
                where:{
                    id: {
                        [Op.eq]: [id]
                    }
                }
            })
            return res.status(201).json({
                "msg":"The operation solicited was actualiced"
            })
        }
    } catch (error) {
        console.log(error)
    }
    return res.status(404).json({
        "msg":"Check the information, I need the rigth one"
    })
}
export const getTotalOperation = async(req, res)=>{
    try {
        const allUser= await Operation.findAll();
        console.log(allUser[0].id)
        var totalMoney=0
        for(let i=0; i<allUser.length; i++){
            if(allUser[i].Type==="Entry"){
                totalMoney= totalMoney+allUser[i].Total
            }
            if(allUser[i].Type==="Egress"){
                totalMoney= totalMoney-allUser[i].Total
            }
        }
        return res.status(201).json({
            "The current balance is":totalMoney
        })
    } catch (error) {
        console.log(error)
    }
}