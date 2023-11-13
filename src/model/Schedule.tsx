import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import LinearProgress from '@mui/material/LinearProgress';

interface Row {
  type: string;
  description: string;
  date: string;
  selected: boolean;
}

function createData(type: string, description: string, date: string): Row {
  return { type, description, date, selected: false };
}

interface ScheduleProps {
  darkMode: boolean;
}

export default function Schedule({ darkMode }: ScheduleProps) {
  const backgroundColor = darkMode ? '#464646' : '#91beff';

  const [rows, setRows] = React.useState<Row[]>([
    createData('Math', 'Homework 3', '2020-09-10'),
    createData('Reading', 'To Kill a Mocking Bird', '2020-05-21'),
  ]);

  const tableStyle: React.CSSProperties = {
    minHeight: '50vh',
    minWidth: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 5,
  };

  const handleCheckboxChange = (index: number) => {
    // Clone the rows array to avoid mutating the original data
    const updatedRows = [...rows];
    updatedRows[index].selected = !updatedRows[index].selected;
    // Update the state with the new selection
    setRows(updatedRows);
  };

  const progressValue =
    rows.length > 0
      ? (rows.filter((r) => r.selected).length / rows.length) * 100
      : 0;

  return (
      <TableContainer>
        <Table sx={{ bgcolor: backgroundColor }} style={tableStyle}>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.type}
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <Checkbox
                    checked={row.selected}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.type}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            ))}
            <Box>
              <LinearProgress
                variant="determinate"
                value={progressValue}
                style={{ borderRadius: 5, height: 10, marginTop: 10 }}
              />
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">{`${Math.round(
                progressValue
              )}%`}</Typography>
            </Box>
          </TableBody>
        </Table>
      </TableContainer>
  );
}
