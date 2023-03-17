import React from 'react'
import Header from "../../components/header/Header"
import Cards from '../../components/card/Card'
import Season from '../../components/season/Season'
import Upcoming from "../../components/upcoming/Upcoming"

function Home() {
  return (
   <>
   <Header/>
   <Cards/>
   <Season/>
   <Upcoming/>
   </>
  )
}

export default Home