import React, { useEffect, useRef, useContext } from 'react'
// import { useGlobalContext } from '../context'
import { AppContext } from "../context"


const SearchForm: React.FC = () => {

  const { setSearchTerm } = useContext(AppContext)
  const searchValue = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchValue.current?.focus()
  }, [])

  function searchCocktail(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="cocktail777" style={{ letterSpacing: "0.06em" }} > Search  </label>
          <input type="text" id="cocktail777" ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
