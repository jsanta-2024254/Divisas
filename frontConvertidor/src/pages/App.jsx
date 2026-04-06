import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { Convertidor } from '../convertidor/Convertidor'

export const App = () => {
    return (
        <main>
            <Navbar />
            <Convertidor />
        </main>
    )
}
