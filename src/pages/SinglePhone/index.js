import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";

import PopUp from "../../components/PopUp";
import SinglePhoneData from "../../components/SinglePhoneData";

import apiUrl from "../../const/apiUrl";

import "./index.scss";

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
import phoneGeneric from "../../icons/genericPhone.jpg";

const SinglePhone = () => {
  const [phone, setPhone] = useState(null);
  const { phoneId } = useParams();
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [errorPopUp, setErrorPopUp] = useState(false);
  const [errorEditPopUp, setErrorEditPopUp] = useState(false);
  const [editable, setEditable] = useState(false);
  const history = useHistory();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    fetch(`${apiUrl}/phones/${phoneId}`).then((res) =>
      res.json().then((res) => setPhone(res.data[0]))
    );
  }, [phoneId, editable]);

  const handleDeletePopUp = () => {
    setDeletePopUp(!deletePopUp);
  };

  const handleDelete = () => {
    fetch(`${apiUrl}/phones/delete/${phoneId}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res
        .json()
        .then((res) => {
          if (!res.success) {
            setErrorPopUp(true);
            setDeletePopUp(false);
          } else {
            history.push("/");
          }
        })
        .catch(() => {
          console.log("error");
          setErrorPopUp(true);
          setDeletePopUp(false);
        })
    );
  };

  const handleErrorPopUp = () => {
    setErrorPopUp(false);
  };

  const handleErrorEditPopUp = () => {
    setErrorEditPopUp(false);
  };

  const handleEditable = () => {
    setEditable(!editable);
    if (editable) reset();
  };

  const handleFormSubmit = (formValues) => {
    const values = Object.fromEntries(
      new Map(Object.entries(formValues).filter((entry) => entry[1]))
    );

    fetch(`${apiUrl}/phones/edit/${phoneId}`, {
      method: "PATCH",
      mode: "cors",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res
        .json()
        .then((res) => {
          if (!res.success) {
            setErrorEditPopUp(true);
          } else {
            setEditable(false);
            reset();
          }
        })
        .catch(() => {
          console.log("error");
          setErrorEditPopUp(true);
        })
    );
  };

  return (
    <>
      {phone ? (
        <>
          <div className="singlePhone">
            <div className="singlePhone__phone">
              <img
                src={phone?.picture || phoneGeneric}
                alt={phone?.name || "generic phone img"}
                className="singlePhone__phone__img"
                data-testid="singlePhone-img"
              />
              {!editable ? (
                <SinglePhoneData phone={phone} />
              ) : (
                <form
                  // onSubmit={handleSubmit(handleFormSubmit)}
                  className="addPhone__form"
                >
                  <div className="addPhone__form__input">
                    <img src={model} alt="" />
                    <p className="addPhone__form__input__text">
                      {phone.manufacturer}
                    </p>
                  </div>
                  <div className="addPhone__form__input">
                    <img src={model} alt="" />
                    <input
                      {...register("name", { required: true })}
                      className={
                        errors.name && errors.name.type === "required"
                          ? "addPhone__form__input__error"
                          : "addPhone__form__input__text"
                      }
                      id="name"
                      name="name"
                      placeholder={phone.name}
                      type="text"
                    />
                  </div>
                  <div className="addPhone__form__input">
                    <img src={soc} alt="" />
                    <input
                      {...register("soc", { required: true })}
                      className={
                        errors.soc && errors.soc.type === "required"
                          ? "addPhone__form__input__error"
                          : "addPhone__form__input__text"
                      }
                      id="soc"
                      name="soc"
                      placeholder={phone.soc}
                      type="text"
                    />
                  </div>
                  <div className="addPhone__form__input">
                    <img src={cpu} alt="" />
                    <input
                      {...register("cpu", { required: true })}
                      className={
                        errors.cpu && errors.cpu.type === "required"
                          ? "addPhone__form__input__error"
                          : "addPhone__form__input__text"
                      }
                      id="cpu"
                      name="cpu"
                      placeholder={phone.cpu}
                      type="text"
                    />
                  </div>
                  <div className="addPhone__form__input">
                    <img src={ram} alt="" />
                    <input
                      {...register("ram", { required: true })}
                      className={
                        errors.ram && errors.ram.type === "required"
                          ? "addPhone__form__input__error"
                          : "addPhone__form__input__text"
                      }
                      id="ram"
                      name="ram"
                      placeholder={phone.ram}
                      type="text"
                    />
                  </div>
                  <div className="addPhone__form__input">
                    <img src={gpu} alt="" />
                    <input
                      {...register("gpu", { required: true })}
                      className={
                        errors.gpu && errors.gpu.type === "required"
                          ? "addPhone__form__input__error"
                          : "addPhone__form__input__text"
                      }
                      id="gpu"
                      name="gpu"
                      placeholder={phone.gpu}
                      type="text"
                    />
                  </div>
                  <div className="addPhone__form__input">
                    <img src={screen} alt="" />
                    <input
                      {...register("display_size", { required: true })}
                      className={
                        errors.display_size &&
                        errors.display_size.type === "required"
                          ? "addPhone__form__input__error"
                          : "addPhone__form__input__text"
                      }
                      id="display_size"
                      name="display_size"
                      placeholder={phone.display_size + '"'}
                      type="text"
                    />
                  </div>
                  <div className="addPhone__form__input">
                    <img src={screen} alt="" />
                    <input
                      {...register("display_type", { required: true })}
                      className={
                        errors.display_type &&
                        errors.display_type.type === "required"
                          ? "addPhone__form__input__error"
                          : "addPhone__form__input__text"
                      }
                      id="display_type"
                      name="display_type"
                      placeholder={phone.display_type}
                      type="text"
                    />
                  </div>
                  <div className="addPhone__form__input">
                    <img src={os} alt="" />
                    <input
                      {...register("os", { required: true })}
                      className={
                        errors.os && errors.os.type === "required"
                          ? "addPhone__form__input__error"
                          : "addPhone__form__input__text"
                      }
                      id="os"
                      name="os"
                      placeholder={phone.os}
                      type="text"
                    />
                  </div>
                  <div className="addPhone__form__input">
                    <img src={storage} alt="" />
                    <input
                      {...register("storage", { required: true })}
                      className={
                        errors.storage && errors.storage.type === "required"
                          ? "addPhone__form__input__error"
                          : "addPhone__form__input__text"
                      }
                      id="storage"
                      name="storage"
                      placeholder={phone.storage}
                      type="text"
                    />
                  </div>
                  <div className="addPhone__form__input">
                    <img src={usb} alt="" />
                    <input
                      {...register("usb_type", { required: true })}
                      className={
                        errors.usb_type && errors.usb_type.type === "required"
                          ? "addPhone__form__input__error"
                          : "addPhone__form__input__text"
                      }
                      id="usb_type"
                      name="usb_type"
                      placeholder={phone.usb_type}
                      type="text"
                    />
                  </div>
                  <div className="addPhone__form__input">
                    <img src={weight} alt="" />
                    <input
                      {...register("weight", { required: true })}
                      className={
                        errors.weight && errors.weight.type === "required"
                          ? "addPhone__form__input__error"
                          : "addPhone__form__input__text"
                      }
                      id="weight"
                      name="weight"
                      placeholder={phone.weight}
                      type="text"
                    />
                  </div>
                  <div className="addPhone__form__input">
                    <img src={dimensions} alt="" />
                    <input
                      {...register("dimensions", { required: true })}
                      className={
                        errors.dimensions &&
                        errors.dimensions.type === "required"
                          ? "addPhone__form__input__error"
                          : "addPhone__form__input__text"
                      }
                      id="dimensions"
                      name="dimensions"
                      placeholder={phone.dimensions}
                      type="text"
                    />
                  </div>
                  <div className="addPhone__form__input">
                    <img src={camera} alt="" />
                    <input
                      {...register("rear_camera", { required: true })}
                      className={
                        errors.rear_camera &&
                        errors.rear_camera.type === "required"
                          ? "addPhone__form__input__error"
                          : "addPhone__form__input__text"
                      }
                      id="rear_camera"
                      name="rear_camera"
                      placeholder={phone.rear_camera}
                      type="text"
                    />
                  </div>
                  <div className="addPhone__form__input">
                    <img src={battery} alt="" />
                    <input
                      {...register("battery_size", { required: true })}
                      className={
                        errors.battery_size &&
                        errors.battery_size.type === "required"
                          ? "addPhone__form__input__error"
                          : "addPhone__form__input__text"
                      }
                      id="battery_size"
                      name="battery_size"
                      placeholder="mAh"
                      type="text"
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
                      className={
                        errors.picture
                          ? "addPhone__form__input__error"
                          : "addPhone__form__input__text"
                      }
                    />
                  </div>
                </form>
              )}
            </div>
            <div className="singlePhone__buttons">
              {!editable ? (
                <button onClick={handleEditable}>Edit</button>
              ) : (
                <button onClick={handleSubmit(handleFormSubmit)}>
                  Confirm
                </button>
              )}
              {!editable ? (
                <button onClick={handleDeletePopUp}>Delete</button>
              ) : (
                <button onClick={handleEditable}>Cancel</button>
              )}
            </div>
          </div>
          {deletePopUp && (
            <PopUp
              closePopUp={handleDeletePopUp}
              title="Delete item"
              info="Are you sure you want to delete this?"
              secondaryButton="Delete"
              primaryButton="No"
              secondaryButtonAction={handleDelete}
            />
          )}
          {errorPopUp && (
            <PopUp
              closePopUp={handleErrorPopUp}
              title="Server error"
              info="There was an error trying to delete this item. Please, try again."
              primaryButton="Continue"
            />
          )}
          {errorEditPopUp && (
            <PopUp
              closePopUp={handleErrorEditPopUp}
              title="Server error"
              info="There was an error trying to modify this item. Please, try again."
              primaryButton="Continue"
            />
          )}
        </>
      ) : (
        <h3
          style={{ padding: 60, backgroundColor: "white", textAlign: "center" }}
        >
          No phone found with this id
        </h3>
      )}
    </>
  );
};

export default SinglePhone;
