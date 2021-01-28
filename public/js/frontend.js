const d = document;
const loginForm = d.getElementById("sign-in-box");
const emailBox = d.querySelector(".emailtag");
const passwordBox = d.querySelector(".passtag");
const signupname = d.querySelector(".signupname");
const signupmail = d.querySelector(".signupmail");
const signuppass = d.querySelector(".signuppass");
const signupconfirmpass = d.querySelector(".signupconfirmpass");
const signupbox = d.querySelector(".sign-up-box");
const signupmobile = d.querySelector(".signupmobile");
const signupaddress = d.querySelector(".signupaddress");
const logOutForm = d.querySelector(".logout");
const forgotPassEmail = d.querySelector(".forgotPassEmail");
const forgotPassSubmit = d.querySelector(".forgotPassSubmit");
const resetPass = d.querySelector(".resetPass");
const resetCPass = d.querySelector(".resetCPass");
const resetPassSubmit = d.querySelector(".resetPassSubmit");

async function loginHelper(email, password) {
    
  const backendResponse = await axios.post("/api/users/login", { email, password });
  if (backendResponse.data.status === "userLogged In") {
    alert("user LoggedIn");
    location.reload();
  } else {
    alert("Wrong Email or password");
  }
}
if (loginForm) {
  loginForm.addEventListener("click", function (e) {
    //   console.log("Hi")
    e.preventDefault(); 
    const email = emailBox.value;
    const password = passwordBox.value;
    loginHelper(email, password);
  })
}


// signup logic

async function signUpHelper(name, email, pass, cpass, role, mobile, address){
  const obj = {
    "name":name,
    "email":email,
    "password":pass,
    "confirmPassword":cpass,
    "role":role,
    "contactNo":mobile,
    "address":address
  }
  alert("Hi");
  const backendResponse  = await axios.post("/api/users/signup", obj);
  if(backendResponse.data.status==="user Signedup"){
    alert("User signedUp successfully");
    location.reload();
  }else{
    alert("User signUp failed");
  }
}

if(signupbox){
  signupbox.addEventListener("click", function(e){
    e.preventDefault(); 
    const name  = signupname.value;
    const email = signupmail.value;
    const password = signuppass.value;
    const confirmpass = signupconfirmpass.value;
    const mobile = signupmobile.value;
    const address = signupaddress.value;
    const role="admin"
    signUpHelper(name, email, password, confirmpass, role, mobile, address);
  })
};


// logOut logic

async function logoutHelper() {
  const backendResponse = await axios.get("/logout");
  if (backendResponse.data.status == "user LoggedOut") {
    location.reload();
  } else {
    alert("logout failed");
  }
}


if(logOutForm){
  logOutForm.addEventListener("click", function(){
    logoutHelper();
  })
}


//forgotPass logic

async function forgotPassHelper(email){
  const backendResponse = await axios.patch("/api/users/forgetPassword", {email});
  if(backendResponse.data.status=="Token send to your email"){
    alert("Token sent to your email");
  }else{
    alert("Mail could not be sent :(");
  }

}


if(forgotPassSubmit){
  forgotPassSubmit.addEventListener("click", function(){
    const email = forgotPassEmail.value;
    forgotPassHelper(email);
  })
}


// resetPass Logic

async function resetPassHelper(pass, cPass){
  const backendResponse = await axios.patch(window.location.href , {pass, cPass});
  if(backendResponse.data.status=="Password reset"){
    alert("Password reset successful");
  }else{
    alert("Password could not be reset :(");
  }
}

if(resetPassSubmit){
  alert("Hi");
  resetPassSubmit.addEventListener("click", function(){
    const pass = resetPass.value;
    const cPass = resetCPass.value;
    resetPassHelper(pass, cPass);
  })
}