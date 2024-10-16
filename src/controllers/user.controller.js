import {asynchandler} from "../utils/asynchandler.js"

const registerUser = asynchandler(async(req,res)=>{
   
   
    res.status(200).json({
        message: "oK from the register user route"
    })


})




export {registerUser}