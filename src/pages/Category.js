import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getFilterCategory } from '../api'
import Loader from '../components/Loader'
import MealList from '../components/MealList'

const Category = () => {
  const [meals, setMeals] = useState([])
  const {name}  = useParams()
 

  useEffect(() => {
   getFilterCategory(name).then(data => setMeals(data.meals))
  },[name])
  return (
    <div>
         {
          !meals.length ? <Loader/>: <MealList meals={meals}/>
         }
      </div>
  )
}

export default Category