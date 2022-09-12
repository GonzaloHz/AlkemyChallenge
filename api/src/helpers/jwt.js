import jwt from "jsonwebtoken";

export const generateJWT = ( id, name ) =>{

    return new Promise((resolve, reject) => {
        
        const payload = { id, name };
        jwt.sign(payload, 'Th1S1SMyS3CR37k3Y', {
            expiresIn: '368d'
        }, (err, token)=>{
            if(err){
                console.log(err)
                reject("Problem with the jwt generation")
            }
            resolve( token );
        })

    })
}