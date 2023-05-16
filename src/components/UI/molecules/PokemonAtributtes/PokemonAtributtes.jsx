import React from "react"
import "./styles.css"
import weightPhoto from "../../../../assets/images/icons/width.svg"
import heightPhoto from "../../../../assets/images/icons/height.svg"
import bulbasaurPhoto from "../../../../assets/images/pokemons/bulbasaur.png"

import { ChipGroup } from "../../molecules/ChipGroup"
import { AboutTitle } from "../../atoms/AboutTitle/AboutTitle"

export const PokemonAtributtes = ({ pokemon }) => {
  return (
    <div className="pokemon-attributes">
      <img src={bulbasaurPhoto} alt="" className="poke-image"></img>
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
        <div className="divider"></div>
        <div className="data-group">
          <div className="title-data-group">
            <img src={heightPhoto} width={16} height={16} alt="height icon" />
            <p>{pokemon.height} m</p>
          </div>
          <span className="data-group-subtitle">Height</span>
        </div>
      </div>
      <p className="pokemon-description">
        There is a plant seed on its back right from the day this Pokémon is
        born.
      </p>
    </div>
  )
}
