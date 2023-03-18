import React from 'react'
import Arrival from '../Components/Home/Arrival'
import BestSales from '../Components/Home/BestSales'
import Categories from '../Components/Home/Categories'
import Feautred from '../Components/Home/Feautred'
import Hero from '../Components/Home/Hero'
import ContainerL from '../Components/Layout/ContainerL'

function Home() {
  return (
    <ContainerL>
        <Hero />
        <Categories />
        <Arrival />
        <Feautred />
        <BestSales />
    </ContainerL>
  )
}

export default Home