import Link from "next/link";
import { useEffect, useState } from "react";
import CustomHeader from "../components/CustomHeader";
import { useRouter } from "next/router";

export default function Home({ results }) {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (await fetch("/api/movies")).json();
  //     setMovies(results);
  //   })();
  // }, []);
  const router = useRouter();
  const onClick = (movie) => {
    // router.push(`/movies/${id}`);
    // router.push(
    //   {
    //     pathname: `/movies/${movie.id}`,
    //     query: {
    //       title: movie.title,
    //     },
    //   },
    //   `/movies/${movie.id}`
    // );
    router.push(`/movies/${movie.original_title}/${movie.id}`);
  };

  return (
    <div className="container">
      <CustomHeader title="Home" />
      {/* {!movies && <h4>Loading...</h4>} */}
      {results?.map((movie) => (
        <div className="movie" key={movie.id} onClick={() => onClick(movie)}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            {/* <Link href={`/movies/${movie.id}`}> */}
            <Link
              // href={
              //   ({
              //     pathname: `/movies/${movie.id}`,
              //     query: {
              //       title: movie.original_title,
              //     },
              //   },
              //   `/movies/${movie.id}`)
              // }
              href={`/movies/${movie.original_title}/${movie.id}`}
            >
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();

  return {
    props: {
      results,
    },
  };
}
