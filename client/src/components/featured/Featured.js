import React from 'react'
import './featured.css'

export const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img src='https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' alt='city' className='featuredImg' />
            <div className='featuredTitles'>
                 <h1>New York</h1>
                 <h2>123 Properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src='https://images.unsplash.com/photo-1601923146328-310db041a805?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b250YXJpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='city' className='featuredImg' />
            <div className='featuredTitles'>
                 <h1>Ontario</h1>
                 <h2>56 Properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src='https://media.istockphoto.com/photos/newport-beach-california-picture-id1297258609?b=1&k=20&m=1297258609&s=170667a&w=0&h=wFQW3RdqKqHgUV8h1etlPld8a5ksFJOCaHc5NDBqrck=' alt='city' className='featuredImg' />
            <div className='featuredTitles'>
                 <h1>California</h1>
                 <h2>23 Properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src='https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGV4YXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='city' className='featuredImg' />
            <div className='featuredTitles'>
                 <h1>Texas</h1>
                 <h2>12 Properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src='https://images.unsplash.com/photo-1501509497947-782640bc1412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmxvcmlkYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='city' className='featuredImg' />
            <div className='featuredTitles'>
                 <h1>Florida</h1>
                 <h2>32 Properties</h2>
            </div>
        </div>
    </div>
  )
}
