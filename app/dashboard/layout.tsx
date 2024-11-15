import Navbar from '@/components/ui/Navbar';
import Sidebar from '@/components/ui/Sidebar';

import { PropsWithChildren } from 'react';

function layout({children}:PropsWithChildren) {
  return (
    <main className='grid lg:grid-cols-5'>
      <div className='hidden lg:block lg:col-span-1 lg:min-h-screen'>
        <Sidebar/>
      </div>
      <div className='lg:col-span-4'>
        <Navbar/>
      </div>
      <div className='py-16 px-4 sm:px-8 lg:px-16'>
        {children}
      </div>
      {children}
    </main>
  )
}

export default layout