const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const db = require('./models/index')


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => {
        console.log('Connected to the database!')
      })
      .catch(err => {
        console.log('Cannot connect to the database. :(');
        process.exit()
      })

app.get('/', async (req, res) => {
    res.send('This is Working')
})

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
})