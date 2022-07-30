import React from 'react'

const ButtonBlue = ({ text }) => {
  return (
    <div>
        <button className="rounded font-bold bg-sky-600 px-3 py-2 text-white transition hover:bg-sky-700">
            {text}
        </button>
    </div>
  )
}

export default ButtonBlue