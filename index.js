import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use( cors({
    origin:"http://localhost:5173",
}))

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});

app.get('/users', (req, res) => {
    res.json({
      nombre:'Carlos',
      apellido:'Perez'
    });
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
