import { TypeMap } from "optolith-database-schema/lib/config";
import { Advantage } from "optolith-database-schema/lib/types/Advantage";
import { AnimalDisease } from "optolith-database-schema/lib/types/AnimalDisease";
import { AnimalType } from "optolith-database-schema/lib/types/AnimalType";
import { Aspect } from "optolith-database-schema/lib/types/Aspect";
import { Attribute } from "optolith-database-schema/lib/types/Attribute";
import { Blessing } from "optolith-database-schema/lib/types/Blessing";
import { Cantrip } from "optolith-database-schema/lib/types/Cantrip";
import { Ceremony } from "optolith-database-schema/lib/types/Ceremony";
import { CloseCombatTechnique } from "optolith-database-schema/lib/types/CombatTechnique_Close";
import { RangedCombatTechnique } from "optolith-database-schema/lib/types/CombatTechnique_Ranged";
import { Condition } from "optolith-database-schema/lib/types/Condition";
import { Continent } from "optolith-database-schema/lib/types/Continent";
import { Culture } from "optolith-database-schema/lib/types/Culture";
import { DerivedCharacteristic } from "optolith-database-schema/lib/types/DerivedCharacteristic";
import { Disadvantage } from "optolith-database-schema/lib/types/Disadvantage";
import { Disease } from "optolith-database-schema/lib/types/Disease";
import { Element } from "optolith-database-schema/lib/types/Element";
import { ExperienceLevel } from "optolith-database-schema/lib/types/ExperienceLevel";
import { EyeColor } from "optolith-database-schema/lib/types/EyeColor";
import { FamiliarsTrick } from "optolith-database-schema/lib/types/FamiliarsTrick";
import { HairColor } from "optolith-database-schema/lib/types/HairColor";
import { Curriculum } from "optolith-database-schema/lib/types/Lessons_Curriculum";
import { Guideline } from "optolith-database-schema/lib/types/Lessons_Guideline";
import { LiturgicalChant } from "optolith-database-schema/lib/types/LiturgicalChant";
import { Locales } from "optolith-database-schema/lib/types/Locale";
import { MetaCondition } from "optolith-database-schema/lib/types/MetaCondition";
import { PactCategory } from "optolith-database-schema/lib/types/PactCategory";
import { Patron } from "optolith-database-schema/lib/types/Patron";
import { PatronCategory } from "optolith-database-schema/lib/types/PatronCategory";
import { PersonalityTrait } from "optolith-database-schema/lib/types/PersonalityTrait";
import { Profession } from "optolith-database-schema/lib/types/Profession";
import { Property } from "optolith-database-schema/lib/types/Property";
import { Race } from "optolith-database-schema/lib/types/Race";
import { Region } from "optolith-database-schema/lib/types/Region";
import { Ritual } from "optolith-database-schema/lib/types/Ritual";
import { Service } from "optolith-database-schema/lib/types/Service";
import { SexPractice } from "optolith-database-schema/lib/types/SexPractice";
import { Skill } from "optolith-database-schema/lib/types/Skill";
import { SkillGroup } from "optolith-database-schema/lib/types/SkillGroup";
import { SkillModificationLevel } from "optolith-database-schema/lib/types/SkillModificationLevel";
import { SocialStatus } from "optolith-database-schema/lib/types/SocialStatus";
import { Spell } from "optolith-database-schema/lib/types/Spell";
import { State } from "optolith-database-schema/lib/types/State";
import { Talisman } from "optolith-database-schema/lib/types/Talisman";
import { TargetCategory } from "optolith-database-schema/lib/types/TargetCategory";
import { UI } from "optolith-database-schema/lib/types/UI";
import { ArcaneTradition } from "optolith-database-schema/lib/types/_ArcaneTradition";
import { Influence } from "optolith-database-schema/lib/types/_Influence";
import { EquipmentPackage } from "optolith-database-schema/lib/types/equipment/EquipmentPackage";
import { Ammunition } from "optolith-database-schema/lib/types/equipment/item/Ammunition";
import { Animal } from "optolith-database-schema/lib/types/equipment/item/Animal";
import { AnimalCare } from "optolith-database-schema/lib/types/equipment/item/AnimalCare";
import { Armor } from "optolith-database-schema/lib/types/equipment/item/Armor";
import { BandageOrRemedy } from "optolith-database-schema/lib/types/equipment/item/BandageOrRemedy";
import { Book } from "optolith-database-schema/lib/types/equipment/item/Book";
import { CeremonialItem } from "optolith-database-schema/lib/types/equipment/item/CeremonialItem";
import { Elixir } from "optolith-database-schema/lib/types/equipment/item/Elixir";
import { EquipmentOfBlessedOnes } from "optolith-database-schema/lib/types/equipment/item/EquipmentOfBlessedOnes";
import { GemOrPreciousStone } from "optolith-database-schema/lib/types/equipment/item/GemOrPreciousStone";
import { IlluminationLightSource } from "optolith-database-schema/lib/types/equipment/item/IlluminationLightSource";
import { Jewelry } from "optolith-database-schema/lib/types/equipment/item/Jewelry";
import { LuxuryGood } from "optolith-database-schema/lib/types/equipment/item/LuxuryGood";
import { MagicalArtifact } from "optolith-database-schema/lib/types/equipment/item/MagicalArtifact";
import { MusicalInstrument } from "optolith-database-schema/lib/types/equipment/item/MusicalInstrument";
import { Poison } from "optolith-database-schema/lib/types/equipment/item/Poison";
import { ToolOfTheTrade } from "optolith-database-schema/lib/types/equipment/item/ToolOfTheTrade";
import { Vehicle } from "optolith-database-schema/lib/types/equipment/item/Vehicle";
import { Weapon } from "optolith-database-schema/lib/types/equipment/item/Weapon";
import { DefaultItem } from "optolith-database-schema/lib/types/equipment/item/_Item";
import { ArmorType } from "optolith-database-schema/lib/types/equipment/item/sub/ArmorType";
import { Reach } from "optolith-database-schema/lib/types/equipment/item/sub/Reach";
import { AnimistPower } from "optolith-database-schema/lib/types/magicalActions/AnimistPower";
import { Tribe } from "optolith-database-schema/lib/types/magicalActions/AnimistPower_Tribe";
import { Curse } from "optolith-database-schema/lib/types/magicalActions/Curse";
import { DominationRitual } from "optolith-database-schema/lib/types/magicalActions/DominationRitual";
import { ElvenMagicalSong } from "optolith-database-schema/lib/types/magicalActions/ElvenMagicalSong";
import { GeodeRitual } from "optolith-database-schema/lib/types/magicalActions/GeodeRitual";
import { JesterTrick } from "optolith-database-schema/lib/types/magicalActions/JesterTrick";
import { MagicalDance } from "optolith-database-schema/lib/types/magicalActions/MagicalDance";
import { MagicalMelody } from "optolith-database-schema/lib/types/magicalActions/MagicalMelody";
import { MagicalRune } from "optolith-database-schema/lib/types/magicalActions/MagicalRune";
import { ZibiljaRitual } from "optolith-database-schema/lib/types/magicalActions/ZibiljaRitual";
import { CoreRule } from "optolith-database-schema/lib/types/rule/CoreRule";
import { FocusRule } from "optolith-database-schema/lib/types/rule/FocusRule";
import { Subject } from "optolith-database-schema/lib/types/rule/FocusRule_Subject";
import { OptionalRule } from "optolith-database-schema/lib/types/rule/OptionalRule";
import { Publication } from "optolith-database-schema/lib/types/source/Publication";
import { AdvancedCombatSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/AdvancedCombatSpecialAbility";
import { AdvancedKarmaSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/AdvancedKarmaSpecialAbility";
import { AdvancedMagicalSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/AdvancedMagicalSpecialAbility";
import { AdvancedSkillSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/AdvancedSkillSpecialAbility";
import { AncestorGlyph } from "optolith-database-schema/lib/types/specialAbility/AncestorGlyph";
import { BlessedTradition } from "optolith-database-schema/lib/types/specialAbility/BlessedTradition";
import { BrawlingSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/BrawlingSpecialAbility";
import { CeremonialItemSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/CeremonialItemSpecialAbility";
import { CombatSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/CombatSpecialAbility";
import { CombatStyleSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/CombatStyleSpecialAbility";
import { CommandSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/CommandSpecialAbility";
import { FamiliarSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/FamiliarSpecialAbility";
import { FatePointSexSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/FatePointSexSpecialAbility";
import { FatePointSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/FatePointSpecialAbility";
import { GeneralSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/GeneralSpecialAbility";
import { KarmaSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/KarmaSpecialAbility";
import { LiturgicalStyleSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/LiturgicalStyleSpecialAbility";
import { LycantropicGift } from "optolith-database-schema/lib/types/specialAbility/LycantropicGift";
import { MagicStyleSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/MagicStyleSpecialAbility";
import { MagicalSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/MagicalSpecialAbility";
import { MagicalTradition } from "optolith-database-schema/lib/types/specialAbility/MagicalTradition";
import { PactGift } from "optolith-database-schema/lib/types/specialAbility/PactGift";
import { ProtectiveWardingCircleSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/ProtectiveWardingCircleSpecialAbility";
import { Sermon } from "optolith-database-schema/lib/types/specialAbility/Sermon";
import { SexSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/SexSpecialAbility";
import { SikaryanDrainSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/SikaryanDrainSpecialAbility";
import { SkillStyleSpecialAbility } from "optolith-database-schema/lib/types/specialAbility/SkillStyleSpecialAbility";
import { VampiricGift } from "optolith-database-schema/lib/types/specialAbility/VampiricGift";
import { Vision } from "optolith-database-schema/lib/types/specialAbility/Vision";
import { Language } from "optolith-database-schema/lib/types/specialAbility/sub/Language";
import { Script } from "optolith-database-schema/lib/types/specialAbility/sub/Script";
import { TradeSecret } from "optolith-database-schema/lib/types/specialAbility/sub/TradeSecret";
import { ArcaneOrbEnchantment } from "optolith-database-schema/lib/types/traditionArtifacts/ArcaneOrbEnchantment";
import { AttireEnchantment } from "optolith-database-schema/lib/types/traditionArtifacts/AttireEnchantment";
import { BowlEnchantment } from "optolith-database-schema/lib/types/traditionArtifacts/BowlEnchantment";
import { CauldronEnchantment } from "optolith-database-schema/lib/types/traditionArtifacts/CauldronEnchantment";
import { ChronicleEnchantment } from "optolith-database-schema/lib/types/traditionArtifacts/ChronicleEnchantment";
import { DaggerRitual } from "optolith-database-schema/lib/types/traditionArtifacts/DaggerRitual";
import { FoolsHatEnchantment } from "optolith-database-schema/lib/types/traditionArtifacts/FoolsHatEnchantment";
import { InstrumentEnchantment } from "optolith-database-schema/lib/types/traditionArtifacts/InstrumentEnchantment";
import { Krallenkettenzauber } from "optolith-database-schema/lib/types/traditionArtifacts/Krallenkettenzauber";
import { OrbEnchantment } from "optolith-database-schema/lib/types/traditionArtifacts/OrbEnchantment";
import { RingEnchantment } from "optolith-database-schema/lib/types/traditionArtifacts/RingEnchantment";
import { SickleRitual } from "optolith-database-schema/lib/types/traditionArtifacts/SickleRitual";
import { SpellSwordEnchantment } from "optolith-database-schema/lib/types/traditionArtifacts/SpellSwordEnchantment";
import { StaffEnchantment } from "optolith-database-schema/lib/types/traditionArtifacts/StaffEnchantment";
import { ToyEnchantment } from "optolith-database-schema/lib/types/traditionArtifacts/ToyEnchantment";
import { Trinkhornzauber } from "optolith-database-schema/lib/types/traditionArtifacts/Trinkhornzauber";
import { WandEnchantment } from "optolith-database-schema/lib/types/traditionArtifacts/WandEnchantment";
import { WeaponEnchantment } from "optolith-database-schema/lib/types/traditionArtifacts/WeaponEnchantment";
import { AnimalShape } from "optolith-database-schema/lib/types/traditionArtifacts/sub/AnimalShape";
import { AnimalShapePath } from "optolith-database-schema/lib/types/traditionArtifacts/sub/AnimalShapePath";
import { AnimalShapeSize } from "optolith-database-schema/lib/types/traditionArtifacts/sub/AnimalShapeSize";
import { Brew } from "optolith-database-schema/lib/types/traditionArtifacts/sub/Brew";
import { RawHero } from "./hero";

export class Types implements TypeMap {
    advancedCombatSpecialAbilities!: AdvancedCombatSpecialAbility;
    advancedKarmaSpecialAbilities!: AdvancedKarmaSpecialAbility;
    advancedMagicalSpecialAbilities!: AdvancedMagicalSpecialAbility;
    advancedSkillSpecialAbilities!: AdvancedSkillSpecialAbility;
    advantages!: Advantage;
    alchemicae!: DefaultItem;
    ammunition!: Ammunition;
    ancestorGlyphs!: AncestorGlyph;
    animalCare!: AnimalCare;
    animalDiseases!: AnimalDisease;
    animals!: Animal;
    animalShapePaths!: AnimalShapePath;
    animalShapes!: AnimalShape;
    animalShapeSizes!: AnimalShapeSize;
    animalTypes!: AnimalType;
    animistPowers!: AnimistPower;
    animistPowerTribes!: Tribe;
    arcaneBardTraditions!: ArcaneTradition;
    arcaneDancerTraditions!: ArcaneTradition;
    arcaneOrbEnchantments!: ArcaneOrbEnchantment;
    armors!: Armor;
    armorTypes!: ArmorType;
    aspects!: Aspect;
    attireEnchantments!: AttireEnchantment;
    attributes!: Attribute;
    bandagesAndRemedies!: BandageOrRemedy;
    blessedTraditions!: BlessedTradition;
    blessings!: Blessing;
    books!: Book;
    bowlEnchantments!: BowlEnchantment;
    brawlingSpecialAbilities!: BrawlingSpecialAbility;
    brews!: Brew;
    cantrips!: Cantrip;
    cauldronEnchantments!: CauldronEnchantment;
    ceremonialItems!: CeremonialItem;
    ceremonialItemSpecialAbilities!: CeremonialItemSpecialAbility;
    ceremonies!: Ceremony;
    chronicleEnchantments!: ChronicleEnchantment;
    closeCombatTechniques!: CloseCombatTechnique;
    clothes!: DefaultItem;
    combatSpecialAbilities!: CombatSpecialAbility;
    combatStyleSpecialAbilities!: CombatStyleSpecialAbility;
    commandSpecialAbilities!: CommandSpecialAbility;
    conditions!: Condition;
    containers!: DefaultItem;
    continents!: Continent;
    coreRules!: CoreRule;
    cultures!: Culture;
    curses!: Curse;
    daggerRituals!: DaggerRitual;
    derivedCharacteristics!: DerivedCharacteristic;
    disadvantages!: Disadvantage;
    diseases!: Disease;
    dominationRituals!: DominationRitual;
    elements!: Element;
    elixirs!: Elixir;
    elvenMagicalSongs!: ElvenMagicalSong;
    equipmentOfBlessedOnes!: EquipmentOfBlessedOnes;
    equipmentPackages!: EquipmentPackage;
    experienceLevels!: ExperienceLevel;
    eyeColors!: EyeColor;
    familiarSpecialAbilities!: FamiliarSpecialAbility;
    familiarsTricks!: FamiliarsTrick;
    fatePointSexSpecialAbilities!: FatePointSexSpecialAbility;
    fatePointSpecialAbilities!: FatePointSpecialAbility;
    focusRules!: FocusRule;
    focusRuleSubjects!: Subject;
    foolsHatEnchantments!: FoolsHatEnchantment;
    gemsAndPreciousStones!: GemOrPreciousStone;
    generalSpecialAbilities!: GeneralSpecialAbility;
    geodeRituals!: GeodeRitual;
    hairColors!: HairColor;
    illuminationLightSources!: IlluminationLightSource;
    illuminationRefillsAndSupplies!: DefaultItem;
    instrumentEnchantments!: InstrumentEnchantment;
    jesterTricks!: JesterTrick;
    jewelry!: Jewelry;
    karmaSpecialAbilities!: KarmaSpecialAbility;
    kirchenpraegungen!: Influence;
    krallenkettenzauber!: Krallenkettenzauber;
    languages!: Language;
    lessonsCurricula!: Curriculum;
    lessonsGuidelines!: Guideline;
    liebesspielzeug!: DefaultItem;
    liturgicalChants!: LiturgicalChant;
    liturgicalStyleSpecialAbilities!: LiturgicalStyleSpecialAbility;
    locales!: Locales;
    luxuryGoods!: LuxuryGood;
    lycantropicGifts!: LycantropicGift;
    magicalArtifacts!: MagicalArtifact;
    magicalDances!: MagicalDance;
    magicalMelodies!: MagicalMelody;
    magicalRunes!: MagicalRune;
    magicalSpecialAbilities!: MagicalSpecialAbility;
    magicalTraditions!: MagicalTradition;
    magicStyleSpecialAbilities!: MagicStyleSpecialAbility;
    metaConditions!: MetaCondition;
    musicalInstruments!: MusicalInstrument;
    optionalRules!: OptionalRule;
    orbEnchantments!: OrbEnchantment;
    orienteeringAids!: DefaultItem;
    pactCategories!: PactCategory;
    pactGifts!: PactGift;
    patronCategories!: PatronCategory;
    patrons!: Patron;
    personalityTraits!: PersonalityTrait;
    poisons!: Poison;
    professions!: Profession;
    properties!: Property;
    protectiveWardingCircleSpecialAbilities!: ProtectiveWardingCircleSpecialAbility;
    publications!: Publication;
    races!: Race;
    rangedCombatTechniques!: RangedCombatTechnique;
    reaches!: Reach;
    regions!: Region;
    ringEnchantments!: RingEnchantment;
    rituals!: Ritual;
    ropesAndChains!: DefaultItem;
    scripts!: Script;
    sermons!: Sermon;
    services!: Service;
    sexPractices!: SexPractice;
    sexSpecialAbilities!: SexSpecialAbility;
    sickleRituals!: SickleRitual;
    sikaryanDrainSpecialAbilities!: SikaryanDrainSpecialAbility;
    skillGroups!: SkillGroup;
    skillModificationLevels!: SkillModificationLevel;
    skills!: Skill;
    skillStyleSpecialAbilities!: SkillStyleSpecialAbility;
    socialStatuses!: SocialStatus;
    spells!: Spell;
    spellSwordEnchantments!: SpellSwordEnchantment;
    staffEnchantments!: StaffEnchantment;
    states!: State;
    stationary!: DefaultItem;
    talismans!: Talisman;
    targetCategories!: TargetCategory;
    thievesTools!: DefaultItem;
    toolsOfTheTrade!: ToolOfTheTrade;
    toyEnchantments!: ToyEnchantment;
    tradeSecrets!: TradeSecret;
    travelGearAndTools!: DefaultItem;
    trinkhornzauber!: Trinkhornzauber;
    ui!: UI;
    vampiricGifts!: VampiricGift;
    vehicles!: Vehicle;
    visions!: Vision;
    wandEnchantments!: WandEnchantment;
    weaponAccessories!: DefaultItem;
    weaponEnchantments!: WeaponEnchantment;
    weapons!: Weapon;
    zibiljaRituals!: ZibiljaRitual;
    heros!: RawHero[];
}