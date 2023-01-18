import {Button, Htag} from '../component';

export default function Home():JSX.Element {
  return (
    <>
      <Htag tag ='h2' >component</Htag>
        <Button appearance='primary' className="test">Login</Button>
        <Button appearance='ghost'>Help</Button>
    </>
  )
}
