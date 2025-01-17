import FloatingWallShelfUrl from './images/Bookshelf - Brown - Floating Wall Shelf (1).jpg'
import CompactNightstandUrl from './images/Drawer - Brown - Compact Nightstand (1).jpg'
import IndustrialDeskLampUrl from './images/Lamp - Black - Industrial Desk Lamp (1).jpg'
import VelvetUpholsteredSofaUrl from './images/Sofa - White - Velvet Upholstered Sofa (2).jpg'
import MinimalistBedsideTableUrl from './images/Table - Brown - Minimalist Bedside Table (1).jpg'

export type ProductType = {
    name: string;
    price: number;
    imageUrl: string;
}

export const productsArray: ProductType[] = [
    {name: "Floating Wall Shelf", price: 199, imageUrl: FloatingWallShelfUrl},
    {name: "Compact Nightstand", price: 149, imageUrl: CompactNightstandUrl},
    {name: "Industrial Desk Lamp", price: 99, imageUrl: IndustrialDeskLampUrl},
    {name: "Minimalist Bedside Table", price: 129, imageUrl: VelvetUpholsteredSofaUrl},
    {name: "Velvet Upholstered Sofa", price: 599, imageUrl: MinimalistBedsideTableUrl},
]

// export const productsArray: ProductType[] = [
//     {name: "Floating Wall Shelf", price: 199, imageUrl: "https://utfs.io/f/85f5367d-1283-4843-9711-faa062f4da37-txfskh.jpg"},
//     {name: "Compact Nightstand", price: 149, imageUrl: "https://utfs.io/f/6f0be780-eb7d-4c0c-82c9-a17e9dfaf01e-sabsti.jpg"},
//     {name: "Industrial Desk Lamp", price: 99, imageUrl: "https://utfs.io/f/2104bd95-b1a1-40e4-a730-f7d5ff68542c-meirr.jpg"},
//     {name: "Minimalist Bedside Table", price: 129, imageUrl: "https://utfs.io/f/3602a896-7280-4228-bfeb-8a81c13d0cf1-ecow6n.jpg"},
//     {name: "Velvet Upholstered Sofa", price: 599, imageUrl: "https://utfs.io/f/6eb874e8-9f96-41cb-8fc5-270b1076e5a6-3qwi6p.jpg"},
// ]

