import { Button, Input, Select, Typography } from 'antd'

const Home = () => {
  const fruits = ['1', '2', '3', '4']
  return (
    <>
      <div>Home</div>
      <Button type='primary' block loading icon={<h1>hi</h1>} className='test' onClick={() => {}}>
        Primary Button
      </Button>
      <Input placeholder='hi' maxLength={10} prefix={<span>hello</span>} allowClear></Input>
      <Select placeholder='abc' allowClear>
        {fruits.map((d, index) => {
          return (
            <Select.Option key={index} value={d}>
              {d}
            </Select.Option>
          )
        })}
      </Select>
      <Typography>a</Typography>
    </>
  )
}

export default Home
