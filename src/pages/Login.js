import React, { useEffect, useState } from 'react';
import bgDark from '../img/bgDark.jpg';
import LogoWhite from '../img/logo-2.png';
import { Box, Grid, Input, Tab, Tabs, TextField } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setUsername('');
    setPassword('');
  }, []);

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePw = (e) => {
    setPassword(e.target.value);
  };

  const goToHomepage = () => {
    window.location.href = '/home';
  };

  return (
    <div
      className="flex items-center justify-center h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgDark})` }}
    >
      <div className="h-[60rem] w-[40rem] bg-gray-500 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 flex flex-col items-center text-white">
        <img
          src={LogoWhite}
          alt="logo"
          className="rounded-full h-[45%] mt-2 "
        />
        <div className="flex flex-col h-[35%] w-[80%] items-center rounded-lg ">
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
            <button className="bg-white text-black w-[100%] h-[4.5rem] text-2xl font-bold rounded-lg self-center hover:bg-slate-500 hover:cursor-pointer hover:text-white duration-200  ">
              Log In
            </button>
          </div>
          <div className="flex">
            <p>First time here?</p>
            <button className="text-blue-400 ml-2 font-semibold">
              Register now !
            </button>
            <p className="mx-2">|</p>
            <p>Forgot your password?</p>
            <button className="text-yellow-600 mx-2 font-semibold">
              Reset here !
            </button>
          </div>
          <button
            className="mt-2 font-bold text-emerald-500 hover:bg-emerald-600 hover:text-white hover:font-normal duration-200 w-[50%] rounded"
            onClick={() => goToHomepage()}
          >
            Continue as guest here!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
