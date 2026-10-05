import { PackageNode } from '@carbon/icons-react'
export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const name = slug[slug.length - 1] ?? ''
  return (
    <>
      <div className='h-10 bg-[#fcfcfd] border-b border-[#e5e7ea] flex items-center justify-between px-3.5'>
        <div className='flex items-center gap-2'>
          <PackageNode size={17} />
          <h1 className='text-[15px] font-medium'>{name}</h1>
        </div>
      </div>
      <div className='items-center justify-center flex'>
        {name}
      </div>
    </>
  )
}

