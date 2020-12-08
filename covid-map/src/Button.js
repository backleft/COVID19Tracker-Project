import { Button } from 'reactstrap';
import {Grid} from '@material-ui/core';

import "./Button.css";

const ButtonLinks = () => {
    return (

        <Grid className="btnGrid" > 
                 <Button  style={{backgroundColor: '#c97229'}} className="btnsize"  variant="contained" color="primary" href="https://covid19.ca.gov/">
                CA.GOV
                </Button> 
                <Button style={{backgroundColor: '#5c5cff'}} className="btnSize"  variant="contained" color="primary" href="https://covid.cdc.gov/covid-data-tracker/#cases_casesper100klast7days">
                 CDC 
                </Button>
                 <Button style={{backgroundColor: '#5c5c5c'}} className="btnSize"  variant="contained" color="primary" href="https://covid19.who.int/">
                 WHO
                </Button>
                <Button style={{backgroundColor: '#00db00'}} className="btnSize"  variant="contained" color="primary" href="https://get-tested-covid19.org/">
                 Test Sites
                </Button>
            </Grid>
    )
}
export default ButtonLinks
