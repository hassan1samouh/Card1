import React from 'react'
import {HiShoppingCart} from 'react-icons/hi'
import Product from './data'

import './style.css'

const Card = () => {

    

  return (
    <div className='container1'>
        <div className="container">

            {
                Product.map( (item , index) => (
                    <div className="card" key={index} >
                        <div className="img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="text">
                            <h2> {item.Name} </h2>
                            <p> {item.category} </p>
                            <p className='desc'> {item.description} </p>
                            <div className="card2">
                                <div className="card-bottom">
                                    <h3> $ {item.price} </h3>
                                    <div className="icon">
                                        <HiShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) )
            }

        </div>
    </div>
  )
}

export default Card