import './App.css';
import { useAuthContext } from "@asgardeo/auth-react";

function App() {
  const { state, signIn, signOut } = useAuthContext();
  console.log("stattee", state);
  return (
    <div className="App">
      <h1>XSM Sample React App</h1>
      {
        state.isAuthenticated
          ? (
            <div>
                <h3>{state.username}</h3>
              <button onClick={() => signOut()}>Logout</button>
            </div>
          )
          : <button onClick={() => signIn()}>Login</button>
      }
    </div>
  );
}

export default App;
