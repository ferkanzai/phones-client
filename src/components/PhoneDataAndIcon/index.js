import "./index.scss";

const PhoneDataAndIcon = ({ text, icon }) => {
  return (
    <div className="phoneDataAndIcon" data-testid="phoneDataAndIcon">
      <img src={icon} alt={text} />
      <p>{text}</p>
    </div>
  );
};

export default PhoneDataAndIcon;
