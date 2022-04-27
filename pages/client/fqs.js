import React, { useState } from "react";
import Head from "next/head";
import { Navbar } from "@/components/Layout/Navbar";
import Link from "next/link";
export default function Fqs() {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);

  return (
    <div>
      <Navbar />
      <Head>
        <title>FAQ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <img
          src="https://i.ibb.co/DQ4FZhL/pattern-bg.png"
          alt="blue pattern background"
          className="absolute w-full h-64 md:h-96 object-center object-fit z-0"
        />
        <div className="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20 pb-32">
          <div className="md:py-36 py-20">
            <h1
              role="heading"
              className="xl:text-6xl md:text-5xl text-xl font-bold leading-10 text-white"
            >
              Frequently asked questions
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
            <div className="bg-white shadow rounded p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold leading-none text-gray-800">
                    What are you&apos;re services?
                  </h2>
                </div>
                <button
                  onClick={() => setBox1(!box1)}
                  className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                >
                  {box1 ? (
                    <svg
                      role="button"
                      aria-label="close dropdown"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 1L9 5"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      role="button"
                      aria-label="open dropdown"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {box1 && (
                <ul className="">
                  <li>
                    <p className="text-base leading-normal text-gray-600 mt-4 lg:w-96">
                      General Problems , Products Problems , Incidents, Software
                      , Hardware
                    </p>
                  </li>
                </ul>
              )}
            </div>
            <div className="bg-white shadow rounded p-8 mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold leading-none text-gray-800">
                    How can i open a ticket?
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setBox2(!box2);
                  }}
                  data-menu
                  className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                >
                  {box2 ? (
                    <svg
                      role="button"
                      aria-label="close dropdown"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 1L9 5"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      role="button"
                      aria-label="open dropdown"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {box2 && (
                <ul>
                  <li>
                    <p className="text-base leading-normal text-gray-600 mt-4 lg:w-96">
                      Go to dashboard and select open a ticket or <br></br>Click
                      <Link href="/client">
                        <a className="ml-1 underline underline-offset-2 text-blue-500">Here</a>
                      </Link>
                    </p>
                  </li>
                </ul>
              )}
            </div>
            <div className="bg-white shadow rounded p-8 mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold leading-none text-gray-800">
                    Is your service safe to use?
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setBox3(!box3);
                  }}
                  data-menu
                  className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                >
                  {box3 ? (
                    <svg
                      role="button"
                      aria-label="close dropdown"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 1L9 5"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      role="button"
                      aria-label="open dropdown"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {box3 && (
                <ul>
                  <li>
                    <p className="text-base leading-normal text-gray-600 mt-4 lg:w-96">
                      Yes
                    </p>
                  </li>
                </ul>
              )}
            </div>
            <div className="bg-white shadow rounded p-8 mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold leading-none text-gray-800">
                    How much time it takes to get a response back?
                  </h2>
                </div>
                <button
                  onClick={() => setBox4(!box4)}
                  data-menu
                  className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                >
                  {box4 ? (
                    <svg
                      role="button"
                      aria-label="close dropdown"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 1L9 5"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      role="button"
                      aria-label="open dropdown"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {box4 && (
                <ul>
                  <li>
                    <p className="text-base leading-normal text-gray-600 mt-4 lg:w-96">
                      it depends
                    </p>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
