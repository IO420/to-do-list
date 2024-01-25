import React from 'react'

export default function Header() {
  return (
    <header className='container-fluid border border-primary bg-black text-primary '>
        <nav className='p-2'>
            <ul className='d-flex align-items-center justify-content-between  nav'>
                <li className='fs-4'><b>to list</b></li>
                <li >log in</li>
            </ul>

        </nav>
    </header>
  )
}
