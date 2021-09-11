import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import AllPokemons from "./screens/Pokemons/index";
import Pokemon from "./screens/Pokemon/index";
import Header from "./templates/Header";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/:idPokemon">
                    <Pokemon />
                </Route>
                <Route path="/">
                    <AllPokemons />;
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
