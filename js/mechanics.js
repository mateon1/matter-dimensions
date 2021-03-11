function update_mechanics_first(player) {
    update_inertia_first(player);
    update_temperature_first(player);
    update_collider_first(player);
    update_settings_first(player);

    update_mechanics(player);
}

function update_mechanics(player) {
    update_inertia(player);
    update_temperature(player);
    update_collider(player);
    update_settings(player);
}

// Inertia

function inertia_gain_speed(player) {
    return big(1).div(player.best_time_speed).pow(player.upgrades['INERTIA_2'].get_effect()).mult(player.upgrades['INERTIA_4'].get_effect());
}

function inertia_loss_speed(player) {
    return big(2).pow(big(player.inertia_multiplier).subtract(1)).subtract(1);
}

function inertia_eta(player) {
    let inertia_loss = inertia_loss_speed(player).subtract(inertia_gain_speed(player).mult(player.upgrades['INERTIA_5'].get_effect().toInt() / 100));
    if (inertia_loss.lt(1e-60)) return "forever";
    else return format_time(player.inertia.div(inertia_loss));  
}

function switch_inertia_status() {
    me.inertia_enabled = !me.inertia_enabled;
    update_inertia(me);
}

function update_inertia_first(player) {
    player.inertia_multiplier = Math.min(player.upgrades['INERTIA_3'].get_effect().toInt(), Math.max(2, player.inertia_multiplier));

    document.getElementById("mechanic_inertia_slider").max = player.upgrades['INERTIA_3'].get_effect().toInt();
    document.getElementById("mechanic_inertia_slider").value = player.inertia_multiplier;
}

function update_inertia(player) {
    document.getElementById("mechanic_inertia_per_hour").textContent = format_time(inertia_gain_speed(player).mult(60 * 60 * 1000));
    document.getElementById("mechanic_inertia_per_hour_online").textContent = format_time(inertia_gain_speed(player).mult(60 * 60 * 1000).mult(player.upgrades['INERTIA_5'].get_effect().toInt() / 100));
    document.getElementById("mechanic_inertia_cap").textContent = format_time(player.upgrades['INERTIA_1'].get_effect());
    document.getElementById("mechanic_inertia_max_multiplier").textContent = format_number(player.upgrades['INERTIA_3'].get_effect());
    document.getElementById("mechanic_inertia_loss").textContent = format_time(inertia_loss_speed(player).mult(1000));
    if (inertia_eta(player) == "forever") document.getElementById("mechanic_inertia_eta").textContent = inertia_eta(player);
    else document.getElementById("mechanic_inertia_eta").textContent = "for " + inertia_eta(player);
    if (player.inertia_enabled) {
        document.getElementById("mechanic_inertia_status").textContent = "enabled";
        document.getElementById("mechanic_inertia_button_text").textContent = "Disable";
        document.getElementById("mechanic_inertia_desc").style.display = "";
        document.getElementById("mechanic_inertia_desc_multiplier").textContent = format_number(player.inertia_multiplier);
        if (inertia_eta(player) == "forever") document.getElementById("mechanic_inertia_desc_time").textContent = inertia_eta(player);
        else document.getElementById("mechanic_inertia_desc_time").textContent = "for the next " + inertia_eta(player);
    }
    else {
        document.getElementById("mechanic_inertia_status").textContent = "disabled";
        document.getElementById("mechanic_inertia_button_text").textContent = "Enable";
        document.getElementById("mechanic_inertia_desc").style.display = "none";
    }
    if (player.upgrades['INERTIA_2'].amt == player.upgrades['INERTIA_2'].max_level) document.getElementById("mechanic_inertia_timespeed_remark").style.display = "none";
    else document.getElementById("mechanic_inertia_timespeed_remark").style.display = "";
    if (player.upgrades['INERTIA_5'].amt == player.upgrades['INERTIA_5'].max_level) {
        document.getElementById("mechanic_inertia_offline_remark").style.display = "none";
        document.getElementById("mechanic_inertia_online_gain_desc").style.display = "none";
    }
    else {
        document.getElementById("mechanic_inertia_offline_remark").style.display = "";
        if (player.upgrades['INERTIA_5'].amt == 0) document.getElementById("mechanic_inertia_online_gain_desc").style.display = "none";
        else document.getElementById("mechanic_inertia_online_gain_desc").style.display = "";
    }

    player.inertia_multiplier = document.getElementById("mechanic_inertia_slider").value;
}

// Temperature

const wave_types = ["infrared", "red", "green", "blue", "ultraviolet", "xray"];

function format_temperature(number, fixed=false) {
    if (!(number instanceof BigNumber)) number = new BigNumber(number);
    let res = new BigNumber();
    res.copy(number);

    let degrees = "";
    if (me.settings['temperature_display'] == 'K') {
        degrees = " K";
    }
    if (me.settings['temperature_display'] == 'C') {
        degrees = " °C";
        res = res.add(-273.15);
    }
    if (me.settings['temperature_display'] == 'F') {
        degrees = " °F";
        res = res.add(-273.15).mult(9 / 5).add(32);
    }

    return format_number(res, fixed) + degrees;
}

function get_temperature(player) {
    let base_temp = player.temperature_energy.pow(0.2).div(1000);
    if (base_temp.gt(273.15)) base_temp = big(273.15).mult(base_temp.div(273.15).log(10).add(1));
    return base_temp;
}

function get_new_temperature(player) {
    let base_temp = player.temperature_energy.div(player.space.add(1).pow(0.2)).pow(0.2).div(1000);
    if (base_temp.gt(273.15)) base_temp = big(273.15).mult(base_temp.div(273.15).log(10).add(1));
    return base_temp;
}

function wave_gain(type) {
    let wave_mult = big(1);
    // a04: gain more waves
    wave_mult = wave_mult.mult(me.upgrades['a04'].get_effect());
    switch (type) {
        case 'infrared': return get_temperature(me).div(2.73).pow(5).mult(wave_mult).rounddown();
        case 'red': return get_temperature(me).div(4.222).pow(4).mult(wave_mult).rounddown();
        case 'green': return get_temperature(me).div(5.19).pow(3).mult(wave_mult).rounddown();
        case 'blue': return get_temperature(me).div(13.99).pow(2).mult(wave_mult).rounddown();
        case 'ultraviolet': return get_temperature(me).div(20.28).pow(1).mult(wave_mult).rounddown();
        case 'xray': return get_temperature(me).div(273.15).pow(0.8).mult(wave_mult).rounddown();
    }
}

function can_reset_temperature(type) {
    return !get_temperature(me).lt(temperature_reset_hint(type));
}

function temperature_reset_hint(type) {
    switch (type) {
        case 'infrared': return big(2.73);
        case 'red': return big(4.222);
        case 'green': return big(5.19);
        case 'blue': return big(13.99);
        case 'ultraviolet': return big(20.28);
        case 'xray': return big(273.15);
    }
}

function temperature_reset_hint_next(type) {
    let resources_needed = wave_gain(type).add(1);
    let wave_mult = big(1);
    // a04: gain more waves
    wave_mult = wave_mult.mult(me.upgrades['a04'].get_effect());

    resources_needed = resources_needed.div(wave_mult).max(1);

    switch (type) {
        case 'infrared': return resources_needed.pow(1/5).mult(2.73);
        case 'red': return resources_needed.pow(1/4).mult(4.222);
        case 'green': return resources_needed.pow(1/3).mult(5.19);
        case 'blue': return resources_needed.pow(1/2).mult(13.99);
        case 'ultraviolet': return resources_needed.pow(1/1).mult(20.28);
        case 'xray': return resources_needed.pow(1/0.8).mult(273.15);
    }
}

function reset_temperature(type) {
    if (!can_reset_temperature(type)) return;

    let waves_gained = wave_gain(type);
    switch (type) {
        case 'infrared': me.infrared_waves = me.infrared_waves.add(waves_gained).min(me.challenge_strength_4); break;
        case 'red': me.red_waves = me.red_waves.add(waves_gained).min(me.challenge_strength_4); break;
        case 'green': me.green_waves = me.green_waves.add(waves_gained).min(me.challenge_strength_4); break;
        case 'blue': me.blue_waves = me.blue_waves.add(waves_gained).min(me.challenge_strength_4); break;
        case 'ultraviolet': me.ultraviolet_waves = me.ultraviolet_waves.add(waves_gained).min(me.challenge_strength_4); break;
        case 'xray': me.xray_waves = me.xray_waves.add(waves_gained).min(me.challenge_strength_4); break;
    }

    me.temperature_energy = big(0);
}

function wave_effect(type) {
    switch (type) {
        case 'infrared': return me.infrared_waves.min(me.infrared_waves.pow(0.5).mult(1e2)).min(me.infrared_waves.pow(0.2).mult(1e5)).min(me.infrared_waves.pow(0.04).mult(1e13)).add(1);
        case 'red': return me.red_waves.add(1).pow(2);
        case 'green': return me.green_waves.add(1).log(10).pow(2);
        case 'blue': return me.space.pow(me.blue_waves.add(1).log(10).pow(0.5).mult(0.05)).max(1);
        case 'ultraviolet': return me.ultraviolet_waves.add(1).log(10).pow(0.5).mult(0.03).add(1);
        case 'xray': return me.xray_waves.add(1).log(10).pow(0.5).mult(5);
    }
}

function switch_heating_status() {
    me.heating_enabled = !me.heating_enabled;
    update_temperature(me);
}

function update_temperature_first(player) {
    if (player.heating_smart_distribution) document.getElementById("mechanic_temperature_smart_distribution").checked = true;
    else document.getElementById("mechanic_temperature_smart_distribution").checked = false;
}

function update_temperature(player) {
    document.getElementById("mechanic_temperature_current").textContent = format_temperature(get_temperature(player), true);
    document.getElementById("mechanic_temperature_future").textContent = format_temperature(get_new_temperature(player), true);

    if (player.heating_enabled) {
        if (player.heating_smart_distribution) document.getElementById("mechanic_temperature_heating_status").textContent = "enabled (50%)";
        else document.getElementById("mechanic_temperature_heating_status").textContent = "enabled";

        document.getElementById("mechanic_temperature_heating_button").textContent = "Disable";
    }
    else {
        document.getElementById("mechanic_temperature_heating_status").textContent = "disabled";
        document.getElementById("mechanic_temperature_heating_button").textContent = "Enable";
    }

    if (document.getElementById("mechanic_temperature_smart_distribution").checked) player.heating_smart_distribution = true;
    else player.heating_smart_distribution = false;

    for (let i = 0; i < wave_types.length; i++) {
        if (can_reset_temperature(wave_types[i])) {
            document.getElementById("mechanic_temperature_" + wave_types[i] + "_reset").className = "prestige-layer-ascend";
            document.getElementById("mechanic_temperature_" + wave_types[i] + "_gain").style.display = "";
            document.getElementById("mechanic_temperature_" + wave_types[i] + "_gain_hint").style.display = "none";
            if (wave_gain(wave_types[i]).gt(100)) document.getElementById("mechanic_temperature_" + wave_types[i] + "_gain_hint_next").style.display = "none";
            else document.getElementById("mechanic_temperature_" + wave_types[i] + "_gain_hint_next").style.display = "";
        }
        else {
            document.getElementById("mechanic_temperature_" + wave_types[i] + "_reset").className = "prestige-layer-ascend disabled";
            document.getElementById("mechanic_temperature_" + wave_types[i] + "_gain").style.display = "none";
            document.getElementById("mechanic_temperature_" + wave_types[i] + "_gain_hint").style.display = "";
            document.getElementById("mechanic_temperature_" + wave_types[i] + "_gain_hint_next").style.display = "none";
        }

        document.getElementById("mechanic_temperature_" + wave_types[i] + "_gain_amt").textContent = format_number(wave_gain(wave_types[i]));
        document.getElementById("mechanic_temperature_" + wave_types[i] + "_gain_hint_amt").textContent = format_temperature(temperature_reset_hint(wave_types[i]));
        document.getElementById("mechanic_temperature_" + wave_types[i] + "_gain_hint_next_amt").textContent = format_temperature(temperature_reset_hint_next(wave_types[i]));

        document.getElementById("mechanic_temperature_" + wave_types[i] + "_effect").textContent = format_number(wave_effect(wave_types[i]));
    }

    // a04_2: unlock X-Ray Waves
    if (player.milestones['a04_2'].is_active()) document.getElementById("mechanic_temperature_xray_waves").style.display = "";
    else document.getElementById("mechanic_temperature_xray_waves").style.display = "none";

    // p53: Infrared Waves boost Photons
    if (player.upgrades['p53'].is_active()) document.getElementById("mechanic_temperature_p53_effect").style.display = "";
    else document.getElementById("mechanic_temperature_p53_effect").style.display = "none";

    // achievement 115: Temperature is no longer reduced on Vacuumic
    if (player.achievements['115'].complete) document.getElementById("mechanic_temperature_vacuumic_reduction").style.display = "none";
    else document.getElementById("mechanic_temperature_vacuumic_reduction").style.display = "";
}

// Collider

var free_atom_levels = {};

function update_collider_first(player) {
    for (let key of Object.keys(MECHANIC_COLLIDER_REACTION_LIST)) {
        if (key in player.active_reactions && player.active_reactions[key]) 
            document.getElementById("mechanic_collider_reaction_checkbox_" + key).checked = true;
    }
}

function get_atom_level(key) {
    if (!(key in free_atom_levels)) free_atom_levels[key] = big(0);
    if (!functions[me.upgrades[key].availability_function]()) return big(0);
    return big(me.upgrades[key].amt).add(free_atom_levels[key]);
}

function element_unlock_limit(player) {
    return 6;
}

function highest_unlocked_element(player) {
    let base_limit = 1;
    let max_limit = element_unlock_limit(player);
    return Math.min(base_limit + me.collision_points_in_synthesis, max_limit);
}

function next_ck_hint(amt) {
    let resource_need = big(amt).add(1);

    // a03_1: increase CK gain
    if (me.milestones['a03_1'].is_active()) resource_need = resource_need.div(me.milestones['a03_1'].get_effect());

    return resource_need.mult(2).max(2).pow(1024);
}

function change_collision_categories(id, amt) {
    // Ctrl
    if (pressed_buttons['ctrl']) {
        if (amt < 0) amt = -Infinity;
        else amt = Infinity;
    }

    amt = Math.min(amt, me.collision_points);
    if (id == 1) amt = Math.max(amt, -me.collision_points_in_reaction);
    if (id == 2) amt = Math.max(amt, -me.collision_points_in_synthesis);
    if (id == 3) amt = Math.max(amt, -me.collision_points_in_generation);

    me.collision_points -= amt;
    if (id == 1) me.collision_points_in_reaction += amt;
    if (id == 2) me.collision_points_in_synthesis += amt;
    if (id == 3) me.collision_points_in_generation += amt;
}

function reaction_points_effect_photons(player) {
    return free_atom_levels['ph'].pow(0.5).add(1);
}
function reaction_points_effect_neutrons(player) {
    return free_atom_levels['n'].pow(0.5).add(1);
}

function generation_points_effect(player) {
    return big(player.collision_points_in_generation);
}

const MECHANIC_COLLIDER_ELEMENT_NAMES = ["Hydrogen", "Helium", 
    "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", 
    "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon",
    "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron"];
const MECHANIC_COLLIDER_ELEMENT_ABBRS = ["H", "He", 
    "Li", "Be", "B", "C", "N", "O", "F", "Ne", 
    "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar",
    "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe"];
const MECHANIC_COLLIDER_REACTION_LIST = {
    'cr1': [['a01', 'a01'], ['a02', 'ph']], // Proton-proton chain
    'cr2': [['a02', 'a02'], ['a02', 'a01', 'a01']],
    'cr3': [['a02', 'a02'], ['a04', 'ph']],
    'cr4': [['a03', 'a01'], ['a02', 'a02']],
    'cr5': [['a04', 'a01'], ['a05', 'ph']],
    'cr6': [['a04'], ['a02', 'a02']],
    /*'cr7': [['a06', 'a01'], ['a07', 'ph']], // Carbon-nitrogen-oxygen cycle
    'cr8': [['a07', 'a01'], ['a08', 'ph']],
    'cr9': [['a07', 'a01'], ['a06', 'a02']],
    'cr10': [['a08', 'a01'], ['a09', 'ph']],
    'cr11': [['a08', 'a01'], ['a07', 'a02']],
    'cr12': [['a09', 'a01'], ['a10', 'ph']],*/
    'cr13': [['a02', 'a02'], ['a04']], // Triple-alpha process
    'cr14': [['a04', 'a02'], ['a06', 'ph', 'ph']],
    /*'cr15': [['a06', 'a02'], ['a08', 'ph']], // Alpha process
    'cr16': [['a08', 'a02'], ['a10', 'ph']],
    'cr17': [['a10', 'a02'], ['a12', 'ph']],
    'cr18': [['a12', 'a02'], ['a14', 'ph']],
    'cr19': [['a14', 'a02'], ['a16', 'ph']],
    'cr20': [['a16', 'a02'], ['a18', 'ph']],
    'cr21': [['a18', 'a02'], ['a20', 'ph']],
    'cr22': [['a20', 'a02'], ['a22', 'ph']],
    'cr23': [['a22', 'a02'], ['a24', 'ph']],
    'cr24': [['a24', 'a02'], ['a26', 'ph']],
    'cr25': [['a06', 'a06'], ['a10', 'a02']], // Carbon burning
    'cr26': [['a06', 'a06'], ['a11', 'a01']],
    'cr27': [['a06', 'a06'], ['a12', 'n']],
    'cr28': [['a06', 'a06'], ['a12', 'ph']],
    'cr29': [['a06', 'a06'], ['a08', 'a02', 'a02']],
    'cr30': [['a10', 'a02'], ['a12', 'n']], // Neon burning
    'cr31': [['a08', 'a08'], ['a14', 'a02']], // Oxygen burning
    'cr32': [['a08', 'a08'], ['a15', 'a01']],
    'cr33': [['a08', 'a08'], ['a16', 'n']],
    'cr34': [['a08', 'a08'], ['a14', 'a01', 'a01']],
    'cr35': [['a08', 'a08'], ['a15', 'a01']],
    'cr36': [['a08', 'a08'], ['a16', 'ph']],
    'cr37': [['a08', 'a08'], ['a12', 'a02', 'a02']]*/
};

function format_element(num) {
    return MECHANIC_COLLIDER_ELEMENT_NAMES[num - 1] + " (" + num + ")";
}

function levels_passed_through_reaction_ratio(player) {
    return big(0.5);
}

function update_collider(player) {
    let generation_levels = generation_points_effect(player);

    for (let key of Object.keys(player.upgrades)) {
        if (key.includes('a')) {
            free_atom_levels[key] = big(0);
            if (functions[player.upgrades[key].availability_function]()) free_atom_levels[key] = generation_levels;
        }
    }
    free_atom_levels['ph'] = big(0);
    free_atom_levels['n'] = big(0);

    if (!player.upgrades['v211'].is_active()) {
        document.getElementById("mechanic_collider_ck_prebreak").style.display = "";
        document.getElementById("mechanic_collider_next_ck_hint").style.display = "none";
    }
    else {
        document.getElementById("mechanic_collider_ck_prebreak").style.display = "none";
        document.getElementById("mechanic_collider_next_ck_hint").style.display = "";
    }
    document.getElementById("mechanic_collider_next_ck_at").textContent = format_number(next_ck_hint(prestige_earn_collision_knowledge(player)));
    if (prestige_earn_collision_knowledge(player).gt(100)) {
        document.getElementById("mechanic_collider_next_ck_hint").style.display = "none";
    }

    if (me.collision_points == 0) {
        document.getElementById("mechanic_collider_reaction_inc").className = "upgrade disabled";
        document.getElementById("mechanic_collider_synthesis_inc").className = "upgrade disabled";
        document.getElementById("mechanic_collider_generation_inc").className = "upgrade disabled";
    }
    else {
        document.getElementById("mechanic_collider_reaction_inc").className = "upgrade";
        document.getElementById("mechanic_collider_synthesis_inc").className = "upgrade";
        document.getElementById("mechanic_collider_generation_inc").className = "upgrade";
    }
    if (me.collision_points_in_reaction == 0) document.getElementById("mechanic_collider_reaction_dec").className = "upgrade disabled";
    else document.getElementById("mechanic_collider_reaction_dec").className = "upgrade";
    if (me.collision_points_in_synthesis == 0) document.getElementById("mechanic_collider_synthesis_dec").className = "upgrade disabled";
    else document.getElementById("mechanic_collider_synthesis_dec").className = "upgrade";
    if (me.collision_points_in_generation == 0) document.getElementById("mechanic_collider_generation_dec").className = "upgrade disabled";
    else document.getElementById("mechanic_collider_generation_dec").className = "upgrade";

    document.getElementById("mechanic_collider_synthesis_limit").textContent = format_element(element_unlock_limit(player));
    document.getElementById("mechanic_collider_synthesis_effect").textContent = format_element(highest_unlocked_element(player));
    document.getElementById("mechanic_collider_generation_effect").textContent = format_number(generation_levels);

    let unlocked_elements = highest_unlocked_element(player);
    let elements = document.getElementsByClassName("collider-periodic-table-element");
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).style.visibility = "hidden";
    }
    for (let i = 1; i <= unlocked_elements; i++) {
        document.getElementById("mechanic_collider_element_" + i).style.visibility = "";
    }

    let transfer_ratio = levels_passed_through_reaction_ratio(player);
    document.getElementById("mechanic_collider_free_level_transfer").textContent = format_number(transfer_ratio.mult(100));

    let activated_reactions = 0;
    for (let key of Object.keys(MECHANIC_COLLIDER_REACTION_LIST)) {
        player.active_reactions[key] = document.getElementById("mechanic_collider_reaction_checkbox_" + key).checked;
        document.getElementById("mechanic_collider_reaction_" + key).className = "collider-reaction-formula";

        let reaction_visible = true;
        for (let i = 0; i < MECHANIC_COLLIDER_REACTION_LIST[key][0].length; i++) {
            if (MECHANIC_COLLIDER_REACTION_LIST[key][0][i].includes('a') 
            && !functions[player.upgrades[MECHANIC_COLLIDER_REACTION_LIST[key][0][i]].availability_function]()) {
                reaction_visible = false;
                break;
            }
        }
        for (let i = 0; i < MECHANIC_COLLIDER_REACTION_LIST[key][1].length; i++) {
            if (MECHANIC_COLLIDER_REACTION_LIST[key][1][i].includes('a') 
            && !functions[player.upgrades[MECHANIC_COLLIDER_REACTION_LIST[key][1][i]].availability_function]()) {
                reaction_visible = false;
                break;
            }
        }
        if (reaction_visible) document.getElementById("mechanic_collider_reaction_" + key).style.display = "";
        else document.getElementById("mechanic_collider_reaction_" + key).style.display = "none";

        if (reaction_visible && player.active_reactions[key] && activated_reactions < player.collision_points_in_reaction) {
            activated_reactions += 1;
            let total_free_levels = big(0);
            for (let i = 0; i < MECHANIC_COLLIDER_REACTION_LIST[key][0].length; i++) {
                total_free_levels = total_free_levels.add(get_atom_level(MECHANIC_COLLIDER_REACTION_LIST[key][0][i]));
            }
            total_free_levels = total_free_levels.mult(transfer_ratio).add(1e-6).rounddown();
            for (let i = 0; i < MECHANIC_COLLIDER_REACTION_LIST[key][1].length; i++) {
                free_atom_levels[MECHANIC_COLLIDER_REACTION_LIST[key][1][i]] = free_atom_levels[MECHANIC_COLLIDER_REACTION_LIST[key][1][i]].add(total_free_levels);
            }
            document.getElementById("mechanic_collider_reaction_" + key).className = "collider-reaction-formula active";
        }
    }
    if (unlocked_elements < 2) document.getElementById("mechanic_collider_reactions_section_1").style.display = "none";
    else document.getElementById("mechanic_collider_reactions_section_1").style.display = "";
    if (unlocked_elements < 4) document.getElementById("mechanic_collider_reactions_section_3").style.display = "none";
    else document.getElementById("mechanic_collider_reactions_section_3").style.display = "";

    document.getElementById("mechanic_collider_reaction_photons").textContent = format_number(reaction_points_effect_photons(player));
    document.getElementById("mechanic_collider_reaction_neutrons").textContent = format_number(reaction_points_effect_neutrons(player));

    for (let key of Object.keys(player.upgrades)) {
        if (key.includes('a')) {
            if (!functions[me.upgrades[key].availability_function]()) free_atom_levels[key] = big(0);
            document.getElementById("mechanic_collider_" + key + "_level").textContent = format_number(get_atom_level(key));
            document.getElementById("upgrade_" + key + "_total_level").textContent = format_number(get_atom_level(key));
        }
    }
}

// Settings

function update_settings_first(player) {
    for (let key of Object.keys(player.settings)) {
        radio_set_setting(key, player.settings[key]);
    }

    let elements = document.getElementsByName("notation");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].type == "radio") {
            document.getElementById("settings_notation_view_" + elements[i].value).textContent = format_number(1.23e45, false, true, elements[i].value);
        }
    }
}

function update_settings(player) {
    for (let key of Object.keys(player.settings)) {
        player.settings[key] = radio_get_setting(key);
    }
}