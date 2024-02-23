import { Header } from "./Header";
import { Strategies } from "./Strategies";
import { Service } from "./service";
import { Partner } from "./partner";
import { Countries } from "./Countries";
import { Form } from "./Form";
import { Footer } from "./Footer";

function App() {
  return (
    <div className=" bg-[#000f21]   w-screen flex flex-col items-center">
      <Header />
      <Strategies />
      <Service />
      <Partner />
      <Countries />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
