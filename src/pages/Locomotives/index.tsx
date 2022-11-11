import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState as useGlobalState } from "@hookstate/core";
import store from "store";
import styles from "./Locomotives.module.scss";
import MapPicker from "react-google-map-picker";
import List from "components/List";

const defaultLocation = {
  lat: 48.0196,
  lng: 66.9237,
};
const DefaultZoom = 5;

const Locomotives = () => {
  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  const globalState = useGlobalState(store);
  const { selectedLocomotive } = globalState.get();
  const { register, getValues, reset, setValue } = useForm();

  useEffect(() => {
    setValue("coordinates", `${location.lat} - ${location.lng}`);
  }, [location]);

  useEffect(() => {
    if (selectedLocomotive) {
      const { name, series, amount, coordinates } = selectedLocomotive;
      setValue("name", name);
      setValue("series", series);
      setValue("amount", amount);
      setValue("amount", amount);
      setValue("coordinates", `${coordinates.lat} - ${coordinates.lng}`);
    }
  }, [selectedLocomotive]);

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, series, amount } = getValues();
    const newData = {
      name,
      series,
      amount,
      coordinates: location,
      id: selectedLocomotive ? selectedLocomotive.id : getRandomId(),
    };

    globalState.set((prev) => {
      const { locomotives } = prev;
      if (selectedLocomotive) {
        const filtered = locomotives.filter(
          (locomotive) => locomotive.id !== selectedLocomotive.id
        );
        return {
          ...prev,
          locomotives: [...filtered, newData],
        };
      }

      return {
        ...prev,
        locomotives: [...prev.locomotives, newData],
      };
    });

    reset();
  };

  const handleChangeLocation = (lat: number, lng: number) => {
    setLocation({ lat: lat, lng: lng });
  };

  const handleChangeZoom = (newZoom: number) => {
    setZoom(newZoom);
  };

  const getRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <div className={styles.locomotives}>
      <form onSubmit={(e) => onSubmitForm(e)}>
        <h5>Добавить локоматив</h5>
        <input
          {...register("name")}
          required
          placeholder="Название локомотива"
        />
        <input {...register("series")} required placeholder="Серия" />
        <input
          {...register("amount")}
          type="number"
          required
          placeholder="Количество секции"
        />
        <input
          {...register("coordinates")}
          disabled
          required
          placeholder="Координаты"
        />
        <MapPicker
          defaultLocation={defaultLocation}
          zoom={zoom}
          style={{ height: "300px" }}
          onChangeLocation={handleChangeLocation}
          onChangeZoom={handleChangeZoom}
          apiKey="AIzaSyB_JS4WTUTRggA-9yIpVgYKB62-mwviATU"
        />
        <button> Сохранить</button>
      </form>
      <List />
    </div>
  );
};

export default Locomotives;
