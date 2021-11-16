import * as nodemailer from 'nodemailer';
import config from '../configs/configs';

class Mail {
  constructor(
    public to?: string,
    public subject?: string,
    public message?: string,
  ) {}

  sendMail() {
    const mailOptions = {
      from: config.user,
      to: this.to,
      subject: this.subject,
      html: this.message,
    };
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: Number(config.port),
      secure: false,
      auth: {
        user: config.user,
        pass: config.password,
      },
      tls: { rejectUnauthorized: false },
    });

    console.log(mailOptions);

    transporter.sendMail(mailOptions, function (error, info) {
      console.log('entrou');
      if (error) {
        console.log('entrou no erro', error);
        return error;
      } else {
        console.log('entrou no else');
        return 'E-mail enviado com sucesso!';
      }
    });
  }
}
export default new Mail();
