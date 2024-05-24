export type Cars = iPost[]

export interface iPost {
  brand: string
  brandLogo: string
  model: string
  modelImage: string
  year: number
  price: number
  available: boolean
}
