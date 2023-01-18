import {Button, Htag} from '../component';

export default function Home():JSX.Element {
  return (
    <>
      {/*<Htag tag ='h1' >Htag components</Htag>*/}
      <Button appearance='primary' className="test">Login</Button>
      <Button appearance='ghost'>Help</Button>
    </>
  )
}
