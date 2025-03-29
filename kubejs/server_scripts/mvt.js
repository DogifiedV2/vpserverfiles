let removedOutputsENT = [
    'morevaulttables:jewel_sack_opener_block',
    'vaultjp:jewel_purpuser',
    'the_vault:crystal_seal_ordinator_build',
    "woldsvaults:mob_barrier_red",
    "tropicraft:pina_colada",
    "entangled:block",
    "entangled:item"
];
onEvent("recipes", event => {
    removedOutputsENT.forEach(id => {
        event.remove({ 'output': `${id}` })
    })
    
    event.shaped(Item.of('vaultjp:jewel_purpuser'),
        [
            'ACB',
            'CDC',
            'E E'
        ], {
        A: 'the_vault:vault_jewel_application_station',
        B: 'the_vault:vault_recycler',
        C: 'the_vault:chromatic_steel_block',
        D: 'the_vault:echo_pog',
        E: 'the_vault:black_chromatic_steel_ingot'
    })
})