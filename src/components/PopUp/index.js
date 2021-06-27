import "./index.scss";

const PopUp = ({
  title,
  info,
  closePopUp,
  primaryButton,
  secondaryButton = null,
  secondaryButtonAction = null,
}) => {
  return (
    <div className="popUp">
      <div className="popUp__title">
        <span className="popUp__title__text">{title}</span>
      </div>
      <div className="popUp__text">
        <span className="popUp__text__bold">{info}</span>
        <div className="popUp__buttons">
          <button onClick={closePopUp} className="popUp__buttons__primary">
            {primaryButton}
          </button>
          {secondaryButton && (
            <button
              onClick={secondaryButtonAction}
              className="popUp__buttons__secondary"
            >
              {secondaryButton}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
