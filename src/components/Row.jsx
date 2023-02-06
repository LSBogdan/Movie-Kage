import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({title, fetchURL, rowId}) => {

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        });
    },[fetchURL]);

    console.log(movies);

    const leftSlide = () => {
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const rightSlide = () => {
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft + 500;
    }


  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className = 'relative flex items-center group'>
            <MdChevronLeft onClick={leftSlide} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size = {35} />
            <div id = {'slider' + rowId} className = 'w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item, id) => (
                    <Movie key = {id} item = {item} />
                ) )}
            </div>
            <MdChevronRight onClick={rightSlide} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={35}/>
        </div>
    </>
  )
}

export default Row