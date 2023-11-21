import React from 'react'

const Page = () => {
  return (
    <div>Home</div>
  )
}

export default Page

export function generateMetaData(){
    return{
        title:'Home page title',
        description:'home page this is'
    }
}