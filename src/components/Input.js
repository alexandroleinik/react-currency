import React from "react";

class Input extends React.Component {
  constructor(props) {
      super(props);
    this.state = {
      value: 'privat'
    };
    this.handleChange=this.handleChange.bind(this)
}

    handleChange(e){
        this.setState({value:e.target.value})
        
    }

  render() {
    return (
      <form onSubmit={this.props.getCurrency} className="form-inline d-flex justify-content-around form">
      <label>Bank: </label>
        <select onChange={this.handleChange} value={this.state.value} name="bank" className="form-control">
          <option value="privat">PrivatBank</option>
          <option value="privdsfat">PrivdfdcddcatBank</option>

        </select>
        <button className="btn btn-primary">Get currency</button>
      </form>
    );
  }
}

export default Input;
