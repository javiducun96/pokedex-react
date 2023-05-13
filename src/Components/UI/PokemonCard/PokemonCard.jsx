import "./styles.css";

const TypeChip = ({ type }) => {
  const styles = {
    backgroundColor: `var(--type-${type})`,
  };

  const typeUppercase = type[0].toUpperCase() + type.slice(1);

  return (
    <span className="chip" style={styles}>
      {typeUppercase}
    </span>
  );
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
  const types = ["grass", "poison"];
  return (
    <article className="card type-grass">
      <div className="card-header">
        <span className="pokemon-name">Bulbasaur</span>
        <span className="pokemon-number">#001</span>
      </div>
      <div className="pokemon-attributes">
        <PokemonTypesChips types={types} />
        <h3 className="title-about type-grass">About</h3>
      </div>
    </article>
  );
};

export default PokemonCard;
