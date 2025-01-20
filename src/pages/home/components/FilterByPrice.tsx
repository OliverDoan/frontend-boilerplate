import { Button, Label, Sidebar, TextInput } from 'flowbite-react'

export default function FilterByPrice() {
  return (
    <Sidebar.Collapse label='PRICE' open={true}>
      <div className='px-5'>
        <div className='block mb-2'>
          <Label htmlFor='fromPrice' value='From' />
        </div>
        <TextInput id='fromPrice' type='number' sizing='sm' className='mb-2' placeholder='$0' />
        <div className='block mb-2'>
          <Label htmlFor='toPrice' value='To' />
        </div>
        <TextInput id='toPrice' type='number' sizing='sm' className='mb-4' placeholder='$0' />
        <div className='grid grid-cols-2 gap-2'>
          <Button color='gray'>Reset</Button>
          <Button>Apply</Button>
        </div>
      </div>
    </Sidebar.Collapse>
  )
}
