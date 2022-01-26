function Home({ quote }) {
  return (
    <div className="home">
      <img src="https://user-images.githubusercontent.com/48391286/115104563-fcbaf400-9f76-11eb-912d-5d2b7a9f4933.jpg" alt="dune" className="cover-image" />
      <h2>"{quote[0].quote}"</h2>
    </div>
  )
}

export default Home
