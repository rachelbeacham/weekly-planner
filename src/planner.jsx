import React from 'react';
import AddEntry from './components/addEntryModal';

export default class Planner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'main'
    };
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      view: 'add entry'
    })
  }
  render() {
    return(
    <>
    <header className="d-flex justify-content-center">
      <h1 className="mt-4 salmon">Weekly Planner</h1>
    </header>
    <main>
      <div className="d-flex justify-content-center">
        <button onClick={this.handleClick} className="py-1 px-3 rounded salmon hover-shadow btn btn-outline-secondary">Add Entry</button>
      </div>
    </main>
    </>
    )
  }
}
