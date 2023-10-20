"use client"
import Navbar from './components/navbar'
import Billboard from './components/billboard'
import MovieList from './components/movieList'
import movies from "./config/movies.json" assert { type: 'json' };import InfoModal from './components/infoModal';
import React, {useState, useEffect} from 'react'
import useInfoModalStore from '@/hooks/infoModalStore';

export default function Home() {
  const [infoData, setInfoData] = useState<any>()
  const {isOpen, closeModal} = useInfoModalStore();
  const data = movies

  const handleInfoModal = (data:any) => {
    setInfoData(data)
  }

  return (
    <>
      <InfoModal
        visible = {isOpen}
        onClose={closeModal}
        data = {movies}
      />
      <Navbar/>
      <Billboard
        openInfo = {handleInfoModal}
      />
      <div className='pb-40'>
        <MovieList title="Trending Now" data={data}/>
        <MovieList title="My List" data={[data[1]]}/>
      </div>
    </>
  )
}
