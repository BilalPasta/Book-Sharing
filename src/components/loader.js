import React from 'react';

const LoadingPage = (props) => {
    return (
        <div className="text-center py-5 ">
            <img src={props.loadingimage} alt='A loading page.' />
        </div>
    )
}

export default LoadingPage;