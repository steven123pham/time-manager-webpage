import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

interface CalendarProps {
  darkMode: boolean;
}

export default function Calendar({ darkMode }: CalendarProps) {
  const backgroundColor = darkMode ? '#464646' : '#91beff';

  const handleDateChange = (selectedDate: any) => {
    const formattedDate = new Date(selectedDate).toLocaleDateString();
    console.log('Date: ' + formattedDate);
    // Do other operations with the selected date if needed
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={{ backgroundColor: backgroundColor }}
        onChange={handleDateChange}
      />
    </LocalizationProvider>
  );
}
