import express, {
    Request,
    Response,
    Router
} from 'express';
const router = Router();
import { encrypt, decrypt } from './helpers/crypto';


//api for getting a new OTP
router.get('/init', (req: Request, res: Response) => {

    let otpString: string = 'XX' + Math.floor(10000 + Math.random() * 9000000);
    console.log(otpString);

    //send otpString via SMS / Email to user

    let hashedOtp: object = encrypt(otpString);

    res.status(200).json({ error: false, hashedOtp: hashedOtp }); //store the hashedOtp obj in client

});


//otp verification api
router.post('/verify', (req: Request, res: Response) => {

    let enteredOtp = req.body.enteredOtp;
    let decryptedHashedOtp = decrypt(req.body.hashedOtp); //use JSON.parse if you've stringified the object which you'll be doing most likely

    if (enteredOtp === decryptedHashedOtp) {
        //do your operation here
        res.status(200).json({ error: false, msg: 'Otp matched and opetion successfull' })
    } else {
        res.status(401).json({ error: true, msg: 'Invalid OTP' });
    }

});

export default router;