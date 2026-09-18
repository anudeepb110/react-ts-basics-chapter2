import Input from "./components/input.tsx";

Input
function App() {
  return (<main>
    <Input id="name" label="Your Name" type="text"></Input>
    <Input id="age" label="Your Age" type="number"></Input>
  </main>)
}

export default App;
