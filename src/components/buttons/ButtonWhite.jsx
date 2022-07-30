import React from 'react'

const ButtonWhite = ({ text }) => {
  return (
    <div>
        <button className="rounded font-bold bg-white px-3 py-2 text-black hover:bg-sky-900 hover:text-white transition">
            {text}
        </button>
    </div>
  )
}

export default ButtonWhite