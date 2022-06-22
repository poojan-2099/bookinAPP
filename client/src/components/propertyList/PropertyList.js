import React from 'react'
import './propertyList.css'

export const Propertylist = () => {
  return (
    <div className='pList'>
        <div className='pListItem'>
            <img src='https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='Hotels' className='pListImg' />
            <div className='pListTitles'>
                <h1>Hotels</h1>
                <h2>23 Hotels</h2>
            </div>
        </div>
        <div className='pListItem'>
            <img src='https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FiaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='Cabins' className='pListImg' />
            <div className='pListTitles'>
                <h1>Cabins</h1>
                <h2>98 Cabins</h2>
            </div>
        </div>
        <div className='pListItem'>
            <img src='https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXJiYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='apartments' className='pListImg' />
            <div className='pListTitles'>
                <h1>Apartments</h1>
                <h2>13 Apartments</h2>
            </div>
        </div>
        <div className='pListItem'>
            <img src='https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='Resorts' className='pListImg' />
            <div className='pListTitles'>
                <h1>Resorts</h1>
                <h2>53 Resots</h2>
            </div>
        </div>
        <div className='pListItem'>
            <img src='https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmlsbGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='Villas' className='pListImg' />
            <div className='pListTitles'>
                <h1>Villas</h1>
                <h2>40 Villas</h2>
            </div>
        </div>
    </div>
  )
}
