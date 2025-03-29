let removedOutputsLCT = [
    'lightmanscurrency:wallet_iron',
    'lightmanscurrency:wallet_gold',
    'lightmanscurrency:wallet_emerald',
    'lightmanscurrency:wallet_diamond',
    'lightmanscurrency:wallet_netherite'
];
onEvent("recipes", event => {
    removedOutputsLCT.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.custom({
        "type": "lightmanscurrency:crafting_wallet_upgrade",
        "group": "wallet_upgrading",
        "ingredients": [
            {
                "item": "lightmanscurrency:wallet_copper"
            },
            {
                "item": "the_vault:chromatic_iron_ingot"
            },
            {
                "item": "the_vault:chromatic_iron_ingot"
            },
            {
                "item": "the_vault:chromatic_iron_ingot"
            },
            {
                "item": "the_vault:chromatic_iron_ingot"
            },
            {
                "item": "the_vault:magic_silk_block"
            }
        ],
        "result": {
            "item": "lightmanscurrency:wallet_iron"
        }
    })

    event.custom({
        "type": "lightmanscurrency:crafting_wallet_upgrade",
        "group": "wallet_upgrading",
        "ingredients": [
            {
                "item": "lightmanscurrency:wallet_iron"
            },
            {
                "item": "woldsvaults:chromatic_gold_ingot"
            },
            {
                "item": "woldsvaults:chromatic_gold_ingot"
            },
            {
                "item": "woldsvaults:chromatic_gold_ingot"
            },
            {
                "item": "woldsvaults:chromatic_gold_ingot"
            },
            {
                "item": "the_vault:magic_silk_block"
            }
        ],
        "result": {
            "item": "lightmanscurrency:wallet_gold"
        }
    })

    event.custom({
        "type": "lightmanscurrency:crafting_wallet_upgrade",
        "group": "wallet_upgrading",
        "ingredients": [
            {
                "item": "lightmanscurrency:wallet_gold"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "minecraft:emerald_block"
            },
            {
                "item": "the_vault:gem_pog"
            }
        ],
        "result": {
            "item": "lightmanscurrency:wallet_emerald"
        }
    })

    event.custom({
        "type": "lightmanscurrency:crafting_wallet_upgrade",
        "group": "wallet_upgrading",
        "ingredients": [
            {
                "item": "lightmanscurrency:wallet_emerald"
            },
            {
                "item": "the_vault:vault_diamond_block"
            },
            {
                "item": "the_vault:vault_diamond_block"
            },
            {
                "item": "the_vault:vault_diamond_block"
            },
            {
                "item": "the_vault:vault_diamond_block"
            },
            {
                "item": "the_vault:gem_pog"
            }
        ],
        "result": {
            "item": "lightmanscurrency:wallet_diamond"
        }
    })

    event.custom({
        "type": "lightmanscurrency:crafting_wallet_upgrade",
        "group": "wallet_upgrading",
        "ingredients": [
            {
                "item": "lightmanscurrency:wallet_diamond"
            },
            {
                "item": "the_vault:black_chromatic_steel_ingot"
            },
            {
                "item": "the_vault:black_chromatic_steel_ingot"
            },
            {
                "item": "the_vault:black_chromatic_steel_ingot"
            },
            {
                "item": "the_vault:black_chromatic_steel_ingot"
            },
            {
                "item": "the_vault:gem_pog"
            }
        ],
        "result": {
            "item": "lightmanscurrency:wallet_netherite"
        }
    })



    // event.shaped(Item.of('lightmanscurrency:wallet_iron'),
    //     [
    //         'PPP',
    //         'PTP',
    //         'PPP'
    //     ], {
    //     P: 'the_vault:chromatic_iron_ingot',
    //     T: 'lightmanscurrency:wallet_copper'
    // })

    // event.shaped(Item.of('lightmanscurrency:wallet_gold'),
    //     [
    //         'XPX',
    //         'PTP',
    //         'XPX'
    //     ], {
    //     P: 'minecraft:gold_ingot',
    //     X: 'the_vault:chromatic_steel_ingot',
    //     T: 'lightmanscurrency:wallet_iron'
    // })

    // event.shaped(Item.of('lightmanscurrency:wallet_emerald'),
    //     [
    //         'XPX',
    //         'PTP',
    //         'XPX'
    //     ], {
    //     P: 'minecraft:emerald',
    //     X: 'the_vault:chromatic_steel_ingot',
    //     T: 'lightmanscurrency:wallet_gold'
    // })

    // event.shaped(Item.of('lightmanscurrency:wallet_diamond'),
    //     [
    //         'XPX',
    //         'PTP',
    //         'XPX'
    //     ], {
    //     P: 'the_vault:vault_diamond',
    //     X: 'the_vault:perfect_larimar',
    //     T: 'lightmanscurrency:wallet_emerald'
    // })

    // event.shaped(Item.of('lightmanscurrency:wallet_netherite'),
    //     [
    //         'XPX',
    //         'PTP',
    //         'XPX'
    //     ], {
    //     P: 'the_vault:black_chromatic_steel_ingot',
    //     X: 'minecraft:netherite_ingot',
    //     T: 'lightmanscurrency:wallet_diamond'
    // })

})