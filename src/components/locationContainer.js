import React, { useEffect, useState } from "react";
import LocationInfo from "./locationInfo";
import ResidentsContainer from "./residentContainer";

export default function LocationContainer1({ inputData }) {
  const [locationInfo, setLocationInfo] = useState(false);
  const [residentsInfo, setResidentsInfo] = useState([]);

  useEffect(() => {
    if (inputData) {
      let promise = getGeneralInfo(inputData);

      promise.then((response) => {
        setLocationInfo(response.data);
        setResidentsInfo(response.data.residents);
      });
    }
  }, [inputData, locationInfo, residentsInfo]);

  return (
    <div className="loc-container">
      {locationInfo && <LocationInfo locationData={locationInfo} />}
      {residentsInfo.map((elementUrl) => (
        <ResidentsContainer
          key={
            elementUrl.split("https://rickandmortyapi.com/api/character/")[1]
          }
          dataUrl={elementUrl}
        />
      ))}
    </div>
  );
}
