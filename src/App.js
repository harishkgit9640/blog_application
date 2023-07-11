
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.json';
import TopHeader from './Components/Topheader/TopHeader'
import Home from './Components/Home/Home';
function App() {
  return (
    <div>
      <TopHeader />
      <Home />
    </div>
  );
}

export default App;
