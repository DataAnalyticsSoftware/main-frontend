import './App.scss';
import { DashboardContainer } from './pages/DashboardPage';
import { PrincipalPage } from './pages/PrincipalPage/index';
function App() {
  return (
    <div className="App">
      {/*<div><PrincipalPage /></div>*/ }
      <div><DashboardContainer/></div>
    </div>
  );
}
export default App;
