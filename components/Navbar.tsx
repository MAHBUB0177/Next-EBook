import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthProviders from './AuthProviders'
// import { getCurrentUser } from '@/lib/session'


const Navbar = async () => {


const session= null
// await getCurrentUser()
// console.log(session?.user?.id,'session======')
  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href={'/'}>
                <Image  src={'/logo.svg'} width={115} height={43} alt='Flexible'/>
            </Link>
            <ul className='xl:flex hidden gap-7'>
                {NavLinks.map((link) => (
                    <Link href={link.href} key={link.key}>
                        {link.text}
                    </Link>
                ))}
            </ul>
        </div>

        <div className='flexCenter gap-4'>
            {
                session ?
                 (<>
                {/* {
                    session?.user?.image &&  (<Image src={session?.user?.image} height={40} width={40} className='rounded-full' alt='session.user.image'/>)
                } */}
              
                <Link href={'/create-project'}>
                share Work</Link>
                </>):(<>
                <AuthProviders/>
                </>)
            }

        </div>
    </nav>
  )
}

export default Navbar