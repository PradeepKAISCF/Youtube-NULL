import jwt from "jsonwebtoken"
import  users from '../models/auth.js'
export const login = async(req,res)=>{
    const {email}=req.body;
      console.log(email);
    try {
        const existingUser= await users.findOne({email});
        if(!existingUser){
            try {
                const newUser= await users.create({email});

                const token= jwt.sign({
                    email:newUser.email, id:newUser._id
                },"test",{
                    expiresIn:"1h"
                })
                res.status(200).json({result:newUser,token})
            } catch (error) {
                res.status(500).json({mess:"Something wents wrong..."});
            }
        }else{

            const token=jwt.sign({
                email:existingUser.email, id:existingUser._id
            },"test",{
                expiresIn:"1h"
            })
            res.status(200).json({result:existingUser,token})
        }
    } catch (error) {
        res.status(500).json({mess:"something wents wrong..."})
    }
}

export const number = async(req,res) => {
    const{id,num} = req.body
    try{
        const updatenum = await users.findByIdAndUpdate(id,{$set:{'number':num}},{new:true})
    }catch(error){
        res.status(500).json({mess:"something wents wrong..."})
    }
}

export const otpVerification = async(req,res) => {
    const {phn} = req.body
    console.log(phn)
    try {
        const existingUser= await users.findOne({phn})
        if(existingUser){
            const token=jwt.sign({
                email:existingUser.email, id:existingUser._id
            },"test",{
                expiresIn:"1h"
            })
            console.log('1')
            res.status(200).json({result:existingUser,token,message:'sucess'})
        }else{
            console.log('2')
            res.status(200).json({message:"The number hasn't yet. Register before Signing in"})
        }
    } catch (error) {
        res.status(500).json({mess:"something wents wrong..."})
    }
}