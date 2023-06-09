import { useEffect, useState } from 'react';
import './App.css';
import viteLogo from '../public/vite.svg';
import { hello } from './api';
import dayjs from 'dayjs';

const showTime = () => {
  return dayjs().format('HH:mm:ss');
}

function App() {
  const [ time, setTime ] = useState(showTime());
  useEffect(() => {
    let timer: number | null  = null;
    timer = setInterval(() => {
      setTime(showTime());
    }, 1000);

    return () => {
      if (timer) {
        clearInterval(timer);
      };
    };
  });
  const callApi1 = async () => {
    const data = await hello('world');
    console.log(data);
  }

  const callApi2 = async () => {
    const data = await hello('world2');
    console.log(data);
  }

  const callApi3 = async () => {
    const data = await hello('world3');
    console.log(data);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>{ time } GMT+8</h1>
      <div className="card">
        <button onClick={callApi1}>
          call api1
        </button>
        <p>
        </p>
        <button onClick={callApi2}>
          call api2
        </button>
        <p>
        </p>
        <button onClick={callApi3}>
          call api 3
        </button>
      </div>
    </>
  )
}

export default App
