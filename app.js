const express = require('express');
const app = express();
const port = 3000;
const { sequelize } = require('./models');
const routes = require('./routes/index');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', routes);

app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync();
        console.log('Database synchronized');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(`Server running at http://localhost:${port}`);
});