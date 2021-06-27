import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollTop from "react-scrolltop-button";

import ArrowToTop from "../../components/ArrowToTop";
import Phones from "../../components/Phones";

import apiUrl from "../../const/apiUrl";

import "./index.scss";

const Home = () => {
  const [phones, setPhones] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [more, setMore] = useState(true);

  useEffect(() => {
    fetch(`${apiUrl}/phones`).then((res) =>
      res.json().then((res) => {
        setPhones(res.data);
        setNextPage(res.nextPage);
      })
    );
  }, []);

  const loadMoreProducts = () => {
    fetch(`${apiUrl}/phones?page=${nextPage}`).then((res) =>
      res.json().then((res) => {
        setPhones((prevPhones) => [...prevPhones, ...res.data]);
        if (!res.nextPage) setMore(false);
        setNextPage(res.nextPage);
      })
    );
  };

  return (
    <div className="home" data-testid="home">
      <InfiniteScroll
        dataLength={phones.length}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>You have reached the end, nothing else to show</b>
          </p>
        }
        hasMore={more}
        loader={<h4>Loading...</h4>}
        next={loadMoreProducts}
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
