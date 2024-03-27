import jwt from "jsonwebtoken"
export async function verifyToken(req, rsp, next) {
    let token = req.headers['authorization']


    if (token) {
        token = token.split(' ')[1];

        jwt.verify(token, process.env.JWT_KEY, (err, valid) => {
            if (err) {
                rsp.send({ error: "Please provide valid token" })
            } else {
                next();
            }
        })
    } else {
        rsp.send({ message: "Please add token with header" })
    }
}