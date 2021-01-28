const express = require("express");
const path = require("path");
const app = express();
const cookieParser=require("cookie-parser");
const userRouter = require("./router/userRouter");
const planRouter = require("./router/planRouter");
const viewRouter = require("./router/viewRouter");

app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.set("view engine", "pug");
// view => directory
app.set("views", path.join(__dirname, "view"));
// plans
app.use("/api/plans", planRouter);
app.use("/api/users", userRouter);
app.use("/", viewRouter);

app.listen(3000, function () {
  console.log("Server has started at port 3000");
});
