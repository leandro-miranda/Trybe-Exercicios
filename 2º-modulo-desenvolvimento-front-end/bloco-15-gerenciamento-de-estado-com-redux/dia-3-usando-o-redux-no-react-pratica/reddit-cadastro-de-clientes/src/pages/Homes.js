import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class Homes extends Component {
  render() {
    return (
      <div className="container">
        Bem-vindo ao sistema de cadastramento!
        <Link to='/Login' className="home-link">Faça seu Login</Link>
      </div>
    )
  }
}
