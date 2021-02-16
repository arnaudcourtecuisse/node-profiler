const express = require('express')
const app = express()

const countTo2e9 = () => {
  let i = 2000000000
  while (i-- > 0) {}
}

app.get('/sync', (req, res) => {
  try {
    countTo2e9()
    res.status(200).send('ok\n')
  } catch (err) {
    res.status(500).send('ko\n')
  }
})

app.listen(5000)
