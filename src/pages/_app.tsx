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

function MyApp({ Component, pageProps }: AppProps) {
  const { username, setUsername } = useUser()
  const { tasks, setTasks, getAndSetTasks } = useTasks(username)

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <TasksContext.Provider value={{ tasks, setTasks, getAndSetTasks }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TasksContext.Provider>
    </UserContext.Provider>
  )
}

export default MyApp
