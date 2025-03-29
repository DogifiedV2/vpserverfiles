let removedOutputsFSS = [
];
let functionalDrawerTypes = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped', 'architects_palette_twisted', 'botania_livingwood', 'botania_dreamwood', 'byg_baobab', 'byg_cherry', 'byg_aspen', 'byg_cika', 'byg_cypress', 'byg_ebony', 'byg_ether', 'byg_fir', 'byg_green_enchanted', 'byg_holly', 'byg_jacaranda', 'byg_lament', 'byg_mahogany', 'byg_mangrove', 'byg_maple', 'byg_nightshade', 'byg_palm', 'byg_pine', 'byg_rainbow_eucalyptus', 'byg_redwood', 'byg_skyris', 'byg_willow', 'byg_witch_hazel', 'byg_zelkova'];

onEvent("recipes", event => {
    const woodMappings = {
        'architects_palette_twisted': 'architects_palette',
        'botania_livingwood': 'botania',
        'botania_dreamwood': 'botania',
        'byg_baobab': 'byg',
        'byg_cherry': 'byg',
        'byg_aspen': 'byg',
        'byg_cika': 'byg',
        'byg_cypress': 'byg',
        'byg_ebony': 'byg',
        'byg_ether': 'byg',
        'byg_fir': 'byg',
        'byg_green_enchanted': 'byg',
        'byg_holly': 'byg',
        'byg_jacaranda': 'byg',
        'byg_lament': 'byg',
        'byg_mahogany': 'byg',
        'byg_mangrove': 'byg',
        'byg_maple': 'byg',
        'byg_nightshade': 'byg',
        'byg_palm': 'byg',
        'byg_pine': 'byg',
        'byg_rainbow_eucalyptus': 'byg',
        'byg_redwood': 'byg',
        'byg_skyris': 'byg',
        'byg_willow': 'byg',
        'byg_witch_hazel': 'byg',
        'byg_zelkova': 'byg'
    };

    const specialIngredients = {
        'botania_livingwood': 'livingwood_log',
        'botania_dreamwood': 'dreamwood_log',
        'architects_palette_twisted': 'twisted_log'
    };

    const specialPlanks = {
        'botania_livingwood': 'livingwood_planks',
        'botania_dreamwood': 'dreamwood_planks',
        'architects_palette_twisted': 'twisted_planks'
    };

    functionalDrawerTypes.forEach((woodType) => {
        event.remove({ 'output': `functionalstorage:${woodType}_1` });
        event.remove({ 'output': `functionalstorage:${woodType}_2` });
        event.remove({ 'output': `functionalstorage:${woodType}_4` });

        const modId = woodMappings[woodType] || 'minecraft';
        let ingredient;
        
        if (woodType === 'warped' || woodType === 'crimson') {
            ingredient = woodType + '_stem';
        } else if (specialIngredients[woodType]) {
            ingredient = specialIngredients[woodType];
        } else if (woodType.startsWith('byg_')) {
            ingredient = woodType.replace('byg_', '') + '_log';
        } else {
            ingredient = woodType + '_log';
        }

        event.shaped(`functionalstorage:${woodType}_1`,
            ['GXG', 'XDX', 'GXG'],
            {
                G: 'the_vault:driftwood_planks',
                X: 'the_vault:chromatic_iron_ingot',
                D: `${modId}:${ingredient}`
            }
        );

        let planksIngredient;
        if (specialPlanks[woodType]) {
            planksIngredient = specialPlanks[woodType];
        } else if (woodType.startsWith('byg_')) {
            planksIngredient = woodType.replace('byg_', '') + '_planks';
        } else {
            planksIngredient = woodType + '_planks';
        }

        event.shaped(`functionalstorage:${woodType}_2`,
            ['GXG', 'XDX', 'GXG'],
            {
                G: 'the_vault:driftwood_planks',
                X: 'the_vault:chromatic_iron_ingot',
                D: `${modId}:${planksIngredient}`
            }
        );

        event.shaped(`functionalstorage:${woodType}_4`,
            ['GXG', 'XDX', 'GXG'],
            {
                G: 'the_vault:driftwood_planks',
                X: 'the_vault:chromatic_iron_ingot',
                D: `${modId}:${planksIngredient}`
            }
        );
    });

    event.shaped(Item.of(`functionalstorage:framed_1`),
        [
            'GXG',
            'XDX',
            'GXG'
        ], {
        G: 'the_vault:driftwood_planks',
        X: 'the_vault:chromatic_iron_ingot',
        D: `framedblocks:framed_cube`
    }).id('functionalstorage:framed_1')

    event.shaped(Item.of(`functionalstorage:framed_2`),
        [
            'GXG',
            'XDX',
            'GXG'
        ], {
        G: 'the_vault:driftwood_planks',
        X: 'the_vault:chromatic_iron_ingot',
        D: `framedblocks:framed_slab`
    }).id('functionalstorage:framed_2')

    event.shaped(Item.of(`functionalstorage:framed_4`),
        [
            'GXG',
            'XDX',
            'GXG'
        ], {
        G: 'the_vault:driftwood_planks',
        X: 'the_vault:chromatic_iron_ingot',
        D: `framedblocks:framed_button`
    }).id('functionalstorage:framed_4')

    event.shaped(Item.of(`functionalstorage:compacting_drawer`),
        [
            'GXG',
            'IDI',
            'GXG'
        ], {
        G: 'the_vault:chromatic_steel_ingot',
        X: 'the_vault:extraordinary_larimar',
        I: 'the_vault:vault_diamond',
        D: '#functionalstorage:drawer'
    }).id('functionalstorage:compacting_drawer')

    event.shapeless('functionalstorage:compacting_framed_drawer', ['functionalstorage:compacting_drawer', 'framedblocks:framed_cube']).id('functionalstorage:compacting_framed_drawer')

    event.shapeless('functionalstorage:fluid_1', ['#functionalstorage:drawer', 'minecraft:bucket']).id('functionalstorage:fluid_1')
    event.shapeless('functionalstorage:fluid_2', ['functionalstorage:fluid_1']).id('functionalstorage:fluid_2')
    event.shapeless('functionalstorage:fluid_4', ['functionalstorage:fluid_2']).id('functionalstorage:fluid_4')

    event.shaped(Item.of(`functionalstorage:storage_controller`),
        [
            'GXG',
            'IDI',
            'GXG'
        ], {
        G: 'the_vault:chromatic_iron_block',
        X: 'the_vault:extraordinary_larimar',
        I: 'the_vault:black_chromatic_steel_ingot',
        D: 'the_vault:gem_pog'
    }).id('functionalstorage:storage_controller')

    event.shaped(Item.of(`functionalstorage:controller_extension`),
        [
            'BOB',
            'XGX',
            'BXB'
        ], {
        B: 'the_vault:polished_vault_stone',
        O: 'the_vault:vault_diamond',
        X: 'the_vault:chromatic_steel_ingot',
        G: '#functionalstorage:drawer'
    }).id('functionalstorage:controller_extension')

    event.shaped(Item.of(`functionalstorage:linking_tool`),
        [
            'GGD',
            'GXD',
            'GOG'
        ], {
        G: 'the_vault:magic_silk',
        O: 'the_vault:vault_diamond',
        D: 'woldsvaults:chromatic_gold_ingot',
        X: '#functionalstorage:drawer'
    }).id('functionalstorage:linking_tool')

    event.shaped(Item.of(`functionalstorage:copper_upgrade`),
        [
            'cCc',
            'SDS',
            'cCc'
        ], {
        c: 'minecraft:copper_ingot',
        C: 'minecraft:copper_block',
        S: '#balm:wooden_chests',
        D: '#functionalstorage:drawer'
    }).id('functionalstorage:copper_upgrade')

    event.shaped(Item.of(`functionalstorage:gold_upgrade`),
        [
            'ccc',
            'SDS',
            'cCc'
        ], {
        c: 'woldsvaults:chromatic_gold_ingot',
        S: 'the_vault:perfect_larimar',
        D: 'functionalstorage:copper_upgrade',
        C: 'woldsvaults:chromatic_gold_block'
    }).id('functionalstorage:gold_upgrade')

    event.shaped(Item.of(`functionalstorage:diamond_upgrade`),
        [
            'cCc',
            'SDS',
            'cCc'
        ], {
        c: 'the_vault:vault_diamond',
        C: 'the_vault:vault_diamond_block',
        S: 'the_vault:extraordinary_larimar',
        D: 'functionalstorage:gold_upgrade'
    }).id('functionalstorage:diamond_upgrade')

    event.shaped(Item.of(`functionalstorage:netherite_upgrade`),
        [
            'cCc',
            'SDS',
            'cCc'
        ], {
        c: 'minecraft:netherite_ingot',
        C: 'the_vault:vault_diamond_block',
        S: 'the_vault:perfect_black_opal',
        D: 'functionalstorage:diamond_upgrade'
    }).id('functionalstorage:netherite_upgrade')

    event.shaped(Item.of(`functionalstorage:simple_compacting_drawer`),
        [
            'SSS',
            'SDP',
            'SIS'
        ], {
        S: 'the_vault:polished_vault_stone',
        D: '#functionalstorage:drawer',
        I: 'the_vault:chromatic_steel_ingot',
        P: 'minecraft:piston'
    }).id('functionalstorage:simple_compacting_drawer')

    event.shaped(Item.of(`functionalstorage:collector_upgrade`),
        [
            'SHS',
            'RDR',
            'SHS'
        ], {
        S: 'the_vault:vault_diamond',
        H: 'minecraft:hopper',
        R: 'the_vault:vault_essence',
        D: '#functionalstorage:drawer'
    }).id('functionalstorage:collector_upgrade')

    event.shaped(Item.of(`functionalstorage:puller_upgrade`),
        [
            'SHS',
            'SDS',
            'SRS'
        ], {
        S: 'the_vault:vault_diamond',
        H: 'minecraft:hopper',
        R: 'the_vault:vault_essence',
        D: '#functionalstorage:drawer'
    }).id('functionalstorage:puller_upgrade')

    event.shaped(Item.of(`functionalstorage:pusher_upgrade`),
        [
            'SRS',
            'SDS',
            'SHS'
        ], {
        S: 'the_vault:vault_diamond',
        H: 'minecraft:hopper',
        R: 'the_vault:vault_essence',
        D: '#functionalstorage:drawer'
    }).id('functionalstorage:pusher_upgrade')

    event.shaped(Item.of(`functionalstorage:void_upgrade`),
        [
            'OOO',
            'BDB',
            'OOO'
        ], {
        O: 'minecraft:obsidian',
        B: 'the_vault:gem_black_opal',
        D: '#functionalstorage:drawer'
    }).id('functionalstorage:void_upgrade')

    event.shaped(Item.of(`functionalstorage:configuration_tool`),
        [
            'GGD',
            'GXD',
            'GOG'
        ], {
        G: 'the_vault:magic_silk',
        O: 'minecraft:emerald',
        D: 'woldsvaults:chromatic_gold_ingot',
        X: '#functionalstorage:drawer'
    }).id('functionalstorage:configuration_tool')

    event.shaped(Item.of(`functionalstorage:ender_drawer`),
        [
            'OXO',
            'DED',
            'OXO'
        ], {
        O: 'minecraft:obsidian',
        E: 'minecraft:ender_chest',
        D: '#functionalstorage:drawer',
        X: 'the_vault:perfect_larimar'
    }).id('functionalstorage:ender_drawer')

    event.shaped(Item.of(`functionalstorage:armory_cabinet`),
        [
            'SIS',
            'DRD',
            'SIS'
        ], {
        S: 'the_vault:polished_vault_stone',
        D: '#functionalstorage:drawer',
        I: 'the_vault:black_chromatic_steel_ingot',
        R: 'the_vault:chromatic_steel_block'
    }).id('functionalstorage:armory_cabinet')
})