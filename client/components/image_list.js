/**
 * Created by Scott on 6/5/2016.
 */
//Image list component
//Import React
import React from 'react';
//Import ImageDetail component
import ImageDetail from './image_detail';

//Create the component
const ImageList = (props) => {
    const RenderedImages = props.images.map((image) => {
        return <ImageDetail key={image.title} image={image} />
    });

    return (
        <ul className="media-list list-group">
            {RenderedImages}
        </ul>
    );
};

//Export the component
export default ImageList;