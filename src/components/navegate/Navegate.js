import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../../assets/css/Navegate.css';

class Navegate extends Component {
  render() {
    return (
      <nav className="Navegate">
        <Link to = "/">
          Home
        </Link>
        <Link to = "/User">
          User
        </Link>
        <Link to = "/Resource">
          Resource
        </Link>
      </nav>
    );
  }
}
export default Navegate;
