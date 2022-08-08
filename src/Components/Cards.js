import React from "react";

function Card(props) {
    const { pokedata } = props;
    console.log(pokedata);
    return (
        <div>
            <div>
                capture_rate:  {pokedata.capture_rate}
            </div>

            <div>
                base_happiness:
                {
                    pokedata.base_happiness
                }
            </div>

            <div>
                hatch_counter:
                {
                    pokedata.hatch_counter

                }
            </div>
        </div>
    )

}

export default Card;