import mongoose from "mongoose";

let connected = false;

const connectDB = async ()=>{
    mongoose.set('strictQuery',true);
    if(connected){
        console.log('MongoDB is already Connected ...');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        connected=true;
        console.log('MongoDb Connected ...');
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;