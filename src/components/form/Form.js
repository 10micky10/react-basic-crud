import React, {Component} from 'react';

import '../../assets/css/Form.css';

class Form extends Component {

  constructor(props){
    super(props);
    this.state = {
      dni : "",
      name : "",
      lastName : "",
      birthday : ""
    };
    this.changeOnInput = this.changeOnInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.cleanForm = this.cleanForm.bind(this);
    this.updateFormEdit = this.updateFormEdit.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.isEdit === true) {
      console.log("componentDidUpdate");
      const {user} = props;
      this.updateFormEdit(user);
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
    const {isEdit, index, user, editUser} = this.props;
    if (isEdit === false) {
      this.props.addUser(this.state);
      alert("User Created Sussesfully");
    } else {
      editUser(index, user, this.state);
    }
    this.cleanForm();
  }

  cleanForm() {
    document.getElementById("user-form").reset();
  }

  updateFormEdit(user) {
    document.getElementById("dni").value = user.dni;
    document.getElementById("name").value = user.name;
    document.getElementById("lastName").value = user.lastName;
    document.getElementById("birthday").value = user.birthday;
  }

  render() {

    return (
      <form className = "Form" 
        id = "user-form" 
        autoComplete = "off" 
        onSubmit = {this.onSubmit}>
          <h2>
            {this.props.title}
          </h2>
          <input className="controlls" 
            type = "text" 
            name = "dni"
            id = "dni"
            onChange = {this.changeOnInput}
            placeholder = "Dni"
          />
          <input className="controlls" 
            type = "text" 
            name = "name"
            id = "name"
            onChange = {this.changeOnInput}
            placeholder = "Name"
          />
          <input className="controlls" 
            type = "text" 
            name = "lastName"
            id = "lastName"
            onChange = {this.changeOnInput}
            placeholder = "Lastname"
          />
          <input className="controlls" 
            type = "date"
            onChange = {this.changeOnInput}
            name = "birthday"
            id = "birthday"
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
export default Form;
