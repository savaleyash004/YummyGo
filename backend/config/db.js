import mongoose from "mongoose"

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://savaleyash004:SAVALE004@cluster0.cxgqsai.mongodb.net/fooddelivery').then(()=>console.log("DB Connected"));

}
