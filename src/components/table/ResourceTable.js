import React, {Component} from 'react';

import '../../assets/css/Table.css';

class ResourceTable extends Component {
  constructor(props){
    super(props);
    
  }

  onDelete(index, deleteResource) {
    deleteResource(index);
  }

  onEdit(index, resource, changeIsEdit) {
    changeIsEdit(index, resource);
  }

  render() {
    const {arrayResource, deleteResource, changeIsEdit} = this.props;
    const updateTabla = arrayResource.map((resource, index) => {
      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{resource.name}</td>
          <td><button className = "buttonsTable" onClick = {this.onEdit.bind(this, index, resource, changeIsEdit)}>Edit</button></td>
          <td><button className = "buttonsTable"onClick = {this.onDelete.bind(this, index, deleteResource)}>Delete</button></td>
        </tr>
      )
    });
    return (
      <div>
        <table className="table" id = "idTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
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
export default ResourceTable;
