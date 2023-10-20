import Image from 'next/image'
import Navbar from './components/navbar'
import Billboard from './components/billboard'
import MovieList from './components/movieList'
import movies from "./config/movies.json" assert { type: 'json' };; 

export default function Home() {
  const data = movies

  return (
    <>
      <Navbar/>
      <Billboard/>
      <div className='pb-40'>
        <MovieList title="Trending Now" data={data}/>
      </div>
    </>
  )
}
