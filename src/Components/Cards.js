import React from "react";
import { usePokemonhooks } from "../Redux/Hooks/pokemonhooks";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { styled } from "@mui/material/styles";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#F4ECF7 ',
  border: '2px solid #7D3C98',
  color: '#212F3D',
  boxShadow: 24,
  p: 4,
};

const Items = styled(Box)`
padding: 2px;
`
const CustomButton = styled(Button)`
border: solid plum 2px;
color: #512E5F;
background-color: Thistle;
`


function Card(props) {
  const { pokedata, data } = props;
  const { pokemon_data, get_pokemon_names } = usePokemonhooks();
  const dispatch = useDispatch()
  let initial = useSelector((state) => state.addProductList);
  let url = initial.url;

  useEffect(() => {
    dispatch(get_pokemon_names(url));
  }, [url])

  console.log(pokedata);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Box>
        {
          Object.keys(data).length !== 0 && data.results.map((item) => (<Items><CustomButton key={item.url} onClick={() => {

            { pokemon_data(item.url) };
            { handleOpen() };
          }}>
            {item.name}
          </CustomButton></Items>)
          )}
      </Box>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">

              Pokemon Data

            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              CAPTURE RATE:  {pokedata.capture_rate}
              <br />
              HAPPINESS LEVEL: {pokedata.base_happiness}
              <br />
              HATCHING ABILITY: {pokedata.hatch_counter}
              <br/>
              BABY NAME: {pokedata.name}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  )

}

export default Card;
