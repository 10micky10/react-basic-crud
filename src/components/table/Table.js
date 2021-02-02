import React, {Component} from 'react';

import '../../assets/css/Table.css';

class Table extends Component {
  constructor(props){
    super(props);
    
  }

  onDelete(index, deleteUser) {
    deleteUser(index);
  }

  onEdit(index, user, changeIsEdit) {
    changeIsEdit(index, user);
  }

  render() {
    const {arrayUser, deleteUser, changeIsEdit} = this.props;
    const updateTabla = arrayUser.map((user, index) => {
      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{user.dni}</td>
          <td>{user.name}</td>
          <td>{user.lastName}</td>
          <td>{user.birthday}</td>
          <td><button className = "buttonsTable" onClick = {this.onEdit.bind(this, index, user, changeIsEdit)}>Edit</button></td>
          <td><button className = "buttonsTable"onClick = {this.onDelete.bind(this, index, deleteUser)}>Delete</button></td>
        </tr>
      )
    });
    return (
      <div>
        <table className="table" id = "idTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Dni</th>
              <th>Name</th>
              <th>LastName</th>
              <th>Birthday</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {updateTabla}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Table;
