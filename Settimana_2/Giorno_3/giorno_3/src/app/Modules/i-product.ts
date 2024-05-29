import { IDimensions } from "./i-dimensions"
import { IMeta } from "./i-meta"
import { IReview } from "./i-review"

export interface IProduct{
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: IDimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: IReview[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: IMeta
  thumbnail: string
  images: string[]
}
