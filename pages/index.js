import Head from "next/head";
import Link from "next/link";
export default function Home(){
  return(
   <>
   <Head>
    <title>My Next App | Home</title>
   </Head>
    <div>
      <h1>Home Page</h1>
      <p><Link href="/users"><a>Users Page</a></Link></p>
    </div></>
  );
};