import './globals.css'

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR">
      <head />
      <body>
        <main>{children}</main>{' '}
      </body>
    </html>
  )
}

export default RootLayout
