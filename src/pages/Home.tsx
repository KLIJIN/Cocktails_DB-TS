import React, { useEffect } from 'react'
import CocktailList from '../Components/CoctailList'
import SearchForm from '../Components/SearchForm'
import { useGlobalContext } from '../context'



const Home: React.FC = () => {

  const { setSearchTerm } = useGlobalContext()
  useEffect(() => {
    setSearchTerm("")
  }, [])


  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  )
}

export default Home
