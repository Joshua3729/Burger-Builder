import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";
import CheckOut from "./container/CheckOut/CheckOut";
import { Route } from "react-router-dom";
import Orders from "./container/Orders/Orders";
class App extends Component {
  render() {
    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: "https://movie-database-imdb-alternative.p.rapidapi.com/",
      params: { s: "Avengers Endgame", page: "1", r: "json" },
      headers: {
        "x-rapidapi-key": "70d0806322msh63bb072e8817e9dp10021cjsnedc7e006d950",
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    return (
      <div>
        <Layout>
          <Route path="/checkout" component={CheckOut} />
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/Orders" component={Orders} />
        </Layout>
      </div>
    );
  }
}

export default App;
