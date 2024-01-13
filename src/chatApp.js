import './chatApp.css';
import SignIn from './components/chatSignIn.js';
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from './chatfirebase.js';
import Line from './components/chatLine.js';

function ChatApp() {
  const [user] = useAuthState(auth);
  return (
    <div className='App'>
      {user ? <Line /> : <SignIn />}
    </div>
  );
}

export default ChatApp;
