import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '../styles/globals.css'

import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
    children: ReactNode
}

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="w-full min-h-screen bg-gray-950">
                    <Header />

                    <div className="max-w-[70rem] mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-[256px_minmax(0,_1fr)] gap-8 items-start">
                        <Sidebar />

                        <main className=""> {children} </main>
                    </div>
                </div>
            </body>
        </html>
    )
}