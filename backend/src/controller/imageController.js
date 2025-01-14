import userModel from "../models/userModel"


export const generateImage = async(req,res) =>{
   try {
     const {userId,prompt} = req.body
     const user = await userModel.findById(userId)
     if(!user || !prompt){
        return res.json({success:false,message:"Missing Details"})
     }
     if(user.creditBalance ===  0  || userModel.creditBalance < 0 ){
        return res.json({success:false ,message:"No credit Balance", creditBalance: user.creditBalance})
     }
     const formData = new FormData()
     formData.append('prompt',prompt)

     await axios.post("",formData,{
        
     })

   } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
   }
}