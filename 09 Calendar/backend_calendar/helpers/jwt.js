const jwt = require('jsonwebtoken');

const generateJWT = (uid, name) => {

    
    return new Promise((resolve, reject) => {

        const payload = { uid, name }

        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            // set the token duration 
            expiresIn: '2h',
        }, (err, token) => {

            if (err) {
                console.log(err);
                reject('cant generated the token')
            }


            resolve(token);
            

        });
    });
}


module.exports = {
    generateJWT
}

