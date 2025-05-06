import MovieCard from "@/components/Moviecard";
import { movieDB } from "@/database/movies";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#141414]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex items-center flex-wrap justify-between gap-[20px]">
          {/* {movieDB.map((ele, index) => (
            <MovieCard
              key={index}
              moviePoster={ele.moviePoster}
              movieName={ele.movieName}
              movieReleaseYear={ele.movieReleaseYear}
              movieRating={ele.movieRating}
            />
          ))} */}
          <MovieCard
              moviePoster={movieDB[0].moviePoster}
              movieName={movieDB[0].movieName}
              movieReleaseYear={movieDB[0].movieReleaseYear}
              movieRating={movieDB[0].movieRating}
            />
        </div>
      </main>
    </div>
  );
}
