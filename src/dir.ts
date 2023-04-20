import { EntityDirectoryPaths } from "optolith-database-schema";
import { join } from 'path';

export const DATA_ROOT = join(__dirname, 'data');

export const ENTITY_DIRECTORY_PATHS: EntityDirectoryPaths = {
    advancedCombatSpecialAbilities: join(DATA_ROOT, "Data", "AdvancedCombatSpecialAbilities"),
    advancedKarmaSpecialAbilities: join(DATA_ROOT, "Data", "AdvancedKarmaSpecialAbilities"),
    advancedMagicalSpecialAbilities: join(DATA_ROOT, "Data", "AdvancedMagicalSpecialAbilities"),
    advancedSkillSpecialAbilities: join(DATA_ROOT, "Data", "AdvancedSkillSpecialAbilities"),
    advantages: join(DATA_ROOT, "Data", "Advantages"),
    alchemicae: join(DATA_ROOT, "Data", "Equipment", "Alchemicae"),
    ammunition: join(DATA_ROOT, "Data", "Equipment", "Ammunition"),
    ancestorGlyphs: join(DATA_ROOT, "Data", "AncestorGlyphs"),
    animalCare: join(DATA_ROOT, "Data", "Equipment", "AnimalCare"),
    animalDiseases: join(DATA_ROOT, "Data", "AnimalDiseases"),
    animals: join(DATA_ROOT, "Data", "Equipment", "Animals"),
    animalShapePaths: join(DATA_ROOT, "Data", "AnimalShapePaths"),
    animalShapes: join(DATA_ROOT, "Data", "AnimalShapes"),
    animalShapeSizes: join(DATA_ROOT, "Data", "AnimalShapeSizes"),
    animalTypes: join(DATA_ROOT, "Data", "AnimalTypes"),
    animistPowers: join(DATA_ROOT, "Data", "AnimistPowers"),
    animistPowerTribes: join(DATA_ROOT, "Data", "Tribes"),
    arcaneBardTraditions: join(DATA_ROOT, "Data", "ArcaneBardTraditions"),
    arcaneDancerTraditions: join(DATA_ROOT, "Data", "ArcaneDancerTraditions"),
    arcaneOrbEnchantments: join(DATA_ROOT, "Data", "ArcaneOrbEnchantments"),
    armors: join(DATA_ROOT, "Data", "Equipment", "Armor"),
    armorTypes: join(DATA_ROOT, "Data", "ArmorTypes"),
    aspects: join(DATA_ROOT, "Data", "Aspects"),
    attireEnchantments: join(DATA_ROOT, "Data", "AttireEnchantments"),
    attributes: join(DATA_ROOT, "Data", "Attributes"),
    bandagesAndRemedies: join(DATA_ROOT, "Data", "Equipment", "BandagesAndRemedies"),
    blessedTraditions: join(DATA_ROOT, "Data", "BlessedTraditions"),
    blessings: join(DATA_ROOT, "Data", "Blessings"),
    books: join(DATA_ROOT, "Data", "Equipment", "Books"),
    bowlEnchantments: join(DATA_ROOT, "Data", "BowlEnchantments"),
    brawlingSpecialAbilities: join(DATA_ROOT, "Data", "BrawlingSpecialAbilities"),
    brews: join(DATA_ROOT, "Data", "Brews"),
    cantrips: join(DATA_ROOT, "Data", "Cantrips"),
    cauldronEnchantments: join(DATA_ROOT, "Data", "CauldronEnchantments"),
    ceremonialItems: join(DATA_ROOT, "Data", "Equipment", "CeremonialItems"),
    ceremonialItemSpecialAbilities: join(DATA_ROOT, "Data", "CeremonialItemSpecialAbilities"),
    ceremonies: join(DATA_ROOT, "Data", "Ceremonies"),
    chronicleEnchantments: join(DATA_ROOT, "Data", "ChronicleEnchantments"),
    closeCombatTechniques: join(DATA_ROOT, "Data", "CombatTechniques", "Close"),
    clothes: join(DATA_ROOT, "Data", "Equipment", "Clothes"),
    combatSpecialAbilities: join(DATA_ROOT, "Data", "CombatSpecialAbilities"),
    combatStyleSpecialAbilities: join(DATA_ROOT, "Data", "CombatStyleSpecialAbilities"),
    commandSpecialAbilities: join(DATA_ROOT, "Data", "CommandSpecialAbilities"),
    conditions: join(DATA_ROOT, "Data", "Conditions"),
    containers: join(DATA_ROOT, "Data", "Equipment", "Containers"),
    continents: join(DATA_ROOT, "Data", "Continents"),
    coreRules: join(DATA_ROOT, "Data", "CoreRules"),
    cultures: join(DATA_ROOT, "Data", "Cultures"),
    curses: join(DATA_ROOT, "Data", "Curses"),
    daggerRituals: join(DATA_ROOT, "Data", "DaggerRituals"),
    derivedCharacteristics: join(DATA_ROOT, "Data", "DerivedCharacteristics"),
    disadvantages: join(DATA_ROOT, "Data", "Disadvantages"),
    diseases: join(DATA_ROOT, "Data", "Diseases"),
    dominationRituals: join(DATA_ROOT, "Data", "DominationRituals"),
    elements: join(DATA_ROOT, "Data", "Elements"),
    elixirs: join(DATA_ROOT, "Data", "Equipment", "Elixirs"),
    elvenMagicalSongs: join(DATA_ROOT, "Data", "ElvenMagicalSongs"),
    equipmentOfBlessedOnes: join(DATA_ROOT, "Data", "Equipment", "EquipmentOfBlessedOnes"),
    equipmentPackages: join(DATA_ROOT, "Data", "EquipmentPackages"),
    experienceLevels: join(DATA_ROOT, "Data", "ExperienceLevels"),
    eyeColors: join(DATA_ROOT, "Data", "EyeColors"),
    familiarSpecialAbilities: join(DATA_ROOT, "Data", "FamiliarSpecialAbilities"),
    familiarsTricks: join(DATA_ROOT, "Data", "FamiliarsTricks"),
    fatePointSexSpecialAbilities: join(DATA_ROOT, "Data", "FatePointSexSpecialAbilities"),
    fatePointSpecialAbilities: join(DATA_ROOT, "Data", "FatePointSpecialAbilities"),
    focusRules: join(DATA_ROOT, "Data", "FocusRules"),
    focusRuleSubjects: join(DATA_ROOT, "Data", "Subjects"),
    foolsHatEnchantments: join(DATA_ROOT, "Data", "FoolsHatEnchantments"),
    gemsAndPreciousStones: join(DATA_ROOT, "Data", "Equipment", "GemsAndPreciousStones"),
    generalSpecialAbilities: join(DATA_ROOT, "Data", "GeneralSpecialAbilities"),
    geodeRituals: join(DATA_ROOT, "Data", "GeodeRituals"),
    hairColors: join(DATA_ROOT, "Data", "HairColors"),
    illuminationLightSources: join(DATA_ROOT, "Data", "Equipment", "Illumination", "LightSources"),
    illuminationRefillsAndSupplies: join(DATA_ROOT, "Data", "Equipment", "Illumination", "RefillsAndSupplies"),
    instrumentEnchantments: join(DATA_ROOT, "Data", "InstrumentEnchantments"),
    jesterTricks: join(DATA_ROOT, "Data", "JesterTricks"),
    jewelry: join(DATA_ROOT, "Data", "Equipment", "Jewelry"),
    karmaSpecialAbilities: join(DATA_ROOT, "Data", "KarmaSpecialAbilities"),
    kirchenpraegungen: join(DATA_ROOT, "Data", "Kirchenpraegungen"),
    krallenkettenzauber: join(DATA_ROOT, "Data", "Krallenkettenzauber"),
    languages: join(DATA_ROOT, "Data", "Languages"),
    lessonsCurricula: join(DATA_ROOT, "Data", "Curricula"),
    lessonsGuidelines: join(DATA_ROOT, "Data", "Guidelines"),
    liebesspielzeug: join(DATA_ROOT, "Data", "Equipment", "Liebesspielzeug"),
    liturgicalChants: join(DATA_ROOT, "Data", "LiturgicalChants"),
    liturgicalStyleSpecialAbilities: join(DATA_ROOT, "Data", "LiturgicalStyleSpecialAbilities"),
    locales: join(DATA_ROOT, "Data", "Locales.yml"),
    luxuryGoods: join(DATA_ROOT, "Data", "Equipment", "LuxuryGoods"),
    lycantropicGifts: join(DATA_ROOT, "Data", "LycantropicGifts"),
    magicalArtifacts: join(DATA_ROOT, "Data", "Equipment", "MagicalArtifacts"),
    magicalDances: join(DATA_ROOT, "Data", "MagicalDances"),
    magicalMelodies: join(DATA_ROOT, "Data", "MagicalMelodies"),
    magicalRunes: join(DATA_ROOT, "Data", "MagicalRunes"),
    magicalSpecialAbilities: join(DATA_ROOT, "Data", "MagicalSpecialAbilities"),
    magicalTraditions: join(DATA_ROOT, "Data", "MagicalTraditions"),
    magicStyleSpecialAbilities: join(DATA_ROOT, "Data", "MagicStyleSpecialAbilities"),
    metaConditions: join(DATA_ROOT, "Data", "MetaConditions"),
    musicalInstruments: join(DATA_ROOT, "Data", "Equipment", "MusicalInstruments"),
    optionalRules: join(DATA_ROOT, "Data", "OptionalRules"),
    orbEnchantments: join(DATA_ROOT, "Data", "OrbEnchantments"),
    orienteeringAids: join(DATA_ROOT, "Data", "Equipment", "OrienteeringAids"),
    pactCategories: join(DATA_ROOT, "Data", "PactCategories"),
    pactGifts: join(DATA_ROOT, "Data", "PactGifts"),
    patronCategories: join(DATA_ROOT, "Data", "PatronCategories"),
    patrons: join(DATA_ROOT, "Data", "Patrons"),
    personalityTraits: join(DATA_ROOT, "Data", "PersonalityTraits"),
    poisons: join(DATA_ROOT, "Data", "Equipment", "Poisons"),
    professions: join(DATA_ROOT, "Data", "Professions"),
    properties: join(DATA_ROOT, "Data", "Properties"),
    protectiveWardingCircleSpecialAbilities: join(DATA_ROOT, "Data", "ProtectiveWardingCircleSpecialAbilities"),
    publications: join(DATA_ROOT, "Data", "Publications"),
    races: join(DATA_ROOT, "Data", "Races"),
    rangedCombatTechniques: join(DATA_ROOT, "Data", "CombatTechniques", "Ranged"),
    reaches: join(DATA_ROOT, "Data", "Reaches"),
    regions: join(DATA_ROOT, "Data", "Regions"),
    ringEnchantments: join(DATA_ROOT, "Data", "RingEnchantments"),
    rituals: join(DATA_ROOT, "Data", "Rituals"),
    ropesAndChains: join(DATA_ROOT, "Data", "Equipment", "RopesAndChains"),
    scripts: join(DATA_ROOT, "Data", "Scripts"),
    sermons: join(DATA_ROOT, "Data", "Sermons"),
    services: join(DATA_ROOT, "Data", "Services"),
    sexPractices: join(DATA_ROOT, "Data", "SexPractices"),
    sexSpecialAbilities: join(DATA_ROOT, "Data", "SexSpecialAbilities"),
    sickleRituals: join(DATA_ROOT, "Data", "SickleRituals"),
    sikaryanDrainSpecialAbilities: join(DATA_ROOT, "Data", "SikaryanDrainSpecialAbilities"),
    skillGroups: join(DATA_ROOT, "Data", "SkillGroups"),
    skillModificationLevels: join(DATA_ROOT, "Data", "SkillModificationLevels"),
    skills: join(DATA_ROOT, "Data", "Skills"),
    skillStyleSpecialAbilities: join(DATA_ROOT, "Data", "SkillStyleSpecialAbilities"),
    socialStatuses: join(DATA_ROOT, "Data", "SocialStatuses"),
    spells: join(DATA_ROOT, "Data", "Spells"),
    spellSwordEnchantments: join(DATA_ROOT, "Data", "SpellSwordEnchantments"),
    staffEnchantments: join(DATA_ROOT, "Data", "StaffEnchantments"),
    states: join(DATA_ROOT, "Data", "States"),
    stationary: join(DATA_ROOT, "Data", "Equipment", "Stationary"),
    talismans: join(DATA_ROOT, "Data", "Talismans"),
    targetCategories: join(DATA_ROOT, "Data", "TargetCategories"),
    thievesTools: join(DATA_ROOT, "Data", "Equipment", "ThievesTools"),
    toolsOfTheTrade: join(DATA_ROOT, "Data", "Equipment", "ToolsOfTheTrade"),
    toyEnchantments: join(DATA_ROOT, "Data", "ToyEnchantments"),
    tradeSecrets: join(DATA_ROOT, "Data", "TradeSecrets"),
    travelGearAndTools: join(DATA_ROOT, "Data", "Equipment", "TravelGearAndTools"),
    trinkhornzauber: join(DATA_ROOT, "Data", "Trinkhornzauber"),
    ui: join(DATA_ROOT, "Data", "UI"),
    vampiricGifts: join(DATA_ROOT, "Data", "VampiricGifts"),
    vehicles: join(DATA_ROOT, "Data", "Equipment", "Vehicles"),
    visions: join(DATA_ROOT, "Data", "Visions"),
    wandEnchantments: join(DATA_ROOT, "Data", "WandEnchantments"),
    weaponAccessories: join(DATA_ROOT, "Data", "Equipment", "WeaponAccessories"),
    weaponEnchantments: join(DATA_ROOT, "Data", "WeaponEnchantments"),
    weapons: join(DATA_ROOT, "Data", "Equipment", "Weapons"),
    zibiljaRituals: join(DATA_ROOT, "Data", "ZibiljaRituals"),
}
