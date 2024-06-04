"use client"
import { useRouter } from "next/navigation"

const Home = () => {
  const router = useRouter();

  const navigate = (page) => {
    router.push(page);
  };


  return (
    <section>
      <h1>UseRouter</h1>
      <button className="border px-2 py-4" onClick={() => navigate("about")}>Go To About Page</button>

      <button className="border px-2 py-4 block my-3" onClick={() => navigate("login")}>Go To About Login</button>

    </section>
  )
}


export default Home;