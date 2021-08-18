import "../styles/AnimeCard.css"

function AnimeCard({anime}) {
  // Anime Cards
    return (
        <a className="card-body" href={anime.url} alt={anime.title}>
        <figure className="card-fig">
          <img className="card-image" src={anime.image_url} alt="Anime Image" />
        </figure>
        <h3 className="card-title">{anime.title}</h3>
      </a>
    )
}

export default AnimeCard
