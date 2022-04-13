import { useContext } from 'react'
import type { NextPage } from 'next'

// Contexts
import { UserContext } from '../contexts/UserContext'

// Components
import SignupForm from '../components/signup-page/SignupForm'
import PageHeading from '../components/PageHeading'
import Alert from '../components/Alert'

const Signup: NextPage = () => {
  const { username } = useContext(UserContext)
  
  return (
    <div className="mx-auto mt-20">
      {username ? (
        <Alert type="success">You are logged in as {username}</Alert>
      ) : (
        <>
          <PageHeading extraClasses="text-center text-green-500 mb-8 dark:text-slate-50">
            Create an account
          </PageHeading>
          <SignupForm />
        </>
      )}
    </div>
  )
}

export default Signup