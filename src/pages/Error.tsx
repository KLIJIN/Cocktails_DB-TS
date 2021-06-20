import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
//components
import SearchForm from "../Components/SearchForm"
import CocktailList from "../Components/CoctailList"

const Error: React.FC = () => {
  const { searchTerm } = useGlobalContext()

  let style = { marginTop: "50px" } as const;
  let styleText = {
    marginTop: "30px",
    textTransform: "none"
  } as const

  return (

    <section className="error-page section">
      <div className="error-container" >
        <h1 style={{ letterSpacing: "-0.01em" }} > Ой такой страницы не существует </h1>
        <p style={styleText} > Попробуйте воспользоваться поиском или вернуться на главную страницу </p>
        <Link to="/" className="btn btn-primary" style={style}  > Back to Home </Link>
        <SearchForm />
        {searchTerm ? <CocktailList /> : null}
      </div>

    </section>
  )
}

export default Error





