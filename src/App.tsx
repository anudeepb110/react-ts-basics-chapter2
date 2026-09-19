import Input from "./components/input.tsx";
// import Button from "./components/button.tsx";
// import Container from "./components/container.tsx";
import { useRef } from "react";

function App() {
  const input = useRef(null);
  return (<main>    
    {/* <Input id="name" label="Your Name" type="text"></Input>
    <Input id="age" label="Your Age" type="number"></Input> */}
    {/* <p>
      <Button>A Button</Button>
    </p>
    <p>
      <Button href="https://www.google.com">A link</Button>
    </p> */}
    {/* <Container as={Button} onClick={() => {}}>Click me</Container> */}
    <Input label="Test" id="test" ref={input}></Input>
  </main>)
}

export default App;
