import { ComparePassword, HashedPassword } from "../helpers/authHelper.js";
import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken"
export async function registerController(req, rsp) {
    const { name, email, phone, address, password } = req.body;
    try {
        if (!name) {
            return rsp.send({ error: "Name is required..", success: false, })
        }
        if (!email) {
            return rsp.send({ error: "Email is required..", success: false, })
        }
        if (!password) {
            return rsp.send({ error: "Password is required..", success: false, })
        }

        if (!phone) {
            return rsp.send({ error: "Phone is required..", success: false, })
        }



        //exsiting user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return rsp.status(201).send({
                message: "Already Registered please login..",
                success: true,
            })
        }
        // Hashing Password
        const hashedPassword = HashedPassword(password);

        //registered new user
        const user = new User({ name, email, phone, password: hashedPassword });
        await user.save();
        rsp.status(200).send({
            message: "User Registered Successfully",
            success: true
        })


    } catch (error) {
        console.log(error)
        rsp.status(500).send(error, {
            error: "failed to register",
            success: false,
        })
    }
}

export async function loginController(req, rsp) {
    const { email, password } = await req.body;
    try {
        if (!email || !password) {
            return rsp.status(201).send({
                message: "Invalid user or password ", success: false,
            })

        }
        const user = await User.findOne({ email });
        if (!user) {
            return rsp.status(200).send({ message: "User not exist", success: false })
        }
        const matchedPassword = ComparePassword(password, user.password);
        if (!matchedPassword) {
            return rsp.status(200).send({ message: "Invalid Password", success: false })
        }
        //creating token
        // const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY, {
        //     expiresIn: "7d"
        // });
        const user1 = await User.findOne({ email }).select("-password")

        jwt.sign({ user }, process.env.JWT_KEY, {
            expiresIn: "7d"
        }, (err, token) => {
            if (err) {

                rsp.send({ error: "something went wrong..Please try after sometime" })
            } else {
                rsp.send({
                    user1, auth: token, success: true,
                    message: "Login Successfully",
                })
            }
        });
        //setting Cookies
        // rsp.cookie("loginCookie", token, {
        //     expiresIn: "2d",
        //     httpOnly: true,

        // });


        // rsp.status(200).send({
        //     success: true,
        //     message: "Login Successfully",
        //     user: {
        //         _id: user._id,
        //         name: user.name,
        //         email: user.email,
        //         phone: user.phone,
        //         address: user.address,

        //     }, token
        // })





    } catch (error) {
        console.log(error)
        rsp.status(500).send({
            success: false,
            error: "failed to login !!"
        })
    }
}

// export async function getCurrentUser(req, rsp) {
//     try {
//         const loginCook = req.cookies.loginCookie;

//         const data = jwt.verify(loginCook, process.env.JWT_KEY);
//         console.log(data);
//         const user = await User.findById({ _id: data._id }).select('-password')
//         rsp.status(200).send(user);
//     } catch (error) {
//         console.log(error)
//         rsp.status(500).send(error)
//     }

// }