import React from 'react'
import MovieGrid from "../components/commonComponents/MovieGrid";

export default function Home() {
  return (
      <div className="items__custom">
        <h4 className="items__title">Latest Movies</h4>
        <MovieGrid />
      </div>
  )
}
