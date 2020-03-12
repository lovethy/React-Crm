import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { render } from '@testing-library/react';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [{
    'id' : '1',
    'image' : 'https://placeimg.com/64/64/1',
    'name' : 'Ronaldo',
    'birthday' : '19820501',
    'gender' : 'M',
    'rank' : 'ST'
  },
  {
    'id' : '2',
    'image' : 'https://placeimg.com/64/64/2',
    'name' : 'Messi',
    'birthday' : '19850122',
    'gender' : 'M',
    'rank' : 'CF'
  },
  {
    'id' : '3',
    'image' : 'https://placeimg.com/64/64/3',
    'name' : 'Mbape',
    'birthday' : '20000122',
    'gender' : 'M',
    'rank' : 'RW'
  }]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>포지션</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          { customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} rank={c.rank} /> ) })}
          </TableBody>
        </Table>
        
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
