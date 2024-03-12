import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Dashboard from './component/Dashboard/Dashboard';
import Profile from './component/Profile/Profile';
import Notes from './component/Notes/Notes';
import File from './component/Files/File';
import Appointment from './component/Appointment/Appointment';
import Payment from './component/Payments/Payment';
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
            <div className="row">
              <div className="col-md-6">
                  <Profile />
              </div>
              <div className="col-md-3">
              <Notes />
              </div>
              <div className="col-md-3">
                <File />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-9">
                <Appointment  />
              </div>
              <div className="col-md-3">
                <Payment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
