import React from "react"
import { Chip } from "../../atoms/Chip"
import "./styles.css"

export const ChipGroup = ({ types }) => {
  return (
    <div className="pokemon-types">
      {types.map((type) => (
        <Chip key={type} type={type} />
      ))}
    </div>
  )
}
