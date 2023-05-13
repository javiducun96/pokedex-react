import "./styles.css";

const TypeChip = ({ type }) => {
  return <span className="chip type-grass">{type}</span>;
};

const PokemonTypesChips = ({ types }) => {
  return (
    <div className="pokemon-types">
      {types.map((type) => (
        <TypeChip type={type} />
      ))}
    </div>
  );
};

const PokemonCard = (props) => {
  const types = ["Grass", "Poison"];
  return (
    <article className="card type-grass">
      <div className="card-header">
        <span className="pokemon-name">Bulbasaur</span>
        <span className="pokemon-number">#001</span>
      </div>
      <div className="pokemon-attributes">
        <PokemonTypesChips types={types} />
      </div>
    </article>
  );
};

export default PokemonCard;
