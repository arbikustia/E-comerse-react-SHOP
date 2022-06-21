import React from "react"
import TopCate from "../components/top/TopCate"
import Shop from "../components/shops/Shop"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/wrapper/Wrapper"
import Slider from '../components/MainPage/Carousel'

const Pages = ({  addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Slider CartItem={CartItem} />
      <TopCate />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper />
    </>
  )
}

export default Pages
