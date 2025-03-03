import React, {useEffect, useState} from 'react'
import UpcomingLists from "../components/commonComponents/UpcomingLists";
import { moviesLists } from "../util/themovieApi";

export default function Home() {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const data = await moviesLists();
        setMovies(data.results || []);
        setLoading(false);
      } catch (error){
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading){
    return <p>Loading...</p>;
  }

  if (error){
    return <p>Error: {error.message}</p>;
  }

  return (
            <div className="items">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-8 items__list">
                    {/* <!-- latest updates --> */}
                    <div className="items__custom">
                      <h4 className="items__title">Latest Updates</h4>
                      <div className="items__title--content">
                        <div className="all">
                          {movies.length > 0 && movies.map((data) => (
                              <div className="all__item">
                                <a href="#">
                                  <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
                                </a>
                              </div>
                          ))}
                        </div>
                        <div className="all-pagination">
                          <ul className="list-unstyled all-pagination__list">
                            <li>1</li>
                            <li>2</li>
                            <li>....</li>
                            <li>49</li>
                            <li>50</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <UpcomingLists />
                </div>
              </div>
            </div>
  )
}
