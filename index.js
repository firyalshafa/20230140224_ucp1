const express = require('express');
const app = express();
const db = require('./models');
const db = require('./modules');
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({
    extended : true
}));

db.sequelize.sync() 
    .then(() => {
       
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    })
    .catch((err) => {
        
        console.log(err);
    });

    app.post("/film", async (req, res) => {
    const data = req.body; 
    try {
       
        const film = await db.Film.create(data);
        res.send(film); 
    } catch (err) {
        
        res.status(500).send(err);
    }
});

app.get('/film', async (req, res) => {
    try {
        
        const film = await db.Film.findAll();
        res.send(film); 
    } catch (err) {
        res.status(500).send(err);
    }
});