import React, { useEffect } from 'react';
import jQuery from 'jquery';
const Loading = () => {
    const jqueryCodes = () => {
        setTimeout(() => {
            jQuery(".pre-loader").fadeOut({
                duration:1000,
                easing:'linear'
            })
        }, 3000);
    }
    useEffect(() => { jqueryCodes()}, []);
  return (
    <div className='pre-loader'>
        <div className="log">
            <div className="large">
                <h1><span className="title">Walking</span><span>Bible</span></h1>
            </div>
                <span className='comment center'>Welcome to walking Bible Community ...</span>
        </div>
    </div>
  )
}

export default Loading;