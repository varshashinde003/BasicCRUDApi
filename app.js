const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const Database = require("./server/modules/database/database")
const ObjectID = require("mongodb").ObjectID
const empDataRouter = require("./server/modules/empdata/empDataRouter")
const cors = require("cors")

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.listen(8080)
app.use(cors())

app.use("/empdata", empDataRouter.getRouter())