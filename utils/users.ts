import { cookies } from 'next/headers'
import 'server-only'
import { COOKIE_NAME } from './constants'
import { redirect } from 'next/navigation'
import { getUserFromToken } from './authTools'
import { cache } from 'react'

// this function is used to protect a route
// this function isn't cached by default because it user a cookies option, so next js wont cach it
//per-request
export const getCurrentUser = cache(async () => {
  const token = cookies().get(COOKIE_NAME)
  if (!token) redirect('/signin')
  const user = await getUserFromToken(token)
  if (!user) redirect('/signin')
  return user
})
