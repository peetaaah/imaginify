import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        // usually with shared UI here, like a header or sidebar
        <section>
            <div className='auth'>{children}</div>
        </section>
    )
}

export default Layout