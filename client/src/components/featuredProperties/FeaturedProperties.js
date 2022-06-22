import React from 'react'
import './featuredProperties.css'

export const FeaturedProperties = () => {
  return (
    <div className='fp'>
        <div className='fpItem'>
            <img className='fpImg' src='https://images.unsplash.com/photo-1563503136947-cc262fa1e423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxvcyUyMGFuZ2VsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt=''/>
                <span className='fpName'>Valencia Hotel</span>
                <span className='fpCity'>Los Angels</span>
                <span className='fpPrice'>Starting Form $400</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
        </div>
        <div className='fpItem'>
            <img className='fpImg' src='https://images.unsplash.com/photo-1516664807529-7a82ca7d8665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGh5YXR0JTIwY2VudHJpYyUyMGRvd250b3duJTIwJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt=''/>
                <span className='fpName'> J Patrick House</span>
                <span className='fpCity'>Cambria</span>
                <span className='fpPrice'>Starting Form $300</span>
                <div className='fpRating'>
                    <button>7.69</button>
                    <span>Excellent</span>
                </div>
        </div>
        <div className='fpItem'>
            <img className='fpImg' src='https://images.unsplash.com/photo-1599760716436-1762b437d4af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGh5YXR0JTIwY2VudHJpYyUyMGRvd250b3duJTIwJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt=''/>
                <span className='fpName'>Hyatt Centric Downtown </span>
                <span className='fpCity'>Sacramanto</span>
                <span className='fpPrice'>Starting Form $230</span>
                <div className='fpRating'>
                    <button>7.9</button>
                    <span>Good</span>
                </div>
        </div>
        <div className='fpItem'>
            <img className='fpImg' src='https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmFwYSUyMHdpbmVyeSUyMGlubiUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
                <span className='fpName'>Napa Winery Inn</span>
                <span className='fpCity'>Napa</span>
                <span className='fpPrice'>Starting Form $200</span>
                <div className='fpRating'>
                    <button>8.4</button>
                    <span>Excellent</span>
                </div>
        </div>
        <div className='fpItem'>
            <img className='fpImg' src='https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsaWJ1JTIwY291bnR5JTIwaW5uJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt=''/>
                <span className='fpName'>Malibu county Inn</span>
                <span className='fpCity'>Malibu</span>
                <span className='fpPrice'>Starting Form $200</span>
                <div className='fpRating'>
                    <button>7.4</button>
                    <span>Average</span>
                </div>
        </div>

    </div>
  )
}
