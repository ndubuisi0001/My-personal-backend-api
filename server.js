const express = require ('express');
const fs = require('fs');
const app = express();
app.use(express.json());
app.get("/",( req, res)=> { res.send (" you've reached my server, how may i help you")});
app.get ( "/api/food", (req, res) => { const data = JSON.parse(fs.readFileSync("./data.json", "utf8")); res.json(data); });
app.get ( "/api/food/:id", (req, res) => { const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    const food = data.find (item => item.id === Number(req.params.id));  
    if (!food) {return res.status(404).json({message: "food not available" });} res.json(food); }); 
app.use ((req, res) => { return res.status(404).json({message : "route not available"})});
 const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log("Your personal api is now running on port 3000 'CONGRATULATIONS'"
));
