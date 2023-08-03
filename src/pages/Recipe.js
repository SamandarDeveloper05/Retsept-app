import React,{useEffect, useState} from 'react'
import { useNavigate, useParams,  } from 'react-router-dom'
import { getMealById } from '../api'
import Loader from '../components/Loader'
const Recipe = () => {
    const [recipe, setRecipe] = useState([])
    const [showRecipe, setShowRecipe] = useState(true)
    const {id} = useParams()
    const Navigate = useNavigate()

    useEffect(() => {
    getMealById(id).then(data => setRecipe(data.meals[0]))

    },[])

    const handleShowRecipe = () => {
        setShowRecipe(!showRecipe)
    }

  return (
    <>
       <button className='btn' onClick={() => Navigate('/')}>Go Back</button>
        {!recipe.idMeal ? <Loader/> : (
            <div className='recipe'>
               <img src={recipe.strMealThumb} alt={recipe.strMeal } />
               <h1>{recipe.strMeal} </h1>
               <h6><b>Category:</b> {recipe.strCategory }</h6>
               {recipe.strArea ? <h6><b>Area:   </b>{recipe.strArea}</h6> : null}
               <p>{recipe.strInstructions}</p>
               <button onClick={handleShowRecipe} className='btn'>Show Resipe</button>
                 {!showRecipe ? (
                     <table className='centered striped'>
                     <thead>
                         <tr key="">
                             <th>Ingredient</th>
                             <th>Measure</th>
                         </tr>
                     </thead>
                     <tbody>
                             {Object.keys(recipe).map(key => {
                                 if(key.includes('Ingredient') && recipe[key]){
                                     return(
                                         <tr key="">
                                             <td>{recipe[key]}</td>
                                             <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                         </tr>
                                     )
                                 }
                             })}
                     </tbody>
                    </table>
                 ) : (
                    null
                 )}
             
               {recipe.strYouTube ? (
                <div className='row'>
                  <h5>Video Recipe</h5>
                  <iframe src={`https://www.youtube.com/embed/${recipe.strYouTube.slice(-11)}`} allowFullScreen title={id} />
                </div>
               ): null}
            </div>
        )}
       
    </>
  )
}

export default Recipe