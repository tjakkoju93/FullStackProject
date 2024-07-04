import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Record from '../../Components/Records/Record'
import Form from '../../Components/Form/Form'
import'./HomeStyle.scss'

const Home = () => {
  return (
    <section className="homeSection">
       <Record/>
      <Form/>
    </section>
  )
}

export default Home
