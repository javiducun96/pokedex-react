import "./styles.css";
import weight from "../../../../assets/images/icons/width.svg";
import height from "../../../../assets/images/icons/height.svg";
import bulbasaur from "../../../../assets/images/pokemons/bulbasaur.png";

import {ChipGroup} from '../../molecules/ChipGroup'
import { AboutTitle } from "../../atoms/AboutTitle/AboutTitle";

const PokemonCard = (props) => {
  const types = ["grass", "poison"];
  return (
    <article className="card type-grass">
      <div className="card-header">
        <span className="pokemon-name">Bulbasaur</span>
        <span className="pokemon-number">#001</span>
      </div>
      <div className="pokemon-attributes">
        <img src={bulbasaur} alt="" className="poke-image"></img>
        <ChipGroup types={types} />
        <AboutTitle type={types[0]} />
        <div className="pokemon-data">
          <div className="data-group">
            <div className="title-data-group">
              <img src={weight} width={16} height={16} alt="weight icon" />
              <p>6,9 kg</p>
            </div>
            <span className="data-group-subtitle">Weight</span>
          </div>
          <div className="divider"></div>
          <div className="data-group">
            <div className="title-data-group">
              <img src={height} width={16} height={16} alt="height icon" />
              <p>0,7 m</p>
            </div>
            <span className="data-group-subtitle">Height</span>
          </div>
        </div>
        <p className="pokemon-description">
          There is a plant seed on its back right from the day this Pokémon is
          born.
        </p>
      </div>
    </article>
  );
};

export default PokemonCard;
