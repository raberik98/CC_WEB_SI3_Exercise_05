import express from "express";
import data from "./data.js";

const app = express();

app.use(express.json())

app.get("/api/v1/items", (req,res) => {
    try {
        res.json(data.items)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Ups, something went wrong in our end."})
    }
})

app.get("/api/v1/item/:id", (req,res) => {
    try {
        const selectedItem = data.items.find((nextItem) => nextItem.id == req.params.id)

        if (selectedItem) {
            res.json(selectedItem)
        }
        else {
            res.status(404).json({message: "Item not found!"})
        }
    } catch (error) {
        console.log(error);
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
        console.log(error);
        res.status(500).json({message:"Ups, something went wrong in our end."})
    }
})

app.listen(3000, () => { console.log("Backend is running at port: 3000");})