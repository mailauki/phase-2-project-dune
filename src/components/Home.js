function Home({ quote }) {
  return (
    <div className="home">
      <h2 className="quote">❝{quote}❞</h2>
      <img src="https://user-images.githubusercontent.com/48391286/115104563-fcbaf400-9f76-11eb-912d-5d2b7a9f4933.jpg" alt="dune" className="cover-image" />
    </div>
  )
}

export default Home
