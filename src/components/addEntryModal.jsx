import React from 'react';

export default class AddEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'add entry'
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault();

  }

  render() {

    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="border border-dark barder-2 p-4">
          <h2 className="salmon text-center">Add Entry</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="date"/>
            <input type="time" className="mx-3"/>
            <textarea className="w-100 my-3" rows="5" placeholder="Description"></textarea>
            <div className="text-end">
              <input type="submit" className="py-1 px-3 rounded salmon hover-shadow btn btn-outline-secondary" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
