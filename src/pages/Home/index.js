import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollTop from "react-scrolltop-button";

import ArrowToTop from "../../components/ArrowToTop";

import "./index.scss";
import Phones from "../../components/Phones";

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
          phones.map((phone) => <Phones key={phone.id} phone={phone} />)}
      </InfiniteScroll>
      <ScrollTop icon={<ArrowToTop />} className="home__toTop" style={{}} />
    </div>
  );
};

export default Home;
