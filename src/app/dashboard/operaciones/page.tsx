import { ChevronRight, PackageNode } from '@carbon/icons-react'

export default function Page() {
  return (
    <>
      <div className="h-10 bg-[#fcfcfd] border-b border-[#e5e7ea] flex items-center justify-between px-3.5">
        <div className='flex items-center gap-2'>
          <PackageNode size={17} />
          <div className='flex gap-0.5 items-center'>
            <h1 className='text-[15px] font-medium'>Operaciones</h1>
            <ChevronRight size={15} className='opacity-80' />
            <h1 className='text-[15px] font-medium opacity-80'>Nueva Operación</h1>
          </div>
        </div>
      </div>
      <div className='items-center justify-center flex'>
        Operaciones
      </div>
    </>
  )
}
