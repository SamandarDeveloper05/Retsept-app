import React from 'react'
import CategorieItem from './CategorieItem'
const CategorieList = ({catalog = []}) => {
  return (
    <div className='list'>
      {catalog.map( item => (
        <CategorieItem key={item.id} {...item}/>
      ))}

    </div>
  )
}

export default CategorieList