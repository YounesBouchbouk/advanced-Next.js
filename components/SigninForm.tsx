'use client'
import { signInUser } from '@/actions/auth'
import { Input } from '@nextui-org/react'
import Link from 'next/link'
import { useFormState } from 'react-dom'
import Submit from './Submit'

const initialState = { message: null }
const SigninForm = () => {
  const [formstate, action] = useFormState<{ message: string | null }>(
    signInUser,
    initialState
  )
  return (
    <form
      action={action}
      className="bg-content1 border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2 "
    >
      <h3 className="my-4">Sign in</h3>
      <Input
        fullWidth
        required
        size="lg"
        placeholder="Email"
        name="email"
        type="email"
      />
      <Input
        name="password"
        fullWidth
        required
        size="lg"
        type="password"
        placeholder="Password"
      />

      <div>
        <Link href="/signup">{`Don't have an account?`}</Link>
      </div>

      <Submit btnProps={{}} label={'sign-up'} />
    </form>
  )
}

export default SigninForm
