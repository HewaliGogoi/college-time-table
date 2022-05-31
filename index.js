const http = require('http');
const app = require('./controllers/app');
const port = require('dotenv').config();
const PORT = process.env.PORT || port.PORT;
const connect = require('./config/connectDb');

http.createServer(app).listen(PORT, '0.0.0.0', async () => {
    await connect();
    console.log(`Listening to port no. ${PORT}...`);
})