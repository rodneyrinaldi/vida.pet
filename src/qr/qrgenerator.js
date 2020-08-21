import { v4 as uuidv4 } from 'uuid';
import QRCode from 'qrcode';

export default function createQR() {
  var qrc = '';
  const qrName = uuidv4();
  QRCode.toDataURL(`http//vida.pet/get?${qrName}`, function (err, url) {
    qrc = url;
  })
  return (qrc);
};
