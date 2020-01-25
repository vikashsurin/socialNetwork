const express = require('express');
const connectDB = require('./config/db');
const app = express();

//mongodb
connectDB();

//initialise middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('API is running');
});

//Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profiles', require('./routes/api/profiles'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('server in up and running at port', PORT));
