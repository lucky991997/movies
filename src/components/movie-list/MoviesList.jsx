import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './movie-list.scss'

import {SwiperSlide, Swiper} from 'swiper/react'
import {Link} from 'react-router-dom'
import Button from '../button/Button'

import tmdbApi, {category}from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig';
import MovieCard from '../movie-card/MovieCard';

const MoviesList = (props) => {
    

    const [items, setItems] = useState([])
    useEffect(() => {
        const getList = async () => {
            let response = null
            const params = {}

            if(props.type  !== 'similar') { 
               
                switch(props.category) {
                    case category.movie: 
                        response = await tmdbApi.getMoviesList(props.type, {params})
                        break
                    default:
                        response = await tmdbApi.getTvList(props.type, {params})
                }

            }else {
                response = await tmdbApi.similar(props.category, props.id)
            }
            setItems(response.results)
        }
        getList()
    },[])
  
  return (
      <div className="movie-list">
        
          <Swiper
            grabCursor={true}
            spaceBetween={10}
            slidesPerView={'auto'}
          >
              {
                  items.map((item,index) => (
                      <SwiperSlide key={index}>
                          <MovieCard item={item} category={props.category}/>
                        {/* <img src={apiConfig.w500Image(item.poster_path)} alt={index}/> */}
                      </SwiperSlide>
                  ))
              }
          </Swiper>


      </div>
  )
};

MoviesList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  
};


export default MoviesList;
