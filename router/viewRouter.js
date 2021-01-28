const viewRouter = require("express").Router();
const { getTrialPage, getHomePage, getPlansPage, getLoginPage, getSignupPage, forgotPass, getProfilePage} = require("../controller/viewController");
const {isUserLoggedIn, protectRoute, logout} = require("../controller/authController");
viewRouter.use(isUserLoggedIn);
viewRouter.get("/", getHomePage)
viewRouter.get("/plans", getPlansPage);
viewRouter.get("/login", getLoginPage);
viewRouter.get("/forgotPassword", forgotPass);
viewRouter.get("/profile", protectRoute, getProfilePage);
viewRouter.get("/signup", getSignupPage);
viewRouter.get("/trial", getTrialPage);
viewRouter.get("/logout", logout);

module.exports = viewRouter;