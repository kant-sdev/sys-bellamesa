'use client'

import { ArrowUpIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function FloatButton() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50) // Define `true` se scroll > 50px
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <Link
            href={'#header'}
            className={`fixed z-50 bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition duration-300 ${
                isScrolled ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
            <ArrowUpIcon size={24} />
        </Link>
    )
}
