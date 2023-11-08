const express = require('express')
require('dotenv').config();
const cors = require('cors');
const { dbConnect } = require('../config/database');
const fileUpload = require('express-fileupload');
class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT

        this.database();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.json())

        this.app.use(cors())
        //uploads files
        this.app.use(fileUpload({
            useTempFiles:true,
            tempFileDir:'/tmp/',
            createParentPath:true
        }))
    }

    routes(){
        this.app.use('/api/auth',require('../routes/auth.routes'));
        this.app.use('/api/restaurants',require('../routes/restaurant.routes'));
        this.app.use('/api/tables',require('../routes/table.routes'));
        this.app.use('/api/reservations',require('../routes/reservation.routes'));
        this.app.use('/api/uploads',require('../routes/upload.routes'));
    }
    async database(){
        await dbConnect()
     }
    listen(){
        this.app.listen(this.port,()=>{
            console.log("Server on port",this.port);
        })
    }
}

module.exports = Server;