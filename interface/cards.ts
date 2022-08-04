export interface ICard {
  data: CardInfo[];
  meta: Meta;
}

export interface ArchetypeInfo {
  data: Archetype[];
}

export interface Archetype {
  id: number
  name: string
  type: string
  desc: string
  atk: number
  def: number
  level: number
  race: string
  attribute: string
  archetype: string
  card_images: CardImage[]
  card_prices: CardPrice[]
}

export interface CardInfo {
  id: number;
  name: string;
  type: string;
  desc: string;
  race: string;
  archetype?: string;
  card_sets?: CardSet[];
  card_images: CardImage[];
  card_prices: CardPrice[];
  atk?: number;
  def?: number;
  level?: number;
  attribute?: string;
}

export interface CardSet {
  set_name: string;
  set_code: string;
  set_rarity: string;
  set_rarity_code: string;
  set_price: string;
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

export interface Meta {
  current_rows: number;
  total_rows: number;
  rows_remaining: number;
  total_pages: number;
  pages_remaining: number;
  next_page: string;
  next_page_offset: number;
}

export interface Archetype {
  readonly archetype_name: string;
}
