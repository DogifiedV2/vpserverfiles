let removedOutputsHNN = [
    'hostilenetworks:deep_learner',
    'hostilenetworks:blank_data_model',
    'hostilenetworks:sim_chamber',
    'hostilenetworks:loot_fabricator',
    'hostilenetworks:empty_prediction'
];
onEvent("recipes", event => {
    removedOutputsHNN.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    let vanillaMobTypes = [
        'zombie',
        'creeper',
        'blaze',
        'bee',
        'chicken',
        'cod',
        'cow',
        'drowned',
        'elder_guardian',
        'enderman',
        'evoker',
        'ghast',
        'glow_squid',
        'guardian',
        'hoglin',
        'magma_cube',
        'mooshroom',
        'phantom',
        'pig',
        'polar_bear',
        'rabbit',
        'sheep',
        'shulker',
        'skeleton',
        'slime',
        'spider',
        'squid',
        'vindicator',
        'witch',
        'wither_skeleton',
        'zombified_piglin',
        'dolphin',
        'tropical_fish',
        'salmon',
        'ravager',
        'pufferfish'
    ]

    let thermalMobTypes = ['blizz', 'blitz', 'basalz']

    let quarkMobTypes = ['wraith', 'frog', 'toretoise']

    let cloudStorageMobTypes = ['bloviator', 'badloon']

    let cageriumMobTypes = ['wither', 'ender_dragon', 'iron_golem']

    let tropicraftMobTypes = ['iguana']

    let alexsMobsTypes = ['flutter']

    // event.shaped(Item.of('hostilenetworks:deep_learner'),
    //     [
    //         'PRP',
    //         'RTR',
    //         'PXP'
    //     ], {
    //     P: 'the_vault:chromatic_steel_ingot',
    //     R: 'the_vault:vault_essence',
    //     X: 'the_vault:perfect_black_opal',
    //     T: '#forge:glass_panes'
    // })

    event.shaped(Item.of('create:creative_blaze_cake'),
        [
            'PIP',
            'RTR',
            'PXP'
        ], {
        P: 'the_vault:packed_vault_meat_block',
        R: 'the_vault:echo_pog',
        X: 'woldsvaults:wold_star',
        I: 'woldsvaults:compressed_vault_diamond_block',
        T: 'create:blaze_cake'
    })

    event.shaped(Item.of('hostilenetworks:blank_data_model'),
    [
        'PRP',
        'XTX',
        'PIP'
    ], {
    P: 'the_vault:perfect_larimar',
    R: 'the_vault:carbon',
    X: 'the_vault:vault_essence',
    I: 'woldsvaults:chromatic_gold_ingot',
    T: 'minecraft:smooth_stone'
})

    event.shaped(Item.of('hostilenetworks:sim_chamber'),
        [
            'BGB',
            'POP',
            'LRL'
        ], {
        B: 'the_vault:black_chromatic_steel_ingot',
        G: '#forge:glass_panes',
        P: 'the_vault:extraordinary_larimar',
        O: 'minecraft:obsidian',
        L: 'the_vault:vault_diamond_block',
        R: 'minecraft:comparator'
    })

    event.shaped(Item.of('hostilenetworks:loot_fabricator'),
        [
            ' G ',
            'POP',
            'LRL'
        ], {
        G: 'the_vault:extraordinary_black_opal',
        P: 'the_vault:vault_diamond_block',
        O: 'minecraft:obsidian',
        L: 'woldsvaults:chromatic_gold_block',
        R: 'minecraft:comparator'
    })

    vanillaMobTypes.forEach(mob => {
        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:6,id:"hostilenetworks:${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `minecraft:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{id:"hostilenetworks:${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:54,id:"hostilenetworks:${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `minecraft:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:6,id:"hostilenetworks:${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:354,id:"hostilenetworks:${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `minecraft:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:54,id:"hostilenetworks:${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:1254,id:"hostilenetworks:${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `minecraft:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:354,id:"hostilenetworks:${mob}"}}`)
        })
    })

    cageriumMobTypes.forEach(mob => {
        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:6,id:"hostilenetworks:${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `cagerium:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{id:"hostilenetworks:${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:54,id:"hostilenetworks:${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `cagerium:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:6,id:"hostilenetworks:${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:354,id:"hostilenetworks:${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `cagerium:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:54,id:"hostilenetworks:${mob}"}}`)
        })

        event.shaped(Item.of('hostilenetworks:data_model', `{data_model:{data:1254,id:"hostilenetworks:${mob}"}}`),
            [
                ' E ',
                'ZMZ',
                ' Z '
            ], {
            Z: 'the_vault:vault_essence',
            E: `cagerium:${mob}_spawn_egg`,
            M: Item.of('hostilenetworks:data_model', `{data_model:{data:354,id:"hostilenetworks:${mob}"}}`)
        })
    })

    event.shapeless('16x hostilenetworks:empty_prediction', ['4x #forge:glass_panes', 'minecraft:lapis_lazuli', 'the_vault:chromatic_iron_ingot'])



})