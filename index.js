let express = require('express')
let app = express()

app.get('/',  (req, res) => {
   console.log("oi 6")
   console.log("code " + JSON.stringify(req.params))
   res.json("Posso te ajudar")
})

app.get('/teste/:code',  (req, res) => {
   console.log("code " + JSON.stringify(req.params))
   res.json("Posso")
})

app.get(':code',  (req, res) => {
   console.log("code " + JSON.stringify(req.params))
   res.json("ajudar")
})

app.listen(process.env.PORT || 3000, function () {
    console.log("ligado")
})
