import React from 'react'
import Card from '../card/Card'
import formdatabase from '../formdatabse/formdatabase'
const Classes = () => {
  return (
    <div className='bg-black text-white'>   
      <div>
          <h1 className='text-6xl md:text-8xl text-center py-20 bg-black  font-bold'>Classes</h1>
          <div className="flex flex-wrap justify-center gap-8 ">
           {formdatabase.map(form => (
            <Card key={form.id} form={form} />
           ))}
    </div>
    </div>
    </div>
  )
}

export default Classes
