import {Operation} from "../models/Operation.js"
import { Op } from "sequelize"
import {User} from "../models/User.js"

export const getOperations= async (req, res)=>{
    try{
        const {id}= req.params;
        const allOperation = await Operation.findAll(
            {
            where:{
                operationId:{
                    [Op.eq]:id
                }
            },
            include:{
                model: User
            }
        }
        )

        let topten = [];
        for(let i=allOperation.length-1; i>=allOperation.length-10; i--){
            if(allOperation[i]!==undefined){
            topten.push(allOperation[i])
            }
        }
        let allOperationOrganized = [];
        let entryOps = [];
        let egressOps = [];
        for(let i=allOperation.length-1; i>=0; i--){
            // console.log(allOperation[i])
            if(allOperation[i].Type=== "Entry"){
                if(allOperation[i]!==undefined){
                entryOps.push(allOperation[i]);
                }
            }
            if(allOperation[i].Type=== "Egress"){
                if(allOperation[i]!==undefined){
                egressOps.push(allOperation[i]);
                }
            }
            if(allOperation[i]!==undefined){
            allOperationOrganized.push(allOperation[i])
            }
        }
        
        
        return res.status(201).json({
            "ALLOPERATIONS":allOperationOrganized,
            "topTEN":topten,
            "egressOPS": egressOps,
            "entryOPS": entryOps    
        })
    }catch(error){console.log(error)}

}
export const createOperations= async (req, res)=>{
    const { Name, Concept, Total, Date, Type } = req.body;
    const { id } = req.params;
    try{
        if(Name && Concept && Total && Date && Type && id){
            const newOperation = await Operation.create({
                Name: Name,
                Concept: Concept,
                Total: Total,
                Date: Date,
                Type : Type,
                operationId: id
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
        const {id}= req.params 
        const allUser= await Operation.findAll({
            where:{
                operationId:{
                    [Op.eq]:id
                }
            }
        });
        // console.log(allUser[0].id)
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
            "currentBalance":totalMoney
        })
    } catch (error) {
        console.log(error)
    }
}