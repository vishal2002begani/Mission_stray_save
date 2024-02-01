import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Data from './Data'
import Subsection from './Subsection'
import Info from './Info'
import Newsintro from './Newsintro'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Carousel/>
      <Data/>
      <Subsection/>
      <Info/>
      {/* <Newsintro/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default Home
