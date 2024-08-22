import React from 'react'
import { Link } from 'react-router-dom'

export const Item = (props) => {
  return (
    <div className="w-full max-w-xl px-8 mx-auto transition-transform duration-300 ease-in-out hover:scale-105 md:max-w-sm lg:max-w-md xl:max-w-lg border border-gray-200 shadow-lg rounded-lg overflow-hidden">
      <Link to={`/product/${props.id}`}>
        <img 
          onClick={() => window.scrollTo(0, 0)} 
          src={props.image} 
          className="w-full h-48 object-cover" 
          alt={props.name} 
        />
      </Link> 
      <div className="p-4">
        <p className="my-2 text-center text-base md:text-lg font-semibold">{props.name}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="text-darkslategrey text-base font-semibold">
            ${props.new_price}
          </div>
          <div className="text-slategray text-base font-medium line-through">
            ${props.old_price}
          </div>
        </div>
      </div>
    </div>
  )
}
