functions["upg_AUTO1_1_cost"] = (amt) => {
    return big(10);
}
functions["upg_AUTO1_2_cost"] = (amt) => {
    return big(100);
}
functions["upg_AUTO1_3_cost"] = (amt) => {
    return big(1e10);
}
functions["upg_AUTO1_4_cost"] = (amt) => {
    return big(100);
}
functions["upg_AUTO1_5_cost"] = (amt) => {
    return big(2).pow(512);
}
functions["upg_AUTO2_1_cost"] = (amt) => {
    return big(1e20);
}
functions["upg_AUTO2_2_cost"] = (amt) => {
    return big(1e30);
}
functions["upg_AUTO2_3_cost"] = (amt) => {
    return big(12);
}
functions["upg_AUTO2_4_cost"] = (amt) => {
    return big(89);
}
functions["upg_AUTO3_1_cost"] = (amt) => {
    return big(4);
}
functions["upg_AUTO3_2_cost"] = (amt) => {
    return big(8);
}
functions["upg_AUTO3_3_cost"] = (amt) => {
    return big(16);
}
functions["upg_AUTO4_1_cost"] = (amt) => {
    return big(46368);
}
functions["upg_AUTO4_2_cost"] = (amt) => {
    return big(144);
}

functions["upg_automation_power"] = (amt) => {
    return big(1);
}

functions["upg_automation_neutronic_unlock"] = () => {
    return me.unlocked_neutronic;
}
functions["upg_automation_vacuumic_unlock"] = () => {
    return me.unlocked_vacuumic;
}
functions["upg_automation_dimensional_unlock"] = () => {
    return me.unlocked_dimensional;
}
functions["upg_automation_atomic_unlock"] = () => {
    return me.unlocked_atomic;
}