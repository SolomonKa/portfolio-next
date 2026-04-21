import About from "./components/sections/about/about";
import Resume from "./components/sections/cv/resume";
import Project from "./components/sections/projects/project";
import Stack from "./components/sections/stack/stack";
import Contact from "./components/sections/contact/contact";
import ChatBot from "./components/ai/chatBot";

export default function Home() {
  return (
    <>
      {/* <h1>page</h1> */}
      <About />
      <Stack />
      <Project />
      <Resume />
      <Contact />
      <ChatBot />
    </>
  );
}
