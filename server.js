const { request, response } = require('express')
const express = require('express')
const cors = require ('cors')
const app = express()  //the app can now use all the things that come with express
const PORT = 8000

app.use(cors())

const rappers = {
   '21 savage': {
    'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
    },
    
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },

    'unknown': {
        'age': '0',
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
    
}

//this is essentially an event listener, but instead of it hearing a click, its a network request
app.get('/', (request, response) => {  
    response.sendFile(__dirname + '/index.html')

})

//respond with an object, but send it back as json
//  ( rappers[rapperName] ).birthName   We are grabbing the object & we can use any of the properties inside that object
app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
        if(rappers[rapperName]){
            response.json(rappers[rapperName])
        }else{
            response.json(rappers['unknown'])
        }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! You better catch it!`)
})