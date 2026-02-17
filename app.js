const CHARACTERS = [
  {
    id: "ariana",
    name: "アリアナ",
    title: "祈りの加護",
    job: "プリースト",
    attribute: "空",
    race: "神聖人",
    stats: { atk: 20, def: 51, mag: 78, spr: 91, spd: 65, luk: 79 },
  },
  {
    id: "lancelate",
    name: "ランセレイト",
    title: "光速の騎士",
    job: "ランサー",
    attribute: "光",
    race: "神聖人",
    stats: { atk: 82, def: 78, mag: 51, spr: 70, spd: 96, luk: 61 },
  },
  {
    id: "gaius",
    name: "ガイウス",
    title: "要塞の守護",
    job: "ガーディアン",
    attribute: "地",
    race: "神聖人",
    stats: { atk: 80, def: 92, mag: 19, spr: 79, spd: 49, luk: 55 },
  },
  {
    id: "zeolite",
    name: "ゼオライト",
    title: "覚醒前の剣",
    job: "ソーディアン",
    attribute: "光",
    race: "人間",
    stats: { atk: 85, def: 71, mag: 63, spr: 74, spd: 75, luk: 77 },
  },
  {
    id: "eldas",
    name: "エルダス",
    title: "深淵の観測者",
    job: "ウィザード",
    attribute: "闇",
    race: "神聖人",
    stats: { atk: 25, def: 33, mag: 92, spr: 85, spd: 36, luk: 78 },
  },
  {
    id: "lion",
    name: "リオン",
    title: "百発の照準",
    job: "アーチャー",
    attribute: "風",
    race: "神聖人",
    stats: { atk: 72, def: 56, mag: 52, spr: 67, spd: 91, luk: 79 },
  },
  {
    id: "cerise",
    characterId: "cerise",
    name: "セリーズ",
    title: "烈火の鞭",
    job: "ウィッパー",
    attribute: "火",
    race: "神聖人",
    stats: { atk: 78, def: 52, mag: 55, spr: 63, spd: 90, luk: 82 },
  },
  {
    id: "aurum",
    characterId: "aurum",
    name: "アウルム",
    title: "放浪の使い手",
    job: "ウィッパー / ミンストレル",
    attribute: "風",
    race: "神聖人",
    stats: { atk: 80, def: 74, mag: 81, spr: 73, spd: 74, luk: 84 },
  },
  {
    id: "izaya",
    characterId: "izaya",
    name: "イザヤ",
    title: "剣閃の旅人",
    job: "グラディエーター",
    attribute: "風",
    race: "人間",
    stats: { atk: 88, def: 70, mag: 45, spr: 56, spd: 78, luk: 76 },
  },
  {
    id: "takahiko",
    name: "タカヒコ",
    title: "笑う奇策",
    job: "トリックスター",
    attribute: "地",
    race: "人間",
    stats: { atk: 71, def: 65, mag: 73, spr: 72, spd: 79, luk: 95 },
  },
  {
    id: "nami",
    characterId: "nami",
    name: "ナミ",
    title: "月下の祈祷",
    job: "ビショップ",
    attribute: "水",
    race: "人間",
    stats: { atk: 22, def: 42, mag: 82, spr: 81, spd: 73, luk: 74 },
  },
  {
    id: "madokasu",
    name: "マドカス",
    title: "狂戦の豪腕",
    job: "ベルセルク",
    attribute: "空",
    race: "人間",
    stats: { atk: 95, def: 59, mag: 34, spr: 56, spd: 71, luk: 69 },
  },
  {
    id: "leona",
    name: "レオナ",
    title: "蒼盾のレオナ",
    job: "ガーディアン",
    attribute: "水",
    race: "人間",
    stats: { atk: 58, def: 81, mag: 31, spr: 68, spd: 54, luk: 63 },
  },
  {
    id: "shion",
    name: "シオン",
    title: "風刃のシオン",
    job: "ランサー",
    attribute: "風",
    race: "人間",
    stats: { atk: 74, def: 55, mag: 34, spr: 52, spd: 84, luk: 66 },
  },
  {
    id: "kagura",
    name: "カグラ",
    title: "焔術のカグラ",
    job: "ウィザード",
    attribute: "火",
    race: "神聖人",
    stats: { atk: 33, def: 44, mag: 86, spr: 72, spd: 61, luk: 68 },
  },
  {
    id: "mirei",
    name: "ミレイ",
    title: "祈鐘のミレイ",
    job: "プリースト",
    attribute: "光",
    race: "人間",
    stats: { atk: 27, def: 49, mag: 71, spr: 83, spd: 58, luk: 72 },
  },
  {
    id: "vardo",
    name: "ヴァルド",
    title: "斥候のヴァルド",
    job: "アーチャー",
    attribute: "地",
    race: "神聖人",
    stats: { atk: 69, def: 52, mag: 41, spr: 57, spd: 80, luk: 75 },
  },
  {
    id: "noct",
    name: "ノクト",
    title: "影渡りのノクト",
    job: "トリックスター",
    attribute: "闇",
    race: "人間",
    stats: { atk: 62, def: 48, mag: 60, spr: 55, spd: 82, luk: 81 },
  },
  {
    id: "lucia",
    name: "ルチア",
    title: "波紋のルチア",
    job: "ビショップ",
    attribute: "水",
    race: "神聖人",
    stats: { atk: 29, def: 46, mag: 76, spr: 79, spd: 64, luk: 70 },
  },
  {
    id: "drake_s",
    name: "ドレイク",
    title: "豪斧のドレイク",
    job: "ベルセルク",
    attribute: "地",
    race: "人間",
    stats: { atk: 83, def: 61, mag: 18, spr: 44, spd: 57, luk: 60 },
  },
];

const SUMMON_CHARACTERS = [
  {
    id: "luna",
    rarity: "SR",
    name: "月祈のルナ",
    title: "月光の祈誓",
    job: "ビショップ",
    attribute: "光",
    race: "神聖人",
    stats: { atk: 24, def: 46, mag: 91, spr: 84, spd: 63, luk: 75 },
    isSummonCard: true,
  },
  {
    id: "jeffrey",
    rarity: "SR",
    name: "老練のジェフリー",
    title: "賢剣の導師",
    job: "マジックナイト",
    attribute: "光",
    race: "人間",
    stats: { atk: 84, def: 72, mag: 83, spr: 80, spd: 67, luk: 70 },
    isSummonCard: true,
  },
  {
    id: "volgram",
    rarity: "S",
    name: "ヴォルグラム",
    title: "風牙の闘士",
    job: "ウォーリア",
    attribute: "風",
    race: "人間",
    stats: { atk: 80, def: 78, mag: 24, spr: 66, spd: 65, luk: 68 },
    isSummonCard: true,
    summonCode: "VORG8R6M1X",
  },
];

const SUMMON_CHARACTER_BY_ID = Object.fromEntries(
  SUMMON_CHARACTERS.map((character) => [character.id, character])
);
const SUMMON_CARD_IDS = new Set(SUMMON_CHARACTERS.map((character) => character.id));

const PLAYER_CARD_IMAGE_BY_ID = {
  ariana: "1.image/prayer_SR/Ariana.jpg",
  lancelate: "1.image/prayer_SR/Lancelate.jpg",
  gaius: "1.image/prayer_SR/Gaius.jpg",
  zeolite: "1.image/prayer_SR/Zeolight.jpg",
  eldas: "1.image/prayer_SR/Eldas.jpg",
  lion: "1.image/prayer_SR/Lion.jpg",
  cerise: "1.image/prayer_SR/Serise.jpg",
  aurum: "1.image/prayer_SR/Aurum.jpg",
  izaya: "1.image/prayer_SR/Isaya.jpg",
  takahiko: "1.image/prayer_SR/Takahiko.jpg",
  nami: "1.image/prayer_SR/Nami.jpg",
  madokasu: "1.image/prayer_SR/Madocas.jpg",
  leona: "1.image/prayer_S/Leona.jpg",
  shion: "1.image/prayer_S/Shion.jpg",
  kagura: "1.image/prayer_S/Kagura.jpg",
  mirei: "1.image/prayer_S/Mirei.jpg",
  vardo: "1.image/prayer_S/Vardo.jpg",
  volgram: "1.image/prayer_S/Volgram.jpg",
  noct: "1.image/prayer_S/Noct.jpg",
  lucia: "1.image/prayer_S/Lucia.jpg",
  drake_s: "1.image/prayer_S/Drake.jpg",
  luna: "1.image/pass/Luna.jpg",
  jeffrey: "1.image/pass/Jeffrey.jpg",
};

const ENEMY_CARD_IMAGE_BY_ID = {
  lem: "1.image/enemy/Rem.jpg",
  grom: "1.image/enemy/Grom.jpg",
  mira: "1.image/enemy/Mira.jpg",
  seiran: "1.image/enemy/Seiran.jpg",
  baroque: "1.image/enemy/Baroque.jpg",
  nocta: "1.image/enemy/Nocta.jpg",
  drake: "1.image/enemy/Drake.jpg",
  arkan: "1.image/enemy/Arkan.jpg",
  izel: "1.image/enemy/Izel.jpg",
  vald: "1.image/enemy/Vald.jpg",
  chaos_destroyer: "1.image/enemy/Chaos%20Destroyer.jpg",
  arena_verm: "1.image/enemy/Verum.jpg",
};

const EMPTY_CARD_IMAGE_DATA_URI =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

const ENEMY_ROSTER = [
  {
    id: "lem",
    name: "迷宮の見張りレム",
    subtitle: "属性: 風 / 斥候兵",
    hp: 3000,
    stats: { atk: 72, def: 26, mag: 58, spr: 24, spd: 66, luk: 48 },
  },
  {
    id: "grom",
    name: "砕骨のグロム",
    subtitle: "属性: 地 / 重装兵",
    hp: 3630,
    stats: { atk: 84, def: 32, mag: 46, spr: 28, spd: 58, luk: 44 },
  },
  {
    id: "mira",
    name: "呪灯のミラ",
    subtitle: "属性: 闇 / 呪術兵",
    hp: 4260,
    stats: { atk: 50, def: 24, mag: 86, spr: 34, spd: 62, luk: 52 },
  },
  {
    id: "seiran",
    name: "断風のセイラン",
    subtitle: "属性: 風 / 迅撃兵",
    hp: 4890,
    stats: { atk: 88, def: 30, mag: 60, spr: 30, spd: 78, luk: 55 },
  },
  {
    id: "baroque",
    name: "黒鎖のバロック",
    subtitle: "属性: 闇 / 鎖術兵",
    hp: 5520,
    stats: { atk: 96, def: 38, mag: 58, spr: 34, spd: 64, luk: 50 },
  },
  {
    id: "nocta",
    name: "冥唱のノクタ",
    subtitle: "属性: 闇 / 詠唱兵",
    hp: 6150,
    stats: { atk: 56, def: 32, mag: 98, spr: 42, spd: 60, luk: 58 },
  },
  {
    id: "drake",
    name: "鋼殻のドレイク",
    subtitle: "属性: 地 / 装甲兵",
    hp: 6780,
    stats: { atk: 104, def: 46, mag: 66, spr: 38, spd: 63, luk: 52 },
  },
  {
    id: "arkan",
    name: "幽雷のアルカン",
    subtitle: "属性: 雷 / 幽撃兵",
    hp: 7410,
    stats: { atk: 112, def: 44, mag: 82, spr: 42, spd: 70, luk: 57 },
  },
  {
    id: "izel",
    name: "断罪のイゼル",
    subtitle: "属性: 闇 / 断罪官",
    hp: 8040,
    stats: { atk: 90, def: 42, mag: 116, spr: 50, spd: 66, luk: 61 },
  },
  {
    id: "vald",
    name: "終門のヴァルド",
    subtitle: "属性: 火 / 門衛",
    hp: 8700,
    stats: { atk: 124, def: 52, mag: 92, spr: 48, spd: 72, luk: 64 },
  },
  {
    id: "chaos_destroyer",
    name: "カオスデストロイヤー",
    subtitle: "属性: 闇 / 最終ボス",
    hp: 10000,
    stats: { atk: 165, def: 58, mag: 158, spr: 54, spd: 78, luk: 70 },
  },
];

const ARENA_ENEMY_ROSTER = [
  {
    id: "arena_verm",
    name: "深淵剣将ヴェルム",
    subtitle: "属性: 闇 / 深淵闘将",
    hp: 500,
    stats: { atk: 2780, def: 2500, mag: 2640, spr: 2200, spd: 88, luk: 70 },
  },
  {
    id: "arena_ordia",
    name: "蝕星のオルディア",
    subtitle: "属性: 闇 / 蝕星術士",
    hp: 8350,
    stats: { atk: 96, def: 45, mag: 132, spr: 53, spd: 68, luk: 66 },
  },
  {
    id: "arena_gigas",
    name: "崩界のギガス",
    subtitle: "属性: 地 / 崩界巨兵",
    hp: 9100,
    stats: { atk: 142, def: 55, mag: 110, spr: 50, spd: 73, luk: 68 },
  },
];

const ENEMY_BY_ID = Object.fromEntries(
  [...ENEMY_ROSTER, ...ARENA_ENEMY_ROSTER].map((enemy) => [enemy.id, enemy])
);
const ARENA_ENEMY_ID_SET = new Set(ARENA_ENEMY_ROSTER.map((enemy) => enemy.id));

const PLAYER_MAX_HP = 3000;
const PLAYER_SUMMON_CARD_HP_BONUS = 100;
const SUMMON_CARD_UNLOCK_STORAGE_KEY = "god_arcadia_unlocked_summon_cards_v1";
const TITLE_SETTINGS_STORAGE_KEY = "god_arcadia_title_settings_v1";
const CONTINUE_STATE_STORAGE_KEY = "god_arcadia_continue_state_v1";
const PLAYER_MORALE_MIN = 0;
const PLAYER_MORALE_MAX = 1000;
const PLAYER_MORALE_INITIAL = 50;
const PLAYER_MP_MAX = 500;
const PLAYER_MP_INITIAL = 50;
const PLAYER_MP_BASE_RECOVERY = 5;
const PLAYER_MP_REAR_RECOVERY = 5;
const PLAYER_MP_REAR_PRIEST_RECOVERY = 5;
const PLAYER_MP_STRATEGIST_RECOVERY = 5;
const PLAYER_NAMI_MP_RECOVERY_BONUS = 5;
const PLAYER_ELDAS_STRATEGIST_MP_RECOVERY_BONUS = 5;
const PLAYER_STRATEGIST_ENCHANT_MAG_BASE = 80;
const PLAYER_STRATEGIST_ENCHANT_DAMAGE_RATE = 9;
const PLAYER_STRATEGIST_ENCHANT_MAGIC_KNIGHT_RATE = 1.3;
const PLAYER_REAR_HEAL_SPR_BONUS_BASE = 80;
const PLAYER_REAR_HEAL_SPR_BONUS_RATE = 10;
const PLAYER_REAR_HOLY_HEAL_EFFECT_RATE = 2;
const PLAYER_REAR_HOLY_HEAL_TRIGGER_SPR = 90;
const PLAYER_REAR_HOLY_HEAL_AVAILABLE_TURN = 3;
const PLAYER_MP_SPELL_COST = 25;
const PLAYER_MP_HOLY_HEAL_COST = 50;
const PLAYER_MP_ANCIENT_MAGIC_COST = 50;
const PLAYER_ANCIENT_MAGIC_AVAILABLE_TURN = 3;
const PLAYER_MP_SPELLBLADE_COST = 50;
const PLAYER_DRAW_CARD_COUNT = 4;
const PLAYER_DRAW_SHUFFLE_MP_COST = 10;
const PLAYER_DRAW_SHUFFLE_MORALE_COST = 10;
const PLAYER_DRAW_SHUFFLE_TRICKSTER_DISCOUNT_RATE = 0.5;
const PLAYER_MAGIC_ATTACK_DAMAGE_RATE = 2;
const PLAYER_TURN3_MAGIC_HEAL_BOOST_RATE = 1.2;
const PLAYER_ANCIENT_MAGIC_DAMAGE_RATE = 4;
const PLAYER_MINSTREL_BACKLINE_MAGIC_RATE = 1.3;
const PLAYER_MINSTREL_BACKLINE_SLOT_IDS = ["rear", "general", "strategist"];
const PLAYER_SPELLBLADE_DAMAGE_RATE = 2;
const PLAYER_BERSERKER_RAGE_BASE_DAMAGE = 500;
const PLAYER_BERSERKER_RAGE_ATK_BASE = 80;
const PLAYER_BERSERKER_RAGE_ATK_BONUS_RATE = 70;
const PLAYER_BERSERKER_RAGE_SELF_DAMAGE_RATE = 0.5;
const PLAYER_BERSERKER_RAGE_IZAYA_GENERAL_RECOIL_RATE = 0.8;
const PLAYER_BERSERKER_RAGE_SWAY_TRIGGER_DAMAGE = 1000;
const PLAYER_BERSERKER_RAGE_SWAY_MIN = -500;
const PLAYER_BERSERKER_RAGE_SWAY_MAX = 100;
const PLAYER_REAR_ARCHER_EXTRA_ATTACK_RATE = 0.5;
const PLAYER_REAR_REMOTE_MAGIC_MAG_BASE = 70;
const PLAYER_REAR_REMOTE_MAGIC_DAMAGE_RATE = 11;
const PLAYER_REAR_REMOTE_MAGIC_MP_COST = 5;
const PLAYER_REAR_HEAL_PRIEST_BOOST_RATE = 1.5;
const PLAYER_TRICKSTER_ALL_JOB_RATE = 0.1;
const PLAYER_TREASURE_DROP_BASE_RATE = 0.5;
const PLAYER_TREASURE_DROP_TRICKSTER_RATE = 1;
const PLAYER_TREASURE_DROP_BASE_HEAL = 300;
const PLAYER_TREASURE_DROP_BONUS_LUK_BASE = 80;
const PLAYER_TREASURE_DROP_BONUS_HEAL_RATE = 30;
const PLAYER_TURN4_RANGED_INCOMING_DAMAGE_RATE = 0.7;
const PLAYER_TURN4_MELEE_JOB_ATTACK_BOOST_RATE = 1.2;
const PLAYER_MAGIC_BARRIER_TOTAL_THRESHOLD = 170;
const PLAYER_HOLY_MAGIC_BARRIER_TOTAL_THRESHOLD = 190;
const PLAYER_MAGIC_BARRIER_DAMAGE_RATE = 0.8;
const PLAYER_HOLY_MAGIC_BARRIER_DAMAGE_RATE = 0.6;
const PLAYER_IRON_WALL_DAMAGE_RATE = 0.9;
const PLAYER_FRONT_GUARDIAN_PHYSICAL_DAMAGE_RATE = 0.9;
const PLAYER_FRONT_MORALE_GAIN = 5;
const PLAYER_FRONT_LEADER_MORALE_GAIN = 10;
const PLAYER_GENERAL_MORALE_GAIN = 5;
const PLAYER_GENERAL_LEADER_MORALE_GAIN = 10;
const PLAYER_TURN4_LEGION_HEAL_BASE = 200;
const PLAYER_PHYSICAL_CRIT_BONUS_ON_5TH_TURN = 1.2;
const BATTLE_TURNS_PER_PHASE = 6;
const BATTLE_PHASE_LIMIT = 3;
const SCORE_BASE = 1000;
const SCORE_TURN_PENALTY = 100;
const SCORE_SINGLE_PHASE_CLEAR_BONUS = 500;
const SCORE_HP_RATE = 0.1;
const SCORE_MP_RATE = 0.5;
const SCORE_MORALE_RATE = 1;
const ATTRIBUTE_ADVANTAGE_RATE = 1.25;
const ATTRIBUTE_DISADVANTAGE_RATE = 0.8;
const ATTRIBUTE_NEUTRAL_RATE = 1;
const ATTRIBUTE_ADVANTAGE_TABLE = {
  火: ["風"],
  風: ["地"],
  地: ["水"],
  水: ["火"],
  光: ["闇"],
  闇: ["光"],
};
const PLAYER_LIFE_BURST_TRIGGER_ATK = 95;
const PLAYER_LIFE_BURST_TRIGGER_HP_DIVISOR = 5;
const PLAYER_LIFE_BURST_MISSING_HP_DIVISOR = 2;
const PLAYER_GALE_FORMATION_TRIGGER_SPD = 90;
const PLAYER_GALE_FORMATION_BASE_DAMAGE = 200;
const PLAYER_REVERSAL_FORMATION_BASE_DAMAGE = 200;
const PLAYER_FRONT_SWORDIAN_COUNTER_TRIGGER_RATE = 0.5;
const PLAYER_FOLLOW_UP_EFFECT_DELAY_MS = 760;
const LUNA_STAR_WISDOM_EFFECT_MS = 1600;
const PLAYER_LANCELATE_PREEMPTIVE_CARD_ID = "lancelate";
const PLAYER_ARIANA_CHARACTER_ID = "ariana";
const PLAYER_VOLGRAM_CHARACTER_ID = "volgram";
const PLAYER_ZEOLITE_CHARACTER_ID = "zeolite";
const PLAYER_ELDAS_CHARACTER_ID = "eldas";
const PLAYER_LUNA_CHARACTER_ID = "luna";
const PLAYER_IZAYA_CHARACTER_ID = "izaya";
const PLAYER_MADOKASU_CHARACTER_ID = "madokasu";
const PLAYER_NAMI_CHARACTER_ID = "nami";
const PLAYER_LION_CHARACTER_ID = "lion";
const PLAYER_GAIUS_CHARACTER_ID = "gaius";
const PLAYER_NAMI_IZAYA_ATTACK_RATE = 1.2;
const PLAYER_MADOKASU_IZAYA_ATTACK_RATE = 1.1;
const PLAYER_ZEOLITE_LAST_STAND_RATE = 3;
const PLAYER_VOLGRAM_ARIANA_WARRIOR_MORALE_RATE = 1.5;
const PLAYER_ARIANA_ZEOLITE_HEAL_RATE = 1.5;
const PLAYER_ARIANA_LION_REAR_ARCHER_RATE = 2;
const PLAYER_LUNA_STAR_WISDOM_MP_RECOVERY = 20;
const PLAYER_AURUM_CHARACTER_ID = "aurum";
const PLAYER_CERISE_CHARACTER_ID = "cerise";
const PLAYER_JEFFREY_CHARACTER_ID = "jeffrey";
const PLAYER_AURUM_CERISE_CHAIN_EXTRA_HIT_RATE = 0.5;
const PLAYER_JEFFREY_CERISE_CHAIN_EXTRA_HIT_RATE = 0.5;
const PLAYER_AURUM_CERISE_CHAIN_MAX_HITS = 3;
const PLAYER_CERISE_DUAL_SUPPORT_CHAIN_MAX_HITS = 4;
const PLAYER_LANCELATE_EVASION_TRIGGER_RATE = 0.5;
const LEADER_CARD_IDS = new Set(["zeolite", "izaya", "ariana"]);
const ENEMY_PLAYER_ATTACK_HALF_RATE = 0.5;
const ENEMY_PHYSICAL_ATTACK_HALF_BOSS_ID = "vald";
const ENEMY_MAGIC_ATTACK_HALF_BOSS_ID = "izel";
const ENEMY_AMBUSH_ASSAULT_TRIGGER_RATE = 1 / 3;
const ENEMY_AMBUSH_ASSAULT_DAMAGE_RATE = 1.5;
const ENEMY_DARK_ATTACK_TRIGGER_RATE = 1 / 3;
const ENEMY_DARK_ATTACK_DAMAGE_RATE = 1.2;
const DRAW_TO_BOARD_SCROLL_DELAY_MS = 70;
const PRE_ATTACK_PREVIEW_STEP_MS = 180;
const PRE_ATTACK_PREVIEW_FINAL_HOLD_MS = 240;
const PRE_ATTACK_PREVIEW_ANIM_MS = 140;
const MAGIC_CHANT_STAGE_MS = 560;
const ANCIENT_MAGIC_CHANT_EXTRA_MS = 900;
const SPELLBLADE_CHANT_EXTRA_MS = 6200;
const MAGIC_BARRIER_EFFECT_MS = 1900;
const HOLY_MAGIC_BARRIER_EFFECT_MS = 2600;
const REAR_HEAL_MAGIC_EFFECT_MS = 1850;
const HOLY_REAR_HEAL_MAGIC_EFFECT_MS = 3600;
const LANCELATE_PREEMPTIVE_EFFECT_MS = 1700;
const BERSERKER_RAGE_EFFECT_MS = 1700;
const BERSERKER_SCREEN_SHAKE_MS = 760;
const ZEOLITE_LAST_STAND_EFFECT_MS = 1900;
const STRATEGIST_ENCHANT_LINK_EFFECT_MS = 3200;
const MINSTREL_RELAY_EFFECT_MS = 1900;
const ENEMY_FINAL_ATTACK_HOLD_MS = 900;
const ENEMY_DEFEAT_FADE_MS = 980;
const ENEMY_AFTER_DEFEAT_PAUSE_MS = 780;
const ENEMY_SPAWN_REVEAL_MS = 880;
const ENEMY_TRANSITION_BANNER_MS = 1150;
const ATTACK_AUTO_SCROLL_PADDING_PX = 96;
const ATTACK_AUTO_SCROLL_START_DELAY_MS = 220;
const TITLE_START_BLOOM_MS = 1400;
const TITLE_SCREEN_FADE_OUT_MS = 900;
const TITLE_PASSWORD_S_RANK_IDS = new Set([
  "leona",
  "shion",
  "kagura",
  "mirei",
  "vardo",
  "noct",
  "lucia",
  "drake_s",
]);
const TITLE_PASSWORD_EXTRA_ALIASES = {
  sr01: "ariana",
  sr02: "lancelate",
  sr03: "gaius",
  sr04: "zeolite",
  sr05: "eldas",
  sr06: "lion",
  sr07: "cerise",
  sr08: "aurum",
  sr09: "izaya",
  sr10: "takahiko",
  sr11: "nami",
  sr12: "madokasu",
  s01: "leona",
  s02: "shion",
  s03: "kagura",
  s04: "mirei",
  s05: "vardo",
  s06: "noct",
  s07: "lucia",
  s08: "drake_s",
};
const TITLE_PASSWORD_SUMMON_HASH_ALIASES = {
  "8dc075c56c35beef803c6a7649a938fcd489fc927537a6d04036185f1be29938": "luna",
  "4e213cce01b1d8d1a82fd861fed1b77da21822a6d2803ea7c83c57e054af94d4": "jeffrey",
  "6e4a1e9f0260ca404a393304ebe082394b80be4ecf5d43e412e742c327a84d7c": "volgram",
};
const TITLE_PASSWORD_EXTRA_SUMMONS = SUMMON_CHARACTERS.map((card) => ({
  id: card.id,
  rarity: card.rarity ?? "SR",
  name: card.name,
  job: card.job,
  attribute: card.attribute,
  race: card.race,
  image: PLAYER_CARD_IMAGE_BY_ID[card.id] ?? "",
  stats: { ...card.stats },
  isSummonCard: true,
}));
const TITLE_PASSWORD_SUMMONS = [
  ...CHARACTERS.map((card) => ({
    id: card.id,
    rarity: TITLE_PASSWORD_S_RANK_IDS.has(card.id) ? "S" : "SR",
    name: card.name,
    job: card.job,
    attribute: card.attribute,
    race: card.race,
    image: PLAYER_CARD_IMAGE_BY_ID[card.id] ?? "",
    stats: { ...card.stats },
    isSummonCard: Boolean(card.isSummonCard),
  })),
  ...TITLE_PASSWORD_EXTRA_SUMMONS,
];
const KNOWN_JOB_TAGS = new Set([
  "プリースト",
  "ランサー",
  "ガーディアン",
  "ソーディアン",
  "ウィザード",
  "アーチャー",
  "ウィッパー",
  "グラディエーター",
  "トリックスター",
  "ビショップ",
  "ベルセルク",
  "ミンストレル",
  "マジックナイト",
  "ガンナー",
  "ウォーリア",
  "剣士",
]);
const TURN_MULTIPLE_THREE_THEME_CLASS = "turn-multiple-3";
const TURN_MULTIPLE_FOUR_THEME_CLASS = "turn-multiple-4";
const TURN_MULTIPLE_FIVE_THEME_CLASS = "turn-multiple-5";
const TURN_MULTIPLE_SIX_THEME_CLASS = "turn-multiple-6";

const SLOT_ORDER = [
  { id: "leftWing", label: "左翼" },
  { id: "front", label: "前衛" },
  { id: "rightWing", label: "右翼" },
  { id: "rear", label: "後衛" },
  { id: "general", label: "大将" },
  { id: "strategist", label: "軍師" },
];

const ENEMY_TARGET_PRIORITY = ["front", "rightWing", "leftWing", "rear", "strategist", "general"];
const SLOT_BY_ID = Object.fromEntries(SLOT_ORDER.map((slot) => [slot.id, slot]));

const boardSlotElements = Object.fromEntries(
  SLOT_ORDER.map((slot) => [slot.id, document.querySelector(`.board-slot[data-slot="${slot.id}"]`)])
);

const boardCardElements = Object.fromEntries(
  SLOT_ORDER.map((slot) => [
    slot.id,
    document.querySelector(`.board-slot[data-slot="${slot.id}"] .slot-card`),
  ])
);

const boardPanelEl = document.querySelector(".board-panel");
const drawButton = document.getElementById("draw-btn");
const drawModalEl = document.getElementById("draw-modal");
const drawShuffleBtn = document.getElementById("draw-shuffle-btn");
const modalCardsEl = document.getElementById("modal-cards");
const mainTurnPanelEl = document.getElementById("main-turn-panel");
const drawTurnChipEl = document.getElementById("draw-turn-chip");
const drawTurnValueEl = document.getElementById("draw-turn-value");
const drawEnemyHpValueEl = document.getElementById("draw-enemy-hp-value");
const drawPlayerHpValueEl = document.getElementById("draw-player-hp-value");
const drawPlayerMpValueEl = document.getElementById("draw-player-mp-value");
const drawPlayerMoraleValueEl = document.getElementById("draw-player-morale-value");
const resourceGridEl = document.getElementById("resource-grid");
const guardChoicePanelEl = document.getElementById("guard-choice-panel");
const guardChoiceTitleEl = document.getElementById("guard-choice-title");
const guardChoiceTextEl = document.getElementById("guard-choice-text");
const guardChoiceHintEl = document.getElementById("guard-choice-hint");
const guardChoiceButtonsEl = document.getElementById("guard-choice-buttons");
const guardPhysicalBtn = document.getElementById("guard-physical-btn");
const guardMagicBtn = document.getElementById("guard-magic-btn");
const guardAncientBtn = document.getElementById("guard-ancient-btn");
const guardFourthBtn = document.getElementById("guard-fourth-btn");
const logListEl = document.getElementById("log-list");
const enemyNameEl = document.getElementById("enemy-name");
const enemySubEl = document.getElementById("enemy-sub");
const enemyStatElements = {
  atk: document.getElementById("enemy-stat-atk"),
  def: document.getElementById("enemy-stat-def"),
  mag: document.getElementById("enemy-stat-mag"),
  spr: document.getElementById("enemy-stat-spr"),
  spd: document.getElementById("enemy-stat-spd"),
  luk: document.getElementById("enemy-stat-luk"),
};
const enemyHpValueEl = document.getElementById("enemy-hp-value");
const enemyHpFillEl = document.getElementById("enemy-hp-fill");
const playerHpValueEl = document.getElementById("player-hp-value");
const playerHpFillEl = document.getElementById("player-hp-fill");
const playerMoraleValueEl = document.getElementById("player-morale-value");
const playerMpValueEl = document.getElementById("player-mp-value");
const playerScoreValueEl = document.getElementById("player-score-value");
const turnValueEl = document.getElementById("turn-value");
const turnRuleEl = document.getElementById("turn-rule");
const turnKickerEl = document.querySelector("#main-turn-panel .turn-kicker");
const drawTurnLabelEl = document.querySelector("#draw-turn-chip .draw-status-label");
const template = document.getElementById("mini-card-template");
const abilityInfoPlaceholderEl = document.getElementById("ability-info-placeholder");
const abilityInfoDetailEl = document.getElementById("ability-info-detail");
const enemyArtImageEl = document.getElementById("enemy-art-image");
const enemyArtSlotEl = document.querySelector(".enemy-art-slot");
const floatingLogEl = document.getElementById("floating-log");
const titleScreenEl = document.getElementById("title-screen");
const titlePrimaryTapEl = document.getElementById("title-primary-tap");
const titleMenuEl = document.getElementById("title-menu");
const titleStartBtnEl = document.getElementById("title-start-btn");
const titleStartConfirmPanelEl = document.getElementById("title-start-confirm-panel");
const titleStartConfirmYesBtnEl = document.getElementById("title-start-confirm-yes-btn");
const titleStartConfirmNoBtnEl = document.getElementById("title-start-confirm-no-btn");
const titleContinueBtnEl = document.getElementById("title-continue-btn");
const titleArenaBtnEl = document.getElementById("title-arena-btn");
const titlePasswordBtnEl = document.getElementById("title-password-btn");
const titleSettingsBtnEl = document.getElementById("title-settings-btn");
const titleGuideBtnEl = document.getElementById("title-guide-btn");
const titleSubnoteEl = document.getElementById("title-subnote");
const titleArenaPanelEl = document.getElementById("title-arena-panel");
const titleArenaBackBtnEl = document.getElementById("title-arena-back-btn");
const titleArenaEnemyButtons = Array.from(
  document.querySelectorAll(".title-arena-btn[data-title-arena-enemy-id]")
);
const titlePasswordPanelEl = document.getElementById("title-password-panel");
const titlePasswordFormEl = document.getElementById("title-password-form");
const titlePasswordInputEl = document.getElementById("title-password-input");
const titlePasswordNoteEl = document.getElementById("title-password-note");
const titleSummonNodeEl = document.getElementById("title-summon-node");
const titlePasswordBackBtnEl = document.getElementById("title-password-back-btn");
const titleSettingsPanelEl = document.getElementById("title-settings-panel");
const titleSettingsBackBtnEl = document.getElementById("title-settings-back-btn");
const titleSettingsBgmToggleEl = document.getElementById("title-settings-bgm-toggle");
const titleSettingsBgmStateEl = document.getElementById("title-settings-bgm-state");
const bgmAudioEl = document.getElementById("bgm-audio");

let floatingLogDismissTimer = null;
let floatingLogHideTimer = null;
let drawToBoardScrollTimer = null;
let enemyTransitionStartTimer = null;
let enemyTransitionSwapTimer = null;
let enemyTransitionSpawnTimer = null;
let enemyTransitionEndTimer = null;
let titleStartTransitionTimer = null;
let lifeBurstCinematicLayerEl = null;
let turnDisplaySyncTimer = null;

const state = {
  deck: [],
  discard: [],
  hand: [],
  draft: [],
  selectedCard: null,
  board: Object.fromEntries(SLOT_ORDER.map((slot) => [slot.id, null])),
  logs: [],
  phase: 1,
  turn: 1,
  displayPhase: 1,
  displayTurn: 1,
  enemyIndex: 0,
  enemyHp: ENEMY_ROSTER[0].hp,
  activeEnemyRoster: [...ENEMY_ROSTER],
  playerHp: PLAYER_MAX_HP,
  morale: PLAYER_MORALE_INITIAL,
  mp: PLAYER_MP_INITIAL,
  score: 0,
  battleEnded: false,
  drawModalOpen: false,
  pendingEnemyAction: null,
  pendingEnemyActionAwaitingConfirm: false,
  pendingEnemyActionAwaitingResolve: false,
  pendingEnemyActionOutcome: null,
  pendingMagicChoice: null,
  pendingPostActivationPlayerAction: null,
  pendingLifeBurstSequence: null,
  pendingBoardRecycle: false,
  pendingActivationLogQueue: [],
  pendingTurnDisplayUpdate: false,
  enemyTransitioning: false,
  combatFxReadyAt: 0,
  tricksterJobMimicByCardId: {},
  strategistPlacedTurnIndex: null,
  unlockedSummonCardIds: new Set(),
  titleSettings: { bgmEnabled: true },
};

init();

function init() {
  hydrateSummonCardUnlocks();
  hydrateTitleSettings();
  bindEvents();
  setupTitleScreen();
  setupBackgroundMusic();
  resetGame({ saveContinueState: false });
}

function getUnlockedSummonCardCount() {
  let count = 0;
  state.unlockedSummonCardIds.forEach((cardId) => {
    if (SUMMON_CARD_IDS.has(cardId)) {
      count += 1;
    }
  });
  return count;
}

function getPlayerMaxHp() {
  return PLAYER_MAX_HP + getUnlockedSummonCardCount() * PLAYER_SUMMON_CARD_HP_BONUS;
}

function getUnlockedSummonCards() {
  return SUMMON_CHARACTERS.filter((card) => state.unlockedSummonCardIds.has(card.id));
}

function buildPlayerCardPool() {
  return [...CHARACTERS, ...getUnlockedSummonCards()];
}

function loadSummonCardUnlocks() {
  try {
    const raw = window.localStorage.getItem(SUMMON_CARD_UNLOCK_STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return new Set();

    return new Set(
      parsed.filter(
        (cardId) =>
          typeof cardId === "string" &&
          Object.prototype.hasOwnProperty.call(SUMMON_CHARACTER_BY_ID, cardId)
      )
    );
  } catch {
    return new Set();
  }
}

function saveSummonCardUnlocks() {
  try {
    window.localStorage.setItem(
      SUMMON_CARD_UNLOCK_STORAGE_KEY,
      JSON.stringify([...state.unlockedSummonCardIds])
    );
  } catch {}
}

function hydrateSummonCardUnlocks() {
  state.unlockedSummonCardIds = loadSummonCardUnlocks();
}

function getDefaultTitleSettings() {
  return {
    bgmEnabled: true,
  };
}

function loadTitleSettings() {
  try {
    const raw = window.localStorage.getItem(TITLE_SETTINGS_STORAGE_KEY);
    if (!raw) return getDefaultTitleSettings();
    const parsed = JSON.parse(raw);
    const defaults = getDefaultTitleSettings();
    if (!parsed || typeof parsed !== "object") return defaults;
    return {
      ...defaults,
      bgmEnabled: typeof parsed.bgmEnabled === "boolean" ? parsed.bgmEnabled : defaults.bgmEnabled,
    };
  } catch {
    return getDefaultTitleSettings();
  }
}

function saveTitleSettings() {
  try {
    window.localStorage.setItem(TITLE_SETTINGS_STORAGE_KEY, JSON.stringify(state.titleSettings));
  } catch {}
}

function hydrateTitleSettings() {
  state.titleSettings = loadTitleSettings();
}

function isContinueCheckpointTurn(turn = state.turn, phase = state.phase) {
  return normalizeBattleTurn(turn) === 1 && normalizeBattlePhase(phase) === 1;
}

function isArenaEnemyId(enemyId) {
  if (typeof enemyId !== "string") return false;
  return ARENA_ENEMY_ID_SET.has(enemyId);
}

function hasArenaEnemyInRoster(enemyRoster = []) {
  if (!Array.isArray(enemyRoster) || enemyRoster.length === 0) return false;
  return enemyRoster.some((enemy) => isArenaEnemyId(enemy?.id));
}

function buildContinueStateSnapshot() {
  const activeEnemyRoster = getActiveEnemyRoster();
  if (hasArenaEnemyInRoster(activeEnemyRoster)) return null;
  const currentEnemy = getCurrentEnemy();
  const checkpointEnemyHp = Math.max(0, Math.floor(currentEnemy?.hp ?? state.enemyHp ?? 0));
  const normalizedScore = Number(state.score);
  return {
    enemyRosterIds: activeEnemyRoster.map((enemy) => enemy.id),
    enemyIndex: Math.max(0, Math.floor(state.enemyIndex)),
    enemyHp: checkpointEnemyHp,
    phase: 1,
    turn: 1,
    playerHp: Math.max(0, Math.floor(state.playerHp)),
    mp: Math.max(0, Math.floor(state.mp)),
    morale: Math.max(PLAYER_MORALE_MIN, Math.floor(state.morale)),
    score: Number.isFinite(normalizedScore) ? normalizedScore : 0,
  };
}

function persistContinueStateSnapshot() {
  const snapshot = buildContinueStateSnapshot();
  if (!snapshot) return false;
  try {
    window.localStorage.setItem(CONTINUE_STATE_STORAGE_KEY, JSON.stringify(snapshot));
    return true;
  } catch {
    return false;
  }
}

function clearContinueStateSnapshot() {
  try {
    window.localStorage.removeItem(CONTINUE_STATE_STORAGE_KEY);
  } catch {}
}

function resolveEnemyRosterFromSnapshotIds(enemyRosterIds = []) {
  if (!Array.isArray(enemyRosterIds) || enemyRosterIds.length === 0) {
    return [...ENEMY_ROSTER];
  }

  const seen = new Set();
  const resolved = [];
  enemyRosterIds.forEach((enemyId) => {
    if (typeof enemyId !== "string" || seen.has(enemyId)) return;
    const enemy = ENEMY_BY_ID[enemyId];
    if (!enemy) return;
    seen.add(enemyId);
    resolved.push(enemy);
  });

  return resolved.length > 0 ? resolved : [...ENEMY_ROSTER];
}

function loadContinueStateSnapshot() {
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const toFiniteNumber = (value, fallback = 0) => {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : fallback;
  };

  try {
    const raw = window.localStorage.getItem(CONTINUE_STATE_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;

    const requiredKeys = ["playerHp", "mp", "morale", "score"];
    if (requiredKeys.some((key) => !Object.prototype.hasOwnProperty.call(parsed, key))) {
      return null;
    }

    const enemyRoster = resolveEnemyRosterFromSnapshotIds(parsed.enemyRosterIds);
    if (hasArenaEnemyInRoster(enemyRoster)) return null;
    const enemyIndex = clamp(Math.floor(toFiniteNumber(parsed.enemyIndex, 0)), 0, enemyRoster.length - 1);
    const enemyAtIndex = enemyRoster[enemyIndex] ?? enemyRoster[0];
    const enemyHp = Math.max(0, Math.floor(enemyAtIndex.hp));

    return {
      enemyRosterIds: enemyRoster.map((enemy) => enemy.id),
      enemyIndex,
      enemyHp,
      phase: 1,
      turn: 1,
      playerHp: clamp(Math.floor(toFiniteNumber(parsed.playerHp, getPlayerMaxHp())), 0, getPlayerMaxHp()),
      mp: clamp(Math.floor(toFiniteNumber(parsed.mp, PLAYER_MP_INITIAL)), 0, PLAYER_MP_MAX),
      morale: clamp(
        Math.floor(toFiniteNumber(parsed.morale, PLAYER_MORALE_INITIAL)),
        PLAYER_MORALE_MIN,
        PLAYER_MORALE_MAX
      ),
      score: toFiniteNumber(parsed.score, 0),
    };
  } catch {
    return null;
  }
}

function syncTitleContinueButtonState() {
  if (!titleContinueBtnEl) return;
  const hasContinueData = Boolean(loadContinueStateSnapshot());
  titleContinueBtnEl.disabled = !hasContinueData;
  titleContinueBtnEl.setAttribute("aria-disabled", hasContinueData ? "false" : "true");
  if (hasContinueData) {
    titleContinueBtnEl.removeAttribute("title");
  } else {
    titleContinueBtnEl.setAttribute("title", "コンティニューデータがありません");
  }
}

function applyContinueStateSnapshot(snapshot) {
  if (!snapshot || typeof snapshot !== "object") return false;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const toFiniteNumber = (value, fallback = 0) => {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : fallback;
  };
  const enemyRoster = resolveEnemyRosterFromSnapshotIds(snapshot.enemyRosterIds);
  if (hasArenaEnemyInRoster(enemyRoster)) return false;
  setActiveEnemyRoster(enemyRoster);
  resetGame({ saveContinueState: false });

  const maxEnemyIndex = enemyRoster.length - 1;
  state.enemyIndex = clamp(Math.floor(toFiniteNumber(snapshot.enemyIndex, 0)), 0, maxEnemyIndex);
  const currentEnemy = getCurrentEnemy();
  state.enemyHp = Math.max(0, Math.floor(currentEnemy.hp));

  state.phase = 1;
  state.turn = 1;
  state.displayPhase = state.phase;
  state.displayTurn = state.turn;
  state.pendingTurnDisplayUpdate = false;
  clearTurnDisplaySyncTimer();

  const playerMaxHp = getPlayerMaxHp();
  state.playerHp = clamp(Math.floor(toFiniteNumber(snapshot.playerHp, playerMaxHp)), 0, playerMaxHp);
  state.mp = clamp(Math.floor(toFiniteNumber(snapshot.mp, PLAYER_MP_INITIAL)), 0, PLAYER_MP_MAX);
  state.morale = clamp(
    Math.floor(toFiniteNumber(snapshot.morale, PLAYER_MORALE_INITIAL)),
    PLAYER_MORALE_MIN,
    PLAYER_MORALE_MAX
  );
  const snapshotScore = Number(snapshot.score);
  state.score = Number.isFinite(snapshotScore) ? snapshotScore : 0;

  state.logs = [];
  addLog(`コンティニュー再開: ${formatTurnLabel(state.turn, state.phase)}`, "good");
  persistContinueStateSnapshot();
  syncTitleContinueButtonState();
  renderAll();
  return true;
}

function startGameFromContinueSnapshot() {
  const snapshot = loadContinueStateSnapshot();
  if (!snapshot) {
    syncTitleContinueButtonState();
    showTitleSubnote("コンティニューデータがありません。");
    return false;
  }
  if (!applyContinueStateSnapshot(snapshot)) {
    showTitleSubnote("コンティニューデータの読込に失敗しました。");
    return false;
  }
  startBackgroundMusic();
  startTitleGameTransition();
  return true;
}

function syncTitleSettingsView() {
  if (!titleSettingsBgmToggleEl || !titleSettingsBgmStateEl) return;
  const bgmEnabled = Boolean(state.titleSettings?.bgmEnabled);
  titleSettingsBgmToggleEl.classList.toggle("is-on", bgmEnabled);
  titleSettingsBgmToggleEl.classList.toggle("is-off", !bgmEnabled);
  titleSettingsBgmToggleEl.setAttribute("aria-pressed", String(bgmEnabled));
  titleSettingsBgmStateEl.textContent = bgmEnabled ? "ON" : "OFF";
}

function setTitleBgmEnabled(enabled, options = {}) {
  const { persist = true } = options;
  const bgmEnabled = Boolean(enabled);
  state.titleSettings = {
    ...getDefaultTitleSettings(),
    ...(state.titleSettings || {}),
    bgmEnabled,
  };
  if (persist) {
    saveTitleSettings();
  }
  syncTitleSettingsView();

  if (!bgmAudioEl) return;
  if (!bgmEnabled) {
    if (!bgmAudioEl.paused) {
      bgmAudioEl.pause();
    }
    return;
  }
  startBackgroundMusic();
}

function toggleTitleBgmEnabled() {
  const current = Boolean(state.titleSettings?.bgmEnabled);
  setTitleBgmEnabled(!current);
}

function unlockSummonCard(cardId) {
  if (!cardId || !Object.prototype.hasOwnProperty.call(SUMMON_CHARACTER_BY_ID, cardId)) {
    return { unlocked: false, alreadyOwned: false };
  }

  if (state.unlockedSummonCardIds.has(cardId)) {
    return { unlocked: false, alreadyOwned: true };
  }

  state.unlockedSummonCardIds.add(cardId);
  saveSummonCardUnlocks();
  return { unlocked: true, alreadyOwned: false };
}

function bindEvents() {
  drawButton.addEventListener("click", drawTwoCards);
  guardPhysicalBtn.addEventListener("click", () => handleChoiceModalSelection("left"));
  guardMagicBtn.addEventListener("click", () => handleChoiceModalSelection("right"));
  if (guardAncientBtn) {
    guardAncientBtn.addEventListener("click", () => handleChoiceModalSelection("third"));
  }
  if (guardFourthBtn) {
    guardFourthBtn.addEventListener("click", () => handleChoiceModalSelection("fourth"));
  }

  boardPanelEl.addEventListener("click", (event) => {
    const slot = event.target.closest(".board-slot[data-slot]");
    if (!slot) return;
    placeSelected(slot.dataset.slot);
  });

  boardPanelEl.addEventListener("pointerover", (event) => {
    const cardEl = event.target.closest(".mini-card.board-card");
    if (!cardEl || !boardPanelEl.contains(cardEl)) return;
    const slotId = cardEl.dataset.slotId;
    const card = state.board[slotId];
    if (!card) return;
    renderAbilityInfo(card, slotId);
  });

  boardPanelEl.addEventListener("pointerout", (event) => {
    const fromCard = event.target.closest(".mini-card.board-card");
    if (!fromCard) return;
    const toNode = event.relatedTarget;
    const toCard = toNode instanceof Element ? toNode.closest(".mini-card.board-card") : null;
    if (toCard && boardPanelEl.contains(toCard)) return;
    renderAbilityInfo();
  });

  boardPanelEl.addEventListener("pointerleave", () => {
    renderAbilityInfo();
  });

  drawModalEl.addEventListener("click", (event) => {
    const card = event.target.closest("[data-action='pick-modal-card']");
    if (!card) return;
    chooseCardFromModal(card.dataset.cardId);
  });
  if (drawShuffleBtn) {
    drawShuffleBtn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      shuffleDrawDraftCards();
    });
  }

  const handleTurnNavTriggerClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    scrollToDivineDiceNode();
  };
  const handleTurnNavTriggerKeydown = (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    event.stopPropagation();
    scrollToDivineDiceNode();
  };
  [mainTurnPanelEl, drawTurnChipEl].forEach((triggerEl) => {
    if (!triggerEl) return;
    triggerEl.addEventListener("click", handleTurnNavTriggerClick);
    triggerEl.addEventListener("keydown", handleTurnNavTriggerKeydown);
  });

  // Capture phase prevents the click that placed a card from immediately skipping confirmations.
  document.addEventListener("click", handlePendingProgressClick, true);

  const handleViewportChange = () => {
    if (!floatingLogEl || floatingLogEl.hidden) return;
    positionFloatingLog();
  };

  window.addEventListener("resize", handleViewportChange);
  window.addEventListener("scroll", handleViewportChange, { passive: true });

  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", handleViewportChange);
    window.visualViewport.addEventListener("scroll", handleViewportChange);
  }
}

function getChoiceButtonBySide(side) {
  if (side === "left") return guardPhysicalBtn;
  if (side === "right") return guardMagicBtn;
  if (side === "third") return guardAncientBtn;
  if (side === "fourth") return guardFourthBtn;
  return null;
}

function setChoiceButtonState(buttonEl, options = {}) {
  if (!buttonEl) return;
  const { hidden = false, disabled = false, reason = "" } = options;
  const hiddenState = Boolean(hidden);
  const disabledState = Boolean(hiddenState || disabled);

  buttonEl.hidden = hiddenState;
  buttonEl.disabled = disabledState;
  buttonEl.setAttribute("aria-disabled", disabledState ? "true" : "false");

  if (disabledState && reason) {
    buttonEl.setAttribute("title", reason);
  } else {
    buttonEl.removeAttribute("title");
  }
}

function handleChoiceModalSelection(side) {
  const selectedBtn = getChoiceButtonBySide(side);
  if (selectedBtn && (selectedBtn.hidden || selectedBtn.disabled)) {
    return;
  }

  if (state.pendingMagicChoice) {
    chooseMagicUsage(side);
    return;
  }

  if (side === "left") {
    choosePredictGuard("physical");
    return;
  }
  if (side === "right") {
    choosePredictGuard("magic");
    return;
  }
  if (side === "fourth") return;
}

function setupTitleScreen() {
  if (!titleScreenEl) return;

  if (titleMenuEl) {
    titleMenuEl.hidden = true;
  }
  if (titlePrimaryTapEl) {
    titlePrimaryTapEl.hidden = false;
  }
  if (titlePasswordPanelEl) {
    titlePasswordPanelEl.hidden = true;
  }
  if (titleSettingsPanelEl) {
    titleSettingsPanelEl.hidden = true;
  }
  if (titleArenaPanelEl) {
    titleArenaPanelEl.hidden = true;
  }
  if (titleStartConfirmPanelEl) {
    titleStartConfirmPanelEl.hidden = true;
  }
  clearTitleSummonNode();
  resetTitlePasswordNote();
  syncTitleSettingsView();
  clearTitleSubnote();
  syncTitleContinueButtonState();

  // While the start confirmation modal is open, only allow clicks inside the modal.
  titleScreenEl.addEventListener(
    "click",
    (event) => {
      if (!isTitleStartConfirmPanelOpen()) return;
      const clickTarget = event.target instanceof Element ? event.target : null;
      if (clickTarget && clickTarget.closest("#title-start-confirm-panel")) return;
      event.preventDefault();
      event.stopPropagation();
    },
    true
  );

  titleScreenEl.addEventListener("click", () => {
    startBackgroundMusic();
    if (isTitlePasswordPanelOpen()) return;
    if (isTitleSettingsPanelOpen()) return;
    if (isTitleArenaPanelOpen()) return;
    if (isTitleStartConfirmPanelOpen()) return;
    if (!titleMenuEl || !titleMenuEl.hidden) return;
    revealTitleMenu();
  });

  if (titleArenaPanelEl) {
    titleArenaPanelEl.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }
  if (titlePasswordPanelEl) {
    titlePasswordPanelEl.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }
  if (titleSettingsPanelEl) {
    titleSettingsPanelEl.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }
  if (titleStartConfirmPanelEl) {
    titleStartConfirmPanelEl.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }

  if (titleStartBtnEl) {
    titleStartBtnEl.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openTitleStartConfirmPanel();
    });
  }

  if (titleStartConfirmYesBtnEl) {
    titleStartConfirmYesBtnEl.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      clearContinueStateSnapshot();
      syncTitleContinueButtonState();
      closeTitleStartConfirmPanel({ reopenMenu: false });
      startGameFromTitle(ENEMY_ROSTER);
    });
  }

  if (titleStartConfirmNoBtnEl) {
    titleStartConfirmNoBtnEl.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeTitleStartConfirmPanel();
    });
  }

  if (titleContinueBtnEl) {
    titleContinueBtnEl.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      startGameFromContinueSnapshot();
    });
  }

  if (titleArenaBtnEl) {
    titleArenaBtnEl.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openTitleArenaPanel();
    });
  }

  if (titleArenaBackBtnEl) {
    titleArenaBackBtnEl.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeTitleArenaPanel();
    });
  }

  titleArenaEnemyButtons.forEach((buttonEl) => {
    buttonEl.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (buttonEl.disabled) return;
      const enemyId = buttonEl.dataset.titleArenaEnemyId;
      if (!enemyId) return;
      const arenaEnemy = resolveArenaEnemyById(enemyId);
      if (!arenaEnemy) {
        showTitleSubnote("闘技場の敵データが見つかりませんでした。");
        return;
      }
      startGameFromTitle([arenaEnemy], { modeLabel: `闘技場: ${arenaEnemy.name}` });
    });
  });

  if (titlePasswordBtnEl) {
    titlePasswordBtnEl.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openTitlePasswordPanel();
    });
  }

  if (titlePasswordFormEl) {
    titlePasswordFormEl.addEventListener("submit", handleTitlePasswordSubmit);
  }

  if (titlePasswordBackBtnEl) {
    titlePasswordBackBtnEl.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeTitlePasswordPanel();
    });
  }

  if (titleSettingsBtnEl) {
    titleSettingsBtnEl.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openTitleSettingsPanel();
    });
  }
  if (titleSettingsBackBtnEl) {
    titleSettingsBackBtnEl.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeTitleSettingsPanel();
    });
  }
  if (titleSettingsBgmToggleEl) {
    titleSettingsBgmToggleEl.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleTitleBgmEnabled();
    });
  }

  if (titleGuideBtnEl) {
    titleGuideBtnEl.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      window.location.href = "1.god-arcadia-showcase.html";
    });
  }
}

function isTitlePasswordPanelOpen() {
  return Boolean(titlePasswordPanelEl && !titlePasswordPanelEl.hidden);
}

function isTitleSettingsPanelOpen() {
  return Boolean(titleSettingsPanelEl && !titleSettingsPanelEl.hidden);
}

function isTitleArenaPanelOpen() {
  return Boolean(titleArenaPanelEl && !titleArenaPanelEl.hidden);
}

function isTitleStartConfirmPanelOpen() {
  return Boolean(titleStartConfirmPanelEl && !titleStartConfirmPanelEl.hidden);
}

function getActiveEnemyRoster() {
  if (Array.isArray(state.activeEnemyRoster) && state.activeEnemyRoster.length > 0) {
    return state.activeEnemyRoster;
  }
  return ENEMY_ROSTER;
}

function setActiveEnemyRoster(roster) {
  if (Array.isArray(roster) && roster.length > 0) {
    state.activeEnemyRoster = roster;
    return;
  }
  state.activeEnemyRoster = [...ENEMY_ROSTER];
}

function resolveArenaEnemyById(enemyId) {
  if (typeof enemyId !== "string" || !enemyId.trim()) return null;
  return ARENA_ENEMY_ROSTER.find((enemy) => enemy.id === enemyId.trim()) ?? null;
}

function startGameFromTitle(roster = ENEMY_ROSTER, options = {}) {
  const { modeLabel = "" } = options;
  setActiveEnemyRoster(Array.isArray(roster) ? roster : ENEMY_ROSTER);
  resetGame();
  if (modeLabel) {
    addLog(`${modeLabel} を開始。`, "good");
    renderAll();
  }
  startBackgroundMusic();
  startTitleGameTransition();
}

function openTitleStartConfirmPanel() {
  if (!titleStartConfirmPanelEl) return;
  if (titleMenuEl) {
    titleMenuEl.hidden = true;
  }
  if (titleArenaPanelEl) {
    titleArenaPanelEl.hidden = true;
  }
  if (titlePasswordPanelEl) {
    titlePasswordPanelEl.hidden = true;
  }
  if (titleSettingsPanelEl) {
    titleSettingsPanelEl.hidden = true;
  }
  titleStartConfirmPanelEl.hidden = false;
  clearTitleSubnote();
}

function closeTitleStartConfirmPanel(options = {}) {
  const { reopenMenu = true } = options;
  if (titleStartConfirmPanelEl) {
    titleStartConfirmPanelEl.hidden = true;
  }
  if (reopenMenu && titleMenuEl) {
    titleMenuEl.hidden = false;
  }
  clearTitleSubnote();
}

function openTitleArenaPanel() {
  if (!titleArenaPanelEl) return;
  if (titleMenuEl) {
    titleMenuEl.hidden = true;
  }
  if (titlePasswordPanelEl) {
    titlePasswordPanelEl.hidden = true;
  }
  if (titleSettingsPanelEl) {
    titleSettingsPanelEl.hidden = true;
  }
  if (titleStartConfirmPanelEl) {
    titleStartConfirmPanelEl.hidden = true;
  }
  titleArenaPanelEl.hidden = false;
  clearTitleSubnote();
}

function closeTitleArenaPanel() {
  if (titleArenaPanelEl) {
    titleArenaPanelEl.hidden = true;
  }
  if (titleMenuEl) {
    titleMenuEl.hidden = false;
  }
  clearTitleSubnote();
}

function openTitlePasswordPanel() {
  if (!titlePasswordPanelEl) return;
  if (titleMenuEl) {
    titleMenuEl.hidden = true;
  }
  if (titleArenaPanelEl) {
    titleArenaPanelEl.hidden = true;
  }
  if (titleSettingsPanelEl) {
    titleSettingsPanelEl.hidden = true;
  }
  if (titleStartConfirmPanelEl) {
    titleStartConfirmPanelEl.hidden = true;
  }
  titlePasswordPanelEl.hidden = false;
  clearTitleSubnote();
  clearTitleSummonNode();
  resetTitlePasswordNote();

  if (titlePasswordInputEl) {
    titlePasswordInputEl.value = "";
    titlePasswordInputEl.focus();
  }
}

function closeTitlePasswordPanel() {
  if (titlePasswordPanelEl) {
    titlePasswordPanelEl.hidden = true;
  }
  if (titleMenuEl) {
    titleMenuEl.hidden = false;
  }
  clearTitleSummonNode();
  resetTitlePasswordNote();
}

function openTitleSettingsPanel() {
  if (!titleSettingsPanelEl) return;
  if (titleMenuEl) {
    titleMenuEl.hidden = true;
  }
  if (titleArenaPanelEl) {
    titleArenaPanelEl.hidden = true;
  }
  if (titlePasswordPanelEl) {
    titlePasswordPanelEl.hidden = true;
  }
  if (titleStartConfirmPanelEl) {
    titleStartConfirmPanelEl.hidden = true;
  }
  titleSettingsPanelEl.hidden = false;
  syncTitleSettingsView();
  clearTitleSubnote();
}

function closeTitleSettingsPanel() {
  if (titleSettingsPanelEl) {
    titleSettingsPanelEl.hidden = true;
  }
  if (titleMenuEl) {
    titleMenuEl.hidden = false;
  }
  clearTitleSubnote();
}

function normalizeTitlePasswordKey(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[\s_\-・]+/g, "");
}

async function sha256Hex(value) {
  if (!window.crypto?.subtle || typeof TextEncoder !== "function") return "";
  const encoded = new TextEncoder().encode(String(value ?? ""));
  const digest = await window.crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function resolveTitlePasswordSummon(inputValue) {
  const normalized = normalizeTitlePasswordKey(inputValue);
  if (!normalized) return null;

  const directId = TITLE_PASSWORD_EXTRA_ALIASES[normalized];
  if (directId) {
    const directEntry = TITLE_PASSWORD_SUMMONS.find((entry) => entry.id === directId);
    if (directEntry) return directEntry;
  }

  const hashedKey = await sha256Hex(normalized);
  const summonId = TITLE_PASSWORD_SUMMON_HASH_ALIASES[hashedKey];
  if (summonId) {
    const summonEntry = TITLE_PASSWORD_SUMMONS.find((entry) => entry.id === summonId);
    if (summonEntry) return summonEntry;
  }

  for (const entry of TITLE_PASSWORD_SUMMONS) {
    if (normalizeTitlePasswordKey(entry.id) === normalized) return entry;
    if (normalizeTitlePasswordKey(entry.name) === normalized) return entry;
  }

  return null;
}

function setTitlePasswordNote(text, tone = "") {
  if (!titlePasswordNoteEl) return;
  titlePasswordNoteEl.classList.remove("is-error", "is-success");
  if (tone === "error") {
    titlePasswordNoteEl.classList.add("is-error");
  } else if (tone === "success") {
    titlePasswordNoteEl.classList.add("is-success");
  }
  titlePasswordNoteEl.textContent = text;
}

function resetTitlePasswordNote() {
  setTitlePasswordNote("コードを入力して召喚ノードを表示。");
}

function clearTitleSummonNode() {
  if (!titleSummonNodeEl) return;
  titleSummonNodeEl.textContent = "";
  titleSummonNodeEl.hidden = true;
}

function renderTitleSummonNode(entry) {
  if (!titleSummonNodeEl || !entry) return;

  const cardEl = document.createElement("article");
  cardEl.className = "title-summon-card";

  const badgeEl = document.createElement("p");
  badgeEl.className = "title-summon-badge";
  badgeEl.textContent = entry.rarity;
  cardEl.appendChild(badgeEl);

  if (entry.image) {
    const artEl = document.createElement("div");
    artEl.className = "title-summon-art";
    const imageEl = document.createElement("img");
    imageEl.src = entry.image;
    imageEl.alt = `${entry.name} の召喚カード`;
    imageEl.loading = "lazy";
    imageEl.decoding = "async";
    artEl.appendChild(imageEl);
    cardEl.appendChild(artEl);
  }

  const nameEl = document.createElement("h3");
  nameEl.className = "title-summon-name";
  nameEl.textContent = entry.name;
  cardEl.appendChild(nameEl);

  const metaEl = document.createElement("p");
  metaEl.className = "title-summon-meta";
  const categoryLabel = entry.isSummonCard ? "召喚カード" : "通常カード";
  metaEl.textContent = `${entry.job} / ${entry.attribute} / ${entry.race} / ${categoryLabel}`;
  cardEl.appendChild(metaEl);

  const statsEl = document.createElement("dl");
  statsEl.className = "title-summon-stats";
  const statsOrder = [
    ["ATK", "atk"],
    ["DEF", "def"],
    ["MAG", "mag"],
    ["SPR", "spr"],
    ["SPD", "spd"],
    ["LUK", "luk"],
  ];

  statsOrder.forEach(([label, key]) => {
    const rowEl = document.createElement("div");
    const dtEl = document.createElement("dt");
    const ddEl = document.createElement("dd");
    dtEl.textContent = label;
    ddEl.textContent = String(entry.stats[key]);
    rowEl.append(dtEl, ddEl);
    statsEl.appendChild(rowEl);
  });
  cardEl.appendChild(statsEl);

  titleSummonNodeEl.textContent = "";
  titleSummonNodeEl.appendChild(cardEl);
  titleSummonNodeEl.hidden = false;
}

async function handleTitlePasswordSubmit(event) {
  event.preventDefault();
  event.stopPropagation();
  if (!titlePasswordInputEl) return;

  const entry = await resolveTitlePasswordSummon(titlePasswordInputEl.value);
  if (!entry) {
    clearTitleSummonNode();
    setTitlePasswordNote("コードが一致しません。", "error");
    return;
  }

  renderTitleSummonNode(entry);
  if (entry.isSummonCard) {
    const unlockResult = unlockSummonCard(entry.id);
    if (unlockResult.unlocked) {
      resetGame();
      setTitlePasswordNote(
        `${entry.rarity} ${entry.name} を召喚。仲間に加入し、召喚カードとして記録しました。` +
          ` 次回以降は再召喚不要 / 所持カード ${buildPlayerCardPool().length}枚 / 最大HP ${getPlayerMaxHp()}`,
        "success"
      );
      return;
    }
    if (unlockResult.alreadyOwned) {
      setTitlePasswordNote(
        `${entry.rarity} ${entry.name} は召喚済みです。メモリー済みのため、すでにデッキで使用可能です。`,
        "success"
      );
      return;
    }
  }

  setTitlePasswordNote(`${entry.rarity} ${entry.name} を召喚しました。`, "success");
}

function setupBackgroundMusic() {
  if (!bgmAudioEl) return;
  bgmAudioEl.volume = 0.35;
  bgmAudioEl.loop = true;
  if (!state.titleSettings?.bgmEnabled) {
    bgmAudioEl.pause();
  }
  syncTitleSettingsView();
}

function startBackgroundMusic() {
  if (!bgmAudioEl || !state.titleSettings?.bgmEnabled || !bgmAudioEl.paused) return;

  const playAttempt = bgmAudioEl.play();
  if (playAttempt && typeof playAttempt.catch === "function") {
    playAttempt.catch(() => {});
  }
}

function revealTitleMenu() {
  if (titleMenuEl) {
    titleMenuEl.hidden = false;
  }
  if (titlePrimaryTapEl) {
    titlePrimaryTapEl.hidden = true;
  }
  syncTitleContinueButtonState();
  clearTitleSubnote();
}

function startTitleGameTransition() {
  if (!titleScreenEl || titleScreenEl.classList.contains("is-hidden")) return;
  if (titleScreenEl.classList.contains("is-starting")) return;

  clearTitleSubnote();
  titleScreenEl.classList.add("is-starting");

  window.clearTimeout(titleStartTransitionTimer);
  titleStartTransitionTimer = window.setTimeout(() => {
    hideTitleScreen();
  }, TITLE_START_BLOOM_MS);
}

function hideTitleScreen() {
  if (!titleScreenEl || titleScreenEl.classList.contains("is-hidden")) return;
  window.clearTimeout(titleStartTransitionTimer);
  titleStartTransitionTimer = null;
  clearTitleSubnote();
  titleScreenEl.classList.add("is-hidden");
  window.setTimeout(() => {
    if (!titleScreenEl) return;
    titleScreenEl.classList.remove("is-starting");
    titleScreenEl.hidden = true;
  }, TITLE_SCREEN_FADE_OUT_MS);
}

function showTitleSubnote(text) {
  if (!titleSubnoteEl) return;
  titleSubnoteEl.textContent = text;
  titleSubnoteEl.hidden = false;
}

function clearTitleSubnote() {
  if (!titleSubnoteEl) return;
  titleSubnoteEl.hidden = true;
  titleSubnoteEl.textContent = "";
}

function scrollToDivineDiceNode() {
  if (!drawButton) return;
  const rect = drawButton.getBoundingClientRect();
  const currentScrollY = window.scrollY || window.pageYOffset || 0;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
  const targetTop = Math.max(0, Math.floor(currentScrollY + rect.top - Math.max(80, viewportHeight * 0.26)));
  window.scrollTo({
    top: targetTop,
    behavior: "smooth",
  });
  flashElement(drawButton, "draw-btn-guide-flash", 820);
}

function queueScrollToDivineDiceNodeAfterEnemyTurn() {
  window.requestAnimationFrame(() => {
    if (state.battleEnded || state.enemyTransitioning) return;
    if (state.pendingBoardRecycle) return;
    if (state.pendingEnemyAction || state.pendingEnemyActionAwaitingConfirm || state.pendingEnemyActionAwaitingResolve) return;
    if (hasPendingActivationLog() || state.pendingPostActivationPlayerAction || state.pendingLifeBurstSequence) return;
    if (state.drawModalOpen || state.pendingMagicChoice) return;
    scrollToDivineDiceNode();
  });
}

function clearTurnDisplaySyncTimer() {
  window.clearTimeout(turnDisplaySyncTimer);
  turnDisplaySyncTimer = null;
}

function normalizeBattlePhase(phaseValue = 1) {
  return Math.max(1, Math.floor(Number(phaseValue) || 1));
}

function normalizeBattleTurn(turnValue = 1) {
  const numericTurn = Math.floor(Number(turnValue) || 1);
  return Math.min(BATTLE_TURNS_PER_PHASE, Math.max(1, numericTurn));
}

function getBattleTurnIndex(turn = state.turn, phase = state.phase) {
  const normalizedPhase = normalizeBattlePhase(phase);
  const normalizedTurn = normalizeBattleTurn(turn);
  return (normalizedPhase - 1) * BATTLE_TURNS_PER_PHASE + normalizedTurn;
}

function getResidualScoreAtCurrentState() {
  const playerHp = Math.max(0, Math.min(getPlayerMaxHp(), state.playerHp));
  const playerMp = Math.max(0, Math.min(PLAYER_MP_MAX, state.mp));
  const playerMorale = Math.max(PLAYER_MORALE_MIN, Math.min(PLAYER_MORALE_MAX, state.morale));
  return playerHp * SCORE_HP_RATE + playerMp * SCORE_MP_RATE + playerMorale * SCORE_MORALE_RATE;
}

function getTurnScoreForCurrentBattleState() {
  const turnCount = getBattleTurnIndex(state.turn, state.phase);
  let turnScore = SCORE_BASE - turnCount * SCORE_TURN_PENALTY;
  if (normalizeBattlePhase(state.phase) <= 1) {
    turnScore += SCORE_SINGLE_PHASE_CLEAR_BONUS;
  }
  return turnScore;
}

function getEnemyDefeatScoreGain() {
  return getTurnScoreForCurrentBattleState() + getResidualScoreAtCurrentState();
}

function formatScoreValue(scoreValue = 0) {
  const normalized = Number(scoreValue);
  if (!Number.isFinite(normalized)) return "0.0";
  return normalized.toFixed(1);
}

function isCycleTurn(turnNumber, turn = state.turn) {
  return normalizeBattleTurn(turn) === turnNumber;
}

function getDisplayPhaseValue() {
  const currentPhase = Number.isFinite(state.phase) ? state.phase : 1;
  const displayPhase = Number.isFinite(state.displayPhase) ? state.displayPhase : currentPhase;
  return normalizeBattlePhase(displayPhase);
}

function getDisplayTurnValue() {
  const currentTurn = Number.isFinite(state.turn) ? state.turn : 1;
  const displayTurn = Number.isFinite(state.displayTurn) ? state.displayTurn : currentTurn;
  return normalizeBattleTurn(displayTurn);
}

function formatTurnLabel(turn = state.turn, phase = state.phase) {
  const turnNumber = normalizeBattleTurn(turn);
  const phaseNumber = normalizeBattlePhase(phase);
  return `PHASE ${phaseNumber} / TURN ${turnNumber}`;
}

function addSimpleTurnStartLog(turn = state.turn, phase = state.phase, options = {}) {
  const { saveContinueState = true } = options;
  const normalizedTurn = normalizeBattleTurn(turn);
  const normalizedPhase = normalizeBattlePhase(phase);
  const turnLabel = formatTurnLabel(normalizedTurn, normalizedPhase);
  if (saveContinueState && isContinueCheckpointTurn(normalizedTurn, normalizedPhase)) {
    persistContinueStateSnapshot();
    syncTitleContinueButtonState();
  }
  if (hasPendingActivationLog()) {
    addActivationLog(turnLabel, "good");
    return;
  }
  addLog(turnLabel);
}

function commitDisplayedTurn(turn = state.turn, phase = state.phase) {
  const normalizedTurn = normalizeBattleTurn(turn);
  const normalizedPhase = normalizeBattlePhase(phase);
  state.displayTurn = normalizedTurn;
  state.displayPhase = normalizedPhase;
  state.pendingTurnDisplayUpdate = false;
  addSimpleTurnStartLog(normalizedTurn, normalizedPhase, { saveContinueState: false });
}

function scheduleDisplayedTurnAfterCombat(turn = state.turn, phase = state.phase) {
  const targetTurn = normalizeBattleTurn(turn);
  const targetPhase = normalizeBattlePhase(phase);
  clearTurnDisplaySyncTimer();
  state.pendingTurnDisplayUpdate = true;

  const remainingFxMs = Math.max(0, Math.ceil(state.combatFxReadyAt - performance.now()));
  const applyDisplayTurn = () => {
    turnDisplaySyncTimer = null;
    if (state.battleEnded || state.enemyTransitioning) {
      state.pendingTurnDisplayUpdate = false;
      return;
    }
    if (state.turn !== targetTurn || state.phase !== targetPhase) {
      state.pendingTurnDisplayUpdate = false;
      return;
    }
    commitDisplayedTurn(targetTurn, targetPhase);
    renderAll();
  };

  if (remainingFxMs > 0) {
    turnDisplaySyncTimer = window.setTimeout(applyDisplayTurn, remainingFxMs);
    return;
  }

  applyDisplayTurn();
}

function advanceTurnCycle() {
  const currentTurn = normalizeBattleTurn(state.turn);
  if (currentTurn >= BATTLE_TURNS_PER_PHASE) {
    state.phase = normalizeBattlePhase(state.phase) + 1;
    state.turn = 1;
    return;
  }
  state.turn = currentTurn + 1;
}

function isPhaseLimitTurnEnded(phase = state.phase, turn = state.turn) {
  return normalizeBattlePhase(phase) >= BATTLE_PHASE_LIMIT && normalizeBattleTurn(turn) >= BATTLE_TURNS_PER_PHASE;
}

function getCurrentTurnLabel() {
  return formatTurnLabel(state.turn, state.phase);
}

function isQueuedTurnContextMismatch(queuedTurn, queuedPhase) {
  if (queuedTurn !== undefined && queuedTurn !== state.turn) return true;
  if (queuedPhase !== undefined && queuedPhase !== state.phase) return true;
  return false;
}

function handlePendingProgressClick(event) {
  const clickTarget = event.target instanceof Element ? event.target : null;
  if (clickTarget && clickTarget.closest("[data-turn-nav-trigger]")) {
    return;
  }

  const hasPendingProgressFlow =
    hasPendingActivationLog() ||
    Boolean(state.pendingPostActivationPlayerAction) ||
    Boolean(state.pendingLifeBurstSequence);
  if ((state.battleEnded || state.enemyTransitioning) && !hasPendingProgressFlow) return;

  if (acknowledgeActivationLog()) {
    event.preventDefault();
    event.stopPropagation();
    if (!hasPendingActivationLog()) {
      resolvePendingPostActivationPlayerAction();
    }
    renderAll();
    return;
  }

  if (resolvePendingPostActivationPlayerAction()) {
    event.preventDefault();
    event.stopPropagation();
    renderAll();
    return;
  }

  if (resolvePendingLifeBurstSequence()) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  if (state.pendingBoardRecycle) {
    state.pendingBoardRecycle = false;
    hideFloatingLog(true);
    event.preventDefault();
    event.stopPropagation();
    recycleBoardCardsToDeckIfFull();
    renderAll();
    return;
  }

  if (state.pendingEnemyAction && state.pendingEnemyActionAwaitingConfirm) {
    state.pendingEnemyActionAwaitingConfirm = false;
    hideFloatingLog(true);
    event.preventDefault();
    event.stopPropagation();
    renderAll();
    return;
  }

  if (state.pendingEnemyActionAwaitingResolve) {
    hideFloatingLog(true);
    event.preventDefault();
    event.stopPropagation();
    finalizeQueuedEnemyAction();
  }
}

function resetGame(options = {}) {
  const { saveContinueState = true } = options;
  const activeEnemyRoster = getActiveEnemyRoster();
  const firstEnemy = activeEnemyRoster[0] ?? ENEMY_ROSTER[0];
  clearEnemyTransitionEffects({ resetState: false });
  clearLifeBurstCinematicEffect();
  clearTurnDisplaySyncTimer();
  state.deck = shuffle([...buildPlayerCardPool()]);
  state.discard = [];
  state.hand = [];
  state.draft = [];
  state.selectedCard = null;
  state.board = Object.fromEntries(SLOT_ORDER.map((slot) => [slot.id, null]));
  state.logs = [];
  state.phase = 1;
  state.turn = 1;
  state.displayPhase = 1;
  state.displayTurn = 1;
  state.enemyIndex = 0;
  state.enemyHp = firstEnemy.hp;
  state.playerHp = getPlayerMaxHp();
  state.morale = PLAYER_MORALE_INITIAL;
  state.mp = PLAYER_MP_INITIAL;
  state.score = 0;
  state.battleEnded = false;
  state.drawModalOpen = false;
  state.pendingEnemyAction = null;
  state.pendingEnemyActionAwaitingConfirm = false;
  state.pendingEnemyActionAwaitingResolve = false;
  state.pendingEnemyActionOutcome = null;
  state.pendingMagicChoice = null;
  state.pendingPostActivationPlayerAction = null;
  state.pendingLifeBurstSequence = null;
  state.pendingBoardRecycle = false;
  state.pendingActivationLogQueue = [];
  state.pendingTurnDisplayUpdate = false;
  state.enemyTransitioning = false;
  state.combatFxReadyAt = 0;
  state.tricksterJobMimicByCardId = {};
  state.strategistPlacedTurnIndex = null;
  hideFloatingLog(true);
  renderAbilityInfo();

  addLog(
    `盤面を初期化。第1戦 ${firstEnemy.name}。神のサイコロで${PLAYER_DRAW_CARD_COUNT}枚ドローしてください。` +
      ` 所持カード ${buildPlayerCardPool().length}枚 (召喚カード ${getUnlockedSummonCardCount()}枚)。`
  );
  addSimpleTurnStartLog(state.displayTurn, state.displayPhase, { saveContinueState });
  renderAll();
}

function drawTwoCards() {
  if (state.enemyTransitioning) {
    addLog("敵交代演出中です。少し待ってください。", "warn");
    renderAll();
    return;
  }

  if (state.battleEnded) {
    addLog("バトル終了後です。リセットして再開してください。", "warn");
    renderAll();
    return;
  }

  if (state.pendingTurnDisplayUpdate) {
    return;
  }

  if (state.drawModalOpen) {
    addLog("ドローウインドでカードを選んでください。", "warn");
    renderAll();
    return;
  }

  if (state.pendingMagicChoice) {
    addLog("先に魔法使用確認を選択してください。", "warn");
    renderAll();
    return;
  }

  if (hasPendingActivationLog()) {
    addLog("先に画面クリックで発動ログを確認してください。", "warn");
    renderAll();
    return;
  }

  if (state.pendingLifeBurstSequence) {
    addLog("先に画面クリックでライフバーストを解放してください。", "warn");
    renderAll();
    return;
  }

  if (state.pendingEnemyActionAwaitingConfirm || state.pendingEnemyActionAwaitingResolve) {
    addLog("先に画面をクリックして進行してください。", "warn");
    renderAll();
    return;
  }

  if (state.pendingBoardRecycle) {
    addLog("先に画面クリックで陣形再編を完了してください。", "warn");
    renderAll();
    return;
  }

  if (state.pendingEnemyAction) {
    addLog("先に物理防御か魔法防御を選択してください。", "warn");
    renderAll();
    return;
  }

  if (state.selectedCard) {
    const reopenDraft = [state.selectedCard, ...state.hand];
    if (reopenDraft.length !== PLAYER_DRAW_CARD_COUNT) {
      addLog("4枚選択画面に戻れませんでした。カード枚数を確認してください。", "warn");
      renderAll();
      return;
    }

    state.draft = reopenDraft;
    state.selectedCard = null;
    state.drawModalOpen = true;
    addLog("選択を取り消して4枚選択画面に戻りました。", "warn");
    renderAll();
    return;
  }

  if (getEmptySlots().length === 0) {
    addLog("すべてのスロットが埋まっています。", "warn");
    renderAll();
    return;
  }

  const cardsNeededFromDeck = Math.max(0, PLAYER_DRAW_CARD_COUNT - state.hand.length);
  ensureDeck(cardsNeededFromDeck);

  if (state.deck.length < cardsNeededFromDeck) {
    addLog(`${PLAYER_DRAW_CARD_COUNT}枚ドローできるカードが不足しています。`, "alert");
    renderAll();
    return;
  }

  const drawnFromDeck = [];
  for (let i = 0; i < cardsNeededFromDeck; i += 1) {
    drawnFromDeck.push(state.deck.shift());
  }

  state.draft = [...state.hand, ...drawnFromDeck];
  state.hand = [];
  state.drawModalOpen = true;

  const draftNames = state.draft.map((card) => card.name).join(" / ");
  addLog(
    `神のサイコロ: ${state.draft.length}枚を提示 (${draftNames})。1枚選択、残りは手札として保持。`
  );
  renderAll();
}

function hasBoardTrickster() {
  return Object.values(state.board).some((card) => isTrickster(card));
}

function getDrawShuffleCost() {
  const discountRate = hasBoardTrickster() ? PLAYER_DRAW_SHUFFLE_TRICKSTER_DISCOUNT_RATE : 1;
  return {
    mp: Math.max(1, Math.floor(PLAYER_DRAW_SHUFFLE_MP_COST * discountRate)),
    morale: Math.max(1, Math.floor(PLAYER_DRAW_SHUFFLE_MORALE_COST * discountRate)),
    discountRate,
  };
}

function buildReplacementDraftCards(currentDraft) {
  if (!Array.isArray(currentDraft) || currentDraft.length !== PLAYER_DRAW_CARD_COUNT) return null;

  const excludedIds = new Set(currentDraft.map((card) => card.id));
  const picked = [];
  const pickedIds = new Set();
  const nextDeck = [];
  const nextDiscard = [];

  const shuffledDeck = shuffle([...state.deck]);
  for (const card of shuffledDeck) {
    const canPick =
      picked.length < PLAYER_DRAW_CARD_COUNT &&
      !excludedIds.has(card.id) &&
      !pickedIds.has(card.id);
    if (canPick) {
      picked.push(card);
      pickedIds.add(card.id);
    } else {
      nextDeck.push(card);
    }
  }

  const shuffledDiscard = shuffle([...state.discard]);
  for (const card of shuffledDiscard) {
    const canPick =
      picked.length < PLAYER_DRAW_CARD_COUNT &&
      !excludedIds.has(card.id) &&
      !pickedIds.has(card.id);
    if (canPick) {
      picked.push(card);
      pickedIds.add(card.id);
    } else {
      nextDiscard.push(card);
    }
  }

  if (picked.length < PLAYER_DRAW_CARD_COUNT) return null;
  return { nextDraft: picked, nextDeck, nextDiscard };
}

function shuffleDrawDraftCards() {
  if (!state.drawModalOpen) return;

  if (state.draft.length !== PLAYER_DRAW_CARD_COUNT) {
    addLog("シャッフル不可: 入れ替え対象の4枚が揃っていません。", "warn");
    renderAll();
    return;
  }

  const shuffleCost = getDrawShuffleCost();
  if (state.mp < shuffleCost.mp || state.morale < shuffleCost.morale) {
    addLog(
      `シャッフル不可: MP ${state.mp}/${shuffleCost.mp} / 士気 ${state.morale}/${shuffleCost.morale} が必要です。`,
      "warn"
    );
    renderAll();
    return;
  }

  const currentDraft = [...state.draft];
  const replacement = buildReplacementDraftCards(currentDraft);
  if (!replacement) {
    addLog("シャッフル不可: 4枚すべてを別カードに入れ替える候補が不足しています。", "warn");
    renderAll();
    return;
  }

  state.mp = Math.max(0, state.mp - shuffleCost.mp);
  state.morale = Math.max(PLAYER_MORALE_MIN, state.morale - shuffleCost.morale);
  state.deck = replacement.nextDeck;
  state.discard = [...replacement.nextDiscard, ...currentDraft];
  state.draft = replacement.nextDraft;

  const nextDraftNames = state.draft.map((card) => card.name).join(" / ");
  const discountText = shuffleCost.discountRate < 1 ? " トリックスター効果で消費半減。" : "";
  addLog(
    `4枚シャッフル: MP${shuffleCost.mp}・士気${shuffleCost.morale}を消費して全入れ替え。` +
      ` 新候補: ${nextDraftNames}.${discountText}`,
    shuffleCost.discountRate < 1 ? "good" : ""
  );
  renderAll();
}

function ensureDeck(minimumCount) {
  if (state.deck.length >= minimumCount) return;
  if (state.discard.length === 0) return;

  const recycled = shuffle([...state.discard]);
  state.deck.push(...recycled);
  state.discard = [];
  addLog("神のサイコロ: 捨て札を山札に戻しました。", "warn");
}

function chooseCardFromModal(cardId) {
  const picked = state.draft.find((card) => card.id === cardId);
  if (!picked) return;

  state.hand = state.draft.filter((card) => card !== picked);

  state.selectedCard = picked;
  state.draft = [];
  state.drawModalOpen = false;

  const recommendation = getRecommendation(picked, getEmptySlots());
  if (recommendation) {
    addLog(
      `${picked.name}を選択。推奨配置: ${SLOT_BY_ID[recommendation.slotId].label} (${recommendation.reason})`,
      "good"
    );
  } else {
    addLog(`${picked.name}を選択。盤面スロットをクリックして配置してください。`, "good");
  }
  if (state.hand.length > 0) {
    addLog(`残り${state.hand.length}枚を手札に保持。次回ドロー時に再提示します。`, "warn");
  }

  renderAll();
  scrollBoardPanelToCenter();
}

function placeSelected(slotId) {
  if (state.enemyTransitioning) {
    addLog("敵交代演出中です。少し待ってください。", "warn");
    renderAll();
    return;
  }

  if (state.battleEnded) {
    addLog("バトル終了後です。リセットして再開してください。", "warn");
    renderAll();
    return;
  }

  if (state.pendingTurnDisplayUpdate) {
    return;
  }

  if (state.drawModalOpen) {
    addLog("先にドローウインドでカードを1枚選択してください。", "warn");
    renderAll();
    return;
  }

  if (state.pendingMagicChoice) {
    addLog("先に魔法使用確認を選択してください。", "warn");
    renderAll();
    return;
  }

  if (hasPendingActivationLog()) {
    addLog("先に画面クリックで発動ログを確認してください。", "warn");
    renderAll();
    return;
  }

  if (state.pendingLifeBurstSequence) {
    addLog("先に画面クリックでライフバーストを解放してください。", "warn");
    renderAll();
    return;
  }

  if (state.pendingEnemyActionAwaitingConfirm || state.pendingEnemyActionAwaitingResolve) {
    addLog("先に画面をクリックして進行してください。", "warn");
    renderAll();
    return;
  }

  if (state.pendingBoardRecycle) {
    addLog("先に画面クリックで陣形再編を完了してください。", "warn");
    renderAll();
    return;
  }

  if (state.pendingEnemyAction) {
    addLog("先に物理防御か魔法防御を選択してください。", "warn");
    renderAll();
    return;
  }

  if (!state.selectedCard) {
    renderAll();
    return;
  }

  if (state.board[slotId]) {
    addLog(`${SLOT_BY_ID[slotId].label}は埋まっています。空きスロットを選んでください。`, "warn");
    renderAll();
    return;
  }

  const card = state.selectedCard;
  state.board[slotId] = card;
  if (slotId === "strategist") {
    state.strategistPlacedTurnIndex = getBattleTurnIndex();
  }
  state.selectedCard = null;

  addLog(`${card.name} を ${SLOT_BY_ID[slotId].label} に配置。`, "good");
  resolveTurnBattle(card, slotId);
  renderAll();
}

function calculateLegionTotalBurstDamage() {
  const totals = getPlayerTotalStats();
  const atkTotal = Math.max(0, Math.floor(totals.atk));
  const defTotal = Math.max(0, Math.floor(totals.def));
  const magTotal = Math.max(0, Math.floor(totals.mag));
  const sprTotal = Math.max(0, Math.floor(totals.spr));
  const spdTotal = Math.max(0, Math.floor(totals.spd));
  const lukTotal = Math.max(0, Math.floor(totals.luk));
  const moraleBonus = Math.max(0, Math.floor(state.morale * 0.5));
  const damage = Math.max(0, atkTotal + defTotal + magTotal + sprTotal + spdTotal + lukTotal + moraleBonus);
  return {
    damage,
    atkTotal,
    defTotal,
    magTotal,
    sprTotal,
    spdTotal,
    lukTotal,
    moraleBonus,
    breakdown: {
      type: "legionTotal",
      atkTotal,
      defTotal,
      magTotal,
      sprTotal,
      spdTotal,
      lukTotal,
      moraleBonus,
      finalDamage: damage,
    },
  };
}

function getLegionTotalBurstEffectDelayMs(legionTotalBurst) {
  if (!legionTotalBurst || legionTotalBurst.damage <= 0) return 0;
  const preAttackSteps = buildPreAttackDamageSteps(legionTotalBurst.damage, legionTotalBurst.breakdown);
  const preAttackDelayMs = getPreAttackPreviewDurationMs(preAttackSteps.length);
  return preAttackDelayMs + ATTACK_AUTO_SCROLL_START_DELAY_MS + 2600;
}

function resolveFinalLegionTotalBurst(attacker, slotId, currentEnemy) {
  if (!attacker || !slotId || !currentEnemy) return null;
  if (!isBoardFull()) return null;

  const legionTotalBurst = calculateLegionTotalBurstDamage();
  const effectDelayMs = getLegionTotalBurstEffectDelayMs(legionTotalBurst);
  const nextEnemyHp = Math.max(0, state.enemyHp - legionTotalBurst.damage);
  addActivationLog("軍団の総力が今、解き放たれる", "crit");
  addActivationLog(
    `軍団攻撃発動: 合計ATK ${legionTotalBurst.atkTotal} + DEF ${legionTotalBurst.defTotal} + MAG ${legionTotalBurst.magTotal}` +
      ` + SPR ${legionTotalBurst.sprTotal} + SPD ${legionTotalBurst.spdTotal} + LUK ${legionTotalBurst.lukTotal}` +
      ` + 士気補正${legionTotalBurst.moraleBonus}` +
      ` = ${legionTotalBurst.damage} ダメージ。敵HP ${nextEnemyHp}/${currentEnemy.hp}.`,
    "good"
  );
  state.enemyHp = nextEnemyHp;

  if (legionTotalBurst.damage > 0) {
    playPlayerAttackEffect(attacker, slotId, legionTotalBurst.damage, "legion", false, {
      hitLabel: "LEGION TOTAL",
      breakdown: legionTotalBurst.breakdown,
    });
  }

  if (state.enemyHp <= 0) {
    onEnemyDefeated(currentEnemy, {
      finalAttackMessage: `軍団攻撃で ${legionTotalBurst.damage} ダメージ`,
    });
    return {
      triggered: true,
      enemyDefeated: true,
      effectDelayMs: 0,
    };
  }

  return {
    triggered: true,
    enemyDefeated: false,
    effectDelayMs,
  };
}

function resolveTurnBattle(attacker, slotId, options = {}) {
  const {
    skipFinalLegionBurst = false,
    suppressArianaZeolitePrompt = false,
    suppressArianaEldasHolyHealPrompt = false,
    suppressLunaStarWisdomPrompt = false,
    lunaStarWisdomApplied: initialLunaStarWisdomApplied = false,
    suppressGaleFormationPrompt = false,
    suppressReversalFormationPrompt = false,
    suppressLegionHealPrompt = false,
  } = options;
  let lunaStarWisdomApplied = Boolean(initialLunaStarWisdomApplied);
  const currentEnemy = getCurrentEnemy();
  if (!skipFinalLegionBurst) {
    const legionBurstResult = resolveFinalLegionTotalBurst(attacker, slotId, currentEnemy);
    if (legionBurstResult && legionBurstResult.triggered) {
      if (!legionBurstResult.enemyDefeated) {
        const queuedTurn = state.turn;
        const queuedPhase = state.phase;
        const queuedEnemyIndex = state.enemyIndex;
        const resumeTurnBattle = () => {
          if (state.battleEnded || state.enemyTransitioning) return;
          if (state.turn !== queuedTurn || state.phase !== queuedPhase || state.enemyIndex !== queuedEnemyIndex) return;
          resolveTurnBattle(attacker, slotId, { skipFinalLegionBurst: true });
          renderAll();
        };
        if (legionBurstResult.effectDelayMs > 0) {
          window.setTimeout(resumeTurnBattle, legionBurstResult.effectDelayMs);
        } else {
          resumeTurnBattle();
        }
      }
      return;
    }
  }
  resolveTricksterAllJobEffectsForTurn();
  addFourthTurnJobEffectLog(attacker);
  const lunaStarWisdomActive = canTriggerLunaStarWisdomRecovery(attacker, slotId);
  if (lunaStarWisdomActive && !suppressLunaStarWisdomPrompt) {
    addActivationLog("星から知恵を授かりました", "crit");
    queuePostActivationPlayerAction({
      actionType: "resumeTurnBattleAfterPrompt",
      attacker,
      slotId,
      enemyIndex: state.enemyIndex,
      queuedTurn: state.turn,
      queuedPhase: state.phase,
      skipFinalLegionBurst: true,
      suppressArianaZeolitePrompt,
      suppressArianaEldasHolyHealPrompt,
      suppressLunaStarWisdomPrompt: true,
      lunaStarWisdomApplied: false,
      suppressGaleFormationPrompt,
      suppressReversalFormationPrompt,
      suppressLegionHealPrompt,
    });
    renderAll();
    return;
  }
  if (lunaStarWisdomActive && !lunaStarWisdomApplied) {
    const prevMp = state.mp;
    state.mp = Math.max(0, Math.min(PLAYER_MP_MAX, state.mp + PLAYER_LUNA_STAR_WISDOM_MP_RECOVERY));
    const recoveredMp = Math.max(0, state.mp - prevMp);
    showLunaStarWisdomEffect(attacker, slotId);
    addLog(
      `${getCurrentTurnLabel()} 星導の加護: ${attacker.name} が${SLOT_BY_ID[slotId].label}で星の知恵を授かり、` +
        `MP +${recoveredMp}。MP ${prevMp}→${state.mp}/${PLAYER_MP_MAX}.`,
      "good"
    );
    lunaStarWisdomApplied = true;
  }
  if (canTriggerGaleFormation(attacker) && !suppressGaleFormationPrompt) {
    addActivationLog("風よ、我らに勝機を！", "crit");
    queuePostActivationPlayerAction({
      actionType: "resumeTurnBattleAfterPrompt",
      attacker,
      slotId,
      enemyIndex: state.enemyIndex,
      queuedTurn: state.turn,
      queuedPhase: state.phase,
      skipFinalLegionBurst: true,
      suppressArianaZeolitePrompt,
      suppressArianaEldasHolyHealPrompt,
      suppressLunaStarWisdomPrompt,
      lunaStarWisdomApplied,
      suppressGaleFormationPrompt: true,
      suppressReversalFormationPrompt,
      suppressLegionHealPrompt,
    });
    renderAll();
    return;
  }
  if (resolveGaleFormation(attacker, slotId, currentEnemy)) {
    return;
  }
  if (canTriggerReversalFormation(attacker) && !suppressReversalFormationPrompt) {
    addActivationLog("ここから、運命を覆す！", "crit");
    queuePostActivationPlayerAction({
      actionType: "resumeTurnBattleAfterPrompt",
      attacker,
      slotId,
      enemyIndex: state.enemyIndex,
      queuedTurn: state.turn,
      queuedPhase: state.phase,
      skipFinalLegionBurst: true,
      suppressArianaZeolitePrompt,
      suppressArianaEldasHolyHealPrompt,
      suppressLunaStarWisdomPrompt,
      lunaStarWisdomApplied,
      suppressGaleFormationPrompt,
      suppressReversalFormationPrompt: true,
      suppressLegionHealPrompt,
    });
    renderAll();
    return;
  }
  if (resolveReversalFormation(attacker, slotId, currentEnemy)) {
    return;
  }
  if (slotId === "rear") {
    if (isFourthTurnActive() && !suppressLegionHealPrompt) {
      addActivationLog("癒しの光よ、全軍を包め！", "crit");
      queuePostActivationPlayerAction({
        actionType: "resumeTurnBattleAfterPrompt",
        attacker,
        slotId,
        enemyIndex: state.enemyIndex,
        queuedTurn: state.turn,
        queuedPhase: state.phase,
        skipFinalLegionBurst: true,
        suppressArianaZeolitePrompt,
        suppressArianaEldasHolyHealPrompt,
        suppressLunaStarWisdomPrompt,
        lunaStarWisdomApplied,
        suppressGaleFormationPrompt,
        suppressReversalFormationPrompt,
        suppressLegionHealPrompt: true,
      });
      renderAll();
      return;
    }
    applyFourthTurnLegionHeal();
    const arianaEldasHolyHealPromptActive =
      canTriggerArianaEldasHolyHealUnlock(attacker) &&
      normalizeBattleTurn(state.turn) < PLAYER_REAR_HOLY_HEAL_AVAILABLE_TURN;
    if (arianaEldasHolyHealPromptActive && !suppressArianaEldasHolyHealPrompt) {
      addActivationLog("姫様、これが伝説の神聖魔法・・・", "crit");
      queuePostActivationPlayerAction({
        actionType: "resumeTurnBattleAfterPrompt",
        attacker,
        slotId,
        enemyIndex: state.enemyIndex,
        queuedTurn: state.turn,
        queuedPhase: state.phase,
        skipFinalLegionBurst: true,
        suppressArianaZeolitePrompt,
        suppressArianaEldasHolyHealPrompt: true,
        suppressLunaStarWisdomPrompt,
        lunaStarWisdomApplied,
        suppressGaleFormationPrompt,
        suppressReversalFormationPrompt,
        suppressLegionHealPrompt,
      });
      renderAll();
      return;
    }
    state.pendingMagicChoice = {
      mode: "heal",
      attacker,
      slotId,
      enemyIndex: state.enemyIndex,
    };
    renderAll();
    return;
  } else if (slotId === "general") {
    state.pendingMagicChoice = {
      mode: "generalCommand",
      attacker,
      slotId,
      enemyIndex: state.enemyIndex,
    };
    renderAll();
    return;
  } else if (slotId === "strategist") {
    state.pendingMagicChoice = {
      mode: "strategistAttack",
      attacker,
      slotId,
      enemyIndex: state.enemyIndex,
    };
    renderAll();
    return;
  } else {
    const scheduledAttackType = getAttackType(state.turn);
    const preferredAttackType =
      canUseArianaZeoliteSpellbladeAnyTurn(attacker) && canUseSpellblade(attacker)
        ? "spellblade"
        : scheduledAttackType;
    const arianaZeoliteSpellbladeActive =
      preferredAttackType === "spellblade" && canUseArianaZeoliteSpellbladeAnyTurn(attacker);
    if (arianaZeoliteSpellbladeActive && !suppressArianaZeolitePrompt) {
      addActivationLog("ゼオライト、あなたの力を信じて", "crit");
      queuePostActivationPlayerAction({
        actionType: "resumeTurnBattleAfterPrompt",
        attacker,
        slotId,
        enemyIndex: state.enemyIndex,
        queuedTurn: state.turn,
        queuedPhase: state.phase,
        skipFinalLegionBurst: true,
        suppressArianaZeolitePrompt: true,
        suppressArianaEldasHolyHealPrompt,
        suppressLunaStarWisdomPrompt,
        lunaStarWisdomApplied,
        suppressGaleFormationPrompt,
        suppressReversalFormationPrompt,
        suppressLegionHealPrompt,
      });
      renderAll();
      return;
    }
    let actualAttackType = preferredAttackType;
    const berserkerRageTriggered = canTriggerBerserkerRage(attacker, slotId);
    const lifeBurstTriggered = canTriggerLifeBurst(attacker, slotId);

    if (berserkerRageTriggered) {
      actualAttackType = "berserkerRage";
      const attackerAtk = Math.max(0, Math.floor(attacker?.stats?.atk ?? 0));
      const madokasuIzayaAttackRate = getMadokasuIzayaAttackRate(attacker, "berserkerRage");
      const berserkerBonusDamage = Math.max(
        0,
        Math.floor((attackerAtk - PLAYER_BERSERKER_RAGE_ATK_BASE) * PLAYER_BERSERKER_RAGE_ATK_BONUS_RATE)
      );
      const berserkerPreviewDamage = PLAYER_BERSERKER_RAGE_BASE_DAMAGE + berserkerBonusDamage;
      const madokasuIzayaBoostNotice =
        madokasuIzayaAttackRate > 1
          ? ` 防御後ダメージにイザヤ補正 x${formatRateLabel(madokasuIzayaAttackRate)}。`
          : "";
      const berserkerSelfDamageRate = getBerserkerRageSelfDamageRate();
      const izayaGeneralRecoilNotice = hasIzayaOnGeneral()
        ? ` 大将イザヤ補正で反動x${formatRateLabel(PLAYER_BERSERKER_RAGE_IZAYA_GENERAL_RECOIL_RATE)}。`
        : "";
      addPriorityActivationLogs([
        { text: "今宵は戦士の血がたぎるぜ！", kind: "crit" },
        {
          text:
            `${getCurrentTurnLabel()} 狂戦士の攻撃が発動: ${PLAYER_BERSERKER_RAGE_BASE_DAMAGE}(固定) + ` +
            `(ATK ${attackerAtk} - ${PLAYER_BERSERKER_RAGE_ATK_BASE}) x ${PLAYER_BERSERKER_RAGE_ATK_BONUS_RATE}` +
            ` = ${berserkerPreviewDamage}。` +
            `${madokasuIzayaBoostNotice}` +
            ` 反動で味方HP -与ダメージx${formatRateLabel(berserkerSelfDamageRate)}。` +
            `${izayaGeneralRecoilNotice}`,
          kind: "crit",
        },
      ]);

      if (canTriggerLifeBurst(attacker, slotId)) {
        if (queueLifeBurstSequence(attacker, slotId)) {
          renderAll();
          return;
        }
        actualAttackType = "lifeBurst";
      }

      queuePostActivationPlayerAction({
        attacker,
        slotId,
        attackType: actualAttackType,
        enemyIndex: state.enemyIndex,
        queuedTurn: state.turn,
        queuedPhase: state.phase,
      });
      renderAll();
      return;
    } else if (lifeBurstTriggered) {
      if (queueLifeBurstSequence(attacker, slotId)) {
        return;
      }
      actualAttackType = "lifeBurst";
    } else if (preferredAttackType === "magic") {
      if (state.mp >= PLAYER_MP_SPELL_COST) {
        state.pendingMagicChoice = {
          mode: "attack",
          attacker,
          slotId,
          enemyIndex: state.enemyIndex,
        };
        renderAll();
        return;
      } else {
        actualAttackType = "physical";
        addLog(
          `MP不足(${state.mp}/${PLAYER_MP_MAX}): 攻撃魔法にはMP${PLAYER_MP_SPELL_COST}が必要なため通常攻撃に切替。`,
          "warn"
        );
      }
    } else if (preferredAttackType === "spellblade") {
      if (!canUseSpellblade(attacker)) {
        actualAttackType = "physical";
        addLog(
          `神聖魔法剣はソーディアン/マジックナイト/グラディエーター限定のため、${attacker.name}(${attacker.job}) は通常攻撃に切替。`,
          "warn"
        );
      } else if (state.mp >= PLAYER_MP_SPELLBLADE_COST) {
        state.pendingMagicChoice = {
          mode: "spellblade",
          attacker,
          slotId,
          enemyIndex: state.enemyIndex,
        };
        renderAll();
        return;
      } else {
        actualAttackType = "physical";
        addLog(
          `MP不足(${state.mp}/${PLAYER_MP_MAX}): 神聖魔法剣にはMP${PLAYER_MP_SPELLBLADE_COST}が必要なため通常攻撃に切替。`,
          "warn"
        );
      }
    }

    if (resolvePlayerAttackAction(attacker, slotId, currentEnemy, actualAttackType)) {
      return;
    }
  }

  processEnemyCounterAfterPlayerAction(attacker, currentEnemy);
}

function chooseMagicUsage(choice) {
  if (!state.pendingMagicChoice || state.battleEnded) return;

  const pending = state.pendingMagicChoice;
  state.pendingMagicChoice = null;

  const currentEnemy = getCurrentEnemy();
  if (pending.enemyIndex !== state.enemyIndex || !currentEnemy) {
    renderAll();
    return;
  }

  const { attacker, slotId, mode } = pending;
  if (!attacker || !slotId) {
    renderAll();
    return;
  }

  const healChoiceSelected =
    (mode === "heal" && (choice === "right" || choice === "third")) ||
    (mode === "generalCommand" &&
      (choice === "third" || (choice === "fourth" && canUseHolyRearHeal(attacker))));
  const arianaZeoliteHealBoostActive = healChoiceSelected && canTriggerArianaZeoliteHealBoost(attacker);
  if (arianaZeoliteHealBoostActive && !pending.suppressArianaZeoliteHealPrompt) {
    addActivationLog("私があなたを癒す", "crit");
    queuePostActivationPlayerAction({
      actionType: "resumeMagicChoiceAfterPrompt",
      pendingMagicChoice: {
        ...pending,
        suppressArianaZeoliteHealPrompt: true,
      },
      choice,
      enemyIndex: state.enemyIndex,
      queuedTurn: state.turn,
      queuedPhase: state.phase,
    });
    renderAll();
    return;
  }

  if (mode === "strategistAttack") {
    let actualAttackType = "physical";
    const ancientAvailable = canUseAncientMagic(attacker);
    let deferAncientActionUntilLogConfirm = false;
    if (choice === "right") {
      if (tryConsumePlayerMp(PLAYER_MP_SPELL_COST)) {
        if (canUseMagicKnightMagicSword(attacker)) {
          actualAttackType = "magicSword";
          addLog(
            `軍師戦術: ${attacker.name} の魔法剣を選択(MP${PLAYER_MP_SPELL_COST}消費)。` +
              " 物理攻撃+魔法攻撃の合計ダメージ。",
            "good"
          );
        } else {
          actualAttackType = "magic";
          addLog(
            `軍師戦術: 攻撃魔法を選択(MP${PLAYER_MP_SPELL_COST}消費)。魔法威力 x${formatRateLabel(getCurrentMagicAttackRate())} / 防御無視。`,
            "good"
          );
        }
        addLog(`MP残量: ${state.mp}/${PLAYER_MP_MAX}`, "good");
      } else {
        addLog(
          `MP不足(${state.mp}/${PLAYER_MP_MAX}): 攻撃魔法にはMP${PLAYER_MP_SPELL_COST}が必要なため通常攻撃に切替。`,
          "warn"
        );
      }
    } else if (choice === "third") {
      if (!ancientAvailable) {
        addLog(
          `古代魔法はフェーズ内${PLAYER_ANCIENT_MAGIC_AVAILABLE_TURN}ターン目以降かつウィザード/ビショップかつMAG90以上のみ使用可能。通常攻撃に切替。`,
          "warn"
        );
      } else if (tryConsumePlayerMp(PLAYER_MP_ANCIENT_MAGIC_COST)) {
        actualAttackType = "ancientMagic";
        addActivationLog("宇宙に瞬く星々たちよ　我に力を与えたまえ", "crit");
        addActivationLog(
          `軍師戦術: 古代魔法を発動(MP${PLAYER_MP_ANCIENT_MAGIC_COST}消費)。魔法威力 x${formatRateLabel(getCurrentAncientMagicAttackRate())} / 敵DEFで軽減。`,
          "crit"
        );
        deferAncientActionUntilLogConfirm = true;
        addLog(`MP残量: ${state.mp}/${PLAYER_MP_MAX}`, "good");
      } else {
        addLog(
          `MP不足(${state.mp}/${PLAYER_MP_MAX}): 古代魔法にはMP${PLAYER_MP_ANCIENT_MAGIC_COST}が必要なため通常攻撃に切替。`,
          "warn"
        );
      }
    } else {
      addLog("軍師戦術: 物理攻撃を選択。", "good");
    }

    if (deferAncientActionUntilLogConfirm && actualAttackType === "ancientMagic") {
      queuePostActivationPlayerAction({
        attacker,
        slotId,
        attackType: actualAttackType,
        enemyIndex: state.enemyIndex,
      });
      renderAll();
      return;
    }

    if (resolvePlayerAttackAction(attacker, slotId, currentEnemy, actualAttackType)) {
      renderAll();
      return;
    }
    processEnemyCounterAfterPlayerAction(attacker, currentEnemy);
    renderAll();
    return;
  }

  if (mode === "heal") {
    const runRearNormalAttack = () => {
      if (resolvePlayerAttackAction(attacker, slotId, currentEnemy, "physical")) {
        renderAll();
        return;
      }
      processEnemyCounterAfterPlayerAction(attacker, currentEnemy);
      renderAll();
    };

    const runRearMagicAttack = () => {
      let actualAttackType = "physical";
      if (tryConsumePlayerMp(PLAYER_MP_SPELL_COST)) {
        if (canUseMagicKnightMagicSword(attacker)) {
          actualAttackType = "magicSword";
          addActivationLog(
            `${getCurrentTurnLabel()} 後衛行動: 魔法剣を発動(MP${PLAYER_MP_SPELL_COST}消費)。` +
              " 物理攻撃+魔法攻撃の合計ダメージ。",
            "good"
          );
        } else {
          actualAttackType = "magic";
          addActivationLog(
            `${getCurrentTurnLabel()} 後衛行動: 攻撃魔法を発動(MP${PLAYER_MP_SPELL_COST}消費)。` +
              ` 魔法威力 x${formatRateLabel(getCurrentMagicAttackRate())} / 防御無視。`,
            "good"
          );
        }
        addLog(`MP残量: ${state.mp}/${PLAYER_MP_MAX}`, "good");
      } else {
        addLog(
          `MP不足(${state.mp}/${PLAYER_MP_MAX}): 攻撃魔法にはMP${PLAYER_MP_SPELL_COST}が必要なため通常攻撃に切替。`,
          "warn"
        );
      }

      if (resolvePlayerAttackAction(attacker, slotId, currentEnemy, actualAttackType)) {
        renderAll();
        return;
      }
      processEnemyCounterAfterPlayerAction(attacker, currentEnemy);
      renderAll();
    };

    const runRearHealMagic = (healMode = "normal") => {
      const isHolyHeal = healMode === "holy";
      const healLabel = isHolyHeal ? "神聖回復魔法" : "回復魔法";
      const healCost = isHolyHeal ? PLAYER_MP_HOLY_HEAL_COST : PLAYER_MP_SPELL_COST;
      const healEffectRate = isHolyHeal ? PLAYER_REAR_HOLY_HEAL_EFFECT_RATE : 1;

      if (!tryConsumePlayerMp(healCost)) {
        addLog(
          `MP不足(${state.mp}/${PLAYER_MP_MAX}): ${healLabel}にはMP${healCost}が必要なため通常攻撃に切替。`,
          "warn"
        );
        runRearNormalAttack();
        return;
      }

      const healResult = resolveRearHeal(attacker, {
        holy: isHolyHeal,
        apply: !isHolyHeal,
      });
      let healRateText = `${healResult.baseHealRate}`;
      if (healResult.priestBoostApplied) {
        healRateText += ` × ${PLAYER_REAR_HEAL_PRIEST_BOOST_RATE}`;
      }
      if (healResult.thirdTurnMagicBoostApplied) {
        healRateText += ` × ${PLAYER_TURN3_MAGIC_HEAL_BOOST_RATE}`;
      }
      if (healEffectRate > 1) {
        healRateText += ` × ${healEffectRate}`;
      }
      if (healResult.arianaZeoliteBoostApplied) {
        healRateText += ` × ${formatRateLabel(healResult.arianaZeoliteBoostRate)}`;
      }
      const hpAfterHeal = isHolyHeal
        ? Math.min(getPlayerMaxHp(), state.playerHp + healResult.healed)
        : state.playerHp;
      if (isHolyHeal) {
        addActivationLog("聖なる力よ、全軍に癒しを・・・", "crit");
      }
      addActivationLog(
        `${getCurrentTurnLabel()} ${healLabel}(MP${healCost}): ${attacker.name} が SPR ${attacker.stats.spr} × ${healRateText} で` +
          ` ${healResult.healFromRate} + max(0, (SPR - ${PLAYER_REAR_HEAL_SPR_BONUS_BASE}) × ${PLAYER_REAR_HEAL_SPR_BONUS_RATE})` +
          ` × ${healEffectRate} = +${healResult.sprBonus}。合計でHPを${healResult.healed}回復。` +
          `${healResult.arianaZeoliteBoostApplied ? ` （ゼオライト共鳴 x${formatRateLabel(healResult.arianaZeoliteBoostRate)}）` : ""}` +
          ` 味方HP ${hpAfterHeal}/${getPlayerMaxHp()}。`,
        isHolyHeal ? "crit" : "good"
      );
      addLog(`MP残量: ${state.mp}/${PLAYER_MP_MAX}`, "good");
      if (isHolyHeal) {
        queuePostActivationPlayerAction({
          actionType: "holyRearHeal",
          attacker,
          slotId,
          enemyIndex: state.enemyIndex,
        });
        renderAll();
        return;
      }
      showRearHealMagicEffect(attacker, {
        holy: isHolyHeal,
        healed: healResult.healed,
      });
      if (resolveRearArcherSupportAttack(currentEnemy)) {
        renderAll();
        return;
      }
      addLog(`${healLabel}ターンのため、このターンの味方攻撃は発生しません。`, "warn");
      processEnemyCounterAfterPlayerAction(attacker, currentEnemy);
      renderAll();
    };

    if (choice === "left") {
      addLog("後衛行動: 通常攻撃を選択。", "good");
      runRearNormalAttack();
      return;
    }

    if (choice === "right") {
      runRearHealMagic("normal");
      return;
    }

    if (choice === "third") {
      if (!canUseHolyRearHeal(attacker)) {
        addLog(
          `${attacker.name} は神聖回復魔法の条件未達です。` +
            `（フェーズ内${PLAYER_REAR_HOLY_HEAL_AVAILABLE_TURN}ターン目以降 / プリースト / SPR${PLAYER_REAR_HOLY_HEAL_TRIGGER_SPR}以上）通常攻撃に切替。`,
          "warn"
        );
        runRearNormalAttack();
        return;
      }
      runRearHealMagic("holy");
      return;
    }

    if (choice === "fourth") {
      runRearMagicAttack();
      return;
    }

    runRearNormalAttack();
    return;
  }

  if (mode === "generalCommand") {
    const runGeneralPhysicalAttack = () => {
      if (resolvePlayerAttackAction(attacker, slotId, currentEnemy, "physical")) {
        renderAll();
        return;
      }
      processEnemyCounterAfterPlayerAction(attacker, currentEnemy);
      renderAll();
    };

    const runGeneralMagicAttack = () => {
      let actualAttackType = "physical";
      if (tryConsumePlayerMp(PLAYER_MP_SPELL_COST)) {
        if (canUseMagicKnightMagicSword(attacker)) {
          actualAttackType = "magicSword";
          addActivationLog(
            `${getCurrentTurnLabel()} 大将指令: 魔法剣を発動(MP${PLAYER_MP_SPELL_COST}消費)。` +
              " 物理攻撃+魔法攻撃の合計ダメージ。",
            "good"
          );
        } else {
          actualAttackType = "magic";
          addActivationLog(
            `${getCurrentTurnLabel()} 大将指令: 攻撃魔法を発動(MP${PLAYER_MP_SPELL_COST}消費)。` +
              ` 魔法威力 x${formatRateLabel(getCurrentMagicAttackRate())} / 防御無視。`,
            "good"
          );
        }
        addLog(`MP残量: ${state.mp}/${PLAYER_MP_MAX}`, "good");
      } else {
        addLog(
          `MP不足(${state.mp}/${PLAYER_MP_MAX}): 攻撃魔法にはMP${PLAYER_MP_SPELL_COST}が必要なため通常攻撃に切替。`,
          "warn"
        );
      }

      if (resolvePlayerAttackAction(attacker, slotId, currentEnemy, actualAttackType)) {
        renderAll();
        return;
      }
      processEnemyCounterAfterPlayerAction(attacker, currentEnemy);
      renderAll();
    };

    const runGeneralHealMagic = (healMode = "normal") => {
      const isHolyHeal = healMode === "holy";
      const healLabel = isHolyHeal ? "神聖回復魔法" : "回復魔法";
      const healCost = isHolyHeal ? PLAYER_MP_HOLY_HEAL_COST : PLAYER_MP_SPELL_COST;
      const healEffectRate = isHolyHeal ? PLAYER_REAR_HOLY_HEAL_EFFECT_RATE : 1;

      if (!tryConsumePlayerMp(healCost)) {
        addLog(
          `MP不足(${state.mp}/${PLAYER_MP_MAX}): ${healLabel}にはMP${healCost}が必要なため通常攻撃に切替。`,
          "warn"
        );
        runGeneralPhysicalAttack();
        return;
      }

      const healResult = resolveRearHeal(attacker, {
        holy: isHolyHeal,
        apply: !isHolyHeal,
      });
      let healRateText = `${healResult.baseHealRate}`;
      if (healResult.priestBoostApplied) {
        healRateText += ` × ${PLAYER_REAR_HEAL_PRIEST_BOOST_RATE}`;
      }
      if (healResult.thirdTurnMagicBoostApplied) {
        healRateText += ` × ${PLAYER_TURN3_MAGIC_HEAL_BOOST_RATE}`;
      }
      if (healEffectRate > 1) {
        healRateText += ` × ${healEffectRate}`;
      }
      if (healResult.arianaZeoliteBoostApplied) {
        healRateText += ` × ${formatRateLabel(healResult.arianaZeoliteBoostRate)}`;
      }
      const hpAfterHeal = isHolyHeal
        ? Math.min(getPlayerMaxHp(), state.playerHp + healResult.healed)
        : state.playerHp;
      if (isHolyHeal) {
        addActivationLog("聖なる力よ、全軍に癒しを・・・", "crit");
      }
      addActivationLog(
        `${getCurrentTurnLabel()} 大将指令: ${healLabel}(MP${healCost}) ${attacker.name} が` +
          ` SPR ${attacker.stats.spr} × ${healRateText} で` +
          ` ${healResult.healFromRate} + max(0, (SPR - ${PLAYER_REAR_HEAL_SPR_BONUS_BASE}) × ${PLAYER_REAR_HEAL_SPR_BONUS_RATE})` +
          ` × ${healEffectRate} = +${healResult.sprBonus}。合計でHPを${healResult.healed}回復。` +
          `${healResult.arianaZeoliteBoostApplied ? ` （ゼオライト共鳴 x${formatRateLabel(healResult.arianaZeoliteBoostRate)}）` : ""}` +
          ` 味方HP ${hpAfterHeal}/${getPlayerMaxHp()}.`,
        isHolyHeal ? "crit" : "good"
      );
      addLog(`MP残量: ${state.mp}/${PLAYER_MP_MAX}`, "good");
      if (isHolyHeal) {
        queuePostActivationPlayerAction({
          actionType: "holyRearHeal",
          attacker,
          slotId,
          enemyIndex: state.enemyIndex,
        });
        renderAll();
        return;
      }
      showRearHealMagicEffect(attacker, { holy: isHolyHeal, healed: healResult.healed });
      addLog(`${healLabel}ターンのため、このターンの味方攻撃は発生しません。`, "warn");
      processEnemyCounterAfterPlayerAction(attacker, currentEnemy);
      renderAll();
    };

    const runGeneralSpellbladeAttack = () => {
      if (!canUseGeneralCommandSpellblade(attacker)) {
        addLog(
          `神聖魔法剣の条件未達: フェーズ内TURN6、またはアリアナ在席時のゼオライトのみ使用可能。通常攻撃に切替。`,
          "warn"
        );
        runGeneralPhysicalAttack();
        return;
      }

      if (!tryConsumePlayerMp(PLAYER_MP_SPELLBLADE_COST)) {
        addLog(
          `MP不足(${state.mp}/${PLAYER_MP_MAX}): 神聖魔法剣にはMP${PLAYER_MP_SPELLBLADE_COST}が必要なため通常攻撃に切替。`,
          "warn"
        );
        runGeneralPhysicalAttack();
        return;
      }

      addActivationLog("目覚めよ、我がチカラよ！", "crit");
      addActivationLog(
        `${getCurrentTurnLabel()} 大将指令: 神聖魔法剣を発動(MP${PLAYER_MP_SPELLBLADE_COST}消費)。` +
          ` 物理+魔法の合計ダメージ x${PLAYER_SPELLBLADE_DAMAGE_RATE}。`,
        "good"
      );
      addLog(`MP残量: ${state.mp}/${PLAYER_MP_MAX}`, "good");
      queuePostActivationPlayerAction({
        attacker,
        slotId,
        attackType: "spellblade",
        enemyIndex: state.enemyIndex,
      });
      renderAll();
    };

    if (choice === "left") {
      addLog("大将指令: 物理攻撃を選択。", "good");
      runGeneralPhysicalAttack();
      return;
    }
    if (choice === "right") {
      runGeneralMagicAttack();
      return;
    }
    if (choice === "third") {
      runGeneralHealMagic("normal");
      return;
    }
    if (choice === "fourth") {
      if (canUseHolyRearHeal(attacker)) {
        runGeneralHealMagic("holy");
        return;
      }
      runGeneralSpellbladeAttack();
      return;
    }

    runGeneralPhysicalAttack();
    return;
  }

  const useMagic = choice === "left";

  if (mode === "spellblade") {
    let actualAttackType = "physical";
    let deferSpellbladeActionUntilLogConfirm = false;
    if (!canUseSpellblade(attacker)) {
      addLog(`神聖魔法剣はソーディアン/マジックナイト/グラディエーター限定です。${attacker.name} は通常攻撃に切替。`, "warn");
    } else if (useMagic) {
      if (tryConsumePlayerMp(PLAYER_MP_SPELLBLADE_COST)) {
        actualAttackType = "spellblade";
        addActivationLog("目覚めよ、我がチカラよ！", "crit");
        addActivationLog(
          `${getCurrentTurnLabel()} 神聖魔法剣を発動(MP${PLAYER_MP_SPELLBLADE_COST}消費)。` +
            `物理+魔法の合計ダメージ x${PLAYER_SPELLBLADE_DAMAGE_RATE}。`,
          "good"
        );
        deferSpellbladeActionUntilLogConfirm = true;
        addLog(`MP残量: ${state.mp}/${PLAYER_MP_MAX}`, "good");
      } else {
        addLog(
          `MP不足(${state.mp}/${PLAYER_MP_MAX}): 神聖魔法剣にはMP${PLAYER_MP_SPELLBLADE_COST}が必要なため通常攻撃に切替。`,
          "warn"
        );
      }
    } else {
      addLog("神聖魔法剣は使用しません。通常攻撃に切替。", "warn");
    }

    if (deferSpellbladeActionUntilLogConfirm && actualAttackType === "spellblade") {
      queuePostActivationPlayerAction({
        attacker,
        slotId,
        attackType: actualAttackType,
        enemyIndex: state.enemyIndex,
      });
      renderAll();
      return;
    }

    if (resolvePlayerAttackAction(attacker, slotId, currentEnemy, actualAttackType)) {
      renderAll();
      return;
    }

    processEnemyCounterAfterPlayerAction(attacker, currentEnemy);
    renderAll();
    return;
  }

  let actualAttackType = "physical";
  if (useMagic) {
    if (tryConsumePlayerMp(PLAYER_MP_SPELL_COST)) {
      if (canUseMagicKnightMagicSword(attacker)) {
        actualAttackType = "magicSword";
        addActivationLog(
          `${getCurrentTurnLabel()} 魔法剣を発動(MP${PLAYER_MP_SPELL_COST}消費)。` +
            "物理攻撃+魔法攻撃の合計ダメージ。",
          "good"
        );
      } else {
        actualAttackType = "magic";
        addActivationLog(
          `${getCurrentTurnLabel()} 攻撃魔法を発動(MP${PLAYER_MP_SPELL_COST}消費)。魔法威力 x${formatRateLabel(getCurrentMagicAttackRate())} / 防御無視。`,
          "good"
        );
      }
      addLog(`MP残量: ${state.mp}/${PLAYER_MP_MAX}`, "good");
    } else {
      addLog(
        `MP不足(${state.mp}/${PLAYER_MP_MAX}): 攻撃魔法にはMP${PLAYER_MP_SPELL_COST}が必要なため通常攻撃に切替。`,
        "warn"
      );
    }
  } else {
    addLog("攻撃魔法は使用しません。通常攻撃に切替。", "warn");
  }

  if (resolvePlayerAttackAction(attacker, slotId, currentEnemy, actualAttackType)) {
    renderAll();
    return;
  }

  processEnemyCounterAfterPlayerAction(attacker, currentEnemy);
  renderAll();
}

function queuePostActivationPlayerAction(action = null) {
  state.pendingPostActivationPlayerAction = action;
}

function resolvePendingPostActivationPlayerAction() {
  const pendingAction = state.pendingPostActivationPlayerAction;
  if (!pendingAction) return false;
  state.pendingPostActivationPlayerAction = null;

  const actionType = pendingAction.actionType || "";
  const canResolveDuringEnemyTransition =
    actionType === "enemyDefeatDropPhase" || actionType === "enemyDefeatAdvance";
  if ((state.battleEnded || state.enemyTransitioning) && !canResolveDuringEnemyTransition) {
    return false;
  }

  if (pendingAction.actionType === "enemyDefeatDropPhase") {
    const { enemyIndex, isFinalEnemy, defeatedEnemyId, defeatedEnemyName, defeatedEnemyLuk, stagedCards } =
      pendingAction;
    if (enemyIndex !== state.enemyIndex) {
      return false;
    }
    const resolvedStagedCards = Array.isArray(stagedCards) ? stagedCards.filter(Boolean) : [];
    const passwordReward = getEnemyDefeatPasswordReward(defeatedEnemyId);

    if (passwordReward) {
      addActivationLog(
        `撃破報酬: ${passwordReward.rewardLabel}の召喚コード「${passwordReward.summonCode}」を入手。`,
        "crit"
      );
    }

    const dropResult = resolveEnemyTreasureDrop(
      { id: defeatedEnemyId, name: defeatedEnemyName, stats: { luk: defeatedEnemyLuk } },
      resolvedStagedCards
    );

    if (dropResult.triggered) {
      addActivationLog("敵は財宝をドロップした（その資金で軍備補充）", "good");
      addActivationLog(
        `財宝効果: HP +${dropResult.healed} 回復（総回復量 ${dropResult.totalHeal}）。味方HP ${dropResult.playerHpAfter}/${dropResult.playerMaxHp}.`,
        "good"
      );
      queuePostActivationPlayerAction({
        actionType: "enemyDefeatAdvance",
        enemyIndex,
        isFinalEnemy,
        defeatedEnemyName,
        stagedCards: resolvedStagedCards,
      });
      return true;
    }

    finalizeEnemyDefeatBoardState(resolvedStagedCards);
    return proceedEnemyDefeatAfterDrop(defeatedEnemyName, isFinalEnemy, enemyIndex);
  }

  if (pendingAction.actionType === "enemyDefeatAdvance") {
    const { enemyIndex, isFinalEnemy, defeatedEnemyName, stagedCards } = pendingAction;
    if (enemyIndex !== state.enemyIndex) {
      return false;
    }
    finalizeEnemyDefeatBoardState(Array.isArray(stagedCards) ? stagedCards : []);
    return proceedEnemyDefeatAfterDrop(defeatedEnemyName, isFinalEnemy, enemyIndex);
  }

  if (pendingAction.actionType === "resumeMagicChoiceAfterPrompt") {
    const { pendingMagicChoice, choice, enemyIndex, queuedTurn, queuedPhase } = pendingAction;
    if (!pendingMagicChoice || enemyIndex !== state.enemyIndex || isQueuedTurnContextMismatch(queuedTurn, queuedPhase)) {
      return false;
    }
    state.pendingMagicChoice = pendingMagicChoice;
    chooseMagicUsage(choice);
    return true;
  }

  if (pendingAction.actionType === "holyRearHeal") {
    const { attacker, slotId, enemyIndex } = pendingAction;
    const currentEnemy = getCurrentEnemy();
    if (!attacker || slotId !== "rear" || !currentEnemy || enemyIndex !== state.enemyIndex) {
      return false;
    }

    const healResult = resolveRearHeal(attacker, { holy: true, apply: true });
    showRearHealMagicEffect(attacker, {
      holy: true,
      healed: healResult.healed,
    });

    if (resolveRearArcherSupportAttack(currentEnemy)) {
      return true;
    }

    addLog("神聖回復魔法ターンのため、このターンの味方攻撃は発生しません。", "warn");
    processEnemyCounterAfterPlayerAction(attacker, currentEnemy);
    return true;
  }

  if (pendingAction.actionType === "lifeBurstReady") {
    const { attacker, slotId, enemyIndex, queuedTurn, queuedPhase, message } = pendingAction;
    if (!attacker || !slotId || enemyIndex !== state.enemyIndex || isQueuedTurnContextMismatch(queuedTurn, queuedPhase)) {
      return false;
    }

    state.pendingLifeBurstSequence = {
      attacker,
      slotId,
      enemyIndex,
      queuedTurn,
      queuedPhase,
    };
    showLifeBurstCinematicEffect(attacker.name, message || "");
    return true;
  }

  if (pendingAction.actionType === "legionAssault") {
    const { attacker, slotId, enemyIndex, legionAttack: queuedLegionAttack } = pendingAction;
    const currentEnemy = getCurrentEnemy();
    if (!attacker || slotId !== "general" || !currentEnemy || enemyIndex !== state.enemyIndex) {
      return false;
    }

    const legionAttack =
      queuedLegionAttack && typeof queuedLegionAttack.damage === "number"
        ? queuedLegionAttack
        : calculateLegionAttackDamage(attacker, slotId, currentEnemy);
    const nextEnemyHpAfterLegion = Math.max(0, state.enemyHp - legionAttack.damage);
    state.enemyHp = nextEnemyHpAfterLegion;
    playPlayerAttackEffect(attacker, slotId, legionAttack.damage, "legion", false, {
      breakdown: legionAttack.breakdown,
    });

    if (state.enemyHp <= 0) {
      onEnemyDefeated(currentEnemy, {
        finalAttackMessage: `${attacker.name} の一斉攻撃で ${legionAttack.damage} ダメージ`,
      });
      return true;
    }

    if (resolveHolyTwinWingsAttack(attacker, slotId, currentEnemy)) {
      return true;
    }
    if (resolveRearArcherSupportAttack(currentEnemy)) {
      return true;
    }

    processEnemyCounterAfterPlayerAction(attacker, currentEnemy);
    return true;
  }

  if (pendingAction.actionType === "resumeTurnBattleAfterPrompt") {
    const {
      attacker,
      slotId,
      enemyIndex,
      queuedTurn,
      queuedPhase,
      skipFinalLegionBurst,
      suppressArianaZeolitePrompt,
      suppressArianaEldasHolyHealPrompt,
      suppressLunaStarWisdomPrompt,
      lunaStarWisdomApplied,
      suppressGaleFormationPrompt,
      suppressReversalFormationPrompt,
      suppressLegionHealPrompt,
    } = pendingAction;
    if (!attacker || !slotId || enemyIndex !== state.enemyIndex || isQueuedTurnContextMismatch(queuedTurn, queuedPhase)) {
      return false;
    }
    resolveTurnBattle(attacker, slotId, {
      skipFinalLegionBurst: Boolean(skipFinalLegionBurst),
      suppressArianaZeolitePrompt: Boolean(suppressArianaZeolitePrompt),
      suppressArianaEldasHolyHealPrompt: Boolean(suppressArianaEldasHolyHealPrompt),
      suppressLunaStarWisdomPrompt: Boolean(suppressLunaStarWisdomPrompt),
      lunaStarWisdomApplied: Boolean(lunaStarWisdomApplied),
      suppressGaleFormationPrompt: Boolean(suppressGaleFormationPrompt),
      suppressReversalFormationPrompt: Boolean(suppressReversalFormationPrompt),
      suppressLegionHealPrompt: Boolean(suppressLegionHealPrompt),
    });
    return true;
  }

  if (pendingAction.actionType === "continueEnemyActionConfirmation") {
    const { enemyAction, guardChoice, suppressIronWallPrompt } = pendingAction;
    if (!enemyAction) return false;
    return queueEnemyActionConfirmation(enemyAction, guardChoice, {
      suppressIronWallPrompt: Boolean(suppressIronWallPrompt),
    });
  }

  if (pendingAction.actionType === "continueEnemyActionWithGaiusLastStand") {
    const {
      enemyAction,
      guardChoice,
      suppressLogs,
      precomputedDamage,
      precomputedBarrierEffect,
      suppressGaiusLastStandPrompt,
      forceGaiusLastStand,
    } = pendingAction;
    if (!enemyAction) return false;
    const enemyActionResolved = applyEnemyAction(enemyAction, guardChoice, {
      suppressLogs: Boolean(suppressLogs),
      precomputedDamage: precomputedDamage ?? null,
      precomputedBarrierEffect: precomputedBarrierEffect ?? null,
      suppressGaiusLastStandPrompt: Boolean(suppressGaiusLastStandPrompt),
      forceGaiusLastStand: Boolean(forceGaiusLastStand),
    });
    if (enemyActionResolved === false) {
      return true;
    }
    if (state.battleEnded || state.enemyTransitioning) {
      return true;
    }
    endTurnAndPrepareNext();
    return true;
  }

  const {
    attacker,
    slotId,
    attackType,
    enemyIndex,
    queuedTurn,
    queuedPhase,
    suppressPreemptiveQueue,
    suppressMinstrelRelayQueue,
    suppressBerserkerRageEffect,
    suppressNamiIzayaGuardPrompt,
    suppressAurumCeriseSupportPrompt,
    suppressJeffreyCeriseSupportPrompt,
    suppressVolgramArianaWarriorPrompt,
    suppressLancelateArianaFollowUpPrompt,
    suppressLionArianaFollowUpPrompt,
    suppressMadokasuIzayaAttackBoostPrompt,
    suppressZeoliteLastStandPrompt,
  } = pendingAction;
  const currentEnemy = getCurrentEnemy();
  if (!attacker || !slotId || !attackType || !currentEnemy || enemyIndex !== state.enemyIndex) {
    return false;
  }
  if (isQueuedTurnContextMismatch(queuedTurn, queuedPhase)) {
    return false;
  }

  if (
    resolvePlayerAttackAction(attacker, slotId, currentEnemy, attackType, {
      suppressPreemptiveQueue,
      suppressMinstrelRelayQueue,
      suppressBerserkerRageEffect,
      suppressNamiIzayaGuardPrompt,
      suppressAurumCeriseSupportPrompt,
      suppressJeffreyCeriseSupportPrompt,
      suppressVolgramArianaWarriorPrompt,
      suppressLancelateArianaFollowUpPrompt,
      suppressLionArianaFollowUpPrompt,
      suppressMadokasuIzayaAttackBoostPrompt,
      suppressZeoliteLastStandPrompt,
    })
  ) {
    return true;
  }

  processEnemyCounterAfterPlayerAction(attacker, currentEnemy);
  return true;
}

function processEnemyCounterAfterPlayerAction(attacker, currentEnemy) {
  const enemyAction = resolveEnemyCounter(currentEnemy, attacker);
  if (enemyAction) {
    enemyAction.ironWallFormation = getIronWallFormationEffect(attacker);
  }
  if (enemyAction && attacker.stats.spd > currentEnemy.stats.spd) {
    state.pendingEnemyAction = enemyAction;
    state.pendingEnemyActionAwaitingConfirm = true;
    state.pendingEnemyAction.sourceCard = attacker;
    state.pendingEnemyAction.strategistInsight = getStrategistPrediction(enemyAction, currentEnemy);
    addLog(
      `先読み防御: ${attacker.name}(SPD ${attacker.stats.spd}) が` +
        ` ${currentEnemy.name}(SPD ${currentEnemy.stats.spd})より速い。` +
        " 画面クリックで防御選択へ進みます。",
      "warn"
    );
    if (state.pendingEnemyAction.strategistInsight) {
      const predictedLabel =
        state.pendingEnemyAction.strategistInsight.predictedType === "magic" ? "魔法" : "物理";
      addLog(
        `軍師の予測: ${state.pendingEnemyAction.strategistInsight.strategistName} が` +
          ` ${predictedLabel}と予測 (信頼度${state.pendingEnemyAction.strategistInsight.accuracy}%)。` +
          " 画面クリックで防御選択へ進みます。",
        "good"
      );
    }
    return;
  }

  if (queueEnemyActionConfirmation(enemyAction)) return;

  endTurnAndPrepareNext();
}

function resolvePlayerAttackAction(attacker, slotId, currentEnemy, attackType, options = {}) {
  const suppressPreemptiveQueue = Boolean(options.suppressPreemptiveQueue);
  const suppressMinstrelRelayQueue = Boolean(options.suppressMinstrelRelayQueue);
  const suppressBerserkerRageEffect = Boolean(options.suppressBerserkerRageEffect);
  const suppressNamiIzayaGuardPrompt = Boolean(options.suppressNamiIzayaGuardPrompt);
  const suppressAurumCeriseSupportPrompt = Boolean(options.suppressAurumCeriseSupportPrompt);
  const suppressJeffreyCeriseSupportPrompt = Boolean(options.suppressJeffreyCeriseSupportPrompt);
  const suppressVolgramArianaWarriorPrompt = Boolean(options.suppressVolgramArianaWarriorPrompt);
  const suppressLancelateArianaFollowUpPrompt = Boolean(options.suppressLancelateArianaFollowUpPrompt);
  const suppressLionArianaFollowUpPrompt = Boolean(options.suppressLionArianaFollowUpPrompt);
  const suppressMadokasuIzayaAttackBoostPrompt = Boolean(options.suppressMadokasuIzayaAttackBoostPrompt);
  const suppressZeoliteLastStandPrompt = Boolean(options.suppressZeoliteLastStandPrompt);
  const zeoliteLastStandActive = canTriggerZeoliteLastStand(attacker);
  const madokasuIzayaAttackBoostActive = canTriggerIzayaMadokasuAttackBoost(attacker, attackType);
  const lionArianaFollowUpBoostActive = canTriggerArianaLionFollowUpBoost(attacker);
  const lancelateArianaFollowUpBoostActive = canTriggerArianaLancelateFollowUpBoost(attacker);
  const volgramArianaWarriorMoraleBoostActive = canTriggerVolgramArianaWarriorMoraleBoost(attacker, attackType);
  const namiIzayaGuardActive = getNamiIzayaAttackRate(attacker, attackType) > 1;

  if (zeoliteLastStandActive && !suppressZeoliteLastStandPrompt) {
    addActivationLog("全てを・・・、この一撃に賭ける！", "crit");
    showZeoliteLastStandEffect(attacker, slotId);
    queuePostActivationPlayerAction({
      attacker,
      slotId,
      attackType,
      enemyIndex: state.enemyIndex,
      queuedTurn: state.turn,
      queuedPhase: state.phase,
      suppressPreemptiveQueue,
      suppressMinstrelRelayQueue,
      suppressBerserkerRageEffect,
      suppressNamiIzayaGuardPrompt,
      suppressAurumCeriseSupportPrompt,
      suppressJeffreyCeriseSupportPrompt,
      suppressVolgramArianaWarriorPrompt,
      suppressLancelateArianaFollowUpPrompt,
      suppressLionArianaFollowUpPrompt,
      suppressMadokasuIzayaAttackBoostPrompt,
      suppressZeoliteLastStandPrompt: true,
    });
    renderAll();
    return true;
  }

  if (madokasuIzayaAttackBoostActive && !suppressMadokasuIzayaAttackBoostPrompt) {
    addActivationLog("さて、そろそろ本気を出すとするか", "crit");
    queuePostActivationPlayerAction({
      attacker,
      slotId,
      attackType,
      enemyIndex: state.enemyIndex,
      queuedTurn: state.turn,
      queuedPhase: state.phase,
      suppressPreemptiveQueue,
      suppressMinstrelRelayQueue,
      suppressBerserkerRageEffect,
      suppressNamiIzayaGuardPrompt,
      suppressAurumCeriseSupportPrompt,
      suppressJeffreyCeriseSupportPrompt,
      suppressVolgramArianaWarriorPrompt,
      suppressLancelateArianaFollowUpPrompt,
      suppressLionArianaFollowUpPrompt,
      suppressMadokasuIzayaAttackBoostPrompt: true,
      suppressZeoliteLastStandPrompt,
    });
    renderAll();
    return true;
  }

  if (lionArianaFollowUpBoostActive && !suppressLionArianaFollowUpPrompt) {
    addActivationLog("姫様のためなら、オイラだって・・・！", "crit");
    queuePostActivationPlayerAction({
      attacker,
      slotId,
      attackType,
      enemyIndex: state.enemyIndex,
      queuedTurn: state.turn,
      queuedPhase: state.phase,
      suppressPreemptiveQueue,
      suppressMinstrelRelayQueue,
      suppressBerserkerRageEffect,
      suppressNamiIzayaGuardPrompt,
      suppressAurumCeriseSupportPrompt,
      suppressJeffreyCeriseSupportPrompt,
      suppressVolgramArianaWarriorPrompt,
      suppressLancelateArianaFollowUpPrompt,
      suppressLionArianaFollowUpPrompt: true,
      suppressMadokasuIzayaAttackBoostPrompt,
      suppressZeoliteLastStandPrompt,
    });
    renderAll();
    return true;
  }

  if (lancelateArianaFollowUpBoostActive && !suppressLancelateArianaFollowUpPrompt) {
    addActivationLog("姫のためなら、この命惜しくはない", "crit");
    queuePostActivationPlayerAction({
      attacker,
      slotId,
      attackType,
      enemyIndex: state.enemyIndex,
      queuedTurn: state.turn,
      queuedPhase: state.phase,
      suppressPreemptiveQueue,
      suppressMinstrelRelayQueue,
      suppressBerserkerRageEffect,
      suppressNamiIzayaGuardPrompt,
      suppressAurumCeriseSupportPrompt,
      suppressJeffreyCeriseSupportPrompt,
      suppressVolgramArianaWarriorPrompt,
      suppressLancelateArianaFollowUpPrompt: true,
      suppressLionArianaFollowUpPrompt,
      suppressMadokasuIzayaAttackBoostPrompt,
      suppressZeoliteLastStandPrompt,
    });
    renderAll();
    return true;
  }

  if (volgramArianaWarriorMoraleBoostActive && !suppressVolgramArianaWarriorPrompt) {
    addActivationLog("姫様のために、この老いぼれの身を捧げますぞ", "crit");
    queuePostActivationPlayerAction({
      attacker,
      slotId,
      attackType,
      enemyIndex: state.enemyIndex,
      queuedTurn: state.turn,
      queuedPhase: state.phase,
      suppressPreemptiveQueue,
      suppressMinstrelRelayQueue,
      suppressBerserkerRageEffect,
      suppressNamiIzayaGuardPrompt,
      suppressAurumCeriseSupportPrompt,
      suppressJeffreyCeriseSupportPrompt,
      suppressVolgramArianaWarriorPrompt: true,
      suppressLancelateArianaFollowUpPrompt,
      suppressLionArianaFollowUpPrompt,
      suppressMadokasuIzayaAttackBoostPrompt,
      suppressZeoliteLastStandPrompt,
    });
    renderAll();
    return true;
  }

  if (namiIzayaGuardActive && !suppressNamiIzayaGuardPrompt) {
    addActivationLog("ナミは俺が護る・・・！", "crit");
    queuePostActivationPlayerAction({
      attacker,
      slotId,
      attackType,
      enemyIndex: state.enemyIndex,
      queuedTurn: state.turn,
      queuedPhase: state.phase,
      suppressPreemptiveQueue,
      suppressMinstrelRelayQueue,
      suppressBerserkerRageEffect,
      suppressNamiIzayaGuardPrompt: true,
      suppressAurumCeriseSupportPrompt,
      suppressJeffreyCeriseSupportPrompt,
      suppressVolgramArianaWarriorPrompt,
      suppressLancelateArianaFollowUpPrompt,
      suppressLionArianaFollowUpPrompt,
      suppressMadokasuIzayaAttackBoostPrompt,
      suppressZeoliteLastStandPrompt,
    });
    renderAll();
    return true;
  }

  const aurumCeriseSupportActive = canTriggerAurumCeriseSupport(attacker);
  if (aurumCeriseSupportActive && !suppressAurumCeriseSupportPrompt) {
    addActivationLog("アウルム、後は私に任せておいて！", "crit");
    queuePostActivationPlayerAction({
      attacker,
      slotId,
      attackType,
      enemyIndex: state.enemyIndex,
      queuedTurn: state.turn,
      queuedPhase: state.phase,
      suppressPreemptiveQueue,
      suppressMinstrelRelayQueue,
      suppressBerserkerRageEffect,
      suppressNamiIzayaGuardPrompt,
      suppressAurumCeriseSupportPrompt: true,
      suppressJeffreyCeriseSupportPrompt,
      suppressVolgramArianaWarriorPrompt,
      suppressLancelateArianaFollowUpPrompt,
      suppressLionArianaFollowUpPrompt,
      suppressMadokasuIzayaAttackBoostPrompt,
      suppressZeoliteLastStandPrompt,
    });
    renderAll();
    return true;
  }

  const jeffreyCeriseSupportActive = canTriggerJeffreyCeriseSupport(attacker);
  if (jeffreyCeriseSupportActive && !suppressJeffreyCeriseSupportPrompt) {
    addActivationLog("ジェフ爺！心配いらないから、おとなしく見てて！", "crit");
    queuePostActivationPlayerAction({
      attacker,
      slotId,
      attackType,
      enemyIndex: state.enemyIndex,
      queuedTurn: state.turn,
      queuedPhase: state.phase,
      suppressPreemptiveQueue,
      suppressMinstrelRelayQueue,
      suppressBerserkerRageEffect,
      suppressNamiIzayaGuardPrompt,
      suppressAurumCeriseSupportPrompt,
      suppressJeffreyCeriseSupportPrompt: true,
      suppressVolgramArianaWarriorPrompt,
      suppressLancelateArianaFollowUpPrompt,
      suppressLionArianaFollowUpPrompt,
      suppressMadokasuIzayaAttackBoostPrompt,
      suppressZeoliteLastStandPrompt,
    });
    renderAll();
    return true;
  }

  const minstrelSupportSource = getBacklineMinstrelSupportSource();
  const minstrelRelayActive =
    !suppressMinstrelRelayQueue &&
    isMagicRelayAttackType(attackType) &&
    Boolean(minstrelSupportSource) &&
    getBacklineMinstrelMagicSupportRate() > 1;

  if (minstrelRelayActive && minstrelSupportSource) {
    const { card: minstrelCard, slotId: minstrelSlotId } = minstrelSupportSource;
    const queuedTurn = state.turn;
    const queuedPhase = state.phase;
    const queuedEnemyIndex = state.enemyIndex;
    addPriorityActivationLogs([
      { text: "全てのものよ、我が詩を聴け", kind: "crit" },
      {
        text:
          `吟遊詩人スキル: ${SLOT_BY_ID[minstrelSlotId].label}の${minstrelCard.name} が詠唱を支援。` +
          ` 魔法攻撃 x${formatRateLabel(PLAYER_MINSTREL_BACKLINE_MAGIC_RATE)}。`,
        kind: "good",
      },
    ]);
    const effectDelayMs = showMinstrelRelayEffect(minstrelCard, minstrelSlotId, slotId);
    const queueMinstrelRelayAttack = () => {
      if (state.battleEnded || state.enemyTransitioning) return;
      if (state.turn !== queuedTurn || state.phase !== queuedPhase || state.enemyIndex !== queuedEnemyIndex) return;
      queuePostActivationPlayerAction({
        attacker,
        slotId,
        attackType,
        enemyIndex: state.enemyIndex,
        queuedTurn: state.turn,
        queuedPhase: state.phase,
        suppressPreemptiveQueue,
        suppressMinstrelRelayQueue: true,
        suppressBerserkerRageEffect,
        suppressNamiIzayaGuardPrompt,
        suppressAurumCeriseSupportPrompt,
        suppressJeffreyCeriseSupportPrompt,
        suppressVolgramArianaWarriorPrompt,
        suppressLancelateArianaFollowUpPrompt,
        suppressLionArianaFollowUpPrompt,
        suppressMadokasuIzayaAttackBoostPrompt,
        suppressZeoliteLastStandPrompt,
      });
      renderAll();
    };

    if (effectDelayMs > 0) {
      window.setTimeout(queueMinstrelRelayAttack, effectDelayMs);
    } else {
      queueMinstrelRelayAttack();
    }
    return true;
  }

  if (attackType === "berserkerRage" && !suppressBerserkerRageEffect) {
    const queuedTurn = state.turn;
    const queuedPhase = state.phase;
    const queuedEnemyIndex = state.enemyIndex;
    const effectDelayMs = showBerserkerRageEffect(attacker, slotId);
    const runBerserkerAttackAfterEffect = () => {
      if (state.battleEnded || state.enemyTransitioning) return;
      if (state.turn !== queuedTurn || state.phase !== queuedPhase || state.enemyIndex !== queuedEnemyIndex) return;
      queuePostActivationPlayerAction({
        attacker,
        slotId,
        attackType,
        enemyIndex: state.enemyIndex,
        queuedTurn: state.turn,
        queuedPhase: state.phase,
        suppressPreemptiveQueue,
        suppressMinstrelRelayQueue,
        suppressBerserkerRageEffect: true,
        suppressNamiIzayaGuardPrompt,
        suppressAurumCeriseSupportPrompt,
        suppressJeffreyCeriseSupportPrompt,
        suppressVolgramArianaWarriorPrompt,
        suppressLancelateArianaFollowUpPrompt,
        suppressLionArianaFollowUpPrompt,
        suppressMadokasuIzayaAttackBoostPrompt,
        suppressZeoliteLastStandPrompt,
      });
      if (!hasPendingActivationLog()) {
        resolvePendingPostActivationPlayerAction();
      }
      renderAll();
    };

    if (effectDelayMs > 0) {
      window.setTimeout(runBerserkerAttackAfterEffect, effectDelayMs);
    } else {
      runBerserkerAttackAfterEffect();
    }
    return true;
  }

  const lancelatePreemptiveActive = canTriggerLancelatePreemptive(attacker);
  if (lancelatePreemptiveActive && !suppressPreemptiveQueue) {
    const queuedTurn = state.turn;
    const queuedPhase = state.phase;
    const queuedEnemyIndex = state.enemyIndex;
    const effectDelayMs = showLancelatePreemptiveEffect(attacker, slotId);
    const queueLancelatePreemptiveAttack = () => {
      if (state.battleEnded || state.enemyTransitioning) return;
      if (state.turn !== queuedTurn || state.phase !== queuedPhase || state.enemyIndex !== queuedEnemyIndex) return;

      addActivationLog("疾きこと、光の如く", "crit");
      addActivationLog(
        `${getCurrentTurnLabel()} 先制攻撃: ${attacker.name} が1ターン目の加護で2回攻撃確定。` +
          ` SPD判定成功で3回攻撃へ拡張。`,
        "good"
      );
      queuePostActivationPlayerAction({
        attacker,
        slotId,
        attackType,
        enemyIndex: state.enemyIndex,
        queuedTurn: state.turn,
        queuedPhase: state.phase,
        suppressPreemptiveQueue: true,
        suppressMinstrelRelayQueue,
        suppressBerserkerRageEffect,
        suppressNamiIzayaGuardPrompt,
        suppressAurumCeriseSupportPrompt,
        suppressJeffreyCeriseSupportPrompt,
        suppressVolgramArianaWarriorPrompt,
        suppressLancelateArianaFollowUpPrompt,
        suppressLionArianaFollowUpPrompt,
        suppressMadokasuIzayaAttackBoostPrompt,
        suppressZeoliteLastStandPrompt,
      });
      renderAll();
    };

    if (effectDelayMs > 0) {
      window.setTimeout(queueLancelatePreemptiveAttack, effectDelayMs);
    } else {
      queueLancelatePreemptiveAttack();
    }
    return true;
  }

  const gladiatorFollowUpActive = canTriggerGladiatorFollowUp(attacker, currentEnemy);
  const followUpChance = getFirstTurnFollowUpChance(attacker, currentEnemy);
  const randomFollowUpTriggered =
    !gladiatorFollowUpActive && followUpChance > 0 && Math.random() < followUpChance;
  const aurumCeriseBonusFollowUpTriggered =
    aurumCeriseSupportActive && Math.random() < PLAYER_AURUM_CERISE_CHAIN_EXTRA_HIT_RATE;
  const jeffreyCeriseBonusFollowUpTriggered =
    jeffreyCeriseSupportActive && Math.random() < PLAYER_JEFFREY_CERISE_CHAIN_EXTRA_HIT_RATE;
  const lionArianaBonusFollowUpCount = lionArianaFollowUpBoostActive ? 1 : 0;
  const lancelateArianaBonusFollowUpCount = lancelateArianaFollowUpBoostActive ? 1 : 0;
  const guaranteedFollowUpCount =
    (lancelatePreemptiveActive ? 1 : 0) + (gladiatorFollowUpActive ? 1 : 0);
  const randomFollowUpCount = randomFollowUpTriggered ? 1 : 0;
  const aurumCeriseBonusFollowUpCount = aurumCeriseBonusFollowUpTriggered ? 1 : 0;
  const jeffreyCeriseBonusFollowUpCount = jeffreyCeriseBonusFollowUpTriggered ? 1 : 0;
  let totalHits =
    1 +
    guaranteedFollowUpCount +
    randomFollowUpCount +
    lionArianaBonusFollowUpCount +
    lancelateArianaBonusFollowUpCount +
    aurumCeriseBonusFollowUpCount +
    jeffreyCeriseBonusFollowUpCount;
  if (aurumCeriseSupportActive || jeffreyCeriseSupportActive) {
    const ceriseSupportMaxHits =
      aurumCeriseSupportActive && jeffreyCeriseSupportActive
        ? PLAYER_CERISE_DUAL_SUPPORT_CHAIN_MAX_HITS
        : PLAYER_AURUM_CERISE_CHAIN_MAX_HITS;
    totalHits = Math.min(ceriseSupportMaxHits, totalHits);
  }

  const playerAttack = calculateAttackDamageByType(attacker, slotId, attackType, currentEnemy);
  const nextEnemyHp = Math.max(0, state.enemyHp - playerAttack.damage);

  const attackLabel = getAttackLabelByType(attackType);
  const critLabel = playerAttack.critical ? " クリティカル" : "";
  const playerAttackAttributeSuffix = getAttributeLogSuffix(attacker, currentEnemy, true);
  const isBerserkerRageAttack = attackType === "berserkerRage";
  let berserkerRageDamageTotal = 0;
  const applyBerserkerRageSelfDamageIfNeeded = () => {
    if (!isBerserkerRageAttack) return false;
    return applyBerserkerRageSelfDamage(attacker, berserkerRageDamageTotal);
  };
  if (totalHits > 1) {
    addLog(
      `${getCurrentTurnLabel()} ${totalHits}回攻撃 1撃目(${attackLabel}): ${attacker.name} が ${playerAttack.damage} ダメージ。` +
        ` 敵HP ${nextEnemyHp}/${currentEnemy.hp}.${critLabel}${playerAttackAttributeSuffix}`,
      playerAttack.critical ? "crit" : "good"
    );
  } else {
    addLog(
      `${getCurrentTurnLabel()} ${attackLabel}攻撃: ${attacker.name} が ${playerAttack.damage} ダメージ。` +
        ` 敵HP ${nextEnemyHp}/${currentEnemy.hp}.${critLabel}${playerAttackAttributeSuffix}`,
      playerAttack.critical ? "crit" : ""
    );
  }
  if (isBerserkerRageAttack) {
    berserkerRageDamageTotal += Math.max(0, Math.floor(playerAttack.damage));
  }
  state.enemyHp = nextEnemyHp;
  playPlayerAttackEffect(attacker, slotId, playerAttack.damage, attackType, playerAttack.critical, {
    hitLabel: totalHits > 1 ? "1 HIT" : "",
    breakdown: playerAttack.breakdown,
  });

  if (state.enemyHp <= 0) {
    if (applyBerserkerRageSelfDamageIfNeeded()) {
      return true;
    }
    const finishingLabel = totalHits > 1 ? `${totalHits}回攻撃 1撃目(${attackLabel})` : `${attackLabel}攻撃`;
    onEnemyDefeated(currentEnemy, {
      finalAttackMessage: `${attacker.name} の${finishingLabel}で ${playerAttack.damage} ダメージ`,
    });
    return true;
  }

  for (let hitIndex = 2; hitIndex <= totalHits; hitIndex += 1) {
    const followUpAttack = calculateAttackDamageByType(attacker, slotId, attackType, currentEnemy);
    const nextEnemyHpAfterFollowUp = Math.max(0, state.enemyHp - followUpAttack.damage);
    const followUpCritLabel = followUpAttack.critical ? " クリティカル" : "";
    addActivationLog(
      `${hitIndex === 2 ? "追撃発動" : "連撃継続"}: ${totalHits}回攻撃 ${hitIndex}撃目(${attackLabel}) ` +
        `${attacker.name} が ${followUpAttack.damage} ダメージ。` +
        ` 敵HP ${nextEnemyHpAfterFollowUp}/${currentEnemy.hp}.${followUpCritLabel}${playerAttackAttributeSuffix}`,
      followUpAttack.critical ? "crit" : "good"
    );
    if (isBerserkerRageAttack) {
      berserkerRageDamageTotal += Math.max(0, Math.floor(followUpAttack.damage));
    }
    state.enemyHp = nextEnemyHpAfterFollowUp;
    playPlayerAttackEffect(attacker, slotId, followUpAttack.damage, attackType, followUpAttack.critical, {
      delayMs: PLAYER_FOLLOW_UP_EFFECT_DELAY_MS * (hitIndex - 1),
      hitLabel: `${hitIndex} HIT`,
      autoScroll: false,
      breakdown: followUpAttack.breakdown,
    });

    if (state.enemyHp <= 0) {
      if (applyBerserkerRageSelfDamageIfNeeded()) {
        return true;
      }
      onEnemyDefeated(currentEnemy, {
        finalAttackMessage: `${attacker.name} の${totalHits}回攻撃 ${hitIndex}撃目(${attackLabel})で ${followUpAttack.damage} ダメージ`,
      });
      return true;
    }
  }

  if (applyBerserkerRageSelfDamageIfNeeded()) {
    return true;
  }

  if (
    resolveStrategistEnchantAttack(attacker, slotId, currentEnemy, {
      repeatCount: totalHits,
      startDelayMs: PLAYER_FOLLOW_UP_EFFECT_DELAY_MS * Math.max(0, totalHits - 1),
    })
  ) {
    return true;
  }

  if (isCycleTurn(6) && slotId === "general") {
    const legionAttack = calculateLegionAttackDamage(attacker, slotId, currentEnemy);
    const nextEnemyHpAfterLegion = Math.max(0, state.enemyHp - legionAttack.damage);
    const leaderBoostText = legionAttack.leaderBoostApplied
      ? ` + リーダー倍率x${formatRateLabel(legionAttack.leaderBoostRate)}`
      : "";
    addActivationLog("一斉攻撃！我に続け！", "crit");
    addActivationLog(
      `一斉攻撃発動: 物理${legionAttack.physicalDamage} + 魔法${legionAttack.magicDamage} + 士気${legionAttack.moraleBonus}` +
        `${leaderBoostText} = ` +
        `${legionAttack.damage} ダメージ。敵HP ${nextEnemyHpAfterLegion}/${currentEnemy.hp}.`,
      "good"
    );
    queuePostActivationPlayerAction({
      actionType: "legionAssault",
      attacker,
      slotId,
      enemyIndex: state.enemyIndex,
      legionAttack,
    });
    return true;
  }

  if (resolveHolyTwinWingsAttack(attacker, slotId, currentEnemy)) {
    return true;
  }

  if (resolveRearArcherSupportAttack(currentEnemy)) {
    return true;
  }

  if (resolveRearRemoteMagicSupportAttack(currentEnemy)) {
    return true;
  }

  return false;
}

function calculateAttackDamageByType(card, slotId, attackType, enemy) {
  if (attackType === "spellblade") {
    return calculateSpellbladeDamage(card, slotId, enemy);
  }
  if (attackType === "magicSword") {
    return calculateMagicSwordDamage(card, slotId, enemy);
  }
  if (attackType === "lifeBurst") {
    return calculateLifeBurstDamage(card, slotId, enemy);
  }
  if (attackType === "berserkerRage") {
    return calculateBerserkerRageDamage(card, enemy);
  }
  if (attackType === "ancientMagic") {
    return calculatePlayerDamage(card, slotId, "ancientMagic", enemy, {
      magicBoostRate: getCurrentAncientMagicAttackRate(),
    });
  }
  if (attackType === "magic") {
    return calculatePlayerDamage(card, slotId, "magic", enemy, {
      magicBoostRate: getCurrentMagicAttackRate(),
    });
  }

  return calculatePlayerDamage(card, slotId, attackType, enemy);
}

function getAttackLabelByType(type) {
  if (type === "legion") return "一斉攻撃";
  if (type === "spellblade") return "神聖魔法剣";
  if (type === "magicSword") return "魔法剣";
  if (type === "lifeBurst") return "ライフバースト";
  if (type === "berserkerRage") return "狂戦士";
  if (type === "ancientMagic") return "古代魔法";
  return type === "magic" ? "魔法" : "物理";
}

function isMagicRelayAttackType(attackType) {
  return attackType === "magic" || attackType === "ancientMagic" || attackType === "magicSword" || attackType === "spellblade";
}

function canTriggerGaleFormation(card) {
  return Boolean(
    card &&
      card.stats &&
      isCycleTurn(5) &&
      card.stats.spd >= PLAYER_GALE_FORMATION_TRIGGER_SPD
  );
}

function resolveGaleFormation(attacker, slotId, currentEnemy) {
  if (!canTriggerGaleFormation(attacker)) return false;
  if (!currentEnemy || state.enemyHp <= 0) return false;

  const legionSpdTotal = Math.max(0, Math.floor(getPlayerTotalStats().spd));
  const formationDamage = Math.max(1, legionSpdTotal + PLAYER_GALE_FORMATION_BASE_DAMAGE);

  const nextEnemyHp = Math.max(0, state.enemyHp - formationDamage);
  addActivationLog(
    `${getCurrentTurnLabel()} 疾風の陣発動: ${attacker.name}(SPD ${attacker.stats.spd}) が` +
      ` 軍団合計SPD ${legionSpdTotal} + 固定${PLAYER_GALE_FORMATION_BASE_DAMAGE} = ${formationDamage} ダメージ。` +
      `敵HP ${nextEnemyHp}/${currentEnemy.hp}.`,
    "crit"
  );
  state.enemyHp = nextEnemyHp;
  playPlayerAttackEffect(attacker, slotId, formationDamage, "gale", false, {
    hitLabel: "GALE",
    breakdown: {
      type: "gale",
      totalSpd: legionSpdTotal,
      baseBonus: PLAYER_GALE_FORMATION_BASE_DAMAGE,
      finalDamage: formationDamage,
    },
  });

  if (state.enemyHp <= 0) {
    onEnemyDefeated(currentEnemy, {
      finalAttackMessage: `疾風の陣(${attacker.name})で ${formationDamage} ダメージ`,
    });
    return true;
  }

  return false;
}

function canTriggerReversalFormation(card) {
  return Boolean(card && isCycleTurn(6) && hasJobTag(card, "トリックスター"));
}

function resolveReversalFormation(attacker, slotId, currentEnemy) {
  if (!canTriggerReversalFormation(attacker)) return false;
  if (!currentEnemy || state.enemyHp <= 0) return false;

  const legionLukTotal = Math.max(0, Math.floor(getPlayerTotalStats().luk));
  const formationDamage = Math.max(1, legionLukTotal + PLAYER_REVERSAL_FORMATION_BASE_DAMAGE);

  const nextEnemyHp = Math.max(0, state.enemyHp - formationDamage);
  addActivationLog(
    `${getCurrentTurnLabel()} 逆転の陣発動: ${attacker.name}(LUK ${attacker.stats.luk}) が` +
      ` 軍団合計LUK ${legionLukTotal} + 固定${PLAYER_REVERSAL_FORMATION_BASE_DAMAGE}` +
      ` = ${formationDamage} ダメージ。敵HP ${nextEnemyHp}/${currentEnemy.hp}.`,
    "crit"
  );
  state.enemyHp = nextEnemyHp;
  playPlayerAttackEffect(attacker, slotId, formationDamage, "reversal", false, {
    hitLabel: "REVERSAL",
    breakdown: {
      type: "reversal",
      totalLuk: legionLukTotal,
      baseBonus: PLAYER_REVERSAL_FORMATION_BASE_DAMAGE,
      finalDamage: formationDamage,
    },
  });

  if (state.enemyHp <= 0) {
    onEnemyDefeated(currentEnemy, {
      finalAttackMessage: `逆転の陣(${attacker.name})で ${formationDamage} ダメージ`,
    });
    return true;
  }

  return false;
}

function getStrategistEnchantEffect(attacker) {
  if (!attacker || !canUseStrategistEnchant(attacker)) return null;

  const strategistCard = state.board.strategist;
  if (!strategistCard || !strategistCard.stats) return null;
  if (
    typeof state.strategistPlacedTurnIndex !== "number" ||
    getBattleTurnIndex() <= state.strategistPlacedTurnIndex
  ) {
    return null;
  }

  const magExcess = Math.max(0, strategistCard.stats.mag - PLAYER_STRATEGIST_ENCHANT_MAG_BASE);
  const baseDamage = Math.max(0, Math.floor(magExcess * PLAYER_STRATEGIST_ENCHANT_DAMAGE_RATE));
  const minstrelRate = Math.max(1, getBacklineMinstrelMagicSupportRate());
  const afterMinstrelDamage = Math.max(0, Math.floor(baseDamage * minstrelRate));
  const magicKnightRate = hasJobTag(attacker, "マジックナイト")
    ? PLAYER_STRATEGIST_ENCHANT_MAGIC_KNIGHT_RATE
    : 1;
  const damage = Math.max(0, Math.floor(afterMinstrelDamage * magicKnightRate));
  return {
    strategistName: strategistCard.name,
    strategistMag: strategistCard.stats.mag,
    magExcess,
    baseDamage,
    minstrelRate,
    afterMinstrelDamage,
    magicKnightRate,
    damage,
  };
}

function resolveStrategistEnchantAttack(attacker, slotId, currentEnemy, options = {}) {
  if (!attacker || !slotId || !currentEnemy || state.enemyHp <= 0) return false;

  const repeatCount = Math.max(1, Math.floor(options.repeatCount ?? 1));
  const startDelayMs = Math.max(0, Math.floor(options.startDelayMs ?? 0));
  const enchantEffect = getStrategistEnchantEffect(attacker);
  if (!enchantEffect || enchantEffect.damage <= 0) return false;
  const enchantDamageCut = applyEnemyPlayerAttackCut(enchantEffect.damage, currentEnemy, "magic");
  const enchantDamage = enchantDamageCut.damage;
  const strategistCard = state.board.strategist;
  const enchantLinkDelayMs = showStrategistEnchantLinkEffect(strategistCard, attacker, slotId, {
    startDelayMs,
  });
  let enchantAttackDelayMs = enchantLinkDelayMs > 0 ? enchantLinkDelayMs + 220 : 0;

  for (let enchantHitIndex = 1; enchantHitIndex <= repeatCount; enchantHitIndex += 1) {
    const nextEnemyHp = Math.max(0, state.enemyHp - enchantDamage);
    const hitLabelText =
      repeatCount > 1 ? `軍師エンチャント ${enchantHitIndex}撃目` : "軍師エンチャント発動";
    const enchantCutText = enchantDamageCut.cutApplied
      ? ` (${enchantDamageCut.cutSourceName}の魔法攻撃半減 x${formatRateLabel(enchantDamageCut.cutRate)})`
      : "";
    addActivationLog(
      `${hitLabelText}: ${enchantEffect.strategistName}(MAG ${enchantEffect.strategistMag}) の魔装が` +
        ` ${attacker.name} の武器に付与。` +
        ` max(0, MAG-${PLAYER_STRATEGIST_ENCHANT_MAG_BASE}) x ${PLAYER_STRATEGIST_ENCHANT_DAMAGE_RATE}` +
        `${enchantEffect.minstrelRate > 1 ? ` x ${formatRateLabel(enchantEffect.minstrelRate)}(吟遊詩人支援)` : ""}` +
        `${enchantEffect.magicKnightRate > 1 ? ` x ${formatRateLabel(enchantEffect.magicKnightRate)}` : ""}` +
        ` = ${enchantDamage} 追加ダメージ${enchantCutText}。敵HP ${nextEnemyHp}/${currentEnemy.hp}.`,
      enchantEffect.magicKnightRate > 1 ? "crit" : "good"
    );
    state.enemyHp = nextEnemyHp;
    playPlayerAttackEffect(attacker, slotId, enchantDamage, "enchant", false, {
      delayMs: enchantAttackDelayMs,
      hitLabel: repeatCount > 1 ? `ENCHANT ${enchantHitIndex}` : "ENCHANT",
      autoScroll: false,
      breakdown: {
        type: "enchant",
        strategistMag: enchantEffect.strategistMag,
        magExcess: enchantEffect.magExcess,
        enchantRate: PLAYER_STRATEGIST_ENCHANT_DAMAGE_RATE,
        minstrelRate: enchantEffect.minstrelRate,
        afterMinstrelDamage: enchantEffect.afterMinstrelDamage,
        magicKnightRate: enchantEffect.magicKnightRate,
        afterMagicKnightDamage: enchantEffect.damage,
        enemyDamageCutRate: enchantDamageCut.cutRate,
        enemyDamageCutApplied: enchantDamageCut.cutApplied,
        enemyDamageCutSourceName: enchantDamageCut.cutSourceName,
        afterEnemyDamageCut: enchantDamage,
        finalDamage: enchantDamage,
      },
    });

    if (state.enemyHp <= 0) {
      onEnemyDefeated(currentEnemy, {
        finalAttackMessage: `${attacker.name} の${hitLabelText}で ${enchantDamage} ダメージ`,
      });
      return true;
    }

    enchantAttackDelayMs += PLAYER_FOLLOW_UP_EFFECT_DELAY_MS;
  }

  return false;
}

function canTriggerIronWallFormation(card) {
  return Boolean(card && isCycleTurn(5) && hasJobTag(card, "ガーディアン"));
}

function getFrontGuardianPhysicalGuardEffect() {
  const frontCard = state.board.front;
  if (!frontCard || !hasJobTag(frontCard, "ガーディアン")) return null;
  return {
    sourceName: frontCard.name,
    damageRate: PLAYER_FRONT_GUARDIAN_PHYSICAL_DAMAGE_RATE,
  };
}

function getIronWallFormationEffect(attacker) {
  if (!canTriggerIronWallFormation(attacker)) return null;

  const legionDefTotal = Math.max(0, Math.floor(getPlayerTotalStats().def));
  if (legionDefTotal <= 0) return null;

  return {
    sourceName: attacker.name,
    totalDef: legionDefTotal,
    flashClass: "iron-wall-guard-flash",
  };
}

function applyFourthTurnLegionHeal() {
  if (!isFourthTurnActive()) return;

  const legionSprTotal = Math.max(0, Math.floor(getPlayerTotalStats().spr));
  const healAmount = legionSprTotal + PLAYER_TURN4_LEGION_HEAL_BASE;

  const beforeHp = state.playerHp;
  state.playerHp = Math.min(getPlayerMaxHp(), state.playerHp + healAmount);
  const healed = state.playerHp - beforeHp;
  addActivationLog(
    `${getCurrentTurnLabel()} 軍団回復: 合計SPR ${legionSprTotal} + 固定${PLAYER_TURN4_LEGION_HEAL_BASE}` +
      ` = ${healAmount} でHPを${healed}回復。` +
      ` 味方HP ${state.playerHp}/${getPlayerMaxHp()}.`,
    "good"
  );
}

function isPriestLike(jobOrCard) {
  return hasAnyJobTag(jobOrCard, ["プリースト", "ビショップ"]);
}

function isWizardLike(jobOrCard) {
  return hasAnyJobTag(jobOrCard, ["ウィザード", "ビショップ"]);
}

function isTrickster(card) {
  return Boolean(card && card.job === "トリックスター");
}

function isTricksterAllJobsActive(card) {
  if (!isTrickster(card)) return false;

  const cardId = card.id ?? card.name;
  if (!cardId) return Math.random() < PLAYER_TRICKSTER_ALL_JOB_RATE;

  const turnIndex = getBattleTurnIndex();
  const status = state.tricksterJobMimicByCardId[cardId];
  if (status && status.turnIndex === turnIndex) return status.active;

  const active = Math.random() < PLAYER_TRICKSTER_ALL_JOB_RATE;
  state.tricksterJobMimicByCardId[cardId] = { turnIndex, active };
  return active;
}

function parseJobTags(jobValue) {
  if (typeof jobValue !== "string") return [];
  const normalized = jobValue.trim();
  if (!normalized) return [];
  if (!/[\/／,、|]/.test(normalized)) return [normalized];
  return normalized
    .split(/[\/／,、|]/)
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function hasNativeJobTag(jobOrCard, jobName) {
  if (!jobOrCard || typeof jobName !== "string") return false;
  if (typeof jobOrCard === "string") {
    if (jobOrCard === jobName) return true;
    return parseJobTags(jobOrCard).includes(jobName);
  }
  if (jobOrCard.job === jobName) return true;
  return parseJobTags(jobOrCard.job).includes(jobName);
}

function hasAnyNativeJobTag(jobOrCard, jobNames) {
  return jobNames.some((jobName) => hasNativeJobTag(jobOrCard, jobName));
}

function getCardCharacterId(card) {
  if (!card) return "";
  if (typeof card.characterId === "string" && card.characterId.trim()) {
    return card.characterId.trim();
  }
  if (typeof card.id === "string" && card.id.trim()) {
    return card.id.trim();
  }
  return "";
}

function isCharacterCard(card, characterId) {
  if (!card || typeof characterId !== "string" || !characterId.trim()) return false;
  return getCardCharacterId(card) === characterId.trim();
}

function hasCharacterOnBoard(characterId) {
  if (typeof characterId !== "string" || !characterId.trim()) return false;
  return Object.values(state.board).some((card) => isCharacterCard(card, characterId));
}

function canTriggerAurumCeriseSupport(attacker) {
  return Boolean(
    attacker &&
      isCharacterCard(attacker, PLAYER_CERISE_CHARACTER_ID) &&
      hasCharacterOnBoard(PLAYER_AURUM_CHARACTER_ID)
  );
}

function canTriggerJeffreyCeriseSupport(attacker) {
  return Boolean(
    attacker &&
      isCharacterCard(attacker, PLAYER_CERISE_CHARACTER_ID) &&
      hasCharacterOnBoard(PLAYER_JEFFREY_CHARACTER_ID)
  );
}

function canUseArianaZeoliteSpellbladeAnyTurn(card) {
  return Boolean(
    card &&
      isCharacterCard(card, PLAYER_ZEOLITE_CHARACTER_ID) &&
      hasCharacterOnBoard(PLAYER_ARIANA_CHARACTER_ID)
  );
}

function canTriggerArianaZeoliteHealBoost(card) {
  return Boolean(
    card &&
      isCharacterCard(card, PLAYER_ARIANA_CHARACTER_ID) &&
      hasCharacterOnBoard(PLAYER_ZEOLITE_CHARACTER_ID)
  );
}

function canTriggerArianaEldasHolyHealUnlock(card) {
  return Boolean(
    card &&
      isCharacterCard(card, PLAYER_ARIANA_CHARACTER_ID) &&
      hasCharacterOnBoard(PLAYER_ELDAS_CHARACTER_ID)
  );
}

function canTriggerVolgramArianaWarriorMoraleBoost(card, attackType = "physical") {
  return Boolean(
    attackType === "physical" &&
      card &&
      hasJobTag(card, "ウォーリア") &&
      isCharacterCard(card, PLAYER_VOLGRAM_CHARACTER_ID) &&
      hasCharacterOnBoard(PLAYER_ARIANA_CHARACTER_ID)
  );
}

function canTriggerArianaLancelateFollowUpBoost(card) {
  return Boolean(
    card &&
      isCharacterCard(card, PLAYER_LANCELATE_PREEMPTIVE_CARD_ID) &&
      hasCharacterOnBoard(PLAYER_ARIANA_CHARACTER_ID)
  );
}

function canTriggerArianaLionFollowUpBoost(card) {
  return Boolean(
    card &&
      isCharacterCard(card, PLAYER_LION_CHARACTER_ID) &&
      hasCharacterOnBoard(PLAYER_ARIANA_CHARACTER_ID)
  );
}

function canTriggerArianaLionRearArcherBoost(card) {
  return canTriggerArianaLionFollowUpBoost(card);
}

function canTriggerLunaStarWisdomRecovery(card, slotId) {
  return Boolean(
    card &&
      (slotId === "rear" || slotId === "strategist") &&
      isCharacterCard(card, PLAYER_LUNA_CHARACTER_ID)
  );
}

function getNamiIzayaAttackRate(card, attackType = "physical") {
  const isPhysicalLikeAttack = attackType === "physical" || attackType === "berserkerRage";
  if (!isPhysicalLikeAttack) return 1;
  if (!isCharacterCard(card, PLAYER_IZAYA_CHARACTER_ID)) return 1;
  if (!hasCharacterOnBoard(PLAYER_NAMI_CHARACTER_ID)) return 1;
  return PLAYER_NAMI_IZAYA_ATTACK_RATE;
}

function canTriggerIzayaMadokasuAttackBoost(card, attackType = "physical") {
  const isPhysicalLikeAttack = attackType === "physical" || attackType === "berserkerRage";
  return Boolean(
    isPhysicalLikeAttack &&
      card &&
      isCharacterCard(card, PLAYER_MADOKASU_CHARACTER_ID) &&
      hasCharacterOnBoard(PLAYER_IZAYA_CHARACTER_ID)
  );
}

function getMadokasuIzayaAttackRate(card, attackType = "physical") {
  if (!canTriggerIzayaMadokasuAttackBoost(card, attackType)) return 1;
  return PLAYER_MADOKASU_IZAYA_ATTACK_RATE;
}

function hasIzayaOnGeneral() {
  return isCharacterCard(state.board.general, PLAYER_IZAYA_CHARACTER_ID);
}

function getBerserkerRageSelfDamageRate() {
  const baseRate = PLAYER_BERSERKER_RAGE_SELF_DAMAGE_RATE;
  if (!hasIzayaOnGeneral()) return baseRate;
  return baseRate * PLAYER_BERSERKER_RAGE_IZAYA_GENERAL_RECOIL_RATE;
}

function canTriggerZeoliteLastStand(card) {
  return Boolean(
    card &&
      isCharacterCard(card, PLAYER_ZEOLITE_CHARACTER_ID) &&
      Math.floor(state.playerHp) === 1
  );
}

function getZeoliteLastStandAttackRate(card) {
  if (!canTriggerZeoliteLastStand(card)) return 1;
  return PLAYER_ZEOLITE_LAST_STAND_RATE;
}

function isKnownJobTag(jobName) {
  if (typeof jobName !== "string") return false;
  const normalized = jobName.trim();
  if (!normalized) return false;
  return KNOWN_JOB_TAGS.has(normalized);
}

function hasJobTag(jobOrCard, jobName) {
  if (!jobOrCard) return false;
  if (typeof jobOrCard === "string") {
    if (jobOrCard === jobName) return true;
    return parseJobTags(jobOrCard).includes(jobName);
  }
  if (jobOrCard.job === jobName) return true;
  if (parseJobTags(jobOrCard.job).includes(jobName)) return true;
  if (!isKnownJobTag(jobName)) return false;
  return isTricksterAllJobsActive(jobOrCard);
}

function hasAnyJobTag(jobOrCard, jobNames) {
  return jobNames.some((jobName) => hasJobTag(jobOrCard, jobName));
}

function resolveTricksterAllJobEffectsForTurn() {
  const tricksters = Object.values(state.board).filter((card) => isTrickster(card));
  if (tricksters.length === 0) return;

  tricksters.forEach((card) => {
    const active = isTricksterAllJobsActive(card);
    if (!active) return;
    addActivationLog(
      `${getCurrentTurnLabel()} 奇策発動(${Math.round(PLAYER_TRICKSTER_ALL_JOB_RATE * 100)}%): ` +
        `${card.name}(トリックスター) が全職業に変化。`,
      "good"
    );
  });
}

function isFourthTurnActive() {
  return isCycleTurn(4);
}

function isFourthTurnRangedJob(card) {
  return Boolean(
    card &&
      isFourthTurnActive() &&
      hasAnyJobTag(card, ["アーチャー", "ウィッパー"])
  );
}

function getFourthTurnMeleeJobPhysicalBoostRate(card, attackType) {
  const isPhysicalLike = attackType === "physical" || attackType === "berserkerRage";
  if (!isPhysicalLike) return 1;
  if (!card || !isFourthTurnActive() || !hasAnyJobTag(card, ["ソーディアン", "ランサー"])) return 1;
  return PLAYER_TURN4_MELEE_JOB_ATTACK_BOOST_RATE;
}

function addFourthTurnJobEffectLog(card) {
  if (!card || !isFourthTurnActive()) return;
  if (isFourthTurnRangedJob(card)) {
    addActivationLog(
      `${getCurrentTurnLabel()} 遠隔攻撃: ${card.name}(${card.job}) の行動で敵反撃ダメージを30%カット。`,
      "good"
    );
    return;
  }
  if (hasAnyJobTag(card, ["ソーディアン", "ランサー"])) {
    addActivationLog(
      `${getCurrentTurnLabel()} 近接強襲: ${card.name}(${card.job}) の物理攻撃 x${PLAYER_TURN4_MELEE_JOB_ATTACK_BOOST_RATE}。`,
      "good"
    );
  }
}

function canUseAncientMagic(card) {
  return Boolean(
    card &&
      normalizeBattleTurn(state.turn) >= PLAYER_ANCIENT_MAGIC_AVAILABLE_TURN &&
      hasAnyNativeJobTag(card, ["ウィザード", "ビショップ"]) &&
      card.stats &&
      card.stats.mag >= 90
  );
}

function canUseMagicKnightMagicSword(card) {
  return Boolean(card && hasJobTag(card, "マジックナイト"));
}

function canUseSpellblade(card) {
  return Boolean(card && hasAnyNativeJobTag(card, ["ソーディアン", "マジックナイト", "グラディエーター"]));
}

function canUseGeneralCommandSpellblade(card) {
  return Boolean(card && canUseSpellblade(card) && (isCycleTurn(6) || canUseArianaZeoliteSpellbladeAnyTurn(card)));
}

function canUseHolyRearHeal(card) {
  const turnConditionMet = normalizeBattleTurn(state.turn) >= PLAYER_REAR_HOLY_HEAL_AVAILABLE_TURN;
  const specialUnlockMet = canTriggerArianaEldasHolyHealUnlock(card);
  return Boolean(
    card &&
      (turnConditionMet || specialUnlockMet) &&
      card.stats &&
      hasNativeJobTag(card, "プリースト") &&
      card.stats.spr >= PLAYER_REAR_HOLY_HEAL_TRIGGER_SPR
  );
}

function hasNativeWizardOnBoard() {
  return Object.values(state.board).some((boardCard) => boardCard && hasNativeJobTag(boardCard, "ウィザード"));
}

function canTriggerLionWizardEnchantSupport(card) {
  return Boolean(
    card &&
      isCharacterCard(card, PLAYER_LION_CHARACTER_ID) &&
      hasNativeWizardOnBoard()
  );
}

function canUseStrategistEnchant(card) {
  return Boolean(
    card &&
      (hasAnyJobTag(card, ["ソーディアン", "グラディエーター", "ランサー", "マジックナイト"]) ||
        canTriggerAurumCeriseSupport(card) ||
        canTriggerLionWizardEnchantSupport(card))
  );
}

function canTriggerLancelatePreemptive(card) {
  return Boolean(
    card &&
      card.id === PLAYER_LANCELATE_PREEMPTIVE_CARD_ID &&
      isCycleTurn(1)
  );
}

function canTriggerLancelateEvasion(enemyAction, enemy) {
  return Boolean(
    enemyAction &&
      enemy &&
      enemy.stats &&
      isCycleTurn(1) &&
      enemyAction.targetCard &&
      enemyAction.targetCard.id === PLAYER_LANCELATE_PREEMPTIVE_CARD_ID &&
      enemyAction.targetCard.stats &&
      enemyAction.targetCard.stats.spd > enemy.stats.spd
  );
}

function canTriggerGladiatorFollowUp(card, enemy) {
  return Boolean(
    card &&
      enemy &&
      card.stats &&
      enemy.stats &&
      hasJobTag(card, "グラディエーター") &&
      card.stats.atk > enemy.stats.atk
  );
}

function canTriggerLifeBurst(card, slotId) {
  const lifeBurstHpThreshold = Math.floor(getPlayerMaxHp() / PLAYER_LIFE_BURST_TRIGGER_HP_DIVISOR);
  return Boolean(
    card &&
      card.stats &&
      (slotId === "front" || slotId === "leftWing" || slotId === "rightWing") &&
      hasNativeJobTag(card, "ベルセルク") &&
      card.stats.atk >= PLAYER_LIFE_BURST_TRIGGER_ATK &&
      state.playerHp <= lifeBurstHpThreshold
  );
}

function getLifeBurstBonus() {
  const missingHp = Math.max(0, getPlayerMaxHp() - state.playerHp);
  return Math.max(0, Math.floor(missingHp / PLAYER_LIFE_BURST_MISSING_HP_DIVISOR));
}

function clearLifeBurstCinematicEffect() {
  if (!lifeBurstCinematicLayerEl) return;
  lifeBurstCinematicLayerEl.remove();
  lifeBurstCinematicLayerEl = null;
}

function showLifeBurstCinematicEffect(attackerName, message) {
  clearLifeBurstCinematicEffect();

  const layer = document.createElement("div");
  layer.className = "battle-fx-layer";
  layer.style.zIndex = "24";

  const cinematic = document.createElement("div");
  cinematic.className = "attack-fx-life-burst-cinematic";
  cinematic.innerHTML = `
    <div class="attack-fx-life-burst-backdrop" aria-hidden="true"></div>
    <div class="attack-fx-life-burst-aura primary" aria-hidden="true"></div>
    <div class="attack-fx-life-burst-aura secondary" aria-hidden="true"></div>
    <div class="attack-fx-life-burst-embers" aria-hidden="true"></div>
    <div class="attack-fx-life-burst-copy">
      <p class="attack-fx-life-burst-title">LIFE BURST</p>
      <p class="attack-fx-life-burst-line">${message}</p>
      <p class="attack-fx-life-burst-subline">${attackerName} の魂が、紅蓮の一閃へと昇華する。</p>
      <p class="attack-fx-life-burst-hint">画面クリックで解放</p>
    </div>
  `;

  layer.appendChild(cinematic);
  document.body.appendChild(layer);
  lifeBurstCinematicLayerEl = layer;
}

function queueLifeBurstSequence(attacker, slotId) {
  if (!attacker) return false;

  const playerMaxHp = getPlayerMaxHp();
  const missingHp = Math.max(0, playerMaxHp - state.playerHp);
  const lifeBurstBonus = getLifeBurstBonus();
  const message = "「この命よ、今、燃え上がれ。守るべき未来のために、魂を剣へ。」";
  addActivationLog("この命よ、今、燃え上がれ！", "crit");
  addActivationLog(
    `${getCurrentTurnLabel()} ライフバースト待機: ${attacker.name} が命の焔を収束。` +
      ` 欠損HP ${missingHp} / ${PLAYER_LIFE_BURST_MISSING_HP_DIVISOR} = +${lifeBurstBonus}。` +
      ` 画面クリックで大技を解放。`,
    "crit"
  );
  queuePostActivationPlayerAction({
    actionType: "lifeBurstReady",
    attacker,
    slotId,
    enemyIndex: state.enemyIndex,
    queuedTurn: state.turn,
    queuedPhase: state.phase,
    message,
  });
  return true;
}

function resolvePendingLifeBurstSequence() {
  if (!state.pendingLifeBurstSequence) return false;

  const pending = state.pendingLifeBurstSequence;
  state.pendingLifeBurstSequence = null;
  clearLifeBurstCinematicEffect();

  if (state.battleEnded || state.enemyTransitioning) {
    renderAll();
    return true;
  }

  const currentEnemy = getCurrentEnemy();
  if (!currentEnemy || pending.enemyIndex !== state.enemyIndex) {
    renderAll();
    return true;
  }

  const { attacker, slotId } = pending;
  if (!attacker || !slotId) {
    renderAll();
    return true;
  }

  addLog(`${getCurrentTurnLabel()} ライフバースト解放: ${attacker.name} が命を焔に変え、一撃を放つ。`, "crit");

  if (resolvePlayerAttackAction(attacker, slotId, currentEnemy, "lifeBurst")) {
    renderAll();
    return true;
  }

  processEnemyCounterAfterPlayerAction(attacker, currentEnemy);
  renderAll();
  return true;
}

function canTriggerBerserkerRage(card, slotId) {
  return Boolean(
    card &&
      hasJobTag(card, "ベルセルク") &&
      isCycleTurn(5) &&
      (slotId === "leftWing" || slotId === "front" || slotId === "rightWing")
  );
}

function getActiveMagicBarrierEffect() {
  const rearCard = state.board.rear;
  const strategistCard = state.board.strategist;
  if (!rearCard || !strategistCard) return null;

  const rearSpr = rearCard.stats.spr;
  const strategistMag = strategistCard.stats.mag;
  const total = rearSpr + strategistMag;
  if (total >= PLAYER_HOLY_MAGIC_BARRIER_TOTAL_THRESHOLD) {
    return {
      type: "holy",
      name: "神聖結界",
      damageRate: PLAYER_HOLY_MAGIC_BARRIER_DAMAGE_RATE,
      rearSpr,
      strategistMag,
      total,
      flashClass: "holy-barrier-guard-flash",
    };
  }
  if (total >= PLAYER_MAGIC_BARRIER_TOTAL_THRESHOLD) {
    return {
      type: "normal",
      name: "結界",
      damageRate: PLAYER_MAGIC_BARRIER_DAMAGE_RATE,
      rearSpr,
      strategistMag,
      total,
      flashClass: "barrier-guard-flash",
    };
  }
  return null;
}

function getMagicBarrierLogText(barrierEffect) {
  if (!barrierEffect) return "";
  return `${barrierEffect.name}発動: 後衛SPR ${barrierEffect.rearSpr} + 軍師MAG ${barrierEffect.strategistMag} = ${barrierEffect.total}。` +
    `敵魔法被ダメージを${Math.round(barrierEffect.damageRate * 100)}%に軽減。`;
}

function getHolyTwinWingsPartner(attacker, slotId) {
  if (!attacker || slotId !== "rightWing") return null;
  const rightWingCard = state.board.rightWing;
  const leftWingCard = state.board.leftWing;
  if (!rightWingCard || !leftWingCard) return null;
  return { leftWingCard, leftWingSlotId: "leftWing" };
}

function resolveHolyTwinWingsAttack(attacker, slotId, currentEnemy) {
  const partner = getHolyTwinWingsPartner(attacker, slotId);
  if (!partner) return false;
  if (!currentEnemy || state.enemyHp <= 0) return false;

  const { leftWingCard, leftWingSlotId } = partner;
  const holyWingsAttributeSuffix = getAttributeLogSuffix(leftWingCard, currentEnemy, true);
  const holyWingsHitCount = isCharacterCard(leftWingCard, PLAYER_LANCELATE_PREEMPTIVE_CARD_ID) ? 2 : 1;
  for (let holyWingsHitIndex = 1; holyWingsHitIndex <= holyWingsHitCount; holyWingsHitIndex += 1) {
    const holyWingsAttack = calculateAttackDamageByType(leftWingCard, leftWingSlotId, "physical", currentEnemy);
    const nextEnemyHp = Math.max(0, state.enemyHp - holyWingsAttack.damage);
    const holyWingsCritLabel = holyWingsAttack.critical ? " クリティカル" : "";
    const holyWingsHitLabel = holyWingsHitCount > 1 ? `WING ${holyWingsHitIndex}` : "WING";
    const holyWingsLogText =
      holyWingsHitIndex === 1
        ? `神聖なる両翼発動: ${attacker.name}(右翼) に呼応し ${leftWingCard.name}(左翼) が追撃。` +
          `${holyWingsHitCount > 1 ? ` ランセレイト連撃(${holyWingsHitCount}回)。` : ""}` +
          ` ${holyWingsAttack.damage} ダメージ。敵HP ${nextEnemyHp}/${currentEnemy.hp}.${holyWingsCritLabel}${holyWingsAttributeSuffix}`
        : `神聖なる両翼連撃: ${leftWingCard.name}(左翼) ${holyWingsHitIndex}撃目で ${holyWingsAttack.damage} ダメージ。` +
          `敵HP ${nextEnemyHp}/${currentEnemy.hp}.${holyWingsCritLabel}${holyWingsAttributeSuffix}`;

    addActivationLog(holyWingsLogText, holyWingsAttack.critical ? "crit" : "good");
    state.enemyHp = nextEnemyHp;
    playPlayerAttackEffect(leftWingCard, leftWingSlotId, holyWingsAttack.damage, "physical", holyWingsAttack.critical, {
      delayMs: PLAYER_FOLLOW_UP_EFFECT_DELAY_MS * holyWingsHitIndex,
      hitLabel: holyWingsHitLabel,
      autoScroll: false,
      breakdown: holyWingsAttack.breakdown,
    });

    if (state.enemyHp <= 0) {
      onEnemyDefeated(currentEnemy, {
        finalAttackMessage:
          holyWingsHitCount > 1
            ? `神聖なる両翼(${attacker.name}+${leftWingCard.name}) ${holyWingsHitIndex}撃目で ${holyWingsAttack.damage} ダメージ`
            : `神聖なる両翼(${attacker.name}+${leftWingCard.name})で ${holyWingsAttack.damage} ダメージ`,
      });
      return true;
    }
  }

  return false;
}

function getRearArcherSupportCard() {
  const rearCard = state.board.rear;
  if (!rearCard || !hasJobTag(rearCard, "アーチャー")) return null;
  return rearCard;
}

function resolveRearArcherSupportAttack(currentEnemy) {
  const rearArcher = getRearArcherSupportCard();
  if (!rearArcher) return false;
  if (!currentEnemy || state.enemyHp <= 0) return false;

  const arianaLionRearArcherBoostActive = canTriggerArianaLionRearArcherBoost(rearArcher);
  const arianaLionRearArcherBoostRate = arianaLionRearArcherBoostActive
    ? PLAYER_ARIANA_LION_REAR_ARCHER_RATE
    : 1;
  const baseExtraDamage = Math.max(
    1,
    Math.floor(rearArcher.stats.atk * PLAYER_REAR_ARCHER_EXTRA_ATTACK_RATE)
  );
  const boostedExtraDamage = Math.max(1, Math.floor(baseExtraDamage * arianaLionRearArcherBoostRate));
  const extraDamageCut = applyEnemyPlayerAttackCut(boostedExtraDamage, currentEnemy, "physical");
  const extraDamage = extraDamageCut.damage;
  const extraDamageCutText = extraDamageCut.cutApplied
    ? ` (${extraDamageCut.cutSourceName}の物理攻撃半減 x${formatRateLabel(extraDamageCut.cutRate)})`
    : "";
  const arianaLionBoostText = arianaLionRearArcherBoostActive
    ? ` × ${formatRateLabel(PLAYER_ARIANA_LION_REAR_ARCHER_RATE)}(アリアナ加護)`
    : "";
  const nextEnemyHp = Math.max(0, state.enemyHp - extraDamage);
  addActivationLog(
    `後衛援護射撃: ${rearArcher.name} が ATK ${rearArcher.stats.atk} × ${PLAYER_REAR_ARCHER_EXTRA_ATTACK_RATE}` +
      `${arianaLionBoostText} = ${extraDamage} ダメージ${extraDamageCutText}。敵HP ${nextEnemyHp}/${currentEnemy.hp}.`,
    "good"
  );
  state.enemyHp = nextEnemyHp;
  playPlayerAttackEffect(rearArcher, "rear", extraDamage, "physical", false, {
    hitLabel: "EXTRA",
    autoScroll: false,
  });

  if (state.enemyHp <= 0) {
    onEnemyDefeated(currentEnemy, {
      finalAttackMessage: `${rearArcher.name} の後衛援護射撃で ${extraDamage} ダメージ`,
    });
    return true;
  }

  return false;
}

function getRearRemoteMagicSupportCard() {
  const rearCard = state.board.rear;
  if (!rearCard) return null;
  if (!hasAnyJobTag(rearCard, ["ウィザード", "ビショップ", "マジックナイト"])) return null;
  return rearCard;
}

function calculateRearRemoteMagicSupportDamage(card, enemy) {
  if (!card || !enemy) return null;
  const mag = Math.max(0, Math.floor(card.stats?.mag ?? 0));
  const magExcess = Math.max(0, mag - PLAYER_REAR_REMOTE_MAGIC_MAG_BASE);
  const rawBaseDamage = Math.max(0, Math.floor(magExcess * PLAYER_REAR_REMOTE_MAGIC_DAMAGE_RATE));
  const baseDamage = rawBaseDamage;
  const minstrelRate = Math.max(1, getBacklineMinstrelMagicSupportRate());
  const afterMinstrelDamage = Math.max(0, Math.floor(baseDamage * minstrelRate));
  const enemyDamageCut = applyEnemyPlayerAttackCut(afterMinstrelDamage, enemy, "magic");

  return {
    damage: enemyDamageCut.damage,
    mag,
    magExcess,
    rawBaseDamage,
    baseDamage,
    minstrelRate,
    afterMinstrelDamage,
    enemyDamageCut,
    breakdown: {
      type: "rearRemoteMagic",
      mag,
      magBase: PLAYER_REAR_REMOTE_MAGIC_MAG_BASE,
      magExcess,
      damageRate: PLAYER_REAR_REMOTE_MAGIC_DAMAGE_RATE,
      baseDamage,
      rawBaseDamage,
      minstrelRate,
      afterMinstrelDamage,
      enemyDamageCutRate: enemyDamageCut.cutRate,
      enemyDamageCutApplied: enemyDamageCut.cutApplied,
      enemyDamageCutSourceName: enemyDamageCut.cutSourceName,
      enemyDamageCutAttackStyle: enemyDamageCut.cutAttackStyle,
      afterEnemyDamageCut: enemyDamageCut.damage,
      attackType: "magic",
      defenseIgnored: true,
    },
  };
}

function resolveRearRemoteMagicSupportAttack(currentEnemy) {
  const rearMagicCard = getRearRemoteMagicSupportCard();
  if (!rearMagicCard) return false;
  if (!currentEnemy || state.enemyHp <= 0) return false;
  const isNamiRearRemoteMagic = isCharacterCard(rearMagicCard, PLAYER_NAMI_CHARACTER_ID);
  const rearRemoteMagicMpCost = isNamiRearRemoteMagic ? 0 : PLAYER_REAR_REMOTE_MAGIC_MP_COST;

  if (rearRemoteMagicMpCost > 0 && state.mp < rearRemoteMagicMpCost) {
    addActivationLog(
      `後衛遠隔魔法: ${rearMagicCard.name} はMP不足 (${state.mp}/${PLAYER_MP_MAX}) のため発動不可。` +
        ` 必要MP ${rearRemoteMagicMpCost}。`,
      "warn"
    );
    return false;
  }

  const prevMp = state.mp;
  if (rearRemoteMagicMpCost > 0) {
    state.mp = Math.max(0, state.mp - rearRemoteMagicMpCost);
  }
  const supportAttack = calculateRearRemoteMagicSupportDamage(rearMagicCard, currentEnemy);
  if (!supportAttack) return false;

  const extraDamageCutText = supportAttack.enemyDamageCut.cutApplied
    ? ` (${supportAttack.enemyDamageCut.cutSourceName}の魔法攻撃半減 x${formatRateLabel(supportAttack.enemyDamageCut.cutRate)})`
    : "";
  const minstrelBoostText =
    supportAttack.minstrelRate > 1
      ? ` / 吟遊詩人支援 x${formatRateLabel(supportAttack.minstrelRate)}`
      : "";
  const mpConsumptionText =
    rearRemoteMagicMpCost > 0
      ? ` MP ${prevMp}→${state.mp}/${PLAYER_MP_MAX}。`
      : ` ナミ特性によりMP消費なし (${state.mp}/${PLAYER_MP_MAX})。`;
  const nextEnemyHp = Math.max(0, state.enemyHp - supportAttack.damage);
  addActivationLog(
    `後衛遠隔魔法: ${rearMagicCard.name} が (MAG ${supportAttack.mag} - ${PLAYER_REAR_REMOTE_MAGIC_MAG_BASE}) x ` +
      `${PLAYER_REAR_REMOTE_MAGIC_DAMAGE_RATE} = ${supportAttack.rawBaseDamage}${minstrelBoostText}` +
      ` → ${supportAttack.damage} ダメージ${extraDamageCutText}。` +
      `${mpConsumptionText}敵HP ${nextEnemyHp}/${currentEnemy.hp}.`,
    supportAttack.minstrelRate > 1 ? "crit" : "good"
  );
  state.enemyHp = nextEnemyHp;

  if (supportAttack.damage > 0) {
    playPlayerAttackEffect(rearMagicCard, "rear", supportAttack.damage, "magic", false, {
      hitLabel: "REAR MAGIC",
      autoScroll: false,
      breakdown: supportAttack.breakdown,
    });
  }

  if (state.enemyHp <= 0) {
    onEnemyDefeated(currentEnemy, {
      finalAttackMessage: `${rearMagicCard.name} の後衛遠隔魔法で ${supportAttack.damage} ダメージ`,
    });
    return true;
  }

  return false;
}

function canTriggerGaiusLastStand(nextPlayerHp = state.playerHp) {
  if (Math.floor(nextPlayerHp) > 0) return false;
  const frontCard = state.board.front;
  if (!frontCard) return false;
  return isCharacterCard(frontCard, PLAYER_GAIUS_CHARACTER_ID);
}

function consumeGaiusLastStandCardToDeck() {
  const frontCard = state.board.front;
  if (!frontCard) return false;
  if (!isCharacterCard(frontCard, PLAYER_GAIUS_CHARACTER_ID)) return false;

  state.board.front = null;
  state.deck = shuffle([...state.deck, frontCard]);
  return true;
}

function showGaiusLastStandEffect() {
  const frontEl = boardSlotElements.front;
  if (!frontEl) return 0;
  const durationMs = 1500;
  flashElement(frontEl, "gaius-last-stand-glow", durationMs);
  return durationMs;
}

function canTriggerFrontSwordianCounter(enemyAction, enemy) {
  if (!enemyAction || enemyAction.attackType === "magic") return false;
  if (!enemy || !enemy.stats) return false;

  const frontCard = state.board.front;
  if (!frontCard || !frontCard.stats) return false;
  if (!hasAnyJobTag(frontCard, ["ソーディアン", "ベルセルク"])) return false;

  return frontCard.stats.spd > enemy.stats.spd;
}

function resolveFrontSwordianCounter(enemyAction, receivedDamage) {
  if (!enemyAction || !receivedDamage || receivedDamage <= 0) return false;
  const currentEnemy = getCurrentEnemy();
  if (!canTriggerFrontSwordianCounter(enemyAction, currentEnemy)) return false;
  if (Math.random() >= PLAYER_FRONT_SWORDIAN_COUNTER_TRIGGER_RATE) return false;

  const frontCard = state.board.front;
  if (!frontCard) return false;

  const baseCounterDamage = Math.max(0, Math.floor(receivedDamage * 2));
  const counterDamageCut = applyEnemyPlayerAttackCut(baseCounterDamage, currentEnemy, "physical");
  const counterDamage = counterDamageCut.damage;
  if (counterDamage <= 0) return false;

  const nextEnemyHp = Math.max(0, state.enemyHp - counterDamage);
  const counterCutText = counterDamageCut.cutApplied
    ? ` → ${counterDamage} (${counterDamageCut.cutSourceName}の物理攻撃半減 x${formatRateLabel(counterDamageCut.cutRate)})`
    : "";
  addActivationLog(
    `前衛反撃発動: ${frontCard.name}(SPD ${frontCard.stats.spd}) が` +
      ` 被ダメージ${receivedDamage}の2倍=${baseCounterDamage}${counterCutText}を反射。` +
      ` 敵HP ${nextEnemyHp}/${currentEnemy.hp}.`,
    "good"
  );
  state.enemyHp = nextEnemyHp;
  playPlayerAttackEffect(frontCard, "front", counterDamage, "physical", false, {
    hitLabel: "COUNTER",
    autoScroll: false,
  });

  if (state.enemyHp <= 0) {
    onEnemyDefeated(currentEnemy, {
      finalAttackMessage: `前衛反撃(${frontCard.name})で ${counterDamage} ダメージ`,
    });
    return true;
  }

  return false;
}

function applyBerserkerRageSelfDamage(attacker, dealtDamage = 0) {
  const normalizedDealtDamage = Math.max(0, Math.floor(Number(dealtDamage) || 0));
  const baseSelfDamage = Math.max(0, Math.floor(normalizedDealtDamage * PLAYER_BERSERKER_RAGE_SELF_DAMAGE_RATE));
  const izayaGeneralRecoilApplied = hasIzayaOnGeneral();
  const selfDamage = izayaGeneralRecoilApplied
    ? Math.max(0, Math.floor(baseSelfDamage * PLAYER_BERSERKER_RAGE_IZAYA_GENERAL_RECOIL_RATE))
    : baseSelfDamage;
  if (selfDamage <= 0) return false;
  const nextPlayerHp = Math.max(0, state.playerHp - selfDamage);
  state.playerHp = nextPlayerHp;
  addLog(
    `狂戦士の反動: ${attacker.name} の暴走で与ダメージ${normalizedDealtDamage}の` +
      `${Math.round(PLAYER_BERSERKER_RAGE_SELF_DAMAGE_RATE * 100)}%=${baseSelfDamage}` +
      `${izayaGeneralRecoilApplied ? ` に大将イザヤ補正x${formatRateLabel(PLAYER_BERSERKER_RAGE_IZAYA_GENERAL_RECOIL_RATE)}を適用し` : ""}` +
      `${selfDamage}を受けた。` +
      ` 味方HP ${state.playerHp}/${getPlayerMaxHp()}.`,
    "warn"
  );

  if (state.playerHp <= 0) {
    state.battleEnded = true;
    addLog("味方HPが0。ゲームオーバー。", "alert");
    state.pendingEnemyAction = null;
    state.pendingEnemyActionAwaitingConfirm = false;
    state.pendingEnemyActionAwaitingResolve = false;
    state.pendingEnemyActionOutcome = null;
    state.pendingMagicChoice = null;
    state.pendingPostActivationPlayerAction = null;
    state.pendingLifeBurstSequence = null;
    state.pendingBoardRecycle = false;
    state.pendingActivationLogQueue = [];
    clearLifeBurstCinematicEffect();
    return true;
  }

  return false;
}

function getFirstTurnFollowUpChance(attacker, enemy) {
  if (!attacker || !enemy) return 0;
  if (attacker.stats.spd <= enemy.stats.spd) return 0;

  const spd = attacker.stats.spd;
  if (spd >= 98) return 0.8;
  if (spd >= 95) return 0.6;
  if (spd >= 90) return 0.5;
  return 0;
}

function choosePredictGuard(guardType) {
  if (!state.pendingEnemyAction || state.battleEnded) return;

  const pendingAction = state.pendingEnemyAction;
  state.pendingEnemyAction = null;
  state.pendingEnemyActionAwaitingConfirm = false;
  state.pendingEnemyActionAwaitingResolve = false;
  state.pendingEnemyActionOutcome = null;

  if (queueEnemyActionConfirmation(pendingAction, guardType)) {
    renderAll();
    return;
  }

  endTurnAndPrepareNext();
  renderAll();
}

function previewEnemyAction(enemyAction, guardChoice = null) {
  if (!enemyAction) return;

  let damage = enemyAction.damage;
  let assaultBonus = 0;
  let darkAttackBonus = 0;
  let lancelateEvasionTriggered = false;
  const enemyAttackLabel = getEnemyCounterAttackLabel(enemyAction);
  const choiceLabel = guardChoice === "magic" ? "魔法防御" : "物理防御";
  const guarded = guardChoice && guardChoice === enemyAction.attackType;
  const barrierEffect = enemyAction.attackType === "magic" ? getActiveMagicBarrierEffect() : null;
  const frontGuardianGuardEffect =
    enemyAction.attackType === "physical" ? getFrontGuardianPhysicalGuardEffect() : null;
  let frontGuardianReduced = 0;
  const ironWallFormation = enemyAction.ironWallFormation ?? null;
  let ironWallReduced = 0;

  if (guarded) {
    damage = Math.max(0, Math.floor(damage * 0.7));
  }
  if (barrierEffect) {
    damage = Math.max(0, Math.floor(damage * barrierEffect.damageRate));
  }
  damage = Math.max(0, Math.floor(damage * getIncomingDamageMoraleRate()));
  if (frontGuardianGuardEffect) {
    const beforeReduction = damage;
    damage = Math.max(0, Math.floor(damage * frontGuardianGuardEffect.damageRate));
    frontGuardianReduced = beforeReduction - damage;
  }
  if (ironWallFormation) {
    const beforeReduction = damage;
    damage = Math.max(0, Math.floor(damage * PLAYER_IRON_WALL_DAMAGE_RATE));
    damage = Math.max(0, damage - ironWallFormation.totalDef);
    ironWallReduced = beforeReduction - damage;
  }
  if (enemyAction.assaultTriggered) {
    const beforeAssault = damage;
    damage = Math.max(0, Math.floor(damage * ENEMY_AMBUSH_ASSAULT_DAMAGE_RATE));
    assaultBonus = Math.max(0, damage - beforeAssault);
  }
  if (enemyAction.darkAttackTriggered) {
    const beforeDarkAttack = damage;
    damage = Math.max(0, Math.floor(damage * ENEMY_DARK_ATTACK_DAMAGE_RATE));
    darkAttackBonus = Math.max(0, damage - beforeDarkAttack);
  }
  const currentEnemy = getCurrentEnemy();
  if (canTriggerLancelateEvasion(enemyAction, currentEnemy) && Math.random() < PLAYER_LANCELATE_EVASION_TRIGGER_RATE) {
    damage = 0;
    assaultBonus = 0;
    darkAttackBonus = 0;
    lancelateEvasionTriggered = true;
  }

  return {
    damage,
    enemyAttackLabel,
    choiceLabel,
    guarded,
    barrierEffect,
    frontGuardianGuardEffect,
    frontGuardianReduced,
    ironWallFormation,
    ironWallReduced,
    assaultTriggered: Boolean(enemyAction.assaultTriggered),
    assaultBonus,
    darkAttackTriggered: Boolean(enemyAction.darkAttackTriggered),
    darkAttackBonus,
    lancelateEvasionTriggered,
    nextPlayerHp: Math.max(0, state.playerHp - damage),
  };
}

function queueEnemyActionConfirmation(enemyAction, guardChoice = null, options = {}) {
  const suppressIronWallPrompt = Boolean(options.suppressIronWallPrompt);
  if (!enemyAction) return false;
  const preview = previewEnemyAction(enemyAction, guardChoice);
  if (!preview) return false;
  const enemyAttackAttributeSuffix = getAttributeLogSuffix(getCurrentEnemy(), enemyAction.targetCard, false);

  if (preview.ironWallFormation && !suppressIronWallPrompt) {
    addActivationLog("我らが盾は、決して砕けない！", "crit");
    queuePostActivationPlayerAction({
      actionType: "continueEnemyActionConfirmation",
      enemyAction,
      guardChoice,
      suppressIronWallPrompt: true,
    });
    return true;
  }

  if (guardChoice) {
    if (preview.guarded) {
      addLog(`先読み防御成功: ${preview.choiceLabel}が的中。被ダメージ30%カット。`, "good");
    } else {
      addLog(`先読み防御失敗: ${preview.choiceLabel}を選択。敵は${preview.enemyAttackLabel}で攻撃。`, "warn");
    }
  }

  state.pendingEnemyActionAwaitingResolve = true;
  state.pendingEnemyActionOutcome = {
    enemyAction,
    guardChoice,
    damage: preview.damage,
    barrierEffect: preview.barrierEffect,
  };

  if (preview.barrierEffect) {
    addActivationLog(
      getMagicBarrierLogText(preview.barrierEffect),
      preview.barrierEffect.type === "holy" ? "crit" : "good"
    );
  }
  if (preview.frontGuardianGuardEffect) {
    addActivationLog(
      `前衛守護発動: ${preview.frontGuardianGuardEffect.sourceName} が敵の物理反撃を10%カット。`,
      "good"
    );
  }
  if (preview.ironWallFormation) {
    addActivationLog(
      `鉄壁の陣発動: ${preview.ironWallFormation.sourceName} が` +
        ` 被ダメージ10%カット + 軍団合計DEF ${preview.ironWallFormation.totalDef} で敵反撃を軽減。`,
      "good"
    );
  }
  if (preview.assaultTriggered) {
    addActivationLog(
      `敵の強襲発動: 前衛不在を突かれ、被ダメージがx${formatRateLabel(ENEMY_AMBUSH_ASSAULT_DAMAGE_RATE)}。`,
      "warn"
    );
  }
  if (preview.darkAttackTriggered) {
    addActivationLog(
      `敵の暗黒攻撃発動: 敵LUK ${enemyAction.enemyLuk} > 味方LUK ${enemyAction.targetLuk} により` +
        ` 被ダメージがx${formatRateLabel(ENEMY_DARK_ATTACK_DAMAGE_RATE)}。`,
      "warn"
    );
  }
  if (preview.lancelateEvasionTriggered) {
    addActivationLog(
      `${getCurrentTurnLabel()} 光速回避: ランセレイトが敵の攻撃を見切り、ダメージを0にした。`,
      "good"
    );
  }
  addLog(
    `敵の${preview.enemyAttackLabel}反撃: ${SLOT_BY_ID[enemyAction.targetSlot].label}(${enemyAction.targetCard.name})に` +
      ` ${preview.damage} ダメージ。味方HP ${preview.nextPlayerHp}/${getPlayerMaxHp()}.${enemyAttackAttributeSuffix}` +
      `${enemyAction.rangedMitigationApplied ? " 遠隔攻撃効果で被ダメージ30%カット。" : ""}` +
      `${preview.frontGuardianReduced > 0 ? ` 前衛守護で-${preview.frontGuardianReduced}軽減。` : ""}` +
      `${preview.ironWallReduced > 0 ? ` 鉄壁の陣で-${preview.ironWallReduced}軽減。` : ""}` +
      `${preview.assaultBonus > 0 ? ` 強襲で+${preview.assaultBonus}増幅。` : ""}` +
      `${preview.darkAttackBonus > 0 ? ` 暗黒攻撃で+${preview.darkAttackBonus}増幅。` : ""}` +
      `${preview.lancelateEvasionTriggered ? " ランセレイトの回避で無効化。" : ""}`
  );
  return true;
}

function finalizeQueuedEnemyAction() {
  if (!state.pendingEnemyActionAwaitingResolve || !state.pendingEnemyActionOutcome) return;

  const outcome = state.pendingEnemyActionOutcome;
  state.pendingEnemyActionAwaitingResolve = false;
  state.pendingEnemyActionOutcome = null;

  const enemyActionResolved = applyEnemyAction(outcome.enemyAction, outcome.guardChoice, {
    suppressLogs: true,
    precomputedDamage: outcome.damage,
    precomputedBarrierEffect: outcome.barrierEffect,
  });
  if (enemyActionResolved === false) {
    renderAll();
    return;
  }
  if (state.battleEnded || state.enemyTransitioning) {
    renderAll();
    return;
  }

  endTurnAndPrepareNext();
  renderAll();
}

function applyEnemyAction(enemyAction, guardChoice = null, options = {}) {
  if (!enemyAction) return;

  const {
    suppressLogs = false,
    precomputedDamage = null,
    precomputedBarrierEffect = null,
    suppressGaiusLastStandPrompt = false,
    forceGaiusLastStand = false,
  } = options;

  let damage = precomputedDamage ?? enemyAction.damage;
  let assaultBonus = 0;
  let darkAttackBonus = 0;
  let lancelateEvasionTriggered = false;
  const currentEnemy = getCurrentEnemy();
  const enemyAttackAttributeSuffix = getAttributeLogSuffix(currentEnemy, enemyAction.targetCard, false);
  const enemyAttackLabel = getEnemyCounterAttackLabel(enemyAction);
  const choiceLabel = guardChoice === "magic" ? "魔法防御" : "物理防御";
  const guarded = guardChoice && guardChoice === enemyAction.attackType;
  const barrierEffect =
    enemyAction.attackType === "magic" ? precomputedBarrierEffect ?? getActiveMagicBarrierEffect() : null;
  const frontGuardianGuardEffect =
    enemyAction.attackType === "physical" ? getFrontGuardianPhysicalGuardEffect() : null;
  let frontGuardianReduced = 0;
  const ironWallFormation = enemyAction.ironWallFormation ?? null;
  let ironWallReduced = 0;

  if (guarded && precomputedDamage === null) {
    damage = Math.max(0, Math.floor(damage * 0.7));
  }
  if (barrierEffect && precomputedDamage === null) {
    damage = Math.max(0, Math.floor(damage * barrierEffect.damageRate));
  }
  if (precomputedDamage === null) {
    damage = Math.max(0, Math.floor(damage * getIncomingDamageMoraleRate()));
    if (frontGuardianGuardEffect) {
      const beforeReduction = damage;
      damage = Math.max(0, Math.floor(damage * frontGuardianGuardEffect.damageRate));
      frontGuardianReduced = beforeReduction - damage;
    }
    if (ironWallFormation) {
      const beforeReduction = damage;
      damage = Math.max(0, Math.floor(damage * PLAYER_IRON_WALL_DAMAGE_RATE));
      damage = Math.max(0, damage - ironWallFormation.totalDef);
      ironWallReduced = beforeReduction - damage;
    }
    if (enemyAction.assaultTriggered) {
      const beforeAssault = damage;
      damage = Math.max(0, Math.floor(damage * ENEMY_AMBUSH_ASSAULT_DAMAGE_RATE));
      assaultBonus = Math.max(0, damage - beforeAssault);
    }
    if (enemyAction.darkAttackTriggered) {
      const beforeDarkAttack = damage;
      damage = Math.max(0, Math.floor(damage * ENEMY_DARK_ATTACK_DAMAGE_RATE));
      darkAttackBonus = Math.max(0, damage - beforeDarkAttack);
    }
    if (canTriggerLancelateEvasion(enemyAction, currentEnemy) && Math.random() < PLAYER_LANCELATE_EVASION_TRIGGER_RATE) {
      damage = 0;
      assaultBonus = 0;
      darkAttackBonus = 0;
      lancelateEvasionTriggered = true;
    }
  }
  const nextPlayerHp = Math.max(0, state.playerHp - damage);
  const gaiusLastStandTriggered = forceGaiusLastStand || canTriggerGaiusLastStand(nextPlayerHp);
  if (gaiusLastStandTriggered && !suppressGaiusLastStandPrompt && !forceGaiusLastStand) {
    showGaiusLastStandEffect();
    consumeGaiusLastStandCardToDeck();
    addActivationLog("俺が最後の盾となる！", "crit");
    queuePostActivationPlayerAction({
      actionType: "continueEnemyActionWithGaiusLastStand",
      enemyAction,
      guardChoice,
      suppressLogs,
      precomputedDamage,
      precomputedBarrierEffect,
      suppressGaiusLastStandPrompt: true,
      forceGaiusLastStand: true,
    });
    return false;
  }
  const finalPlayerHp = gaiusLastStandTriggered ? 1 : nextPlayerHp;

  if (!suppressLogs && guardChoice) {
    if (guarded) {
      addLog(`先読み防御成功: ${choiceLabel}が的中。被ダメージ30%カット。`, "good");
    } else {
      addLog(`先読み防御失敗: ${choiceLabel}を選択。敵は${enemyAttackLabel}で攻撃。`, "warn");
    }
  }

  if (!suppressLogs) {
    if (barrierEffect) {
      addActivationLog(getMagicBarrierLogText(barrierEffect), barrierEffect.type === "holy" ? "crit" : "good");
    }
    if (frontGuardianGuardEffect) {
      addActivationLog(
        `前衛守護発動: ${frontGuardianGuardEffect.sourceName} が敵の物理反撃を10%カット。`,
        "good"
      );
    }
    if (ironWallFormation) {
      addActivationLog(
        `鉄壁の陣発動: ${ironWallFormation.sourceName} が` +
          ` 被ダメージ10%カット + 軍団合計DEF ${ironWallFormation.totalDef} で敵反撃を軽減。`,
        "good"
      );
    }
    if (enemyAction.assaultTriggered) {
      addActivationLog(
        `敵の強襲発動: 前衛不在を突かれ、被ダメージがx${formatRateLabel(ENEMY_AMBUSH_ASSAULT_DAMAGE_RATE)}。`,
        "warn"
      );
    }
    if (enemyAction.darkAttackTriggered) {
      addActivationLog(
        `敵の暗黒攻撃発動: 敵LUK ${enemyAction.enemyLuk} > 味方LUK ${enemyAction.targetLuk} により` +
          ` 被ダメージがx${formatRateLabel(ENEMY_DARK_ATTACK_DAMAGE_RATE)}。`,
        "warn"
      );
    }
    if (lancelateEvasionTriggered) {
      addActivationLog(
        `${getCurrentTurnLabel()} 光速回避: ランセレイトが敵の攻撃を見切り、ダメージを0にした。`,
        "good"
      );
    }
    addLog(
      `敵の${enemyAttackLabel}反撃: ${SLOT_BY_ID[enemyAction.targetSlot].label}(${enemyAction.targetCard.name})に` +
        ` ${damage} ダメージ。味方HP ${finalPlayerHp}/${getPlayerMaxHp()}.${enemyAttackAttributeSuffix}` +
        `${enemyAction.rangedMitigationApplied ? " 遠隔攻撃効果で被ダメージ30%カット。" : ""}` +
        `${frontGuardianReduced > 0 ? ` 前衛守護で-${frontGuardianReduced}軽減。` : ""}` +
        `${ironWallReduced > 0 ? ` 鉄壁の陣で-${ironWallReduced}軽減。` : ""}` +
        `${assaultBonus > 0 ? ` 強襲で+${assaultBonus}増幅。` : ""}` +
        `${darkAttackBonus > 0 ? ` 暗黒攻撃で+${darkAttackBonus}増幅。` : ""}` +
        `${lancelateEvasionTriggered ? " ランセレイトの回避で無効化。" : ""}`
    );
  }
  state.playerHp = finalPlayerHp;
  const barrierEffectDelayMs = barrierEffect ? showMagicBarrierActivationEffect(barrierEffect) : 0;
  if (barrierEffect && boardPanelEl) {
    const barrierFlashDuration = barrierEffect.type === "holy" ? 1250 : 980;
    const runBarrierFlash = () => flashElement(boardPanelEl, barrierEffect.flashClass, barrierFlashDuration);
    if (barrierEffectDelayMs > 0) {
      window.setTimeout(runBarrierFlash, Math.floor(barrierEffectDelayMs * 0.14));
    } else {
      runBarrierFlash();
    }
  }
  if (ironWallFormation && boardPanelEl) {
    flashElement(boardPanelEl, ironWallFormation.flashClass, 980);
  }
  playEnemyAttackEffect(enemyAction, damage, enemyAction.guardTriggered, {
    delayMs: barrierEffectDelayMs,
  });

  if (enemyAction.guardTriggered) {
    addActivationLog("前衛ガーディアンがクリティカルガード発動。被ダメージ半減。", "crit");
  }

  if (state.playerHp <= 0) {
    state.battleEnded = true;
    addLog("味方HPが0。ゲームオーバー。", "alert");
    state.pendingEnemyAction = null;
    state.pendingEnemyActionAwaitingConfirm = false;
    state.pendingEnemyActionAwaitingResolve = false;
    state.pendingEnemyActionOutcome = null;
    state.pendingMagicChoice = null;
    state.pendingPostActivationPlayerAction = null;
    state.pendingLifeBurstSequence = null;
    state.pendingActivationLogQueue = [];
    clearLifeBurstCinematicEffect();
    return;
  }

  if (resolveFrontSwordianCounter(enemyAction, damage)) {
    return;
  }

  return true;
}

function endTurnAndPrepareNext() {
  updateMoraleForTurnEnd();
  if (isPhaseLimitTurnEnded()) {
    state.battleEnded = true;
    state.pendingBoardRecycle = false;
    state.pendingEnemyAction = null;
    state.pendingEnemyActionAwaitingConfirm = false;
    state.pendingEnemyActionAwaitingResolve = false;
    state.pendingEnemyActionOutcome = null;
    state.pendingMagicChoice = null;
    state.pendingPostActivationPlayerAction = null;
    state.pendingLifeBurstSequence = null;
    state.pendingActivationLogQueue = [];
    clearLifeBurstCinematicEffect();
    clearTurnDisplaySyncTimer();
    state.pendingTurnDisplayUpdate = false;
    addLog(
      `PHASE ${normalizeBattlePhase(state.phase)} / TURN ${normalizeBattleTurn(state.turn)} 終了。ゲームオーバー。`,
      "alert"
    );
    return;
  }
  const shouldRecycleAfterEnemyAttack = isBoardFull();
  advanceTurnCycle();
  if (shouldRecycleAfterEnemyAttack) {
    queueBoardRecycleAfterEnemyHit();
  }
  scheduleDisplayedTurnAfterCombat(state.turn, state.phase);
  queueScrollToDivineDiceNodeAfterEnemyTurn();
}

function resolveRearHeal(card, options = {}) {
  const { holy = false, apply = true } = options;
  const healEffectRate = holy ? PLAYER_REAR_HOLY_HEAL_EFFECT_RATE : 1;
  const baseHealRate = normalizeBattleTurn(state.turn) % 2 === 1 ? 3 : 2;
  const priestBoostApplied = isPriestLike(card);
  const thirdTurnMagicBoostApplied = isThirdTurnMagicBoostActive();
  const arianaZeoliteBoostApplied = canTriggerArianaZeoliteHealBoost(card);
  const arianaZeoliteBoostRate = arianaZeoliteBoostApplied ? PLAYER_ARIANA_ZEOLITE_HEAL_RATE : 1;
  const healRateAfterJobBoost = priestBoostApplied ? baseHealRate * PLAYER_REAR_HEAL_PRIEST_BOOST_RATE : baseHealRate;
  const healRate = thirdTurnMagicBoostApplied
    ? healRateAfterJobBoost * PLAYER_TURN3_MAGIC_HEAL_BOOST_RATE
    : healRateAfterJobBoost;
  const healFromRate = Math.floor(card.stats.spr * healRate * healEffectRate);
  const sprBonus = Math.max(
    0,
    Math.floor((card.stats.spr - PLAYER_REAR_HEAL_SPR_BONUS_BASE) * PLAYER_REAR_HEAL_SPR_BONUS_RATE * healEffectRate)
  );
  const healBeforeBoost = healFromRate + sprBonus;
  const healValue = Math.max(0, Math.floor(healBeforeBoost * arianaZeoliteBoostRate));
  const beforeHp = state.playerHp;
  const nextHp = Math.min(getPlayerMaxHp(), state.playerHp + healValue);
  if (apply) {
    state.playerHp = nextHp;
  }
  return {
    healed: nextHp - beforeHp,
    healFromRate,
    sprBonus,
    healEffectRate,
    holy,
    baseHealRate,
    priestBoostApplied,
    thirdTurnMagicBoostApplied,
    arianaZeoliteBoostApplied,
    arianaZeoliteBoostRate,
  };
}

function getTreasureDropTargetCard(stagedCards = [], enemyLuk = 0) {
  const cards = stagedCards.filter((card) => card && card.stats && typeof card.stats.luk === "number");
  if (cards.length === 0) return null;

  const lukThreshold = Math.max(0, Math.floor(enemyLuk));
  const eligibleCards = cards.filter((card) => Math.floor(card.stats.luk) > lukThreshold);
  if (eligibleCards.length === 0) return null;

  return eligibleCards.reduce((bestCard, currentCard) => {
    if (!bestCard) return currentCard;
    return currentCard.stats.luk > bestCard.stats.luk ? currentCard : bestCard;
  }, null);
}

function getEnemyDefeatPasswordReward(defeatedEnemyId = "") {
  if (defeatedEnemyId !== "arena_verm") return null;
  const volgram = SUMMON_CHARACTER_BY_ID[PLAYER_VOLGRAM_CHARACTER_ID];
  if (!volgram) return null;
  const summonCode = String(volgram.summonCode ?? "").trim();
  if (!summonCode) return null;
  return {
    rewardLabel: "ヴォルグラム（Rキャラ）",
    summonCode,
  };
}

function resolveEnemyTreasureDrop(defeatedEnemy, stagedCards = []) {
  if (!defeatedEnemy || !defeatedEnemy.stats) {
    return { triggered: false, reason: "invalidEnemy" };
  }

  const enemyLuk = Math.max(0, Math.floor(defeatedEnemy.stats.luk ?? 0));
  const dropTargetCard = getTreasureDropTargetCard(stagedCards, enemyLuk);
  if (!dropTargetCard) {
    return { triggered: false, reason: "lukConditionNotMet" };
  }

  const tricksterOnBoard = stagedCards.some((card) => isTrickster(card));
  const dropRate = tricksterOnBoard ? PLAYER_TREASURE_DROP_TRICKSTER_RATE : PLAYER_TREASURE_DROP_BASE_RATE;
  if (Math.random() >= dropRate) {
    return {
      triggered: false,
      reason: "dropMiss",
      dropRate,
      tricksterOnBoard,
      sourceName: dropTargetCard.name,
      maxLuk: Math.max(0, Math.floor(dropTargetCard.stats.luk)),
    };
  }

  const maxLuk = Math.max(0, Math.floor(dropTargetCard.stats.luk));
  const bonusLuk = Math.max(0, maxLuk - PLAYER_TREASURE_DROP_BONUS_LUK_BASE);
  const bonusHeal = Math.max(0, Math.floor(bonusLuk * PLAYER_TREASURE_DROP_BONUS_HEAL_RATE));
  const totalHeal = PLAYER_TREASURE_DROP_BASE_HEAL + bonusHeal;
  const beforeHp = state.playerHp;
  state.playerHp = Math.min(getPlayerMaxHp(), state.playerHp + totalHeal);
  const actualHealed = state.playerHp - beforeHp;

  return {
    triggered: true,
    dropRate,
    tricksterOnBoard,
    sourceName: dropTargetCard.name,
    maxLuk,
    totalHeal,
    healed: actualHealed,
    playerHpAfter: state.playerHp,
    playerMaxHp: getPlayerMaxHp(),
  };
}

function finalizeEnemyDefeatBoardState(stagedCards = []) {
  const resolvedStagedCards = Array.isArray(stagedCards) ? stagedCards.filter(Boolean) : [];
  if (resolvedStagedCards.length === SLOT_ORDER.length) {
    state.deck = shuffle([...state.deck, ...resolvedStagedCards]);
  } else if (resolvedStagedCards.length > 0) {
    state.discard.push(...resolvedStagedCards);
  }
  state.board = Object.fromEntries(SLOT_ORDER.map((slot) => [slot.id, null]));
  state.strategistPlacedTurnIndex = null;
  state.selectedCard = null;
}

function proceedEnemyDefeatAfterDrop(defeatedEnemyName, isFinalEnemy, enemyIndexAtDefeat) {
  if (enemyIndexAtDefeat !== state.enemyIndex) return false;
  const activeEnemyRoster = getActiveEnemyRoster();

  if (isFinalEnemy) {
    addLog("全戦闘制覇でゲームクリア。", "good");
    state.enemyTransitioning = false;
    state.combatFxReadyAt = 0;
    renderAll();
    return true;
  }

  enemyTransitionSpawnTimer = window.setTimeout(() => {
    if (enemyIndexAtDefeat !== state.enemyIndex) return;
    state.enemyIndex += 1;
    state.enemyHp = getCurrentEnemy().hp;
    state.phase = 1;
    state.turn = 1;
    state.displayPhase = 1;
    state.displayTurn = 1;
    state.pendingTurnDisplayUpdate = false;
    clearTurnDisplaySyncTimer();

    renderAll();
    triggerEnemyArtTransition("enemy-spawn-phase", ENEMY_SPAWN_REVEAL_MS);
    showEnemyTransitionBanner(`次敵出現: ${getCurrentEnemy().name}`, "spawn");
    addLog(
      `次敵出現 (${state.enemyIndex + 1}/${activeEnemyRoster.length}): ${getCurrentEnemy().name}。` +
        "盤面を再編成してください。",
      "warn"
    );
    addSimpleTurnStartLog(state.displayTurn, state.displayPhase);

    enemyTransitionEndTimer = window.setTimeout(() => {
      state.enemyTransitioning = false;
      state.combatFxReadyAt = 0;
      renderAll();
    }, ENEMY_SPAWN_REVEAL_MS);
  }, ENEMY_AFTER_DEFEAT_PAUSE_MS);
  return true;
}

function onEnemyDefeated(defeatedEnemy, options = {}) {
  const { finalAttackMessage = "" } = options;
  state.pendingBoardRecycle = false;
  updateMoraleForTurnEnd();
  state.score += getEnemyDefeatScoreGain();
  clearEnemyTransitionEffects({ resetState: false });

  state.pendingEnemyAction = null;
  state.pendingEnemyActionAwaitingConfirm = false;
  state.pendingEnemyActionAwaitingResolve = false;
  state.pendingEnemyActionOutcome = null;
  state.pendingMagicChoice = null;
  state.pendingPostActivationPlayerAction = null;
  state.pendingLifeBurstSequence = null;
  state.draft = [];
  state.drawModalOpen = false;
  state.selectedCard = null;
  clearLifeBurstCinematicEffect();

  const activeEnemyRoster = getActiveEnemyRoster();
  const isFinalEnemy = state.enemyIndex === activeEnemyRoster.length - 1;
  state.enemyTransitioning = true;

  if (finalAttackMessage) {
    addLog(`FINAL ATTACK: ${finalAttackMessage}`, "crit");
  } else {
    addLog(`FINAL ATTACK: ${defeatedEnemy.name} に決定打。`, "crit");
  }

  if (isFinalEnemy) {
    state.battleEnded = true;
  }

  const stagedCards = Object.values(state.board).filter(Boolean);

  renderAll();
  const remainingFxMs = Math.max(0, Math.ceil(state.combatFxReadyAt - performance.now()));
  const defeatStartDelayMs = Math.max(ENEMY_FINAL_ATTACK_HOLD_MS, remainingFxMs);

  enemyTransitionStartTimer = window.setTimeout(() => {
    triggerEnemyArtTransition("enemy-defeat-phase", ENEMY_DEFEAT_FADE_MS);

    enemyTransitionSwapTimer = window.setTimeout(() => {
      showEnemyTransitionBanner(`${defeatedEnemy.name} 撃破`, "defeat");
      addLog(`${defeatedEnemy.name}を撃破。`, "good");
      queuePostActivationPlayerAction({
        actionType: "enemyDefeatDropPhase",
        enemyIndex: state.enemyIndex,
        isFinalEnemy,
        defeatedEnemyId: defeatedEnemy.id,
        defeatedEnemyName: defeatedEnemy.name,
        defeatedEnemyLuk: Math.max(0, Math.floor(defeatedEnemy.stats?.luk ?? 0)),
        stagedCards,
      });
      if (!hasPendingActivationLog()) {
        resolvePendingPostActivationPlayerAction();
        renderAll();
      }
    }, ENEMY_DEFEAT_FADE_MS);
  }, defeatStartDelayMs);
}

function triggerEnemyArtTransition(phaseClass, durationMs = 0) {
  if (!enemyArtSlotEl || !phaseClass) return;

  enemyArtSlotEl.classList.remove("enemy-defeat-phase", "enemy-spawn-phase");
  void enemyArtSlotEl.offsetWidth;
  enemyArtSlotEl.classList.add(phaseClass);

  if (durationMs > 0) {
    window.setTimeout(() => {
      if (!enemyArtSlotEl) return;
      enemyArtSlotEl.classList.remove(phaseClass);
    }, durationMs);
  }
}

function showEnemyTransitionBanner(text, kind = "defeat") {
  if (!text) return;

  const banner = document.createElement("p");
  banner.className = `enemy-transition-banner ${kind}`;
  banner.textContent = text;
  document.body.appendChild(banner);

  window.setTimeout(() => {
    banner.remove();
  }, ENEMY_TRANSITION_BANNER_MS);
}

function clearEnemyTransitionEffects(options = {}) {
  const { resetState = true } = options;
  clearTurnDisplaySyncTimer();
  state.pendingTurnDisplayUpdate = false;

  window.clearTimeout(enemyTransitionStartTimer);
  window.clearTimeout(enemyTransitionSwapTimer);
  window.clearTimeout(enemyTransitionSpawnTimer);
  window.clearTimeout(enemyTransitionEndTimer);
  enemyTransitionStartTimer = null;
  enemyTransitionSwapTimer = null;
  enemyTransitionSpawnTimer = null;
  enemyTransitionEndTimer = null;

  document.querySelectorAll(".enemy-transition-banner").forEach((el) => el.remove());
  if (enemyArtSlotEl) {
    enemyArtSlotEl.classList.remove("enemy-defeat-phase", "enemy-spawn-phase");
  }
  clearLifeBurstCinematicEffect();

  if (resetState) {
    state.enemyTransitioning = false;
  }
}

function recycleBoardCardsToDeckIfFull() {
  const stagedCards = Object.values(state.board).filter(Boolean);
  if (stagedCards.length < SLOT_ORDER.length) return;

  state.deck = shuffle([...state.deck, ...stagedCards]);
  state.board = Object.fromEntries(SLOT_ORDER.map((slot) => [slot.id, null]));
  state.strategistPlacedTurnIndex = null;
  state.selectedCard = null;

  addLog("盤面が6枚になったため、配置カードを山札に戻してシャッフルしました。", "warn");
}

function isBoardFull() {
  return Object.values(state.board).filter(Boolean).length >= SLOT_ORDER.length;
}

function queueBoardRecycleAfterEnemyHit() {
  if (!isBoardFull()) return;
  if (state.pendingBoardRecycle) return;

  state.pendingBoardRecycle = true;
  addLog("敵の攻撃後、画面クリックで陣形を再編します。", "warn");
}

function canTriggerEnemyAmbushAssault() {
  if (state.board.front) return false;
  return Math.random() < ENEMY_AMBUSH_ASSAULT_TRIGGER_RATE;
}

function canTriggerEnemyDarkAttack(enemy, targetCard) {
  if (!enemy || !enemy.stats || !targetCard || !targetCard.stats) return false;
  if (enemy.stats.luk <= targetCard.stats.luk) return false;
  return Math.random() < ENEMY_DARK_ATTACK_TRIGGER_RATE;
}

function getEnemyCounterAttackLabel(enemyAction) {
  const baseLabel = enemyAction?.attackType === "magic" ? "魔法" : "物理";
  return enemyAction?.darkAttackTriggered ? `暗黒${baseLabel}` : baseLabel;
}

function resolveEnemyCounter(enemy, sourceCard = null) {
  const targetSlot = pickEnemyTargetSlot();
  if (!targetSlot) return null;

  const targetCard = state.board[targetSlot];
  const attackType = getEnemyAttackType();
  const result = calculateEnemyDamage(targetCard, targetSlot, attackType, enemy, { sourceCard });
  const assaultTriggered = canTriggerEnemyAmbushAssault();
  const darkAttackTriggered = canTriggerEnemyDarkAttack(enemy, targetCard);

  return {
    attackType,
    targetSlot,
    targetCard,
    damage: result.damage,
    guardTriggered: result.guardTriggered,
    rangedMitigationApplied: result.rangedMitigationApplied,
    assaultTriggered,
    darkAttackTriggered,
    enemyLuk: Math.max(0, Math.floor(enemy?.stats?.luk ?? 0)),
    targetLuk: Math.max(0, Math.floor(targetCard?.stats?.luk ?? 0)),
  };
}

function getStrategistPrediction(enemyAction, enemy) {
  const strategist = state.board.strategist;
  if (!strategist) return null;
  if (strategist.stats.mag <= enemy.stats.mag) return null;

  const accuracy = Math.min(95, strategist.stats.mag);
  const predictedType =
    roll(1, 100) <= accuracy ? enemyAction.attackType : getOppositeAttackType(enemyAction.attackType);

  return {
    strategistName: strategist.name,
    predictedType,
    accuracy,
  };
}

function getOppositeAttackType(type) {
  return type === "magic" ? "physical" : "magic";
}

function pickEnemyTargetSlot() {
  for (const slotId of ENEMY_TARGET_PRIORITY) {
    if (state.board[slotId]) return slotId;
  }
  return null;
}

function getEnemyPlayerAttackCutRate(enemy, attackStyle) {
  if (!enemy || !enemy.id) return 1;
  if (attackStyle === "physical" && enemy.id === ENEMY_PHYSICAL_ATTACK_HALF_BOSS_ID) {
    return ENEMY_PLAYER_ATTACK_HALF_RATE;
  }
  if (attackStyle === "magic" && enemy.id === ENEMY_MAGIC_ATTACK_HALF_BOSS_ID) {
    return ENEMY_PLAYER_ATTACK_HALF_RATE;
  }
  return 1;
}

function applyEnemyPlayerAttackCut(damage, enemy, attackStyle) {
  const normalizedDamage = Math.max(0, Math.floor(damage));
  const cutRate = getEnemyPlayerAttackCutRate(enemy, attackStyle);
  const cutApplied = cutRate < 1;

  if (!cutApplied) {
    return {
      damage: normalizedDamage,
      cutRate,
      cutApplied: false,
      cutSourceName: "",
      cutAttackStyle: attackStyle,
    };
  }

  if (normalizedDamage <= 0) {
    return {
      damage: 0,
      cutRate,
      cutApplied: true,
      cutSourceName: enemy?.name ?? "",
      cutAttackStyle: attackStyle,
    };
  }

  return {
    damage: Math.max(1, Math.floor(normalizedDamage * cutRate)),
    cutRate,
    cutApplied: true,
    cutSourceName: enemy?.name ?? "",
    cutAttackStyle: attackStyle,
  };
}

function getEntityAttribute(entity) {
  if (!entity || typeof entity !== "object") return "";
  if (typeof entity.attribute === "string" && entity.attribute.trim()) {
    return entity.attribute.trim();
  }
  if (typeof entity.subtitle === "string") {
    const match = entity.subtitle.match(/属性:\s*([^/\s]+)/);
    if (match && match[1]) {
      return String(match[1]).trim();
    }
  }
  return "";
}

function hasAttributeAdvantage(attackerAttribute, defenderAttribute) {
  if (!attackerAttribute || !defenderAttribute) return false;
  const advantageTargets = ATTRIBUTE_ADVANTAGE_TABLE[attackerAttribute];
  return Array.isArray(advantageTargets) && advantageTargets.includes(defenderAttribute);
}

function getAttributeDamageRate(attackerEntity, defenderEntity) {
  const attackerAttribute = getEntityAttribute(attackerEntity);
  const defenderAttribute = getEntityAttribute(defenderEntity);
  if (!attackerAttribute || !defenderAttribute || attackerAttribute === defenderAttribute) {
    return ATTRIBUTE_NEUTRAL_RATE;
  }
  if (hasAttributeAdvantage(attackerAttribute, defenderAttribute)) {
    return ATTRIBUTE_ADVANTAGE_RATE;
  }
  if (hasAttributeAdvantage(defenderAttribute, attackerAttribute)) {
    return ATTRIBUTE_DISADVANTAGE_RATE;
  }
  return ATTRIBUTE_NEUTRAL_RATE;
}

function getAttributeMatchupLabel(attackerEntity, defenderEntity) {
  const attributeRate = getAttributeDamageRate(attackerEntity, defenderEntity);
  if (attributeRate > ATTRIBUTE_NEUTRAL_RATE) return "有利";
  if (attributeRate < ATTRIBUTE_NEUTRAL_RATE) return "不利";
  return "";
}

function getPlayerPerspectiveAttributeLabel(attackerEntity, defenderEntity, attackerIsPlayer = true) {
  const matchupLabel = getAttributeMatchupLabel(attackerEntity, defenderEntity);
  if (!matchupLabel) return "";
  if (attackerIsPlayer) {
    return matchupLabel === "有利" ? "味方有利" : "敵有利";
  }
  return matchupLabel === "有利" ? "敵有利" : "味方有利";
}

function getAttributeLogSuffix(attackerEntity, defenderEntity, attackerIsPlayer = true) {
  const perspectiveLabel = getPlayerPerspectiveAttributeLabel(attackerEntity, defenderEntity, attackerIsPlayer);
  if (!perspectiveLabel) return "";
  return ` （属性:${perspectiveLabel}）`;
}

function calculatePlayerDamage(card, slotId, attackType, enemy, options = {}) {
  const { magicBoostRate = 1, physicalBoostRate = 1, forceIgnoreDefense = false } = options;
  const isMagicAttack = attackType === "magic" || attackType === "ancientMagic";
  const outgoingAttackStyle = isMagicAttack ? "magic" : "physical";
  const divineRate = roll(90, 110) / 100;
  const slotRate = getPlayerSlotAttackRate(slotId, attackType, card);

  const basePower =
    isMagicAttack
      ? card.stats.mag * 2.05 + card.stats.luk * 0.35
      : card.stats.atk * 2.05 + card.stats.spd * 0.28;

  const defenseIgnored = attackType === "magic" || forceIgnoreDefense;
  const enemyGuard = defenseIgnored ? 0 : enemy.stats.def * 0.86;

  let critical = false;
  let critRate = 1;
  const critStat = isMagicAttack ? card.stats.luk : card.stats.spd;
  const baseCriticalRate = getBaseCriticalRate(critStat);
  const luckAdvantageBonus = card.stats.luk > enemy.stats.luk ? 0.1 : 0;
  const finalCriticalRate = Math.min(1, baseCriticalRate + luckAdvantageBonus);

  if (Math.random() < finalCriticalRate) {
    critical = true;
    critRate = isMagicAttack ? 1.35 : 1.3;
  }

  const fifthTurnPhysicalCriticalRate =
    critical && (attackType === "physical" || attackType === "berserkerRage") && isCycleTurn(5)
      ? PLAYER_PHYSICAL_CRIT_BONUS_ON_5TH_TURN
      : 1;
  const moraleRate = getOutgoingDamageMoraleRate(attackType);
  const magicAttackRate = isMagicAttack ? Math.max(1, magicBoostRate) : 1;
  const fourthTurnMeleeJobRate = getFourthTurnMeleeJobPhysicalBoostRate(card, attackType);
  const namiIzayaAttackRate = getNamiIzayaAttackRate(card, attackType);
  const madokasuIzayaAttackRate = getMadokasuIzayaAttackRate(card, attackType);
  const zeoliteLastStandRate = getZeoliteLastStandAttackRate(card);
  const warriorMoraleBase =
    !isMagicAttack && hasJobTag(card, "ウォーリア") ? Math.max(0, Math.floor(state.morale)) : 0;
  const warriorMoraleRate =
    warriorMoraleBase > 0 && canTriggerVolgramArianaWarriorMoraleBoost(card, attackType)
      ? PLAYER_VOLGRAM_ARIANA_WARRIOR_MORALE_RATE
      : 1;
  const warriorMoraleBonus = Math.max(0, Math.floor(warriorMoraleBase * warriorMoraleRate));
  const attackBoostRate = isMagicAttack
    ? 1
    : Math.max(1, physicalBoostRate) *
      Math.max(1, fourthTurnMeleeJobRate) *
      Math.max(1, namiIzayaAttackRate) *
      Math.max(1, madokasuIzayaAttackRate);

  const baseDamage = Math.max(
    18,
    Math.floor((basePower - enemyGuard) * divineRate * slotRate * critRate * fifthTurnPhysicalCriticalRate)
  );
  const afterMoraleDamage = Math.max(1, Math.floor(baseDamage * moraleRate));
  const afterTypeBoostDamage = Math.max(1, Math.floor(afterMoraleDamage * attackBoostRate));
  const afterMagicBoost = Math.max(1, Math.floor(afterTypeBoostDamage * magicAttackRate));
  const afterWarriorMoraleBonus = Math.max(1, Math.floor(afterMagicBoost + warriorMoraleBonus));
  const afterZeoliteLastStandDamage = Math.max(1, Math.floor(afterWarriorMoraleBonus * zeoliteLastStandRate));
  const attributeRate = getAttributeDamageRate(card, enemy);
  const afterAttributeDamage = Math.max(1, Math.floor(afterZeoliteLastStandDamage * attributeRate));
  const enemyDamageCut = applyEnemyPlayerAttackCut(afterAttributeDamage, enemy, outgoingAttackStyle);
  const damage = enemyDamageCut.damage;
  const foundationDamage = Math.max(1, Math.floor(Math.max(1, basePower - enemyGuard)));
  const afterDivine = Math.max(1, Math.floor(foundationDamage * divineRate));
  const afterSlot = Math.max(1, Math.floor(afterDivine * slotRate));
  const afterCritical = Math.max(1, Math.floor(afterSlot * critRate * fifthTurnPhysicalCriticalRate));
  const afterMorale = Math.max(1, Math.floor(Math.max(18, afterCritical) * moraleRate));
  const afterAttackBoost = Math.max(1, Math.floor(afterMorale * attackBoostRate));

  return {
    damage,
    critical,
    breakdown: {
      foundationDamage,
      afterDivine,
      afterSlot,
      afterCritical,
      afterMorale,
      divineRate,
      slotRate,
      criticalRate: critRate,
      fifthRate: fifthTurnPhysicalCriticalRate,
      moraleRate,
      attackBoostRate,
      namiIzayaAttackRate,
      madokasuIzayaAttackRate,
      magicAttackRate,
      afterAttackBoost,
      afterMagicBoost,
      warriorMoraleRate,
      warriorMoraleBonus,
      afterWarriorMoraleBonus,
      zeoliteLastStandRate,
      afterZeoliteLastStandDamage,
      attributeRate,
      afterAttributeDamage,
      enemyDamageCutRate: enemyDamageCut.cutRate,
      enemyDamageCutApplied: enemyDamageCut.cutApplied,
      enemyDamageCutSourceName: enemyDamageCut.cutSourceName,
      enemyDamageCutAttackStyle: enemyDamageCut.cutAttackStyle,
      afterEnemyDamageCut: enemyDamageCut.damage,
      defenseIgnored,
      attackType,
    },
  };
}

function getOutgoingDamageMoraleRate(attackType) {
  if (state.morale >= 500) return 1.3;
  if (state.morale >= 200) return 1.2;
  if (state.morale >= 100) return 1.1;
  if ((attackType === "physical" || attackType === "berserkerRage") && state.morale <= 25) return 0.5;
  return 1;
}

function getIncomingDamageMoraleRate() {
  return state.morale <= PLAYER_MORALE_MIN ? 2 : 1;
}

function isLeaderCard(card) {
  return Boolean(card && LEADER_CARD_IDS.has(card.id));
}

function tryConsumePlayerMp(cost) {
  if (cost <= 0) return true;
  if (state.mp < cost) return false;
  state.mp = Math.max(0, state.mp - cost);
  return true;
}

function getMpRecoveryForTurnEnd() {
  let mpRecovery = PLAYER_MP_BASE_RECOVERY;
  const rearCard = state.board.rear;
  const strategistCard = state.board.strategist;

  if (rearCard) {
    mpRecovery += PLAYER_MP_REAR_RECOVERY;
    if (isPriestLike(rearCard)) {
      mpRecovery += PLAYER_MP_REAR_PRIEST_RECOVERY;
    }
    if (isCharacterCard(rearCard, PLAYER_NAMI_CHARACTER_ID)) {
      mpRecovery += PLAYER_NAMI_MP_RECOVERY_BONUS;
    }
  }

  if (strategistCard) {
    mpRecovery += PLAYER_MP_STRATEGIST_RECOVERY;
    if (isCharacterCard(strategistCard, PLAYER_NAMI_CHARACTER_ID)) {
      mpRecovery += PLAYER_NAMI_MP_RECOVERY_BONUS;
    }
    if (isCharacterCard(strategistCard, PLAYER_ELDAS_CHARACTER_ID)) {
      mpRecovery += PLAYER_ELDAS_STRATEGIST_MP_RECOVERY_BONUS;
    }
  }

  return mpRecovery;
}

function updateMoraleForTurnEnd() {
  const frontCard = state.board.front;
  const generalCard = state.board.general;
  let moraleDelta = -5;

  if (frontCard) {
    moraleDelta += isLeaderCard(frontCard) ? PLAYER_FRONT_LEADER_MORALE_GAIN : PLAYER_FRONT_MORALE_GAIN;
  }
  if (generalCard) {
    moraleDelta += isLeaderCard(generalCard) ? PLAYER_GENERAL_LEADER_MORALE_GAIN : PLAYER_GENERAL_MORALE_GAIN;
  }

  state.morale = Math.max(
    PLAYER_MORALE_MIN,
    Math.min(PLAYER_MORALE_MAX, state.morale + moraleDelta)
  );

  const mpRecovery = getMpRecoveryForTurnEnd();
  state.mp = Math.max(0, Math.min(PLAYER_MP_MAX, state.mp + mpRecovery));
}

function getBaseCriticalRate(statValue) {
  if (statValue <= 85) return 0.1;
  if (statValue <= 90) return lerpRate(0.1, 0.2, (statValue - 85) / 5);
  if (statValue <= 95) return lerpRate(0.2, 0.25, (statValue - 90) / 5);
  if (statValue <= 100) return lerpRate(0.25, 0.3, (statValue - 95) / 5);
  if (statValue <= 105) return lerpRate(0.3, 0.35, (statValue - 100) / 5);
  return 0.4;
}

function lerpRate(minRate, maxRate, t) {
  const clamped = Math.max(0, Math.min(1, t));
  return minRate + (maxRate - minRate) * clamped;
}

function calculateLegionAttackDamage(card, slotId, enemy) {
  const physicalDamageResult = calculatePlayerDamage(card, slotId, "physical", enemy);
  const magicDamageResult = calculatePlayerDamage(card, slotId, "magic", enemy, {
    magicBoostRate: PLAYER_MAGIC_ATTACK_DAMAGE_RATE * getBacklineMinstrelMagicSupportRate(),
  });
  const physicalDamage = physicalDamageResult.damage;
  const magicDamage = magicDamageResult.damage;
  const moraleBonus = Math.max(0, Math.floor(state.morale));
  const magicPortion = magicDamage;
  const baseDamage = Math.max(1, Math.floor(physicalDamage + magicDamage + moraleBonus));
  const leaderBoostApplied = isLeaderCard(card);
  const leaderBoostRate = leaderBoostApplied ? 2 : 1;
  const damage = Math.max(1, Math.floor(baseDamage * leaderBoostRate));
  return {
    damage,
    physicalDamage,
    magicDamage,
    moraleBonus,
    leaderBoostApplied,
    leaderBoostRate,
    breakdown: {
      type: "legion",
      physicalDamage,
      magicPortion,
      moraleBonus,
      leaderBoostApplied,
      leaderBoostRate,
      afterLeaderBoostDamage: damage,
      finalDamage: damage,
    },
  };
}

function calculateLifeBurstDamage(card, slotId, enemy) {
  const normalAttack = calculatePlayerDamage(card, slotId, "physical", enemy);
  const missingHp = Math.max(0, getPlayerMaxHp() - state.playerHp);
  const lifeBurstBonus = getLifeBurstBonus();
  const damage = Math.max(1, Math.floor(normalAttack.damage + lifeBurstBonus));
  return {
    damage,
    critical: Boolean(normalAttack.critical),
    breakdown: {
      type: "lifeBurst",
      normalDamage: normalAttack.damage,
      lifeBurstBonus,
      missingHp,
      finalDamage: damage,
    },
  };
}

function calculateBerserkerRageDamage(card, enemy) {
  const atk = Math.max(0, Math.floor(card?.stats?.atk ?? 0));
  const madokasuIzayaAttackRate = getMadokasuIzayaAttackRate(card, "berserkerRage");
  const bonusFromAtk = Math.max(
    0,
    Math.floor((atk - PLAYER_BERSERKER_RAGE_ATK_BASE) * PLAYER_BERSERKER_RAGE_ATK_BONUS_RATE)
  );
  const beforeDefenseDamage = Math.max(1, PLAYER_BERSERKER_RAGE_BASE_DAMAGE + bonusFromAtk);
  const enemyGuard = Math.max(0, Math.floor(Math.max(0, enemy?.stats?.def ?? 0) * 0.86));
  const afterDefenseDamage = Math.max(1, Math.floor(beforeDefenseDamage - enemyGuard));
  const afterMadokasuIzayaBoostDamage = Math.max(
    1,
    Math.floor(afterDefenseDamage * Math.max(1, madokasuIzayaAttackRate))
  );
  const enemyDamageCut = applyEnemyPlayerAttackCut(afterMadokasuIzayaBoostDamage, enemy, "physical");
  const beforeBerserkerSwayDamage = enemyDamageCut.damage;
  const berserkerSwayApplied = beforeBerserkerSwayDamage >= PLAYER_BERSERKER_RAGE_SWAY_TRIGGER_DAMAGE;
  const berserkerSwayValue = berserkerSwayApplied
    ? roll(PLAYER_BERSERKER_RAGE_SWAY_MIN, PLAYER_BERSERKER_RAGE_SWAY_MAX)
    : 0;
  const damage = berserkerSwayApplied
    ? Math.max(1, beforeBerserkerSwayDamage + berserkerSwayValue)
    : beforeBerserkerSwayDamage;

  return {
    damage,
    critical: false,
    breakdown: {
      type: "berserkerRageFormula",
      baseDamage: PLAYER_BERSERKER_RAGE_BASE_DAMAGE,
      atk,
      rawAtk: atk,
      madokasuIzayaAttackRate,
      atkBase: PLAYER_BERSERKER_RAGE_ATK_BASE,
      atkBonusRate: PLAYER_BERSERKER_RAGE_ATK_BONUS_RATE,
      bonusFromAtk,
      beforeDefenseDamage,
      enemyGuard,
      afterDefenseDamage,
      afterMadokasuIzayaBoostDamage,
      beforeEnemyDamageCut: afterMadokasuIzayaBoostDamage,
      enemyDamageCutRate: enemyDamageCut.cutRate,
      enemyDamageCutApplied: enemyDamageCut.cutApplied,
      enemyDamageCutSourceName: enemyDamageCut.cutSourceName,
      enemyDamageCutAttackStyle: enemyDamageCut.cutAttackStyle,
      afterEnemyDamageCut: enemyDamageCut.damage,
      beforeBerserkerSwayDamage,
      berserkerSwayApplied,
      berserkerSwayValue,
      berserkerSwayThreshold: PLAYER_BERSERKER_RAGE_SWAY_TRIGGER_DAMAGE,
      berserkerSwayMin: PLAYER_BERSERKER_RAGE_SWAY_MIN,
      berserkerSwayMax: PLAYER_BERSERKER_RAGE_SWAY_MAX,
      afterBerserkerSwayDamage: damage,
      finalDamage: damage,
    },
  };
}

function calculateMagicSwordDamage(card, slotId, enemy) {
  const physicalDamageResult = calculatePlayerDamage(card, slotId, "physical", enemy);
  const magicDamageResult = calculatePlayerDamage(card, slotId, "magic", enemy, {
    magicBoostRate: getCurrentMagicAttackRate(),
  });
  const physicalDamage = physicalDamageResult.damage;
  const magicDamage = magicDamageResult.damage;
  const damage = Math.max(1, Math.floor(physicalDamage + magicDamage));
  return {
    damage,
    critical: Boolean(physicalDamageResult.critical || magicDamageResult.critical),
    breakdown: {
      type: "magicSword",
      physicalDamage,
      magicDamage,
      finalDamage: damage,
    },
  };
}

function calculateSpellbladeDamage(card, slotId, enemy) {
  const physicalDamageResult = calculatePlayerDamage(card, slotId, "physical", enemy);
  const magicDamageResult = calculatePlayerDamage(card, slotId, "magic", enemy, {
    magicBoostRate: PLAYER_MAGIC_ATTACK_DAMAGE_RATE * getBacklineMinstrelMagicSupportRate(),
  });
  const physicalDamage = physicalDamageResult.damage;
  const magicDamage = magicDamageResult.damage;
  const combinedDamage = Math.max(1, Math.floor(physicalDamage + magicDamage));
  const damage = Math.max(1, Math.floor(combinedDamage * PLAYER_SPELLBLADE_DAMAGE_RATE));
  return {
    damage,
    critical: Boolean(physicalDamageResult.critical || magicDamageResult.critical),
    breakdown: {
      type: "spellblade",
      physicalDamage,
      magicDamage,
      spellbladeRate: PLAYER_SPELLBLADE_DAMAGE_RATE,
      finalDamage: damage,
    },
  };
}

function playPlayerAttackEffect(
  card,
  slotId,
  damage,
  attackType = "physical",
  criticalHit = false,
  options = {}
) {
  if (!damage || damage <= 0) return;

  const { delayMs = 0, hitLabel = "", autoScroll = true, breakdown = null } = options;
  const sourceEl = boardSlotElements[slotId];
  const targetEl = enemyArtSlotEl ?? enemyArtImageEl;

  playAttackEffectVisual({
    sourceEl,
    targetEl,
    imageSrc: PLAYER_CARD_IMAGE_BY_ID[card.id] ?? "",
    actorName: card.name,
    damage,
    attackType,
    criticalHit,
    delayMs,
    hitLabel,
    autoScroll,
    breakdown,
    lancelateAura: Boolean(card && card.id === PLAYER_LANCELATE_PREEMPTIVE_CARD_ID),
  });

  if (enemyArtSlotEl) {
    const runFlash = () => {
      const flashClass = criticalHit ? "enemy-critical-hit-flash" : "enemy-hit-flash";
      flashElement(enemyArtSlotEl, flashClass, criticalHit ? 700 : 520);
    };
    if (delayMs > 0) {
      window.setTimeout(runFlash, delayMs);
    } else {
      runFlash();
    }
  }
}

function showLancelatePreemptiveEffect(card, slotId, options = {}) {
  if (!card || !slotId) return 0;

  const sourceEl = boardSlotElements[slotId];
  if (!sourceEl) return 0;

  const durationMs = Math.max(360, Math.floor(options.durationMs ?? LANCELATE_PREEMPTIVE_EFFECT_MS));
  const sourceRect = sourceEl.getBoundingClientRect();
  if (!sourceRect.width || !sourceRect.height) return 0;

  const centerX = sourceRect.left + sourceRect.width / 2;
  const centerY = sourceRect.top + sourceRect.height / 2;
  flashElement(sourceEl, "lancelate-preemptive-glow", durationMs);

  const layer = document.createElement("div");
  layer.className = "battle-fx-layer";

  const preemptiveFx = document.createElement("div");
  preemptiveFx.className = "attack-fx-lancelate-preemptive";
  preemptiveFx.style.left = `${centerX}px`;
  preemptiveFx.style.top = `${centerY}px`;
  preemptiveFx.style.setProperty("--lancelate-preemptive-duration", `${durationMs}ms`);

  const auraOuter = document.createElement("div");
  auraOuter.className = "attack-fx-lancelate-aura outer";
  const auraInner = document.createElement("div");
  auraInner.className = "attack-fx-lancelate-aura inner";
  const halo = document.createElement("div");
  halo.className = "attack-fx-lancelate-halo";
  const cardHover = document.createElement("div");
  cardHover.className = "attack-fx-lancelate-card";

  const cardImage = document.createElement("img");
  cardImage.src = PLAYER_CARD_IMAGE_BY_ID[card.id] ?? "";
  cardImage.alt = `${card.name} の先制演出`;
  cardHover.appendChild(cardImage);

  preemptiveFx.append(auraOuter, auraInner, halo, cardHover);
  layer.appendChild(preemptiveFx);
  document.body.appendChild(layer);

  window.setTimeout(() => {
    layer.remove();
  }, durationMs + 220);

  return durationMs;
}

function showLunaStarWisdomEffect(card, slotId, options = {}) {
  if (!card || !slotId) return 0;

  const sourceEl = boardSlotElements[slotId];
  if (!sourceEl) return 0;

  const durationMs = Math.max(520, Math.floor(options.durationMs ?? LUNA_STAR_WISDOM_EFFECT_MS));
  const sourceRect = sourceEl.getBoundingClientRect();
  if (!sourceRect.width || !sourceRect.height) return 0;

  const centerX = sourceRect.left + sourceRect.width / 2;
  const centerY = sourceRect.top + sourceRect.height / 2;
  flashElement(sourceEl, "luna-star-wisdom-glow", Math.floor(durationMs * 0.82));

  const layer = document.createElement("div");
  layer.className = "battle-fx-layer";

  const sparkleFx = document.createElement("div");
  sparkleFx.className = "attack-fx-luna-sparkle";
  sparkleFx.style.left = `${centerX}px`;
  sparkleFx.style.top = `${centerY}px`;
  sparkleFx.style.setProperty("--luna-sparkle-duration", `${durationMs}ms`);

  const aura = document.createElement("div");
  aura.className = "attack-fx-luna-sparkle-aura";
  const ring = document.createElement("div");
  ring.className = "attack-fx-luna-sparkle-ring";
  const core = document.createElement("div");
  core.className = "attack-fx-luna-sparkle-core";
  sparkleFx.append(aura, ring, core);

  const sparkCount = 18;
  for (let idx = 0; idx < sparkCount; idx += 1) {
    const spark = document.createElement("span");
    spark.className = "attack-fx-luna-spark";
    const angle = (360 / sparkCount) * idx + (Math.random() * 14 - 7);
    const distance = 56 + Math.random() * 70;
    const size = 5 + Math.random() * 9;
    const delay = Math.floor(Math.random() * durationMs * 0.35);
    spark.style.setProperty("--spark-angle", `${angle}deg`);
    spark.style.setProperty("--spark-distance", `${distance}px`);
    spark.style.setProperty("--spark-size", `${size}px`);
    spark.style.setProperty("--spark-delay", `${delay}ms`);
    sparkleFx.appendChild(spark);
  }

  const cardHover = document.createElement("div");
  cardHover.className = "attack-fx-luna-sparkle-card";
  const cardImage = document.createElement("img");
  cardImage.src = PLAYER_CARD_IMAGE_BY_ID[card.id] ?? "";
  cardImage.alt = `${card.name} の星導演出`;
  cardHover.appendChild(cardImage);
  sparkleFx.appendChild(cardHover);

  layer.appendChild(sparkleFx);
  document.body.appendChild(layer);

  window.setTimeout(() => {
    layer.remove();
  }, durationMs + 220);

  return durationMs;
}

function triggerBerserkerScreenShake(durationMs = BERSERKER_SCREEN_SHAKE_MS) {
  if (!document.body) return;
  document.body.style.setProperty("--berserker-screen-shake-ms", `${Math.max(240, Math.floor(durationMs))}ms`);
  document.body.classList.remove("berserker-screen-shake");
  void document.body.offsetWidth;
  document.body.classList.add("berserker-screen-shake");
  window.setTimeout(() => {
    if (!document.body) return;
    document.body.classList.remove("berserker-screen-shake");
  }, Math.max(260, Math.floor(durationMs)));
}

function showBerserkerRageEffect(card, slotId, options = {}) {
  if (!card || !slotId) return 0;

  const sourceEl = boardSlotElements[slotId];
  if (!sourceEl) return 0;

  const durationMs = Math.max(420, Math.floor(options.durationMs ?? BERSERKER_RAGE_EFFECT_MS));
  const sourceRect = sourceEl.getBoundingClientRect();
  if (!sourceRect.width || !sourceRect.height) return 0;

  const centerX = sourceRect.left + sourceRect.width / 2;
  const centerY = sourceRect.top + sourceRect.height / 2;
  flashElement(sourceEl, "berserker-rage-glow", durationMs);
  triggerBerserkerScreenShake(Math.min(durationMs, BERSERKER_SCREEN_SHAKE_MS));

  const layer = document.createElement("div");
  layer.className = "battle-fx-layer";

  const rageFx = document.createElement("div");
  rageFx.className = "attack-fx-berserker-rage";
  rageFx.style.left = `${centerX}px`;
  rageFx.style.top = `${centerY}px`;
  rageFx.style.setProperty("--berserker-rage-duration", `${durationMs}ms`);

  const aura = document.createElement("div");
  aura.className = "attack-fx-berserker-aura";
  const flare = document.createElement("div");
  flare.className = "attack-fx-berserker-flare";
  const cardHover = document.createElement("div");
  cardHover.className = "attack-fx-berserker-card";

  const cardImage = document.createElement("img");
  cardImage.src = PLAYER_CARD_IMAGE_BY_ID[card.id] ?? "";
  cardImage.alt = `${card.name} の狂戦士演出`;
  cardHover.appendChild(cardImage);

  rageFx.append(aura, flare, cardHover);
  layer.appendChild(rageFx);
  document.body.appendChild(layer);

  window.setTimeout(() => {
    layer.remove();
  }, durationMs + 220);

  return durationMs;
}

function showZeoliteLastStandEffect(card, slotId, options = {}) {
  if (!card || !slotId) return 0;

  const sourceEl = boardSlotElements[slotId];
  if (!sourceEl || !document.body) return 0;

  const durationMs = Math.max(520, Math.floor(options.durationMs ?? ZEOLITE_LAST_STAND_EFFECT_MS));
  const sourceRect = sourceEl.getBoundingClientRect();
  if (!sourceRect.width || !sourceRect.height) return 0;

  const centerX = sourceRect.left + sourceRect.width / 2;
  const centerY = sourceRect.top + sourceRect.height / 2;
  flashElement(sourceEl, "zeolite-last-stand-glow", durationMs);

  document.body.style.setProperty("--zeolite-last-stand-ms", `${durationMs}ms`);
  document.body.classList.remove("zeolite-last-stand-sky");
  void document.body.offsetWidth;
  document.body.classList.add("zeolite-last-stand-sky");
  window.setTimeout(() => {
    if (!document.body) return;
    document.body.classList.remove("zeolite-last-stand-sky");
  }, durationMs + 180);

  const layer = document.createElement("div");
  layer.className = "battle-fx-layer";

  const zealFx = document.createElement("div");
  zealFx.className = "attack-fx-zeolite-last-stand";
  zealFx.style.left = `${centerX}px`;
  zealFx.style.top = `${centerY}px`;
  zealFx.style.setProperty("--zeolite-last-stand-duration", `${durationMs}ms`);

  const aura = document.createElement("div");
  aura.className = "attack-fx-zeolite-last-stand-aura";
  const flare = document.createElement("div");
  flare.className = "attack-fx-zeolite-last-stand-flare";
  const cardHover = document.createElement("div");
  cardHover.className = "attack-fx-zeolite-last-stand-card";

  const cardImage = document.createElement("img");
  cardImage.src = PLAYER_CARD_IMAGE_BY_ID[card.id] ?? "";
  cardImage.alt = `${card.name} の背水演出`;
  cardHover.appendChild(cardImage);

  zealFx.append(aura, flare, cardHover);
  layer.appendChild(zealFx);
  document.body.appendChild(layer);

  window.setTimeout(() => {
    layer.remove();
  }, durationMs + 220);

  return durationMs;
}

function showMinstrelRelayEffect(minstrelCard, minstrelSlotId, casterSlotId, options = {}) {
  if (!minstrelCard || !minstrelSlotId || !casterSlotId) return 0;

  const { durationMs = MINSTREL_RELAY_EFFECT_MS, startDelayMs = 0 } = options;
  const minstrelEl = boardSlotElements[minstrelSlotId];
  const casterEl = boardSlotElements[casterSlotId];
  if (!minstrelEl || !casterEl) return 0;

  const runRelayEffect = () => {
    flashElement(minstrelEl, "minstrel-relay-source-flash", Math.floor(durationMs * 0.72));
    if (minstrelEl !== casterEl) {
      window.setTimeout(() => {
        flashElement(casterEl, "minstrel-relay-target-flash", Math.floor(durationMs * 0.58));
      }, Math.floor(durationMs * 0.4));
    }

    if (minstrelEl === casterEl) return;

    const minstrelRect = minstrelEl.getBoundingClientRect();
    const casterRect = casterEl.getBoundingClientRect();
    if (!minstrelRect.width || !casterRect.width) return;

    const startX = minstrelRect.left + minstrelRect.width / 2;
    const startY = minstrelRect.top + minstrelRect.height / 2;
    const endX = casterRect.left + casterRect.width / 2;
    const endY = casterRect.top + casterRect.height / 2;
    const dx = endX - startX;
    const dy = endY - startY;
    const distance = Math.max(8, Math.hypot(dx, dy));
    const angle = Math.atan2(dy, dx);

    const layer = document.createElement("div");
    layer.className = "battle-fx-layer";

    const relayEffect = document.createElement("div");
    relayEffect.className = "attack-fx-enchant-link minstrel-relay";
    relayEffect.style.setProperty("--enchant-link-duration", `${durationMs}ms`);
    relayEffect.style.setProperty("--enchant-line-angle", `${angle}rad`);

    const minstrelNode = document.createElement("div");
    minstrelNode.className = "attack-fx-enchant-node strategist";
    minstrelNode.style.left = `${startX}px`;
    minstrelNode.style.top = `${startY}px`;

    const casterNode = document.createElement("div");
    casterNode.className = "attack-fx-enchant-node attacker";
    casterNode.style.left = `${endX}px`;
    casterNode.style.top = `${endY}px`;

    const relayLine = document.createElement("div");
    relayLine.className = "attack-fx-enchant-line";
    relayLine.style.left = `${startX}px`;
    relayLine.style.top = `${startY}px`;
    relayLine.style.width = `${distance}px`;

    const relaySpark = document.createElement("div");
    relaySpark.className = "attack-fx-enchant-spark";
    relaySpark.style.left = `${endX}px`;
    relaySpark.style.top = `${endY}px`;

    relayEffect.append(minstrelNode, casterNode, relayLine, relaySpark);
    layer.appendChild(relayEffect);
    document.body.appendChild(layer);

    window.setTimeout(() => {
      layer.remove();
    }, durationMs + 240);
  };

  if (startDelayMs > 0) {
    window.setTimeout(runRelayEffect, startDelayMs);
  } else {
    runRelayEffect();
  }

  return startDelayMs + durationMs;
}

function showStrategistEnchantLinkEffect(strategistCard, attacker, attackerSlotId, options = {}) {
  if (!strategistCard || !attacker || !attackerSlotId) return 0;

  const { durationMs = STRATEGIST_ENCHANT_LINK_EFFECT_MS, startDelayMs = 0 } = options;
  const strategistEl = boardSlotElements.strategist;
  const attackerEl = boardSlotElements[attackerSlotId];
  if (!strategistEl || !attackerEl) return 0;

  const strategistRect = strategistEl.getBoundingClientRect();
  const attackerRect = attackerEl.getBoundingClientRect();
  if (!strategistRect.width || !attackerRect.width) return 0;

  const startX = strategistRect.left + strategistRect.width / 2;
  const startY = strategistRect.top + strategistRect.height / 2;
  const endX = attackerRect.left + attackerRect.width / 2;
  const endY = attackerRect.top + attackerRect.height / 2;
  const dx = endX - startX;
  const dy = endY - startY;
  const distance = Math.max(8, Math.hypot(dx, dy));
  const angle = Math.atan2(dy, dx);

  const runLinkEffect = () => {
    flashElement(strategistEl, "enchant-link-source-flash", Math.floor(durationMs * 0.58));
    window.setTimeout(() => {
      flashElement(attackerEl, "enchant-link-target-flash", Math.floor(durationMs * 0.58));
    }, Math.floor(durationMs * 0.32));

    const layer = document.createElement("div");
    layer.className = "battle-fx-layer";

    const linkEffect = document.createElement("div");
    linkEffect.className = "attack-fx-enchant-link";
    linkEffect.style.setProperty("--enchant-link-duration", `${durationMs}ms`);
    linkEffect.style.setProperty("--enchant-line-angle", `${angle}rad`);

    const strategistNode = document.createElement("div");
    strategistNode.className = "attack-fx-enchant-node strategist";
    strategistNode.style.left = `${startX}px`;
    strategistNode.style.top = `${startY}px`;

    const attackerNode = document.createElement("div");
    attackerNode.className = "attack-fx-enchant-node attacker";
    attackerNode.style.left = `${endX}px`;
    attackerNode.style.top = `${endY}px`;

    const linkLine = document.createElement("div");
    linkLine.className = "attack-fx-enchant-line";
    linkLine.style.left = `${startX}px`;
    linkLine.style.top = `${startY}px`;
    linkLine.style.width = `${distance}px`;

    const linkSpark = document.createElement("div");
    linkSpark.className = "attack-fx-enchant-spark";
    linkSpark.style.left = `${endX}px`;
    linkSpark.style.top = `${endY}px`;

    linkEffect.append(strategistNode, attackerNode, linkLine, linkSpark);
    layer.appendChild(linkEffect);
    document.body.appendChild(layer);

    window.setTimeout(() => {
      layer.remove();
    }, durationMs + 240);
  };

  if (startDelayMs > 0) {
    window.setTimeout(runLinkEffect, startDelayMs);
  } else {
    runLinkEffect();
  }

  return startDelayMs + durationMs;
}

function showRearHealMagicEffect(card, options = {}) {
  if (!card) return 0;

  const { holy = false, healed = 0 } = options;
  const durationMs = holy ? HOLY_REAR_HEAL_MAGIC_EFFECT_MS : REAR_HEAL_MAGIC_EFFECT_MS;
  const healLabel = holy ? "神聖回復魔法" : "回復魔法";
  const holyCommentText = "聖なる力よ、全軍に癒しを・・・";
  const holyCommentHtml = holy ? `<p class="attack-fx-heal-comment">${holyCommentText}</p>` : "";
  const healedAmount = Math.max(0, Math.floor(healed));
  const layer = document.createElement("div");
  layer.className = "battle-fx-layer";

  const healDomain = document.createElement("div");
  healDomain.className = "attack-fx-heal-domain";
  if (holy) {
    healDomain.classList.add("holy");
  }
  healDomain.style.setProperty("--heal-domain-duration", `${durationMs}ms`);
  healDomain.innerHTML = `
    <div class="attack-fx-heal-aura" aria-hidden="true"></div>
    <div class="attack-fx-heal-prism" aria-hidden="true"></div>
    <div class="attack-fx-heal-ring outer" aria-hidden="true"></div>
    <div class="attack-fx-heal-ring middle" aria-hidden="true"></div>
    <div class="attack-fx-heal-ring inner" aria-hidden="true"></div>
    <svg class="attack-fx-heal-sigil" viewBox="0 0 100 100" aria-hidden="true">
      <circle class="ring outer" cx="50" cy="50" r="46"></circle>
      <circle class="ring middle" cx="50" cy="50" r="36"></circle>
      <circle class="ring inner" cx="50" cy="50" r="24"></circle>
      <path class="cross major" d="M50 18 L50 82 M18 50 L82 50"></path>
      <path class="cross minor" d="M50 27 L50 73 M27 50 L73 50"></path>
      <path class="glyph quarter" d="M50 10 Q66 12 78 22 Q88 34 90 50"></path>
      <path class="glyph quarter" d="M90 50 Q88 66 78 78 Q66 88 50 90"></path>
      <path class="glyph quarter" d="M50 90 Q34 88 22 78 Q12 66 10 50"></path>
      <path class="glyph quarter" d="M10 50 Q12 34 22 22 Q34 12 50 10"></path>
      <circle class="core" cx="50" cy="50" r="4.4"></circle>
    </svg>
    <p class="attack-fx-heal-label">${healLabel} +${healedAmount}</p>
    ${holyCommentHtml}
  `;

  layer.appendChild(healDomain);
  document.body.appendChild(layer);
  window.setTimeout(() => {
    layer.remove();
  }, durationMs + 220);

  return durationMs;
}

function showMagicBarrierActivationEffect(barrierEffect = null) {
  if (!barrierEffect) return 0;

  const isHoly = barrierEffect.type === "holy";
  const durationMs = isHoly ? HOLY_MAGIC_BARRIER_EFFECT_MS : MAGIC_BARRIER_EFFECT_MS;
  const layer = document.createElement("div");
  layer.className = "battle-fx-layer";

  const barrierDomain = document.createElement("div");
  barrierDomain.className = "attack-fx-barrier-domain";
  if (isHoly) {
    barrierDomain.classList.add("holy");
  }
  barrierDomain.style.setProperty("--barrier-domain-duration", `${durationMs}ms`);
  barrierDomain.innerHTML = `
    <div class="attack-fx-barrier-glow" aria-hidden="true"></div>
    <div class="attack-fx-barrier-ring outer" aria-hidden="true"></div>
    <div class="attack-fx-barrier-ring middle" aria-hidden="true"></div>
    <div class="attack-fx-barrier-ring inner" aria-hidden="true"></div>
    <svg class="attack-fx-barrier-sigil" viewBox="0 0 100 100" aria-hidden="true">
      <circle class="ring outer" cx="50" cy="50" r="45"></circle>
      <circle class="ring middle" cx="50" cy="50" r="37"></circle>
      <circle class="ring inner" cx="50" cy="50" r="28"></circle>
      <path class="sigil-star" d="M50 16 L73 60 L27 60 Z"></path>
      <path class="sigil-star" d="M50 84 L73 40 L27 40 Z"></path>
      <path class="sigil-cross" d="M50 18 L50 82 M18 50 L82 50 M31 31 L69 69 M69 31 L31 69"></path>
    </svg>
    <p class="attack-fx-barrier-label">${barrierEffect.name} 発動</p>
  `;

  layer.appendChild(barrierDomain);
  document.body.appendChild(layer);
  window.setTimeout(() => {
    layer.remove();
  }, durationMs + 220);

  return durationMs;
}

function playEnemyAttackEffect(enemyAction, damage, guardCritical = false, options = {}) {
  if (!enemyAction || !damage || damage <= 0) return;
  const { delayMs = 0 } = options;

  const sourceEl = enemyArtSlotEl ?? enemyArtImageEl;
  const targetEl = boardSlotElements[enemyAction.targetSlot];
  const currentEnemy = getCurrentEnemy();
  const enemyImageSrc = getEnemyImageSrc(currentEnemy.id);

  playAttackEffectVisual({
    sourceEl,
    targetEl,
    imageSrc: enemyImageSrc,
    actorName: currentEnemy.name,
    damage,
    attackType: enemyAction.attackType,
    incomingDamage: true,
    guardCritical,
    delayMs,
  });

  if (targetEl) {
    const runFlash = () => {
      const flashClass = guardCritical ? "guard-critical-flash" : "player-hit-flash";
      flashElement(targetEl, flashClass, guardCritical ? 700 : 520);
    };
    if (delayMs > 0) {
      window.setTimeout(runFlash, delayMs);
    } else {
      runFlash();
    }
  }
}

function playAttackEffectVisual({
  sourceEl,
  targetEl,
  imageSrc,
  actorName,
  damage,
  attackType = "physical",
  incomingDamage = false,
  criticalHit = false,
  guardCritical = false,
  delayMs = 0,
  hitLabel = "",
  autoScroll = true,
  breakdown = null,
  lancelateAura = false,
}) {
  const runEffect = () => {
    if (!sourceEl || !targetEl) return;

    const sourceRect = sourceEl.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();
    if (!sourceRect.width || !targetRect.width) return;

    const startX = sourceRect.left + sourceRect.width / 2;
    const startY = sourceRect.top + sourceRect.height / 2;
    const endX = targetRect.left + targetRect.width / 2;
    const endY = targetRect.top + targetRect.height / 2;
    const dx = endX - startX;
    const dy = endY - startY;

    const layer = document.createElement("div");
    layer.className = "battle-fx-layer";
    const isMagicBeamAttack = attackType === "magic" || attackType === "ancientMagic";

    if (isMagicBeamAttack) {
      const magicCaster = document.createElement("div");
      magicCaster.className = "attack-fx-caster";
      magicCaster.style.left = `${startX}px`;
      magicCaster.style.top = `${startY}px`;

      const casterImage = document.createElement("img");
      casterImage.src = imageSrc;
      casterImage.alt = `${actorName} の魔法演出`;
      magicCaster.appendChild(casterImage);

      if (criticalHit) {
        magicCaster.classList.add("critical-hit");
      }
      if (guardCritical) {
        magicCaster.classList.add("guard-critical");
      }
      if (incomingDamage) {
        magicCaster.classList.add("incoming-hit");
      }
      if (lancelateAura) {
        magicCaster.classList.add("lancelate-aura");
      }
      layer.appendChild(magicCaster);

      const beam = document.createElement("div");
      beam.className = "attack-fx-beam";
      beam.style.left = `${startX}px`;
      beam.style.top = `${startY}px`;
      beam.style.setProperty("--fx-angle", `${Math.atan2(dy, dx)}rad`);
      beam.style.setProperty("--fx-distance", `${Math.hypot(dx, dy)}px`);
      if (criticalHit) {
        beam.classList.add("critical-hit");
      }
      if (guardCritical) {
        beam.classList.add("guard-critical");
      }
      if (incomingDamage) {
        beam.classList.add("incoming-hit");
      }
      if (lancelateAura) {
        beam.classList.add("lancelate-aura");
      }
      layer.appendChild(beam);
    } else {
      const flyingCard = document.createElement("div");
      flyingCard.className = "attack-fx-card";
      flyingCard.style.left = `${startX}px`;
      flyingCard.style.top = `${startY}px`;
      flyingCard.style.setProperty("--fx-dx", `${dx}px`);
      flyingCard.style.setProperty("--fx-dy", `${dy}px`);

      const flyingImage = document.createElement("img");
      flyingImage.src = imageSrc;
      flyingImage.alt = `${actorName} の攻撃演出`;
      flyingCard.appendChild(flyingImage);
      if (criticalHit) {
        flyingCard.classList.add("critical-hit");
      }
      if (guardCritical) {
        flyingCard.classList.add("guard-critical");
      }
      if (attackType === "lifeBurst") {
        flyingCard.classList.add("life-burst-hit");
      }
      if (lancelateAura) {
        flyingCard.classList.add("lancelate-aura");
      }
      layer.appendChild(flyingCard);
    }

    const burst = document.createElement("div");
    burst.className = "attack-fx-burst";
    burst.style.left = `${endX}px`;
    burst.style.top = `${endY}px`;
    if (attackType === "legion") {
      burst.classList.add("legion-hit");
    } else if (attackType === "gale") {
      burst.classList.add("gale-hit");
    } else if (attackType === "reversal") {
      burst.classList.add("reversal-hit");
    } else if (attackType === "lifeBurst") {
      burst.classList.add("life-burst-hit");
    } else {
      burst.classList.add(isMagicBeamAttack ? "magic-hit" : "physical-hit");
    }
    if (criticalHit) {
      burst.classList.add("critical-hit");
    }
    if (guardCritical) {
      burst.classList.add("guard-critical");
    }
    if (lancelateAura) {
      burst.classList.add("lancelate-aura");
    }

    const damageText = document.createElement("p");
    damageText.className = "attack-fx-damage";
    damageText.textContent = incomingDamage ? `-${damage}` : `FINAL -${damage}`;
    const allyDamageDisplayY = Math.max(40, targetRect.top + 12);
    const enemyDamageDisplayY = Math.min(window.innerHeight - 48, targetRect.bottom + 22);
    damageText.style.left = `${endX}px`;
    damageText.style.top = `${incomingDamage ? allyDamageDisplayY : enemyDamageDisplayY}px`;
    if (attackType === "legion") {
      damageText.classList.add("legion-hit");
    } else if (attackType === "gale") {
      damageText.classList.add("gale-hit");
    } else if (attackType === "reversal") {
      damageText.classList.add("reversal-hit");
    } else if (attackType === "lifeBurst") {
      damageText.classList.add("life-burst-hit");
    }
    if (incomingDamage) {
      damageText.classList.add("incoming-hit");
    } else {
      damageText.classList.add("final-hit");
      damageText.classList.add("enemy-under-art");
    }
    if (criticalHit) {
      damageText.classList.add("critical-hit");
    }
    if (guardCritical) {
      damageText.classList.add("guard-critical");
    }

    layer.appendChild(burst);

    if (hitLabel) {
      const hitLabelEl = document.createElement("p");
      hitLabelEl.className = "attack-fx-hit-label";
      hitLabelEl.textContent = hitLabel;
      hitLabelEl.style.left = `${endX}px`;
      hitLabelEl.style.top = `${endY - 62}px`;
      if (criticalHit) {
        hitLabelEl.classList.add("critical-hit");
      }
      layer.appendChild(hitLabelEl);
    }

    layer.appendChild(damageText);
    document.body.appendChild(layer);

    window.setTimeout(() => layer.remove(), 2600);
  };

  const useMagicChantPhase =
    !incomingDamage &&
    (attackType === "magic" || attackType === "ancientMagic" || attackType === "spellblade" || attackType === "magicSword");
  const chantDelayMs = useMagicChantPhase ? getMagicChantDurationMs(attackType) : 0;
  const preAttackSteps = incomingDamage ? [] : buildPreAttackDamageSteps(damage, breakdown);
  const preAttackDelayMs = incomingDamage ? 0 : getPreAttackPreviewDurationMs(preAttackSteps.length);
  const effectEndEstimateMs =
    delayMs +
    chantDelayMs +
    preAttackDelayMs +
    (autoScroll ? ATTACK_AUTO_SCROLL_START_DELAY_MS : 0) +
    2600;
  state.combatFxReadyAt = Math.max(state.combatFxReadyAt, performance.now() + effectEndEstimateMs);

  if (useMagicChantPhase) {
    window.setTimeout(() => {
      showMagicChantPhase({
        sourceEl,
        imageSrc,
        actorName,
        attackType,
        criticalHit,
        guardCritical,
        chantDurationMs: chantDelayMs,
      });
    }, delayMs);
  }

  const runAfterScrollIfNeeded = () => {
    const scrolled =
      autoScroll && targetEl && scrollAttackTargetIntoViewIfNeeded(targetEl);
    if (scrolled) {
      window.setTimeout(runEffect, ATTACK_AUTO_SCROLL_START_DELAY_MS);
    } else {
      runEffect();
    }
  };

  const startAttackSequence = () => {
    if (!incomingDamage && preAttackSteps.length > 0) {
      showPreAttackDamagePreview({
        sourceEl,
        targetEl,
        steps: preAttackSteps,
        criticalHit,
        attackType,
      });
      window.setTimeout(runAfterScrollIfNeeded, preAttackDelayMs);
      return;
    }

    runAfterScrollIfNeeded();
  };

  window.setTimeout(startAttackSequence, delayMs + chantDelayMs);
}

function scrollAttackTargetIntoViewIfNeeded(targetEl) {
  if (!targetEl) return false;

  const rect = targetEl.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const isWithinVerticalViewport =
    rect.top >= ATTACK_AUTO_SCROLL_PADDING_PX &&
    rect.bottom <= viewportHeight - ATTACK_AUTO_SCROLL_PADDING_PX;

  if (isWithinVerticalViewport) return false;

  targetEl.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
  return true;
}

function createSpellbladeChantGlyph({
  chantDurationMs = MAGIC_CHANT_STAGE_MS,
  criticalHit = false,
} = {}) {
  const spellbladeGlyph = document.createElement("div");
  spellbladeGlyph.className = "attack-fx-spellblade-glyph";
  if (criticalHit) {
    spellbladeGlyph.classList.add("critical-hit");
  }

  const mainDurationMs = Math.max(4200, Math.floor(chantDurationMs));
  spellbladeGlyph.style.setProperty("--spellblade-duration", `${mainDurationMs}ms`);
  spellbladeGlyph.style.setProperty(
    "--spellblade-primary-duration",
    `${Math.max(3600, Math.floor(mainDurationMs * 0.95))}ms`,
  );
  spellbladeGlyph.style.setProperty(
    "--spellblade-secondary-duration",
    `${Math.max(3900, Math.floor(mainDurationMs * 1.02))}ms`,
  );
  spellbladeGlyph.style.setProperty(
    "--spellblade-wave-duration",
    `${Math.max(1400, Math.floor(mainDurationMs * 0.24))}ms`,
  );

  spellbladeGlyph.innerHTML = `
    <div class="attack-fx-spellblade-field" aria-hidden="true">
      <div class="attack-fx-spellblade-aura-ring"></div>
      <div class="attack-fx-spellblade-cross-wave"></div>
      <svg class="attack-fx-spellblade-emblem" viewBox="0 0 600 600" role="presentation" aria-hidden="true">
        <defs>
          <linearGradient id="rainbowStrokeStrong" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ff5f8e"></stop>
            <stop offset="16%" stop-color="#ffae63"></stop>
            <stop offset="32%" stop-color="#fff06f"></stop>
            <stop offset="48%" stop-color="#79f6bb"></stop>
            <stop offset="64%" stop-color="#6fd4ff"></stop>
            <stop offset="80%" stop-color="#8b8eff"></stop>
            <stop offset="100%" stop-color="#ff83d8"></stop>
          </linearGradient>
          <linearGradient id="rainbowStrokeMain" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ff78b4"></stop>
            <stop offset="18%" stop-color="#ffb86b"></stop>
            <stop offset="36%" stop-color="#fff48a"></stop>
            <stop offset="54%" stop-color="#89ffd2"></stop>
            <stop offset="72%" stop-color="#84dbff"></stop>
            <stop offset="88%" stop-color="#9e9dff"></stop>
            <stop offset="100%" stop-color="#ff96e2"></stop>
          </linearGradient>
          <linearGradient id="rainbowStrokeSoft" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#ff95c7"></stop>
            <stop offset="20%" stop-color="#ffd18c"></stop>
            <stop offset="40%" stop-color="#fff7ab"></stop>
            <stop offset="58%" stop-color="#acffe1"></stop>
            <stop offset="76%" stop-color="#a3e4ff"></stop>
            <stop offset="92%" stop-color="#b5b0ff"></stop>
            <stop offset="100%" stop-color="#ffb5eb"></stop>
          </linearGradient>
          <linearGradient id="rainbowStrokeFaint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffb4d8"></stop>
            <stop offset="22%" stop-color="#ffe1ad"></stop>
            <stop offset="44%" stop-color="#fffbc8"></stop>
            <stop offset="62%" stop-color="#c8ffec"></stop>
            <stop offset="80%" stop-color="#c0e9ff"></stop>
            <stop offset="100%" stop-color="#d2c6ff"></stop>
          </linearGradient>
          <linearGradient id="bladeGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fffef7"></stop>
            <stop offset="24%" stop-color="#ffe58f"></stop>
            <stop offset="44%" stop-color="#95f1ff"></stop>
            <stop offset="66%" stop-color="#b2a8ff"></stop>
            <stop offset="86%" stop-color="#ff9ed8"></stop>
            <stop offset="100%" stop-color="#f5f6ff"></stop>
          </linearGradient>
          <linearGradient id="guardGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#ff9fcb"></stop>
            <stop offset="25%" stop-color="#ffd08e"></stop>
            <stop offset="50%" stop-color="#88ffe2"></stop>
            <stop offset="75%" stop-color="#8fd3ff"></stop>
            <stop offset="100%" stop-color="#c3a7ff"></stop>
          </linearGradient>
          <radialGradient id="pommelGradient" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stop-color="#fff9db"></stop>
            <stop offset="30%" stop-color="#ffd59e"></stop>
            <stop offset="58%" stop-color="#89e3ff"></stop>
            <stop offset="82%" stop-color="#af9cff"></stop>
            <stop offset="100%" stop-color="#ff9fe0"></stop>
          </radialGradient>
          <radialGradient id="rainbowCoreGradient" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stop-color="#fffef2"></stop>
            <stop offset="28%" stop-color="#ffd6ae"></stop>
            <stop offset="52%" stop-color="#9df4ff"></stop>
            <stop offset="74%" stop-color="#b5a6ff"></stop>
            <stop offset="100%" stop-color="#ff9fe2"></stop>
          </radialGradient>
          <g id="hexRuneA">
            <path class="hex-rune-stroke" d="M300 201 L295 207 L300 213 L305 207 Z M300 213 L300 224"></path>
            <path class="hex-rune-accent" d="M296 218 L304 218 M297 223 L303 223"></path>
          </g>
          <g id="hexRuneB">
            <path class="hex-rune-stroke" d="M300 200 L300 214 M294.8 206.5 L305.2 206.5 M296.5 220 Q300 224 303.5 220"></path>
            <path class="hex-rune-accent" d="M297.2 214.8 L302.8 214.8"></path>
          </g>
          <g id="hexRuneC">
            <path class="hex-rune-stroke" d="M300 242 L296.6 247.4 L300 252.8 L303.4 247.4 Z M300 252.8 L300 261"></path>
            <path class="hex-rune-accent" d="M296.9 256.4 L303.1 256.4"></path>
          </g>
          <g id="hexValleyMini">
            <polygon class="hex-valley-line large" points="0,-31 -27,15 27,15"></polygon>
            <polygon class="hex-valley-line large" points="0,31 -27,-15 27,-15"></polygon>
            <g class="hex-valley-tip-rings large">
              <g transform="translate(0 -31)">
                <circle class="hex-valley-tip large outer" r="2.3"></circle>
                <circle class="hex-valley-tip large middle" r="1.6"></circle>
                <circle class="hex-valley-tip large inner" r="0.9"></circle>
              </g>
              <g transform="translate(-27 15)">
                <circle class="hex-valley-tip large outer" r="2.3"></circle>
                <circle class="hex-valley-tip large middle" r="1.6"></circle>
                <circle class="hex-valley-tip large inner" r="0.9"></circle>
              </g>
              <g transform="translate(27 15)">
                <circle class="hex-valley-tip large outer" r="2.3"></circle>
                <circle class="hex-valley-tip large middle" r="1.6"></circle>
                <circle class="hex-valley-tip large inner" r="0.9"></circle>
              </g>
              <g transform="translate(0 31)">
                <circle class="hex-valley-tip large outer" r="2.3"></circle>
                <circle class="hex-valley-tip large middle" r="1.6"></circle>
                <circle class="hex-valley-tip large inner" r="0.9"></circle>
              </g>
              <g transform="translate(-27 -15)">
                <circle class="hex-valley-tip large outer" r="2.3"></circle>
                <circle class="hex-valley-tip large middle" r="1.6"></circle>
                <circle class="hex-valley-tip large inner" r="0.9"></circle>
              </g>
              <g transform="translate(27 -15)">
                <circle class="hex-valley-tip large outer" r="2.3"></circle>
                <circle class="hex-valley-tip large middle" r="1.6"></circle>
                <circle class="hex-valley-tip large inner" r="0.9"></circle>
              </g>
            </g>
            <polygon class="hex-valley-line" points="0,-22 -19,11 19,11"></polygon>
            <polygon class="hex-valley-line" points="0,22 -19,-11 19,-11"></polygon>
            <g class="hex-valley-tip-rings">
              <g transform="translate(0 -22)">
                <circle class="hex-valley-tip outer" r="2.6"></circle>
                <circle class="hex-valley-tip middle" r="1.8"></circle>
                <circle class="hex-valley-tip inner" r="1"></circle>
              </g>
              <g transform="translate(-19 11)">
                <circle class="hex-valley-tip outer" r="2.6"></circle>
                <circle class="hex-valley-tip middle" r="1.8"></circle>
                <circle class="hex-valley-tip inner" r="1"></circle>
              </g>
              <g transform="translate(19 11)">
                <circle class="hex-valley-tip outer" r="2.6"></circle>
                <circle class="hex-valley-tip middle" r="1.8"></circle>
                <circle class="hex-valley-tip inner" r="1"></circle>
              </g>
              <g transform="translate(0 22)">
                <circle class="hex-valley-tip outer" r="2.6"></circle>
                <circle class="hex-valley-tip middle" r="1.8"></circle>
                <circle class="hex-valley-tip inner" r="1"></circle>
              </g>
              <g transform="translate(-19 -11)">
                <circle class="hex-valley-tip outer" r="2.6"></circle>
                <circle class="hex-valley-tip middle" r="1.8"></circle>
                <circle class="hex-valley-tip inner" r="1"></circle>
              </g>
              <g transform="translate(19 -11)">
                <circle class="hex-valley-tip outer" r="2.6"></circle>
                <circle class="hex-valley-tip middle" r="1.8"></circle>
                <circle class="hex-valley-tip inner" r="1"></circle>
              </g>
            </g>
          </g>
        </defs>

        <circle class="ring-line" cx="300" cy="300" r="252"></circle>

        <g class="hexagram outer-2">
          <polygon class="hexagram-line" points="300,43 76,431 524,431"></polygon>
          <polygon class="hexagram-line" points="300,557 76,169 524,169"></polygon>
          <g class="hexagram-tip-rings">
            <g transform="translate(300 43)">
              <circle class="hex-tip-circle outer" r="6.8"></circle>
              <circle class="hex-tip-circle middle" r="4.7"></circle>
              <circle class="hex-tip-circle inner" r="2.6"></circle>
            </g>
            <g transform="translate(76 431)">
              <circle class="hex-tip-circle outer" r="6.8"></circle>
              <circle class="hex-tip-circle middle" r="4.7"></circle>
              <circle class="hex-tip-circle inner" r="2.6"></circle>
            </g>
            <g transform="translate(524 431)">
              <circle class="hex-tip-circle outer" r="6.8"></circle>
              <circle class="hex-tip-circle middle" r="4.7"></circle>
              <circle class="hex-tip-circle inner" r="2.6"></circle>
            </g>
            <g transform="translate(300 557)">
              <circle class="hex-tip-circle outer" r="6.8"></circle>
              <circle class="hex-tip-circle middle" r="4.7"></circle>
              <circle class="hex-tip-circle inner" r="2.6"></circle>
            </g>
            <g transform="translate(76 169)">
              <circle class="hex-tip-circle outer" r="6.8"></circle>
              <circle class="hex-tip-circle middle" r="4.7"></circle>
              <circle class="hex-tip-circle inner" r="2.6"></circle>
            </g>
            <g transform="translate(524 169)">
              <circle class="hex-tip-circle outer" r="6.8"></circle>
              <circle class="hex-tip-circle middle" r="4.7"></circle>
              <circle class="hex-tip-circle inner" r="2.6"></circle>
            </g>
          </g>
        </g>

        <g class="hexagram outer">
          <polygon class="hexagram-line" points="300,96 122,404 478,404"></polygon>
          <polygon class="hexagram-line" points="300,504 122,196 478,196"></polygon>
          <g class="hexagram-tip-rings">
            <g transform="translate(300 96)">
              <circle class="hex-tip-circle outer" r="7.6"></circle>
              <circle class="hex-tip-circle middle" r="5.2"></circle>
              <circle class="hex-tip-circle inner" r="2.9"></circle>
            </g>
            <g transform="translate(122 404)">
              <circle class="hex-tip-circle outer" r="7.6"></circle>
              <circle class="hex-tip-circle middle" r="5.2"></circle>
              <circle class="hex-tip-circle inner" r="2.9"></circle>
            </g>
            <g transform="translate(478 404)">
              <circle class="hex-tip-circle outer" r="7.6"></circle>
              <circle class="hex-tip-circle middle" r="5.2"></circle>
              <circle class="hex-tip-circle inner" r="2.9"></circle>
            </g>
            <g transform="translate(300 504)">
              <circle class="hex-tip-circle outer" r="7.6"></circle>
              <circle class="hex-tip-circle middle" r="5.2"></circle>
              <circle class="hex-tip-circle inner" r="2.9"></circle>
            </g>
            <g transform="translate(122 196)">
              <circle class="hex-tip-circle outer" r="7.6"></circle>
              <circle class="hex-tip-circle middle" r="5.2"></circle>
              <circle class="hex-tip-circle inner" r="2.9"></circle>
            </g>
            <g transform="translate(478 196)">
              <circle class="hex-tip-circle outer" r="7.6"></circle>
              <circle class="hex-tip-circle middle" r="5.2"></circle>
              <circle class="hex-tip-circle inner" r="2.9"></circle>
            </g>
          </g>
        </g>

        <g class="hexagram-valley-pack">
          <g transform="translate(230 179)">
            <g class="valley-shard shard-1"><use href="#hexValleyMini"></use></g>
          </g>
          <g transform="translate(370 179)">
            <g class="valley-shard shard-2"><use href="#hexValleyMini"></use></g>
          </g>
          <g transform="translate(160 300)">
            <g class="valley-shard shard-3"><use href="#hexValleyMini"></use></g>
          </g>
          <g transform="translate(440 300)">
            <g class="valley-shard shard-4"><use href="#hexValleyMini"></use></g>
          </g>
          <g transform="translate(230 421)">
            <g class="valley-shard shard-5"><use href="#hexValleyMini"></use></g>
          </g>
          <g transform="translate(370 421)">
            <g class="valley-shard shard-6"><use href="#hexValleyMini"></use></g>
          </g>
        </g>

        <g class="hexagram-valley-pack orbit">
          <g transform="translate(108 300)">
            <g class="valley-shard shard-1"><use href="#hexValleyMini"></use></g>
          </g>
          <g transform="translate(492 300)">
            <g class="valley-shard shard-2"><use href="#hexValleyMini"></use></g>
          </g>
          <g transform="translate(176 138)">
            <g class="valley-shard shard-3"><use href="#hexValleyMini"></use></g>
          </g>
          <g transform="translate(424 138)">
            <g class="valley-shard shard-4"><use href="#hexValleyMini"></use></g>
          </g>
          <g transform="translate(176 462)">
            <g class="valley-shard shard-5"><use href="#hexValleyMini"></use></g>
          </g>
          <g transform="translate(424 462)">
            <g class="valley-shard shard-6"><use href="#hexValleyMini"></use></g>
          </g>
        </g>

        <g class="hexagram core">
          <polygon class="hexagram-line" points="300,138 160,380 440,380"></polygon>
          <polygon class="hexagram-line" points="300,462 160,220 440,220"></polygon>
          <g class="hexagram-tip-rings">
            <g transform="translate(300 138)">
              <circle class="hex-tip-circle outer" r="8.6"></circle>
              <circle class="hex-tip-circle middle" r="5.9"></circle>
              <circle class="hex-tip-circle inner" r="3.3"></circle>
            </g>
            <g transform="translate(160 380)">
              <circle class="hex-tip-circle outer" r="8.6"></circle>
              <circle class="hex-tip-circle middle" r="5.9"></circle>
              <circle class="hex-tip-circle inner" r="3.3"></circle>
            </g>
            <g transform="translate(440 380)">
              <circle class="hex-tip-circle outer" r="8.6"></circle>
              <circle class="hex-tip-circle middle" r="5.9"></circle>
              <circle class="hex-tip-circle inner" r="3.3"></circle>
            </g>
            <g transform="translate(300 462)">
              <circle class="hex-tip-circle outer" r="8.6"></circle>
              <circle class="hex-tip-circle middle" r="5.9"></circle>
              <circle class="hex-tip-circle inner" r="3.3"></circle>
            </g>
            <g transform="translate(160 220)">
              <circle class="hex-tip-circle outer" r="8.6"></circle>
              <circle class="hex-tip-circle middle" r="5.9"></circle>
              <circle class="hex-tip-circle inner" r="3.3"></circle>
            </g>
            <g transform="translate(440 220)">
              <circle class="hex-tip-circle outer" r="8.6"></circle>
              <circle class="hex-tip-circle middle" r="5.9"></circle>
              <circle class="hex-tip-circle inner" r="3.3"></circle>
            </g>
          </g>

          <g class="hexagram-inner-runes">
            <circle class="hex-inner-ring outer" cx="300" cy="300" r="95"></circle>
            <circle class="hex-inner-ring inner" cx="300" cy="300" r="60"></circle>
            <g class="hex-rune-wheel outer">
              <use href="#hexRuneA"></use>
              <use href="#hexRuneB" transform="rotate(30 300 300)"></use>
              <use href="#hexRuneA" transform="rotate(60 300 300)"></use>
              <use href="#hexRuneB" transform="rotate(90 300 300)"></use>
              <use href="#hexRuneA" transform="rotate(120 300 300)"></use>
              <use href="#hexRuneB" transform="rotate(150 300 300)"></use>
              <use href="#hexRuneA" transform="rotate(180 300 300)"></use>
              <use href="#hexRuneB" transform="rotate(210 300 300)"></use>
              <use href="#hexRuneA" transform="rotate(240 300 300)"></use>
              <use href="#hexRuneB" transform="rotate(270 300 300)"></use>
              <use href="#hexRuneA" transform="rotate(300 300 300)"></use>
              <use href="#hexRuneB" transform="rotate(330 300 300)"></use>
            </g>
            <g class="hex-rune-wheel inner">
              <use href="#hexRuneC"></use>
              <use href="#hexRuneC" transform="rotate(60 300 300)"></use>
              <use href="#hexRuneC" transform="rotate(120 300 300)"></use>
              <use href="#hexRuneC" transform="rotate(180 300 300)"></use>
              <use href="#hexRuneC" transform="rotate(240 300 300)"></use>
              <use href="#hexRuneC" transform="rotate(300 300 300)"></use>
            </g>
            <path class="hex-center-sigil" d="M300 276 L311 289 L324 300 L311 311 L300 324 L289 311 L276 300 L289 289 Z"></path>
            <path class="hex-center-sigil" d="M300 284 L300 316 M284 300 L316 300 M289 289 L311 311 M311 289 L289 311"></path>
          </g>
        </g>

        <g class="sword sword-a">
          <rect class="blade" x="289" y="124" width="22" height="214" rx="6"></rect>
          <path class="blade" d="M300 84 L289 124 H311 Z"></path>
          <line class="fuller" x1="300" y1="128" x2="300" y2="316"></line>
          <path class="sword-etch-line" d="M295 145 L300 151 L305 145 M295 172 L300 178 L305 172 M295 199 L300 205 L305 199 M295 226 L300 232 L305 226 M295 253 L300 259 L305 253 M295 280 L300 286 L305 280"></path>
          <path class="sword-etch-accent" d="M296.4 118 L303.6 118 M296.4 312 L303.6 312 M296.4 328 L303.6 328 M300 97 L300 109 M296.4 103 L303.6 103"></path>
          <rect class="guard" x="260" y="338" width="80" height="16" rx="6"></rect>
          <path class="sword-guard-rune" d="M270 346 L278 346 L282 342 L286 346 L294 346 M306 346 L314 346 L318 342 L322 346 L330 346"></path>
          <rect class="hilt" x="293.5" y="354" width="13" height="76" rx="6"></rect>
          <path class="sword-hilt-rune" d="M300 362 L300 426 M296.2 377 L303.8 377 M296.2 394 L303.8 394 M296.2 411 L303.8 411"></path>
          <circle class="pommel" cx="300" cy="444" r="12"></circle>
        </g>

        <g class="sword sword-b">
          <rect class="blade" x="289" y="124" width="22" height="214" rx="6"></rect>
          <path class="blade" d="M300 84 L289 124 H311 Z"></path>
          <line class="fuller" x1="300" y1="128" x2="300" y2="316"></line>
          <path class="sword-etch-line" d="M295 145 L300 151 L305 145 M295 172 L300 178 L305 172 M295 199 L300 205 L305 199 M295 226 L300 232 L305 226 M295 253 L300 259 L305 253 M295 280 L300 286 L305 280"></path>
          <path class="sword-etch-accent" d="M296.4 118 L303.6 118 M296.4 312 L303.6 312 M296.4 328 L303.6 328 M300 97 L300 109 M296.4 103 L303.6 103"></path>
          <rect class="guard" x="260" y="338" width="80" height="16" rx="6"></rect>
          <path class="sword-guard-rune" d="M270 346 L278 346 L282 342 L286 346 L294 346 M306 346 L314 346 L318 342 L322 346 L330 346"></path>
          <rect class="hilt" x="293.5" y="354" width="13" height="76" rx="6"></rect>
          <path class="sword-hilt-rune" d="M300 362 L300 426 M296.2 377 L303.8 377 M296.2 394 L303.8 394 M296.2 411 L303.8 411"></path>
          <circle class="pommel" cx="300" cy="444" r="12"></circle>
        </g>

        <g class="impact">
          <circle class="impact-core" cx="300" cy="300" r="11"></circle>
          <path class="impact-rays" d="M300 257 L300 282 M300 318 L300 343 M257 300 L282 300 M318 300 L343 300 M273 273 L286 286 M314 314 L327 327 M327 273 L314 286 M286 314 L273 327"></path>
        </g>
      </svg>
    </div>
  `;

  return spellbladeGlyph;
}

function showMagicChantPhase({
  sourceEl,
  imageSrc,
  actorName,
  attackType = "magic",
  criticalHit = false,
  guardCritical = false,
  chantDurationMs = MAGIC_CHANT_STAGE_MS,
}) {
  if (!sourceEl) return;

  const sourceRect = sourceEl.getBoundingClientRect();
  if (!sourceRect.width) return;

  const startX = sourceRect.left + sourceRect.width / 2;
  const startY = sourceRect.top + sourceRect.height / 2;

  const layer = document.createElement("div");
  layer.className = "battle-fx-layer";

  if (attackType === "spellblade") {
    const spellbladeGlyph = createSpellbladeChantGlyph({
      chantDurationMs,
      criticalHit,
    });
    layer.appendChild(spellbladeGlyph);
    document.body.appendChild(layer);
    window.setTimeout(() => {
      layer.remove();
    }, chantDurationMs + 120);
    return;
  }

  if (attackType === "ancientMagic") {
    const createSvgEl = (tagName, attrs = {}) => {
      const el = document.createElementNS("http://www.w3.org/2000/svg", tagName);
      Object.entries(attrs).forEach(([key, value]) => {
        el.setAttribute(key, String(value));
      });
      return el;
    };

    const ancientGlyph = document.createElement("div");
    ancientGlyph.className = "attack-fx-ancient-glyph";
    ancientGlyph.style.setProperty("--ancient-glyph-duration", `${Math.max(620, chantDurationMs - 40)}ms`);

    const ancientRunesSvg = createSvgEl("svg", {
      class: "attack-fx-ancient-runes",
      viewBox: "0 0 100 100",
      "aria-hidden": "true",
    });
    const runeRingOuter = createSvgEl("circle", {
      class: "attack-fx-ancient-rune-ring",
      cx: 50,
      cy: 50,
      r: 47.2,
    });
    const runeRingInner = createSvgEl("circle", {
      class: "attack-fx-ancient-rune-ring secondary",
      cx: 50,
      cy: 50,
      r: 43.8,
    });
    ancientRunesSvg.appendChild(runeRingOuter);
    ancientRunesSvg.appendChild(runeRingInner);

    const runeCount = 24;
    for (let i = 0; i < runeCount; i += 1) {
      const angle = (360 / runeCount) * i;
      const runeGroup = createSvgEl("g", { transform: `rotate(${angle} 50 50)` });
      const baseY = 4.6;
      const runeShape = createSvgEl("path", {
        class: "attack-fx-ancient-rune-shape",
        d:
          `M 50 ${baseY} L 48.8 ${baseY + 1.8} L 50 ${baseY + 3.6} L 51.2 ${baseY + 1.8} Z ` +
          `M 50 ${baseY + 3.6} L 50 ${baseY + 6.2}`,
      });
      runeGroup.appendChild(runeShape);

      if (i % 3 === 0) {
        const runeAccent = createSvgEl("path", {
          class: "attack-fx-ancient-rune-accent",
          d: `M 49 ${baseY + 2.4} L 47.2 ${baseY + 3.6} M 51 ${baseY + 2.4} L 52.8 ${baseY + 3.6}`,
        });
        runeGroup.appendChild(runeAccent);
      }

      ancientRunesSvg.appendChild(runeGroup);
    }

    ancientGlyph.appendChild(ancientRunesSvg);

    const ancientStarSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    ancientStarSvg.classList.add("attack-fx-ancient-star");
    ancientStarSvg.setAttribute("viewBox", "0 0 100 100");
    ancientStarSvg.setAttribute("aria-hidden", "true");

    const upTriangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    upTriangle.classList.add("attack-fx-ancient-star-triangle");
    upTriangle.setAttribute("points", "50,8 11,76 89,76");

    const downTriangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    downTriangle.classList.add("attack-fx-ancient-star-triangle");
    downTriangle.setAttribute("points", "50,92 11,24 89,24");

    const innerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    innerCircle.classList.add("attack-fx-ancient-star-inner-circle");
    innerCircle.setAttribute("cx", "50");
    innerCircle.setAttribute("cy", "50");
    innerCircle.setAttribute("r", "18");

    const innerPentagram = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    innerPentagram.classList.add("attack-fx-ancient-star-pentagram");
    innerPentagram.setAttribute("points", "50,36 58.2,61.3 36.7,45.7 63.3,45.7 41.8,61.3");

    const hexTipPoints = [
      [50, 8],
      [11, 24],
      [89, 24],
      [11, 76],
      [89, 76],
      [50, 92],
    ];
    const pentTipPoints = [
      [50, 36],
      [58.2, 61.3],
      [36.7, 45.7],
      [63.3, 45.7],
      [41.8, 61.3],
    ];

    const hexInnerRunes = createSvgEl("g", {
      class: "attack-fx-ancient-hex-runes",
    });
    const hexInnerRuneRing = createSvgEl("circle", {
      class: "attack-fx-ancient-hex-rune-ring",
      cx: 50,
      cy: 50,
      r: 24.6,
    });
    hexInnerRunes.appendChild(hexInnerRuneRing);
    const hexInnerRuneCount = 12;
    for (let i = 0; i < hexInnerRuneCount; i += 1) {
      const angle = (360 / hexInnerRuneCount) * i;
      const runeGroup = createSvgEl("g", { transform: `rotate(${angle} 50 50)` });
      const baseY = 22.9;
      const runeShape = createSvgEl("path", {
        class: "attack-fx-ancient-hex-rune-shape",
        d:
          `M 50 ${baseY} L 48.9 ${baseY + 1.4} L 50 ${baseY + 2.9} L 51.1 ${baseY + 1.4} Z ` +
          `M 50 ${baseY + 2.9} L 50 ${baseY + 5.4}`,
      });
      runeGroup.appendChild(runeShape);

      if (i % 2 === 0) {
        const runeAccent = createSvgEl("path", {
          class: "attack-fx-ancient-hex-rune-accent",
          d: `M 49.1 ${baseY + 2.2} L 47.7 ${baseY + 3.1} M 50.9 ${baseY + 2.2} L 52.3 ${baseY + 3.1}`,
        });
        runeGroup.appendChild(runeAccent);
      }
      hexInnerRunes.appendChild(runeGroup);
    }

    const pentInnerRunes = createSvgEl("g", {
      class: "attack-fx-ancient-pent-runes",
    });
    const pentInnerRuneRing = createSvgEl("circle", {
      class: "attack-fx-ancient-pent-rune-ring",
      cx: 50,
      cy: 50,
      r: 9.8,
    });
    pentInnerRunes.appendChild(pentInnerRuneRing);
    const pentInnerRuneCount = 5;
    for (let i = 0; i < pentInnerRuneCount; i += 1) {
      const angle = (360 / pentInnerRuneCount) * i;
      const runeGroup = createSvgEl("g", { transform: `rotate(${angle} 50 50)` });
      const baseY = 39.8;
      const runeShape = createSvgEl("path", {
        class: "attack-fx-ancient-pent-rune-shape",
        d:
          `M 50 ${baseY} L 49.2 ${baseY + 1.1} L 50 ${baseY + 2.2} L 50.8 ${baseY + 1.1} Z ` +
          `M 50 ${baseY + 2.2} L 50 ${baseY + 4.1}`,
      });
      runeGroup.appendChild(runeShape);
      pentInnerRunes.appendChild(runeGroup);
    }
    const pentInnerRuneCore = createSvgEl("path", {
      class: "attack-fx-ancient-pent-rune-core",
      d:
        "M 50 46.5 L 50 53.5 " +
        "M 46.5 50 L 53.5 50 " +
        "M 47.5 47.5 L 52.5 52.5 " +
        "M 52.5 47.5 L 47.5 52.5",
    });
    pentInnerRunes.appendChild(pentInnerRuneCore);

    const outerSpaceRunes = createSvgEl("g", {
      class: "attack-fx-ancient-space-runes outer-band",
    });
    const outerSpaceRuneRing = createSvgEl("circle", {
      class: "attack-fx-ancient-space-rune-ring outer-band",
      cx: 50,
      cy: 50,
      r: 32.2,
    });
    outerSpaceRunes.appendChild(outerSpaceRuneRing);
    const outerSpaceRuneCount = 12;
    for (let i = 0; i < outerSpaceRuneCount; i += 1) {
      const angle = (360 / outerSpaceRuneCount) * i + 15;
      const runeGroup = createSvgEl("g", { transform: `rotate(${angle} 50 50)` });
      const baseY = 18.2;
      const runeShape = createSvgEl("path", {
        class: "attack-fx-ancient-space-rune-shape",
        d:
          `M 50 ${baseY} L 49.1 ${baseY + 1.2} L 50 ${baseY + 2.5} L 50.9 ${baseY + 1.2} Z ` +
          `M 50 ${baseY + 2.5} L 50 ${baseY + 5.2} ` +
          `M 48.6 ${baseY + 3.9} L 51.4 ${baseY + 3.9}`,
      });
      runeGroup.appendChild(runeShape);
      if (i % 2 === 0) {
        const runeAccent = createSvgEl("path", {
          class: "attack-fx-ancient-space-rune-accent",
          d:
            `M 49 ${baseY + 5.2} Q 50 ${baseY + 6.6} 51 ${baseY + 5.2} ` +
            `M 49.4 ${baseY + 6.8} L 50.6 ${baseY + 6.8}`,
        });
        runeGroup.appendChild(runeAccent);
      }
      outerSpaceRunes.appendChild(runeGroup);
    }

    const innerSpaceRunes = createSvgEl("g", {
      class: "attack-fx-ancient-space-runes inner-band",
    });
    const innerSpaceRuneRing = createSvgEl("circle", {
      class: "attack-fx-ancient-space-rune-ring inner-band",
      cx: 50,
      cy: 50,
      r: 15.4,
    });
    innerSpaceRunes.appendChild(innerSpaceRuneRing);
    const innerSpaceRuneCount = 10;
    for (let i = 0; i < innerSpaceRuneCount; i += 1) {
      const angle = (360 / innerSpaceRuneCount) * i + 18;
      const runeGroup = createSvgEl("g", { transform: `rotate(${angle} 50 50)` });
      const baseY = 32.9;
      const runeShape = createSvgEl("path", {
        class: "attack-fx-ancient-space-rune-shape",
        d:
          `M 50 ${baseY} L 49.3 ${baseY + 0.9} L 50 ${baseY + 1.9} L 50.7 ${baseY + 0.9} Z ` +
          `M 50 ${baseY + 1.9} L 50 ${baseY + 3.8}`,
      });
      runeGroup.appendChild(runeShape);
      if (i % 2 === 1) {
        const runeAccent = createSvgEl("path", {
          class: "attack-fx-ancient-space-rune-accent",
          d:
            `M 49.4 ${baseY + 2.8} L 50.6 ${baseY + 2.8} ` +
            `M 49.7 ${baseY + 3.8} L 50.3 ${baseY + 4.8}`,
        });
        runeGroup.appendChild(runeAccent);
      }
      innerSpaceRunes.appendChild(runeGroup);
    }

    ancientStarSvg.appendChild(upTriangle);
    ancientStarSvg.appendChild(downTriangle);
    hexTipPoints.forEach(([cx, cy]) => {
      const tipCircle = createSvgEl("circle", {
        class: "attack-fx-ancient-star-tip hex-tip",
        cx,
        cy,
        r: 2.05,
      });
      ancientStarSvg.appendChild(tipCircle);
    });
    ancientStarSvg.appendChild(outerSpaceRunes);
    ancientStarSvg.appendChild(hexInnerRunes);
    ancientStarSvg.appendChild(innerCircle);
    ancientStarSvg.appendChild(innerSpaceRunes);
    ancientStarSvg.appendChild(innerPentagram);
    pentTipPoints.forEach(([cx, cy]) => {
      const tipCircle = createSvgEl("circle", {
        class: "attack-fx-ancient-star-tip pent-tip",
        cx,
        cy,
        r: 1.35,
      });
      ancientStarSvg.appendChild(tipCircle);
    });
    ancientStarSvg.appendChild(pentInnerRunes);
    ancientGlyph.appendChild(ancientStarSvg);
    const ancientComment = document.createElement("p");
    ancientComment.className = "attack-fx-ancient-comment";
    ancientComment.textContent = "宇宙に瞬く星々たちよ　我に力を与えたまえ";
    ancientGlyph.appendChild(ancientComment);
    if (criticalHit) {
      ancientGlyph.classList.add("critical-hit");
    }
    layer.appendChild(ancientGlyph);
  }

  const chantCard = document.createElement("div");
  chantCard.className = "attack-fx-chant";
  chantCard.style.left = `${startX}px`;
  chantCard.style.top = `${startY}px`;

  const chantImage = document.createElement("img");
  chantImage.src = imageSrc;
  chantImage.alt = `${actorName} の詠唱演出`;
  chantCard.appendChild(chantImage);

  if (criticalHit) {
    chantCard.classList.add("critical-hit");
  }
  if (guardCritical) {
    chantCard.classList.add("guard-critical");
  }

  const chantAura = document.createElement("div");
  chantAura.className = "attack-fx-chant-aura";
  chantAura.style.left = `${startX}px`;
  chantAura.style.top = `${startY}px`;
  if (criticalHit) {
    chantAura.classList.add("critical-hit");
  }

  layer.appendChild(chantAura);
  layer.appendChild(chantCard);
  document.body.appendChild(layer);

  window.setTimeout(() => {
    layer.remove();
  }, chantDurationMs + 120);
}

function getMagicChantDurationMs(attackType = "magic") {
  if (attackType === "ancientMagic") {
    return MAGIC_CHANT_STAGE_MS + ANCIENT_MAGIC_CHANT_EXTRA_MS;
  }
  if (attackType === "spellblade") {
    return MAGIC_CHANT_STAGE_MS + SPELLBLADE_CHANT_EXTRA_MS;
  }
  return MAGIC_CHANT_STAGE_MS;
}

function buildPreAttackDamageSteps(finalDamage, breakdown = null) {
  const damage = Math.max(1, Math.floor(finalDamage));

  if (breakdown && breakdown.type === "legionTotal") {
    const atkTotal = Math.max(0, Math.floor(breakdown.atkTotal ?? 0));
    const defTotal = Math.max(0, Math.floor(breakdown.defTotal ?? 0));
    const magTotal = Math.max(0, Math.floor(breakdown.magTotal ?? 0));
    const sprTotal = Math.max(0, Math.floor(breakdown.sprTotal ?? 0));
    const spdTotal = Math.max(0, Math.floor(breakdown.spdTotal ?? 0));
    const lukTotal = Math.max(0, Math.floor(breakdown.lukTotal ?? 0));
    const moraleBonus = Math.max(0, Math.floor(breakdown.moraleBonus ?? 0));
    const groupedTotal = Math.max(0, atkTotal + defTotal + magTotal + sprTotal + spdTotal + lukTotal);
    const totalWithMorale = Math.max(0, groupedTotal + moraleBonus);
    return [
      { label: `ATK+DEF (${atkTotal}+${defTotal})`, value: atkTotal + defTotal },
      { label: `MAG+SPR (${magTotal}+${sprTotal})`, value: atkTotal + defTotal + magTotal + sprTotal },
      { label: `SPD+LUK (${spdTotal}+${lukTotal})`, value: groupedTotal },
      { label: `士気加算 +${moraleBonus}`, value: Math.max(1, totalWithMorale) },
      { label: "軍団総攻撃", value: Math.max(1, totalWithMorale) },
      { label: "FINAL DAMAGE", value: Math.max(1, totalWithMorale), final: true },
    ];
  }

  if (breakdown && breakdown.type === "gale") {
    const totalSpd = Math.max(0, Math.floor(breakdown.totalSpd ?? damage));
    const baseBonus = Math.max(0, Math.floor(breakdown.baseBonus ?? 0));
    const withBonusDamage = Math.max(1, totalSpd + baseBonus);
    return [
      { label: "軍団合計SPD", value: totalSpd },
      { label: `固定加算 +${baseBonus}`, value: withBonusDamage },
      { label: "疾風の陣", value: damage },
      { label: "FINAL DAMAGE", value: damage, final: true },
    ];
  }

  if (breakdown && breakdown.type === "reversal") {
    const totalLuk = Math.max(0, Math.floor(breakdown.totalLuk ?? damage));
    const baseBonus = Math.max(0, Math.floor(breakdown.baseBonus ?? 0));
    const withBonusDamage = Math.max(1, totalLuk + baseBonus);
    return [
      { label: "軍団合計LUK", value: totalLuk },
      { label: `固定加算 +${baseBonus}`, value: withBonusDamage },
      { label: "逆転の陣", value: damage },
      { label: "FINAL DAMAGE", value: damage, final: true },
    ];
  }

  if (breakdown && breakdown.type === "lifeBurst") {
    const normalDamage = Math.max(1, Math.floor(breakdown.normalDamage ?? damage));
    const lifeBurstBonus = Math.max(0, Math.floor(breakdown.lifeBurstBonus ?? 0));
    const missingHp = Math.max(0, Math.floor(breakdown.missingHp ?? lifeBurstBonus * PLAYER_LIFE_BURST_MISSING_HP_DIVISOR));
    return [
      { label: "通常攻撃", value: normalDamage },
      {
        label: `ライフバースト加算 (欠損HP ${missingHp} / ${PLAYER_LIFE_BURST_MISSING_HP_DIVISOR})`,
        value: Math.max(1, normalDamage + lifeBurstBonus),
      },
      { label: "FINAL DAMAGE", value: damage, final: true },
    ];
  }

  if (breakdown && breakdown.type === "berserkerRageFormula") {
    const baseDamage = Math.max(1, Math.floor(breakdown.baseDamage ?? PLAYER_BERSERKER_RAGE_BASE_DAMAGE));
    const atk = Math.max(0, Math.floor(breakdown.atk ?? 0));
    const atkBase = Math.max(0, Math.floor(breakdown.atkBase ?? PLAYER_BERSERKER_RAGE_ATK_BASE));
    const atkBonusRate = Math.max(0, Math.floor(breakdown.atkBonusRate ?? PLAYER_BERSERKER_RAGE_ATK_BONUS_RATE));
    const beforeDefenseDamage = Math.max(1, Math.floor(breakdown.beforeDefenseDamage ?? baseDamage));
    const enemyGuard = Math.max(0, Math.floor(breakdown.enemyGuard ?? 0));
    const afterDefenseDamage = Math.max(1, Math.floor(breakdown.afterDefenseDamage ?? beforeDefenseDamage));
    const madokasuIzayaAttackRate = Math.max(1, Number(breakdown.madokasuIzayaAttackRate) || 1);
    const afterMadokasuIzayaBoostDamage = Math.max(
      1,
      Math.floor(breakdown.afterMadokasuIzayaBoostDamage ?? breakdown.beforeEnemyDamageCut ?? afterDefenseDamage)
    );
    const enemyDamageCutRate = Number(breakdown.enemyDamageCutRate ?? 1);
    const enemyDamageCutApplied = Boolean(breakdown.enemyDamageCutApplied && enemyDamageCutRate < 1);
    const enemyDamageCutSourceName = breakdown.enemyDamageCutSourceName || "敵";
    const afterEnemyDamageCut = Math.max(1, Math.floor(breakdown.afterEnemyDamageCut ?? damage));
    const berserkerSwayApplied = Boolean(breakdown.berserkerSwayApplied);
    const berserkerSwayValue = Math.floor(breakdown.berserkerSwayValue ?? 0);
    const berserkerSwayMin = Math.floor(breakdown.berserkerSwayMin ?? PLAYER_BERSERKER_RAGE_SWAY_MIN);
    const berserkerSwayMax = Math.floor(breakdown.berserkerSwayMax ?? PLAYER_BERSERKER_RAGE_SWAY_MAX);
    const afterBerserkerSwayDamage = Math.max(
      1,
      Math.floor(breakdown.afterBerserkerSwayDamage ?? afterEnemyDamageCut)
    );
    const swayValueLabel = berserkerSwayValue >= 0 ? `+${berserkerSwayValue}` : `${berserkerSwayValue}`;
    return [
      { label: `固定値 ${baseDamage}`, value: baseDamage },
      { label: `${baseDamage} + (ATK ${atk} - ${atkBase}) x ${atkBonusRate}`, value: beforeDefenseDamage },
      ...(enemyGuard > 0 ? [{ label: `敵DEF減衰 -${enemyGuard}`, value: afterDefenseDamage }] : []),
      ...(madokasuIzayaAttackRate > 1
        ? [
            {
              label: `イザヤ連携 x${formatRateLabel(madokasuIzayaAttackRate)}`,
              value: afterMadokasuIzayaBoostDamage,
            },
          ]
        : []),
      ...(enemyDamageCutApplied
        ? [
            {
              label: `${enemyDamageCutSourceName}の物理耐性 x${formatRateLabel(enemyDamageCutRate)}`,
              value: afterEnemyDamageCut,
            },
          ]
        : []),
      ...(berserkerSwayApplied
        ? [
            {
              label: `狂戦揺れ ${swayValueLabel} (${berserkerSwayMin}~+${berserkerSwayMax})`,
              value: afterBerserkerSwayDamage,
            },
          ]
        : []),
      { label: "FINAL DAMAGE", value: damage, final: true },
    ];
  }

  if (breakdown && breakdown.type === "enchant") {
    const strategistMag = Math.max(0, Math.floor(breakdown.strategistMag ?? 0));
    const magExcess = Math.max(0, Math.floor(breakdown.magExcess ?? 0));
    const enchantRate = Math.max(1, Number(breakdown.enchantRate) || PLAYER_STRATEGIST_ENCHANT_DAMAGE_RATE);
    const minstrelRate = Math.max(1, Number(breakdown.minstrelRate) || 1);
    const magicKnightRate = Math.max(1, Number(breakdown.magicKnightRate) || 1);
    const baseEnchantDamage = Math.max(0, Math.floor(magExcess * enchantRate));
    const afterMinstrelDamage = Math.max(
      0,
      Math.floor(breakdown.afterMinstrelDamage ?? Math.floor(baseEnchantDamage * minstrelRate))
    );
    const afterMagicKnightDamage = Math.max(0, Math.floor(breakdown.afterMagicKnightDamage ?? damage));
    const enemyDamageCutRate = Number(breakdown.enemyDamageCutRate ?? 1);
    const enemyDamageCutApplied = Boolean(breakdown.enemyDamageCutApplied && enemyDamageCutRate < 1);
    const enemyDamageCutSourceName = breakdown.enemyDamageCutSourceName || "敵";
    const afterEnemyDamageCut = Math.max(1, Math.floor(breakdown.afterEnemyDamageCut ?? damage));
    return [
      { label: `軍師MAG ${strategistMag}`, value: strategistMag },
      { label: `max(0, MAG-${PLAYER_STRATEGIST_ENCHANT_MAG_BASE}) x ${formatRateLabel(enchantRate)}`, value: baseEnchantDamage },
      ...(minstrelRate > 1
        ? [{ label: `吟遊詩人支援 x${formatRateLabel(minstrelRate)}`, value: afterMinstrelDamage }]
        : []),
      ...(magicKnightRate > 1
        ? [{ label: `マジックナイト補正 x${formatRateLabel(magicKnightRate)}`, value: afterMagicKnightDamage }]
        : []),
      ...(enemyDamageCutApplied
        ? [
            {
              label: `${enemyDamageCutSourceName}の魔法耐性 x${formatRateLabel(enemyDamageCutRate)}`,
              value: afterEnemyDamageCut,
            },
          ]
        : []),
      { label: "FINAL DAMAGE", value: damage, final: true },
    ];
  }

  if (breakdown && breakdown.type === "rearRemoteMagic") {
    const mag = Math.max(0, Math.floor(breakdown.mag ?? 0));
    const magBase = Math.max(0, Math.floor(breakdown.magBase ?? PLAYER_REAR_REMOTE_MAGIC_MAG_BASE));
    const damageRate = Math.max(1, Math.floor(breakdown.damageRate ?? PLAYER_REAR_REMOTE_MAGIC_DAMAGE_RATE));
    const rawBaseDamage = Math.max(0, Math.floor(breakdown.rawBaseDamage ?? breakdown.baseDamage ?? damage));
    const baseDamage = Math.max(0, Math.floor(breakdown.baseDamage ?? rawBaseDamage));
    const minstrelRate = Math.max(1, Number(breakdown.minstrelRate ?? 1));
    const afterMinstrelDamage = Math.max(0, Math.floor(breakdown.afterMinstrelDamage ?? baseDamage));
    const enemyDamageCutRate = Number(breakdown.enemyDamageCutRate ?? 1);
    const enemyDamageCutApplied = Boolean(breakdown.enemyDamageCutApplied && enemyDamageCutRate < 1);
    const enemyDamageCutSourceName = breakdown.enemyDamageCutSourceName || "敵";
    const afterEnemyDamageCut = Math.max(1, Math.floor(breakdown.afterEnemyDamageCut ?? damage));
    return [
      { label: `MAG ${mag}`, value: mag },
      { label: `max(0, MAG-${magBase}) x ${damageRate}`, value: Math.max(1, baseDamage) },
      ...(minstrelRate > 1
        ? [{ label: `吟遊詩人支援 x${formatRateLabel(minstrelRate)}`, value: afterMinstrelDamage }]
        : []),
      ...(enemyDamageCutApplied
        ? [
            {
              label: `${enemyDamageCutSourceName}の魔法耐性 x${formatRateLabel(enemyDamageCutRate)}`,
              value: afterEnemyDamageCut,
            },
          ]
        : []),
      { label: "FINAL DAMAGE", value: damage, final: true },
    ];
  }

  if (breakdown && breakdown.type === "legion") {
    const physicalDamage = Math.max(1, Math.floor(breakdown.physicalDamage ?? damage));
    const magicPortion = Math.max(0, Math.floor(breakdown.magicPortion ?? 0));
    const moraleBonus = Math.max(0, Math.floor(breakdown.moraleBonus ?? 0));
    const combinedDamage = Math.max(1, Math.floor(physicalDamage + magicPortion));
    const withMoraleDamage = Math.max(1, Math.floor(combinedDamage + moraleBonus));
    const leaderBoostRate = Math.max(1, Number(breakdown.leaderBoostRate ?? 1));
    const leaderBoostApplied = Boolean(breakdown.leaderBoostApplied && leaderBoostRate > 1);
    const afterLeaderBoostDamage = Math.max(
      1,
      Math.floor(breakdown.afterLeaderBoostDamage ?? withMoraleDamage * leaderBoostRate)
    );
    return [
      { label: "基本(物理)", value: physicalDamage },
      { label: `魔法加算 +${magicPortion}`, value: combinedDamage },
      { label: `士気加算 +${moraleBonus}`, value: withMoraleDamage },
      ...(leaderBoostApplied
        ? [{ label: `リーダー倍率 x${formatRateLabel(leaderBoostRate)}`, value: afterLeaderBoostDamage }]
        : []),
      { label: "FINAL DAMAGE", value: damage, final: true },
    ];
  }

  if (breakdown && breakdown.type === "spellblade") {
    const physicalDamage = Math.max(1, Math.floor(breakdown.physicalDamage ?? damage));
    const magicDamage = Math.max(1, Math.floor(breakdown.magicDamage ?? 0));
    const spellbladeRate = Math.max(1, Number(breakdown.spellbladeRate) || 1);
    const combinedDamage = Math.max(1, Math.floor(physicalDamage + magicDamage));
    return [
      { label: "物理斬撃", value: physicalDamage },
      { label: `魔法斬撃 +${magicDamage}`, value: combinedDamage },
      { label: `神聖魔法剣倍率 x${formatRateLabel(spellbladeRate)}`, value: damage },
      { label: "FINAL DAMAGE", value: damage, final: true },
    ];
  }

  if (breakdown && breakdown.type === "magicSword") {
    const physicalDamage = Math.max(1, Math.floor(breakdown.physicalDamage ?? damage));
    const magicDamage = Math.max(1, Math.floor(breakdown.magicDamage ?? 0));
    const combinedDamage = Math.max(1, Math.floor(physicalDamage + magicDamage));
    return [
      { label: "通常攻撃", value: physicalDamage },
      { label: `魔法加算 +${magicDamage}`, value: combinedDamage },
      { label: "FINAL DAMAGE", value: damage, final: true },
    ];
  }

  if (!breakdown) {
    const base = Math.max(1, Math.floor(damage * 0.62));
    return [
      { label: "基本ダメージ", value: base },
      { label: "FINAL DAMAGE", value: damage, final: true },
    ];
  }

  const steps = [];
  steps.push({ label: "基本ダメージ", value: Math.max(1, Math.floor(breakdown.foundationDamage ?? damage)) });
  if (breakdown.defenseIgnored) {
    steps.push({
      label: "敵防御無視",
      value: Math.max(1, Math.floor(breakdown.foundationDamage ?? damage)),
    });
  }
  steps.push({
    label: `神託補正 x${formatRateLabel(breakdown.divineRate)}`,
    value: Math.max(1, Math.floor(breakdown.afterDivine ?? damage)),
  });

  if (Math.abs((breakdown.slotRate ?? 1) - 1) > 0.001) {
    steps.push({
      label: `陣形補正 x${formatRateLabel(breakdown.slotRate)}`,
      value: Math.max(1, Math.floor(breakdown.afterSlot ?? damage)),
    });
  }

  const criticalMixRate = (breakdown.criticalRate ?? 1) * (breakdown.fifthRate ?? 1);
  if (Math.abs(criticalMixRate - 1) > 0.001) {
    steps.push({
      label: `クリティカル補正 x${formatRateLabel(criticalMixRate)}`,
      value: Math.max(1, Math.floor(breakdown.afterCritical ?? damage)),
    });
  }

  if (Math.abs((breakdown.moraleRate ?? 1) - 1) > 0.001) {
    const moraleLabel = breakdown.moraleRate >= 1 ? "士気補正" : "士気減衰";
    steps.push({
      label: `${moraleLabel} x${formatRateLabel(breakdown.moraleRate)}`,
      value: Math.max(1, Math.floor(breakdown.afterMorale ?? damage)),
    });
  }

  if (Math.abs((breakdown.attackBoostRate ?? 1) - 1) > 0.001) {
    const attackBoostLabel =
      breakdown.attackType === "berserkerRage" ? "狂戦士補正" : "攻撃補正";
    steps.push({
      label: `${attackBoostLabel} x${formatRateLabel(breakdown.attackBoostRate)}`,
      value: Math.max(1, Math.floor(breakdown.afterAttackBoost ?? damage)),
    });
  }

  if (Math.abs((breakdown.magicAttackRate ?? 1) - 1) > 0.001) {
    steps.push({
      label: `魔法増幅 x${formatRateLabel(breakdown.magicAttackRate)}`,
      value: Math.max(1, Math.floor(breakdown.afterMagicBoost ?? damage)),
    });
  }

  if ((breakdown.warriorMoraleBonus ?? 0) > 0) {
    const warriorMoraleRate = Math.max(1, Number(breakdown.warriorMoraleRate) || 1);
    const warriorMoraleBonus = Math.max(0, Math.floor(breakdown.warriorMoraleBonus ?? 0));
    const warriorMoraleLabel =
      warriorMoraleRate > 1 ? `ウォーリア士気加算 x${formatRateLabel(warriorMoraleRate)}` : "ウォーリア士気加算";
    steps.push({
      label: `${warriorMoraleLabel} +${warriorMoraleBonus}`,
      value: Math.max(1, Math.floor(breakdown.afterWarriorMoraleBonus ?? damage)),
    });
  }

  if (Math.abs((breakdown.zeoliteLastStandRate ?? 1) - 1) > 0.001) {
    steps.push({
      label: `ゼオライト背水 x${formatRateLabel(breakdown.zeoliteLastStandRate)}`,
      value: Math.max(1, Math.floor(breakdown.afterZeoliteLastStandDamage ?? damage)),
    });
  }

  if (Math.abs((breakdown.attributeRate ?? 1) - 1) > 0.001) {
    const attributeLabel = breakdown.attributeRate > 1 ? "属性有利" : "属性不利";
    steps.push({
      label: `${attributeLabel} x${formatRateLabel(breakdown.attributeRate)}`,
      value: Math.max(1, Math.floor(breakdown.afterAttributeDamage ?? damage)),
    });
  }

  if (breakdown.enemyDamageCutApplied && Math.abs((breakdown.enemyDamageCutRate ?? 1) - 1) > 0.001) {
    const enemyCutTypeLabel = breakdown.enemyDamageCutAttackStyle === "magic" ? "魔法" : "物理";
    const enemyCutSourceName = breakdown.enemyDamageCutSourceName || "敵";
    steps.push({
      label: `${enemyCutSourceName}の${enemyCutTypeLabel}耐性 x${formatRateLabel(breakdown.enemyDamageCutRate)}`,
      value: Math.max(1, Math.floor(breakdown.afterEnemyDamageCut ?? damage)),
    });
  }

  steps.push({ label: "FINAL DAMAGE", value: damage, final: true });
  return sanitizePreAttackDamageSteps(steps, damage);
}

function sanitizePreAttackDamageSteps(steps, finalDamage) {
  const result = [];
  for (const step of steps) {
    if (!step) continue;
    const value = Math.max(1, Math.floor(step.value));
    const label = step.label || "";
    const final = Boolean(step.final);
    if (result.length > 0 && !final) {
      const previous = result[result.length - 1];
      if (previous.value === value && previous.label === label) continue;
    }
    result.push({ label, value, final });
  }

  if (result.length === 0 || !result[result.length - 1].final) {
    result.push({ label: "FINAL DAMAGE", value: Math.max(1, Math.floor(finalDamage)), final: true });
  } else {
    result[result.length - 1].value = Math.max(1, Math.floor(finalDamage));
    result[result.length - 1].label = "FINAL DAMAGE";
  }
  return result;
}

function formatRateLabel(rate) {
  if (typeof rate !== "number" || !Number.isFinite(rate)) return "1.00";
  return rate.toFixed(2);
}

function getPreAttackPreviewDurationMs(stepCount) {
  if (!stepCount || stepCount <= 0) return 0;
  return stepCount * PRE_ATTACK_PREVIEW_STEP_MS + PRE_ATTACK_PREVIEW_FINAL_HOLD_MS;
}

function showPreAttackDamagePreview({ sourceEl, targetEl, steps, criticalHit = false, attackType = "physical" }) {
  if (!sourceEl || !targetEl || !steps || steps.length === 0) return;

  const sourceRect = sourceEl.getBoundingClientRect();
  const targetRect = targetEl.getBoundingClientRect();
  if (!sourceRect.width || !targetRect.width) return;

  const startX = sourceRect.left + sourceRect.width / 2;
  const startY = sourceRect.top + sourceRect.height / 2;
  const endX = targetRect.left + targetRect.width / 2;
  const endY = targetRect.top + targetRect.height / 2;

  const panelX = startX + (endX - startX) * 0.42;
  const panelY = startY + (endY - startY) * 0.3 - 24;

  const layer = document.createElement("div");
  layer.className = "battle-fx-layer";

  const panel = document.createElement("article");
  panel.className = "attack-pre-fx-panel";
  panel.style.left = `${panelX}px`;
  panel.style.top = `${panelY}px`;
  if (criticalHit) {
    panel.classList.add("critical-hit");
  }
  if (attackType === "legion") {
    panel.classList.add("legion-hit");
  } else if (attackType === "gale") {
    panel.classList.add("gale-hit");
  } else if (attackType === "reversal") {
    panel.classList.add("reversal-hit");
  } else if (attackType === "lifeBurst") {
    panel.classList.add("life-burst-hit");
  }

  const stepLabelEl = document.createElement("p");
  stepLabelEl.className = "attack-pre-fx-step";
  const valueEl = document.createElement("p");
  valueEl.className = "attack-pre-fx-value";
  valueEl.textContent = "0";

  panel.appendChild(stepLabelEl);
  panel.appendChild(valueEl);
  layer.appendChild(panel);
  document.body.appendChild(layer);

  let index = 0;
  let previousValue = 0;

  const showNextStep = () => {
    const step = steps[index];
    if (!step) {
      window.setTimeout(() => {
        layer.remove();
      }, PRE_ATTACK_PREVIEW_FINAL_HOLD_MS);
      return;
    }

    stepLabelEl.textContent = step.label;
    panel.classList.toggle("final-phase", Boolean(step.final));
    animatePreviewValue(valueEl, previousValue, step.value, PRE_ATTACK_PREVIEW_ANIM_MS);
    previousValue = step.value;
    index += 1;
    window.setTimeout(showNextStep, PRE_ATTACK_PREVIEW_STEP_MS);
  };

  showNextStep();
}

function animatePreviewValue(el, fromValue, toValue, durationMs) {
  if (!el) return;
  const from = Math.max(0, Math.floor(fromValue));
  const to = Math.max(0, Math.floor(toValue));
  if (durationMs <= 0 || from === to) {
    el.textContent = String(to);
    return;
  }

  const startedAt = performance.now();
  const stepFrame = (now) => {
    const t = Math.min(1, (now - startedAt) / durationMs);
    const eased = 1 - Math.pow(1 - t, 3);
    const current = Math.round(from + (to - from) * eased);
    el.textContent = String(current);
    if (t < 1) {
      requestAnimationFrame(stepFrame);
    }
  };

  requestAnimationFrame(stepFrame);
}

function scrollBoardPanelToCenter() {
  if (!boardPanelEl) return;

  window.clearTimeout(drawToBoardScrollTimer);
  drawToBoardScrollTimer = window.setTimeout(() => {
    if (!boardPanelEl) return;
    boardPanelEl.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }, DRAW_TO_BOARD_SCROLL_DELAY_MS);
}

function flashElement(targetEl, className, duration = 520) {
  if (!targetEl) return;
  targetEl.classList.remove(className);
  void targetEl.offsetWidth;
  targetEl.classList.add(className);
  window.setTimeout(() => targetEl.classList.remove(className), duration);
}

function calculateEnemyDamage(targetCard, slotId, attackType, enemy, options = {}) {
  const { sourceCard = null } = options;
  const divineRate = roll(90, 110) / 100;
  const formationRate = getDefensiveSlotRate(slotId);

  const basePower =
    attackType === "magic"
      ? enemy.stats.mag * 1.85 + enemy.stats.luk * 0.2
      : enemy.stats.atk * 1.85 + enemy.stats.spd * 0.2;

  const guardPoint = attackType === "magic" ? targetCard.stats.spr * 0.62 : targetCard.stats.def * 0.62;

  let damage = Math.max(12, Math.floor((basePower - guardPoint) * divineRate * formationRate));
  const attributeRate = getAttributeDamageRate(enemy, targetCard);
  damage = Math.max(1, Math.floor(damage * attributeRate));

  let rangedMitigationApplied = false;
  if (isFourthTurnRangedJob(sourceCard)) {
    damage = Math.max(8, Math.floor(damage * PLAYER_TURN4_RANGED_INCOMING_DAMAGE_RATE));
    rangedMitigationApplied = true;
  }

  let guardTriggered = false;
  if (hasJobTag(targetCard, "ガーディアン") && slotId === "front") {
    const crgPoint = roll(85, 105);
    if (targetCard.stats.def > crgPoint) {
      damage = Math.max(8, Math.floor(damage * 0.5));
      guardTriggered = true;
    }
  }

  return { damage, guardTriggered, rangedMitigationApplied };
}

function getPlayerSlotAttackRate(slotId, attackType, card = null) {
  const isPhysicalLike = attackType === "physical" || attackType === "berserkerRage";
  if (slotId === "leftWing" && isPhysicalLike) {
    if (card && hasAnyJobTag(card, ["ウィッパー", "アーチャー"])) return 1.2;
    return 1.1;
  }
  if (slotId === "rightWing" && isPhysicalLike) {
    if (card && hasAnyJobTag(card, ["ソーディアン", "ランサー"])) return 1.2;
    return 1.1;
  }
  if (slotId === "strategist" && (attackType === "magic" || attackType === "ancientMagic")) return 1.2;
  if (slotId === "general") return 1.1;
  return 1;
}

function getDefensiveSlotRate(slotId) {
  if (slotId === "front") return 0.82;
  if (slotId === "rightWing") return 0.9;
  if (slotId === "leftWing") return 1.12;
  return 1;
}

function getAttackType(turn) {
  const cycleTurn = normalizeBattleTurn(turn);
  if (cycleTurn === 6) return "spellblade";
  return cycleTurn % 3 === 0 ? "magic" : "physical";
}

function isThirdTurnMagicBoostActive() {
  return normalizeBattleTurn(state.turn) % 3 === 0;
}

function getBacklineMinstrelSupportSource() {
  for (const slotId of PLAYER_MINSTREL_BACKLINE_SLOT_IDS) {
    const card = state.board[slotId];
    if (card && hasJobTag(card, "ミンストレル")) {
      return { card, slotId };
    }
  }
  return null;
}

function getBacklineMinstrelMagicSupportRate() {
  return getBacklineMinstrelSupportSource() ? PLAYER_MINSTREL_BACKLINE_MAGIC_RATE : 1;
}

function getCurrentMagicAttackRate() {
  const baseMagicAttackRate = isThirdTurnMagicBoostActive()
    ? PLAYER_MAGIC_ATTACK_DAMAGE_RATE * PLAYER_TURN3_MAGIC_HEAL_BOOST_RATE
    : PLAYER_MAGIC_ATTACK_DAMAGE_RATE;
  return baseMagicAttackRate * getBacklineMinstrelMagicSupportRate();
}

function getCurrentAncientMagicAttackRate() {
  return PLAYER_ANCIENT_MAGIC_DAMAGE_RATE * getBacklineMinstrelMagicSupportRate();
}

function syncTurnTheme(turnValue = getDisplayTurnValue()) {
  const normalizedTurn = Math.max(1, Math.floor(Number(turnValue) || 1));
  if (!document.body) return;
  document.body.classList.toggle(TURN_MULTIPLE_THREE_THEME_CLASS, normalizedTurn % 3 === 0);
  document.body.classList.toggle(TURN_MULTIPLE_FOUR_THEME_CLASS, normalizedTurn % 4 === 0);
  document.body.classList.toggle(TURN_MULTIPLE_FIVE_THEME_CLASS, normalizedTurn % 5 === 0);
  document.body.classList.toggle(TURN_MULTIPLE_SIX_THEME_CLASS, normalizedTurn % 6 === 0);
}

function getAttackTypeLabel(type) {
  const strategistCard = state.board.strategist;
  const frontGuardianCard = state.board.front;
  const strategistHint = strategistCard
    ? canUseAncientMagic(strategistCard)
      ? ` / 軍師配置時: 物理・魔法(MP${PLAYER_MP_SPELL_COST})・古代魔法(MP${PLAYER_MP_ANCIENT_MAGIC_COST})選択`
      : ` / 軍師配置時: 物理・魔法(MP${PLAYER_MP_SPELL_COST})選択`
    : "";
  const guardianPassiveHint =
    frontGuardianCard && hasJobTag(frontGuardianCard, "ガーディアン")
      ? " / 前衛守護: 敵物理反撃を10%カット(全員対象)"
      : "";
  const legionHealHint = isFourthTurnActive()
    ? ` / フェーズ内TURN4効果: 後衛配置時に軍団回復(合計SPR+${PLAYER_TURN4_LEGION_HEAL_BASE}ぶんHP回復)`
    : "";
  const galeHint =
    isCycleTurn(5)
      ? ` / フェーズ内TURN5効果: SPD${PLAYER_GALE_FORMATION_TRIGGER_SPD}以上配置で疾風の陣(軍団合計SPD+${PLAYER_GALE_FORMATION_BASE_DAMAGE}ダメージ)`
      : "";
  const ironWallHint =
    isCycleTurn(5)
      ? " / フェーズ内TURN5効果: ガーディアン配置で鉄壁の陣(被ダメ10%カット+軍団合計DEFぶん軽減)"
      : "";
  const reversalHint =
    isCycleTurn(6)
      ? ` / フェーズ内TURN6効果: トリックスター配置で逆転の陣(軍団合計LUK+${PLAYER_REVERSAL_FORMATION_BASE_DAMAGE}ダメージ)`
      : "";
  const strategistEnchantHint =
    strategistCard &&
    typeof state.strategistPlacedTurnIndex === "number" &&
    getBattleTurnIndex() > state.strategistPlacedTurnIndex
      ? ` / 軍師エンチャント: max(0, 軍師MAG-${PLAYER_STRATEGIST_ENCHANT_MAG_BASE}) x ${PLAYER_STRATEGIST_ENCHANT_DAMAGE_RATE} を` +
        " ソーディアン・グラディエーター・ランサー・マジックナイトに追加。特例でアウルム在席時はセリーズにも付与"
      : "";
  const berserkerHint =
    isCycleTurn(5)
      ? ` / フェーズ内TURN5特例: ベルセルクを左翼・前衛・右翼で狂戦士の攻撃(${PLAYER_BERSERKER_RAGE_BASE_DAMAGE} + (ATK-${PLAYER_BERSERKER_RAGE_ATK_BASE})x${PLAYER_BERSERKER_RAGE_ATK_BONUS_RATE}, HP-与ダメージx${formatRateLabel(PLAYER_BERSERKER_RAGE_SELF_DAMAGE_RATE)} / 大将イザヤ時さらにx${formatRateLabel(PLAYER_BERSERKER_RAGE_IZAYA_GENERAL_RECOIL_RATE)})`
      : "";
  if (type === "spellblade") {
    return `味方 フェーズ内6ターン: 神聖魔法剣(MP${PLAYER_MP_SPELLBLADE_COST}必要 / ソーディアン・マジックナイト・グラディエーター限定)` +
      `${strategistHint}${guardianPassiveHint}${legionHealHint}${galeHint}${ironWallHint}${reversalHint}${strategistEnchantHint}`;
  }
  return type === "magic"
    ? `味方 フェーズ内3ターン: 魔法(MP${PLAYER_MP_SPELL_COST}必要, x${formatRateLabel(getCurrentMagicAttackRate())}, 防御無視)` +
      `${strategistHint}${guardianPassiveHint}${legionHealHint}${galeHint}${ironWallHint}${reversalHint}${strategistEnchantHint}`
    : `味方 フェーズ内1/2/4/5ターン: 物理${berserkerHint}${strategistHint}${guardianPassiveHint}${legionHealHint}${galeHint}${ironWallHint}${reversalHint}${strategistEnchantHint}`;
}

function getEnemyAttackType() {
  return Math.random() < 0.5 ? "physical" : "magic";
}

function getEmptySlots() {
  return SLOT_ORDER.filter((slot) => !state.board[slot.id]);
}

function getRecommendation(card, slots) {
  if (!card || slots.length === 0) return null;

  const candidates = slots.map((slot) => ({
    slotId: slot.id,
    score: scoreSlot(card, slot.id),
    reason: reasonForSlot(card, slot.id),
  }));

  candidates.sort((a, b) => b.score - a.score);
  return candidates[0];
}

function scoreSlot(card, slotId) {
  const { atk, def, mag, spr, spd, luk } = card.stats;

  if (slotId === "front") {
    let score = def * 1.75 + spr * 0.4 + atk * 0.35;
    if (hasJobTag(card, "ガーディアン")) score += 42;
    if (def >= 85) score += 18;
    return score;
  }

  if (slotId === "leftWing") {
    let score = atk * 1.35 + spd * 0.8 + luk * 0.4 - def * 0.2;
    if (hasAnyJobTag(card, ["グラディエーター", "ベルセルク", "ランサー"])) score += 22;
    return score;
  }

  if (slotId === "rightWing") {
    let score = atk * 1.2 + spd * 1.12 + luk * 0.7;
    if (hasAnyJobTag(card, ["アーチャー", "ガンナー", "ウィッパー"])) score += 44;
    return score;
  }

  if (slotId === "rear") {
    let score = spr * 1.4 + mag * 0.9 + def * 0.25;
    if (isPriestLike(card)) score += 30;
    return score;
  }

  if (slotId === "strategist") {
    let score = mag * 1.5 + luk * 0.85 + spr * 0.38;
    if (isWizardLike(card) || hasJobTag(card, "トリックスター")) score += 36;
    return score;
  }

  if (slotId === "general") {
    let score = atk * 1.05 + luk * 1.25 + spd * 0.62;
    if (luk >= 85) score += 18;
    return score;
  }

  return 0;
}

function reasonForSlot(card, slotId) {
  const { atk, def, mag, spr, spd, luk } = card.stats;

  if (slotId === "front") return `DEF ${def} で前衛耐久向き`;
  if (slotId === "leftWing") return `ATK ${atk} とSPD ${spd} で左翼圧力`;
  if (slotId === "rightWing") return `SPD ${spd} と職業 ${card.job} を活用`;
  if (slotId === "rear") return `SPR ${spr} とMAG ${mag} で後衛支援`;
  if (slotId === "strategist") return `MAG ${mag} で軍師適性`;
  if (slotId === "general") return `ATK ${atk} + LUK ${luk} で大将適性`;

  return "総合バランス";
}

function renderAll() {
  renderStatus();
  renderBoard();
  renderResources();
  renderControls();
  renderGuardChoice();
  renderLogs();
  renderDrawModal();
}

function getCurrentEnemy() {
  const activeEnemyRoster = getActiveEnemyRoster();
  if (!activeEnemyRoster.length) return ENEMY_ROSTER[0];
  const clampedEnemyIndex = Math.max(0, Math.min(state.enemyIndex, activeEnemyRoster.length - 1));
  return activeEnemyRoster[clampedEnemyIndex];
}

function getEnemyImageSrc(enemyId) {
  const imageSrc = ENEMY_CARD_IMAGE_BY_ID[enemyId];
  if (typeof imageSrc === "string" && imageSrc.trim()) {
    return imageSrc.trim();
  }
  return EMPTY_CARD_IMAGE_DATA_URI;
}

function renderStatus() {
  const currentEnemy = getCurrentEnemy();
  const activeEnemyRoster = getActiveEnemyRoster();

  enemyNameEl.textContent = currentEnemy.name;
  enemySubEl.textContent = `第${state.enemyIndex + 1}/${activeEnemyRoster.length}戦 / ${currentEnemy.subtitle}`;
  if (enemyArtImageEl) {
    enemyArtImageEl.src = getEnemyImageSrc(currentEnemy.id);
    enemyArtImageEl.alt = `${currentEnemy.name} のカード画像`;
  }
  Object.entries(enemyStatElements).forEach(([key, el]) => {
    el.textContent = String(currentEnemy.stats[key]);
  });

  enemyHpValueEl.textContent = `${state.enemyHp} / ${currentEnemy.hp}`;
  enemyHpFillEl.style.width = `${(state.enemyHp / currentEnemy.hp) * 100}%`;

  const playerMaxHp = getPlayerMaxHp();
  playerHpValueEl.textContent = `${state.playerHp} / ${playerMaxHp}`;
  playerHpFillEl.style.width = `${(state.playerHp / playerMaxHp) * 100}%`;
  if (playerMoraleValueEl) {
    playerMoraleValueEl.textContent =
      `${Math.max(PLAYER_MORALE_MIN, Math.min(PLAYER_MORALE_MAX, state.morale))} / ${PLAYER_MORALE_MAX}`;
  }
  if (playerMpValueEl) {
    playerMpValueEl.textContent = String(Math.max(0, Math.min(PLAYER_MP_MAX, state.mp)));
  }
  if (playerScoreValueEl) {
    playerScoreValueEl.textContent = formatScoreValue(state.score);
  }

  const displayTurn = getDisplayTurnValue();
  const displayPhase = getDisplayPhaseValue();
  turnValueEl.textContent = String(displayTurn);
  if (turnKickerEl) {
    turnKickerEl.textContent = `PHASE ${displayPhase}`;
  }
  if (turnRuleEl) {
    turnRuleEl.textContent = "";
  }
  syncTurnTheme(displayTurn);
}

function renderBoard() {
  const recommendation = getRecommendation(state.selectedCard, getEmptySlots());

  SLOT_ORDER.forEach((slot) => {
    const slotEl = boardSlotElements[slot.id];
    const holder = boardCardElements[slot.id];
    const card = state.board[slot.id];

    slotEl.classList.remove("place-ready", "recommended-slot");

    if (state.selectedCard && !state.battleEnded && !card) {
      slotEl.classList.add("place-ready");
      if (recommendation && recommendation.slotId === slot.id) {
        slotEl.classList.add("recommended-slot");
      }
    }

    holder.textContent = "";

    if (!card) {
      holder.innerHTML = `<p class="tagline">空席${state.selectedCard ? " / クリックで配置" : ""}</p>`;
      return;
    }

    const cardEl = buildCard(card, { compact: true });
    cardEl.classList.add("board-card");
    cardEl.dataset.slotId = slot.id;
    holder.appendChild(cardEl);
  });
}

function getPlayerTotalStats() {
  const totals = { atk: 0, def: 0, mag: 0, spr: 0, spd: 0, luk: 0 };

  const toLegionTotal = (statValue) => {
    const numeric = Number(statValue) || 0;
    if (numeric <= 80) return 0;
    return (numeric - 80) * 6;
  };

  Object.values(state.board)
    .filter(Boolean)
    .forEach((card) => {
      Object.keys(totals).forEach((key) => {
        totals[key] += toLegionTotal(card.stats[key]);
      });
    });
  return totals;
}

function renderResources() {
  const totals = getPlayerTotalStats();
  const summonCount = getUnlockedSummonCardCount();
  const ownedCardCount = buildPlayerCardPool().length;

  resourceGridEl.innerHTML = "";
  const items = [
    ["山札", state.deck.length],
    ["手札", state.hand.length],
    ["捨て札", state.discard.length],
    ["所持カード", ownedCardCount],
    ["召喚カード", `${summonCount}/${SUMMON_CHARACTERS.length}`],
    ["最大HP", getPlayerMaxHp()],
    ["合計ATK", totals.atk],
    ["合計DEF", totals.def],
    ["合計MAG", totals.mag],
    ["合計SPR", totals.spr],
    ["合計SPD", totals.spd],
    ["合計LUK", totals.luk],
  ];

  items.forEach(([label, value]) => {
    const el = document.createElement("article");
    el.className = "resource-item";
    el.innerHTML = `<span class="label">${label}</span><span class="value">${value}</span>`;
    resourceGridEl.appendChild(el);
  });
}

function renderControls() {
  drawButton.disabled =
    state.battleEnded ||
    state.enemyTransitioning ||
    state.pendingTurnDisplayUpdate ||
    state.drawModalOpen ||
    Boolean(state.pendingMagicChoice) ||
    Boolean(state.pendingLifeBurstSequence) ||
    hasPendingActivationLog() ||
    state.pendingBoardRecycle ||
    Boolean(state.pendingEnemyAction) ||
    state.pendingEnemyActionAwaitingConfirm ||
    state.pendingEnemyActionAwaitingResolve;

  if (state.battleEnded) {
    drawButton.textContent = "バトル終了";
  } else if (state.enemyTransitioning) {
    drawButton.textContent = "敵交代演出中";
  } else if (state.pendingTurnDisplayUpdate) {
    drawButton.textContent = "攻撃演出の完了待ち";
  } else if (state.pendingMagicChoice) {
    drawButton.textContent = "魔法使用確認中";
  } else if (hasPendingActivationLog()) {
    drawButton.textContent = "画面クリックでログ確認";
  } else if (state.pendingLifeBurstSequence) {
    drawButton.textContent = "画面クリックでライフバースト解放";
  } else if (state.pendingBoardRecycle) {
    drawButton.textContent = "画面クリックで再編";
  } else if (state.pendingEnemyActionAwaitingConfirm || state.pendingEnemyActionAwaitingResolve) {
    drawButton.textContent = "画面クリックで進行";
  } else if (state.pendingEnemyAction) {
    drawButton.textContent = "防御タイプ選択中";
  } else if (state.drawModalOpen) {
    drawButton.textContent = "ドロー選択中";
  } else if (state.selectedCard) {
    drawButton.textContent = "4枚選択に戻る";
  } else {
    drawButton.textContent = `神のサイコロで${PLAYER_DRAW_CARD_COUNT}枚ドロー`;
  }
}

function renderGuardChoice() {
  if (state.pendingMagicChoice) {
    const { mode, attacker } = state.pendingMagicChoice;
    guardChoicePanelEl.classList.remove("hidden");
    guardChoicePanelEl.setAttribute("aria-hidden", "false");
    if (guardChoiceButtonsEl) {
      guardChoiceButtonsEl.classList.remove("mode-three");
      guardChoiceButtonsEl.classList.remove("mode-four");
    }
    setChoiceButtonState(guardPhysicalBtn, { hidden: false, disabled: false });
    setChoiceButtonState(guardMagicBtn, { hidden: false, disabled: false });
    setChoiceButtonState(guardAncientBtn, { hidden: true });
    setChoiceButtonState(guardFourthBtn, { hidden: true });
    if (guardChoiceTitleEl) {
      guardChoiceTitleEl.textContent = "魔法使用確認";
    }

    if (mode === "strategistAttack") {
      const ancientConditionMet = canUseAncientMagic(attacker);
      const ancientMpEnough = state.mp >= PLAYER_MP_ANCIENT_MAGIC_COST;
      const ancientAvailable = ancientConditionMet && ancientMpEnough;
      const ancientDisabledReason = !ancientConditionMet
        ? `古代魔法はフェーズ内${PLAYER_ANCIENT_MAGIC_AVAILABLE_TURN}ターン目以降かつウィザード/ビショップかつMAG90以上限定です。`
        : !ancientMpEnough
          ? `古代魔法はMP不足です（現在MP ${state.mp}/${PLAYER_MP_MAX} / 必要MP ${PLAYER_MP_ANCIENT_MAGIC_COST}）。`
          : "";
      const magicKnightMagicSwordHint = canUseMagicKnightMagicSword(attacker)
        ? " / マジックナイト: 魔法選択時は魔法剣(物理+魔法合算, MP25)"
        : "";
      if (guardChoiceTitleEl) {
        guardChoiceTitleEl.textContent = "軍師戦術選択";
      }
      guardChoiceTextEl.textContent = `${attacker.name} の攻撃種別を選択してください。`;
      if (!ancientConditionMet) {
        guardChoiceHintEl.textContent =
          `現在MP: ${state.mp}/${PLAYER_MP_MAX} / 物理(0)・魔法(MP${PLAYER_MP_SPELL_COST}, x${formatRateLabel(getCurrentMagicAttackRate())}, 防御無視) / ` +
          `古代魔法はフェーズ内${PLAYER_ANCIENT_MAGIC_AVAILABLE_TURN}ターン目以降かつウィザード/ビショップかつMAG90以上限定` +
          `${magicKnightMagicSwordHint}`;
      } else if (!ancientMpEnough) {
        guardChoiceHintEl.textContent =
          `現在MP: ${state.mp}/${PLAYER_MP_MAX} / 物理(0)・魔法(MP${PLAYER_MP_SPELL_COST}, x${formatRateLabel(getCurrentMagicAttackRate())}, 防御無視)・` +
          `古代魔法(MP${PLAYER_MP_ANCIENT_MAGIC_COST}, x${formatRateLabel(getCurrentAncientMagicAttackRate())}, 敵DEFで軽減 / フェーズ内${PLAYER_ANCIENT_MAGIC_AVAILABLE_TURN}ターン目以降)` +
          `${magicKnightMagicSwordHint} / 古代魔法はMP不足`;
      } else {
        guardChoiceHintEl.textContent =
          `現在MP: ${state.mp}/${PLAYER_MP_MAX} / 物理(0)・魔法(MP${PLAYER_MP_SPELL_COST}, x${formatRateLabel(getCurrentMagicAttackRate())}, 防御無視)・` +
          `古代魔法(MP${PLAYER_MP_ANCIENT_MAGIC_COST}, x${formatRateLabel(getCurrentAncientMagicAttackRate())}, 敵DEFで軽減 / フェーズ内${PLAYER_ANCIENT_MAGIC_AVAILABLE_TURN}ターン目以降)` +
          `${magicKnightMagicSwordHint}`;
      }
      guardChoiceHintEl.hidden = false;
      guardPhysicalBtn.textContent = "物理攻撃";
      guardMagicBtn.textContent = "魔法攻撃";
      if (guardAncientBtn) {
        guardAncientBtn.textContent = "古代魔法";
      }
      setChoiceButtonState(guardAncientBtn, {
        hidden: false,
        disabled: !ancientAvailable,
        reason: ancientDisabledReason,
      });
      setChoiceButtonState(guardFourthBtn, { hidden: true });
      if (guardChoiceButtonsEl) {
        guardChoiceButtonsEl.classList.add("mode-three");
        guardChoiceButtonsEl.classList.remove("mode-four");
      }
      return;
    }

    if (mode === "generalCommand") {
      const spellbladeAvailable = canUseGeneralCommandSpellblade(attacker);
      const holyHealConditionMet = canUseHolyRearHeal(attacker);
      const holyHealMpEnough = state.mp >= PLAYER_MP_HOLY_HEAL_COST;
      const holyHealAvailable = holyHealConditionMet && holyHealMpEnough;
      const holyHealDisabledReason = !holyHealConditionMet
        ? `${attacker.name} は神聖回復魔法の条件未達です（フェーズ内${PLAYER_REAR_HOLY_HEAL_AVAILABLE_TURN}ターン目以降 / プリースト / SPR${PLAYER_REAR_HOLY_HEAL_TRIGGER_SPR}以上）。`
        : !holyHealMpEnough
          ? `神聖回復魔法はMP不足です（現在MP ${state.mp}/${PLAYER_MP_MAX} / 必要MP ${PLAYER_MP_HOLY_HEAL_COST}）。`
          : "";
      const fourthAction = holyHealConditionMet ? "holyHeal" : spellbladeAvailable ? "spellblade" : null;
      if (guardChoiceTitleEl) {
        guardChoiceTitleEl.textContent = "大将指令";
      }
      guardChoiceTextEl.textContent = `${attacker.name} の行動を選択してください。`;
      guardChoiceHintEl.textContent =
        `現在MP: ${state.mp}/${PLAYER_MP_MAX} / 回復魔法(MP${PLAYER_MP_SPELL_COST})` +
        (holyHealConditionMet ? ` / 神聖回復魔法(MP${PLAYER_MP_HOLY_HEAL_COST})` : "") +
        (spellbladeAvailable ? ` / 神聖魔法剣(MP${PLAYER_MP_SPELLBLADE_COST})` : "");
      guardChoiceHintEl.hidden = false;
      guardPhysicalBtn.textContent = "物理攻撃";
      guardMagicBtn.textContent = "魔法攻撃";
      if (guardAncientBtn) {
        guardAncientBtn.textContent = "回復魔法";
      }
      if (guardFourthBtn) {
        guardFourthBtn.textContent = fourthAction === "holyHeal" ? "神聖回復魔法" : "神聖魔法剣";
      }
      setChoiceButtonState(guardAncientBtn, { hidden: false, disabled: false });
      setChoiceButtonState(guardFourthBtn, {
        hidden: !fourthAction,
        disabled: fourthAction === "holyHeal" ? !holyHealAvailable : false,
        reason: fourthAction === "holyHeal" ? holyHealDisabledReason : "",
      });
      if (guardChoiceButtonsEl) {
        if (fourthAction) {
          guardChoiceButtonsEl.classList.add("mode-four");
          guardChoiceButtonsEl.classList.remove("mode-three");
        } else {
          guardChoiceButtonsEl.classList.add("mode-three");
          guardChoiceButtonsEl.classList.remove("mode-four");
        }
      }
      return;
    }

    guardChoiceTextEl.textContent =
      mode === "heal"
        ? `${attacker.name} の後衛行動を選択してください。`
        : mode === "spellblade"
          ? `${attacker.name} は神聖魔法剣を使いますか？ (MP${PLAYER_MP_SPELLBLADE_COST} / ソーディアン・マジックナイト・グラディエーター限定)`
          : `${attacker.name} は攻撃魔法を使いますか？ (MP${PLAYER_MP_SPELL_COST})`;
    guardChoiceHintEl.textContent =
      mode === "heal"
        ? `現在MP: ${state.mp}/${PLAYER_MP_MAX}`
        : `現在MP: ${state.mp}/${PLAYER_MP_MAX}` +
          `${mode === "attack" && canUseMagicKnightMagicSword(attacker) ? " / マジックナイト: 魔法選択で魔法剣(物理+魔法合算, MP25)" : ""}`;
    guardChoiceHintEl.hidden = false;
    if (mode === "heal") {
      const holyHealConditionMet = canUseHolyRearHeal(attacker);
      const holyHealMpEnough = state.mp >= PLAYER_MP_HOLY_HEAL_COST;
      const holyHealAvailable = holyHealConditionMet && holyHealMpEnough;
      const holyHealDisabledReason = !holyHealConditionMet
        ? `${attacker.name} は神聖回復魔法の条件未達です（フェーズ内${PLAYER_REAR_HOLY_HEAL_AVAILABLE_TURN}ターン目以降 / プリースト / SPR${PLAYER_REAR_HOLY_HEAL_TRIGGER_SPR}以上）。`
        : !holyHealMpEnough
          ? `神聖回復魔法はMP不足です（現在MP ${state.mp}/${PLAYER_MP_MAX} / 必要MP ${PLAYER_MP_HOLY_HEAL_COST}）。`
          : "";
      const rearMagicLabel = canUseMagicKnightMagicSword(attacker) ? "魔法攻撃(MP25, 魔法剣)" : "魔法攻撃(MP25)";
      guardPhysicalBtn.textContent = "通常攻撃";
      guardMagicBtn.textContent = "回復魔法";
      if (guardAncientBtn) {
        guardAncientBtn.textContent = "神聖回復魔法";
      }
      if (guardFourthBtn) {
        guardFourthBtn.textContent = "魔法攻撃";
      }
      setChoiceButtonState(guardAncientBtn, {
        hidden: false,
        disabled: !holyHealAvailable,
        reason: holyHealDisabledReason,
      });
      setChoiceButtonState(guardFourthBtn, { hidden: false, disabled: false });
      if (guardChoiceButtonsEl) {
        guardChoiceButtonsEl.classList.add("mode-four");
        guardChoiceButtonsEl.classList.remove("mode-three");
      }
      if (guardChoiceHintEl) {
        guardChoiceHintEl.textContent =
          `現在MP: ${state.mp}/${PLAYER_MP_MAX} / 回復魔法(MP${PLAYER_MP_SPELL_COST}) / 神聖回復魔法(MP${PLAYER_MP_HOLY_HEAL_COST}) / ${rearMagicLabel}` +
          (!holyHealConditionMet
            ? ` / 神聖回復魔法はフェーズ内${PLAYER_REAR_HOLY_HEAL_AVAILABLE_TURN}ターン目以降かつプリーストかつSPR${PLAYER_REAR_HOLY_HEAL_TRIGGER_SPR}以上限定`
            : !holyHealMpEnough
              ? " / 神聖回復魔法はMP不足"
              : "");
      }
    } else {
      guardPhysicalBtn.textContent = "はい";
      guardMagicBtn.textContent = "いいえ";
      setChoiceButtonState(guardAncientBtn, { hidden: true });
      setChoiceButtonState(guardFourthBtn, { hidden: true });
      if (guardChoiceButtonsEl) {
        guardChoiceButtonsEl.classList.remove("mode-three");
        guardChoiceButtonsEl.classList.remove("mode-four");
      }
    }
    return;
  }

  if (hasPendingActivationLog()) {
    guardChoicePanelEl.classList.add("hidden");
    guardChoicePanelEl.setAttribute("aria-hidden", "true");
    if (guardChoiceTitleEl) {
      guardChoiceTitleEl.textContent = "先読み防御";
    }
    guardChoiceTextEl.textContent = "発動ログ確認中";
    guardChoiceHintEl.textContent = "画面クリックで進行";
    guardChoiceHintEl.hidden = false;
    guardPhysicalBtn.textContent = "物理防御";
    guardMagicBtn.textContent = "魔法防御";
    setChoiceButtonState(guardPhysicalBtn, { hidden: false, disabled: false });
    setChoiceButtonState(guardMagicBtn, { hidden: false, disabled: false });
    setChoiceButtonState(guardAncientBtn, { hidden: true });
    setChoiceButtonState(guardFourthBtn, { hidden: true });
    if (guardChoiceButtonsEl) {
      guardChoiceButtonsEl.classList.remove("mode-three");
      guardChoiceButtonsEl.classList.remove("mode-four");
    }
    return;
  }

  if (state.pendingLifeBurstSequence) {
    guardChoicePanelEl.classList.add("hidden");
    guardChoicePanelEl.setAttribute("aria-hidden", "true");
    if (guardChoiceTitleEl) {
      guardChoiceTitleEl.textContent = "先読み防御";
    }
    guardChoiceTextEl.textContent = "ライフバースト演出中";
    guardChoiceHintEl.textContent = "画面クリックで解放";
    guardChoiceHintEl.hidden = false;
    guardPhysicalBtn.textContent = "物理防御";
    guardMagicBtn.textContent = "魔法防御";
    setChoiceButtonState(guardPhysicalBtn, { hidden: false, disabled: false });
    setChoiceButtonState(guardMagicBtn, { hidden: false, disabled: false });
    setChoiceButtonState(guardAncientBtn, { hidden: true });
    setChoiceButtonState(guardFourthBtn, { hidden: true });
    if (guardChoiceButtonsEl) {
      guardChoiceButtonsEl.classList.remove("mode-three");
      guardChoiceButtonsEl.classList.remove("mode-four");
    }
    return;
  }

  if (!state.pendingEnemyAction) {
    guardChoicePanelEl.classList.add("hidden");
    guardChoicePanelEl.setAttribute("aria-hidden", "true");
    if (guardChoiceTitleEl) {
      guardChoiceTitleEl.textContent = "先読み防御";
    }
    guardChoiceTextEl.textContent = "物理防御か魔法防御を選択";
    guardChoiceHintEl.textContent = "";
    guardChoiceHintEl.hidden = true;
    guardPhysicalBtn.textContent = "物理防御";
    guardMagicBtn.textContent = "魔法防御";
    setChoiceButtonState(guardPhysicalBtn, { hidden: false, disabled: false });
    setChoiceButtonState(guardMagicBtn, { hidden: false, disabled: false });
    setChoiceButtonState(guardAncientBtn, { hidden: true });
    setChoiceButtonState(guardFourthBtn, { hidden: true });
    if (guardChoiceButtonsEl) {
      guardChoiceButtonsEl.classList.remove("mode-three");
      guardChoiceButtonsEl.classList.remove("mode-four");
    }
    return;
  }

  if (state.pendingEnemyActionAwaitingConfirm) {
    guardChoicePanelEl.classList.add("hidden");
    guardChoicePanelEl.setAttribute("aria-hidden", "true");
    setChoiceButtonState(guardAncientBtn, { hidden: true });
    setChoiceButtonState(guardFourthBtn, { hidden: true });
    if (guardChoiceButtonsEl) {
      guardChoiceButtonsEl.classList.remove("mode-three");
      guardChoiceButtonsEl.classList.remove("mode-four");
    }
    return;
  }

  guardChoicePanelEl.classList.remove("hidden");
  guardChoicePanelEl.setAttribute("aria-hidden", "false");
  if (guardChoiceTitleEl) {
    guardChoiceTitleEl.textContent = "先読み防御";
  }
  const sourceCard = state.pendingEnemyAction.sourceCard;
  guardChoiceTextEl.textContent =
    `${sourceCard.name} の先読み防御を選択してください（命中時30%カット）。`;
  guardPhysicalBtn.textContent = "物理防御";
  guardMagicBtn.textContent = "魔法防御";
  setChoiceButtonState(guardPhysicalBtn, { hidden: false, disabled: false });
  setChoiceButtonState(guardMagicBtn, { hidden: false, disabled: false });
  setChoiceButtonState(guardAncientBtn, { hidden: true });
  setChoiceButtonState(guardFourthBtn, { hidden: true });
  if (guardChoiceButtonsEl) {
    guardChoiceButtonsEl.classList.remove("mode-three");
    guardChoiceButtonsEl.classList.remove("mode-four");
  }

  const insight = state.pendingEnemyAction.strategistInsight;
  if (!insight) {
    guardChoiceHintEl.textContent = "";
    guardChoiceHintEl.hidden = true;
    return;
  }

  const predictedLabel = insight.predictedType === "magic" ? "魔法" : "物理";
  guardChoiceHintEl.textContent =
    `軍師予測: ${insight.strategistName} は敵の反撃を${predictedLabel}と予測（信頼度${insight.accuracy}%）`;
  guardChoiceHintEl.hidden = false;
}

function renderLogs() {
  logListEl.textContent = "";

  [...state.logs].reverse().forEach((entry) => {
    const li = document.createElement("li");
    li.className = `log-item${entry.kind ? ` ${entry.kind}` : ""}`;
    li.textContent = entry.text;
    logListEl.appendChild(li);
  });
}

function renderDrawModal() {
  if (!state.drawModalOpen) {
    drawModalEl.classList.add("hidden");
    drawModalEl.setAttribute("aria-hidden", "true");
    if (drawShuffleBtn) {
      drawShuffleBtn.disabled = true;
      drawShuffleBtn.textContent = "4枚シャッフル";
    }
    modalCardsEl.textContent = "";
    return;
  }

  const currentEnemy = getCurrentEnemy();
  const shuffleCost = getDrawShuffleCost();
  const displayPhase = getDisplayPhaseValue();
  if (drawTurnValueEl) {
    drawTurnValueEl.textContent = String(getDisplayTurnValue());
  }
  if (drawTurnLabelEl) {
    drawTurnLabelEl.textContent = `P${displayPhase} TURN`;
  }
  if (drawEnemyHpValueEl) {
    drawEnemyHpValueEl.textContent = currentEnemy ? `${state.enemyHp} / ${currentEnemy.hp}` : "0 / 0";
  }
  if (drawPlayerHpValueEl) {
    drawPlayerHpValueEl.textContent = `${state.playerHp} / ${getPlayerMaxHp()}`;
  }
  if (drawPlayerMpValueEl) {
    drawPlayerMpValueEl.textContent = `${Math.max(0, Math.min(PLAYER_MP_MAX, state.mp))} / ${PLAYER_MP_MAX}`;
  }
  if (drawPlayerMoraleValueEl) {
    drawPlayerMoraleValueEl.textContent =
      `${Math.max(PLAYER_MORALE_MIN, Math.min(PLAYER_MORALE_MAX, state.morale))} / ${PLAYER_MORALE_MAX}`;
  }
  if (drawShuffleBtn) {
    const canShuffle =
      state.draft.length === PLAYER_DRAW_CARD_COUNT &&
      state.mp >= shuffleCost.mp &&
      state.morale >= shuffleCost.morale;
    const discountLabel = shuffleCost.discountRate < 1 ? " 半減" : "";
    drawShuffleBtn.textContent = `4枚シャッフル MP${shuffleCost.mp}/士気${shuffleCost.morale}${discountLabel}`;
    drawShuffleBtn.disabled = !canShuffle;
  }

  drawModalEl.classList.remove("hidden");
  drawModalEl.setAttribute("aria-hidden", "false");
  modalCardsEl.textContent = "";

  state.draft.forEach((card) => {
    const cardEl = buildCard(card, { compact: false });
    cardEl.classList.add("modal-draw-card");
    cardEl.dataset.action = "pick-modal-card";
    cardEl.dataset.cardId = card.id;

    const recommendation = getRecommendation(card, getEmptySlots());
    const rec = document.createElement("p");
    rec.className = "recommendation";
    rec.textContent = recommendation
      ? `推奨: ${SLOT_BY_ID[recommendation.slotId].label} / ${recommendation.reason}`
      : "推奨: 空きスロットなし";

    cardEl.appendChild(rec);
    modalCardsEl.appendChild(cardEl);
  });
}

function buildCard(card, options = {}) {
  const { compact = false } = options;
  const fragment = template.content.cloneNode(true);
  const wrapper = fragment.querySelector(".mini-card");
  const title = fragment.querySelector("h3");
  const meta = fragment.querySelector(".meta");
  const tagline = fragment.querySelector(".tagline");
  const stats = fragment.querySelector(".stats");
  const imagePath = PLAYER_CARD_IMAGE_BY_ID[card.id];

  if (imagePath) {
    const art = document.createElement("div");
    art.className = "mini-card-art";

    const image = document.createElement("img");
    image.src = imagePath;
    image.alt = `${card.name} の画像`;
    image.loading = "lazy";
    image.decoding = "async";

    art.appendChild(image);
    wrapper.insertBefore(art, wrapper.firstChild);
  }

  title.textContent = card.name;
  const cardClassLabel = getCardClassLabel(card);
  const cardTypeLabel = card.isSummonCard ? "召喚カード" : "通常カード";
  meta.textContent = `${card.job} / ${card.attribute} / ${card.race} / CLASS ${cardClassLabel} / ${cardTypeLabel}`;
  tagline.textContent = card.isSummonCard ? `[召喚] ${card.title}` : card.title;

  const entries = [
    ["CLASS", cardClassLabel],
    ["ATK", card.stats.atk],
    ["DEF", card.stats.def],
    ["MAG", card.stats.mag],
    ["SPR", card.stats.spr],
    ["SPD", card.stats.spd],
    ["LUK", card.stats.luk],
  ];

  entries.forEach(([label, value]) => {
    const item = document.createElement("div");
    item.innerHTML = `<dt>${label}</dt><dd>${value}</dd>`;
    stats.appendChild(item);
  });

  if (compact) {
    wrapper.classList.add("mini-card-compact");
    meta.hidden = true;
    tagline.hidden = true;
    stats.hidden = true;
  }

  return wrapper;
}

function renderAbilityInfo(card = null, slotId = null) {
  if (!abilityInfoPlaceholderEl || !abilityInfoDetailEl) return;

  if (!card) {
    abilityInfoPlaceholderEl.hidden = false;
    abilityInfoPlaceholderEl.textContent = "盤面カードにカーソルを合わせるとステータスを表示";
    abilityInfoDetailEl.hidden = true;
    abilityInfoDetailEl.textContent = "";
    return;
  }

  const cardClassLabel = getCardClassLabel(card);
  const entries = [
    ["CLASS", cardClassLabel],
    ["ATK", card.stats.atk],
    ["DEF", card.stats.def],
    ["MAG", card.stats.mag],
    ["SPR", card.stats.spr],
    ["SPD", card.stats.spd],
    ["LUK", card.stats.luk],
  ];
  const statsHtml = entries
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join("");
  const slotLabel = slotId && SLOT_BY_ID[slotId] ? ` / 配置: ${SLOT_BY_ID[slotId].label}` : "";
  const cardTypeLabel = card.isSummonCard ? " / 召喚カード" : " / 通常カード";

  abilityInfoPlaceholderEl.hidden = true;
  abilityInfoDetailEl.hidden = false;
  abilityInfoDetailEl.innerHTML =
    `<p class="ability-card-name">${card.name}${slotLabel}</p>` +
    `<p class="ability-card-meta">${card.job} / ${card.attribute} / ${card.race} / CLASS ${cardClassLabel}${cardTypeLabel}</p>` +
    `<dl class="ability-stats-grid">${statsHtml}</dl>`;
}

function getCardClassLabel(card) {
  if (!card) return "SR";
  if (typeof card.rarity === "string" && card.rarity.trim()) {
    return card.rarity.trim();
  }
  return TITLE_PASSWORD_S_RANK_IDS.has(card.id) ? "S" : "SR";
}

function pushLogEntry(text, kind = "") {
  state.logs.push({ text, kind });
  if (state.logs.length > 120) {
    state.logs.shift();
  }
}

function hasPendingActivationLog() {
  return state.pendingActivationLogQueue.length > 0;
}

function showQueuedActivationLog() {
  if (!hasPendingActivationLog()) return;
  const queuedLog = state.pendingActivationLogQueue[0];
  if (!queuedLog) return;
  showFloatingLog(queuedLog.text, queuedLog.kind, { hold: true });
}

function acknowledgeActivationLog() {
  if (!hasPendingActivationLog()) return false;
  state.pendingActivationLogQueue.shift();
  if (hasPendingActivationLog()) {
    showQueuedActivationLog();
  } else {
    hideFloatingLog(true);
  }
  return true;
}

function addLog(text, kind = "") {
  pushLogEntry(text, kind);
  if (hasPendingActivationLog()) return;
  showFloatingLog(text, kind);
}

function addActivationLog(text, kind = "good") {
  pushLogEntry(text, kind);
  state.pendingActivationLogQueue.push({ text, kind });
  if (state.pendingActivationLogQueue.length === 1) {
    showQueuedActivationLog();
  }
}

function addPriorityActivationLogs(entries = []) {
  const validEntries = entries.filter((entry) => entry && entry.text);
  if (validEntries.length === 0) return;

  validEntries.forEach((entry) => {
    pushLogEntry(entry.text, entry.kind || "good");
  });

  for (let index = validEntries.length - 1; index >= 0; index -= 1) {
    const entry = validEntries[index];
    state.pendingActivationLogQueue.unshift({ text: entry.text, kind: entry.kind || "good" });
  }
  showQueuedActivationLog();
}

function positionFloatingLog() {
  if (!floatingLogEl) return;
  const bottomOffset = 32;
  if (window.visualViewport) {
    const viewportCenterX = window.visualViewport.offsetLeft + window.visualViewport.width / 2;
    const viewportBottomY = window.visualViewport.offsetTop + window.visualViewport.height;
    floatingLogEl.style.left = `${viewportCenterX}px`;
    floatingLogEl.style.top = `${Math.max(24, viewportBottomY - bottomOffset)}px`;
    return;
  }

  floatingLogEl.style.left = `${window.innerWidth / 2}px`;
  floatingLogEl.style.top = `${Math.max(24, window.innerHeight - bottomOffset)}px`;
}

function extractPrimaryDamageValue(text = "") {
  if (typeof text !== "string" || !text) return null;
  const matches = [...text.matchAll(/([+-]?\d+)\s*ダメージ/g)];
  if (matches.length === 0) return null;
  const lastMatch = matches[matches.length - 1];
  const damageValue = Number(lastMatch[1]);
  if (!Number.isFinite(damageValue)) return null;
  return Math.floor(damageValue);
}

function renderFloatingLogContent(text) {
  if (!floatingLogEl) return;
  const damageValue = extractPrimaryDamageValue(text);
  if (damageValue === null) {
    floatingLogEl.classList.remove("has-damage-focus");
    floatingLogEl.textContent = text;
    return;
  }

  floatingLogEl.classList.add("has-damage-focus");
  floatingLogEl.textContent = "";

  const damageLine = document.createElement("span");
  damageLine.className = "floating-log-damage";
  damageLine.textContent = `${damageValue} DAMAGE`;

  const bodyLine = document.createElement("span");
  bodyLine.className = "floating-log-body";
  bodyLine.textContent = text;

  floatingLogEl.append(damageLine, bodyLine);
}

function showFloatingLog(text, kind = "", options = {}) {
  if (!floatingLogEl || !text) return;
  const hold = Boolean(options && options.hold);

  window.clearTimeout(floatingLogDismissTimer);
  window.clearTimeout(floatingLogHideTimer);

  positionFloatingLog();
  floatingLogEl.className = "floating-log";
  if (kind) {
    floatingLogEl.classList.add(kind);
  }
  renderFloatingLogContent(text);
  floatingLogEl.hidden = false;
  floatingLogEl.classList.remove("is-visible", "is-hiding");
  void floatingLogEl.offsetWidth;
  floatingLogEl.classList.add("is-visible");

  if (
    hold ||
    hasPendingActivationLog() ||
    state.pendingTurnDisplayUpdate ||
    state.pendingMagicChoice ||
    (state.pendingEnemyAction && state.pendingEnemyActionAwaitingConfirm) ||
    state.pendingEnemyActionAwaitingResolve ||
    state.pendingBoardRecycle
  ) {
    return;
  }

  floatingLogDismissTimer = window.setTimeout(() => {
    hideFloatingLog(false);
  }, 1600);
}

function hideFloatingLog(immediate = false) {
  if (!floatingLogEl) return;

  window.clearTimeout(floatingLogDismissTimer);
  window.clearTimeout(floatingLogHideTimer);

  if (floatingLogEl.hidden) return;

  if (immediate) {
    floatingLogEl.hidden = true;
    floatingLogEl.classList.remove("is-visible", "is-hiding");
    return;
  }

  floatingLogEl.classList.remove("is-visible");
  floatingLogEl.classList.add("is-hiding");
  floatingLogHideTimer = window.setTimeout(() => {
    if (!floatingLogEl) return;
    floatingLogEl.hidden = true;
    floatingLogEl.classList.remove("is-hiding");
  }, 220);
}

function roll(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(list) {
  const result = [...list];

  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}
