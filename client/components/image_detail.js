/**
 * Created by Scott on 6/6/2016.
 */

import React from 'react';

const ImageDetail = (props) => {
    return (
        <li>
            <img src={props.image.link} />
            {props.image.title}
        </li>
    );
};

export default ImageDetail;