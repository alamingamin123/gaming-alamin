import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
    port: process.env.PORT,
    dev_mode: process.env.DEV_MODE,
    database_url: process.env.MONGO_URL,
}