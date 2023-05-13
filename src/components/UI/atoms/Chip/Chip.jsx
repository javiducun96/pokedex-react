import React from "react";
import './styles.css';

export const Chip = ({ type }) => {
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