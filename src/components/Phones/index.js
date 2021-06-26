import { Link } from "react-router-dom";

import phoneGeneric from "../../icons/genericPhone.jpg";

import "./index.scss";

const Phones = ({ phone }) => {
  return (
    <Link to={`/phone/${phone.id}`} key={phone.id}>
      <div className="phone">
        <img
          src={phone.picture || phoneGeneric}
          alt={phone.name}
          className="phone__img"
        />
        <p className="phone__name">{phone.name}</p>
      </div>
    </Link>
  );
};

export default Phones;
