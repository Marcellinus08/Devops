const express = require('express');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 3000;

app.use(express.static('../frontend'));
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
