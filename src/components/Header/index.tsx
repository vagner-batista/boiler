'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

const Header = () => {
  const { data: session, status } = useSession()
  return (
    <>
      {session && (
        <p className="bg-green">{session?.user?.name ? session.user.name : session.user?.email?.split('@')[0]}</p>
      )}
      {status === 'loading' && <p>carregnado...</p>}
      {session?.user && <button onClick={() => signOut()}>Sair</button>}

      {!session?.user && (
        <div className="bg-prime-800 p-10 w-full">
          <button className={'primaryButton'} onClick={() => signIn()}>
            Entrar
          </button>
        </div>
      )}
      <p className={'font-lobster'}>Header</p>
    </>
  )
}

export default Header
