"use client";
import { FC } from "react";
import Image from "next/image";
import {motion} from "framer-motion"

interface MovieCardProps {
  movie: any;
 
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
const date = movie.release_date.split("-")

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
  return (
    <motion.div variants={item} whileTap={{ scale: 1.1 }} className=" m-auto  relative flex flex-col justify-center item-center  gap-2 p-2  hover:bg-background_light w-full  sm:w-auto hover:border border-gray-600 rounded-lg shadow-lg cursor-pointer  duration-300 ease-in-out hover:scale-105 ">
      {/* image */}
      <div className=" m-auto relative h-[330px] w-full   sm:w-[220px] rounded-lg overflow-hidden ">
        <Image
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          alt="poster image"
          className=""
          objectFit="cover"
          layout="fill"
        />
      </div>

      <span className="absolute bg-yellow-400 text-primary_dark py-1 px-2 rounded text-sm left-8 top-5 font-semibold">
        {movie.vote_average}
      </span>

      {/* text */}
      <div className="text-sm text-center  font-medium w-full sm:w-auto ">
        <p className="capitalize">{movie.original_title} </p>
        <span className="text-primary_light">({date[0]})</span>
      </div>
    </motion.div>
  );
};

export default MovieCard;
