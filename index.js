let express = require('express')
let app = express()

app.get('/',  (req, res) => {
   console.log("oi 9")
   console.log("query " + JSON.stringify(req.query))
   console.log("params " + JSON.stringify(req.params))
   res.json("Posso te ajudar")
})

app.listen(process.env.PORT || 8080, function () {
    console.log("ligado")
})
