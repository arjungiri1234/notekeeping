import mongoose from 'mongoose'

export async function connectDB(){
    try {
       await  mongoose.connect(process.env.MONGO_URI)
       console.log('Mongodb connected successfully')
    } catch (error) {
        console.error("Error connecting to mongodb", error)
        process.exit(1); //exit with failure
    }
}
    