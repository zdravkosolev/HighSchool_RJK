import React from "react";
import styles from "./MapSection.module.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// AIzaSyCbrr14BG210PWbRPfmYmpte6SrdLXLsnw
const MapSection = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.4539597137723!2d21.435249275832295!3d41.99053205836769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415b7e0d48817%3A0x85ad99deccd03cdb!2zSGlnaCBzY2hvb2wg4oCeUmFkZSBKb3bEjWV2c2tpIC0gS29yxI1hZ2lu4oCc!5e0!3m2!1sen!2smk!4v1691928535934!5m2!1sen!2smk"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapSection;
