import * as React from 'react';
import {
  Switch,
  Toolbar,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';

interface ButtonAppBarProps {
  check: boolean;
  change: () => void;
}



const useStyles = makeStyles(({
  title: {
    top: 'auto',
    bottom: 0,
    textAlign: 'center', 
  },
  topbar: {
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '5px 5px 5px 5px',
  },
  switch: {
    top: 'auto',
    bottom: 0,
    textAlign: 'right'
  }
}));


export default function ButtonAppBar({ check, change }: ButtonAppBarProps) {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const classes = useStyles();
  const backgroundColor = check ? '#464646' : '#91beff';
  return (
    <Toolbar className={classes.topbar} sx={{ backgroundColor: backgroundColor }}>
        <Typography className={classes.title}>
          TaskScheduler
        </Typography>
        <Switch
          className={classes.switch}
          checked={check}
          onChange={change}
          {...label}
        />
    </Toolbar>
  );
}
