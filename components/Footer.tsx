import Image from 'next/image'
import React from 'react'

const FooterColumn = () =>{
  <div className='footer_column'>
    <h4 className='font-semibold'>
   Title
    </h4>
    <ul className='flex flex-col gap-2 font-normal'>
      Links
    </ul>

  </div>
}


const Footer = () => {
  return (
    <footer className='flexStart footer'>
      <div className='flex flex-col gap-12 w-full'>
        <div className='flex items-start flex-col'>
          <Image src={'/logo-purple.svg'} width={115} height={43} alt='flexible'/>
          <p className='text-start text-sm font-normal mt-5 max-w-xs'>
          Flexibble is the world&apos;s leading community for creatives to share, grow, and get hired.
          </p>
        </div>

        <div className='flex flex-wrap gap-10'>
          {/* <FooterColumn /> */}

        </div>

        

      </div>

    </footer>
  )
}

export default Footer