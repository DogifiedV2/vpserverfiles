 onEvent("recipes", event => {
     Ingredient.of('@wormhole').itemIds.forEach(id => {
         event.remove({ 'output': `${id}` })
     })
 })