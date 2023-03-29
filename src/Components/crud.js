// https://www.freecodecamp.org/news/how-to-perform-crud-operations-using-react/
// How to Perform CRUD Operations using React, React Hooks, and Axios

// import 'semantic-ui-css/semantic.min.css'
import './crud.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Create from './create';

function Crud() {
  return (
    <div className='main'>
      <h2 className="main-header">React Crud Operations</h2>
      <div>
        <Create />
      </div>
    </div>
  );
}

export default Crud;