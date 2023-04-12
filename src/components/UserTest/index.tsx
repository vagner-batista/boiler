'use client'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'

const UserTest = () => {
  const { data: session, status } = useSession()
  console.log(session, status)
  return (
    <>
      {status === 'loading' ? (
        <p>Carregando...</p>
      ) : status === 'authenticated' ? (
        <p>Autenticado</p>
      ) : (
        <p>Não autenticado</p>
      )}
      {session?.user && (
        <>
          <Image
            src={session?.user?.image ? session.user.image : ''}
            alt={session?.user?.name ? session.user.name : ''}
            width={100}
            height={100}
            style={{
              borderRadius: '100%',
              borderRightColor: 'blue',
              borderLeftColor: 'green',
              borderTopColor: 'yellow',
              borderBottomColor: 'red',
              borderWidth: '3px',
              borderStyle: 'solid',
              boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.2)',
            }}
          />
          <p>Usuário: {session?.user?.name}</p>
          <p>e-mail: {session?.user?.email}</p>
          <button onClick={() => signOut()}>Sair</button>
        </>
      )}
      {!session?.user && (
        <>
          <p>Usuário não autenticado</p>
          <button onClick={() => signIn()}>Entrar</button>
        </>
      )}
    </>
  )
}

export default UserTest
