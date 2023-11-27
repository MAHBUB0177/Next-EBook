import React from 'react'

const Page = () => {
  return (
    <div>
      <div className='border border-slate-100 mx-10 container bg-[#E2E8F0] rounded-md w-[250px] h-[300px] flex justify-center items-center hover:border-red-500 hover:text-red-300'>
        <p className=' font-medium  p-1 '>this is home page you show </p>

      </div>
    </div>
  )
}

export default Page

export function generateMetaData(){
    return{
        title:'Home page title',
        description:'home page this is'
    }
}