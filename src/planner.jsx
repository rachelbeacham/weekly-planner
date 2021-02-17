import React from 'react';
import AddEntry from './components/addEntryModal';

export default class Planner extends React.Component {
  render() {
    return(
      <AddEntry />
    /*
    <>
    <header className="d-flex justify-content-center">
      <h1 className="mt-4 salmon">Weekly Planner</h1>
    </header>
    <main>
      <div className="d-flex justify-content-center">
        <button className="py-1 px-3 rounded salmon hover-shadow btn btn-outline-secondary">Add Entry</button>
      </div>
    </main>
    </> */
    )
  }
}
