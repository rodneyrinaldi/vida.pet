import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import qrcode from 'qrcode';

export default function QRCode() {
  const [qrc, setQrc] = useState('');

  useEffect(() => {
    var qrc = '';
    const qrName = uuidv4();
    qrcode.toDataURL(`http//vida.pet/get?${qrName}`, function (err, url) {
      qrc = url;
    })
    setQrc(qrc);
  }, []);

  function handleQR(e) {
    e.preventDefault();
    document.getElementById('QrID').src = qrc;
  }

  return (
    <>
      <img id="QrID" style={{ width: '200px', height: '200px' }}></img>
      <button onClick={handleQR}>ok</button>
    </>
  )
}


