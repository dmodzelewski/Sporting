import React, { Component } from "react";
import Search from "../Components/Search";
import Choice from "../Components/Choice";
import "../Styles/choice.scss";
export default class Home extends Component {
  render() {
    return (
      <>
        <Search />
        <Choice />
      </>
    );
  }
}
