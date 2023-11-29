'use client'
import { sign } from "crypto"
import { getProviders,signIn } from "next-auth/react"
import { useState,useEffect } from "react"

type Provider={
  id:string,
  name:string,
  type:string,
  signinUrl:string,
  callbackUrl:string,
  signinUrlParams?:Record<string,string> | null
}

type Providers=Record<string,Provider>;
const AuthProviders = () => {
  const[providers,setProviders]=useState<Providers | null>(null)

  useEffect(()=>{
 const fetchProviders = async () =>{
  const res = await getProviders();
  setProviders(res)
  console.log(res,'============')
 }
 fetchProviders()
  },[])

  if(providers){
    return (
      <div> 
        {
          Object.values(providers).map((provider:Provider,i)=>(
            // <button key={i}>{provider?.id}</button>
            <button className="transition ease-in-out delay-150 h-[40px] w-[150px] shadow-md rounded-sm p-2 text-white bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 " onClick={()=>signIn(provider?.id)}>
              Sign In
            </button>
          ))

      }
      </div>
    )
  }
  
}

export default AuthProviders