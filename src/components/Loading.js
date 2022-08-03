import React from 'react'
import '../style/loading.css'

const Loading = () => {
    return (
        <div className='loading_container'>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading