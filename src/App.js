import './App.css';
import { Routes, Route,} from "react-router-dom";
import UserList from './users/UserList';
import UserRegistration from './users/UserRegistration';
import UserProfile from './users/UserProfile';
function App() { 
    return (
    <div className="App">
    <Routes>
        <Route path="/" element={<UserRegistration/>} />
        <Route path="userlist" element={<UserList />} />
        <Route path="userlist/:id" element={<UserProfile/>} />
    </Routes>
    </div>
  );
}

export default App;




