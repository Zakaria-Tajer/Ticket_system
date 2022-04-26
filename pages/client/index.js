import { Card } from "@/components/client/Card";
import { ContactHelp } from "@/components/client/ContactHelp";
import { Search } from "@/components/client/Search/Search";
import { Navbar } from "@/components/Layout/Navbar";
import Head from "next/head";

const Home = () => {
  return (
    <>
    <Head>
        <title>Home Page</title>
      </Head>
      <Navbar />
      <div className="flex h-96 items-center justify-center flex-col bg-[#13274F] relative">
        <h1 className="text-white font-poppins text-4xl mb-3 absolute top-20">How can we Help you?</h1>

        <Search />
      </div>
      <Card />
      <ContactHelp />
    </>
  );
};

export default Home;
