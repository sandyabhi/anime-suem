import "../styles/Main.css"
function Main({ topAnime }) {
  return (
    <div className="card-main">
      {topAnime.map((anime) => (
        <a className="card-body" href={anime.url}>
          <figure className="card-fig">
            <img className="card-image" src={anime.image_url} alt="Anime Image" />
          </figure>
          <h3 className="card-title">{anime.title}</h3>
        </a>
      ))}
    </div>
  );
}

export default Main;
