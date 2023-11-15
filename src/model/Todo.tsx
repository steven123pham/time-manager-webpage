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
import { makeStyles } from "@mui/styles";

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

const useStyles = makeStyles(({
  tableContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 5,
  }
})); 

export default function Schedule({ darkMode }: ScheduleProps) {
  const backgroundColor = darkMode ? '#464646' : '#91beff';
  const classes = useStyles();

  const [rows, setRows] = React.useState<Row[]>([
    createData('Math', 'Homework 3', '2020-09-10'),
    createData('Reading', 'To Kill a Mocking Bird', '2020-05-21'),
  ]);

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
    <Box sx={{ bgcolor: backgroundColor, borderRadius: 5, justifyContent: 'center' }}>
      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.type}
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
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
        <LinearProgress
          variant="determinate"
          value={progressValue}
          sx={{ borderRadius: 5, margin: 2}}
        />
        <Typography sx={{marginLeft: 2}} variant='body2' color="text.secondary">{`${Math.round(
          progressValue
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
