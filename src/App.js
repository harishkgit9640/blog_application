
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.json';
import TopHeader from './Components/Topheader/TopHeader'
import Register from './Components/register/Register';
function App() {
  return (
    <div>
      <TopHeader />
      <Register />
    </div>
  );
}

export default App;
