import React, {Component} from 'react';
import {resources} from './data/resources.json';

import './assets/css/App.css';

import ResourcesTable from './components/table/ResourceTable.js';
import ResourcesForm from './components/form/ResourceForm.js';

class Resource extends Component {

  constructor(){
    super()
    this.state = {
      resources,
      isEdit : false,
      resource : {},
      index : -1
    }
    this.addResource = this.addResource.bind(this);
    this.editResource = this.editResource.bind(this);
    this.deleteResource = this.deleteResource.bind(this);
    this.changeIsEdit = this.changeIsEdit.bind(this);
  }

  addResource(resource){
    console.log(resource);
    this.setState ({
      resources : [...this.state.resources, resource]
    });
  }

  editResource(index, resource, editResource) {
    for (let i = 0; i < resources.length; i++) {
      if(i === index) {
        resources[i].name = editResource.name;
      }
    }
    this.setState({
      resources,
      isEdit : false
    });
    alert("Resource Edited Sussesfully");
  }

  changeIsEdit(index, resource) {
    this.setState({
      isEdit : true,
      resource,
      index
    });
  }

  deleteResource(index) {
    this.setState({
      resources: this.state.resources.filter((resource, indice) => {
        return indice !== index;
      })
    })
  }

  render() {
    console.log(this.state.resources);
    return (
      <div className="App">
        
        <ResourcesForm title = "Register"
          addResource = {this.addResource}
          isEdit = {this.state.isEdit}
          resource = {this.state.resource}
          index = {this.state.index}
          editResource = {this.editResource}
        />
        <ResourcesTable arrayResource = {this.state.resources}
          deleteResource = {this.deleteResource}
          changeIsEdit = {this.changeIsEdit}
        />
      </div>
    );
  }
}

export default Resource;
