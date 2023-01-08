import {Button, Htag} from '../component';

export default function Home():JSX.Element {
  return (
    <>
      <Htag tag ='h2' >component htag</Htag>
        <Button appearance='primary' className="test">Button</Button>
        <Button appearance='ghost'>Button</Button>
    </>
  )
}
