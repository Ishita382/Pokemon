import React from "react";
import { usePokemonhooks } from "../Redux/Hooks/pokemonhooks";
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box"

const CustomButton = styled(Button)`
font-size: 17px;
border: none;
padding: 20px;
color: #2E4053;
font-weight: bold;
background-color: #F8F9F9;
`
const CustomBox = styled(Box)`
padding: 5px;
`

function Buttons(props) {
    const { data } = props;
    const { change_pokemon_names } = usePokemonhooks();
    return (
        <div>
            
            <CustomButton onClick={() => change_pokemon_names(data.previous)}>Previous</CustomButton>
            
            <CustomButton onClick={() => change_pokemon_names(data.next)}> Next  </CustomButton>
            
        </div>
    )
}

export default Buttons;