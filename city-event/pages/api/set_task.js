import { connectMongoDB } from "@/libs/MongoCon"
import { data } from "autoprefixer"

export default async function handler(req,res)
{
    if(req.method !== "POST"){
        res.status(405).send({msg:"Only post request are allowed"})
        return
    }
    const {task}= req.body

    try{
        await connectMongoDB()
        Task.create({task}).then((data)=>{
            console.log(data)
            res.status(201).send(data)
        })
    }
    catch(err){
        console.log(err)
        res.status(400).send({err,msg:"some problem occured"})
    }
}