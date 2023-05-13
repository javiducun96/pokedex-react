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

const AboutTitle = ({ type }) => {
  const styles = {
    color: `var(--type-${type})`,
  };
  return (
    <h3 className="title-about" style={styles}>
      About
    </h3>
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
        <AboutTitle type={types[0]} />
        <div className="pokemon-data">
          <div>prop 1</div>
          <div>prop 2</div>
        </div>
      </div>
    </article>
  );
};

export default PokemonCard;
