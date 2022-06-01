import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { DatePicker, TimePicker, DateTimePicker } from "@mui/lab"
const DateAndTimePicker = () => {
    // const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    // const [selectedTime, setSelectedTime] = useState<Date | null>(null)
    const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null)
    return (
        <Stack spacing={4} sx={{ width: "200px", marginTop: "20px" }}>
            {/* <DatePicker
                label="Date Picker"
                renderInput={(params) => <TextField {...params} />}
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)} />
            <TimePicker
                label="Time Picker"
                renderInput={(params) => <TextField  {...params} />}
                value={selectedTime}
                onChange={(newValue) => setSelectedTime(newValue)} /> */}
            <DateTimePicker
                label="Date and Time Picker"
                renderInput={(params) => <TextField sx={{ width: 400 }} {...params} />}
                value={selectedDateTime}
                onChange={(newValue) => setSelectedDateTime(newValue)} />
        </Stack>
    )
}

export default DateAndTimePicker
