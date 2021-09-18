import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import AllPokemons from "./screens/Pokemons/index";
import Pokemon from "./screens/Pokemon/index";
import Header from "./templates/Header";

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/pokemon/:idPokemon">
                    <Pokemon />
                </Route>
                <Route path="/">
                    <AllPokemons />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
