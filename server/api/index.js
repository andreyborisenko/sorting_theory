import bodyParser from 'body-parser'
import { performance } from 'perf_hooks'

let i = 0
const express = require('express')
const router = express.Router()
const parser = require('./parser')
const methods = require('./sortings')
const comparers = require('./comparers')

router.use(bodyParser.json())

router.get('/methods', (req, res, next) => {
  console.log('here')
  res.send({
    routes: Object.keys(methods),
    comparers: Object.keys(comparers)
  })
})

router.post('/sort/:method', async (req, res, next) => {
  let method = req.params.method
  console.log(`${method} exists in methods ? ${method in methods}`)

  if (method in methods) {
    let data = parser(req.body)

    performance.mark('s')
    let out = methods[method](data)
    performance.mark('e')
    performance.measure('t', 's', 'e')

    if (out instanceof Array) {
      out = {
        array: out,
        time: performance.getEntriesByName('t')[i].duration
      }
    } else {
      out['time'] = performance.getEntriesByName('t')[i].duration
    }

    res.send(out)
    i++
  }
})

router.post('/comparer/:comparer', (req, res) => {
  if (req.body.array === undefined) {
    res.end('You have to send an array of strings')
  }
  if (req.params.comparer in comparers) {
    res.send({
      array: req.body.array.map(comparers[req.params.comparer])
    })
  }
})

router.use((req, res) => {
  res.end()
})

export default router
