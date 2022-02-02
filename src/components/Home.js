import { useEffect, useState } from "react";

function Home() {
  const [quote, setQuote] = useState("loading quote ...")

  useEffect(() => {
    fetch("http://the-dune-api.herokuapp.com/quotes/1")
    .then(r => r.json())
    .then(data => setQuote(data[0].quote))
  }, [])

  return (
    <div className="home">
      <h2 className="quote">❝{quote}❞</h2>
    </div>
  )
}

export default Home
