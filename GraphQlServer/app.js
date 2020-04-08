const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()


mongoose.connect('mongodb+srv://dmodzelewski:Start1234@isportio-oqbfe.mongodb.net/isportiodatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => console.log('DB Connected!'))
    .catch(() => {
        console.log('DB Connection Error');
    });

app.use('/graphql',cors(), graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Listening...')
})
