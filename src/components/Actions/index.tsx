import { signIn, signOut } from 'next-auth/react'

export const SignIn = () => (
  <button className="bg-blue-500 rounded" onClick={() => signIn()}>
    Entrar
  </button>
)

export const SignOut = () => (
  <button className="bg-blue-500 reounded" onClick={() => signOut()}>
    Sair
  </button>
)
