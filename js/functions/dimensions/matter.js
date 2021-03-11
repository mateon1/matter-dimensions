functions['matter_1_cost'] = (amt_bought) => {
    let base = 10;
    // a01_4: base is decreased by 1
    if (me.milestones['a01_4'].is_active()) base -= 1;
    // a02_4: base is decreased by 1
    if (me.milestones['a02_4'].is_active()) base -= 1;
    // a03_4: base is decreased by 1
    if (me.milestones['a03_4'].is_active()) base -= 1;

    var base_cost = big(base).pow(big(amt_bought).mult(amt_bought+1).div(2));
    return base_cost;
};
functions['matter_2_cost'] = (amt_bought) => {
    let base = 10;
    // a01_4: base is decreased by 1
    if (me.milestones['a01_4'].is_active()) base -= 1;
    // a02_4: base is decreased by 1
    if (me.milestones['a02_4'].is_active()) base -= 1;
    // a03_4: base is decreased by 1
    if (me.milestones['a03_4'].is_active()) base -= 1;

    var base_cost = big(base).pow(big(amt_bought).mult(amt_bought+3).div(2).add(1));
    return base_cost;
};
functions['matter_3_cost'] = (amt_bought) => {
    let base = 10;
    // a01_4: base is decreased by 1
    if (me.milestones['a01_4'].is_active()) base -= 1;
    // a02_4: base is decreased by 1
    if (me.milestones['a02_4'].is_active()) base -= 1;
    // a03_4: base is decreased by 1
    if (me.milestones['a03_4'].is_active()) base -= 1;

    var base_cost = big(base).pow(big(amt_bought).mult(amt_bought+5).div(2).add(2));
    return base_cost;
};
functions['matter_4_cost'] = (amt_bought) => {
    let base = 10;
    // a01_4: base is decreased by 1
    if (me.milestones['a01_4'].is_active()) base -= 1;
    // a02_4: base is decreased by 1
    if (me.milestones['a02_4'].is_active()) base -= 1;
    // a03_4: base is decreased by 1
    if (me.milestones['a03_4'].is_active()) base -= 1;

    var base_cost = big(base).pow(big(amt_bought).mult(amt_bought+7).div(2).add(4));
    return base_cost;
};
functions['matter_5_cost'] = (amt_bought) => {
    let base = 10;
    // a01_4: base is decreased by 1
    if (me.milestones['a01_4'].is_active()) base -= 1;
    // a02_4: base is decreased by 1
    if (me.milestones['a02_4'].is_active()) base -= 1;
    // a03_4: base is decreased by 1
    if (me.milestones['a03_4'].is_active()) base -= 1;

    var base_cost = big(base).pow(big(amt_bought).mult(amt_bought+9).div(2).add(8));
    return base_cost;
};
functions['matter_6_cost'] = (amt_bought) => {
    let base = 10;
    // a01_4: base is decreased by 1
    if (me.milestones['a01_4'].is_active()) base -= 1;
    // a02_4: base is decreased by 1
    if (me.milestones['a02_4'].is_active()) base -= 1;
    // a03_4: base is decreased by 1
    if (me.milestones['a03_4'].is_active()) base -= 1;

    var base_cost = big(base).pow(big(amt_bought).mult(amt_bought+11).div(2).add(16));
    return base_cost;
};
functions['matter_7_cost'] = (amt_bought) => {
    let base = 10;
    // a01_4: base is decreased by 1
    if (me.milestones['a01_4'].is_active()) base -= 1;
    // a02_4: base is decreased by 1
    if (me.milestones['a02_4'].is_active()) base -= 1;
    // a03_4: base is decreased by 1
    if (me.milestones['a03_4'].is_active()) base -= 1;

    var base_cost = big(base).pow(big(amt_bought).mult(amt_bought+13).div(2).add(32));
    return base_cost;
};
functions['matter_8_cost'] = (amt_bought) => {
    let base = 10;
    // a01_4: base is decreased by 1
    if (me.milestones['a01_4'].is_active()) base -= 1;
    // a02_4: base is decreased by 1
    if (me.milestones['a02_4'].is_active()) base -= 1;
    // a03_4: base is decreased by 1
    if (me.milestones['a03_4'].is_active()) base -= 1;

    var base_cost = big(base).pow(big(amt_bought).mult(amt_bought+15).div(2).add(64));
    return base_cost;
};
functions['matter_9_cost'] = (amt_bought) => {
    let base = 10;
    // a01_4: base is decreased by 1
    if (me.milestones['a01_4'].is_active()) base -= 1;
    // a02_4: base is decreased by 1
    if (me.milestones['a02_4'].is_active()) base -= 1;
    // a03_4: base is decreased by 1
    if (me.milestones['a03_4'].is_active()) base -= 1;

    var base_cost = big(base).pow(big(amt_bought).mult(amt_bought+17).div(2).add(128));
    return base_cost;
};
functions['matter_10_cost'] = (amt_bought) => {
    let base = 10;
    // a01_4: base is decreased by 1
    if (me.milestones['a01_4'].is_active()) base -= 1;
    // a02_4: base is decreased by 1
    if (me.milestones['a02_4'].is_active()) base -= 1;
    // a03_4: base is decreased by 1
    if (me.milestones['a03_4'].is_active()) base -= 1;

    var base_cost = big(base).pow(big(amt_bought).mult(amt_bought+19).div(2).add(256));
    return base_cost;
};
functions['matter_11_cost'] = (amt_bought) => {
    let base = 10;
    // a01_4: base is decreased by 1
    if (me.milestones['a01_4'].is_active()) base -= 1;
    // a02_4: base is decreased by 1
    if (me.milestones['a02_4'].is_active()) base -= 1;
    // a03_4: base is decreased by 1
    if (me.milestones['a03_4'].is_active()) base -= 1;

    var base_cost = big(base).pow(big(amt_bought).mult(amt_bought+21).div(2).add(512));
    return base_cost;
};
functions['matter_12_cost'] = (amt_bought) => {
    let base = 10;
    // a01_4: base is decreased by 1
    if (me.milestones['a01_4'].is_active()) base -= 1;
    // a02_4: base is decreased by 1
    if (me.milestones['a02_4'].is_active()) base -= 1;
    // a03_4: base is decreased by 1
    if (me.milestones['a03_4'].is_active()) base -= 1;

    var base_cost = big(base).pow(big(amt_bought).mult(amt_bought+23).div(2).add(1024));
    return base_cost;
};

functions['matter_1_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // p15: multiplier per 1st Matter Dimension becomes x11
    base_exp = me.upgrades["p15"].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // p12: bonus to 1st Matter Dims
    base_pow = base_pow.mult(me.upgrades["p12"].get_effect());
    // achievement 18: x8 power to matter dimensions
    if (me.achievements['18'].complete) base_pow = base_pow.mult(8);
    // light boosts dimensions
    base_pow = base_pow.mult(power_light_production(me));
    // p32: bonus to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['p32'].get_effect());
    // p34: bonus to all Matter Dimensions
    if (me.upgrades['p34'].is_active()) base_pow = base_pow.mult(me.upgrades['p34'].get_effect());
    // n11: bonus to all Matter Dimensions
    if (me.upgrades['n11'].is_active()) base_pow = base_pow.mult(me.upgrades['n11'].get_effect());
    // n13: bonus to all Matter Dimensions
    if (me.upgrades['n13'].is_active()) base_pow = base_pow.mult(me.upgrades['n13'].get_effect());
    // v111: x1e6 power to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['v111'].get_effect());
    // v161: bonus to all Matter Dimensions
    if (me.upgrades['v161'].is_active()) base_pow = base_pow.mult(me.upgrades['v161'].get_effect());
    // v191: bonus to all Matter Dimensions
    if (me.upgrades['v191'].is_active()) base_pow = base_pow.mult(me.upgrades['v191'].get_effect());
    // inflation boosts 1st Matter Dimension
    base_pow = base_pow.mult(power_inflation_matter(me));
    // red waves boost Matter Dimensions
    base_pow = base_pow.mult(wave_effect('red'));
    // p51: Photonic dimensions boost Matter dimensions
    base_pow = base_pow.mult(me.upgrades['p51'].get_effect().pow(me.dimensions['photonic_1'].amt_bought));
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds(me).pow(me.dimensions['dimensional_1'].amt_bought));

    return base_pow;
};
functions['matter_2_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // p25: multiplier per 2nd Matter Dimension becomes x29
    base_exp = me.upgrades["p25"].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // achievement 17: +10% power to 2nd matter dimension
    if (me.achievements['17'].complete) base_pow = base_pow.mult(1.1);
    // achievement 18: x8 power to matter dimensions
    if (me.achievements['18'].complete) base_pow = base_pow.mult(8);
    // g23: light also boosts 2nd Matter Dimension
    base_pow = base_pow.mult(me.upgrades['g23'].get_effect());
    // p32: bonus to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['p32'].get_effect());
    // p34: bonus to all Matter Dimensions
    if (me.upgrades['p34'].is_active()) base_pow = base_pow.mult(me.upgrades['p34'].get_effect());
    // n11: bonus to all Matter Dimensions
    if (me.upgrades['n11'].is_active()) base_pow = base_pow.mult(me.upgrades['n11'].get_effect());
    // n13: bonus to all Matter Dimensions
    if (me.upgrades['n13'].is_active()) base_pow = base_pow.mult(me.upgrades['n13'].get_effect());
    // v111: x1e6 power to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['v111'].get_effect());
    // achievement 76: x666 power to prime-numbered Matter Dimensions
    if (me.achievements['76'].complete) base_pow = base_pow.mult(666);
    // v161: bonus to all Matter Dimensions
    if (me.upgrades['v161'].is_active()) base_pow = base_pow.mult(me.upgrades['v161'].get_effect());
    // v191: bonus to all Matter Dimensions
    if (me.upgrades['v191'].is_active()) base_pow = base_pow.mult(me.upgrades['v191'].get_effect());
    // d62: bonus to 2nd Matter Dimension
    base_pow = base_pow.mult(me.upgrades['d62'].get_effect());
    // red waves boost Matter Dimensions
    base_pow = base_pow.mult(wave_effect('red'));
    // p51: Photonic dimensions boost Matter dimensions
    base_pow = base_pow.mult(me.upgrades['p51'].get_effect().pow(me.dimensions['photonic_2'].amt_bought));
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (me.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds(me).pow(me.dimensions['dimensional_2'].amt_bought));

    return base_pow;
};
functions['matter_3_pow'] = (amt_bought, amt) => {
    var base_exp = big(2);
    // p35: multiplier per 2nd Matter Dimension becomes x47
    base_exp = me.upgrades["p35"].get_effect();

    var base_pow = base_exp.pow(amt_bought);
    // achievement 18: x8 power to matter dimensions
    if (me.achievements['18'].complete) base_pow = base_pow.mult(8);
    // p32: bonus to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['p32'].get_effect());
    // p34: bonus to all Matter Dimensions
    if (me.upgrades['p34'].is_active()) base_pow = base_pow.mult(me.upgrades['p34'].get_effect());
    // n11: bonus to all Matter Dimensions
    if (me.upgrades['n11'].is_active()) base_pow = base_pow.mult(me.upgrades['n11'].get_effect());
    // n13: bonus to all Matter Dimensions
    if (me.upgrades['n13'].is_active()) base_pow = base_pow.mult(me.upgrades['n13'].get_effect());
    // v111: x1e6 power to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['v111'].get_effect());
    // achievement 76: x666 power to prime-numbered Matter Dimensions
    if (me.achievements['76'].complete) base_pow = base_pow.mult(666);
    // v161: bonus to all Matter Dimensions
    if (me.upgrades['v161'].is_active()) base_pow = base_pow.mult(me.upgrades['v161'].get_effect());
    // v191: bonus to all Matter Dimensions
    if (me.upgrades['v191'].is_active()) base_pow = base_pow.mult(me.upgrades['v191'].get_effect());
    // red waves boost Matter Dimensions
    base_pow = base_pow.mult(wave_effect('red'));
    // p51: Photonic dimensions boost Matter dimensions
    base_pow = base_pow.mult(me.upgrades['p51'].get_effect().pow(me.dimensions['photonic_3'].amt_bought));
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds(me).pow(me.dimensions['dimensional_3'].amt_bought));

    // v121: the power is at least square of 4th MD power
    if (me.upgrades['v121'].is_active()) base_pow = base_pow.max(me.upgrades['v121'].get_effect()); 
    // v122: the power is at least square root of 2nd MD power
    if (me.upgrades['v122'].is_active()) base_pow = base_pow.max(me.upgrades['v122'].get_effect()); 

    // Vacuumic Challenge 3: 3rd dimensions do not produce anything
    if (me.challenges['v3'].inC()) base_pow = big(0);

    return base_pow;
};
functions['matter_4_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // p45: multiplier per 2nd Matter Dimension becomes x71
    base_exp = me.upgrades["p45"].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // achievement 18: x8 power to matter dimensions
    if (me.achievements['18'].complete) base_pow = base_pow.mult(8);
    // p32: bonus to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['p32'].get_effect());
    // p34: bonus to all Matter Dimensions
    if (me.upgrades['p34'].is_active()) base_pow = base_pow.mult(me.upgrades['p34'].get_effect());
    // n11: bonus to all Matter Dimensions
    if (me.upgrades['n11'].is_active()) base_pow = base_pow.mult(me.upgrades['n11'].get_effect());
    // n13: bonus to all Matter Dimensions
    if (me.upgrades['n13'].is_active()) base_pow = base_pow.mult(me.upgrades['n13'].get_effect());
    // v111: x1e6 power to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['v111'].get_effect());
    // v161: bonus to all Matter Dimensions
    if (me.upgrades['v161'].is_active()) base_pow = base_pow.mult(me.upgrades['v161'].get_effect());
    // v191: bonus to all Matter Dimensions
    if (me.upgrades['v191'].is_active()) base_pow = base_pow.mult(me.upgrades['v191'].get_effect());
    // red waves boost Matter Dimensions
    base_pow = base_pow.mult(wave_effect('red'));
    // p51: Photonic dimensions boost Matter dimensions
    base_pow = base_pow.mult(me.upgrades['p51'].get_effect().pow(me.dimensions['photonic_4'].amt_bought));
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (me.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds(me).pow(me.dimensions['dimensional_4'].amt_bought));

    // v101: bonus to 4th Matter Dimension based on 1st and 2nd Matter Dimension multipliers
    if (me.upgrades['v101'].is_active()) base_pow = base_pow.mult(me.upgrades['v101'].get_effect());

    return base_pow;
};
functions['matter_5_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // p55: multiplier per other Matter Dimensions becomes x97
    base_exp = me.upgrades["p55"].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // achievement 18: x8 power to matter dimensions
    if (me.achievements['18'].complete) base_pow = base_pow.mult(8);
    // p32: bonus to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['p32'].get_effect());
    // p34: bonus to all Matter Dimensions
    if (me.upgrades['p34'].is_active()) base_pow = base_pow.mult(me.upgrades['p34'].get_effect());
    // n11: bonus to all Matter Dimensions
    if (me.upgrades['n11'].is_active()) base_pow = base_pow.mult(me.upgrades['n11'].get_effect());
    // n13: bonus to all Matter Dimensions
    if (me.upgrades['n13'].is_active()) base_pow = base_pow.mult(me.upgrades['n13'].get_effect());
    // v111: x1e6 power to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['v111'].get_effect());
    // achievement 76: x666 power to prime-numbered Matter Dimensions
    if (me.achievements['76'].complete) base_pow = base_pow.mult(666);
    // v161: bonus to all Matter Dimensions
    if (me.upgrades['v161'].is_active()) base_pow = base_pow.mult(me.upgrades['v161'].get_effect());
    // v191: bonus to all Matter Dimensions
    if (me.upgrades['v191'].is_active()) base_pow = base_pow.mult(me.upgrades['v191'].get_effect());
    // red waves boost Matter Dimensions
    base_pow = base_pow.mult(wave_effect('red'));
    // a05: boost all Matter Dims, starting from 5th
    base_pow = base_pow.mult(me.upgrades['a05'].get_effect());
    // p51: Photonic dimensions boost Matter dimensions
    base_pow = base_pow.mult(me.upgrades['p51'].get_effect().pow(me.dimensions['photonic_5'].amt_bought));
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds(me).pow(me.dimensions['dimensional_5'].amt_bought));

    return base_pow;
};
functions['matter_6_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // p55: multiplier per other Matter Dimensions becomes x97
    base_exp = me.upgrades["p55"].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // achievement 18: x8 power to matter dimensions
    if (me.achievements['18'].complete) base_pow = base_pow.mult(8);
    // p32: bonus to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['p32'].get_effect());
    // p34: bonus to all Matter Dimensions
    if (me.upgrades['p34'].is_active()) base_pow = base_pow.mult(me.upgrades['p34'].get_effect());
    // n11: bonus to all Matter Dimensions
    if (me.upgrades['n11'].is_active()) base_pow = base_pow.mult(me.upgrades['n11'].get_effect());
    // n13: bonus to all Matter Dimensions
    if (me.upgrades['n13'].is_active()) base_pow = base_pow.mult(me.upgrades['n13'].get_effect());
    // v111: x1e6 power to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['v111'].get_effect());
    // v161: bonus to all Matter Dimensions
    if (me.upgrades['v161'].is_active()) base_pow = base_pow.mult(me.upgrades['v161'].get_effect());
    // v191: bonus to all Matter Dimensions
    if (me.upgrades['v191'].is_active()) base_pow = base_pow.mult(me.upgrades['v191'].get_effect());
    // red waves boost Matter Dimensions
    base_pow = base_pow.mult(wave_effect('red'));
    // a05: boost all Matter Dims, starting from 5th
    base_pow = base_pow.mult(me.upgrades['a05'].get_effect());
    // p51: Photonic dimensions boost Matter dimensions
    base_pow = base_pow.mult(me.upgrades['p51'].get_effect().pow(me.dimensions['photonic_6'].amt_bought));
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (me.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds(me).pow(me.dimensions['dimensional_6'].amt_bought));

    return base_pow;
};
functions['matter_7_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // p55: multiplier per other Matter Dimensions becomes x97
    base_exp = me.upgrades["p55"].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // achievement 18: x8 power to matter dimensions
    if (me.achievements['18'].complete) base_pow = base_pow.mult(8);
    // p32: bonus to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['p32'].get_effect());
    // p34: bonus to all Matter Dimensions
    if (me.upgrades['p34'].is_active()) base_pow = base_pow.mult(me.upgrades['p34'].get_effect());
    // n11: bonus to all Matter Dimensions
    if (me.upgrades['n11'].is_active()) base_pow = base_pow.mult(me.upgrades['n11'].get_effect());
    // n13: bonus to all Matter Dimensions
    if (me.upgrades['n13'].is_active()) base_pow = base_pow.mult(me.upgrades['n13'].get_effect());
    // v111: x1e6 power to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['v111'].get_effect());
    // achievement 76: x666 power to prime-numbered Matter Dimensions
    if (me.achievements['76'].complete) base_pow = base_pow.mult(666);
    // v161: bonus to all Matter Dimensions
    if (me.upgrades['v161'].is_active()) base_pow = base_pow.mult(me.upgrades['v161'].get_effect());
    // v191: bonus to all Matter Dimensions
    if (me.upgrades['v191'].is_active()) base_pow = base_pow.mult(me.upgrades['v191'].get_effect());
    // red waves boost Matter Dimensions
    base_pow = base_pow.mult(wave_effect('red'));
    // a05: boost all Matter Dims, starting from 5th
    base_pow = base_pow.mult(me.upgrades['a05'].get_effect());
    // p51: Photonic dimensions boost Matter dimensions
    base_pow = base_pow.mult(me.upgrades['p51'].get_effect().pow(me.dimensions['photonic_7'].amt_bought));
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds(me).pow(me.dimensions['dimensional_7'].amt_bought));

    return base_pow;
};
functions['matter_8_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // p55: multiplier per other Matter Dimensions becomes x97
    base_exp = me.upgrades["p55"].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // achievement 18: x8 power to matter dimensions
    if (me.achievements['18'].complete) base_pow = base_pow.mult(8);
    // p32: bonus to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['p32'].get_effect());
    // p34: bonus to all Matter Dimensions
    if (me.upgrades['p34'].is_active()) base_pow = base_pow.mult(me.upgrades['p34'].get_effect());
    // n11: bonus to all Matter Dimensions
    if (me.upgrades['n11'].is_active()) base_pow = base_pow.mult(me.upgrades['n11'].get_effect());
    // n13: bonus to all Matter Dimensions
    if (me.upgrades['n13'].is_active()) base_pow = base_pow.mult(me.upgrades['n13'].get_effect());
    // v111: x1e6 power to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['v111'].get_effect());
    // v161: bonus to all Matter Dimensions
    if (me.upgrades['v161'].is_active()) base_pow = base_pow.mult(me.upgrades['v161'].get_effect());
    // v191: bonus to all Matter Dimensions
    if (me.upgrades['v191'].is_active()) base_pow = base_pow.mult(me.upgrades['v191'].get_effect());
    // red waves boost Matter Dimensions
    base_pow = base_pow.mult(wave_effect('red'));
    // a05: boost all Matter Dims, starting from 5th
    base_pow = base_pow.mult(me.upgrades['a05'].get_effect());
    // p51: Photonic dimensions boost Matter dimensions
    base_pow = base_pow.mult(me.upgrades['p51'].get_effect().pow(me.dimensions['photonic_8'].amt_bought));
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (me.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds(me).pow(me.dimensions['dimensional_8'].amt_bought));

    return base_pow;
};
functions['matter_9_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // p55: multiplier per other Matter Dimensions becomes x97
    base_exp = me.upgrades["p55"].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // achievement 18: x8 power to matter dimensions
    if (me.achievements['18'].complete) base_pow = base_pow.mult(8);
    // p32: bonus to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['p32'].get_effect());
    // p34: bonus to all Matter Dimensions
    if (me.upgrades['p34'].is_active()) base_pow = base_pow.mult(me.upgrades['p34'].get_effect());
    // n11: bonus to all Matter Dimensions
    if (me.upgrades['n11'].is_active()) base_pow = base_pow.mult(me.upgrades['n11'].get_effect());
    // n13: bonus to all Matter Dimensions
    if (me.upgrades['n13'].is_active()) base_pow = base_pow.mult(me.upgrades['n13'].get_effect());
    // v111: x1e6 power to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['v111'].get_effect());
    // v161: bonus to all Matter Dimensions
    if (me.upgrades['v161'].is_active()) base_pow = base_pow.mult(me.upgrades['v161'].get_effect());
    // v191: bonus to all Matter Dimensions
    if (me.upgrades['v191'].is_active()) base_pow = base_pow.mult(me.upgrades['v191'].get_effect());
    // red waves boost Matter Dimensions
    base_pow = base_pow.mult(wave_effect('red'));
    // a05: boost all Matter Dims, starting from 5th
    base_pow = base_pow.mult(me.upgrades['a05'].get_effect());
    // p51: Photonic dimensions boost Matter dimensions
    base_pow = base_pow.mult(me.upgrades['p51'].get_effect().pow(me.dimensions['photonic_9'].amt_bought));
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds(me).pow(me.dimensions['dimensional_9'].amt_bought));

    return base_pow;
};
functions['matter_10_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // p55: multiplier per other Matter Dimensions becomes x97
    base_exp = me.upgrades["p55"].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // achievement 18: x8 power to matter dimensions
    if (me.achievements['18'].complete) base_pow = base_pow.mult(8);
    // p32: bonus to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['p32'].get_effect());
    // p34: bonus to all Matter Dimensions
    if (me.upgrades['p34'].is_active()) base_pow = base_pow.mult(me.upgrades['p34'].get_effect());
    // n11: bonus to all Matter Dimensions
    if (me.upgrades['n11'].is_active()) base_pow = base_pow.mult(me.upgrades['n11'].get_effect());
    // n13: bonus to all Matter Dimensions
    if (me.upgrades['n13'].is_active()) base_pow = base_pow.mult(me.upgrades['n13'].get_effect());
    // v111: x1e6 power to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['v111'].get_effect());
    // v161: bonus to all Matter Dimensions
    if (me.upgrades['v161'].is_active()) base_pow = base_pow.mult(me.upgrades['v161'].get_effect());
    // v191: bonus to all Matter Dimensions
    if (me.upgrades['v191'].is_active()) base_pow = base_pow.mult(me.upgrades['v191'].get_effect());
    // red waves boost Matter Dimensions
    base_pow = base_pow.mult(wave_effect('red'));
    // a05: boost all Matter Dims, starting from 5th
    base_pow = base_pow.mult(me.upgrades['a05'].get_effect());
    // p51: Photonic dimensions boost Matter dimensions
    base_pow = base_pow.mult(me.upgrades['p51'].get_effect().pow(me.dimensions['photonic_10'].amt_bought));
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (me.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds(me).pow(me.dimensions['dimensional_10'].amt_bought));

    return base_pow;
};
functions['matter_11_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // p55: multiplier per other Matter Dimensions becomes x97
    base_exp = me.upgrades["p55"].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // achievement 18: x8 power to matter dimensions
    if (me.achievements['18'].complete) base_pow = base_pow.mult(8);
    // p32: bonus to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['p32'].get_effect());
    // p34: bonus to all Matter Dimensions
    if (me.upgrades['p34'].is_active()) base_pow = base_pow.mult(me.upgrades['p34'].get_effect());
    // n11: bonus to all Matter Dimensions
    if (me.upgrades['n11'].is_active()) base_pow = base_pow.mult(me.upgrades['n11'].get_effect());
    // n13: bonus to all Matter Dimensions
    if (me.upgrades['n13'].is_active()) base_pow = base_pow.mult(me.upgrades['n13'].get_effect());
    // v111: x1e6 power to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['v111'].get_effect());
    // achievement 76: x666 power to prime-numbered Matter Dimensions
    if (me.achievements['76'].complete) base_pow = base_pow.mult(666);
    // v161: bonus to all Matter Dimensions
    if (me.upgrades['v161'].is_active()) base_pow = base_pow.mult(me.upgrades['v161'].get_effect());
    // v191: bonus to all Matter Dimensions
    if (me.upgrades['v191'].is_active()) base_pow = base_pow.mult(me.upgrades['v191'].get_effect());
    // red waves boost Matter Dimensions
    base_pow = base_pow.mult(wave_effect('red'));
    // a05: boost all Matter Dims, starting from 5th
    base_pow = base_pow.mult(me.upgrades['a05'].get_effect());
    // p51: Photonic dimensions boost Matter dimensions
    base_pow = base_pow.mult(me.upgrades['p51'].get_effect().pow(me.dimensions['photonic_11'].amt_bought));
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds(me).pow(me.dimensions['dimensional_11'].amt_bought));

    return base_pow;
};
functions['matter_12_pow'] = (amt_bought, amt) => {
    let base_exp = big(2);
    // p55: multiplier per other Matter Dimensions becomes x97
    base_exp = me.upgrades["p55"].get_effect();

    let base_pow = base_exp.pow(amt_bought);
    // achievement 18: x8 power to matter dimensions
    if (me.achievements['18'].complete) base_pow = base_pow.mult(8);
    // p32: bonus to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['p32'].get_effect());
    // p34: bonus to all Matter Dimensions
    if (me.upgrades['p34'].is_active()) base_pow = base_pow.mult(me.upgrades['p34'].get_effect());
    // n11: bonus to all Matter Dimensions
    if (me.upgrades['n11'].is_active()) base_pow = base_pow.mult(me.upgrades['n11'].get_effect());
    // n13: bonus to all Matter Dimensions
    if (me.upgrades['n13'].is_active()) base_pow = base_pow.mult(me.upgrades['n13'].get_effect());
    // v111: x1e6 power to all Matter Dimensions
    base_pow = base_pow.mult(me.upgrades['v111'].get_effect());
    // v161: bonus to all Matter Dimensions
    if (me.upgrades['v161'].is_active()) base_pow = base_pow.mult(me.upgrades['v161'].get_effect());
    // v191: bonus to all Matter Dimensions
    if (me.upgrades['v191'].is_active()) base_pow = base_pow.mult(me.upgrades['v191'].get_effect());
    // red waves boost Matter Dimensions
    base_pow = base_pow.mult(wave_effect('red'));
    // a05: boost all Matter Dims, starting from 5th
    base_pow = base_pow.mult(me.upgrades['a05'].get_effect());
    // p51: Photonic dimensions boost Matter dimensions
    base_pow = base_pow.mult(me.upgrades['p51'].get_effect().pow(me.dimensions['photonic_12'].amt_bought));
    // Vacuumic Challenge 2 reward: x2 multiplier to all even-numbered dimensions
    if (me.challenges['v2'].completed) base_pow = base_pow.mult(2);
    // Dimensional Dimensions boost respective dimensions
    base_pow = base_pow.mult(power_manifolds(me).pow(me.dimensions['dimensional_12'].amt_bought));

    return base_pow;
};

functions['matter_1_unlock'] = () => {
    return true;
}
functions['matter_2_unlock'] = () => {
    // Challenge 6: there is limited amount of dimensions
    if (me.challenge_strength_6 < 2) return false;

    // achievement 112: first four dimensions are always unlocked
    if (me.achievements['112'].complete) return true;

    if (me.dimensions['matter_1'].amt_bought > 0) return true;
    return false;
}
functions['matter_3_unlock'] = () => {
    // Challenge 6: there is limited amount of dimensions
    if (me.challenge_strength_6 < 3) return false;
    
    // achievement 112: first four dimensions are always unlocked
    if (me.achievements['112'].complete) return true;

    if (me.dimensions['matter_2'].amt_bought > 0) return true;
    return false;
}
functions['matter_4_unlock'] = () => {
    // Challenge 6: there is limited amount of dimensions
    if (me.challenge_strength_6 < 4) return false;
    
    // achievement 112: first four dimensions are always unlocked
    if (me.achievements['112'].complete) return true;

    if (me.dimensions['matter_3'].amt_bought > 0) return true;
    return false;
}
functions['matter_5_unlock'] = () => {
    // Challenge 6: there is limited amount of dimensions
    if (me.challenge_strength_6 < 5) return false;

    if (me.dimensions['matter_4'].amt_bought > 0) return true;
    return false;
}
functions['matter_6_unlock'] = () => {
    // Challenge 6: there is limited amount of dimensions
    if (me.challenge_strength_6 < 6) return false;

    if (me.dimensions['matter_5'].amt_bought > 0) return true;
    return false;
}
functions['matter_7_unlock'] = () => {
    // Challenge 6: there is limited amount of dimensions
    if (me.challenge_strength_6 < 7) return false;

    if (me.dimensions['matter_6'].amt_bought > 0) return true;
    return false;
}
functions['matter_8_unlock'] = () => {
    // Challenge 6: there is limited amount of dimensions
    if (me.challenge_strength_6 < 8) return false;

    if (me.dimensions['matter_7'].amt_bought > 0) return true;
    return false;
}
functions['matter_9_unlock'] = () => {
    // Challenge 6: there is limited amount of dimensions
    if (me.challenge_strength_6 < 9) return false;

    if (me.dimensions['matter_8'].amt_bought > 0) return true;
    return false;
}
functions['matter_10_unlock'] = () => {
    // Challenge 6: there is limited amount of dimensions
    if (me.challenge_strength_6 < 10) return false;

    if (me.dimensions['matter_9'].amt_bought > 0) return true;
    return false;
}
functions['matter_11_unlock'] = () => {
    // Challenge 6: there is limited amount of dimensions
    if (me.challenge_strength_6 < 11) return false;

    if (me.dimensions['matter_10'].amt_bought > 0) return true;
    return false;
}
functions['matter_12_unlock'] = () => {
    // Challenge 6: there is limited amount of dimensions
    if (me.challenge_strength_6 < 12) return false;

    if (me.dimensions['matter_11'].amt_bought > 0) return true;
    return false;
}