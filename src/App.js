
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.json';
import TopHeader from './Components/Topheader/TopHeader'
import Settings from './Components/setting/Settings';
function App() {
  return (
    <div>
      <TopHeader />
      <Settings />
    </div>
  );
}

export default App;
