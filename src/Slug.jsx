import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';
import AOS from 'aos';
const API_URL = 'https://walking-bible-5k06.onrender.com/api/bible-posts';
const Slug = () => {  
  AOS.init({duration:2000});

  const { id } = useParams();
  const {postData} = useFetch(`${API_URL}/${id}?populate=photo`);
  return (
    <div className='about-us'>
    <div className="banner">
        <div className="shadows">
        <div className="anime-me" data-aos="zoom-out">
            <h1>View<span className='highlight'> Post</span></h1>
            <div className="comment normal"><Link to={`/`} className="link">Home / </Link><Link to={`/blog`} className="link">Blog / </Link><span className='highlight'>view post</span></div>
        </div>
        </div>
    </div>
    <div className="profile-image"></div>
    <div className="container about posting slugg">
        <div className="row">
        {
  postData ? 
  <div className='container center'>
  <div className='col-sm-9 post individual'>
  <div className="image">
        <img src={`${postData.attributes.photo.data[0].attributes.url}`} alt="" />
      </div>
      <div className="title normal">
          <div className="title"><h3><span>{postData.attributes.title}</span></h3></div>
          <div className="sentence">
            {postData.attributes.content}
          </div>
          <div className="commenting">
              <Link to={`/blog`} className="link">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor" className="bi bi-chat-square-text" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <span className="small">back on blog</span>
              </Link>
            </div>
      </div>
  </div>
  </div>: 
  <div className='col-sm-12 post'>
    <div className="title normal">
      <div className="title">
        <h3><span>PLEASE WAIT ...</span></h3>
      </div>
    </div>
  </div>
}
        </div>
    </div>
    <div className="fotter-end">
        <div className="icons">
           <a href="https://www.instagram.com/walkingbiblecommunity/?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
           </a>
        </div>
        <p>All right reserved by <a href="https://github.com/Code4Hacker" target="_blank" rel="noopener noreferrer">geminichild.com</a></p>
    </div>
</div>
  )
}

export default Slug;
