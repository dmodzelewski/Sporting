import React, { Component } from "react";
import Search from "../Components/Search";
import Choice from "../Components/Choice";
import "../Styles/choice.scss";
import Slider from "../Components/Slider";
export default class Home extends Component {
  render() {
    return (
      <>
        <Search />
        <Choice />
        <Slider/>
        
      </>
    );
  }
}
