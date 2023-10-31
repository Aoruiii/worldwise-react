import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParam, setSearchParam] = useSearchParams();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  const navigate = useNavigate();

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <p>{lat}</p>
      <p>{lng}</p>
      <button onClick={() => setSearchParam({ lat: 20, lng: 50 })}>
        Change position
      </button>
    </div>
  );
}

export default Map;
