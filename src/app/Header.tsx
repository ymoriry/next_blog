import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <div>
            <h1>
                <Link href='/'> 
                    Blog
                </Link>
            </h1>
        </div>
    </header>
  )
}

export default Header