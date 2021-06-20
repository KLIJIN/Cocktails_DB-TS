import React, { useState, useContext, useEffect } from 'react'

import { newCocktail, fetchingCoctail } from "./types"

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

interface IContext {
  loading: boolean,
  searchTerm: string,
  cocktails: Array<newCocktail>,
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}


const initialState = {
  loading: true,
  searchTerm: "",
  cocktails: [],
  setSearchTerm: () => { }
}

const AppContext = React.createContext<IContext>(initialState)

const AppProvider: React.FC = ({ children }) => {

  const [loading, setLoading] = useState<boolean>(true)
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [cocktails, setCocktails] = useState<newCocktail[]>([])

  const fetchDrinks = async (): Promise<void> => {
    console.log("fetch drinks start")
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const { drinks } = data
      console.log("Fetch data -->", drinks)
      if (drinks) {
        const newCocktails = drinks.map((item: fetchingCoctail) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCocktails(newCocktails)
      } else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDrinks()
    //}, [searchTerm, fetchDrinks])
  }, [searchTerm])

  return (
    <AppContext.Provider value={{ loading, searchTerm, cocktails, setSearchTerm }} >
      {children}
    </AppContext.Provider>
  )
}


// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }