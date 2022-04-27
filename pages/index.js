import Head from "next/head";
import React, { useState } from "react";
import { Vector } from "@/components/Vector";
import { UserContext } from "../context/UserContext";
import { LoginForm } from "@/components/LoginForm";
import { Register } from "@/components/Register";

export default function Home() {
  const [hidden, setHidden] = useState(true);

  return (
    <UserContext.Provider value={{ hidden, setHidden }}>
      <div className="block min-h-screen bg-white md:flex md:flex-col md:items-center  lg:flex lg:items-center lg:flex-row lg:justify-between overflow-y-hidden">
        <div className="w-full md:w-[900px]">
          <Vector />
        </div>
        <div className="flex h-screen max-w-xl lg:w-3/4 items-center justify-center ">
        {hidden ? <LoginForm /> : <Register />}
        </div>
      </div>
    </UserContext.Provider>
  );
}
