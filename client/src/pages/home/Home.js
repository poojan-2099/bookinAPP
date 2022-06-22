import { Header } from '../../components/header/Header'
import { Navbar } from '../../components/navbar/Navbar'
import React from 'react'
import './home.css'
import { Featured } from '../../components/featured/Featured'
import { Propertylist } from '../../components/propertyList/PropertyList'
import { FeaturedProperties } from '../../components/featuredProperties/FeaturedProperties'
import { MailList } from '../../components/mailList/MailList'
import { Footer } from '../../components/footer/Footer'


export const Home = () => {
  return (

    <div>
        <Navbar/>
        <Header/>
        <div className='homeContainer'>
            <Featured />
            <h1 className='homeTitle'>Browse by property Type</h1>
            <Propertylist />
            <h1 className='homeTitle'>Homes Guests love</h1>
            <FeaturedProperties />
            <MailList />
            <Footer />
        </div>
    </div>

  )
}
