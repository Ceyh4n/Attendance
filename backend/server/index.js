const express = require('express');
const app = express();
const port = 3001;
const path = require('path');

app.use(express.static(path.resolve(__dirname,'../client/build')));

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api', (req, res) => {
  res.json({name:'Subutay', surname:"Ceyhan"})
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname,'../client/build', 'index.html'));
})
app.listen(port, () => console.log(`Example app listening on port port!`))