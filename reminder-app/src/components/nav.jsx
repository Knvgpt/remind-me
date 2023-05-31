import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Auth0Provider } from '@auth0/auth0-react';
export default function Navbar() {

  const [data, setData] = useState("yolo");

  // const fetchData = async () => {
  //   const results = await axios.get("http://10.0.0.149:3000/isauth");
  //   console.log(results.data);
  //   setData(results.data);
  // };

  // useEffect(() => {
  //   fetchData();
  //   return () => {
  //     // Perform any necessary clean-up tasks here
  //     console.log("Clean-up function executed");
  //   };
  // }, []);
  return (
    <nav>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center m-0">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Remind Me</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white">First Link</a>
            <a className="mr-5 hover:text-white">Second Link</a>
            <a className="mr-5 hover:text-white">Third Link</a>
            <a className="mr-5 hover:text-white">Fourth Link</a>
          </nav>
          <a href="http://10.0.0.149:3000/login" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">{data}
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </header>
    </nav>
  );
}
