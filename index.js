const express = require("express")
const serverPort = 8000;
const app = express()

//localhost:8000/pokemons?limit=2&order=ASC
app.get("/pokemons",(request, response)=>{
   console.log(request.query)
   const limit = request.query.limit

   if(!limit) response.send(pokemons)
   else {
      response.send(pokemons.slice(0,limit))
   }
})

app.get("/pokemons/:id",(request, response)=>{
   const id = parseInt(request.params.id)

   const pokemon = pokemons.find(pokemon=>pokemon.id===id)

   if(pokemon) response.send(pokemon)
   else response.sendStatus(404)
})


app.listen(serverPort, ()=>{
   console.log("le serveur est en route !")
})