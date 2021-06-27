import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import PopUp from "../../components/PopUp";

import apiUrl from "../../const/apiUrl";

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
import battery from "../../icons/battery.svg";
import addImg from "../../icons/addImg.svg";

import "./index.scss";

const AddPhone = () => {
  const [addError, setAddError] = useState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const handleFormSubmit = (formValues) => {
    const values = Object.fromEntries(
      new Map(Object.entries(formValues).filter((entry) => entry[1]))
    );

    fetch(`${apiUrl}/phones/add`, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res.json().then((res) => history.push(`/phone/${res.data[0].id}`))
      )
      .catch(() => {
        setAddError(true);
      });
  };

  const handlePopUp = () => {
    setAddError(false);
  };

  return (
    <div className="addPhone">
      <h2 className="addPhone__title">Add new phone</h2>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="addPhone__form"
      >
        <div className="addPhone__form__input">
          <img src={model} alt="" />
          <input
            type="text"
            placeholder="Manufacturer"
            {...register("manufacturer", { required: true })}
            name="manufacturer"
            id="manufacturer"
            className={
              errors.manufacturer && errors.manufacturer.type === "required"
                ? "addPhone__form__input__error"
                : "addPhone__form__input__text"
            }
          />
        </div>
        <div className="addPhone__form__input">
          <img src={model} alt="" />
          <input
            type="text"
            placeholder="Model"
            {...register("name", { required: true })}
            name="name"
            id="name"
            className={
              errors.name && errors.name.type === "required"
                ? "addPhone__form__input__error"
                : "addPhone__form__input__text"
            }
          />
        </div>
        <div className="addPhone__form__input">
          <img src={soc} alt="" />
          <input
            type="text"
            placeholder="SOC"
            {...register("soc")}
            name="soc"
            id="soc"
            className="addPhone__form__input__text"
          />
        </div>
        <div className="addPhone__form__input">
          <img src={cpu} alt="" />
          <input
            type="text"
            placeholder="CPU"
            {...register("cpu")}
            name="cpu"
            id="cpu"
            className="addPhone__form__input__text"
          />
        </div>
        <div className="addPhone__form__input">
          <img src={ram} alt="" />
          <input
            type="text"
            placeholder="RAM"
            {...register("ram")}
            name="ram"
            id="ram"
            className="addPhone__form__input__text"
          />
        </div>
        <div className="addPhone__form__input">
          <img src={gpu} alt="" />
          <input
            type="text"
            placeholder="GPU"
            {...register("gpu")}
            name="gpu"
            id="gpu"
            className="addPhone__form__input__text"
          />
        </div>
        <div className="addPhone__form__input">
          <img src={screen} alt="" />
          <input
            type="text"
            placeholder="Display size"
            {...register("display_size")}
            name="display_size"
            id="display_size"
            className="addPhone__form__input__text"
          />
        </div>
        <div className="addPhone__form__input">
          <img src={screen} alt="" />
          <input
            type="text"
            placeholder="Display type"
            {...register("display_type")}
            name="display_type"
            id="display_type"
            className="addPhone__form__input__text"
          />
        </div>
        <div className="addPhone__form__input">
          <img src={os} alt="" />
          <input
            type="text"
            placeholder="Operating system"
            {...register("os")}
            name="os"
            id="os"
            className="addPhone__form__input__text"
          />
        </div>
        <div className="addPhone__form__input">
          <img src={storage} alt="" />
          <input
            type="text"
            placeholder="Storage"
            {...register("storage")}
            name="storage"
            id="storage"
            className="addPhone__form__input__text"
          />
        </div>
        <div className="addPhone__form__input">
          <img src={usb} alt="" />
          <input
            type="text"
            placeholder="Connection type"
            {...register("usb_type")}
            name="usb_type"
            id="usb_type"
            className="addPhone__form__input__text"
          />
        </div>
        <div className="addPhone__form__input">
          <img src={weight} alt="" />
          <input
            type="text"
            placeholder="Weight"
            {...register("weight")}
            name="weight"
            id="weight"
            className="addPhone__form__input__text"
          />
        </div>
        <div className="addPhone__form__input">
          <img src={dimensions} alt="" />
          <input
            type="text"
            placeholder="Dimensions"
            {...register("dimensions")}
            name="dimensions"
            id="dimensions"
            className="addPhone__form__input__text"
          />
        </div>
        <div className="addPhone__form__input">
          <img src={camera} alt="" />
          <input
            type="text"
            placeholder="Camera(s)"
            {...register("rear_camera")}
            name="rear_camera"
            id="rear_camera"
            className="addPhone__form__input__text"
          />
        </div>
        <div className="addPhone__form__input">
          <img src={battery} alt="" />
          <input
            type="text"
            placeholder="Battery size (mAh)"
            {...register("battery_size")}
            name="battery_size"
            id="battery_size"
            className="addPhone__form__input__text"
          />
        </div>
        <div className="addPhone__form__input">
          <img src={addImg} alt="" />
          <input
            type="text"
            placeholder="Image URL"
            {...register("picture")}
            name="picture"
            id="picture"
            className="addPhone__form__input__text"
          />
        </div>
        <input type="submit" value="Add" className="addPhone__form__button" />
      </form>
      {addError && (
        <PopUp
          closePopUp={handlePopUp}
          title="Server error"
          info="There was an error trying to add a phone. Please, try again."
          primaryButton="Continue"
        />
      )}
    </div>
  );
};

export default AddPhone;
