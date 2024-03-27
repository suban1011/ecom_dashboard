import mongoose from "mongoose";
import colors from "colors"
const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: "ecom"
        })
        console.log("Successfully Connected to MONGODB".bgGreen.white)
    } catch (error) {
        console.log(error)
        console.log("Failed to Connect to MongoDB".bgRed.white)
    }

}
export default ConnectDB;