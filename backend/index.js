import express from "express";
import data from "./data.js";

const app = express();
app.listen(3001, () => { console.log("Backend is running at port: 3001");})

app.use("/", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

app.use(express.json())

app.get("/", (req,res) => {
    try {
        res.json(data.items)
    } catch (error) {
        res.status(500).json({message:"Ups, something went wrong in our end."})
    }
})

app.post("/login", (req,res) => {
    try {
        let loginData = req.body
        let validated = false
        let role = ""
        data.accounts.forEach((item, index) => {
            if (loginData.name == item.name && loginData.password == item.password) {
                validated = true
                role = item.role
            }
        })
        if (validated) {
            res.send(role)
        }
        else {
            res.status(500).send("Unsuccessful validation")
        }
    } catch (error) {
        res.status(500).json({message:"Ups, something went wrong in our end."})
    }
})