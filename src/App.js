import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import doctors from './data/doctors.json';

import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

// var filtered=data.filter(function(item){
//   return item.specialty== this.props.data;         
// });
// console.log(filtered);


class BSTable extends React.Component {
  render() {
    const filtered = doctors.filter(x => x.specialty === Object.values(doctors).specialty)
    console.log(this.isExpanded)
    return (
      <BootstrapTable data={ filtered }>
        <TableHeaderColumn row='0' colSpan='6'>Related</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='name' isKey={ true }>Name</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='area'>Area</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='specialty'>Specialty</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='score'>Score</TableHeaderColumn>
        <TableHeaderColumn row='1' dataField='insurance'>Insurance</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  isExpandableRow(row) {
    return true;
  }

  expandComponent(row) {
    
    return (
      <BSTable data={ row.expand }/>
    );
  }

  render() {
    return (
        <BootstrapTable ref='table' data={ doctors } bordered={ false } 
        expandableRow={ this.isExpandableRow }
        expandComponent={ this.expandComponent }
        >
          <TableHeaderColumn dataField='id' isKey={ true } >Product ID</TableHeaderColumn>
          {/* <TableHeaderColumn dataField='name' isKey={ true } dataSort={ true }>Name</TableHeaderColumn> */}
          <TableHeaderColumn dataField='name' dataSort={ true }>Name</TableHeaderColumn>
          <TableHeaderColumn dataField='area' dataSort={ true }>Area</TableHeaderColumn>
          <TableHeaderColumn dataField='specialty' dataSort={ true }>Specialty</TableHeaderColumn>
          <TableHeaderColumn dataField='score' dataSort={ true }>Score</TableHeaderColumn>
          <TableHeaderColumn dataField='insurance' dataSort={ true }>Insurance</TableHeaderColumn>
        </BootstrapTable>
    );
  }
}