import { Button } from 'reactstrap';
import {Grid} from '@material-ui/core';

import "./Button.css";

const ButtonLinks = () => {
    return (

        <div className="btnGrid" > 
                 <Button className="govBtn" color="primary" href="https://covid19.ca.gov/">
                CA.GOV
                </Button> 
                <Button className="cdcBtn"  variant="contained" color="primary" href="https://covid.cdc.gov/covid-data-tracker/#cases_casesper100klast7days">
                 CDC 
                </Button>
                 <Button className="whoBtn"  variant="contained" color="primary" href="https://covid19.who.int/">
                 WHO
                </Button>
                <Button className="testBtn"  variant="contained" color="primary" href="https://get-tested-covid19.org/">
                 Test Sites
                </Button>
            </div>
    )
}
export default ButtonLinks
