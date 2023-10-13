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
import { UserProfile } from './pages/UserProfile'


function App() {
  return (
    <Router  >
    <React.StrictMode>
      <div className="App">
        <GenericContextProvider>
          <Routes>
            <Route path='/' element={<PrincipalPage/>} />
            <Route path='/dashboards' element={<DashboardContainer />} />
            <Route path='/myAccount' element={<UserProfile/>} />
          </Routes>
        </GenericContextProvider>
      </div>
    </React.StrictMode>
    </Router>
  );
}
export default App;
