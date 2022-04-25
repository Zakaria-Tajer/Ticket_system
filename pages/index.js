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
      <div className="block min-h-screen bg-white md:flex overflow-y-hidden">
        <div className="w-full pt-36 md:w-[900px]">
          <Vector />
        </div>
        <div className="flex h-screen w-3/4 items-center justify-center ">
        {hidden ? <LoginForm /> : <Register />}
        </div>
      </div>
    </UserContext.Provider>
  );
}
