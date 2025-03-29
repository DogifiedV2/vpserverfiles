let removedOutputsLCT = [
    'morevaulttables:jewel_sack_opener_block',
    'the_vault:vault_recycler',
    'the_vault:crystal_seal_ordinator_build',
    'the_vault:crystal_seal_ordinator_run'
];
onEvent("recipes", event => {
    removedOutputsLCT.forEach(id => {
        event.remove({ 'output': id })
     })
    
event.shapeless(Item.of('the_vault:regret_nugget', 9), ['the_vault:regret_chunk'])
event.shapeless(Item.of('the_vault:knowledge_star_essence', 9), ['the_vault:knowledge_star_shard'])
event.shapeless(Item.of('thermal:silver_ingot'), ['moremekanismprocessing:silver_ingot'])
event.shapeless(Item.of('moremekanismprocessing:silver_ingot'), ['thermal:silver_ingot'])
event.shapeless(Item.of('minecraft:snowball', 4), ['minecraft:snow_block'])
        
    event.shaped(Item.of('the_vault:vault_recycler'),
        [
            'BBB',
            'CSC',
            'CCC'
        ], {
        B: 'the_vault:vault_essence',
        S: 'minecraft:bucket',
        C: 'minecraft:iron_ingot'
    })
})