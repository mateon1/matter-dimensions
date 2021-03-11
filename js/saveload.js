var SAVE_NORMAL_VARS = ["unlocked_photonic", "unlocked_gravitonic", "unlocked_neutronic", "unlocked_vacuumic", "unlocked_dimensional", "unlocked_atomic", "unlocked_biological",
                        "experienced_dilation", "unlocked_st_autobuyers", "unlocked_wave_autobuyers", 
                        "activated_st_autobuyers",               
                        "time_passed", "overall_time", "best_time_speed", "last_update_ts",
                        "inertia_multiplier", "inertia_enabled", "heating_enabled", "heating_smart_distribution",
                        "time_photonic", "time_gravitonic", "time_neutronic", "time_vacuumic", "time_dimensional", "time_atomic", "time_biological", "time_started",
                        "current_challenge",
                        "photonic_resets", "gravitonic_resets", "neutronic_resets", "vacuumic_resets", "dimensional_resets", "atomic_resets", "biological_resets",
                        "fastest_photonic", "fastest_gravitonic", "fastest_neutronic", "fastest_vacuumic", "fastest_dimensional", "fastest_atomic", "fastest_biological",
                        "photons_carry", "neutrons_carry",
                        "collision_points", "collision_points_in_reaction", "collision_points_in_synthesis", "collision_points_in_generation", "active_reactions",
                        "total_realtime", "online_realtime",
                        "version", "settings"];
var SAVE_BIGNUM_VARS = ["matter", "antimatter", "energy", "temperature_energy", "collision_knowledge",
                        "photons", "gravitons", "neutrons", "vacuum_energy", "shards", "atoms", "genes",
                        "light", "space", "black_holes", "stars", "inflation", "manifolds",
                        "max_matter", "max_photons_at_once", "max_gravitons", "max_gravitons_in_nc", 
                        "space_theorems",
                        "proton_power", "electron_power", "boson_power",
                        "inertia",
                        "infrared_waves", "red_waves", "green_waves", "blue_waves", "ultraviolet_waves", "xray_waves"];

function create_save(player) {
    var data = {};

    SAVE_NORMAL_VARS.forEach(res => {
        data[res] = player[res];
    });

    SAVE_BIGNUM_VARS.forEach(res => {
        data[res] = player[res].create_save();
    });

    data["dimensions"] = {};
    for (let key of Object.keys(player.dimensions)) {
        data["dimensions"][key] = player.dimensions[key].create_save();
    }

    data["achievements"] = {};
    for (let key of Object.keys(player.achievements)) {
        data["achievements"][key] = player.achievements[key].create_save();
    }

    data["upgrades"] = {};
    for (let key of Object.keys(player.upgrades)) {
        data["upgrades"][key] = player.upgrades[key].create_save();
    }

    data["challenges"] = {};
    for (let key of Object.keys(player.challenges)) {
        data["challenges"][key] = player.challenges[key].create_save();
    }

    data["autobuyers"] = {};
    for (let key of Object.keys(player.autobuyers)) {
        data["autobuyers"][key] = player.autobuyers[key].create_save();
    }

    return data;
}

function load_save(data, player) {
    player.reset();

    SAVE_NORMAL_VARS.forEach(res => {
        if (res in data) player[res] = data[res];
    });

    SAVE_BIGNUM_VARS.forEach(res => {
        if (res in data) player[res].load_save(data[res]);
    });

    for (let key of Object.keys(data["dimensions"])) {
        if (player.dimensions.hasOwnProperty(key)) player.dimensions[key].load_save(data["dimensions"][key]);
    }

    for (let key of Object.keys(data["achievements"])) {
        if (player.achievements.hasOwnProperty(key)) player.achievements[key].load_save(data["achievements"][key]);
    }

    for (let key of Object.keys(data["upgrades"])) {
        if (player.upgrades.hasOwnProperty(key)) player.upgrades[key].load_save(data["upgrades"][key]);
    }

    for (let key of Object.keys(data["challenges"])) {
        if (player.challenges.hasOwnProperty(key)) player.challenges[key].load_save(data["challenges"][key]);
    }

    for (let key of Object.keys(data["autobuyers"])) {
        if (player.autobuyers.hasOwnProperty(key)) player.autobuyers[key].load_save(data["autobuyers"][key]);
    }

    for (let key of Object.keys(default_settings)) {
        if (!(key in player.settings)) {
            player.settings[key] = default_settings[key];
        }
    }

    // Save fixes
    if (player.version === undefined) player.version = "v0";
    if (player.version == "v0") {
        // v0.5.1: Inertia update. Enjoy full 30 minutes of Inertia!
        player.version = "v0.5.1";
        player.inertia = big(30 * 60 * 1000);
    }
    if (player.version == "v0.5.1") {
        // v0.5.2: Vacuumic Dimensions update
        player.version = "v0.5.2";
    }
    if (player.version == "v0.5.2") {
        // v0.5.3: Automation update
        player.version = "v0.5.3";
    }
    if (player.version == "v0.5.3") {
        // v0.6: Atomic update
        player.version = "v0.6";
        player.time_atomic = player.overall_time;
    }
    if (player.version == "v0.6") {
        // v0.7: Biological update
        player.time_biological = player.overall_time;
        if (player.total_realtime > 365 * 24 * 60 * 60 * 1000) player.total_realtime = player.online_realtime; // 1970 fix
    }

    change_menu(default_menu);

    for (let key of Object.keys(default_submenu)) {
        change_submenu(key, default_submenu[key]);
    }

    player.achievement_multiplier = get_achievements_multiplier(player);
    update_challenges_power(player);
    update_mechanics_first(player);
    //player.last_update_ts = Date.now();
    game_loop();
}

function encode(str) {
    /*var enc = "0123456789aemnrS";
    var res = "r0";
    for (var i = 0; i < str.length; i++) {
        res += enc[Math.floor(str.charCodeAt(i) / 16)];
        res += enc[str.charCodeAt(i) % 16];
    }
    return res;*/
    return "r1" + btoa(str);
}
function decode(str) {
    var enc = "0123456789aemnrS";
    var res = "";
    for (var i = 2; i < str.length; i += 2) {
        var char_code = 0;
        for (var k = 0; k < enc.length; k++) {
            if (str[i] == enc[k]) break;
            char_code += 16;
        }
        for (var k = 0; k < enc.length; k++) {
            if (str[i + 1] == enc[k]) break;
            char_code += 1;
        }
        res += String.fromCharCode(char_code);
    }
    return res;
}

function save_button_click() {
    var data = JSON.stringify(create_save(me));
    document.getElementById("save_textarea").value = encode(data);

    document.getElementById("overlay_window").style.display = "";
    document.getElementById("save_window").style.display = "";
}

function save_window_close() {
    document.getElementById("overlay_window").style.display = "none";
    document.getElementById("save_window").style.display = "none";
}

function load_button_click() {
    document.getElementById("overlay_window").style.display = "";
    document.getElementById("load_window").style.display = "";
}

function load_window_close() {
    var data = document.getElementById("load_textarea").value;
    if (data.substring(0, 2) == "r0") {
        data = data.replace(/[^0123456789aemnrS]/g, '');
        if (data != "") load_save(JSON.parse(decode(data)), me);
    }
    else {
        data = data.replace(/[^A-Za-z0-9+/=]/g, '');
        if (data != "") load_save(JSON.parse(atob(data.substring(2))), me);
    }
    document.getElementById("load_textarea").value = "";

    document.getElementById("overlay_window").style.display = "none";
    document.getElementById("load_window").style.display = "none";
}

function save_to_local_storage(player) {
    last_local_storage_save = Date.now();
    localStorage.setItem("save", JSON.stringify(create_save(player)));
}

function load_from_local_storage(player) {
    if (localStorage.getItem("save") !== null) {
        last_local_storage_save = Date.now();
        load_save(JSON.parse(localStorage.getItem("save")), player);
    }
    else {
        // do the graphics stuff
        update_mechanics_first(player);
    }
}