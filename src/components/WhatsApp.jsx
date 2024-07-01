import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function WhatsApp() {
  const handleWhatsappClick = () => {
    const whatsappLink = `https://wa.me/+598000000`;

    window.location.href = whatsappLink;
  };

  return (
    <FontAwesomeIcon
      icon={faWhatsapp}
      style={{ color: "#F5EDED" }}
      onClick={handleWhatsappClick}
      className="whatsapp-icon"
    />
  );
}

export default WhatsApp;
