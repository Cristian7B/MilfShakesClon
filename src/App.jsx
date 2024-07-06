import { Nav } from "./components/Nav";
import { Header } from "./components/Header"
import { ProductView } from "./components/ProductView";
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"
import "./App.css"

const infoProduct = [
  {
    imgProduct: "https://milfshakes.es/cdn/shop/files/mockup10_5_1366x.png?v=1707420128",
    nameProduct: "SOUVENIR TEE",
    priceProduct: "€29,69",
  },
  {
    imgProduct: "https://milfshakes.es/cdn/shop/files/camisouvenirwebp_1366x.webp?v=1707337518",
    nameProduct: "SOUVENIR TEE",
    priceProduct: "€29,69",
  },
  {
    imgProduct: "https://milfshakes.es/cdn/shop/files/64ac12264eee44c51116eeb5_mockup16_3_1_2_1366x.webp?v=1716203679",
    nameProduct: "MILF LOVER TEE",
    priceProduct: "€34,69",
  },
  {
    imgProduct: "https://milfshakes.es/cdn/shop/files/chicletee2_2_1deace53-bc96-4220-8d0c-38e35a6c58ca_1366x.png?v=1716204220",
    nameProduct: "CHICLE TEE",
    priceProduct: "€34,69",
  },
  {
    imgProduct: "https://milfshakes.es/cdn/shop/files/Puzzletee_3_1366x.png?v=1707420247",
    nameProduct: "PUZZLE TEE",
    priceProduct: "€29,69",
  },
  {
    imgProduct: "https://milfshakes.es/cdn/shop/files/murdertee-1_1366x.webp?v=1712670029",
    nameProduct: "MURDER TEE",
    priceProduct: "€29,69",
  },
  {
    imgProduct: "https://milfshakes.es/cdn/shop/files/wetfloorhoodie_1366x.webp?v=1720191740",
    nameProduct: "CAUTION HOODIE",
    priceProduct: "€59,69",
  },
  {
    imgProduct: "https://milfshakes.es/cdn/shop/files/drivertee_3_1366x.png?v=1707337413",
    nameProduct: "DRIVER TEE",
    priceProduct: "€34,69",
  },
  {
    imgProduct: "https://milfshakes.es/cdn/shop/files/JackpotTee2_4_1366x.png?v=1707497450",
    nameProduct: "JACKPOT TEE",
    priceProduct: "€44,69",
  },
  {
    imgProduct: "https://milfshakes.es/cdn/shop/files/Pegatas_1_1366x.png?v=1719311144",
    nameProduct: '"LAS PEGATAS" PACK',
    priceProduct: "€9,69",
  },
  {
    imgProduct: "https://milfshakes.es/cdn/shop/files/Pegatas_2_1366x.png?v=1719311176",
    nameProduct: '"LAS PEGATAS" 2.0',
    priceProduct: "€9,69",
  },
  {
    imgProduct: "https://milfshakes.es/cdn/shop/files/wet_floor_tee_3_1366x.png?v=1717255825",
    nameProduct: "LOS PARCHES",
    priceProduct: "€9,69",
  },
  {
    imgProduct: "https://milfshakes.es/cdn/shop/files/llaveros_008_2_1366x.png?v=1718288968",
    nameProduct: '"LOS LLAVEROS"',
    priceProduct: "€19,69",
  },
]

function App() {
  return (
    <div id="app">
      <Header/> 
      <Nav/>
      <div className="viewProductsContainer">
        {
          infoProduct.map(({imgProduct, nameProduct, priceProduct}) => (
            <ProductView 
              imgProduct={imgProduct}
              nameProduct={nameProduct}
              priceProduct={priceProduct}
              key={nameProduct}
            />
          ))
        }
      </div>
        <Footer/>
    </div>
  )
}

export default App;