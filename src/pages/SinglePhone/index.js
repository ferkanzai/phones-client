import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PhoneDataAndIcon from "../../components/PhoneDataAndIcon";

import cpu from "../../icons/cpu.svg";
import ram from "../../icons/ram.svg";
import gpu from "../../icons/gpu.svg";
import screen from "../../icons/screen.svg";
import storage from "../../icons/storage.svg";
import os from "../../icons/os.png";
import usb from "../../icons/usb.svg";
import weight from "../../icons/weight.svg";
import dimensions from "../../icons/dimensions.svg";
import camera from "../../icons/camera.svg";
import model from "../../icons/model.svg";
import soc from "../../icons/soc.svg";

import "./index.scss";

const SinglePhone = () => {
  const [phone, setPhone] = useState(null);
  const { phoneId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/api/phones/${phoneId}`).then((res) =>
      res.json().then((res) => setPhone(res.data[0]))
    );
  }, [phoneId]);

  return (
    <>
      {phone ? (
        <>
          <div className="singlePhone">
            <img
              src={phone.picture}
              alt={phone.name}
              className="singlePhone__img"
            />
            <div className="singlePhone__data">
              <PhoneDataAndIcon
                text={phone.name || "Information not available"}
                icon={model}
              />
              <PhoneDataAndIcon
                text={phone.soc || "Information not available"}
                icon={soc}
              />
              <PhoneDataAndIcon
                text={phone.cpu || "Information not available"}
                icon={cpu}
              />
              <PhoneDataAndIcon
                text={phone.ram || "Information not available"}
                icon={ram}
              />
              <PhoneDataAndIcon
                text={phone.gpu || "Information not available"}
                icon={gpu}
              />
              <PhoneDataAndIcon
                text={`${
                  phone.display_size + '"' || "Information not available"
                } - ${phone.display_type || "Information not available"}`}
                icon={screen}
              />
              <PhoneDataAndIcon
                text={phone.os || "Information not available"}
                icon={os}
              />
              <PhoneDataAndIcon
                text={phone.storage || "Information not available"}
                icon={storage}
              />
              <PhoneDataAndIcon
                text={phone.usb_type || "Information not available"}
                icon={usb}
              />
              <PhoneDataAndIcon
                text={phone.weight || "Information not available"}
                icon={weight}
              />
              <PhoneDataAndIcon
                text={phone.dimensions || "Information not available"}
                icon={dimensions}
              />
              <PhoneDataAndIcon
                text={phone.rear_camera || "Information not available"}
                icon={camera}
              />
            </div>
          </div>
        </>
      ) : (
        "loading"
      )}
    </>
  );
};

export default SinglePhone;
