import React, { useContext, useEffect } from 'react'
import './App.scss'
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom"
import { DashboardContainer } from './pages/DashboardPage'
import { PrincipalPage } from './pages/PrincipalPage'
import GenericContextProvider, { GenericContext } from './context/GenericContext'
import { UserProfile } from './pages/UserProfile'
import { RegistrationComponent } from './pages/PrincipalPage/components/SignUpComponent'
import { LandinPage } from './pages/LandingPage'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'
import { GridStack } from 'gridstack'
import { RegisterScreen } from './pages/LandingPage/components/RegisterScreen'


i18next.init({
  interpolation: { escapeValue: false},
  lng:'en',
  resources:{
    es:{
      global: global_es
    },
    en:{
      global: global_en
    }
  }
})

function App() {
  useEffect(() => {
    GridStack.init();
  });
  return (
    <Router>
        <div className="App">
        <I18nextProvider i18n={i18next}>
          <GenericContextProvider>
            <Routes>
              <Route path='/' element={<PrincipalPage/>} />
              <Route path='/dashboards' element={<DashboardContainer />} />
              <Route path='/SignUp' element={<RegistrationComponent/>} />
              <Route path='/LandinPage' element={<LandinPage/>} />
              <Route path='/RegisterScreen' element={<RegisterScreen/>} />
            </Routes>
          </GenericContextProvider>
        </I18nextProvider>
        </div>
    </Router>
  );
}
export default App;
