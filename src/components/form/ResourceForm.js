import React, {Component} from 'react';

import '../../assets/css/Form.css';

class ResourceForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      name : ""
    };
    this.changeOnInput = this.changeOnInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.cleanForm = this.cleanForm.bind(this);
    this.updateFormEdit = this.updateFormEdit.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.isEdit === true) {
      const {resource} = props;
      this.updateFormEdit(resource);
    }
  }

  changeOnInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name] : value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const {isEdit, index, resource, editResource} = this.props;
    if (isEdit === false) {
      this.props.addResource(this.state);
      alert("Resource Created Sussesfully");
    } else {
      editResource(index, resource, this.state);
    }
    this.cleanForm();
  }

  cleanForm() {
    document.getElementById("resources-form").reset();
  }

  updateFormEdit(resource) {
    document.getElementById("name").value = resource.name;
  }

  render() {

    return (
      <form className = "Form"
        id = "resources-form" 
        autoComplete = "off" 
        onSubmit = {this.onSubmit}>
          <h2>
            {this.props.title}
          </h2>
          <input className="controlls" 
            type = "text"
            name = "name"
            id = "name"
            onChange = {this.changeOnInput}
            placeholder = "Name Of Resource"
          />
          <input className="buttons" 
            name = "register-button" 
            type = "submit" 
            value = "Register"
          />
      </form>
    );
  }
}
export default ResourceForm;
