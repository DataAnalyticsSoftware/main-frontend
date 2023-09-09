import React from 'react'
import './App.scss'
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom"
import { DashboardContainer } from './pages/DashboardPage'
import { PrincipalPage } from './pages/PrincipalPage'
import GenericContextProvider from './context/GenericContext'


function App() {
  return (
    <Router >
    <React.StrictMode>
      <div className="App">
        <GenericContextProvider>
          <Routes>
            <Route path='/' element={<PrincipalPage/>} />
            <Route path='/dashboards' element={<DashboardContainer/>} />
          </Routes>
        </GenericContextProvider>
      </div>
    </React.StrictMode>
    </Router>
  );
}
export default App;
