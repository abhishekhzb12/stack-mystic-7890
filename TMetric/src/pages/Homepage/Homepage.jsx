
import Firstsection from "../component/Firstsection"
import { ManageTeamData } from "./ManageTeamData"
import MakeTime from "./MakeTime"
import { PopularServices } from "./PopularService"
import Reviews from "./Reviews"
import { TrustedByCompany } from "./TrustByCompany"
// import { WhyTmetric } from "./WhyTemtric"
import { Box } from "@chakra-ui/react"

import Secondsection from "../component/Secondsection"
import Thirdsection from "../component/Thirdsection"

// import { Navbar } from "../../Components/Navbar"


function Homepage() {
  return (
    <div>
      <Box>
      
        <Firstsection/>           
       {/* <ManageTeamData/> */}
       <Secondsection/>
       <Thirdsection/>
       <PopularServices/>
       <Reviews/>
       <TrustedByCompany/>
       {/* <WhyTmetric/> */}
       <MakeTime/>
      </Box>
   
    </div>
  )
}

export default Homepage