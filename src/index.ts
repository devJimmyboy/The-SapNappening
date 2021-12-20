import express from 'express'
import cheerio from 'cheerio'

const port = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
  res.send('yo.')
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})