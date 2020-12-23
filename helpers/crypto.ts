import crypto from 'crypto';

//crypto configuration
const algorithm: string = 'aes-256-ctr';
//!this key needs to be 32 byte(256 bit). Also please use env vars in a real project
const key: string = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
const iv: Buffer = crypto.randomBytes(16);


const encrypt = (str: string) => {

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    const encrypted = Buffer.concat([cipher.update(str), cipher.final()]);

    return {
        ivString: iv.toString('hex'),
        content: encrypted.toString('hex')
    }
}



const decrypt = (hash: { ivString: string, content: string }) => {
    const decipher = crypto.createCipheriv(algorithm, key, Buffer.from(hash.ivString, 'hex'));
    const decrypted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()])

    const decryptedString = decrypted.toString();
    return decryptedString;
}


export { encrypt, decrypt };