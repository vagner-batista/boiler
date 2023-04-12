import Link from 'next/link'
import { signIn } from 'next-auth/react'

import ChatIcon from '@/assets/svg/ChatIcon'
import HomeIcon from '@/assets/svg/HomeIcon'
import InfoIcon from '@/assets/svg/InfoIcon copy'
import LoginIcon from '@/assets/svg/LoginIcon'
import Logo from '@/assets/svg/Logo'
import SearchIcon from '@/assets/svg/SearchIcon'

const PageHeader = () => {
  return (
    <>
      <nav className="px-4 center shadow-sm bg-primary flex place-items-center content-between">
        <div className="flex-row px-4">
          <Link href="/">
            <Logo color="#DBE9FF" size={32} />
            <span className="text-textlight inline pl-2">RobotCook</span>
          </Link>
        </div>
        <div className="flex flex-row flex-grow px-12">
          <div className="flex flex-row px-2">
            <span className="align-middle">
              <HomeIcon color={'#DBE9FF'} size={14} />
              <span className="font-poppins-thin text-textlight text-thinner pl-1 hover:underline hover:cursor-pointer">
                <Link href={'/'}>Home</Link>
              </span>
            </span>
          </div>
          <div className="flex flex-row px-2">
            <span className="align-middle">
              <InfoIcon color={'#DBE9FF'} size={14} />
              <span className="font-poppins-thin text-textlight text-thinner pl-1 hover:underline hover:cursor-pointer">
                <Link href={'/about'}>Sobre</Link>
              </span>
            </span>
          </div>
          <div className="flex flex-row px-2">
            <span className="align-middle">
              <ChatIcon color={'#DBE9FF'} size={14} />
              <span className="font-poppins-thin text-textlight text-thinner pl-1 hover:underline hover:cursor-pointer">
                <Link href={'/contact'}>Contato</Link>
              </span>
            </span>
          </div>
        </div>
        <div className="px-12">
          <input
            className="bg-slate-300  text-textlight py-1 rounded-md my-1 h-4 text-xs px-4"
            value={''}
            onChange={() => {}}
            placeholder="pesquisar..."
          />
        </div>
        <div className="">
          <div className="flex flex-row px-4">
            <span className="align-middle">
              <LoginIcon color={'#DBE9FF'} size={14} />
              <span className="font-poppins-thin text-textlight text-thinner pl-1 hover:underline hover:cursor-pointer">
                <Link href={'/'} onClick={() => signIn()}>
                  Entrar
                </Link>
              </span>
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default PageHeader
