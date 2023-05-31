import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from "./components/nav";
import './App.css'
import LoginButton from './components/loginButton.jsx';
import LogoutButton from './components/logoutbutton.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Auth0 Login</h1>
      {/* <LoginButton />
      <LogoutButton /> */}
    </main>
  )
}

export default App
