import Input from "./components/input.tsx";
import Button from "./components/button.tsx";
// import Container from "./components/container.tsx";
import { useRef } from "react";
import Form, {type FormHandle} from "./components/form.tsx";

function App() {
  // const input = useRef(null);

  const customForm = useRef<FormHandle>(null);
  const handleOnSave = (data:unknown) => {
    const extractedData = data as {name:string, age:number}
    console.log(extractedData)
    customForm.current?.clear();
  };
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
    {/* <Input label="Test" id="test" ref={input}></Input> */}
    
    <Form onSave={handleOnSave} ref={customForm}> 
      <Input label="Name" id="name" name="name" type="text"></Input>
      <Input label="Age" id="age"  name="age" type="number"></Input>
      <Button>Submit</Button>
    </Form>
  </main>)
}

export default App;
