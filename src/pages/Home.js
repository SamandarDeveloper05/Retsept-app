import React,{useState, useEffect} from 'react'
import { getMealById, getAllCategories, getFilterCategory } from '../api'
import { useLocation, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import CategorieList   from '../components/CategorieList'
import Search from '../components/Search'
const Home = () => {
  const [catalog, setCatalog] = useState([])
  const [filteredCatalog, setFilteredCatalog] = useState([])

  const {pathname, search} = useLocation()
  console.log(pathname);

  const handleSearch = (str) => {
    setFilteredCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))
    push({
      pathname,
      search: `?search${str}`
    })
  }
  useEffect(() => {
   getAllCategories().then(data => {
    setCatalog(data.categories)
    setFilteredCatalog(data.categories)
   })
  },[])
  return (
    <>
    <Search cb={handleSearch}  />
        {!catalog.length ?  (
          <Loader/>
        ) : (
          <CategorieList catalog={filteredCatalog}/>
        )}
    </>
  )
}

export default Home