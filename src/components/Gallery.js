import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = (props) => {
    const shouldDisplayLoading = (props.data.isLoading !== undefined && props.data.isLoading);
    let data = props.data.pictures;

    let title = `${props.data.searchTag.charAt(0).toUpperCase() + props.data.searchTag.slice(1)}`;

    if(data.length !== 0) {
        title += ' Pics'
    }

    let pictures = props.data.pictures.map((picture, index) =>
    <GalleryItem 
        farmID={picture.farm}
        serverID={picture.server}
        ID={picture.id}
        secret={picture.secret}
        key={index}
    />
    )
    return(
        
        <div className="photo-container">
        {shouldDisplayLoading 
        ?
        <p>Loading...</p>
        :
        data.length > 0 
        ?
        <div className="photo-container">
            <h1>{title}</h1>
            <ul>
                {pictures}
            </ul>
        </div>
        :
        <div>
        <h1>No results found</h1>
        <p>{title} did not return any results, please try again.</p>
        </div>
        }
        </div>
        
        

    )
}
    

    

export default Gallery;