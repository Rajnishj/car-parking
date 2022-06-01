import { Container, TextField, Button } from '@mui/material'
import React, { useState } from 'react';
import { LocalizationProvider } from "@mui/lab"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import DateAndTimePicker from '../components/DateAndTimePicker';
const Registration = () => {
    const [text, setText] = useState("")
    return (
        <Container>
            <TextField sx={{ marginTop: 4, width: "400px" }}
                value={text}
                onChange={(e) => setText(e.target.value)}
                label="Enter Car Registration No"
                variant="outlined" /><br />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateAndTimePicker />
            </LocalizationProvider>
            <Button variant="contained"
                color="secondary"
                sx={{ marginRight: 2, marginTop: 3 }}
                size="large">Allocate Parking</Button>
        </Container>
    )
}

export default Registration
