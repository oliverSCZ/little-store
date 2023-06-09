import { FC } from 'react'
import { Header } from '../components'

interface Props {
  children: JSX.Element | JSX.Element[],
}

export const MainLayout:FC<Props> = ({ children}) => {
  return (
    <>
          { /* Header */}
            <Header />
          { /* contenido principal */}
          <main className='py-10 px-10'>
            { children }
          </main>
          { /* productos favoritos */}
    </>
  )
}
