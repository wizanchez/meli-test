interface IAuthor {
  name: string;
  lastname: string;
}

export interface IItemsResponse
  extends Pick<IItems, "id" | "title" | "condition"> {
  price: {
    currency: string;
    amount: number;
    decimal: number;
  };
  picture: string;
  state_name: string;
  free_shipping: boolean;
  shortDescription: string;
  amountFormatted?: string;
  titleSlug?: string;
}

export interface IItemDetailResponse
  extends Pick<IItemDetail, "id" | "title" | "condition"> {
  price: {
    currency: string;
    amount: number;
    decimal: number;
  };
  picture: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

export interface IItemResponse {
  author?: IAuthor;
  categories: string[];
  items: IItemsResponse[];
}

export interface ISearchResponse {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  results: IItems[];
  paging: IPaging;
  filters: IFilter[];
  available_filters: IFilter[];
}

interface IPaging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

export interface IFilter {
  id: string;
  name: string;
  type: string;
  values: IFilterValue[];
}

export interface IFilterValue {
  id: string;
  name: string;
  path_from_root?: IFilterPathFromRoot[];
}

export interface IFilterPathFromRoot {
  id: string;
  name: string;
}

export interface IItems {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: string;
  listing_type_id: string;
  sanitized_title: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: number;
  shipping: IShipping;
  sale_price: ISalePrice;
  address: IAddress;
}

interface IAddress {
  state_id: string;
  state_name: string;
  city_id: string;
  city_name: string;
}

export interface ISalePrice {
  price_id: string;
  amount: number;
  conditions: IConditions;
  currency_id: string;
  exchange_rate: any;
  payment_method_prices: any[];
  payment_method_type: string;
  regular_amount: number;
  type: string;
  metadata: IMetadata;
}

export interface IConditions {
  eligible: boolean;
  context_restrictions: string[];
  start_time: string;
  end_time: string;
}

export interface IMetadata {
  campaign_id: string;
  promotion_id: string;
  promotion_type: string;
}

export interface IShipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  mode: string;
  tags: string[];
  benefits: any;
  promise: any;
  shipping_score: number;
}

export interface IItemDetail {
  id: string;
  site_id: string;
  title: string;
  seller_id: number;
  category_id: string;
  official_store_id: any;
  price: number;
  base_price: number;
  original_price: any;
  currency_id: string;
  initial_quantity: number;
  sale_terms: ISaleTerm[];
  buying_mode: string;
  listing_type_id: string;
  condition: string;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  pictures: IPicture[];
  video_id: any;
  descriptions: any[];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: any[];
  shipping: IShipping2;
  international_delivery_mode: string;
  seller_address: ISellerAddress;
  seller_contact: ISellerContact;
  location: ILocation;
  coverage_areas: any[];
  attributes: IAttribute[];
  listing_source: string;
  variations: any[];
  status: string;
  sub_status: any[];
  tags: any[];
  warranty: any;
  catalog_product_id: string;
  domain_id: string;
  parent_item_id: any;
  deal_ids: any[];
  automatic_relist: boolean;
  date_created: string;
  last_updated: string;
  health: number;
  catalog_listing: boolean;
}
export interface ISaleTerm {
  id: string;
  name: string;
  value_id: string;
  value_name: string;
  value_struct: any;
  values: IValue[];
  value_type: string;
}

export interface IValue {
  id: string;
  name: string;
  struct: any;
}

export interface IPicture {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}

export interface IShipping2 {
  mode: string;
  methods: any[];
  tags: any[];
  dimensions: any;
  local_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: any;
  store_pick_up: boolean;
}

export interface ISellerAddress {
  city: ICity;
  state: IState;
  country: ICountry;
  search_location: ISearchLocation;
  id: number;
}

export interface ICity {
  id: string;
  name: string;
}

export interface IState {
  id: string;
  name: string;
}

export interface ICountry {
  id: string;
  name: string;
}

export interface ISearchLocation {
  city: ICity2;
  state: IState2;
}

export interface ICity2 {
  id: string;
  name: string;
}

export interface IState2 {
  id: string;
  name: string;
}

export interface ISellerContact {
  contact: string;
  other_info: string;
  country_code: string;
  area_code: string;
  phone: string;
  country_code2: string;
  area_code2: string;
  phone2: string;
  email: string;
  webpage: string;
}

export interface ILocation {
  address_line: string;
  zip_code: string;
  neighborhood: INeighborhood;
  city: ICity3;
  state: IState3;
  country: ICountry2;
}

export interface INeighborhood {
  id: string;
  name: string;
}

export interface ICity3 {
  id: string;
  name: string;
}

export interface IState3 {
  id: string;
  name: string;
}

export interface ICountry2 {
  id: string;
  name: string;
}

export interface IAttribute {
  id: string;
  name: string;
  value_id?: string;
  value_name: string;
  values: IValue2[];
  value_type: string;
}

export interface IValue2 {
  id?: string;
  name: string;
  struct?: IIStruct;
}

export interface IIStruct {
  number: number;
  unit: string;
}

export const initialItemResponse: IItemResponse = {
  items: [],
  categories: [],
};
