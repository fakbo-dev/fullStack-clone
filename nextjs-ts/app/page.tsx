import User from "@/component/User";
import About from "@/component/About";
export default function Home() {
  return (
    <>
      <main>
        {/* Props with ts and types */}

        {/* <User name="fakbo" age={20} isStudent={true} /> */}

        {/*Types in children props fo  */}
        <About>
          <p>This is the Content of the children</p>
        </About>
      </main>
    </>
  );
}
