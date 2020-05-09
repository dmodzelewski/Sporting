import React, { Component } from "react";
import Search from "../Components/CommonComponents/Search";
import Choice from "../Components/HomeComponents/Choice";
import "../Styles/choice.scss";
import Slider from "../Components/HomeComponents/Slider";
export default class Home extends Component {
  render() {
    return (
      <>
        <Search />
        <Choice />
        <Slider />
      </>
    );
  }
}
