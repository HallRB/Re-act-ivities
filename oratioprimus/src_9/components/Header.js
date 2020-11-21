import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const styles = {
  headerStyle: {
  background: "green"
},
headingStyle: {
  fontsize: 100
}},

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1>Welcome</h1>
    </header>
  );
}

export default Header;
