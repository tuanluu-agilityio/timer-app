import type { AppProps } from 'next/app'

// styles
import '../styles/globals.css'

// components
import Layout from '../components/layout/Layout'

// contexts
import { UserContext } from '../contexts/UserContext'

// hooks
import { useUser } from '../custom-hooks/useUser'
import { useTasks } from '../custom-hooks/useTasks'
import { TasksContext } from '../contexts/TasksContext'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  const { username, setUsername } = useUser()
  const { tasks, setTasks, getAndSetTasks } = useTasks(username)

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <UserContext.Provider value={{ username, setUsername }}>
        <TasksContext.Provider value={{ tasks, setTasks, getAndSetTasks }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TasksContext.Provider>
      </UserContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp
