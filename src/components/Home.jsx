import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
const Home = () => {
    const [visitor, setVisitor] = useState(0);
    const getView = async () => {
        const fetches = await fetch("https://api.countapi.xyz/update/walkingbible/1ff1b8c4-e5dd-4126-8da8-32f2d20b2a11?amount=1");
        const data = await fetches.json();
        setVisitor(data.value);
    }
    AOS.init({ duration: 2000 });
    useEffect(() => { getView() }, []);
    return (
        <div>
            <div className="banner">
                <div className="shadows">
                    <div className="contents">
                        <div className="anime-me" data-aos="zoom-out">
                            <h1>In The world of <span className='highlight'>God</span> we live for     <span className='highlight'>free</span></h1>
                            <p className='to-be-small'>" Vijana ndio nguvu pekee na nuru ya maisha ya baadae  "</p>

                            <div className="viewers">
                                <p>{visitor > 0 ? visitor : '0'}</p>
                                <h5>Visitors</h5>
                            </div>
                            <div className="btn">
                                <button><Link to={`blog`} className="link">see contents</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="some-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className='title text-center' data-aos="fade-up">Mambo ya <span className='highlight'>kujifunza</span></h1>
                            <p className='text-center' data-aos="fade-up">Walking Bible Community ni jamii ya Kikristo ambayo ina msisitizo wa kusoma, kufundisha na kuishi kwa mujibu wa Neno la Mungu. Kwa hiyo, mambo muhimu ya kujifunza ndani ya jamii hii ni Kusoma na kuelewa Biblia, Kufundisha na kushiriki maarifa ya Biblia, Kuishi kwa mujibu wa Neno la Mungu, Kukua kiroho na Kuwa na ushirika na wengine.</p>
                            <div className="btn text-center">
                                <button data-aos="fade-up"><Link to={`blog`} className="link">soma nakala</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mrg-btn">
                    <div className="col-md-6">
                        <h1 className='title' data-aos="fade-up">Changia <span className='highlight'>Mawazo</span></h1>
                        <p data-aos="fade-up">Nataka kwanza kutoa shukrani kwa kila mmoja wenu kwa kujumuika katika jamii hii ya Walking Bible. Kujifunza Neno la Mungu pamoja na kushirikiana katika safari yetu ya kiroho ni muhimu sana. Nataka kuwahimiza kuendelea kujifunza Neno la Mungu na kuiweka katika matendo. Pia, ni muhimu kwa sisi kushirikiana na wengine katika jamii yetu na kusaidia wale wanaohitaji msaada.</p>
                        <div className="btn text-center">
                            <button data-aos="fade-up"><Link to={`blog`} className="link">soma nakala</Link></button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="image-6 a" data-aos="fade-down"></div>
                    </div>
                    <div className="col-md-6">
                        <h1 className='title' data-aos="fade-up">Kwa <span className='highlight'>pamoja</span></h1>
                        <p data-aos="fade-up">Elimu na Mawazo tutakayo yapata mahali hapa yatatupa nuru mpya na Nguvu ya kuanza tena hata, Umoja wetu ndio nguzo yetu ya kuendelea mbele. Kukata tamaa ni jambo ambalo hatujali kusudia kuwa nalo ndani yetu. Tushikane na tusonge mbele.</p>
                        <div className="btn text-center">
                            <button data-aos="fade-up"><Link to={`blog`} className="link">collaborate</Link></button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="image-6 b" data-aos="fade-down"></div>
                    </div>

                </div>
            </div>
            <div className="some-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1 className='title text-center' data-aos="fade-up">TAARIFA <span className='highlight'>ZETU</span></h1>
                            <div className="container">
                                <div className="row text-center">
                                    <div className="col-sm-3">
                                        <div className="viewers">
                                            <p data-aos="fade-up">{visitor > 0 ? visitor : '0'}</p>
                                            <h5 data-aos="fade-up">mahudhurio</h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="viewers">
                                            <p data-aos="fade-up">7 siku</p>
                                            <h5 data-aos="fade-up">upatikanaji</h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="viewers">
                                            <p data-aos="fade-up">24</p>
                                            <h5 data-aos="fade-up">muda saa</h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="viewers">
                                            <p data-aos="fade-up">1</p>
                                            <h5 data-aos="fade-up">muongoza/wa</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn mrg-top">
                                <button className='button' data-aos="fade-up"><Link to={`blog`} className="link">Tujifunze</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fotter-end">
                <div className="icons">
                    <a href="https://www.instagram.com/walkingbiblecommunity/?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>
                    </a>
                </div>
                <p>All right reserved by <a href="https://github.com/Code4Hacker" target="_blank" rel="noopener noreferrer">geminichild.com</a></p>
            </div>
        </div>
    )
}

export default Home;