import React, { FC } from "react";

// Utils
import { MAX_POKEMONS } from "../../utils/constants";

// Types
import { PaginationPropsType } from "./types";

const Pagination: FC<PaginationPropsType> = ({ toolbar, onChange }) => {
    return (
        <div className="pagination" id="pagination">
            <button
                id="previous-button"
                style={{
                    display:
                        toolbar.offset - toolbar.limit < 0 ? "none" : "block",
                }}
                onClick={() => {
                    const offset =
                        toolbar.offset - toolbar.limit < 0
                            ? 0
                            : toolbar.offset - toolbar.limit;
                    onChange("offset", offset);
                }}
            >
                &laquo;
            </button>
            <button
                id="next-button"
                style={{
                    display:
                        toolbar.offset + toolbar.limit >= MAX_POKEMONS
                            ? "none"
                            : "block",
                }}
                onClick={() => {
                    const offset = toolbar.offset + toolbar.limit;
                    onChange("offset", offset);
                }}
            >
                &raquo;
            </button>
        </div>
    );
};

export default Pagination;
