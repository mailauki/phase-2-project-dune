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
      <img src="https://user-images.githubusercontent.com/48391286/115104563-fcbaf400-9f76-11eb-912d-5d2b7a9f4933.jpg" alt="dune" className="cover-image" />
      {/* <img src="https://imgix.bustle.com/uploads/image/2020/9/3/81f07923-8de2-4007-bb89-c8c5b2b0c8b7-dune-book-cover.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg" alt="dune" className="cover-image" /> */}
    </div>
  )
}

export default Home
