import React from 'react'
import Search from '../Components/CommonComponents/Search/Search'
import Choice from '../Components/HomeComponents/Choice'
import '../Styles/choice.scss'
import Slider from '../Components/HomeComponents/Slider'

const Home = () => {
  return (
    <>
      <Search />
      <Choice />
      <Slider />
    </>
  )
}
export default Home
