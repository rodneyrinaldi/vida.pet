import React, { useState, useEffect } from "react";
import CreateQR, { buildQrCodeUrl } from '../../qr/qrgenerator';

function Qrcode({ host }) {
  const [qrcode, setQrcode] = React.useState(null)

  useEffect(() => {
    const qrURL = CreateQR();
    console.log(qrURL);
    setQrcode(qrURL);
    console.log(qrcode)
  }, [])

  return (
    <div>
      <p>vida.pet</p>
      {}
    </div >
  );
};

export default Qrcode