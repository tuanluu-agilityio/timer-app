import { useState } from 'react'
import type { AppProps } from 'next/app'

// styles
import '../styles/globals.css'

// components
import Layout from '../components/layout/Layout'

// contexts
import { UserContext } from '../contexts/UserContext'

// hooks
import { useUser } from '../custom-hooks/useUser'

function MyApp({ Component, pageProps }: AppProps) {
  const { username, setUsername } = useUser()

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  )
}

export default MyApp
