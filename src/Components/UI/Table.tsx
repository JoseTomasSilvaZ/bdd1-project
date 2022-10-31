import React from 'react'
import TableTab from './TableTab'
import TabRow from './TabRow'

const Table = () => {
  return (
    <div className='flex flex-col gap-2 items-start'>

        <TableTab/>
    <div className=' overflow-x-auto w-full'>
        <table className='table w-full'>
            <thead>
                <tr>
                    <th>Token name</th>
                    <th>Actual price</th>
                    <th>Owner</th>
                </tr>
            </thead>
            <tbody>
                <TabRow/>
                <TabRow/>

                <TabRow/>

                <TabRow/>

            </tbody>

        </table>
    </div>
    </div>
  )
}

export default Table