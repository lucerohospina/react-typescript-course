import './App.css';
// import EventComponent from './events/EventComponent';
// import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
import UserSearch from './refs/UserSearch';

function App() {
  return (
    <div>
      <div className="App">
        <h1>Hi there! Welcome to my Guest List</h1>
      </div>
      <UserSearch/>
    </div>
  );
}

export default App;
