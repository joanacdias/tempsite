const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();

const PORT = process.env.PORT || config.prod.port || 3000;

app.use(history());
app.use(express.static('src'));

app.get('/', (req, res) => {
  res.sendFile('src/index.html');
});

app.listen(PORT, () => console.log('server started'));