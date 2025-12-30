const {Router} = require("express")
const { register, login, verify, logout, resendOtp } = require("../controller/register-login")
const resfresh_token = require("../middleware/resfresh_token")

const registerLoginRoutes = Router()

registerLoginRoutes.post("/register", register)
registerLoginRoutes.post("/verify", verify)
registerLoginRoutes.post("/login", login)
registerLoginRoutes.get("/refresh", resfresh_token)
registerLoginRoutes.get("/logout", logout)
registerLoginRoutes.get("/resend_otp", resendOtp)

module.exports = registerLoginRoutes