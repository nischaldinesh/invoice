import React from 'react'
import { requiredUser } from '../utils/hooks'
import { signOut } from '../utils/auth'


export default async function DashboardRoute() {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const session = await requiredUser()
  return (
    <div>
        <h1>DashboardRoute page</h1>
         <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
    </div>
  )
}





