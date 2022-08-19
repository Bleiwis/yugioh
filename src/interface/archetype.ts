export interface ResponseCardData {
  data: CardInfo[];
}

export interface CardInfo {
  id: number;
  name: string;
  type: Type;
  desc: string;
  race: string;
  archetype: string;
  card_images: CardImage[];
  card_prices: CardPrice[];
  card_sets?: CardSet[];
  atk?: number;
  def?: number;
  level?: number;
  attribute?: string;
  banlist_info?: BanlistInfo;
}

export interface BanlistInfo {
  ban_ocg: string;
}

export interface CardImage {
  id: number;
  image_url: string;
  image_url_small: string;
}

export interface CardPrice {
  cardmarket_price: string;
  tcgplayer_price: string;
  ebay_price: string;
  amazon_price: string;
  coolstuffinc_price: string;
}

export interface CardSet {
  set_name: SetName;
  set_code: string;
  set_rarity: string;
  set_rarity_code: string;
  set_price: string;
}

export interface ArchetypeList {
  archetype_name: string;
}

export enum SetName {
  DimensionForce = "Dimension Force",
  OTSTournamentPack19 = "OTS Tournament Pack 19",
  OTSTournamentPack19POR = "OTS Tournament Pack 19 (POR)",
  TheGrandCreators = "The Grand Creators",
}

export enum Type {
  EffectMonster = "Effect Monster",
  SpellCard = "Spell Card",
  TrapCard = "Trap Card",
}
