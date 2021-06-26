import { Link } from "react-router-dom";

import "./index.scss";

const Phones = ({ phone }) => {
  return (
    <Link to={`/phone/${phone.id}`} key={phone.id}>
      <div className="phone">
        <img src={phone.picture} alt={phone.name} className="phone__img" />
        <p className="phone__name">{phone.name}</p>
      </div>
    </Link>
  );
};

export default Phones;
