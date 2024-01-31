"use client"
import { signIn, useSession } from "next-auth/react";
// import Image from "next/image";
import UserForm from "./components/UserForm";


export default function Home() {
  const { data: session,  } = useSession({
    required: true,
    onUnauthenticated() {
      alert("please signin to continue");
      signIn();
    },
  });
  console.log(session );
  return (
    
         
    <>
    <UserForm/>
    
    </>
  );
}
