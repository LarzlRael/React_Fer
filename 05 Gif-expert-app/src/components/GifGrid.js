import React from 'react'
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';

import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);


    return (
        <>
            <h3 className="card animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__fadeIn">Loading</p>}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.protoTypes = {
    category: PropTypes.string.isRequired
}
export default GifGrid;
