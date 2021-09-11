import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import { AllPokemons } from "./screens/all-pokemons/index";
import { Pokemon } from "./screens/pokemon/index";

//  Images - - - - - - - - - - - - - - - - - - - -
import logo from "./img/logo.png";

function App() {
    return (
        <Router>
            <header>
                <Link to="/">
                    <img
                        src={logo}
                        alt="logo Pokedex"
                        className="header-logo"
                    />
                    <h1>PokéDex</h1>
                </Link>
            </header>
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
