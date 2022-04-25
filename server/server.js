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
            status: "success",
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
        const results = await db.query("INSERT INTO restaurants (name,location,price_range) values($1,$2,$3) returning *",
        [
            req.body.name,
            req.body.location,
            req.body.price_range
        ]);
        
        res.status(201).json({
        status: "success",
        data: {
            restaurant: results,
        },
    });

    }catch(err){
        console.log(err);
    }
    
});


// update restaurant
app.put("/api/v1/restaurants/:id", async(req,res)=>{

    try{
        const results = await db.query("UPDATE restaurants SET name=$1, location=$2, price range=$3 where id=$4 returning *"[
            req.body.name,
            req.body.location,
            req.body.price_range,
            req.body.id
        ]);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: results,
            },
        });
    }catch(err){
        console.log(err);
    }
    
});

//delete resaurant
app.delete("/api/v1/restaurants/:id", async(req,res)=>{
    try{
        const results = await db.query("DELETE FROM restaurants WHERE id=$1", [req.params.id]);
        res.status(204).json({
            status: "success",
        });
    }catch(err){
        console.log(err);
    }

   
})


const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`server is up and listening on port ${port}`);
});