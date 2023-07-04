"use client";
import MovieCard from "@/components/MovieCard";
import axios from "axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  //  after scroll
  const getMovies = async (pageParam: Number) => {
    const { data } = await axios.get(
      `http://localhost:3000/api/movie?page=${pageParam}`
    );

    return data;
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isFetching,
  } = useInfiniteQuery(
    ["movies"],
    ({ pageParam = 1 }) => getMovies(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !isFetchingNextPage &&
        !isFetching &&
        hasNextPage
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchNextPage, hasNextPage, isFetching, isFetchingNextPage]);

  return (
    <main className=" px-[40px] mt-10">
      <div className="max-w-[1720px] m-auto ">
        {isLoading && (
          <div className="flex items-center justify-center">
            <svg className="spinner" viewBox="0 0 50 50">
              <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke-width="5"
              ></circle>
            </svg>
          </div>
        )}

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className=" grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8"
        >
          {data?.pages?.map((page: any) =>
            page?.results?.map((movie: any) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })
          )}
        </motion.div>

        {isFetchingNextPage && (
          <div className="flex items-center justify-center">
            <svg className="spinner" viewBox="0 0 50 50">
              <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke-width="5"
              ></circle>
            </svg>
          </div>
        )}

        {!isFetchingNextPage && hasNextPage && (
          <button
            onClick={async () => await fetchNextPage()}
            className="btn bg-primary text-white hover:bg-primary_dark"
          >
            Load More
          </button>
        )}
      </div>
    </main>
  );
}
