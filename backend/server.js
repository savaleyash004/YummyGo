import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./route/foodRoute.js"
import userRouter from "./route/userRoute.js"
import 'dotenv/config'
import cartRouter from "./route/cartRoute.js"
import orderRouter from "./route/orderRoute.js"


//app config
const app=express()
const port = process.env.PORT || 4000;


//middleware
app.use(express.json())
app.use(cors())


// DVB CO0nnection
connectDB();

//api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter)
//http method from which we request the data from server delete post also
app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)

})

//mongodb+srv://savaleyash004:SAVALE004@cluster0.cxgqsai.mongodb.net/?