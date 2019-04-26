import React from 'react';

var store = {
  headerOffset: null
};

class RowItem extends React.Component {

  constructor() {
    super();

    this.state = {
      open: false
    }
  }

  toggleRow(e) {
    console.log('toggleRow');

    this.setState({open: !this.state.open});
  }


  render(){

    let classes = '';
    if (this.state.open) {
      classes = 'open';
    }

    return (
      <li onClick={this.toggleRow.bind(this)} className={classes}>
        <div className="heading">
          <div className="col">{this.props.name}</div>
          <div className="col">{this.props.score}</div>
          <div className="col">{this.props.specialty}</div>             <div className="col">{this.props.state}</div>
        </div>
        <RowContent open={this.state.open}/>
        {this.props.children}
      </li>
    )
  }

};

class RowContent extends React.Component {

  clicker() {

  }

  render(){

    let jsxhtml = (<div className="content" onClick={this.clicker.bind(this)}>
        row content
        {this.props.children}
      </div>);

    if (this.props.open) {
      jsxhtml = (<div className="content open" onClick={this.clicker.bind(this)}>
        row content
        {this.props.children}
      </div>);
    }

    return (
      <div>
      {jsxhtml}
        </div>
    )
  }

};
