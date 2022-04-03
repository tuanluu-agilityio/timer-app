import { useState } from 'react'
import { LabelAndInput } from '../Form'
import Button from '../Button'

const SignupForm = () => {
  const [username, setUsername] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

  return (
    <form className="w-full sm:w-96">
      <LabelAndInput
        label="Username"
        inputType="text"
        inputName="username"
        handleChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <LabelAndInput
        label="Password"
        inputType="password"
        inputName="password1"
        handleChange={(e) => setPassword1(e.target.value)}
        value={password1}
      />
      <LabelAndInput
        label="Confirm Password"
        inputType="password"
        inputName="password2"
        handleChange={(e) => setPassword2(e.target.value)}
        value={password2}
      />
      <Button
        type="submit"
        color="success"
        extraClasses='w-full mt-3 py-3 font-semibold'
      >
        Create Account
      </Button>
    </form>
  )
}

export default SignupForm