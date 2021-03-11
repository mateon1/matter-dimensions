class Player {
    constructor() {
        this.reset();
    }

    reset() {
        this.matter = new BigNumber(1);
        this.antimatter = new BigNumber(1);
        this.energy = new BigNumber(0);
        this.space = new BigNumber(0);
        this.temperature_energy = new BigNumber(0);
        this.collision_knowledge = new BigNumber(0);

        this.photons = new BigNumber(0);
        this.gravitons = new BigNumber(0);
        this.neutrons = new BigNumber(0);
        this.vacuum_energy = new BigNumber(0);
        this.shards = new BigNumber(0);
        this.atoms = new BigNumber(0);
        this.genes = new BigNumber(0);

        this.photons_carry = 0;
        this.neutrons_carry = 0;

        this.light = new BigNumber(0);
        this.black_holes = new BigNumber(0);
        this.stars = new BigNumber(0);
        this.inflation = new BigNumber(0);
        this.manifolds = new BigNumber(0);

        this.proton_power = new BigNumber(0);
        this.electron_power = new BigNumber(0);
        this.boson_power = new BigNumber(0);

        this.space_theorems = new BigNumber(0);

        this.collision_points = 0;
        this.collision_points_in_reaction = 0;
        this.collision_points_in_synthesis = 0;
        this.collision_points_in_generation = 0;

        this.active_reactions = {};

        this.unlocked_photonic = false;
        this.unlocked_gravitonic = false;
        this.unlocked_neutronic = false;
        this.unlocked_vacuumic = false;
        this.unlocked_dimensional = false;
        this.unlocked_atomic = false;
        this.unlocked_biological = false;

        this.experienced_dilation = false;
        this.unlocked_st_autobuyers = false;
        this.unlocked_wave_autobuyers = false;

        this.activated_st_autobuyers = true;

        this.photonic_resets = 0;
        this.gravitonic_resets = 0;
        this.neutronic_resets = 0;
        this.vacuumic_resets = 0;
        this.dimensional_resets = 0;
        this.atomic_resets = 0;
        this.biological_resets = 0;

        this.fastest_photonic = 365 * 24 * 60 * 60 * 1000;
        this.fastest_gravitonic = 365 * 24 * 60 * 60 * 1000;
        this.fastest_neutronic = 365 * 24 * 60 * 60 * 1000;
        this.fastest_vacuumic = 365 * 24 * 60 * 60 * 1000;
        this.fastest_dimensional = 365 * 24 * 60 * 60 * 1000;
        this.fastest_atomic = 365 * 24 * 60 * 60 * 1000;
        this.fastest_biological = 365 * 24 * 60 * 60 * 1000;

        this.max_matter = new BigNumber(1);
        this.max_photons_at_once = new BigNumber(0);
        this.max_gravitons = new BigNumber(0);
        this.max_gravitons_in_nc = new BigNumber(0);

        this.time_passed = 0;

        this.challenge_strength_1 = 1000;
        this.challenge_addinfo_2 = new BigNumber(1);
        this.challenge_strength_2 = 0.2;
        this.challenge_strength_3 = 100;
        this.challenge_strength_4 = new BigNumber(1e10);
        this.challenge_strength_5 = new BigNumber(1);
        this.challenge_strength_6 = 4;
        this.challenge_strength_7 = new BigNumber(1);
        this.challenge_strength_8 = 100;
        this.challenge_strength_9 = 2;
        this.challenge_strength_10 = 0.5;
        this.challenge_strength_11 = 0.5;

        this.best_time_speed = 1000;

        this.achievement_multiplier = new BigNumber(1);

        this.overall_time = 0;
        this.time_photonic = 0;
        this.time_gravitonic = 0;
        this.time_neutronic = 0;
        this.time_vacuumic = 0;
        this.time_dimensional = 0;
        this.time_atomic = 0;
        this.time_biological = 0;

        this.last_update_ts = Date.now();
        this.time_started = false;

        this.inertia = big(30 * 60 * 1000);
        this.inertia_multiplier = 2;
        this.inertia_enabled = false;

        this.heating_enabled = false;
        this.heating_smart_distribution = false;

        this.infrared_waves = big(0);
        this.red_waves = big(0);
        this.green_waves = big(0);
        this.blue_waves = big(0);
        this.ultraviolet_waves = big(0);
        this.xray_waves = big(0);

        this.dimensions = {};
        this.dimensions['matter_1'] = new Dimension('matter_1', 0, 'matter_1_cost', 'matter_1_pow', 'matter_1_unlock', 'matter', '', 'matter');
        this.dimensions['matter_2'] = new Dimension('matter_2', 1, 'matter_2_cost', 'matter_2_pow', 'matter_2_unlock', 'matter', '', this.dimensions['matter_1']);
        this.dimensions['matter_3'] = new Dimension('matter_3', 2, 'matter_3_cost', 'matter_3_pow', 'matter_3_unlock', 'matter', '', this.dimensions['matter_2']);
        this.dimensions['matter_4'] = new Dimension('matter_4', 3, 'matter_4_cost', 'matter_4_pow', 'matter_4_unlock', 'matter', '', this.dimensions['matter_3']);
        this.dimensions['matter_5'] = new Dimension('matter_5', 4, 'matter_5_cost', 'matter_5_pow', 'matter_5_unlock', 'matter', '', this.dimensions['matter_4']);
        this.dimensions['matter_6'] = new Dimension('matter_6', 5, 'matter_6_cost', 'matter_6_pow', 'matter_6_unlock', 'matter', '', this.dimensions['matter_5']);
        this.dimensions['matter_7'] = new Dimension('matter_7', 6, 'matter_7_cost', 'matter_7_pow', 'matter_7_unlock', 'matter', '', this.dimensions['matter_6']);
        this.dimensions['matter_8'] = new Dimension('matter_8', 7, 'matter_8_cost', 'matter_8_pow', 'matter_8_unlock', 'matter', '', this.dimensions['matter_7']);
        this.dimensions['matter_9'] = new Dimension('matter_9', 8, 'matter_9_cost', 'matter_9_pow', 'matter_9_unlock', 'matter', '', this.dimensions['matter_8']);
        this.dimensions['matter_10'] = new Dimension('matter_10', 9, 'matter_10_cost', 'matter_10_pow', 'matter_10_unlock', 'matter', '', this.dimensions['matter_9']);
        this.dimensions['matter_11'] = new Dimension('matter_11', 10, 'matter_11_cost', 'matter_11_pow', 'matter_11_unlock', 'matter', '', this.dimensions['matter_10']);
        this.dimensions['matter_12'] = new Dimension('matter_12', 11, 'matter_12_cost', 'matter_12_pow', 'matter_12_unlock', 'matter', '', this.dimensions['matter_11']);

        this.dimensions['photonic_1'] = new Dimension('photonic_1', 0, 'photonic_1_cost', 'photonic_1_pow', 'photonic_1_unlock', 'photons', ' Ph', 'light');
        this.dimensions['photonic_2'] = new Dimension('photonic_2', 1, 'photonic_2_cost', 'photonic_2_pow', 'photonic_2_unlock', 'photons', ' Ph', this.dimensions['photonic_1']);
        this.dimensions['photonic_3'] = new Dimension('photonic_3', 2, 'photonic_3_cost', 'photonic_3_pow', 'photonic_3_unlock', 'photons', ' Ph', this.dimensions['photonic_2']);
        this.dimensions['photonic_4'] = new Dimension('photonic_4', 3, 'photonic_4_cost', 'photonic_4_pow', 'photonic_4_unlock', 'photons', ' Ph', this.dimensions['photonic_3']);
        this.dimensions['photonic_5'] = new Dimension('photonic_5', 4, 'photonic_5_cost', 'photonic_5_pow', 'photonic_5_unlock', 'photons', ' Ph', this.dimensions['photonic_4']);
        this.dimensions['photonic_6'] = new Dimension('photonic_6', 5, 'photonic_6_cost', 'photonic_6_pow', 'photonic_6_unlock', 'photons', ' Ph', this.dimensions['photonic_5']);
        this.dimensions['photonic_7'] = new Dimension('photonic_7', 6, 'photonic_7_cost', 'photonic_7_pow', 'photonic_7_unlock', 'photons', ' Ph', this.dimensions['photonic_6']);
        this.dimensions['photonic_8'] = new Dimension('photonic_8', 7, 'photonic_8_cost', 'photonic_8_pow', 'photonic_8_unlock', 'photons', ' Ph', this.dimensions['photonic_7']);
        this.dimensions['photonic_9'] = new Dimension('photonic_9', 8, 'photonic_9_cost', 'photonic_9_pow', 'photonic_9_unlock', 'photons', ' Ph', this.dimensions['photonic_8']);
        this.dimensions['photonic_10'] = new Dimension('photonic_10', 9, 'photonic_10_cost', 'photonic_10_pow', 'photonic_10_unlock', 'photons', ' Ph', this.dimensions['photonic_9']);
        this.dimensions['photonic_11'] = new Dimension('photonic_11', 10, 'photonic_11_cost', 'photonic_11_pow', 'photonic_11_unlock', 'photons', ' Ph', this.dimensions['photonic_10']);
        this.dimensions['photonic_12'] = new Dimension('photonic_12', 11, 'photonic_12_cost', 'photonic_12_pow', 'photonic_12_unlock', 'photons', ' Ph', this.dimensions['photonic_11']);

        this.dimensions['gravitonic_1'] = new Dimension('gravitonic_1', 0, 'gravitonic_1_cost', 'gravitonic_1_pow', 'gravitonic_1_unlock', 'gravitons', ' Gr', 'black_holes');
        this.dimensions['gravitonic_2'] = new Dimension('gravitonic_2', 1, 'gravitonic_2_cost', 'gravitonic_2_pow', 'gravitonic_2_unlock', 'gravitons', ' Gr', this.dimensions['gravitonic_1']);
        this.dimensions['gravitonic_3'] = new Dimension('gravitonic_3', 2, 'gravitonic_3_cost', 'gravitonic_3_pow', 'gravitonic_3_unlock', 'gravitons', ' Gr', this.dimensions['gravitonic_2']);
        this.dimensions['gravitonic_4'] = new Dimension('gravitonic_4', 3, 'gravitonic_4_cost', 'gravitonic_4_pow', 'gravitonic_4_unlock', 'gravitons', ' Gr', this.dimensions['gravitonic_3']);
        this.dimensions['gravitonic_5'] = new Dimension('gravitonic_5', 4, 'gravitonic_5_cost', 'gravitonic_5_pow', 'gravitonic_5_unlock', 'gravitons', ' Gr', this.dimensions['gravitonic_4']);
        this.dimensions['gravitonic_6'] = new Dimension('gravitonic_6', 5, 'gravitonic_6_cost', 'gravitonic_6_pow', 'gravitonic_6_unlock', 'gravitons', ' Gr', this.dimensions['gravitonic_5']);
        this.dimensions['gravitonic_7'] = new Dimension('gravitonic_7', 6, 'gravitonic_7_cost', 'gravitonic_7_pow', 'gravitonic_7_unlock', 'gravitons', ' Gr', this.dimensions['gravitonic_6']);
        this.dimensions['gravitonic_8'] = new Dimension('gravitonic_8', 7, 'gravitonic_8_cost', 'gravitonic_8_pow', 'gravitonic_8_unlock', 'gravitons', ' Gr', this.dimensions['gravitonic_7']);
        this.dimensions['gravitonic_9'] = new Dimension('gravitonic_9', 8, 'gravitonic_9_cost', 'gravitonic_9_pow', 'gravitonic_9_unlock', 'gravitons', ' Gr', this.dimensions['gravitonic_8']);
        this.dimensions['gravitonic_10'] = new Dimension('gravitonic_10', 9, 'gravitonic_10_cost', 'gravitonic_10_pow', 'gravitonic_10_unlock', 'gravitons', ' Gr', this.dimensions['gravitonic_9']);
        this.dimensions['gravitonic_11'] = new Dimension('gravitonic_11', 10, 'gravitonic_11_cost', 'gravitonic_11_pow', 'gravitonic_11_unlock', 'gravitons', ' Gr', this.dimensions['gravitonic_10']);
        this.dimensions['gravitonic_12'] = new Dimension('gravitonic_12', 11, 'gravitonic_12_cost', 'gravitonic_12_pow', 'gravitonic_12_unlock', 'gravitons', ' Gr', this.dimensions['gravitonic_11']);

        this.dimensions['neutronic_1'] = new Dimension('neutronic_1', 0, 'neutronic_1_cost', 'neutronic_1_pow', 'neutronic_1_unlock', 'neutrons', ' Ntr', 'stars');
        this.dimensions['neutronic_2'] = new Dimension('neutronic_2', 1, 'neutronic_2_cost', 'neutronic_2_pow', 'neutronic_2_unlock', 'neutrons', ' Ntr', this.dimensions['neutronic_1']);
        this.dimensions['neutronic_3'] = new Dimension('neutronic_3', 2, 'neutronic_3_cost', 'neutronic_3_pow', 'neutronic_3_unlock', 'neutrons', ' Ntr', this.dimensions['neutronic_2']);
        this.dimensions['neutronic_4'] = new Dimension('neutronic_4', 3, 'neutronic_4_cost', 'neutronic_4_pow', 'neutronic_4_unlock', 'neutrons', ' Ntr', this.dimensions['neutronic_3']);
        this.dimensions['neutronic_5'] = new Dimension('neutronic_5', 4, 'neutronic_5_cost', 'neutronic_5_pow', 'neutronic_5_unlock', 'neutrons', ' Ntr', this.dimensions['neutronic_4']);
        this.dimensions['neutronic_6'] = new Dimension('neutronic_6', 5, 'neutronic_6_cost', 'neutronic_6_pow', 'neutronic_6_unlock', 'neutrons', ' Ntr', this.dimensions['neutronic_5']);
        this.dimensions['neutronic_7'] = new Dimension('neutronic_7', 6, 'neutronic_7_cost', 'neutronic_7_pow', 'neutronic_7_unlock', 'neutrons', ' Ntr', this.dimensions['neutronic_6']);
        this.dimensions['neutronic_8'] = new Dimension('neutronic_8', 7, 'neutronic_8_cost', 'neutronic_8_pow', 'neutronic_8_unlock', 'neutrons', ' Ntr', this.dimensions['neutronic_7']);
        this.dimensions['neutronic_9'] = new Dimension('neutronic_9', 8, 'neutronic_9_cost', 'neutronic_9_pow', 'neutronic_9_unlock', 'neutrons', ' Ntr', this.dimensions['neutronic_8']);
        this.dimensions['neutronic_10'] = new Dimension('neutronic_10', 9, 'neutronic_10_cost', 'neutronic_10_pow', 'neutronic_10_unlock', 'neutrons', ' Ntr', this.dimensions['neutronic_9']);
        this.dimensions['neutronic_11'] = new Dimension('neutronic_11', 10, 'neutronic_11_cost', 'neutronic_11_pow', 'neutronic_11_unlock', 'neutrons', ' Ntr', this.dimensions['neutronic_10']);
        this.dimensions['neutronic_12'] = new Dimension('neutronic_12', 11, 'neutronic_12_cost', 'neutronic_12_pow', 'neutronic_12_unlock', 'neutrons', ' Ntr', this.dimensions['neutronic_11']);

        this.dimensions['vacuumic_1'] = new Dimension('vacuumic_1', 0, 'vacuumic_1_cost', 'vacuumic_1_pow', 'vacuumic_1_unlock', 'vacuum_energy', ' VE', 'inflation');
        this.dimensions['vacuumic_2'] = new Dimension('vacuumic_2', 1, 'vacuumic_2_cost', 'vacuumic_2_pow', 'vacuumic_2_unlock', 'vacuum_energy', ' VE', this.dimensions['vacuumic_1']);
        this.dimensions['vacuumic_3'] = new Dimension('vacuumic_3', 2, 'vacuumic_3_cost', 'vacuumic_3_pow', 'vacuumic_3_unlock', 'vacuum_energy', ' VE', this.dimensions['vacuumic_2']);
        this.dimensions['vacuumic_4'] = new Dimension('vacuumic_4', 3, 'vacuumic_4_cost', 'vacuumic_4_pow', 'vacuumic_4_unlock', 'vacuum_energy', ' VE', this.dimensions['vacuumic_3']);
        this.dimensions['vacuumic_5'] = new Dimension('vacuumic_5', 4, 'vacuumic_5_cost', 'vacuumic_5_pow', 'vacuumic_5_unlock', 'vacuum_energy', ' VE', this.dimensions['vacuumic_4']);
        this.dimensions['vacuumic_6'] = new Dimension('vacuumic_6', 5, 'vacuumic_6_cost', 'vacuumic_6_pow', 'vacuumic_6_unlock', 'vacuum_energy', ' VE', this.dimensions['vacuumic_5']);
        this.dimensions['vacuumic_7'] = new Dimension('vacuumic_7', 6, 'vacuumic_7_cost', 'vacuumic_7_pow', 'vacuumic_7_unlock', 'vacuum_energy', ' VE', this.dimensions['vacuumic_6']);
        this.dimensions['vacuumic_8'] = new Dimension('vacuumic_8', 7, 'vacuumic_8_cost', 'vacuumic_8_pow', 'vacuumic_8_unlock', 'vacuum_energy', ' VE', this.dimensions['vacuumic_7']);
        this.dimensions['vacuumic_9'] = new Dimension('vacuumic_9', 8, 'vacuumic_9_cost', 'vacuumic_9_pow', 'vacuumic_9_unlock', 'vacuum_energy', ' VE', this.dimensions['vacuumic_8']);
        this.dimensions['vacuumic_10'] = new Dimension('vacuumic_10', 9, 'vacuumic_10_cost', 'vacuumic_10_pow', 'vacuumic_10_unlock', 'vacuum_energy', ' VE', this.dimensions['vacuumic_9']);
        this.dimensions['vacuumic_11'] = new Dimension('vacuumic_11', 10, 'vacuumic_11_cost', 'vacuumic_11_pow', 'vacuumic_11_unlock', 'vacuum_energy', ' VE', this.dimensions['vacuumic_10']);
        this.dimensions['vacuumic_12'] = new Dimension('vacuumic_12', 11, 'vacuumic_12_cost', 'vacuumic_12_pow', 'vacuumic_12_unlock', 'vacuum_energy', ' VE', this.dimensions['vacuumic_11']);

        this.dimensions['dimensional_1'] = new Dimension('dimensional_1', 0, 'dimensional_1_cost', 'dimensional_1_pow', 'dimensional_1_unlock', 'shards', ' Sh', 'manifolds');
        this.dimensions['dimensional_2'] = new Dimension('dimensional_2', 1, 'dimensional_2_cost', 'dimensional_2_pow', 'dimensional_2_unlock', 'shards', ' Sh', this.dimensions['dimensional_1']);
        this.dimensions['dimensional_3'] = new Dimension('dimensional_3', 2, 'dimensional_3_cost', 'dimensional_3_pow', 'dimensional_3_unlock', 'shards', ' Sh', this.dimensions['dimensional_2']);
        this.dimensions['dimensional_4'] = new Dimension('dimensional_4', 3, 'dimensional_4_cost', 'dimensional_4_pow', 'dimensional_4_unlock', 'shards', ' Sh', this.dimensions['dimensional_3']);
        this.dimensions['dimensional_5'] = new Dimension('dimensional_5', 4, 'dimensional_5_cost', 'dimensional_5_pow', 'dimensional_5_unlock', 'shards', ' Sh', this.dimensions['dimensional_4']);
        this.dimensions['dimensional_6'] = new Dimension('dimensional_6', 5, 'dimensional_6_cost', 'dimensional_6_pow', 'dimensional_6_unlock', 'shards', ' Sh', this.dimensions['dimensional_5']);
        this.dimensions['dimensional_7'] = new Dimension('dimensional_7', 6, 'dimensional_7_cost', 'dimensional_7_pow', 'dimensional_7_unlock', 'shards', ' Sh', this.dimensions['dimensional_6']);
        this.dimensions['dimensional_8'] = new Dimension('dimensional_8', 7, 'dimensional_8_cost', 'dimensional_8_pow', 'dimensional_8_unlock', 'shards', ' Sh', this.dimensions['dimensional_7']);
        this.dimensions['dimensional_9'] = new Dimension('dimensional_9', 8, 'dimensional_9_cost', 'dimensional_9_pow', 'dimensional_9_unlock', 'shards', ' Sh', this.dimensions['dimensional_8']);
        this.dimensions['dimensional_10'] = new Dimension('dimensional_10', 9, 'dimensional_10_cost', 'dimensional_10_pow', 'dimensional_10_unlock', 'shards', ' Sh', this.dimensions['dimensional_9']);
        this.dimensions['dimensional_11'] = new Dimension('dimensional_11', 10, 'dimensional_11_cost', 'dimensional_11_pow', 'dimensional_11_unlock', 'shards', ' Sh', this.dimensions['dimensional_10']);
        this.dimensions['dimensional_12'] = new Dimension('dimensional_12', 11, 'dimensional_12_cost', 'dimensional_12_pow', 'dimensional_12_unlock', 'shards', ' Sh', this.dimensions['dimensional_11']);

        this.dimensions['protons'] = new Dimension('protons', 0, 'protons_cost', 'protons_pow', 'protons_unlock', 'neutrons', ' Neutrons', 'proton_power', true);
        this.dimensions['electrons'] = new Dimension('electrons', 0, 'electrons_cost', 'electrons_pow', 'electrons_unlock', 'neutrons', ' Neutrons', 'electron_power', true);
        this.dimensions['bosons'] = new Dimension('bosons', 0, 'bosons_cost', 'bosons_pow', 'bosons_unlock', 'neutrons', ' Neutrons', 'boson_power', true);

        this.achievements = {};
        this.achievements["11"] = new Achievement("11", "Rough Start", "Buy 1st Matter Dimension", "check_11");
        this.achievements["12"] = new Achievement("12", "Second Thoughts", "Play for 1 second", "check_12");
        this.achievements["13"] = new Achievement("13", "Let There be Light", "Generate 1 energy", "check_13");
        this.achievements["14"] = new Achievement("14", "High Five", "Buy all five 1-photon upgrades", "check_14");
        this.achievements["15"] = new Achievement("15", "Formula Break", "Get more than 1 Photon from Photonic reset.\nReward: gain 3.14 times more Photons from resets", "check_15", "effective");
        this.achievements["16"] = new Achievement("16", "We couldn't afford 9", "Have 6 matter", "check_16");
        this.achievements["17"] = new Achievement("17", "100 Antimatter is a lot", "Have 100 antimatter.\nReward: 2nd Matter Dimensions produce 10% faster", "check_17", "effective");
        this.achievements["18"] = new Achievement("18", "Nothing Matters", "Have zero matter.\nReward: all matter dimensions produce 8 times more", "check_18", "effective");

        this.achievements["21"] = new Achievement("21", "Quadratic Growth", "Buy 2nd Matter Dimension", "check_21");
        this.achievements["22"] = new Achievement("22", "Give me a Minute", "Play for 1 minute", "check_22");
        this.achievements["23"] = new Achievement("23", "Let There be Light, for real", "Start producing Light", "check_23");
        this.achievements["24"] = new Achievement("24", "Explosive Breeding", "Have more than two 1st Matter Dimensions", "check_24");
        this.achievements["25"] = new Achievement("25", "Challenged", "Start a Challenge", "check_25");
        this.achievements["26"] = new Achievement("26", "Anti challenged", "Complete a Challenge", "check_26");
        this.achievements["27"] = new Achievement("27", "Blink of an eye", "Photonic in less than 200 milliseconds", "check_27");
        this.achievements["28"] = new Achievement("28", "Baryon Asymmetry", "Have zero antimatter.\nReward: antimatter grows 16% faster", "check_28", "effective");

        this.achievements["31"] = new Achievement("31", "Three is a Crowd", "Buy 3rd Matter Dimension", "check_31");
        this.achievements["32"] = new Achievement("32", "Massive Consequences", "Go Neutronic.\nReward: you gain 20% more Gravitons from resets, and unlock Automation Shop", "check_32", "effective");
        this.achievements["33"] = new Achievement("33", "It's useless!", "Buy 3rd Photonic Dimension.\nReward: 3rd Photonic Dimensions produce 2 times faster", "check_33", "effective");
        this.achievements["34"] = new Achievement("34", "Five Star Rating", "Get at least 5 Gravitons from a single Gravitonic reset", "check_34");
        this.achievements["35"] = new Achievement("35", "Star Citizen", "Get more than 100 Photons from a single Photonic reset.\nReward: all Photonic dimensions produce 10 times more", "check_35", "effective");
        this.achievements["36"] = new Achievement("36", "Zero Blinks", "Gravitonic without Photonic resets", "check_36");
        this.achievements["37"] = new Achievement("37", "Many Blinks", "Gravitonic in less than 300 milliseconds", "check_37");
        this.achievements["38"] = new Achievement("38", "99.9% Uptime", "Photonic 1000 times", "check_38");

        this.achievements["41"] = new Achievement("41", "Where's the fifth?", "Buy 4th Matter Dimension", "check_41");
        this.achievements["42"] = new Achievement("42", "Glass Ceiling", "Reach 1e10 matter.\nReward: you can have 2 times more resources", "check_42", "effective");
        this.achievements["43"] = new Achievement("43", "There are Four Lights", "Buy 4th Photonic Dimension", "check_43");
        this.achievements["44"] = new Achievement("44", "Time is relative", "Buy a Tickspeed Upgrade", "check_44");
        this.achievements["45"] = new Achievement("45", "Formula Break II", "Get more than 1 Neutron from Neutronic reset.\nReward: Neutron gain from Neutronic resets is squared", "check_45", "effective");
        this.achievements["46"] = new Achievement("46", "Contemplating the Infinite", "Have an Infinite multiplier to Matter Dimensions from Light", "check_46");
        this.achievements["47"] = new Achievement("47", "Gravistonks", "Get more than 10 Gravitons in a single Gravitonic reset.\nReward: you gain 10% more Gravitons from resets", "check_47", "effective");
        this.achievements["48"] = new Achievement("48", "Over in 30", "Have zero antimatter in the first 30 milliseconds of a Gravitonic.\nReward: antimatter grows 32% faster", "check_48", "effective");

        this.achievements["51"] = new Achievement("51", "I feel powerful", "Start generating particle power", "check_51");
        this.achievements["52"] = new Achievement("52", "I feel weak", "Buy 10 protons, electrons and W-bosons each.\nReward: you can max buy Neutronic particles", "check_52", "effective");
        this.achievements["53"] = new Achievement("53", "I was never challenged", "Finish Photonic Challenge 1 in less than 60 milliseconds", "check_53");
        this.achievements["54"] = new Achievement("54", "Wanna see me speed Neutronic?", "Neutronic in less than 200 milliseconds", "check_54");
        this.achievements["55"] = new Achievement("55", "Skipping Layers", "Neutronic without Photonic or Gravitonic resets", "check_55");
        this.achievements["56"] = new Achievement("56", "Millionaire", "Have a million of 1st Matter Dimensions", "check_56");
        this.achievements["57"] = new Achievement("57", "99% Downtime", "Gravitonic 100 times.\nReward: upon Gravitonic reset, gain a Gravitonic reset per each Graviton earned", "check_57", "effective");
        this.achievements["58"] = new Achievement("58", "Inflation Era", "Produce over 100 space per second", "check_58");

        this.achievements["61"] = new Achievement("61", "I'm So Meta", "Buy 10 4th Matter Dimensions.\nReward: gain an extra Shard on Dimensional resets", "check_61", "effective");
        this.achievements["62"] = new Achievement("62", "Matter Mayhem", "Reach 1e80 matter.\nReward: Gravitonic upgrades that provide automation are never reset", "check_62", "effective");
        this.achievements["63"] = new Achievement("63", "Event Horizon", "Produce 1000 Black Holes", "check_63");
        this.achievements["64"] = new Achievement("64", "Overachiever", "Reach 1e100 matter in any Gravitonic challenge", "check_64");
        this.achievements["65"] = new Achievement("65", "Nested Challenges", "Start a Photonic challenge inside a Gravitonic challenge", "check_65");
        this.achievements["66"] = new Achievement("66", "Solar Flare", "Get more than 1e8 Photons from a single Photonic reset", "check_66");
        this.achievements["67"] = new Achievement("67", "The Challenging Minute", "Complete 12 challenges in total", "check_67");
        this.achievements["68"] = new Achievement("68", "SpaceX", "Have 10 Space Theorems in total.\nReward: you can max buy Photonic upgrades", "check_68", "effective");

        this.achievements["71"] = new Achievement("71", "NEW DIMENSIONS???", "Buy 5th Matter Dimension", "check_71");
        this.achievements["72"] = new Achievement("72", "Hex", "Buy 6th Matter Dimension", "check_72");
        this.achievements["73"] = new Achievement("73", "Supernova", "Buy a Neutronic Dimension", "check_73");
        this.achievements["74"] = new Achievement("74", "Faster than a potato", "Reach 1e29/s tickspeed", "check_74");
        this.achievements["75"] = new Achievement("75", "You got past The Big Wall", "Reach 1e200 matter", "check_75");
        this.achievements["76"] = new Achievement("76", "This. Is. Hell.", "Complete Photonic Challenge 6 while in Gravitonic Challenge 6 and Neutronic Challenge 6.\nReward: all prime-numbered Matter Dimensions produce 666 times more", "check_76", "effective");
        this.achievements["77"] = new Achievement("77", "The first one is always free", "Complete each regular Neutronic challenge once", "check_77");
        this.achievements["78"] = new Achievement("78", "Metaphor gotten", "Complete a Meta-Challenge", "check_78");

        this.achievements["81"] = new Achievement("81", "Not a luck related achievement", "Buy 7th Matter Dimension", "check_81");
        this.achievements["82"] = new Achievement("82", "Limit Break", "Break Infinity", "check_82");
        this.achievements["83"] = new Achievement("83", "Background Radiation", "Reach 2.73 K of Temperature.\nReward: unlock the option to distribute 50% of produced energy to heating", "check_83", "effective");
        this.achievements["84"] = new Achievement("84", "Republican Victory", "Obtain a Red Wave", "check_84");
        this.achievements["85"] = new Achievement("85", "Paralympic Contestant", "Complete Gravitonic Challenge 1 or Gravitonic Challenge 2.\nReward: you can max buy Gravitonic upgrades", "check_85", "effective");
        this.achievements["86"] = new Achievement("86", "Why did I do this?", "Be in two Meta-Challenges at once", "check_86");
        this.achievements["87"] = new Achievement("87", "The second one is not so free", "Complete any Neutronic challenge twice", "check_87");
        this.achievements["88"] = new Achievement("88", "1024 bits is not enough", "Get your resource limit above 2^1024.\nReward: you always keep automation upgrades not in Automation Shop", "check_88", "effective");

        this.achievements["91"] = new Achievement("91", "Home Alone", "Perform an Atomic reset once.\nReward: the resource limit is 1e10 times higher", "check_91", "effective");
        this.achievements["92"] = new Achievement("92", "Inseparable", "Perform an Atomic reset twice.\nReward: base shard gain from Dimensional resets is doubled", "check_92", "effective");
        this.achievements["93"] = new Achievement("93", "Messing with Molecules", "Perform an Atomic reset thrice.\nReward: unlock Collider in Atomic tab", "check_93", "effective");
        this.achievements["94"] = new Achievement("94", "Democratic Victory", "Obtain a Blue Wave", "check_94");
        this.achievements["95"] = new Achievement("95", "Hey, it's not cold anymore!", "Reach 0 °C (273.15 K, 32 °F) of Temperature", "check_95");
        this.achievements["96"] = new Achievement("96", "Empty Vacuum", "Vacuumic without Photonic, Gravitonic or Neutronic resets.\nReward: always keep Photonic upgrades on resets", "check_96", "effective");
        this.achievements["97"] = new Achievement("97", "The third one is kinda expensive", "Complete any Neutronic challenge three times", "check_97");
        this.achievements["98"] = new Achievement("98", "Infinite Time", "Reach 1.79e308/s tickspeed", "check_98");

        this.achievements["101"] = new Achievement("101", "Combinatorial Explosion", "Have 5 Collision Points", "check_101");
        this.achievements["102"] = new Achievement("102", "Type II Civilization", "Have 1e26 Photons", "check_102");
        this.achievements["103"] = new Achievement("103", "Stellar Engine", "Get 50 free Tickspeed Upgrades from Stars.\nReward: gain 25% more Tickspeed Upgrades from Stars", "check_103", "effective");
        this.achievements["104"] = new Achievement("104", "Underachiever", "Reach 1e100 matter in Gravitonic Meta-Challenge", "check_104");
        this.achievements["105"] = new Achievement("105", "Up to Eleven", "Have 11 purchased upgrades in Automation Shop", "check_105");
        this.achievements["106"] = new Achievement("106", "Big Rip", "Dimensional without Photonic, Gravitonic, Neutronic or Vacuumic resets", "check_106");
        this.achievements["107"] = new Achievement("107", "The fourth one costs a fortune", "Complete any Neutronic challenge four times", "check_107");
        this.achievements["108"] = new Achievement("108", "Infinite Space", "Have at least 1.79e308 Vacuum Energy.\nReward: Space and Vacuum Energy are not affected by resource limit", "check_108", "effective");

        this.achievements["111"] = new Achievement("111", "Unitary", "Dimensional for at least 11111 Shards.\nReward: gain 111% more Shards on Dimensional resets", "check_111", "effective");
        this.achievements["112"] = new Achievement("112", "Fifth Element", "Get a level of Boron.\nReward: first four Matter Dimensions are unlocked from the start of each reset", "check_112", "effective");
        this.achievements["113"] = new Achievement("113", "Hey, that's illegal!", "Finish Photonic Challenge 1 in exactly 0 milliseconds", "check_113");
        this.achievements["114"] = new Achievement("114", "LET THERE BE MORE LIGHT", "Have at least 1.79e308 Light", "check_114");
        this.achievements["115"] = new Achievement("115", "Hellscape", "Reach 666 K of Temperature.\nReward: Temperature is not reduced on Vacuumic resets", "check_115", "effective");
        this.achievements["116"] = new Achievement("116", "Gravioli", "Get more than 10000 Gravitons in a single Gravitonic reset", "check_116");
        this.achievements["117"] = new Achievement("117", "The fifth one is done", "Complete any Neutronic challenge five times.\nReward: each Neutronic challenge that is completed five times divides Neutronic Meta-Challenge goal exponent by 10", "check_117", "effective");
        this.achievements["118"] = new Achievement("118", "The universe is full, go away!", "Have more Space than your resource limit.\nReward: Space gain is raised to a power of 1.1, if it is above 1/s", "check_118", "effective");

        this.achievements["121"] = new Achievement("121", "It is alive!", "Go Biological", "check_121");
        this.achievements["122"] = new Achievement("122", "I can't see what I am doing!", "Have more Atoms than your resource limit", "check_122");
        this.achievements["123"] = new Achievement("123", "IT'S OVER 9000!", "Have over 1e9000/s tickspeed", "check_123");
        this.achievements["124"] = new Achievement("124", "Completionist", "Complete Gravitonic Meta-Challenge", "check_124");
        this.achievements["125"] = new Achievement("125", "Particle Party", "Buy 200 protons, electrons and W-Bosons each.\nReward: you can max buy Neutronic upgrades", "check_125", "effective");
        this.achievements["126"] = new Achievement("126", "This achievement doesn't exist", "Have at least 9.999e9'999 matter", "check_126");
        this.achievements["127"] = new Achievement("127", "Infinite Problems", "Complete a Vacuumic challenge", "check_127");
        this.achievements["128"] = new Achievement("128", "Why did I do this again?", "Be in three Meta-Challenges at once", "check_128");

        this.upgrades = {};
        this.upgrades["INERTIA_1"] = new Upgrade("INERTIA_1", -1, "upg_INERTIA_1_cost", "upg_INERTIA_1_power", "upg_INERTIA_1_unlock", "inertia", " of Inertia", "upg_INERTIA_1_available", "", "upg_INERTIA_1_cost_display_function", true);
        this.upgrades["INERTIA_2"] = new Upgrade("INERTIA_2", 4, "upg_INERTIA_2_cost", "upg_INERTIA_2_power", "upg_INERTIA_2_unlock", "inertia", " of Inertia", "upg_INERTIA_2_available", "", "upg_INERTIA_2_cost_display_function", true);
        this.upgrades["INERTIA_3"] = new Upgrade("INERTIA_3", -1, "upg_INERTIA_3_cost", "upg_INERTIA_3_power", "upg_INERTIA_3_unlock", "inertia", " of Inertia", "upg_INERTIA_3_available", "upg_INERTIA_3_buy_function", "upg_INERTIA_3_cost_display_function", true);
        this.upgrades["INERTIA_4"] = new Upgrade("INERTIA_4", -1, "upg_INERTIA_4_cost", "upg_INERTIA_4_power", "upg_INERTIA_4_unlock", "inertia", " of Inertia", "upg_INERTIA_4_available", "", "upg_INERTIA_4_cost_display_function", true);
        this.upgrades["INERTIA_5"] = new Upgrade("INERTIA_5", 4, "upg_INERTIA_5_cost", "upg_INERTIA_5_power", "upg_INERTIA_5_unlock", "inertia", " of Inertia", "upg_INERTIA_5_available", "", "upg_INERTIA_5_cost_display_function", true);

        this.upgrades["TICKSPEED"] = new Upgrade("TICKSPEED", -1, "upg_TICKSPEED_cost", "upg_TICKSPEED_power", "upg_TICKSPEED_unlock", "matter", "", "upg_TICKSPEED_available");

        this.upgrades["COLLISION_POINT"] = new Upgrade("COLLISION_POINT", -1, "upg_COLLISION_POINT_cost", "upg_COLLISION_POINT_power", "upg_COLLISION_POINT_unlock", "collision_knowledge", " Collision Knowledge", "upg_COLLISION_POINT_available", "upg_COLLISION_POINT_buy");

        this.upgrades["AUTO1_1"] = new Upgrade("AUTO1_1", 1, "upg_AUTO1_1_cost", "upg_automation_power", "upg_automation_neutronic_unlock", "neutrons", [" Neutron", " Neutrons"], "upg_automation_neutronic_unlock");
        this.upgrades["AUTO1_2"] = new Upgrade("AUTO1_2", 1, "upg_AUTO1_2_cost", "upg_automation_power", "upg_automation_neutronic_unlock", "neutrons", [" Neutron", " Neutrons"], "upg_automation_neutronic_unlock");
        this.upgrades["AUTO1_3"] = new Upgrade("AUTO1_3", 1, "upg_AUTO1_3_cost", "upg_automation_power", "upg_automation_vacuumic_unlock", "vacuum_energy", " VE", "upg_automation_vacuumic_unlock");
        this.upgrades["AUTO1_4"] = new Upgrade("AUTO1_4", 1, "upg_AUTO1_4_cost", "upg_automation_power", "upg_automation_dimensional_unlock", "shards", [" Shard", " Shards"], "upg_automation_dimensional_unlock");
        this.upgrades["AUTO1_5"] = new Upgrade("AUTO1_5", 1, "upg_AUTO1_5_cost", "upg_automation_power", "upg_automation_atomic_unlock", "atoms", [" Atom", " Atoms"], "upg_automation_atomic_unlock");

        this.upgrades["AUTO2_1"] = new Upgrade("AUTO2_1", 1, "upg_AUTO2_1_cost", "upg_automation_power", "upg_automation_vacuumic_unlock", "vacuum_energy", " VE", "upg_automation_vacuumic_unlock");
        this.upgrades["AUTO2_2"] = new Upgrade("AUTO2_2", 1, "upg_AUTO2_2_cost", "upg_automation_power", "upg_automation_vacuumic_unlock", "vacuum_energy", " VE", "upg_automation_vacuumic_unlock");
        this.upgrades["AUTO2_3"] = new Upgrade("AUTO2_3", 1, "upg_AUTO2_3_cost", "upg_automation_power", "upg_automation_dimensional_unlock", "shards", [" Shard", " Shards"], "upg_automation_dimensional_unlock");
        this.upgrades["AUTO2_4"] = new Upgrade("AUTO2_4", 1, "upg_AUTO2_4_cost", "upg_automation_power", "upg_automation_atomic_unlock", "atoms", [" Atom", " Atoms"], "upg_automation_atomic_unlock");

        this.upgrades["AUTO3_1"] = new Upgrade("AUTO3_1", 1, "upg_AUTO3_1_cost", "upg_automation_power", "upg_automation_dimensional_unlock", "shards", [" Shard", " Shards"], "upg_automation_dimensional_unlock");
        this.upgrades["AUTO3_2"] = new Upgrade("AUTO3_2", 1, "upg_AUTO3_2_cost", "upg_automation_power", "upg_automation_dimensional_unlock", "shards", [" Shard", " Shards"], "upg_automation_dimensional_unlock");
        this.upgrades["AUTO3_3"] = new Upgrade("AUTO3_3", 1, "upg_AUTO3_3_cost", "upg_automation_power", "upg_automation_atomic_unlock", "atoms", [" Atom", " Atoms"], "upg_automation_atomic_unlock");

        this.upgrades["AUTO4_1"] = new Upgrade("AUTO4_1", 1, "upg_AUTO4_1_cost", "upg_automation_power", "upg_automation_atomic_unlock", "atoms", [" Atom", " Atoms"], "upg_automation_atomic_unlock");
        this.upgrades["AUTO4_2"] = new Upgrade("AUTO4_2", 1, "upg_AUTO4_2_cost", "upg_automation_power", "upg_automation_atomic_unlock", "atoms", [" Atom", " Atoms"], "upg_automation_atomic_unlock");

        this.upgrades["p11"] = new Upgrade("p11", -1, "upg_p11_cost", "upg_p11_power", "upg_p11_unlock", "photons", [" Photon", " Photons"], "upg_p11_available");
        this.upgrades["p12"] = new Upgrade("p12", -1, "upg_p12_cost", "upg_p12_power", "upg_p12_unlock", "photons", [" Photon", " Photons"], "upg_p12_available");
        this.upgrades["p13"] = new Upgrade("p13", 1, "upg_p13_cost", "upg_p13_power", "upg_p13_unlock", "photons", [" Photon", " Photons"], "upg_p13_available");
        this.upgrades["p14"] = new Upgrade("p14", 1, "upg_p14_cost", "upg_p14_power", "upg_p14_unlock", "photons", [" Photon", " Photons"], "upg_p14_available");
        this.upgrades["p15"] = new Upgrade("p15", 1, "upg_p15_cost", "upg_p15_power", "upg_p15_unlock", "photons", [" Photon", " Photons"], "upg_p15_available");
        this.upgrades["p21"] = new Upgrade("p21", -1, "upg_p21_cost", "upg_p21_power", "upg_p21_unlock", "photons", [" Photon", " Photons"], "upg_p21_available");
        this.upgrades["p22"] = new Upgrade("p22", -1, "upg_p22_cost", "upg_p22_power", "upg_p22_unlock", "photons", [" Photon", " Photons"], "upg_p22_available");
        this.upgrades["p23"] = new Upgrade("p23", 1, "upg_p23_cost", "upg_p23_power", "upg_p23_unlock", "photons", [" Photon", " Photons"], "upg_p23_available");
        this.upgrades["p24"] = new Upgrade("p24", 1, "upg_p24_cost", "upg_p24_power", "upg_p24_unlock", "photons", [" Photon", " Photons"], "upg_p24_available");
        this.upgrades["p25"] = new Upgrade("p25", 1, "upg_p25_cost", "upg_p25_power", "upg_p25_unlock", "photons", [" Photon", " Photons"], "upg_p25_available");
        this.upgrades["p31"] = new Upgrade("p31", -1, "upg_p31_cost", "upg_p31_power", "upg_p31_unlock", "photons", [" Photon", " Photons"], "upg_p31_available");
        this.upgrades["p32"] = new Upgrade("p32", -1, "upg_p32_cost", "upg_p32_power", "upg_p32_unlock", "photons", [" Photon", " Photons"], "upg_p32_available");
        this.upgrades["p33"] = new Upgrade("p33", 1, "upg_p33_cost", "upg_p33_power", "upg_p33_unlock", "photons", [" Photon", " Photons"], "upg_p33_available");
        this.upgrades["p34"] = new Upgrade("p34", 1, "upg_p34_cost", "upg_p34_power", "upg_p34_unlock", "photons", [" Photon", " Photons"], "upg_p34_available");
        this.upgrades["p35"] = new Upgrade("p35", 1, "upg_p35_cost", "upg_p35_power", "upg_p35_unlock", "photons", [" Photon", " Photons"], "upg_p35_available");
        this.upgrades["p41"] = new Upgrade("p41", -1, "upg_p41_cost", "upg_p41_power", "upg_p41_unlock", "photons", [" Photon", " Photons"], "upg_p41_available");
        this.upgrades["p42"] = new Upgrade("p42", -1, "upg_p42_cost", "upg_p42_power", "upg_p42_unlock", "photons", [" Photon", " Photons"], "upg_p42_available");
        this.upgrades["p43"] = new Upgrade("p43", 1, "upg_p43_cost", "upg_p43_power", "upg_p43_unlock", "photons", [" Photon", " Photons"], "upg_p43_available");
        this.upgrades["p44"] = new Upgrade("p44", 1, "upg_p44_cost", "upg_p44_power", "upg_p44_unlock", "photons", [" Photon", " Photons"], "upg_p44_available");
        this.upgrades["p45"] = new Upgrade("p45", 1, "upg_p45_cost", "upg_p45_power", "upg_p45_unlock", "photons", [" Photon", " Photons"], "upg_p45_available");
        this.upgrades["p51"] = new Upgrade("p51", -1, "upg_p51_cost", "upg_p51_power", "upg_p51_unlock", "photons", [" Photon", " Photons"], "upg_p51_available");
        this.upgrades["p52"] = new Upgrade("p52", -1, "upg_p52_cost", "upg_p52_power", "upg_p52_unlock", "photons", [" Photon", " Photons"], "upg_p52_available");
        this.upgrades["p53"] = new Upgrade("p53", 1, "upg_p53_cost", "upg_p53_power", "upg_p53_unlock", "photons", [" Photon", " Photons"], "upg_p53_available");
        this.upgrades["p54"] = new Upgrade("p54", 1, "upg_p54_cost", "upg_p54_power", "upg_p54_unlock", "photons", [" Photon", " Photons"], "upg_p54_available");
        this.upgrades["p55"] = new Upgrade("p55", 1, "upg_p55_cost", "upg_p55_power", "upg_p55_unlock", "photons", [" Photon", " Photons"], "upg_p55_available");

        this.upgrades["g01"] = new Upgrade("g01", 1, "upg_g01_cost", "upg_g01_power", "upg_g01_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g01_available", "upg_g01_buy");
        this.upgrades["g10"] = new Upgrade("g10", 1, "upg_g10_cost", "upg_g10_power", "upg_g10_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g10_available");
        this.upgrades["g11"] = new Upgrade("g11", 1, "upg_g11_cost", "upg_g11_power", "upg_g11_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g11_available");
        this.upgrades["g12"] = new Upgrade("g12", -1, "upg_g12_cost", "upg_g12_power", "upg_g12_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g12_available");
        this.upgrades["g13"] = new Upgrade("g13", -1, "upg_g13_cost", "upg_g13_power", "upg_g13_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g13_available");
        this.upgrades["g14"] = new Upgrade("g14", -1, "upg_g14_cost", "upg_g14_power", "upg_g14_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g14_available");
        this.upgrades["g20"] = new Upgrade("g20", 1, "upg_g20_cost", "upg_g20_power", "upg_g20_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g20_available");
        this.upgrades["g21"] = new Upgrade("g21", 1, "upg_g21_cost", "upg_g21_power", "upg_g21_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g21_available");
        this.upgrades["g22"] = new Upgrade("g22", 1, "upg_g22_cost", "upg_g22_power", "upg_g22_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g22_available");
        this.upgrades["g23"] = new Upgrade("g23", 1, "upg_g23_cost", "upg_g23_power", "upg_g23_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g23_available");
        this.upgrades["g24"] = new Upgrade("g24", 1, "upg_g24_cost", "upg_g24_power", "upg_g24_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g24_available");
        this.upgrades["g30"] = new Upgrade("g30", 1, "upg_g30_cost", "upg_g30_power", "upg_g30_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g30_available");
        this.upgrades["g31"] = new Upgrade("g31", 1, "upg_g31_cost", "upg_g31_power", "upg_g31_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g31_available");
        this.upgrades["g32"] = new Upgrade("g32", 7, "upg_g32_cost", "upg_g32_power", "upg_g32_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g32_available");
        this.upgrades["g33"] = new Upgrade("g33", 1, "upg_g33_cost", "upg_g33_power", "upg_g33_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g33_available");
        this.upgrades["g34"] = new Upgrade("g34", 1, "upg_g34_cost", "upg_g34_power", "upg_g34_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g34_available");
        this.upgrades["g40"] = new Upgrade("g40", 1, "upg_g40_cost", "upg_g40_power", "upg_g40_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g40_available");
        this.upgrades["g41"] = new Upgrade("g41", 1, "upg_g41_cost", "upg_g41_power", "upg_g41_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g41_available");
        this.upgrades["g42"] = new Upgrade("g42", 1, "upg_g42_cost", "upg_g42_power", "upg_g42_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g42_available");
        this.upgrades["g43"] = new Upgrade("g43", 1, "upg_g43_cost", "upg_g43_power", "upg_g43_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g43_available");
        this.upgrades["g44"] = new Upgrade("g44", 1, "upg_g44_cost", "upg_g44_power", "upg_g44_unlock", "gravitons", [" Graviton", " Gravitons"], "upg_g44_available");

        this.upgrades["n01"] = new Upgrade("n01", 1, "upg_n01_cost", "upg_n01_power", "upg_n01_unlock", "neutrons", [" Neutron", " Neutrons"], "upg_n01_available", "upg_n01_buy");
        this.upgrades["n02"] = new Upgrade("n02", -1, "upg_n02_cost", "upg_n02_power", "upg_n02_unlock", "neutrons", [" Neutron", " Neutrons"], "upg_n02_available");
        this.upgrades["n03"] = new Upgrade("n03", 7, "upg_n03_cost", "upg_n03_power", "upg_n03_unlock", "neutrons", [" Neutron", " Neutrons"], "upg_n03_available");
        this.upgrades["n04"] = new Upgrade("n04", 1, "upg_n04_cost", "upg_n04_power", "upg_n04_unlock", "neutrons", [" Neutron", " Neutrons"], "upg_n04_available");
        this.upgrades["n05"] = new Upgrade("n05", 1, "upg_n05_cost", "upg_n05_power", "upg_n05_unlock", "neutrons", [" Neutron", " Neutrons"], "upg_n05_available");
        this.upgrades["n06"] = new Upgrade("n06", 1, "upg_n06_cost", "upg_n06_power", "upg_n06_unlock", "neutrons", [" Neutron", " Neutrons"], "upg_n06_available");
        this.upgrades["n11"] = new Upgrade("n11", 1, "upg_n11_cost", "upg_n11_power", "upg_n11_unlock", this.dimensions['protons'], [" Proton", " Protons"], "upg_n11_available");
        this.upgrades["n12"] = new Upgrade("n12", 1, "upg_n12_cost", "upg_n12_power", "upg_n12_unlock", this.dimensions['protons'], [" Proton", " Protons"], "upg_n12_available");
        this.upgrades["n13"] = new Upgrade("n13", 1, "upg_n13_cost", "upg_n13_power", "upg_n13_unlock", this.dimensions['protons'], [" Proton", " Protons"], "upg_n13_available");
        this.upgrades["n14"] = new Upgrade("n14", 1, "upg_n14_cost", "upg_n14_power", "upg_n14_unlock", this.dimensions['protons'], [" Proton", " Protons"], "upg_n14_available");
        this.upgrades["n15"] = new Upgrade("n15", 1, "upg_n15_cost", "upg_n15_power", "upg_n15_unlock", this.dimensions['protons'], [" Proton", " Protons"], "upg_n15_available");
        this.upgrades["n16"] = new Upgrade("n16", 1, "upg_n16_cost", "upg_n16_power", "upg_n16_unlock", this.dimensions['protons'], [" Proton", " Protons"], "upg_n16_available");
        this.upgrades["n21"] = new Upgrade("n21", 1, "upg_n21_cost", "upg_n21_power", "upg_n21_unlock", this.dimensions['electrons'], [" Electron", " Electrons"], "upg_n21_available");
        this.upgrades["n22"] = new Upgrade("n22", 1, "upg_n22_cost", "upg_n22_power", "upg_n22_unlock", this.dimensions['electrons'], [" Electron", " Electrons"], "upg_n22_available");
        this.upgrades["n23"] = new Upgrade("n23", 1, "upg_n23_cost", "upg_n23_power", "upg_n23_unlock", this.dimensions['electrons'], [" Electron", " Electrons"], "upg_n23_available");
        this.upgrades["n24"] = new Upgrade("n24", 1, "upg_n24_cost", "upg_n24_power", "upg_n24_unlock", this.dimensions['electrons'], [" Electron", " Electrons"], "upg_n24_available");
        this.upgrades["n25"] = new Upgrade("n25", 1, "upg_n25_cost", "upg_n25_power", "upg_n25_unlock", this.dimensions['electrons'], [" Electron", " Electrons"], "upg_n25_available");
        this.upgrades["n26"] = new Upgrade("n26", 1, "upg_n26_cost", "upg_n26_power", "upg_n26_unlock", this.dimensions['electrons'], [" Electron", " Electrons"], "upg_n26_available");
        this.upgrades["n31"] = new Upgrade("n31", 1, "upg_n31_cost", "upg_n31_power", "upg_n31_unlock", this.dimensions['bosons'], [" W-Boson", " W-Bosons"], "upg_n31_available");
        this.upgrades["n32"] = new Upgrade("n32", 1, "upg_n32_cost", "upg_n32_power", "upg_n32_unlock", this.dimensions['bosons'], [" W-Boson", " W-Bosons"], "upg_n32_available");
        this.upgrades["n33"] = new Upgrade("n33", 1, "upg_n33_cost", "upg_n33_power", "upg_n33_unlock", this.dimensions['bosons'], [" W-Boson", " W-Bosons"], "upg_n33_available");
        this.upgrades["n34"] = new Upgrade("n34", 1, "upg_n34_cost", "upg_n34_power", "upg_n34_unlock", this.dimensions['bosons'], [" W-Boson", " W-Bosons"], "upg_n34_available");
        this.upgrades["n35"] = new Upgrade("n35", 1, "upg_n35_cost", "upg_n35_power", "upg_n35_unlock", this.dimensions['bosons'], [" W-Boson", " W-Bosons"], "upg_n35_available");
        this.upgrades["n36"] = new Upgrade("n36", 1, "upg_n36_cost", "upg_n36_power", "upg_n36_unlock", this.dimensions['bosons'], [" W-Boson", " W-Bosons"], "upg_n36_available");

        this.upgrades["v01"] = new Upgrade("v01", -1, "upg_v01_cost", "upg_v01_power", "upg_v01_unlock", "vacuum_energy", " Vacuum Energy", "upg_v01_available", "upg_v01_buy");
        this.upgrades["v02"] = new Upgrade("v02", -1, "upg_v02_cost", "upg_v02_power", "upg_v02_unlock", this.dimensions['matter_3'], [" 3rd M. Dim", " 3rd M. Dims"], "upg_v02_available", "upg_v02_buy");
        this.upgrades["v03"] = new Upgrade("v03", -1, "upg_v03_cost", "upg_v03_power", "upg_v03_unlock", "neutrons", [" Neutron", " Neutrons"], "upg_v03_available", "upg_v03_buy");
        this.upgrades["v11"] = new Upgrade("v11", 1, "upg_v11_cost", "upg_v11_power", "upg_v11_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v11_available", "upg_v11_buy");
        this.upgrades["v21"] = new Upgrade("v21", 1, "upg_v21_cost", "upg_v21_power", "upg_v21_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v21_available");
        this.upgrades["v31"] = new Upgrade("v31", 1, "upg_v31_cost", "upg_v31_power", "upg_v31_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v31_available");
        this.upgrades["v32"] = new Upgrade("v32", 1, "upg_v32_cost", "upg_v32_power", "upg_v32_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v32_available");
        this.upgrades["v41"] = new Upgrade("v41", 1, "upg_v41_cost", "upg_v41_power", "upg_v41_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v41_available");
        this.upgrades["v42"] = new Upgrade("v42", 1, "upg_v42_cost", "upg_v42_power", "upg_v42_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v42_available");
        this.upgrades["v51"] = new Upgrade("v51", 1, "upg_v51_cost", "upg_v51_power", "upg_v51_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v51_available");
        this.upgrades["v61"] = new Upgrade("v61", 1, "upg_v61_cost", "upg_v61_power", "upg_v61_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v61_available");
        this.upgrades["v71"] = new Upgrade("v71", 1, "upg_v71_cost", "upg_v71_power", "upg_v71_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v71_available");
        this.upgrades["v72"] = new Upgrade("v72", 1, "upg_v72_cost", "upg_v72_power", "upg_v72_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v72_available");
        this.upgrades["v81"] = new Upgrade("v81", 1, "upg_v81_cost", "upg_v81_power", "upg_v81_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v81_available");
        this.upgrades["v82"] = new Upgrade("v82", 1, "upg_v82_cost", "upg_v82_power", "upg_v82_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v82_available");
        this.upgrades["v83"] = new Upgrade("v83", 1, "upg_v83_cost", "upg_v83_power", "upg_v83_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v83_available");
        this.upgrades["v91"] = new Upgrade("v91", 1, "upg_v91_cost", "upg_v91_power", "upg_v91_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v91_available");
        this.upgrades["v92"] = new Upgrade("v92", 1, "upg_v92_cost", "upg_v92_power", "upg_v92_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v92_available");
        this.upgrades["v93"] = new Upgrade("v93", 1, "upg_v93_cost", "upg_v93_power", "upg_v93_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v93_available");
        this.upgrades["v101"] = new Upgrade("v101", 1, "upg_v101_cost", "upg_v101_power", "upg_v101_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v101_available");
        this.upgrades["v102"] = new Upgrade("v102", 1, "upg_v102_cost", "upg_v102_power", "upg_v102_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v102_available");
        this.upgrades["v103"] = new Upgrade("v103", 1, "upg_v103_cost", "upg_v103_power", "upg_v103_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v103_available");
        this.upgrades["v111"] = new Upgrade("v111", 1, "upg_v111_cost", "upg_v111_power", "upg_v111_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v111_available");
        this.upgrades["v112"] = new Upgrade("v112", 1, "upg_v112_cost", "upg_v112_power", "upg_v112_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v112_available");
        this.upgrades["v121"] = new Upgrade("v121", 1, "upg_v121_cost", "upg_v121_power", "upg_v121_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v121_available");
        this.upgrades["v122"] = new Upgrade("v122", 1, "upg_v122_cost", "upg_v122_power", "upg_v122_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v122_available");
        this.upgrades["v131"] = new Upgrade("v131", 1, "upg_v131_cost", "upg_v131_power", "upg_v131_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v131_available");
        this.upgrades["v141"] = new Upgrade("v141", 1, "upg_v141_cost", "upg_v141_power", "upg_v141_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v141_available");
        this.upgrades["v142"] = new Upgrade("v142", 1, "upg_v142_cost", "upg_v142_power", "upg_v142_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v142_available");
        this.upgrades["v143"] = new Upgrade("v143", 1, "upg_v143_cost", "upg_v143_power", "upg_v143_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v143_available");
        this.upgrades["v151"] = new Upgrade("v151", 1, "upg_v151_cost", "upg_v151_power", "upg_v151_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v151_available");
        this.upgrades["v161"] = new Upgrade("v161", 1, "upg_v161_cost", "upg_v161_power", "upg_v161_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v161_available");
        this.upgrades["v162"] = new Upgrade("v162", 1, "upg_v162_cost", "upg_v162_power", "upg_v162_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v162_available");
        this.upgrades["v163"] = new Upgrade("v163", 1, "upg_v163_cost", "upg_v163_power", "upg_v163_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v163_available");
        this.upgrades["v164"] = new Upgrade("v164", 1, "upg_v164_cost", "upg_v164_power", "upg_v164_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v164_available");
        this.upgrades["v171"] = new Upgrade("v171", 1, "upg_v171_cost", "upg_v171_power", "upg_v171_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v171_available");
        this.upgrades["v172"] = new Upgrade("v172", 1, "upg_v172_cost", "upg_v172_power", "upg_v172_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v172_available");
        this.upgrades["v173"] = new Upgrade("v173", 1, "upg_v173_cost", "upg_v173_power", "upg_v173_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v173_available");
        this.upgrades["v174"] = new Upgrade("v174", 1, "upg_v174_cost", "upg_v174_power", "upg_v174_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v174_available");
        this.upgrades["v181"] = new Upgrade("v181", 1, "upg_v181_cost", "upg_v181_power", "upg_v181_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v181_available");
        this.upgrades["v182"] = new Upgrade("v182", 1, "upg_v182_cost", "upg_v182_power", "upg_v182_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v182_available");
        this.upgrades["v183"] = new Upgrade("v183", 1, "upg_v183_cost", "upg_v183_power", "upg_v183_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v183_available");
        this.upgrades["v184"] = new Upgrade("v184", 1, "upg_v184_cost", "upg_v184_power", "upg_v184_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v184_available");
        this.upgrades["v191"] = new Upgrade("v191", 1, "upg_v191_cost", "upg_v191_power", "upg_v191_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v191_available");
        this.upgrades["v192"] = new Upgrade("v192", 1, "upg_v192_cost", "upg_v192_power", "upg_v192_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v192_available");
        this.upgrades["v193"] = new Upgrade("v193", 1, "upg_v193_cost", "upg_v193_power", "upg_v193_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v193_available");
        this.upgrades["v194"] = new Upgrade("v194", 1, "upg_v194_cost", "upg_v194_power", "upg_v194_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v194_available");
        this.upgrades["v201"] = new Upgrade("v201", 1, "upg_v201_cost", "upg_v201_power", "upg_v201_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v201_available");
        this.upgrades["v211"] = new Upgrade("v211", 1, "upg_v211_cost", "upg_v211_power", "upg_v211_unlock", "space_theorems", [" Space Theorem", " Space Theorems"], "upg_v211_available");

        this.upgrades["d11"] = new Upgrade("d11", 1, "upg_d11_cost", "upg_d11_power", "upg_d11_unlock", "shards", [" Shard", " Shards"], "upg_d11_available", "upg_d11_buy");
        this.upgrades["d21"] = new Upgrade("d21", 1, "upg_d21_cost", "upg_d21_power", "upg_d21_unlock", "shards", [" Shard", " Shards"], "upg_d21_available");
        this.upgrades["d31"] = new Upgrade("d31", 1, "upg_d31_cost", "upg_d31_power", "upg_d31_unlock", "shards", [" Shard", " Shards"], "upg_d31_available");
        this.upgrades["d32"] = new Upgrade("d32", 1, "upg_d32_cost", "upg_d32_power", "upg_d32_unlock", "shards", [" Shard", " Shards"], "upg_d32_available");
        this.upgrades["d41"] = new Upgrade("d41", 1, "upg_d41_cost", "upg_d41_power", "upg_d41_unlock", "shards", [" Shard", " Shards"], "upg_d41_available");
        this.upgrades["d51"] = new Upgrade("d51", -1, "upg_d51_cost", "upg_d51_power", "upg_d51_unlock", "shards", [" Shard", " Shards"], "upg_d51_available");
        this.upgrades["d52"] = new Upgrade("d52", -1, "upg_d52_cost", "upg_d52_power", "upg_d52_unlock", "shards", [" Shard", " Shards"], "upg_d52_available");
        this.upgrades["d61"] = new Upgrade("d61", -1, "upg_d61_cost", "upg_d61_power", "upg_d61_unlock", "shards", [" Shard", " Shards"], "upg_d61_available");
        this.upgrades["d62"] = new Upgrade("d62", -1, "upg_d62_cost", "upg_d62_power", "upg_d62_unlock", "shards", [" Shard", " Shards"], "upg_d62_available");
        this.upgrades["d63"] = new Upgrade("d63", -1, "upg_d63_cost", "upg_d63_power", "upg_d63_unlock", "shards", [" Shard", " Shards"], "upg_d63_available");
        this.upgrades["d71"] = new Upgrade("d71", 1, "upg_d71_cost", "upg_d71_power", "upg_d71_unlock", "shards", [" Shard", " Shards"], "upg_d71_available");
        this.upgrades["d72"] = new Upgrade("d72", 1, "upg_d72_cost", "upg_d72_power", "upg_d72_unlock", "shards", [" Shard", " Shards"], "upg_d72_available");
        this.upgrades["d81"] = new Upgrade("d81", 1, "upg_d81_cost", "upg_d81_power", "upg_d81_unlock", "shards", [" Shard", " Shards"], "upg_d81_available");
        this.upgrades["d91"] = new Upgrade("d91", 1, "upg_d91_cost", "upg_d91_power", "upg_d91_unlock", "shards", [" Shard", " Shards"], "upg_d91_available");
        this.upgrades["d92"] = new Upgrade("d92", 1, "upg_d92_cost", "upg_d92_power", "upg_d92_unlock", "shards", [" Shard", " Shards"], "upg_d92_available");
        this.upgrades["d101"] = new Upgrade("d101", 1, "upg_d101_cost", "upg_d101_power", "upg_d101_unlock", "shards", [" Shard", " Shards"], "upg_d101_available");
        this.upgrades["d102"] = new Upgrade("d102", 1, "upg_d102_cost", "upg_d102_power", "upg_d102_unlock", "shards", [" Shard", " Shards"], "upg_d102_available");
        this.upgrades["d103"] = new Upgrade("d103", 1, "upg_d103_cost", "upg_d103_power", "upg_d103_unlock", "shards", [" Shard", " Shards"], "upg_d103_available");
        this.upgrades["d111"] = new Upgrade("d111", 1, "upg_d111_cost", "upg_d111_power", "upg_d111_unlock", "shards", [" Shard", " Shards"], "upg_d111_available");
        this.upgrades["d112"] = new Upgrade("d112", 1, "upg_d112_cost", "upg_d112_power", "upg_d112_unlock", "shards", [" Shard", " Shards"], "upg_d112_available");
        this.upgrades["d113"] = new Upgrade("d113", 1, "upg_d113_cost", "upg_d113_power", "upg_d113_unlock", "shards", [" Shard", " Shards"], "upg_d113_available");
        this.upgrades["d114"] = new Upgrade("d114", 1, "upg_d114_cost", "upg_d114_power", "upg_d114_unlock", "shards", [" Shard", " Shards"], "upg_d114_available");

        this.upgrades["a01"] = new Upgrade("a01", -1, "upg_a01_cost", "upg_a01_power", "upg_a01_unlock", "atoms", [" Atom", " Atoms"], "upg_a01_available", "upg_a01_buy");
        this.upgrades["a02"] = new Upgrade("a02", -1, "upg_a02_cost", "upg_a02_power", "upg_a02_unlock", "atoms", [" Atom", " Atoms"], "upg_a02_available");
        this.upgrades["a03"] = new Upgrade("a03", -1, "upg_a03_cost", "upg_a03_power", "upg_a03_unlock", "atoms", [" Atom", " Atoms"], "upg_a03_available");
        this.upgrades["a04"] = new Upgrade("a04", -1, "upg_a04_cost", "upg_a04_power", "upg_a04_unlock", "atoms", [" Atom", " Atoms"], "upg_a04_available");
        this.upgrades["a05"] = new Upgrade("a05", -1, "upg_a05_cost", "upg_a05_power", "upg_a05_unlock", "atoms", [" Atom", " Atoms"], "upg_a05_available");
        this.upgrades["a06"] = new Upgrade("a06", -1, "upg_a06_cost", "upg_a06_power", "upg_a06_unlock", "atoms", [" Atom", " Atoms"], "upg_a06_available");

        this.challenges = {};
        this.challenges["p1"] = new Challenge("p1", "Photonic Challenge 1", "photonic", [], "start_p1", "goal_p1", "end_p1");
        this.challenges["p2"] = new Challenge("p2", "Photonic Challenge 2", "photonic", [], "start_p2", "goal_p2", "end_p2");
        this.challenges["p3"] = new Challenge("p3", "Photonic Challenge 3", "photonic", [], "start_p3", "goal_p3", "end_p3");
        this.challenges["p4"] = new Challenge("p4", "Photonic Challenge 4", "photonic", [], "start_p4", "goal_p4", "end_p4");
        this.challenges["p5"] = new Challenge("p5", "Photonic Challenge 5", "photonic", [], "start_p5", "goal_p5", "end_p5");
        this.challenges["p6"] = new Challenge("p6", "Photonic Challenge 6", "photonic", [], "start_p6", "goal_p6", "end_p6");
        this.challenges["p7"] = new Challenge("p7", "Photonic Challenge 7", "photonic", [], "start_p7", "goal_p7", "end_p7");
        this.challenges["p8"] = new Challenge("p8", "Photonic Challenge 8", "photonic", [], "start_p8", "goal_p8", "end_p8");
        this.challenges["p0"] = new Challenge("p0", "Photonic Meta-Challenge", "photonic", ['p1','p2','p3','p4','p5','p6','p7','p8'], "start_p0", "goal_p0", "end_p0");

        this.challenges["g1"] = new Challenge("g1", "Gravitonic Challenge 1", "gravitonic", [], "start_g1", "goal_g1", "end_g1");
        this.challenges["g2"] = new Challenge("g2", "Gravitonic Challenge 2", "gravitonic", [], "start_g2", "goal_g2", "end_g2");
        this.challenges["g3"] = new Challenge("g3", "Gravitonic Challenge 3", "gravitonic", [], "start_g3", "goal_g3", "end_g3");
        this.challenges["g4"] = new Challenge("g4", "Gravitonic Challenge 4", "gravitonic", [], "start_g4", "goal_g4", "end_g4");
        this.challenges["g5"] = new Challenge("g5", "Gravitonic Challenge 5", "gravitonic", [], "start_g5", "goal_g5", "end_g5");
        this.challenges["g6"] = new Challenge("g6", "Gravitonic Challenge 6", "gravitonic", [], "start_g6", "goal_g6", "end_g6");
        this.challenges["g7"] = new Challenge("g7", "Gravitonic Challenge 7", "gravitonic", [], "start_g7", "goal_g7", "end_g7");
        this.challenges["g8"] = new Challenge("g8", "Gravitonic Challenge 8", "gravitonic", [], "start_g8", "goal_g8", "end_g8");
        this.challenges["g0"] = new Challenge("g0", "Gravitonic Meta-Challenge", "gravitonic", ['g1','g2','g3','g4','g5','g6','g7','g8'], "start_g0", "goal_g0", "end_g0");
    
        this.challenges["n1"] = new Challenge("n1", "Neutronic Challenge 1", "neutronic", [], "start_n1", "goal_n1", "end_n1", 5, "goal_amt_n1", "effect_n1");
        this.challenges["n2"] = new Challenge("n2", "Neutronic Challenge 2", "neutronic", [], "start_n2", "goal_n2", "end_n2", 5, "goal_amt_n2", "effect_n2");
        this.challenges["n3"] = new Challenge("n3", "Neutronic Challenge 3", "neutronic", [], "start_n3", "goal_n3", "end_n3", 5, "goal_amt_n3", "effect_n3");
        this.challenges["n4"] = new Challenge("n4", "Neutronic Challenge 4", "neutronic", [], "start_n4", "goal_n4", "end_n4", 5, "goal_amt_n4", "effect_n4");
        this.challenges["n5"] = new Challenge("n5", "Neutronic Challenge 5", "neutronic", [], "start_n5", "goal_n5", "end_n5", 5, "goal_amt_n5", "effect_n5");
        this.challenges["n6"] = new Challenge("n6", "Neutronic Challenge 6", "neutronic", [], "start_n6", "goal_n6", "end_n6", 5, "goal_amt_n6", "effect_n6");
        this.challenges["n7"] = new Challenge("n7", "Neutronic Challenge 7", "neutronic", [], "start_n7", "goal_n7", "end_n7", 5, "goal_amt_n7", "effect_n7");
        this.challenges["n8"] = new Challenge("n8", "Neutronic Challenge 8", "neutronic", [], "start_n8", "goal_n8", "end_n8", 5, "goal_amt_n8", "effect_n8");
        this.challenges["n0"] = new Challenge("n0", "Neutronic Meta-Challenge", "neutronic", ['n1','n2','n3','n4','n5','n6','n7','n8'], "start_n0", "goal_n0", "end_n0", 1, "goal_amt_n0");

        this.challenges["v1"] = new Challenge("v1", "Vacuumic Challenge 1", "vacuumic", [], "start_v1", "goal_v1", "end_v1");
        this.challenges["v2"] = new Challenge("v2", "Vacuumic Challenge 2", "vacuumic", [], "start_v2", "goal_v2", "end_v2");
        this.challenges["v3"] = new Challenge("v3", "Vacuumic Challenge 3", "vacuumic", [], "start_v3", "goal_v3", "end_v3");
        this.challenges["v4"] = new Challenge("v4", "Vacuumic Challenge 4", "vacuumic", [], "start_v4", "goal_v4", "end_v4");
        this.challenges["v5"] = new Challenge("v5", "Vacuumic Challenge 5", "vacuumic", [], "start_v5", "goal_v5", "end_v5");
        this.challenges["v6"] = new Challenge("v6", "Vacuumic Challenge 6", "vacuumic", [], "start_v6", "goal_v6", "end_v6");
        this.challenges["v7"] = new Challenge("v7", "Vacuumic Challenge 7", "vacuumic", [], "start_v7", "goal_v7", "end_v7");
        this.challenges["v8"] = new Challenge("v8", "Vacuumic Challenge 8", "vacuumic", [], "start_v8", "goal_v8", "end_v8");
        this.challenges["v0"] = new Challenge("v0", "Vacuumic Meta-Challenge", "vacuumic", ['v1','v2','v3','v4','v5','v6','v7','v8'], "start_v0", "goal_v0", "end_v0");

        this.current_challenge = {
            "photonic": "",
            "gravitonic": "",
            "neutronic": "",
            "vacuumic": ""
        };

        this.autobuyers = {};
        this.autobuyers["matter_1"] = new Autobuyer("matter_1", this.dimensions["matter_1"], "autobuyer_matter_1_available");
        this.autobuyers["matter_2"] = new Autobuyer("matter_2", this.dimensions["matter_2"], "autobuyer_matter_2_available");
        this.autobuyers["matter_3"] = new Autobuyer("matter_3", this.dimensions["matter_3"], "autobuyer_matter_3_available");
        this.autobuyers["matter_4"] = new Autobuyer("matter_4", this.dimensions["matter_4"], "autobuyer_matter_4_available");
        this.autobuyers["matter_5"] = new Autobuyer("matter_5", this.dimensions["matter_5"], "autobuyer_matter_5_available");
        this.autobuyers["matter_6"] = new Autobuyer("matter_6", this.dimensions["matter_6"], "autobuyer_matter_6_available");
        this.autobuyers["matter_7"] = new Autobuyer("matter_7", this.dimensions["matter_7"], "autobuyer_matter_7_available");
        this.autobuyers["matter_8"] = new Autobuyer("matter_8", this.dimensions["matter_8"], "autobuyer_matter_8_available");
        this.autobuyers["matter_9"] = new Autobuyer("matter_9", this.dimensions["matter_9"], "autobuyer_matter_9_available");
        this.autobuyers["matter_10"] = new Autobuyer("matter_10", this.dimensions["matter_10"], "autobuyer_matter_10_available");
        this.autobuyers["matter_11"] = new Autobuyer("matter_11", this.dimensions["matter_11"], "autobuyer_matter_11_available");
        this.autobuyers["matter_12"] = new Autobuyer("matter_12", this.dimensions["matter_12"], "autobuyer_matter_12_available");

        this.autobuyers["photonic_upgrades"] = new Autobuyer("photonic_upgrades", "photonic_upgrades", "autobuyer_photonic_upgrades_available", false);

        this.autobuyers["photonic_1"] = new Autobuyer("photonic_1", this.dimensions["photonic_1"], "autobuyer_photonic_1_available");
        this.autobuyers["photonic_2"] = new Autobuyer("photonic_2", this.dimensions["photonic_2"], "autobuyer_photonic_2_available");
        this.autobuyers["photonic_3"] = new Autobuyer("photonic_3", this.dimensions["photonic_3"], "autobuyer_photonic_3_available");
        this.autobuyers["photonic_4"] = new Autobuyer("photonic_4", this.dimensions["photonic_4"], "autobuyer_photonic_4_available");
        this.autobuyers["photonic_5"] = new Autobuyer("photonic_5", this.dimensions["photonic_5"], "autobuyer_photonic_5_available");
        this.autobuyers["photonic_6"] = new Autobuyer("photonic_6", this.dimensions["photonic_6"], "autobuyer_photonic_6_available");
        this.autobuyers["photonic_7"] = new Autobuyer("photonic_7", this.dimensions["photonic_7"], "autobuyer_photonic_7_available");
        this.autobuyers["photonic_8"] = new Autobuyer("photonic_8", this.dimensions["photonic_8"], "autobuyer_photonic_8_available");
        this.autobuyers["photonic_9"] = new Autobuyer("photonic_9", this.dimensions["photonic_9"], "autobuyer_photonic_9_available");
        this.autobuyers["photonic_10"] = new Autobuyer("photonic_10", this.dimensions["photonic_10"], "autobuyer_photonic_10_available");
        this.autobuyers["photonic_11"] = new Autobuyer("photonic_11", this.dimensions["photonic_11"], "autobuyer_photonic_11_available");
        this.autobuyers["photonic_12"] = new Autobuyer("photonic_12", this.dimensions["photonic_12"], "autobuyer_photonic_12_available");

        this.autobuyers["gravitonic_upgrades"] = new Autobuyer("gravitonic_upgrades", "gravitonic_upgrades", "autobuyer_gravitonic_upgrades_available", false);

        this.autobuyers["gravitonic_1"] = new Autobuyer("gravitonic_1", this.dimensions["gravitonic_1"], "autobuyer_gravitonic_1_available");
        this.autobuyers["gravitonic_2"] = new Autobuyer("gravitonic_2", this.dimensions["gravitonic_2"], "autobuyer_gravitonic_2_available");
        this.autobuyers["gravitonic_3"] = new Autobuyer("gravitonic_3", this.dimensions["gravitonic_3"], "autobuyer_gravitonic_3_available");
        this.autobuyers["gravitonic_4"] = new Autobuyer("gravitonic_4", this.dimensions["gravitonic_4"], "autobuyer_gravitonic_4_available");
        this.autobuyers["gravitonic_5"] = new Autobuyer("gravitonic_5", this.dimensions["gravitonic_5"], "autobuyer_gravitonic_5_available");
        this.autobuyers["gravitonic_6"] = new Autobuyer("gravitonic_6", this.dimensions["gravitonic_6"], "autobuyer_gravitonic_6_available");
        this.autobuyers["gravitonic_7"] = new Autobuyer("gravitonic_7", this.dimensions["gravitonic_7"], "autobuyer_gravitonic_7_available");
        this.autobuyers["gravitonic_8"] = new Autobuyer("gravitonic_8", this.dimensions["gravitonic_8"], "autobuyer_gravitonic_8_available");
        this.autobuyers["gravitonic_9"] = new Autobuyer("gravitonic_9", this.dimensions["gravitonic_9"], "autobuyer_gravitonic_9_available");
        this.autobuyers["gravitonic_10"] = new Autobuyer("gravitonic_10", this.dimensions["gravitonic_10"], "autobuyer_gravitonic_10_available");
        this.autobuyers["gravitonic_11"] = new Autobuyer("gravitonic_11", this.dimensions["gravitonic_11"], "autobuyer_gravitonic_11_available");
        this.autobuyers["gravitonic_12"] = new Autobuyer("gravitonic_12", this.dimensions["gravitonic_12"], "autobuyer_gravitonic_12_available");

        this.autobuyers["protons"] = new Autobuyer("protons", this.dimensions["protons"], "autobuyer_protons_available", false);
        this.autobuyers["electrons"] = new Autobuyer("electrons", this.dimensions["electrons"], "autobuyer_electrons_available", false);
        this.autobuyers["bosons"] = new Autobuyer("bosons", this.dimensions["bosons"], "autobuyer_bosons_available", false);

        this.autobuyers["neutronic_1"] = new Autobuyer("neutronic_1", this.dimensions["neutronic_1"], "autobuyer_neutronic_1_available");
        this.autobuyers["neutronic_2"] = new Autobuyer("neutronic_2", this.dimensions["neutronic_2"], "autobuyer_neutronic_2_available");
        this.autobuyers["neutronic_3"] = new Autobuyer("neutronic_3", this.dimensions["neutronic_3"], "autobuyer_neutronic_3_available");
        this.autobuyers["neutronic_4"] = new Autobuyer("neutronic_4", this.dimensions["neutronic_4"], "autobuyer_neutronic_4_available");
        this.autobuyers["neutronic_5"] = new Autobuyer("neutronic_5", this.dimensions["neutronic_5"], "autobuyer_neutronic_5_available");
        this.autobuyers["neutronic_6"] = new Autobuyer("neutronic_6", this.dimensions["neutronic_6"], "autobuyer_neutronic_6_available");
        this.autobuyers["neutronic_7"] = new Autobuyer("neutronic_7", this.dimensions["neutronic_7"], "autobuyer_neutronic_7_available");
        this.autobuyers["neutronic_8"] = new Autobuyer("neutronic_8", this.dimensions["neutronic_8"], "autobuyer_neutronic_8_available");
        this.autobuyers["neutronic_9"] = new Autobuyer("neutronic_9", this.dimensions["neutronic_9"], "autobuyer_neutronic_9_available");
        this.autobuyers["neutronic_10"] = new Autobuyer("neutronic_10", this.dimensions["neutronic_10"], "autobuyer_neutronic_10_available");
        this.autobuyers["neutronic_11"] = new Autobuyer("neutronic_11", this.dimensions["neutronic_11"], "autobuyer_neutronic_11_available");
        this.autobuyers["neutronic_12"] = new Autobuyer("neutronic_12", this.dimensions["neutronic_12"], "autobuyer_neutronic_12_available");

        this.autobuyers["v01"] = new Autobuyer("v01", this.upgrades["v01"], "autobuyer_v01_available");
        this.autobuyers["v02"] = new Autobuyer("v02", this.upgrades["v02"], "autobuyer_v02_available");
        this.autobuyers["v03"] = new Autobuyer("v03", this.upgrades["v03"], "autobuyer_v03_available");

        this.autobuyers["VTREE_v11"] = new Autobuyer("VTREE_v11", this.upgrades["v11"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v21"] = new Autobuyer("VTREE_v21", this.upgrades["v21"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v31"] = new Autobuyer("VTREE_v31", this.upgrades["v31"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v32"] = new Autobuyer("VTREE_v32", this.upgrades["v32"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v41"] = new Autobuyer("VTREE_v41", this.upgrades["v41"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v42"] = new Autobuyer("VTREE_v42", this.upgrades["v42"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v51"] = new Autobuyer("VTREE_v51", this.upgrades["v51"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v61"] = new Autobuyer("VTREE_v61", this.upgrades["v61"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v71"] = new Autobuyer("VTREE_v71", this.upgrades["v71"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v72"] = new Autobuyer("VTREE_v72", this.upgrades["v72"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v81"] = new Autobuyer("VTREE_v81", this.upgrades["v81"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v82"] = new Autobuyer("VTREE_v82", this.upgrades["v82"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v83"] = new Autobuyer("VTREE_v83", this.upgrades["v83"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v91"] = new Autobuyer("VTREE_v91", this.upgrades["v91"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v92"] = new Autobuyer("VTREE_v92", this.upgrades["v92"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v93"] = new Autobuyer("VTREE_v93", this.upgrades["v93"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v101"] = new Autobuyer("VTREE_v101", this.upgrades["v101"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v102"] = new Autobuyer("VTREE_v102", this.upgrades["v102"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v103"] = new Autobuyer("VTREE_v103", this.upgrades["v103"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v111"] = new Autobuyer("VTREE_v111", this.upgrades["v111"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v112"] = new Autobuyer("VTREE_v112", this.upgrades["v112"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v121"] = new Autobuyer("VTREE_v121", this.upgrades["v121"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v122"] = new Autobuyer("VTREE_v122", this.upgrades["v122"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v131"] = new Autobuyer("VTREE_v131", this.upgrades["v131"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v141"] = new Autobuyer("VTREE_v141", this.upgrades["v141"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v142"] = new Autobuyer("VTREE_v142", this.upgrades["v142"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v143"] = new Autobuyer("VTREE_v143", this.upgrades["v143"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v151"] = new Autobuyer("VTREE_v151", this.upgrades["v151"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v161"] = new Autobuyer("VTREE_v161", this.upgrades["v161"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v162"] = new Autobuyer("VTREE_v162", this.upgrades["v162"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v163"] = new Autobuyer("VTREE_v163", this.upgrades["v163"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v164"] = new Autobuyer("VTREE_v164", this.upgrades["v164"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v171"] = new Autobuyer("VTREE_v171", this.upgrades["v171"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v172"] = new Autobuyer("VTREE_v172", this.upgrades["v172"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v173"] = new Autobuyer("VTREE_v173", this.upgrades["v173"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v174"] = new Autobuyer("VTREE_v174", this.upgrades["v174"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v181"] = new Autobuyer("VTREE_v181", this.upgrades["v181"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v182"] = new Autobuyer("VTREE_v182", this.upgrades["v182"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v183"] = new Autobuyer("VTREE_v183", this.upgrades["v183"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v184"] = new Autobuyer("VTREE_v184", this.upgrades["v184"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v191"] = new Autobuyer("VTREE_v191", this.upgrades["v191"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v192"] = new Autobuyer("VTREE_v192", this.upgrades["v192"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v193"] = new Autobuyer("VTREE_v193", this.upgrades["v193"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v194"] = new Autobuyer("VTREE_v194", this.upgrades["v194"], "autobuyer_VTREE_not_left_available");
        this.autobuyers["VTREE_v201"] = new Autobuyer("VTREE_v201", this.upgrades["v201"], "autobuyer_VTREE_available");
        this.autobuyers["VTREE_v211"] = new Autobuyer("VTREE_v211", this.upgrades["v211"], "autobuyer_VTREE_available");

        this.autobuyers["vacuumic_1"] = new Autobuyer("vacuumic_1", this.dimensions["vacuumic_1"], "autobuyer_vacuumic_1_available");
        this.autobuyers["vacuumic_2"] = new Autobuyer("vacuumic_2", this.dimensions["vacuumic_2"], "autobuyer_vacuumic_2_available");
        this.autobuyers["vacuumic_3"] = new Autobuyer("vacuumic_3", this.dimensions["vacuumic_3"], "autobuyer_vacuumic_3_available");
        this.autobuyers["vacuumic_4"] = new Autobuyer("vacuumic_4", this.dimensions["vacuumic_4"], "autobuyer_vacuumic_4_available");
        this.autobuyers["vacuumic_5"] = new Autobuyer("vacuumic_5", this.dimensions["vacuumic_5"], "autobuyer_vacuumic_5_available");
        this.autobuyers["vacuumic_6"] = new Autobuyer("vacuumic_6", this.dimensions["vacuumic_6"], "autobuyer_vacuumic_6_available");
        this.autobuyers["vacuumic_7"] = new Autobuyer("vacuumic_7", this.dimensions["vacuumic_7"], "autobuyer_vacuumic_7_available");
        this.autobuyers["vacuumic_8"] = new Autobuyer("vacuumic_8", this.dimensions["vacuumic_8"], "autobuyer_vacuumic_8_available");
        this.autobuyers["vacuumic_9"] = new Autobuyer("vacuumic_9", this.dimensions["vacuumic_9"], "autobuyer_vacuumic_9_available");
        this.autobuyers["vacuumic_10"] = new Autobuyer("vacuumic_10", this.dimensions["vacuumic_10"], "autobuyer_vacuumic_10_available");
        this.autobuyers["vacuumic_11"] = new Autobuyer("vacuumic_11", this.dimensions["vacuumic_11"], "autobuyer_vacuumic_11_available");
        this.autobuyers["vacuumic_12"] = new Autobuyer("vacuumic_12", this.dimensions["vacuumic_12"], "autobuyer_vacuumic_12_available");

        this.autobuyers["temperature_infrared"] = new Autobuyer("temperature_infrared", "temperature_infrared", "autobuyer_temperature_available", false);
        this.autobuyers["temperature_red"] = new Autobuyer("temperature_red", "temperature_red", "autobuyer_temperature_available", false);
        this.autobuyers["temperature_green"] = new Autobuyer("temperature_green", "temperature_green", "autobuyer_temperature_available", false);
        this.autobuyers["temperature_blue"] = new Autobuyer("temperature_blue", "temperature_blue", "autobuyer_temperature_available", false);
        this.autobuyers["temperature_ultraviolet"] = new Autobuyer("temperature_ultraviolet", "temperature_ultraviolet", "autobuyer_temperature_available", false);
        this.autobuyers["temperature_xray"] = new Autobuyer("temperature_xray", "temperature_xray", "autobuyer_temperature_xray_available", false);

        this.autobuyers["dimensional_1"] = new Autobuyer("dimensional_1", this.dimensions["dimensional_1"], "autobuyer_dimensional_1_available");
        this.autobuyers["dimensional_2"] = new Autobuyer("dimensional_2", this.dimensions["dimensional_2"], "autobuyer_dimensional_2_available");
        this.autobuyers["dimensional_3"] = new Autobuyer("dimensional_3", this.dimensions["dimensional_3"], "autobuyer_dimensional_3_available");
        this.autobuyers["dimensional_4"] = new Autobuyer("dimensional_4", this.dimensions["dimensional_4"], "autobuyer_dimensional_4_available");
        this.autobuyers["dimensional_5"] = new Autobuyer("dimensional_5", this.dimensions["dimensional_5"], "autobuyer_dimensional_5_available");
        this.autobuyers["dimensional_6"] = new Autobuyer("dimensional_6", this.dimensions["dimensional_6"], "autobuyer_dimensional_6_available");
        this.autobuyers["dimensional_7"] = new Autobuyer("dimensional_7", this.dimensions["dimensional_7"], "autobuyer_dimensional_7_available");
        this.autobuyers["dimensional_8"] = new Autobuyer("dimensional_8", this.dimensions["dimensional_8"], "autobuyer_dimensional_8_available");
        this.autobuyers["dimensional_9"] = new Autobuyer("dimensional_9", this.dimensions["dimensional_9"], "autobuyer_dimensional_9_available");
        this.autobuyers["dimensional_10"] = new Autobuyer("dimensional_10", this.dimensions["dimensional_10"], "autobuyer_dimensional_10_available");
        this.autobuyers["dimensional_11"] = new Autobuyer("dimensional_11", this.dimensions["dimensional_11"], "autobuyer_dimensional_11_available");
        this.autobuyers["dimensional_12"] = new Autobuyer("dimensional_12", this.dimensions["dimensional_12"], "autobuyer_dimensional_12_available");

        this.autobuyers["TICKSPEED"] = new Autobuyer("TICKSPEED", this.upgrades["TICKSPEED"], "autobuyer_TICKSPEED_available", false);

        this.autobuyers["photonic"] = new Autobuyer("photonic", "photonic", "autobuyer_photonic_available", false);
        this.autobuyers["gravitonic"] = new Autobuyer("gravitonic", "gravitonic", "autobuyer_gravitonic_available", false);
        this.autobuyers["neutronic"] = new Autobuyer("neutronic", "neutronic", "autobuyer_neutronic_available", false);
        this.autobuyers["vacuumic"] = new Autobuyer("vacuumic", "vacuumic", "autobuyer_vacuumic_available", false);
        this.autobuyers["dimensional"] = new Autobuyer("dimensional", "dimensional", "autobuyer_dimensional_available", false);
    
        this.milestones = {};
        this.milestones["temperature_1"] = new Milestone("temperature_1", "temperature_1_availability", "temperature_1_activation", "temperature_1_effect", "temperature_1_goal", "temperature_goal_display_function");
        this.milestones["temperature_2"] = new Milestone("temperature_2", "temperature_2_availability", "temperature_2_activation", "temperature_2_effect", "temperature_2_goal", "temperature_goal_display_function");
        this.milestones["temperature_3"] = new Milestone("temperature_3", "temperature_3_availability", "temperature_3_activation", "temperature_3_effect", "temperature_3_goal", "temperature_goal_display_function");
        this.milestones["temperature_4"] = new Milestone("temperature_4", "temperature_4_availability", "temperature_4_activation", "temperature_4_effect", "temperature_4_goal", "temperature_goal_display_function");

        this.milestones["a01_1"] = new Milestone("a01_1", "a01_1_availability", "a01_1_activation", "a01_1_effect", "a01_1_goal");
        this.milestones["a01_2"] = new Milestone("a01_2", "a01_2_availability", "a01_2_activation", "a01_2_effect", "a01_2_goal");
        this.milestones["a01_3"] = new Milestone("a01_3", "a01_3_availability", "a01_3_activation", "a01_3_effect", "a01_3_goal");
        this.milestones["a01_4"] = new Milestone("a01_4", "a01_4_availability", "a01_4_activation", "a01_4_effect", "a01_4_goal");

        this.milestones["a02_1"] = new Milestone("a02_1", "a02_1_availability", "a02_1_activation", "a02_1_effect", "a02_1_goal");
        this.milestones["a02_2"] = new Milestone("a02_2", "a02_2_availability", "a02_2_activation", "a02_2_effect", "a02_2_goal");
        this.milestones["a02_3"] = new Milestone("a02_3", "a02_3_availability", "a02_3_activation", "a02_3_effect", "a02_3_goal");
        this.milestones["a02_4"] = new Milestone("a02_4", "a02_4_availability", "a02_4_activation", "a02_4_effect", "a02_4_goal");

        this.milestones["a03_1"] = new Milestone("a03_1", "a03_1_availability", "a03_1_activation", "a03_1_effect", "a03_1_goal");
        this.milestones["a03_2"] = new Milestone("a03_2", "a03_2_availability", "a03_2_activation", "a03_2_effect", "a03_2_goal");
        this.milestones["a03_3"] = new Milestone("a03_3", "a03_3_availability", "a03_3_activation", "a03_3_effect", "a03_3_goal");
        this.milestones["a03_4"] = new Milestone("a03_4", "a03_4_availability", "a03_4_activation", "a03_4_effect", "a03_4_goal");

        this.milestones["a04_1"] = new Milestone("a04_1", "a04_1_availability", "a04_1_activation", "a04_1_effect", "a04_1_goal");
        this.milestones["a04_2"] = new Milestone("a04_2", "a04_2_availability", "a04_2_activation", "a04_2_effect", "a04_2_goal");
        this.milestones["a04_3"] = new Milestone("a04_3", "a04_3_availability", "a04_3_activation", "a04_3_effect", "a04_3_goal");

        this.milestones["a05_1"] = new Milestone("a05_1", "a05_1_availability", "a05_1_activation", "a05_1_effect", "a05_1_goal");
        this.milestones["a05_2"] = new Milestone("a05_2", "a05_2_availability", "a05_2_activation", "a05_2_effect", "a05_2_goal");

        this.milestones["a06_1"] = new Milestone("a06_1", "a06_1_availability", "a06_1_activation", "a06_1_effect", "a06_1_goal");
        this.milestones["a06_2"] = new Milestone("a06_2", "a06_2_availability", "a06_2_activation", "a06_2_effect", "a06_2_goal");

        this.settings = JSON.parse(JSON.stringify(default_settings));

        this.total_realtime = 0;
        this.online_realtime = 0;

        this.version = "v0.6";
    }
}

var default_settings = {
    "matter_gain": "s_rl",
    "temperature_display": "K",
    "notation": "default",

    "prestige_confirmation_photonic": true,
    "prestige_confirmation_gravitonic": true,
    "prestige_confirmation_neutronic": true,
    "prestige_confirmation_vacuumic": true,
    "prestige_confirmation_vacuumic_tree": true,
    "prestige_confirmation_dimensional": true,
    "prestige_confirmation_atomic": true,
    "prestige_confirmation_biological": true,

    "no_resource_limit": false,
    "show_ids": false,
    "show_all_changelog": false,
};

var me = new Player();

function processTimedelta(player, corrected_timedelta) {
    if (player.dimensions["matter_1"].amt.gt(0)) player.time_started = true;

    // Fix to a potential problem: wasted all Matter on any dimensions other than 1st.
    if (!player.time_started) player.matter = player.matter.max(1);

    // Inertia gain, pt.2
    let inertial_timedelta = corrected_timedelta;
    if (me.time_started) inertial_timedelta *= me.upgrades['INERTIA_5'].get_effect().toInt() / 100; // Online gains

    me.inertia = me.inertia.add(inertia_gain_speed(me).mult(inertial_timedelta)).min(me.upgrades['INERTIA_1'].get_effect());

    // Photonic Challenge 8: you really cannot gain Photons
    if (player.challenges['p8'].inC()) me.photons = big(0);

    let timedelta = corrected_timedelta;
    if (!player.time_started) timedelta = 0;
    timedelta /= player.challenge_strength_1;

    // Inertia boosts timespeed
    if (player.inertia_enabled && player.time_started) {
        let inertia_boost = player.inertia_multiplier;
        if (player.inertia.lt(inertia_loss_speed(player).mult(corrected_timedelta))) {
            inertia_boost = big(1).add(big(player.inertia_multiplier).subtract(1).mult(player.inertia).div(inertia_loss_speed(player).mult(corrected_timedelta))).toInt();
            player.inertia_enabled = false;
        }
        player.inertia = player.inertia.subtract(inertia_loss_speed(player).mult(corrected_timedelta)).max(0);
        timedelta *= inertia_boost;
    }

    player.time_passed += timedelta;
    update_challenges_power(player);

    player.best_time_speed = Math.min(player.best_time_speed, player.challenge_strength_1);

    player.overall_time += timedelta;
    player.time_photonic += timedelta;
    player.time_gravitonic += timedelta;
    player.time_neutronic += timedelta;
    player.time_vacuumic += timedelta;
    player.time_dimensional += timedelta;
    player.time_atomic += timedelta;

    var antimatter_timedelta = timedelta;
    // achievement 28: +16% to antimatter gen speed
    if (player.achievements['28'].complete) antimatter_timedelta *= 1.16;
    // achievement 48: +32% to antimatter gen speed
    if (player.achievements['48'].complete) antimatter_timedelta *= 1.32;
    // g13: if enabled, antimatter grows faster
    if (player.upgrades['g13'].enabled) {
        antimatter_timedelta *= player.upgrades['g13'].get_effect().toInt();
    }
    // antimatter explosion fix: softcap high antimatter timedelta
    if (antimatter_timedelta > 1000) antimatter_timedelta = 1000 * (1 + Math.log(antimatter_timedelta / 1000));
    // antimatter explosion fix #2: antimatter grows much slower if there is a lot of it
    if (player.antimatter.add(1).gt(player.matter.add(1).mult(1000))) antimatter_timedelta *= 3 / (player.antimatter.add(1).log(10).subtract(player.matter.add(1).log(10)).max(3).toInt());
    // antimatter explosion fix #3: antimatter grows slower if it is over e20
    if (player.antimatter.gt(1e20)) antimatter_timedelta /= player.antimatter.add(1).log(1e20).max(1).pow(2).toInt();

    // Photonic Challenge 1: antimatter does not grow
    if (player.challenges['p1'].inC()) antimatter_timedelta = 0;
    player.antimatter = player.antimatter.mult(big(1.0009).pow(antimatter_timedelta));

    for (let key of Object.keys(player.dimensions).reverse()) {
        player.dimensions[key].apply_timedelta(timedelta);
        // for VC5
        if (key.endsWith("_1")) cap_resources(player);
    }

    var generation_timedelta = timedelta;
    // p13: annihilation is 2x faster
    generation_timedelta *= player.upgrades["p13"].get_effect().toInt();

    var available_matter = new BigNumber();
    available_matter.copy(player.matter);
    var available_antimatter = new BigNumber();
    available_antimatter.copy(player.antimatter);
    // p21: if enabled, protect some matter and antimatter
    if (player.upgrades['p21'].enabled) {
        available_matter = available_matter.subtract(player.upgrades['p21'].get_effect()).max(0);
        available_antimatter = available_antimatter.subtract(player.upgrades['p21'].get_effect()).max(0);
    }

    let energy_generated = available_matter.max(available_antimatter).mult(big(1).subtract(big(0.9999).pow(generation_timedelta))).min(available_matter).min(available_antimatter).max(0);
    
    let protected_matter = big(0);
    let protected_antimatter = big(0);
    if (player.upgrades['p21'].enabled) {
        protected_matter = player.matter.min(player.upgrades['p21'].get_effect());
        protected_antimatter = player.antimatter.min(player.upgrades['p21'].get_effect());
    }
    
    player.matter = player.matter.subtract(energy_generated).max(protected_matter).min(player.challenge_strength_4);
    player.antimatter = player.antimatter.subtract(energy_generated).max(protected_antimatter).min(player.challenge_strength_4);

    // p14: annihilation generates 3x energy
    energy_generated = energy_generated.mult(player.upgrades["p14"].get_effect());
    // p24: gain more energy based on unspent photons
    if (player.upgrades['p24'].is_active()) energy_generated = energy_generated.mult(player.upgrades["p24"].get_effect());
    // g14: annihilation generates even more energy
    energy_generated = energy_generated.mult(player.upgrades["g14"].get_effect());
    // v31: annihilation produces 4x energy
    energy_generated = energy_generated.mult(player.upgrades["v31"].get_effect());
    // v32: anniilation produces more energy based on current matter
    if (player.upgrades['v32'].is_active()) energy_generated = energy_generated.mult(player.upgrades["v32"].get_effect());
    // infrared waves boost energy production
    energy_generated = energy_generated.mult(wave_effect('infrared'));
    // d113: anniilation produces more energy based on Shards
    if (player.upgrades['d113'].is_active()) energy_generated = energy_generated.mult(player.upgrades["d113"].get_effect());
    // Photonic Challenge 2: annihilation does not produce energy
    if (player.challenges['p2'].inC()) energy_generated = big(0);

    // if heating enabled, don't gain any energy
    if (me.upgrades['d91'].is_active() && player.heating_enabled) {
        if (player.heating_smart_distribution) { // Smart distribution: 50/50
            player.temperature_energy = player.temperature_energy.add(energy_generated.div(2));
            player.energy = player.energy.add(energy_generated.div(2)).min(player.challenge_strength_4);
        }
        else player.temperature_energy = player.temperature_energy.add(energy_generated);
    }
    else {
        player.energy = player.energy.add(energy_generated).min(player.challenge_strength_4);
    }

    player.space = player.space.add(get_space_production(player).mult(timedelta / 1000));
    // achievement 108: Space is not affected by resource limit
    if (!me.achievements['108'].complete) player.space = player.space.min(player.challenge_strength_4);

    for (let key of Object.keys(player.achievements)) {
        player.achievements[key].update();
    }
    player.achievement_multiplier = get_achievements_multiplier(player);

    for (let key of Object.keys(player.challenges)) {
        player.challenges[key].update();
    }

    for (let key of Object.keys(player.autobuyers)) {
        player.autobuyers[key].update();
    }

    // g44: passive Photon gain
    if (player.upgrades['g44'].is_active()) {
        if (can_photonic(player)) {
            let photons_gained = prestige_earn_photons(player).mult(timedelta / 1000).add(player.photons_carry);
            // Challenge 4: all resources are capped
            player.photons = player.photons.add(photons_gained.rounddown()).round().min(player.challenge_strength_4);

            player.photons_carry = photons_gained.subtract(photons_gained.rounddown()).toInt();
            if (player.photons_carry > 1) player.photons_carry = 1;
        }
    }

    // AUTO1_4: instantly gain Grations upon reset
    if (player.upgrades['AUTO1_4'].is_active() && player.upgrades['AUTO1_4'].enabled) {
        if (can_gravitonic(player)) {
            let gravitons_gained = prestige_earn_gravitons(player);
            // Challenge 4: all resources are capped
            player.gravitons = player.gravitons.add(gravitons_gained).round().min(player.challenge_strength_4);

            player.max_gravitons = player.max_gravitons.max(player.gravitons);
            player.max_gravitons_in_nc = player.max_gravitons_in_nc.max(player.gravitons);
        }
    }

    // AUTO2_4: passive Neutron gain
    if (player.upgrades['AUTO2_4'].is_active()) {
        if (can_neutronic(player)) {
            let neutrons_gained = prestige_earn_neutrons(player).mult(timedelta / 1000).add(player.neutrons_carry);
            // Challenge 4: all resources are capped
            player.neutrons = player.neutrons.add(neutrons_gained.rounddown()).round().min(player.challenge_strength_4);

            player.neutrons_carry = neutrons_gained.subtract(neutrons_gained.rounddown()).toInt();
            if (player.neutrons_carry > 1) player.neutrons_carry = 1;
        }
    }

    // a04_3: passive Wave gain
    if (player.milestones['a04_3'].is_active()) {
        for (let i = 0; i < wave_types.length; i++) {
            if (can_reset_temperature(wave_types[i])) player[wave_types[i] + "_waves"] = player[wave_types[i] + "_waves"].add(wave_gain(wave_types[i]).mult(timedelta / 1000));
        }
    }

    player.max_matter = player.max_matter.max(player.matter);

    // v193: Stars produce Black Holes
    if (me.upgrades['d91'].is_active() && player.upgrades['v193'].is_active()) {
        // Challenge 4: all resources are capped
        player.black_holes = player.black_holes.add(player.upgrades['v193'].get_effect().mult(timedelta / 1000)).min(player.challenge_strength_4);
    }
    
    cap_resources(player);
    update_mechanics(player);
}

var timedelta_carry = 0;

function game_loop() {
    if (document.readyState == "loading") return;

    if (last_local_storage_save == -1) load_from_local_storage(me);
    if (Date.now() - last_local_storage_save > 1000) save_to_local_storage(me);

    let timedelta = Date.now() - me.last_update_ts;
    let corrected_timedelta = Math.min(Math.max(0, timedelta + timedelta_carry), 1000);

    me.total_realtime += timedelta;
    me.online_realtime += Math.min(Math.max(0, timedelta), 1000);

    // Inertia gain, pt. 1
    let inertial_timedelta = Math.max(0, timedelta - 1000); // Offline

    me.inertia = me.inertia.add(inertia_gain_speed(me).mult(inertial_timedelta)).min(me.upgrades['INERTIA_1'].get_effect());


    me.last_update_ts = Date.now();

    // Crazy antimatter growth fix: repeat time loop a lot of times
    let time_loop_repeats = Math.max(1, Math.floor(corrected_timedelta / 50));
    timedelta_carry = Math.max(0, corrected_timedelta - time_loop_repeats * 50);

    for (let i = 0; i < time_loop_repeats; i+=1) processTimedelta(me, 50);

    screen_update(me);
    for (let key of Object.keys(current_submenu)) {
        change_submenu(key, current_submenu[key]);
    }
}

setInterval(game_loop, 50);

var pressed_buttons = {
    'ctrl': false,
    'alt': false
}

function key_transform(keyevent) {
    let keystr = keyevent.key;
    if (keyevent.key != 'Alt' && keyevent.altKey) keystr = "Alt+" + keystr;
    if (keyevent.key != 'Control' && keyevent.ctrlKey) keystr = "Ctrl+" + keystr;
    if (keyevent.key != 'Meta' && keyevent.metaKey) keystr = "Meta+" + keystr;
    return keystr;
}

function hotkeydown(event) {
    if (document.getElementById("overlay_window").style.display != "none") return;
    switch (key_transform(event)) {
        case 'p': reset_photonic(); break;
        case 'g': reset_gravitonic(); break;
        case 'n': reset_neutronic(); break;
        case 'v': reset_vacuumic(); break;
        case 'd': reset_dimensional(); break;
        case 'a': reset_atomic(); break;
        case 'P': if (me.unlocked_photonic) change_menu('photonic'); break;
        case 'G': if (me.unlocked_gravitonic) change_menu('gravitonic'); break;
        case 'N': if (me.unlocked_neutronic) change_menu('neutronic'); break;
        case 'V': if (me.unlocked_vacuumic) change_menu('vacuumic'); break;
        case 'D': if (me.unlocked_dimensional) change_menu('dimensional'); break;
        case 'A': if (me.unlocked_atomic) change_menu('atomic'); break;
        case '1': 
            if (current_menu in current_submenu && current_submenu[current_menu] == "dimensions") 
                me.dimensions[current_menu + "_1"].buy(me.dimensions[current_menu + "_1"].binary_search_max()); 
            break;
        case '2': 
            if (current_menu in current_submenu && current_submenu[current_menu] == "dimensions") 
                me.dimensions[current_menu + "_2"].buy(me.dimensions[current_menu + "_2"].binary_search_max()); 
            break;
        case '3': 
            if (current_menu in current_submenu && current_submenu[current_menu] == "dimensions") 
                me.dimensions[current_menu + "_3"].buy(me.dimensions[current_menu + "_3"].binary_search_max()); 
            break;
        case '4': 
            if (current_menu in current_submenu && current_submenu[current_menu] == "dimensions") 
                me.dimensions[current_menu + "_4"].buy(me.dimensions[current_menu + "_4"].binary_search_max()); 
            break;
        case '5': 
            if (current_menu in current_submenu && current_submenu[current_menu] == "dimensions") 
                me.dimensions[current_menu + "_5"].buy(me.dimensions[current_menu + "_5"].binary_search_max()); 
            break;
        case '6': 
            if (current_menu in current_submenu && current_submenu[current_menu] == "dimensions") 
                me.dimensions[current_menu + "_6"].buy(me.dimensions[current_menu + "_6"].binary_search_max()); 
            break;
        case '7': 
            if (current_menu in current_submenu && current_submenu[current_menu] == "dimensions") 
                me.dimensions[current_menu + "_7"].buy(me.dimensions[current_menu + "_7"].binary_search_max()); 
            break;
        case '8': 
            if (current_menu in current_submenu && current_submenu[current_menu] == "dimensions") 
                me.dimensions[current_menu + "_8"].buy(me.dimensions[current_menu + "_8"].binary_search_max()); 
            break;
        case '9': 
            if (current_menu in current_submenu && current_submenu[current_menu] == "dimensions") 
                me.dimensions[current_menu + "_9"].buy(me.dimensions[current_menu + "_9"].binary_search_max()); 
            break;
        case '0': 
            if (current_menu in current_submenu && current_submenu[current_menu] == "dimensions") 
                me.dimensions[current_menu + "_10"].buy(me.dimensions[current_menu + "_10"].binary_search_max()); 
            break;
        case 'm':
            if (current_menu in current_submenu && current_submenu[current_menu] == "dimensions") 
                for (let i = 1; i <= 12; i++)
                    me.dimensions[current_menu + "_" + i].buy(me.dimensions[current_menu + "_" + i].binary_search_max()); 
            if (current_menu in current_submenu && current_submenu[current_menu] == "upgrades") {
                if (current_menu == "photonic" && (me.achievements['68'].complete || me.challenges['p0'].completed)) max_buy_upgrades('p');
                if (current_menu == "gravitonic" && (me.achievements['85'].complete || me.challenges['g0'].completed)) max_buy_upgrades('g');
                if (current_menu == "neutronic" && (me.achievements['125'].complete)) max_buy_upgrades('n');
            }
            break;
        case 'Shift':
            me.settings['show_ids'] = true;
            radio_set_setting('show_ids', true);
            break;
        case 'Control': pressed_buttons['ctrl'] = true; break;
        case 'Alt': pressed_buttons['alt'] = true; break;
        default: console.log("keydown: " + event.key + " (" + key_transform(event) + ")");
    }
}

function hotkeyup(event) {
    switch (key_transform(event)) {
        case 'Shift':
            me.settings['show_ids'] = false;
            radio_set_setting('show_ids', false);
            break;
        case 'Control': pressed_buttons['ctrl'] = false; break;
        case 'Alt': pressed_buttons['alt'] = false; break;
        default: console.log("keyup: " + event.key + " (" + key_transform(event) + ")");
    }
}

window.onload = function() { 
    document.body.addEventListener("keydown", hotkeydown); 
    document.body.addEventListener("keyup", hotkeyup); 
};

function hard_reset() {
    me = new Player();
    save_to_local_storage(me);
    update_mechanics_first(me);
    game_loop();
}

function hard_reset_confirm() {
    let result = confirm("Are you sure you want to perform a Hard Reset? All data will be lost!");
    if (result) hard_reset();
}

var current_menu = "matter";
var current_submenu = {
    "matter": "dimensions",
    "photonic": "upgrades",
    "gravitonic": "upgrades",
    "neutronic": "upgrades",
    "vacuumic": "upgrades",
    "dimensional": "upgrades",
    "atomic": "upgrades",
    "biological": "population",
    "information": "hotkeys"
}

var default_menu = current_menu;
var default_submenu = JSON.parse(JSON.stringify(current_submenu));

var last_local_storage_save = -1;

function change_menu(menu) {
    document.getElementById("menu_button_" + current_menu).className = "setting-button";
    document.getElementById("menu_button_" + menu).className = "setting-button disabled";

    document.getElementById("section_" + current_menu).style.display = "none";
    document.getElementById("section_" + menu).style.display = "";

    document.getElementById("submenu_" + current_menu).style.display = "none";
    document.getElementById("submenu_" + menu).style.display = "";

    current_menu = menu;

    if (menu in current_submenu) change_submenu(menu, current_submenu[menu]);
}

function change_submenu(menu, submenu) {
    if (submenu != default_submenu[menu] && document.getElementById("menu_button_" + menu + "_" + submenu).style.display == "none") {
        change_submenu(menu, default_submenu[menu]);
        return;
    }

    document.getElementById("menu_button_" + menu + "_" + current_submenu[menu]).className = "setting-button";
    document.getElementById("menu_button_" + menu + "_" + submenu).className = "setting-button disabled";

    document.getElementById(menu + "_" + current_submenu[menu]).style.display = "none";
    document.getElementById(menu + "_" + submenu).style.display = "";

    current_submenu[menu] = submenu;
}

// functions for radio-buttons

function radio_get_setting(name) {
    let elements = document.getElementsByName(name);
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].type == "radio" && elements[i].checked) {
            return elements[i].value;
        }
        if (elements[i].type == "checkbox") {
            return elements[i].checked;
        }
    }
}

function radio_set_setting(name, value) {
    let elements = document.getElementsByName(name);
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].type == "radio" && elements[i].value == value) {
            elements[i].checked = true;
        }
        if (elements[i].type == "checkbox") {
            elements[i].checked = value;
        }
    }
}

// Achievement manipulation

function fade_achievement_popup(achid) {
    let element = document.getElementById(achid);
    if (element != null) {
        if (element.style.opacity == "") element.style.opacity = 1;
        if (element.style.opacity > 0) {
            element.style.opacity -= 0.05;
            setTimeout(fade_achievement_popup, 50, achid);
        }
        else {
            destroy_achievement_popup(achid);
        }
    }
}

function destroy_achievement_popup(achid) {
    let element = document.getElementById(achid);
    if (element != null) {
        element.remove();
    }
}