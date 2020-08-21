import React from "react"
import QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';

export default (req, res) => {
  app.get('/qrcode', function (req, res) {
    const qrName = uuidv4();
    QRCode.toDataURL(qrName, { errorCorrectionLevel: 'H' }, function (err, url) {
      console.log(url)
      res.render('home', { data: url })
    });
  });
}
