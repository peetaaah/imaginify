import React from 'react'

const TransformationsPage = ({ params }: { params: { id: String } }) => {
    return (
        <div>TransformationsPage</div>
    )
}

export default TransformationsPage

// not on localhost:3000/transformations
// --> each will have its own id, using dynamic routes. use [] instead of ()<