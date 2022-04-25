require('dotenv').config()
const express = require("express");
const morgan = require("morgan");
const db = require('./db')
const app = express();

app.use(express.json());


// get all restaurants
app.get("/api/v1/restaurants", async (req,res)=>{
    try{
        const results = await db.query("select * from restaurants");
        console.log(results.rows);
        res.status(200).json({
            status: "success",
            data :{
                restaurants : results.rows,
            },
            
        });
    }
    catch(err){
        console.log(err);
    }
});
// get one restaurant 
app.get("/api/v1/restaurants/:id", async (req,res)=>{
    try{
        const results =await db.query("select * from restaurants where id= $1",[req.params.id]);
        res.status(200).json({
            status: "succes",
            data: {
                restaurant: results.rows[0],
            },
        });
    }
    catch(err){
        console.log(err);
    }
});

//create resaurant

app.post("/api/v1/restaurants", async (req,res)=>{
    try{
        const results = await db.query("INSERT INTO restaurants (name,location,price_range) values($1,$2,$3)",
        [
            req.body.name,
            req.body.location,
            req.body.price_range
        ]);
        console.log(results);

    }catch(err){
        console.log(err);
    }
    console.log(req.body);
    res.status(201).json({
        status: "succes",
        data: {
            restaurant: "mcdonald",
        },
    });
});


// update restaurant
app.put("/api/v1/restaurants/:id",(req,res)=>{
    console.log(req.params);
    console.log(req.body);
    res.status(200).json({
        status: "succes",
        data: {
            restaurant: "mcdonald",
        },
    });
});

//delete resaurant
app.delete("/api/v1/restaurants/:id", (req,res)=>{
    console.log(req.params);
    console.log(req.body);
    res.status(204).json({
        status: "succes",
        data: {
            restaurant: "mcdonald",
        },
    });
})


const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`server is up and listening on port ${port}`);
});