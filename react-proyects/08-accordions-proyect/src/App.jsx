import Accordion from "./components/Accordion"
import { accordionData } from "./utils/content";

function App() {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content, id }) => {
          return <Accordion title={title} content={content} key={id} />
        })}
      </div>
    </div>
  )
}

export default App