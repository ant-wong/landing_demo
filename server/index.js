const express = require('express')
const cors = require('cors')
      app = express()
      port = 6060 || process.argv[2]

app.use(cors())

const yelp = require('yelp-fusion')
client = yelp.client('zkj8espN_axCa9Iqxf5KB0U2vhpOGxavU9lx0rrGvrr8lhCIAFyGUQt13ljBCneAfEOFGb8pU9RgTw80eqyVYHXQ1GHlSwfomL9q27xVArkx2eYrjuqx8qPQ_Aj1WnYx')

app.get('/', (req, res) => {
  client.reviews('miku-vancouver').then(response => {
    res.send(response.jsonBody.reviews)
  }).catch(e => {
    console.log(e)
  })
})

app.listen(port, () => {
  console.log('Running on 6060, CTRL + C to exit')
})