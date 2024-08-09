import User from "@/component/User";

export default function Home() {
  return (
    <>
      <main>
        <User name="fakbo" age={20} isStudent={true} />
      </main>
    </>
  );
}
