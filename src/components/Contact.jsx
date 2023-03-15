import React from 'react'

const Contact = () => {
  return (
    <section className='flex xl:flex-row flex-col items-center justify-between gap-52 paddingY'>
      <div className='w-1/6 text-right'>
        <h1 className='xl:text-7xl text-5xl mb-6'>Naufal<br />Art</h1>
        <ul className='flex flex-col gap-4'>
          <li>Location</li>
          <li>Phone</li>
          <li>Email</li>

        </ul>
      </div>
      <div className='w-5/6 h-full bg-[#966F33] flex flex-row items-center'>
        <div className='h-full w-[80%] -ml-36 relative'>
        <img src="https://picsum.photos/500/600" alt="" className='relative z-20'/>
          <div className='w-full h-full bg-[#000103] absolute -bottom-4 -right-4 z-10'>

          </div>
        </div>
        <div className='w-full p-12'>
          <form action="" className='flex flex-col gap-16'>
            <input type="text" name="" id="" placeholder='Name' className=''/>
            <input type="text" name="" id="" placeholder='Email' className=''/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

