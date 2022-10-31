import React from 'react'

const TabRow = () => {
  return (
    <tr>
                    <td>
                        <div className='flex items-center space-x-3'>
                            <div className='avatar'>
                                <div className='mask mask-squircle w-12 h-12'>
                                    <img src='https://media.tenor.com/wAteLujqGtcAAAAC/monki-flip-monki.gif'></img>
                                </div>
                            </div>
                            <div>
                                <div className='font-bold'> Monki Flip</div>
                                <div className='text-sm opacity-50'>Released 08/05/2022</div>
                            </div>
                        </div>
                    </td>
                 
                    <td>
                        1.2 ETH

                    </td>
                    <td>
                        Tomas Opazo

                    </td>
                </tr>
  )
}

export default TabRow