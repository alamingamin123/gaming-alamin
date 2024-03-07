import mongoose from 'mongoose'
import colors from 'colors'
import config from '../config/index.js';
import app from '../shared/app.js';

async function connectDB() {
    try {
        const conn = await mongoose.connect(config.database_url);
        console.log(`Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white)
        app.listen(config.port, () => {
            console.log(`Server Running on ${config.dev_mode} mode no port ${config.port}`.bgCyan.white)
        })
    } catch (error) {
        console.log(`Error in Mongodb ${error}`.bgRed.white)
    }
}

connectDB()

