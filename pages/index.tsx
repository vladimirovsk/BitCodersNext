import { Button } from '../component';

export default function Home():JSX.Element {
  return (
    <>
      <Button appearance='primary' className="test">Login</Button>
      <Button appearance='ghost'>Help</Button>
    </>
  );
}
