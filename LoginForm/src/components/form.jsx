import { useState } from 'react';
import { login } from "../utils/login";


export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const emailhandle=(e) => {
    setEmail(e.target.value)
  }

  const passwordhandle=(e) => {
    setPassword(e.target.value)
  }

  const handleLogin = async () => {
    setIsLoggingIn(true);
    setErrorMessage("");

    try {
      await login({ email, password });
      alert("Login successful!");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const isLoginDisabled = !email || password.length < 6 || isLoggingIn;

  return (
    <div className="wrapper">
      <div className="row">
        <label htmlFor="email">Email</label>
        <input id="email"  type="email" value={email} onChange={emailhandle}  />
      </div>

      <div className="row">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={password} onChange={passwordhandle}
        />
      </div>

      {errorMessage && (
        <div className="errorMessage">{errorMessage}</div>
      )}

      <div className="button">
        <button onClick={handleLogin} disabled={isLoginDisabled}   >
          Login
        </button>

        
      </div>
    </div>
  );
}
