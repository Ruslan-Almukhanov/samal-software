import { memo, useState } from "react";
import GoogleMapReact from "google-map-react";
import { useState as useGlobalState } from "@hookstate/core";
import store from "store";
import Modal from "react-modal";
import { Locomotive } from "types";
import styles from "./Map.module.scss";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    padding: "40px 20px 20px",
  },
};
const AnyReactComponent = ({ name }: any) => (
  <div className={styles.marker}>
    <div>{name}</div>
    <img src="/train.png" alt="locomotive" />
  </div>
);
const defaultProps = {
  center: {
    lat: 48.0196,
    lng: 66.9237,
  },
  zoom: 10,
};
const Map = () => {
  const [selectedLocomotive, setSelectedLocomotive] =
    useState<Locomotive | null>(null);
  const { locomotives } = useGlobalState(store).get();
  console.log(locomotives);

  const onChildClick = (e: any, s: any) => {
    console.log(e, s);
    setSelectedLocomotive(s);
  };

  const closeModal = () => {
    setSelectedLocomotive(null);
  };
  return (
    <div className={styles.map}>
      <h4>Количество локомотивов на карте: {locomotives.length}</h4>
      <div className={styles.map__wrapper}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyB_JS4WTUTRggA-9yIpVgYKB62-mwviATU",
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onChildClick={onChildClick}
        >
          {locomotives.map(({ name, coordinates, series, amount }, i) => (
            <AnyReactComponent
              key={i}
              lat={coordinates.lat}
              lng={coordinates.lng}
              name={name}
              series={series}
              amount={amount}
            />
          ))}
        </GoogleMapReact>
      </div>
      {selectedLocomotive && (
        <Modal
          isOpen={!!selectedLocomotive}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <span className={styles.close} onClick={closeModal}>
            X
          </span>
          <div>Наименование: {selectedLocomotive.name}</div>
          <div>Серия: {selectedLocomotive.series}</div>
          <div>Количество секции: {selectedLocomotive.amount}</div>
        </Modal>
      )}
    </div>
  );
};

export default memo(Map);
