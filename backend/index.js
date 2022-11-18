const express = require('express');
const app = express();
const port = 8186;
const db = require('./src/configs/configdb');
const authRouter = require('./src/routes/auth');
const userRouter = require('./src/routes/users');
const hotelRouter = require('./src/routes/hotels');
const roomRouter = require('./src/routes/rooms');

app.get('/', (req, res) => {
    res.send('app working ...')
});
db.connect();
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/hotel', hotelRouter);
app.use('/api/room', roomRouter);

app.listen(port, () => console.log(`Example listening http://localhost:${port}`));