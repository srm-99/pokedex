import React, { FC } from "react";

// Utils
import { abbreviateSpecialWord } from "../../utils/normalize";

// Types
import { PokemonStatsGraphPropsType } from "./types";

const PokemonStatsGraph: FC<PokemonStatsGraphPropsType> = ({
    stats,
    maxStat,
}) => {
    return (
        <div
            className="stats--pokemon"
            id="stats--pokemon"
            style={{
                gridTemplateColumns: "1fr ".repeat(stats.length),
            }}
        >
            {stats.map((stat) => {
                const randomColor = `rgb(${Math.floor(
                    Math.random() * 255
                )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
                    Math.random() * 255
                )})`;

                return (
                    <div
                        key={stat.stat.name}
                        style={{
                            height: `${(stat.base_stat / maxStat) * 100}%`,
                            backgroundColor: `${randomColor}`,
                        }}
                    >
                        <p
                            id="stat-value"
                            style={{
                                color: `${randomColor}`,
                            }}
                        >
                            {stat.base_stat}
                        </p>
                        <p>{abbreviateSpecialWord(stat.stat.name)}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default PokemonStatsGraph;
