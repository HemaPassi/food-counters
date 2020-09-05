import React, { useState, useEffect } from "react";
import MapBuilder from "../MapBuilder/MapBuilder";
import FormBuilder from "../FormBuilder/FormBuilder";
import TruckList from "../TruckList/TruckList";
import "./Layout.scss";

const Layout = ({
  data,
  type,
  isForm,
  onChangeHandler,
  onSubmitHandler,
  onCloseHandler,
  onFoodTruckClickHandler,
  clickOption,
}) => {
  const [selectdData, setSeletectedData] = useState({});
  const [isEditFormShow, setEditFormShown] = useState(false);
  const [activeKey, setActiveKey] = useState("");
  const [isError, setIsError] = useState(false);
  const [dataBase, setTrucksData] = useState([]);

  useEffect(() => {
    if (
      clickOption === "add" ||
      clickOption == "close" ||
      clickOption == "delete"
    )
      setActiveKey(clickOption);
    else if (type && type.key) {
      setActiveKey(type.key);
    } else setActiveKey(clickOption);

    if (
      activeKey === "edit" ||
      (type && type.key === "edit") ||
      (data && data.length === 0)
    ) {
      setEditFormShown(false);
      setIsError(true);
    }
  }, [clickOption, type && type.key]);

  const onClickHanderTruckList = (data) => {
    setEditFormShown(true);
    setSeletectedData({ ...data });
  };

  return (
    <div className={`layout`}>
      {isError &&
        !isForm &&
        (activeKey === "search" || type.key === "search") && (
          <div className="error">No record found</div>
        )}
      {data && data.length > 0 && type.key === "search" && !isEditFormShow ? (
        <div className={`left-panel show`}>
          <TruckList
            data={data}
            onClickHanderTruckList={onClickHanderTruckList}
            onFoodTruckClickHandler={onFoodTruckClickHandler}
          />
        </div>
      ) : (
        <div className={`left-panel ${isForm ? "show" : "hide"}`}>
          <div>Add Details</div>
          <FormBuilder
            onSubmitHandler={onSubmitHandler}
            onCloseHandler={onCloseHandler}
          />
        </div>
      )}

      {data && type.key === "search" && isEditFormShow && (
        <div className={`left-panel show`}>
          <div>Edit Form</div>
          <FormBuilder
            data={selectdData}
            isEdit={isEditFormShow}
            onSubmitHandler={onSubmitHandler}
            onCloseHandler={onCloseHandler}
          />
        </div>
      )}
      <div className="right-panel">
        <MapBuilder
          className="right-panel"
          data={data}
          onChangeHandler={onChangeHandler}
          onFoodTruckClickHandler={onFoodTruckClickHandler}
        ></MapBuilder>
      </div>
    </div>
  );
};

export default Layout;
