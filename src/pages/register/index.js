import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import QRCode from 'qrcode';

export default function Register() {
  const [qrc, setQrc] = useState('');

  useEffect(() => {
    var qrc = '';
    const qrName = uuidv4();
    QRCode.toDataURL(`http//vida.pet/get?${qrName}`, function (err, url) {
      qrc = url;
    })
    setQrc(qrc);
  }, [qrc]);

  // useEffect(() => {
  //   const qrURL = createQR();
  //   setQrc(qrURL);
  // }, []);

  function handleQR(e) {
    e.preventDefault();
    document.getElementById('QrID').src = qrc;
  }

  return (
    <section>
      <div id="qrcode" style={{ color: '#bbb' }}>
        <img id="QrID" style={{ width: '200px', height: '200px' }}></img>
        <button onClick={handleQR}>ok</button>
      </div>
    </section>
  )
}


