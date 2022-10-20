let express = require('express')
let app = express()

app.get('/',  (req, res) => {
   console.log("oi")
   res.json("Posso te ajudar")
})

app.listen(process.env.PORT || 3000, function () {
    console.log("ligado")
})
