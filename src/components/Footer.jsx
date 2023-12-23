import { faRegistered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
    return (
        <div className='bg-gray-950 h-20 flex items-center justify-center'>
            <h4>Powered by Matias Bustamante <FontAwesomeIcon icon={faRegistered} /></h4>
        </div>
    )
}
