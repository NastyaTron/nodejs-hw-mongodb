import nodemailer from 'nodemailer';

import { SMTP } from '../constans/index.js';
import { env } from './env.js';
import createHttpError from 'http-errors';

const transporter = nodemailer.createTransport({
  host: env(SMTP.SMTP_HOST),
  port: Number(env(SMTP.SMTP_PORT)),
  auth: {
    user: env(SMTP.SMTP_USER),
    pass: env(SMTP.SMTP_PASSWORD),
  },
});

export const sendEmail = async (options) => {
  try {
    return await transporter.sendMail(options);
  } catch (error) {
    console.error('Error sending email:', error.message);

    throw createHttpError(
      500,
      'Failed to send the email, please try again later.',
    );
  }
};
