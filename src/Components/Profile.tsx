import React from 'react'
import {Twitter, Instagram, Twitch} from 'react-feather'


const Profile = () => {
  return (
    <div>
        <div className='w-full flex flex-row p-5 justify-between items-center'>
            <div className='flex flex-col gap-5'>

        <div className='flex flex-col items-start gap-2'>
                <h1 className='text-xl font-bold text-white block'>Tomas Opazo</h1>
                <h1 className='text-sm  text-white block'>Created in <strong>2022</strong></h1>
            </div>
            <div tabIndex={0}   className="collapse collapse-arrow  rounded-box w-1/2">
            <div className=" text-md text-white font-medium text-start px-0">
    About me
  </div>
  <div className="collapse-content p-0 "> 
    <p className='text-start text-sm' tabIndex={0}>Project IntentThe urban fabric of Philadelphia is defined by its rowhome typology. Two to three stories, 15-20 feet wide. Within this consistent format, there is a remarkable amount of architectural variety that makes each home unique. Many of these structures have been standing for over 100 years, and for some, that time has started to show.EditingThese visuals are all photo composites, created from several images taken in Philadelphia neighborhoods. The intention of the project is not to show reality, but rather to present each individual home in a consistent and graphic style. Power lines, parked cars, and surrounding houses (If present) are removed to consistently present the architectural character of each home without distraction. 100 homes.</p>
  </div>
            </div>
            </div>
            <div className='flex flex-row gap-4'>
                <Twitter/>
                <Instagram/>
                <Twitch/>
            </div>
        </div>
    </div>
  )
}

export default Profile