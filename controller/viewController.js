const planModel = require("../model/planModel");
const userModel = require("../model/userModel");
function getTrialPage(req, res) {
  res.render("trial.pug", {
    titleofThePage: "Trial Page"
  })
}
async function getHomePage(req, res) {
  let plans = await planModel.find();
  let name;
  if(req.userName){
    name = req.userName;
  }
  res.render("home.pug", {
    title: "Home Page", plans, name
  })
}
// 
async function getPlansPage(req, res) {
  // planModel =>get  plans 
  let plans = await planModel.find();
  let name;
  if(req.userName){
    name = req.userName;
  }
  res.render("plansPage.pug", {
    title: "Plans Page", plans, name
  })
}
function getLoginPage(req, res) {
  let name;
  if(req.userName){
    name = req.userName;
  }
  res.render("login.pug", {
    title: "LogIn", name
  })
};
function getSignupPage(req, res){
  let name;
  if(req.userName){
    name = req.userName;
  }
  res.render("signup.pug",{
    title:"SignUp", name
  })
}

async function getProfilePage(req, res) {
  const user = await userModel.findById(req.id);
  const name = req.userName;
  res.render("profile.pug", {
    title: "Profile Page",
    user, name
  })
}

function forgotPass(req, res){
  let name;
  if(req.userName){
    name = req.userName;
  }
  res.render("forgotPass.pug",{
    title:"Forgot Password", name
  })
}
function resetPasswordView(req, res){
  let name;
  if(req.userName){
    name = req.userName;
  }
  res.render("resetPass.pug",{
    title:"Reset Password", name
  })
}
module.exports.getTrialPage = getTrialPage;
module.exports.getHomePage = getHomePage;
module.exports.getPlansPage = getPlansPage;
module.exports.getLoginPage = getLoginPage;
module.exports.getSignupPage = getSignupPage;
module.exports.forgotPass = forgotPass;
module.exports.resetPasswordView = resetPasswordView;
module.exports.getProfilePage = getProfilePage;