import Head from "next/head";
import Script from "next/script"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

import { useEffect } from "react";




function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
<>
<Head>

<meta name="viewport" content="width=device-width, initial-scale=1" />



</Head>

<Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"/>
<Script src="https://kenwheeler.github.io/slick/slick/slick.js"/>

<Component {...pageProps} />
     
</>


  )




}
export default MyApp
