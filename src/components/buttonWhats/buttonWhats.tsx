import React from "react";
import ReactWhatsappButton from "react-whatsapp-button";

function buttonWhats() {
  return (
    <div className="App">
      <ReactWhatsappButton
        countryCode="55"
        phoneNumber="11963665212"
      />
    </div>
  )
}

export default buttonWhats;