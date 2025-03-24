'use client'

import React from 'react'
import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export default function Logout() {
    return (
        <Button className='' onClick={() => signOut()}>Logout</Button>
    )
}
