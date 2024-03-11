import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Dashboard from './component/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <div className="container-fluid">
       <div className="row">
       <div className="col-md-1">
        <Dashboard />
        </div>
        <div className="col-md-11">
          <Header />
        </div>
       </div>
      </div>
    </div>
  );
}

export default App;
