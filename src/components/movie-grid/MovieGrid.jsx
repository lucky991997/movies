import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import tmdbApi, { category, movieType, tvType } from "../../api/tmdbApi";

import MovieCard from "../../components/movie-card/MovieCard";
import  { OutlineButton } from "../button/Button";
import Input from "../../components/input/Input";
import "./movie-grid.scss";

const MovieGrid = (props) => {
  
 
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();
  useEffect(() => {
    const getList = async () => {
      let response = null;

      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, { params });
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(props.category, { params });
      }
      setItems(response.results);
      setTotalPage(response.total_pages);
    };
    getList();
  }, [props.category, keyword]);
  const loadeMore = async () => {
    let response = null;

    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (props.category) {
        case category.movie:
          response = await tmdbApi.getMoviesList(movieType.upcoming, {
            params,
          });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.popular, { params });
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await tmdbApi.search(props.category, { params });
    }
    setItems([...items, ...response.results]);
    setPage(page + 1);
  };

  return (
    <>
      <MovieSearch category={props.category} keyword={keyword}/>
      <div className="movie-grid">
        {items.map((item, index) => (
          <MovieCard category={category} item={item} key={index} />
        ))}
      </div>
      {page < totalPage ? (
        <div className="movie-grid__loadmore">
          <OutlineButton className="small" onClick={loadeMore}>
            View more
          </OutlineButton>
        </div>
      ) : null}
    </>
  );
};
const MovieSearch = (props) => {

  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");

  const navigate = useNavigate();
 

  const goToSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
   
      navigate(`/${category[props.category]}/search/${keyword}`);
    }
    setKeyword('')
  }, [keyword, props.category, navigate]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  },[keyword, goToSearch]);

  return (
    <div className="movie-search mb-2" style={{textAlign: "right"}}>
      <Input  
        type="text"
        placeholder="Enter Keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <OutlineButton  className="small ml-1" onClick={goToSearch}>Search</OutlineButton>
    </div>
  );
};
export default MovieGrid;
