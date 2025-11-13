import express from 'express';

const app = express();
const port = 3000

app.get('/', (req,res) => {
    res.status(200).send('página inicial')
})

app.listen(port, () => {
    console.log(`server rodando em: http://localhost:${port}`)
})