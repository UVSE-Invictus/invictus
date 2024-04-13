onEvent('item.registry', event => {
    // Board is used for computercraft
    // Used for infernal mechanism (not going to be used)
    event.create('amber_shard').displayName('Amber Shard')
    
    // Just silicon
    event.create('silicon_ingot').displayName('Silicon')
    // Just silicon fluid
    event.create('silicon_fluid')
    .thickTexture(0x212426)
    .bucketColor(0x212426)
    .displayName('Silicon Fluid')
    .luminosity(2)
    .viscosity(3000)
    // Just silicon alloy
    event.create('silicon_alloy').displayName('Silicon Alloy')
})