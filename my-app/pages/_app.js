// import "../styles/globals.css";
import { Navbar } from "../Components/navbar";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component />
    </ChakraProvider>
  );
}
