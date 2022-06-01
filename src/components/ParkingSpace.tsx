import { makeStyles } from '@mui/styles'
import React from 'react'
import { Data } from '../../Data/Data'

interface Iprops {
    item: Data
}
const useStyles = makeStyles({
    inner_sec: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        boxShadow: " 5px 5px 5px #aaaaaa",
        background: "darkgrey",
        height: 200

    }
})

const ParkingSpace: React.FC<Iprops> = ({ item }) => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.inner_sec} key={item.parkingId}>{item.parkingId}</div>
        </>
    )
}

export default ParkingSpace
