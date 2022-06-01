import { Button, Container, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Data, item } from "../../Data/Data"

const HomePage = () => {
    const [number, setNumber] = useState<string | number>("")
    const [data, setData] = useState<Data[]>([])
    const navigate = useNavigate()
    
    const onClick = () => {
        let amount: any = number
        if (number === 0) {
            amount = 0
        }
        if (number > 0) {
            amount = number
        }

        setData(item.slice(0, amount))
        setNumber(amount)

        // navigate("/parkinglot", { state: data })
    }
    return (
        <Container sx={{ paddingTop: 5 }}>
            <TextField
                name='amount'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                sx={{ marginBottom: 2 }}
                label="Number of Parking lot"
                variant="outlined"
            /><br />
            {data.length === 0 ?
                <Button variant="contained"
                    onClick={onClick}
                    color="secondary"
                    sx={{ marginRight: 2 }}
                    size="large">Create Parking Space</Button>
                : <Link to="/parkinglot" state={data}><Button variant="contained"
                    onClick={onClick}
                    color="secondary"
                    sx={{ marginRight: 2 }}
                    size="large">Create Parking Space</Button></Link>}
        </Container>
    )
}

export default HomePage
