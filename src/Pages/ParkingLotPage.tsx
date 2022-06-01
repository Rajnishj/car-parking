import { Button, Container } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { makeStyles } from "@mui/styles"
import { Data } from "../../Data/Data"
import ParkingSpace from '../components/ParkingSpace'
import { grid } from '@mui/system'

const useStyles = makeStyles({
    parking: {
        display: "grid",
        gridTemplateColumns: "repeat(4 , 1fr)",
        gridGap: 20
    },
    box: {
        left: 900,
        marginTop: "20px !important",
        marginBottom: "15px !important"
    }

})
const ParkingLotPage = () => {
    const navigate = useNavigate()
    const classes = useStyles()
    const location = useLocation()
    const data: Data[] = location.state as Data[]
    return (
        <Container>
            <Button variant="contained" color="success" className={classes.box}
                onClick={() => navigate("/registration")}
                sx={{ marginRight: 2 }}
                size="large">Enter car</Button>
            <div className={classes.parking}>
                {data.map((item) => (
                    <div key={item.parkingId}>
                        <ParkingSpace item={item} />
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default ParkingLotPage
