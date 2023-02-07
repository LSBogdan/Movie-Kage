import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img className = 'w-full h-[400px] object-cover' src = "https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/a54d1c9c-6b49-47eb-88e9-61240b64d5af/RO-ro-20230130-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt = ""/>
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'> 
          <h1 className='text-3xl md:text-4xl font-bold'>My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account