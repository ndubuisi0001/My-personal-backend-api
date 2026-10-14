const express = require ('express');
const fs = require('fs');
const app = express();
app.use(express.json());
app.get("/",( req, res)=> { res.send (" you've reached my server, how may i help you")});
app.get ( "/api/food", (req, res) => { const data = JSON.parse(fs.readFileSync('/data.json', 'utf-8')); res.json(data); });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Your personal api is now running on port 3000 'CONGRATULATIONS'"
));
