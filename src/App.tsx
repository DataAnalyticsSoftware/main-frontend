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
import { RegistrationComponent } from './pages/PrincipalPage/components/SignUpComponent'


function App() {
  return (
    <Router>
        <div className="App">
          <GenericContextProvider>
            <Routes>
              <Route path='/' element={<PrincipalPage/>} />
              <Route path='/dashboards' element={<DashboardContainer />} />
              <Route path='/myAccount' element={<UserProfile/>} />
              <Route path='/SignUp' element={<RegistrationComponent/>} />
            </Routes>
          </GenericContextProvider>
        </div>
    </Router>
  );
}
export default App;
