import React from 'react'

const TokenCard = () => {
  return (
    <div className="card w-80 min-w-80  bg-base-100 shadow-xl p-0 ">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body text-start">
    <h2 className="card-title text-white">Monki flip - #18</h2>
    <p className='text-sm'>✨ A monki just chillin' in the wild, do u need more explanation?</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary mt-1 ">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default TokenCard