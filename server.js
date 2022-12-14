//To get a simple express server running
const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('My API running'));    //this is a route

// Define Routes
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/admin', require('./routes/api/admin'));   //Maliks
app.use('/api/medicine', require('./routes/api/medicine')); //Maliks
app.use('/api/cart', require('./routes/api/cart'));     //Maliks
app.use('/api/admin2', require('./routes/api/adminLogin'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));