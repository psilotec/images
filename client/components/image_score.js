/**
 * Created by Scott on 6/11/2016.
 */

import React from 'react';

const ImageScore = (props) => {
    //props.ups is number of upvotes
    //props.downs is number of downvotes

    const { ups, downs } = props;

    const upsPercent = `${100 * (ups / (ups + downs))}%`;
    const downsPercent = `${100 * (downs / (ups + downs))}%`;

    return(
        <div>
            Ups/Downs
            <div className="progress">
                <div style={{ width: upsPercent }} className="progress-bar progress-bar-success" />
                <div style={{ width: downsPercent }} className="progress-bar progress-bar-danger" />
                { upsPercent }
            </div>
        </div>
    );
};


export default ImageScore;