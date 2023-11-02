import { useEffect, useState } from "react";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { useCity } from "../contexts/CityContext";

import styles from "./Form.module.css";
import "react-datepicker/dist/react-datepicker.css";

import Button from "./Button";
import BackButton from "./BackButton";
import Spinner from "./Spinner";
import Message from "./Message";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const GEO_BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [isLoadingForm, setIsLoadingForm] = useState(false);
  const [geoError, setGeoError] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [lat, lng] = useUrlPosition();
  const [emoji, setEmoji] = useState();
  const { createCity, isLoading } = useCity();

  const navigate = useNavigate();

  // console.log(lat, lng);

  // get the city info to the form based on URL query params
  useEffect(
    function () {
      if (!lat && !lng) return;
      async function fetchGeoCity() {
        try {
          setGeoError("");
          setIsLoadingForm(true);
          const res = await fetch(
            `${GEO_BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          if (!data.countryCode)
            throw new Error(
              "There seems not to be a city, please choose somewhere else."
            );
          setCityName(data.city || data.locality);
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (err) {
          setGeoError(err.message);
        } finally {
          setIsLoadingForm(false);
        }
      }
      fetchGeoCity();
    },
    [lat, lng]
  );

  if (!lat && !lng)
    return <Message message={"Start by clicking on the map."} />;

  if (isLoadingForm) return <Spinner />;

  if (geoError) return <Message message={geoError} />;

  async function handleSubmit(e) {
    e.preventDefault();
    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: {
        lat,
        lng,
      },
    };

    await createCity(newCity);
    navigate("/app/cities");
    console.log(newCity);
  }

  return (
    <form
      className={`${styles.form} ${isLoading ? styles.loading : ""}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker
          id="date"
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
