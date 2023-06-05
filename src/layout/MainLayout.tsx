import { FC } from 'react'

export const MainLayout:FC = ({ children }) => {
  return (
    <>
          { /* Header */}
            <Header />
          { /* contenido principal */}
          <main>
            { children }
          </main>

          { /* productos favoritos */}
    </>
}
