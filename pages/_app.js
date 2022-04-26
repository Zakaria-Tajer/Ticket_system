import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  if (typeof window === 'undefined') {
    return <></>;
  } else {

  return (
    <>
      {" "}
      <Component {...pageProps} />
      <Toaster />
    </>
  );
  }
}

export default MyApp;
