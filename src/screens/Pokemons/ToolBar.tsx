import React, { FC } from "react";

// Types
import { ToolbarPropsType } from "./types";

const ToolBar: FC<ToolbarPropsType> = ({ toolbar, onChange }) => {
    return (
        <div className="sort-section">
            <div id="surprise-me">
                <p>Surprise me</p>
            </div>
            <div className="select-items">
                <select
                    name="limit-pokemons"
                    id="limit-pokemons"
                    value={toolbar.limit}
                    defaultValue={toolbar.limit}
                    onChange={(event) => {
                        onChange("limit", +event.target.value);
                    }}
                >
                    <option value="10">10</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>

                <select
                    name="sort-pokemons"
                    id="sort-pokemons"
                    value={toolbar.sort}
                    defaultValue={toolbar.sort}
                    onChange={(event) =>
                        onChange(
                            "sort",
                            event.target
                                .value as ToolbarPropsType["toolbar"]["sort"]
                        )
                    }
                >
                    <option value="ascById">Ascendent by id</option>
                    <option value="descById">Descendent by id</option>
                    <option value="ascByName">Ascendent by name</option>
                    <option value="descByName">Descendent by name</option>
                    <option value="random">Random</option>
                </select>
            </div>
        </div>
    );
};

export default ToolBar;
