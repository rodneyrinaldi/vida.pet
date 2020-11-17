import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import qrcode from 'qrcode';

import styles from './index.module.css'

export default function QRCode() {

  useEffect(() => {
    const qrName = uuidv4();
    qrcode.toDataURL(`http//vida.pet/get?${qrName}`, function (err, url) {
      document.getElementById('QrID').src = url;
    })
  }, []);

  return (
    <div className={styles.imageWrapper}>
      <div className={styles.divStyle}>
        <text>v i d a . p e t</text>
        <img id="QrID"></img>
        <text>scoobydoo</text>
      </div>
    </div>
  )
}


