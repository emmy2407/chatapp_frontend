import axios from "axios";
import { UserContextProvider } from "./UserContext";
import Routes from "./Routes";

function App() {
<<<<<<< HEAD
  axios.defaults.baseURL = "https://api-chatapp-mauve.vercel.app";
  // axios.defaults.withCredentials = true;
=======
  // axios.defaults.baseURL = 'http://localhost:4040/';
  axios.defaults.baseURL = 'https://mern-chat-app-api-1tnt.onrender.com/';
  axios.defaults.withCredentials = true;
>>>>>>> d30124aac344f5ed3082f4c5fc9e95340c1b29f0
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;
