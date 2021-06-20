import React from 'react'
import { Link } from 'react-router-dom'
import { newCocktail } from "../types"

const Cocktail: React.FC<newCocktail> = ({ image, name, id, info, glass }) => {

  return (
    <article className="cocktail" >
      <div className="img-container" >
        <img src={image} alt={name} />
      </div>

      <div className="cocktail-footer">
        <h3> {name} </h3>
        <h4> {glass} </h4>
        <p> {info} </p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">details</Link>
      </div>

    </article>

  )

}

export default Cocktail
