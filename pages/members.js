import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Page() {
  const [ session, loading ] = useSession()

  {/*const res = await fetch("/api/customer", {
    headers: {
       "Authorization": "1234567890abcdef",
       "X-Secret-Key": "djewbdjnewdjknwejkdnkjwe"
     },
     method: 'POST',
     body: JSON.stringify({email: data})
  });*/}

  return <>
    {!session && <>
      Not signed in <br/>
      <button onClick={signIn}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <button onClick={signOut}>Sign out</button>
    </>}
  </>
}