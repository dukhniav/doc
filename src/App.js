import React from 'react';
import './App.css';
import 'react-taco-table/dist/react-taco-table.css'
import {
  TacoTable,
  DataType,
  SortDirection,
  Formatters,
  Summarizers,
  TdClassNames
} from 'react-taco-table';
//import './ViewDoctor';

import data from './data/doctors.json'

let doctors = JSON.stringify(data);

const columns = [{
    accessor: 'doctors.name',
    label: 'Name',
    priorityLevel: 1,
    position: 1,
    minWidth: 150,
  },
  {
    accessor: 'doctors.specialty',
    label: 'Specialty',
    priorityLevel: 2,
    position: 2,
    minWidth: 150,
  },
  {
    accessor: 'doctors.score',
    label: 'Score',
    priorityLevel: 3,
    position: 3,
    minWidth: 150,
  },
  {
    accessor: 'doctors.area',
    label: 'Area',
    priorityLevel: 4,
    position: 4,
    minWidth: 150,
  },
]



// const columns = [
//   {
//     id: 'name',
//     type: DataType.String,
//     header: 'Name',
//     renderer(cellData, { column, rowData }) {
//       return <a href={rowData.url} target="_blank">{cellData}</a>;
//     },
//   },
//   {
//     id: 'specialty',
//     type: DataType.String,
//     header: 'Specialty',
//   },
//   {
//     id: 'area',
//     type: DataType.String,
//     header: 'Area',
//   },
//   {
//     id: 'score',
//     type: DataType.NumberOrdinal,
//     header: 'Score',
//   },
//   {
//     id: 'insurance',
//     type: DataType.String,
//     header: 'Insurance',
//   }
// ];
//
// class DocList extends React.Component {
//   render() {
//     return (
//       <TacoTable
//         className="doc-list"
//         columns={columns}
//         columnHighlighting
//         data={data}
//         striped
//         sortable
//       />
//     );
//   }
// }
//
//
// export default DocList;
