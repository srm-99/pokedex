import React, { useState } from "react";

// Components
import { PokemonsContainer } from "./Pokemons-container";

// Types
import { pokemonType, responseApiType } from "./types";

// Utils
import { client } from "../../utils";

// Images
import logo from "../../img/logo.png";
import magnifier from "../../img/magnifier.svg";

export const AllPokemons = () => {
    return (
        <>
            <header>
                <a href="./index.html">
                    <img
                        src={logo}
                        alt="logo Pokedex"
                        className="header-logo"
                    />
                    <h1>PokéDex</h1>
                </a>
            </header>
            <div className="search-bar">
                <div className="search-info">
                    Search for a Pokémon by name or using its National Pokédex
                    number.
                    <p></p>
                </div>
                <div className="search-box">
                    <label>Name or Number</label>
                    <input
                        type="text"
                        id="search-input"
                        placeholder="Type here"
                    />
                    <button>
                        <img src={magnifier} alt="search icon" />
                    </button>
                </div>
            </div>

            <main className="container">
                <div className="sort-section">
                    <div id="surprise-me">
                        <p>Surprise me</p>
                    </div>
                    <span id="pokemons-length"></span>
                    <div className="select-items">
                        <select name="limit-pokemons" id="limit-pokemons">
                            <option value="10">Limit</option>
                            <option value="10">10</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>

                        <select
                            name="sort-pokemons"
                            id="sort-pokemons"
                            default-value="lowestNumber"
                        >
                            <option value="lowestNumber">Sort by:</option>
                            <option value="lowestNumber">
                                Lowest number (first)
                            </option>
                            <option value="highestNumber">
                                Highest number (first)
                            </option>
                            <option value="asc">A-Z</option>
                            <option value="desc">Z-A</option>
                        </select>
                    </div>
                </div>
                <PokemonsContainer />
                <div className="pagination" id="pagination">
                    <button id="previous-button">&laquo;</button>
                    <button id="next-button">&raquo;</button>
                </div>
            </main>

            <footer></footer>
        </>
    );
};
