import React, { FC } from "react";

// Utils
import Magnifier from "../../assets/img/magnifier.svg";

// Types
import { SearchPropsType } from "./types";

const SearchBar: FC<SearchPropsType> = ({ toolbar, onChange }) => {
    return (
        <div className="search-bar">
            <div className="search-info">
                Search for a Pokémon by name or using its National Pokédex
                number.
                <p></p>
            </div>
            <div className="search-box">
                <label>Name or Number</label>
                <input
                    type="search"
                    id="search-input"
                    placeholder="Type here"
                    value={toolbar.search}
                    onChange={(event) => {
                        onChange("search", event.target.value);
                    }}
                />
                <button>
                    <img src={Magnifier} alt="search icon" />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
