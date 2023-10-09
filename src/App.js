import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
    <br/>

    <center style={{marginTop: "300px"}}>
      <LoginPage />
      <Profile />

    </center>
    </div>
  );
}

export default App;
