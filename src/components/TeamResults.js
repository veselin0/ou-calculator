import React from "react";

export const TeamResults = ({name, gamesCount = 4}) => {
    return (
        <React.Fragment>
            <h2>{name}</h2>

            {
                new Array(gamesCount * 2)
                    .fill(1)
                    .map((result, index) => {
                        const isOdd = index % 2 === 1;

                        return (
                            <React.Fragment key={index}>
                                <input
                                    type="number"
                                    name={'result' + (index + 1)}
                                    placeholder={isOdd ? '' : 'result' + ((index / 2) + 1)}
                                    autoFocus={index === 0}/>

                                {isOdd && <br/>}
                            </ React.Fragment>
                        )
                    })
            }
        </ React.Fragment>
    )
};
