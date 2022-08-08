import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box"

const CustomBox = styled(Box)`
font-size: 50px;
text-align : center;
`

function Heading() {

    return (

        <CustomBox>Pokemon</CustomBox>
    )
}

export default Heading;