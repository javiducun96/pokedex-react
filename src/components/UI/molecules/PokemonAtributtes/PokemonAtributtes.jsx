import React from "react"
import "./styles.css"
import weightPhoto from "../../../../assets/images/icons/width.svg"
import heightPhoto from "../../../../assets/images/icons/height.svg"

import { ChipGroup } from "../../molecules/ChipGroup"
import { AboutTitle } from "../../atoms/AboutTitle/AboutTitle"

export const PokemonAtributtes = ({ pokemon, useShinyPhoto }) => {
  const image = useShinyPhoto ? (pokemon.shinyImage ?? pokemon.image) : pokemon.image
  return (
    <div className="pokemon-attributes">
      <div className="poke-image-container">
        <img src={image} alt="" className="poke-image" />
      </div>
      <ChipGroup types={pokemon.types} />
      <AboutTitle type={pokemon.types[0]} />
      <div className="pokemon-data">
        <div className="data-group">
          <div className="title-data-group">
            <img src={weightPhoto} width={16} height={16} alt="weight icon" />
            <p>{pokemon.weight} kg</p>
          </div>
          <span className="data-group-subtitle">Weight</span>
        </div>
        <div className="divider" />
        <div className="data-group">
          <div className="title-data-group">
            <img src={heightPhoto} width={16} height={16} alt="height icon" />
            <p>{pokemon.height} m</p>
          </div>
          <span className="data-group-subtitle">Height</span>
        </div>
      </div>
      <p className="pokemon-description">{pokemon.description}</p>
    </div>
  )
}
