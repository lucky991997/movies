import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import tmdbApi, { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import "./detail.scss";
import CastList from "./CastList";
import VideoList from "./VideoList";

import MoviesList from '../../components/movie-list/MoviesList'

const Detail = () => {
  const { category, id } = useParams();

  const [items, setItems] = useState(null);

  useEffect(() => {
    let params = {};
    const getDetail = async () => {
      const respone = await tmdbApi.detail(category, id, { params });
      setItems(respone);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      {items && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                items.backdrop_path || items.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    items.backdrop_path || items.poster_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">{items.title || items.name}</h1>
              <div className="genres">
                {items.genres &&
                  items.genres.slice(0, 6).map((item, index) => (
                    <span className="genres__item" key={index}>
                      {item.name}
                    </span>
                  ))}
                <p className="overview">{items.overview}</p>
                <div className="cast">
                  <div className="section__header">
                    <h2>Casts</h2>
                  </div>
                  <CastList id={items.id} />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="section mb-3">
              <VideoList id={items.id} />
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Movies</h2>
                <MoviesList category={category} type="similar" id={items.id}/>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
