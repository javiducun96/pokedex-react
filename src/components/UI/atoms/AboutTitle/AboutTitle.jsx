import React from "react";
import './styles.css';

export const AboutTitle = ({ type }) => {
    const styles = {
      color: `var(--type-${type})`,
    };
    return (
      <h3 className="title-about" style={styles}>
        About
      </h3>
    );
  };