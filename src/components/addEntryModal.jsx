import React from 'react';

export default class AddEntry extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="border border-dark barder-2 py-3 px-4">
          <h2 className="salmon text-center">Add Entry</h2>
          <form>
            <input type="date"/>
            <input type="time"/>
            <input type="textarea" placeholder="Description" rows="5"/>
          </form>
        </div>
      </div>
    )
  }
}
