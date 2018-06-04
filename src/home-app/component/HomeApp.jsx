
import React from 'react';
import PropTypes from 'prop-types';

import './HomeApp.scss';

function HomeApp({banners, articles, news, isSearching, searchingElements, onChooseArticle}) {

    return (
        <div className="main-content">

            <div className="home-banner">
                <h3>Banner:</h3>

                <div className="content-banner">
                    <p>{banners[0].name} {banners[0].ad ? <span className="ad">:ad</span> : null}</p>
                    <a href={banners[0].link} target="_blank">
                        <img src={banners[0].imgLink} alt={banners[0].name} />
                    </a>
                    <p>{banners[0].description}</p>
                </div>
            </div>

            { !isSearching
                ? <div className="home-articles">
                    <h3>Articles:</h3>

                    <div className="content-articles">
                        {
                            articles.map((item) =>
                                <div className="article" onClick={() => { onChooseArticle(item.link); }} key={item.id} >
                                    <h4>{item.display.article}</h4>
                                    <p>{item.display.description}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
                : <div className="home-search">
                    <h3>Search:</h3>

                    <div className="content-search">
                        {
                            searchingElements.map((item) =>
                                <div className="article" onClick={() => { onChooseArticle(item.link); }} key={item.id} >
                                    <h4>{item.display.article}</h4>
                                    <p>{item.display.description}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            }

            <div className="home-news">
                <h3>News:</h3>

                <div className="content-news">
                    <i>{news.date}</i>

                    {
                        news.newsArray.map((item) =>
                            <div className="news" key={item.id}>
                                <h4 onClick={() => { onChooseArticle(item.parentLink); }}>
                                    {item.article}
                                </h4>
                                {item.ad ? <span className="ad">:ad</span> : null}
                                <i>{item.display.date}</i>
                                <a href={item.link} target="_blank">
                                    <img src={item.display.imgLink} alt={item.article}/>
                                </a>
                                <p>{item.display.description}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

if (process.env !== 'production') {

    HomeApp.propTypes = {
        banners: PropTypes.object.isRequired,
        articles: PropTypes.array.isRequired,
        news: PropTypes.object.isRequired,
        isSearching: PropTypes.bool.isRequired,
        searchingElements: PropTypes.array.isRequired,
        onChooseArticle: PropTypes.func.isRequired
    };
}

export default HomeApp;