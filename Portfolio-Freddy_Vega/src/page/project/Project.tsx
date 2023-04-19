
import CardSoundwave from "../../components/cardprojects/CardSoudwave"
import CarProject from "../../components/cardprojects/CardProject"
import CardAlienTravel from "../../components/cardprojects/CardAlienTravel"
import CardMarketPlace from "../../components/cardprojects/CardMarketPlace"
import CardPortfolio from "../../components/cardprojects/CardPortfolio"
import { Typography } from "@mui/material"

function Project() {
  return (
    <div>
         <Typography variant='h4'
                     marginTop='30px'
                     color='white'
                     textAlign='center'
                     marginBottom='20px'
                     data-aos="flip-left">
                     Pojects
        </Typography>

    <div className="card_project">
     
      <CarProject/>
      <CardSoundwave/>
      <CardAlienTravel/>
      <CardPortfolio/>
      <CardMarketPlace/>
      <CardSoundwave/>
    </div>
    </div>
  )
}

export default Project
