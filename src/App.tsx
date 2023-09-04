import React from 'react';
import routes from './routes/routes'
import 'normalize.css/normalize.css'
import './App.css';
import {useRoutes} from "react-router-dom";

function App() {

  const routeTable = useRoutes(routes)


  return (
    <div className="App">
      {routeTable}
    </div>
  );
}

export default App;
