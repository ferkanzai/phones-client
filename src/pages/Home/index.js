import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import BackToTop from "react-back-to-top-button";

import ArrowToTop from "../../components/ArrowToTop";

import "./index.scss";

const Home = () => {
  const [phones, setPhones] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [more, setMore] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/api/phones").then((res) =>
      res.json().then((res) => {
        setPhones(res.data);
        setNextPage(res.nextPage);
      })
    );
  }, []);

  const loadMoreProducts = () => {
    fetch(`http://localhost:4000/api/phones?page=${nextPage}`).then((res) =>
      res.json().then((res) => {
        setPhones((prevPhones) => [...prevPhones, ...res.data]);
        if (!res.nextPage) setMore(false);
        setNextPage(res.nextPage);
      })
    );
  };

  return (
    <div className="home">
      <InfiniteScroll
        dataLength={phones.length}
        next={loadMoreProducts}
        hasMore={more}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingTop: "60px",
        }}
      >
        {phones &&
          phones.map((phone) => (
            <Link to={`/phone/${phone.id}`} key={phone.id}>
              <div className="phone">
                <img
                  src={phone.picture}
                  alt={phone.name}
                  className="phone__img"
                />
                <p className="phone__name">{phone.name}</p>
              </div>
            </Link>
          ))}
      </InfiniteScroll>
      <BackToTop
        style={{
          backgroundColor: "white",
          width: "50px",
          height: "50px",
          borderRadius: "100%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ArrowToTop />
      </BackToTop>
    </div>
  );
};

export default Home;
