onEvent("recipes", event => {
    /**
     * Make sure that ingredients and outputs are ItemStackJS objects (can be created using Item.of()), using item ids alone will not work
     */
    function strongboxUpgrade(result, key) {
        return event.custom({
            type: "sophisticatedstorage:storage_tier_upgrade",
            key: key,
            pattern: ['IXI', 'XCX', 'IXI'],
            result: result
        })
    }
})
