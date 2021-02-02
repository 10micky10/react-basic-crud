import React, {Component} from 'react';
import {users} from './data/users.json';

import './assets/css/App.css';

import Table from './components/table/Table.js';
import Form from './components/form/Form.js';

class User extends Component {

  constructor(){
    super()
    this.state = {
      users,
      isEdit : false,
      user : {},
      index : -1
    }
    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.changeIsEdit = this.changeIsEdit.bind(this);
  }

  addUser(user){
    this.setState ({
      users : [...this.state.users, user]
    });
  }

  editUser(index, user, editUser) {
    for (let i = 0; i < users.length; i++) {
      if(i === index) {
        users[i].dni = editUser.dni;
        users[i].name = editUser.name;
        users[i].lastName = editUser.lastName;
        users[i].birthday = editUser.birthday;
      }
    }
    this.setState({
      user,
      isEdit : false
    });
    alert("User Edited Sussesfully");
  }

  changeIsEdit(index, user) {
      this.setState({
        isEdit : true,
        user,
        index
      });
  }

  deleteUser(index) {
    this.setState({
      users: this.state.users.filter((user, indice) => {
        return indice !== index;
      })
    })
  }

  render() {
    return (
      <div>
        <Form title = "Register" 
          addUser = {this.addUser} 
          isEdit = {this.state.isEdit} 
          user = {this.state.user}
          index = {this.state.index}
          editUser = {this.editUser}
        />
        <Table arrayUser = {this.state.users}
          deleteUser = {this.deleteUser}
          changeIsEdit = {this.changeIsEdit}
        />
      </div>
    );
  }
}

export default User;
