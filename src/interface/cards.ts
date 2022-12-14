export interface CardData {
    data: Datum[];
}

export interface Datum {
    id:            number;
    name:          string;
    type:          Type;
    desc:          string;
    race:          Race;
    archetype?:    string;
    card_sets?:    CardSet[];
    card_images:   CardImage[];
    card_prices:   CardPrice[];
    atk?:          number | null;
    def?:          number;
    level?:        number;
    attribute?:    Attribute;
    banlist_info?: BanlistInfo;
    scale?:        number;
    linkval?:      number;
    linkmarkers?:  Linkmarker[];
}

export enum Attribute {
    Dark = "DARK",
    Divine = "DIVINE",
    Earth = "EARTH",
    Fire = "FIRE",
    Light = "LIGHT",
    Water = "WATER",
    Wind = "WIND",
}

export interface BanlistInfo {
    ban_ocg?:  Ban;
    ban_goat?: Ban;
    ban_tcg?:  Ban;
}

export enum Ban {
    Banned = "Banned",
    Limited = "Limited",
    SemiLimited = "Semi-Limited",
}

export interface CardImage {
    id:              number;
    image_url:       string;
    image_url_small: string;
}

export interface CardPrice {
    cardmarket_price:   string;
    tcgplayer_price:    string;
    ebay_price:         string;
    amazon_price:       string;
    coolstuffinc_price: string;
}

export interface CardSet {
    set_name:        string;
    set_code:        string;
    set_rarity:      SetRarity;
    set_rarity_code: SetRarityCode;
    set_price:       string;
}

export enum SetRarity {
    CollectorSRare = "Collector's Rare",
    Common = "Common",
    DuelTerminalNormalParallelRare = "Duel Terminal Normal Parallel Rare",
    DuelTerminalNormalRareParallelRare = "Duel Terminal Normal Rare Parallel Rare",
    DuelTerminalRareParallelRare = "Duel Terminal Rare Parallel Rare",
    DuelTerminalSuperParallelRare = "Duel Terminal Super Parallel Rare",
    DuelTerminalUltraParallelRare = "Duel Terminal Ultra Parallel Rare",
    ExtraSecretRare = "Extra Secret Rare",
    GhostGoldRare = "Ghost/Gold Rare",
    GhostRare = "Ghost Rare",
    GoldRare = "Gold Rare",
    GoldSecretRare = "Gold Secret Rare",
    MosaicRare = "Mosaic Rare",
    NormalParallelRare = "Normal Parallel Rare",
    PlatinumRare = "Platinum Rare",
    PlatinumSecretRare = "Platinum Secret Rare",
    PremiumGoldRare = "Premium Gold Rare",
    PrismaticSecretRare = "Prismatic Secret Rare",
    Rare = "Rare",
    SecretRare = "Secret Rare",
    ShatterfoilRare = "Shatterfoil Rare",
    ShortPrint = "Short Print",
    Starfoil = "Starfoil",
    StarfoilRare = "Starfoil Rare",
    StarlightRare = "Starlight Rare",
    SuperParallelRare = "Super Parallel Rare",
    SuperRare = "Super Rare",
    SuperShortPrint = "Super Short Print",
    The10000SecretRare = "10000 Secret Rare",
    UltimateRare = "Ultimate Rare",
    UltraParallelRare = "Ultra Parallel Rare",
    UltraRare = "Ultra Rare",
    UltraSecretRare = "Ultra Secret Rare",
}

export enum SetRarityCode {
    C = "(C)",
    CR = "(CR)",
    Dnpr = "(DNPR)",
    Drpr = "(DRPR)",
    Dspr = "(DSPR)",
    Dupr = "(DUPR)",
    Empty = "",
    GScR = "(GScR)",
    Ggr = "(GGR)",
    Gr = "(GR)",
    Gur = "(GUR)",
    Msr = "(MSR)",
    PG = "(PG)",
    PS = "(PS)",
    PScR = "(PScR)",
    Pir = "(PIR)",
    R = "(R)",
    SP = "(SP)",
    SSP = "(SSP)",
    ScR = "(ScR)",
    Sfr = "(SFR)",
    Shr = "(SHR)",
    Spr = "(SPR)",
    Sr = "(SR)",
    StR = "(StR)",
    The10000ScR = "(10000ScR)",
    UScR = "(UScR)",
    Upr = "(UPR)",
    Ur = "(UR)",
    UtR = "(UtR)",
}

export enum Linkmarker {
    Bottom = "Bottom",
    BottomLeft = "Bottom-Left",
    BottomRight = "Bottom-Right",
    Left = "Left",
    Right = "Right",
    Top = "Top",
    TopLeft = "Top-Left",
    TopRight = "Top-Right",
}

export enum Race {
    AlexisRhodes = "Alexis Rhodes",
    Andrew = "Andrew",
    Aqua = "Aqua",
    Arkana = "Arkana",
    AsterPhoenix = "Aster Phoenix",
    AxelBrodie = "Axel Brodie",
    BastionMisaw = "Bastion Misaw",
    Beast = "Beast",
    BeastWarrior = "Beast-Warrior",
    Bonz = "Bonz",
    ChazzPrincet = "Chazz Princet",
    Christine = "Christine",
    Continuous = "Continuous",
    Counter = "Counter",
    CreatorGod = "Creator-God",
    Cyberse = "Cyberse",
    DRVellianC = "Dr. Vellian C",
    David = "David",
    Dinosaur = "Dinosaur",
    DivineBeast = "Divine-Beast",
    Dragon = "Dragon",
    Emma = "Emma",
    Equip = "Equip",
    EspaRoba = "Espa Roba",
    Fairy = "Fairy",
    Field = "Field",
    Fiend = "Fiend",
    Fish = "Fish",
    Insect = "Insect",
    Ishizu = "Ishizu",
    IshizuIshtar = "Ishizu Ishtar",
    JadenYuki = "Jaden Yuki",
    JesseAnderso = "Jesse Anderso",
    Joey = "Joey",
    JoeyWheeler = "Joey Wheeler",
    Kaiba = "Kaiba",
    Keith = "Keith",
    LumisUmbra = "Lumis Umbra",
    Machine = "Machine",
    Mai = "Mai",
    MaiValentine = "Mai Valentine",
    Mako = "Mako",
    Normal = "Normal",
    Odion = "Odion",
    Pegasus = "Pegasus",
    Plant = "Plant",
    Psychic = "Psychic",
    Pyro = "Pyro",
    QuickPlay = "Quick-Play",
    Reptile = "Reptile",
    Rex = "Rex",
    Ritual = "Ritual",
    Rock = "Rock",
    SeaSerpent = "Sea Serpent",
    SetoKaiba = "Seto Kaiba",
    Spellcaster = "Spellcaster",
    SyrusTruesda = "Syrus Truesda",
    TeaGardner = "Tea Gardner",
    Thunder = "Thunder",
    TyrannoHassl = "Tyranno Hassl",
    Warrior = "Warrior",
    Weevil = "Weevil",
    WingedBeast = "Winged Beast",
    Wyrm = "Wyrm",
    YamiBakura = "Yami Bakura",
    YamiMarik = "Yami Marik",
    YamiYugi = "Yami Yugi",
    Yubel = "Yubel",
    Yugi = "Yugi",
    ZaneTruesdal = "Zane Truesdal",
    Zombie = "Zombie",
}

export enum Type {
    EffectMonster = "Effect Monster",
    FlipEffectMonster = "Flip Effect Monster",
    FusionMonster = "Fusion Monster",
    GeminiMonster = "Gemini Monster",
    LinkMonster = "Link Monster",
    NormalMonster = "Normal Monster",
    NormalTunerMonster = "Normal Tuner Monster",
    PendulumEffectFusionMonster = "Pendulum Effect Fusion Monster",
    PendulumEffectMonster = "Pendulum Effect Monster",
    PendulumEffectRitualMonster = "Pendulum Effect Ritual Monster",
    PendulumFlipEffectMonster = "Pendulum Flip Effect Monster",
    PendulumNormalMonster = "Pendulum Normal Monster",
    PendulumTunerEffectMonster = "Pendulum Tuner Effect Monster",
    RitualEffectMonster = "Ritual Effect Monster",
    RitualMonster = "Ritual Monster",
    SkillCard = "Skill Card",
    SpellCard = "Spell Card",
    SpiritMonster = "Spirit Monster",
    SynchroMonster = "Synchro Monster",
    SynchroPendulumEffectMonster = "Synchro Pendulum Effect Monster",
    SynchroTunerMonster = "Synchro Tuner Monster",
    Token = "Token",
    ToonMonster = "Toon Monster",
    TrapCard = "Trap Card",
    TunerMonster = "Tuner Monster",
    UnionEffectMonster = "Union Effect Monster",
    XYZMonster = "XYZ Monster",
    XYZPendulumEffectMonster = "XYZ Pendulum Effect Monster",
}
