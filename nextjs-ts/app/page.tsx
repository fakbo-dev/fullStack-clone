import User from "@/component/User";
import About from "@/component/About";
import Info from "@/component/Info";
import AdminInfo from "@/component/AdminInfo";
export default function Home() {
  return (
    <>
      <main>
        {/* Props with ts and types */}

        {/* <User name="fakbo" age={20} isStudent={true} /> */}

        {/*Types in children props fo  */}
        {/* <About>
          <p>This is the Content of the children</p>
        </About> */}

        {/* Reusable Types */}
        <Info name="fakbo" lastName="webDev" age={21} hobbies="video Games" location={["Venezuela", "Valencia"]} /><br />
        <hr /><br />
        <AdminInfo name="kol0" lastName="webDev" age={99} hobbies="Is Girlfriend" location={["Venezuela", "Valencia"]} admin="true" />
      </main>
    </>
  );
}
