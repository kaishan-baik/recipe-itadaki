import React, { useEffect, useState } from 'react';
import bgDark from '../img/bgDark.jpg';
import LogoWhite from '../img/logo-2.png';

import { Alert, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setUsername('');
    setPassword('');
    setPassword2('');
    setIsRegister(false);
    setAlertVisible(false);
    setAlertMessage('');
    setAlertType('');
  }, []);

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePw = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPw = (e) => {
    setPassword2(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleDetails = (e) => {
    if (!username) {
      setAlertType('error');
      setAlertMessage('Please fill in username!');
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 3000);
      return;
    }

    if (username.length < 6) {
      setAlertType('warning');
      setAlertMessage('Username length need to be a minimum of 6 characters.');
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 3000);
      return;
    }

    if (!password) {
      setAlertType('error');
      setAlertMessage('Please fill in password!');
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 3000);
      return;
    }

    if (password.length < 6) {
      setAlertType('warning');
      setAlertMessage('Password length need to be a minimum of 6 characters.');
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 3000);
      return;
    }

    if (isRegister === 'true') {
      if (!password2) {
        setAlertType('error');
        setAlertMessage('Please type in password again!');
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 3000);
        return;
      }
      if (password2 !== password) {
        setAlertType('error');
        setAlertMessage('Passwords do not match!');
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 3000);
        return;
      }
      if (!email) {
        setAlertType('error');
        setAlertMessage('Please fill in email!');
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 3000);
        return;
      }
    }
  };

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div
      className="flex items-center justify-center h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgDark})` }}
    >
      {alertVisible ? (
        <Stack className="-mt-8 absolute top-[8%] right-0">
          <Alert variant="filled" severity={alertType}>
            {alertMessage}
          </Alert>
        </Stack>
      ) : (
        <></>
      )}
      <div className="min-h-[60rem] w-[40rem] bg-gray-500 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 flex flex-col items-center text-white">
        <img
          src={LogoWhite}
          alt="logo"
          className="rounded-full h-[45%] mt-2 -mb-8 "
        />
        <div className="flex flex-col h-[35%] w-[80%] items-center rounded-lg ">
          {!isRegister ? (
            <div className="flex flex-col w-full h-full items-center rounded-lg">
              <div className="flex flex-col items-center space-y-3">
                <h1 className="text-3xl -mt-3">- Login -</h1>
                <p className="text-slate-300">Sign in to your account</p>
              </div>
              <div className="flex flex-col space-y-6 w-full my-[2rem]">
                <input
                  type="text"
                  required
                  className="w-[100%] h-[4rem] bg-gray-600 bg-opacity-55 text-white-400 px-4 border-b-2 border-gray-400 "
                  placeholder="Enter your username here"
                  value={username}
                  onChange={handleChangeUsername}
                />
                <input
                  type="text"
                  required
                  className="w-[100%] h-[4rem] bg-gray-600 bg-opacity-55 text-white-400 px-4 border-b-2 border-gray-400 "
                  placeholder="Enter your password here"
                  value={password}
                  onChange={handleChangePw}
                />
                <button
                  className="bg-white text-black w-[100%] h-[4.5rem] text-2xl font-bold rounded-lg self-center hover:bg-slate-500 hover:cursor-pointer hover:text-white duration-200 "
                  onClick={() => handleDetails()}
                >
                  Log In
                </button>
              </div>
              <div className="flex -mt-4">
                <p>First time here?</p>
                <button
                  className="text-blue-400 ml-2 font-semibold hover:bg-blue-400 hover:text-white hover:font-normal duration-300 rounded-md hover:px-1"
                  onClick={() => setIsRegister(true)}
                >
                  Register now !
                </button>
                <p className="mx-2">|</p>
                <p>Forgot your password?</p>
                <button className="text-yellow-600 mx-2 font-semibold  hover:bg-yellow-700 hover:text-white hover:font-normal duration-300 rounded-md hover:px-1">
                  Reset here !
                </button>
              </div>
              <button
                className="mt-2 font-bold text-emerald-500 text-lg hover:bg-emerald-600 hover:text-white  duration-300 w-[50%] rounded"
                onClick={() => handleLogin()}
              >
                Continue as guest here!
              </button>
            </div>
          ) : (
            <div className="flex flex-col w-full h-full items-center rounded-lg mb-4">
              <div className="flex flex-col items-center space-y-3">
                <h1 className="text-3xl -mt-3">- Register -</h1>
                <p className="text-slate-300">
                  Fill in your details to register your account
                </p>
              </div>
              <div className="flex flex-col space-y-6 w-full my-[2rem]">
                <input
                  type="text"
                  required
                  className="w-[100%] h-[4rem] bg-gray-600 bg-opacity-55 text-white-400 px-4 border-b-2 border-gray-400 "
                  placeholder="Enter your username here"
                  value={username}
                  onChange={handleChangeUsername}
                />
                <input
                  type="text"
                  required
                  className="w-[100%] h-[4rem] bg-gray-600 bg-opacity-55 text-white-400 px-4 border-b-2 border-gray-400 "
                  placeholder="Enter your password here"
                  value={password}
                  onChange={handleChangePw}
                />
                <input
                  type="text"
                  required
                  className="w-[100%] h-[4rem] bg-gray-600 bg-opacity-55 text-white-400 px-4 border-b-2 border-gray-400 "
                  placeholder="Re-enter your password here"
                  value={password2}
                  onChange={handleConfirmPw}
                />
                <input
                  type="text"
                  required
                  className="w-[100%] h-[4rem] bg-gray-600 bg-opacity-55 text-white-400 px-4 border-b-2 border-gray-400 "
                  placeholder="Enter your email here"
                  value={email}
                  onChange={handleEmail}
                />
                <button
                  className="bg-white text-black w-[100%] h-[4.5rem] text-2xl font-bold rounded-lg self-center hover:bg-slate-500 hover:cursor-pointer hover:text-white duration-200 "
                  onClick={() => handleDetails()}
                >
                  Sign Up
                </button>
              </div>
              <div className="flex -mt-4">
                <p>Have an account?</p>
                <button
                  className="text-blue-400 ml-2 font-semibold hover:bg-blue-400 hover:text-white hover:font-normal duration-300 rounded-md hover:px-1"
                  onClick={() => setIsRegister(false)}
                >
                  Login now !
                </button>
                <p className="mx-2">|</p>
                <p>Forgot your password?</p>
                <button className="text-yellow-600 mx-2 font-semibold  hover:bg-yellow-700 hover:text-white hover:font-normal duration-300 rounded-md hover:px-1">
                  Reset here !
                </button>
              </div>
              <button
                className="mt-2 font-bold text-emerald-500 text-lg hover:bg-emerald-600 hover:text-white  duration-300 w-[50%] rounded"
                onClick={() => handleLogin()}
              >
                Continue as guest here!
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
