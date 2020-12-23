import express from 'express';
import bodyParser from 'body-parser';
const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


import otp from './otp';
app.use('/otp', otp);


app.listen(6900, () => {
    console.log(`Server fired on port 6900...`);
});