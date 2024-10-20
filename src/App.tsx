import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";

const App = () => {
  return (
    <div className="flex flex-col flex-1 p-4">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Hi</h1>
      <Button className="w-fit bg-zinc-300">Hello</Button>
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox" />
        <label htmlFor="checkbox">Hello</label>
      </div>
    </div>
  );
};

export default App;
