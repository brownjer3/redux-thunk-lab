import React from "react";

const CatList = props => {
    const renderCatImages = () => props.catPics.map(pic => <img src={pic}></img>)
    return (
        <div>
            {renderCatImages()}
        </div>
    )
}

export default CatList