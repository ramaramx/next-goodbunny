import Head from "next/head";
// import Script from "next/script"


import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'




function MyApp({ Component, pageProps }) {
  return (
<>
<Head>

<meta name="viewport" content="width=device-width, initial-scale=1" />


</Head>


<Component {...pageProps} />
     
</>


  )




}
export default MyApp
