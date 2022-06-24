import {IImage} from "./IImage";

export interface ICat{
  id: string,
  name: string,
  temperament: string,
  origin: string,
  country_codes: string,
  country_code: string,
  description: string
  life_span: string
  image:IImage
}
