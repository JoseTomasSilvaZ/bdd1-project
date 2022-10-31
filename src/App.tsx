import { useState } from 'react'
import './App.css'
import Table from './Components/UI/Table'
import TokenCardRow from './Components/UI/TokenCardRow'

function App() {

  return (
    <div className="flex flex-col gap-6">
      <h2 className='font-bold font-white text-3xl text-white mt-6 mb-6'>Explore, collect, and sell NFTs</h2>
      <TokenCardRow/>
      <Table/>
    </div>
  )
}

export default App
