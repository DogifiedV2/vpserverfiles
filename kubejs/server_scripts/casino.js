 onEvent("recipes", event => {
     Ingredient.of('@casinocraft').itemIds.forEach(id => {
         event.remove({ 'output': `${id}` })
     })
 })