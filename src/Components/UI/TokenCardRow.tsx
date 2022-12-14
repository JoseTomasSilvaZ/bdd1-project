import React from 'react'
import TokenCard from './TokenCard'

const TokenCardRow = () => {
  return (
    <>
    <div className='carousel w-full '>
      <div id='slide1' className='carousel-item relative w-full flex flex-row justify-evenly'>
            <TokenCard/>
            <TokenCard/>
            <TokenCard/>
            <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
              <a href="#slide4" className="btn btn-circle">❮</a> 
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
      </div>
      <div id='slide2'  className='carousel-item relative w-full flex flex-row justify-evenly'>

            <TokenCard/>
            <TokenCard/>
            <TokenCard/>
            <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
              <a href="#slide1" className="btn btn-circle">❮</a> 
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
      </div>
        
    </div>
    </>
  )
}

export default TokenCardRow