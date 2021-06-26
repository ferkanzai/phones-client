import "./index.scss";

const PopUp = ({ closePopUp }) => {
  return (
    <div className="popUp">
      <div className="popUp__title">
        <span className="popUp__title__text">Server error</span>
      </div>
      <div className="popUp__text">
        <span className="popUp__text__bold">
          There was an error trying to add a phone. Please, try again.
        </span>
        <div className="popUp__buttons">
          <button onClick={closePopUp} className="popUp__buttons__no">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
