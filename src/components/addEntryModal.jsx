import React from 'react';

export default class AddEntry extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="border border-dark barder-2 p-4">
          <h2 className="salmon text-center">Add Entry</h2>
          <form>
            <input type="date"/>
            <input type="time" className="mx-3"/>
            <textarea className="w-100 my-3" rows="5" placeholder="Description"></textarea>
            <div className="text-end">
              <button type="submit" className="py-1 px-3 rounded salmon hover-shadow btn btn-outline-secondary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
