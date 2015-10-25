var React = require('react');
// var PropTypes = React.PropTypes;

var Header = React.createClass({
  getInitialState: function () {
    // set this.state. attributes
    return {
      text: ''
    };
  },
  render: function() {
    return (
      <div className="input-group">
        <input
          onChange={this.handleInputChange}
          value={this.state.text}
          type="text"
          className="form-control" />
        <span className="input-group-btn">
          <button
            onClick={this.handleClick}
            type="button"
            className="btn btn-default">
            Add
          </button>
        </span>
      </div>
    );
  },
  handleClick: function () {
    // Send value of text input to Firebase
    this.props.itemsStore.push({
      text: this.state.text,
      done: false
    });
    this.setState({text: ''});
  },
  handleInputChange: function (event) {
    // update our text input
    this.setState({text: event.target.value});
  }
});

module.exports = Header;
