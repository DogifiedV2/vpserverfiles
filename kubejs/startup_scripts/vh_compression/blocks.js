let vanillaStandardCompressed = [
    'cobbled_deepslate_1',
    'cobbled_deepslate_2',
    'deepslate_1',
    'deepslate_2',
    'honeycomb_block_1',
    'nether_bricks_1',
    'glowstone_1',
    'nether_wart_block_1',
    'shroomlight_1',
    'shroomlight_2',
    'warped_wart_block_1',
    'warped_wart_block_2',
    'soul_soil_1',
    'soul_soil_2',
    'sponge_1',
    'sponge_2',
    'tuff_1',
    'tuff_2',
    'calcite_1',
    'calcite_2',
    'amethyst_block_1',
    'amethyst_block_2',
    'slime_block_1',
    "lime_concrete_powder_1",
    "black_concrete_powder_1",
    "red_concrete_powder_1",
    "green_concrete_powder_1",
    "yellow_concrete_powder_1",
    "light_blue_concrete_powder_1",
    "magenta_concrete_powder_1",
    "orange_concrete_powder_1",
    "white_concrete_powder_1",
    "brown_concrete_powder_1",
    "blue_concrete_powder_1",
    "purple_concrete_powder_1",
    "cyan_concrete_powder_1",
    "light_gray_concrete_powder_1",
    "gray_concrete_powder_1",
    "pink_concrete_powder_1",
    "lime_concrete_powder_2",
    "black_concrete_powder_2",
    "red_concrete_powder_2",
    "green_concrete_powder_2",
    "yellow_concrete_powder_2",
    "light_blue_concrete_powder_2",
    "magenta_concrete_powder_2",
    "orange_concrete_powder_2",
    "white_concrete_powder_2",
    "brown_concrete_powder_2",
    "blue_concrete_powder_2",
    "purple_concrete_powder_2",
    "cyan_concrete_powder_2",
    "light_gray_concrete_powder_2",
    "gray_concrete_powder_2",
    "pink_concrete_powder_2",
    "blackstone_1",
    "blackstone_2",
    "moss_block_1",
    "moss_block_2"
]



let vaultCompressed = [
    "vault_ingot_1",
    "omega_pog_1",
    "echo_pog_1",
    "gem_pog_1",
    "velvet_block_1",
    "ancient_copper_block_1",
    "vault_stone_1",
    "vault_stone_2",
    "vault_cobblestone_1",
    "vault_cobblestone_2",
    "ornate_block_1",
    "gilded_block_1",
    "living_rock_block_cobble_1",
    "sandy_block_1",
    "rotten_meat_block_1",
    "magic_silk_block_1",
    "vault_diamond_block_1",
    "vault_essence_1",
    "vault_essence_2",
    "vault_plating_block_1"
]


onEvent('block.registry', event => {
    event.create('the_vault:vault_plating_block').displayName('Block of Vault Plating').tagBlock('minecraft:mineable/pickaxe')
    event.create('the_vault:carbon_block').displayName('Block of Carbon').tagBlock('minecraft:mineable/pickaxe')
    vanillaStandardCompressed.forEach(block => {
        let splitId = block.split("_")
        var integerOfCompression = 0;
        for (var i = 0; i < splitId.length; i++) {
            if (splitId[i] == "1" || splitId[i] == "2") {
                integerOfCompression = parseInt(splitId[i])
                continue;
            }
            splitId[i] = splitId[i][0].toUpperCase() + splitId[i].substr(1);
        }
        let finalizedDisplayName = `${integerOfCompression}x Compressed ${splitId.join(' ').slice(0, -2)}`;

        event.create(`minecraft:${block}`).tagBlock('minecraft:mineable/pickaxe').displayName(finalizedDisplayName)
    })

    vaultCompressed.forEach(block => {
        let splitId = block.split("_")
        var integerOfCompression = 0;
        for (var i = 0; i < splitId.length; i++) {
            if (splitId[i] == "1" || splitId[i] == "2") {
                integerOfCompression = parseInt(splitId[i])
                continue;
            }
            splitId[i] = splitId[i][0].toUpperCase() + splitId[i].substr(1);
        }
        let finalizedDisplayName = `${integerOfCompression}x Compressed ${splitId.join(' ').slice(0, -2)}`;

        event.create(`the_vault:${block}`).tagBlock('minecraft:mineable/pickaxe').displayName(finalizedDisplayName)
    })
})