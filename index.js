const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const port = 3000;

// const handler = (req, res) => {
//     res.send('hello from node')
// }

app.get('/', (req, res) => {
    res.send('Hello node js How you doing brother?')
});

const users = [
    { id: 0, name: 'ali mia', email: 'gonimia@gmail.com', phone: '0178888888' },
    { id: 1, name: 'goni mia', email: 'gonimia@gmail.com', phone: '0178888888' },
    { id: 2, name: 'dhoni mia', email: 'gonimia@gmail.com', phone: '0178888888' },
    { id: 3, name: 'choli mulla', email: 'cholimulla@gmail.com', phone: '0178888888' },
    { id: 4, name: 'toki mullah', email: 'gonimia@gmail.com', phone: '0178888888' },
    { id: 5, name: 'rahimullah', email: 'gonimia@gmail.com', phone: '0178888888' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits/', (req, res) => {
    res.send(['mango', 'watermalon2', 'banana', 'apple'])
})

app.get('/fruits/mangoes/lengra', (req, res) => {
    res.send('yummy yummy mangoes');
})

app.listen(port, () => {
    console.log('listening to port', port)
});
