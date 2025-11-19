// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req: Request) {
//   try {
//     const body = (await req.json()) as {
//       name: string;
//       phone: string;
//       email: string;
//       reason: string;
//       message: string;
//     };
//     const { name, email, phone, reason, message } = body;

//     const smtpOptions = {
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     };

//     const transporter = nodemailer.createTransport({
//       ...smtpOptions,
//     });

//     const mailOptions = {
//       from: `${process.env.EMAIL_FROM_PREFIX} Contact <${process.env.EMAIL_USER}>`,
//       to: process.env.RECIPIENT_EMAIL,
//       subject: 'New Contact Form Submission',
//       text: `
//         New Contact Form Submission:
//         Name: ${name}
//         Email: ${email}
//         Phone: ${phone}
//         Reason: ${reason}
//         Message: ${message}
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ message: 'Form Submitted' }, { status: 200 });
//   } catch (error) {
//     console.error('Form error:', error);
//     return NextResponse.json(
//       { error: 'Failed to submit form' },
//       { status: 500 },
//     );
//   }
// }

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      first: string;
      last: string;
      phone: string;
      email: string;
      message: string;
    };

    const { first, last, email, phone, message } = body;

    // Validation
    if (!first || !last || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const smtpOptions = {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    };

    const transporter = nodemailer.createTransport({
      ...smtpOptions,
    });

    const fullName = `${first} ${last}`;

    // Email to business owner
    const mailOptions = {
      from: `${process.env.EMAIL_FROM_PREFIX || 'Spice Catering'} Contact <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || 'spicysquarecatering@gmail.com',
      subject: `New Contact Form Submission - ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #FFF8E7;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #A9861B 0%, #D4AF37 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: bold;
            }
            .header p {
              margin: 10px 0 0 0;
              font-size: 14px;
              opacity: 0.9;
            }
            .content {
              padding: 30px;
            }
            .info-row {
              margin-bottom: 20px;
              padding-bottom: 15px;
              border-bottom: 2px solid #FFF8E7;
            }
            .info-row:last-child {
              border-bottom: none;
            }
            .label {
              font-weight: bold;
              color: #A9861B;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-bottom: 5px;
            }
            .value {
              color: #373737;
              font-size: 16px;
              word-wrap: break-word;
            }
            .message-box {
              background-color: #FFF8E7;
              padding: 20px;
              border-radius: 8px;
              border-left: 4px solid #A9861B;
              margin-top: 10px;
            }
            .footer {
              background-color: #2C1810;
              color: #E5D4B5;
              padding: 20px;
              text-align: center;
              font-size: 12px;
            }
            .footer a {
              color: #D4AF37;
              text-decoration: none;
            }
            .divider {
              height: 3px;
              background: linear-gradient(90deg, #A9861B 0%, #D4AF37 50%, #A9861B 100%);
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🍛 New Contact Message</h1>
              <p>Spice Catering - Authentic Indian Cuisine</p>
            </div>
            
            <div class="content">
              <div class="info-row">
                <div class="label">Customer Name</div>
                <div class="value">${fullName}</div>
              </div>
              
              <div class="info-row">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}" style="color: #A9861B; text-decoration: none;">${email}</a></div>
              </div>
              
              <div class="info-row">
                <div class="label">Phone Number</div>
                <div class="value"><a href="tel:${phone}" style="color: #A9861B; text-decoration: none;">${phone}</a></div>
              </div>
              
              <div class="divider"></div>
              
              <div class="info-row">
                <div class="label">Message</div>
                <div class="message-box">
                  <div class="value">${message}</div>
                </div>
              </div>
            </div>
            
            <div class="footer">
              <p><strong>Spice Catering Services</strong></p>
              <p>Warehouse 130-103, King Key Stores<br>Dubai Investment Park 2</p>
              <p>Phone: <a href="tel:0507440148">050 744 0148</a></p>
              <p>Email: <a href="mailto:spicysquarecatering@gmail.com">spicysquarecatering@gmail.com</a></p>
              <p style="margin-top: 15px; opacity: 0.8;">© ${new Date().getFullYear()} Spice Catering. All Rights Reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Customer Name: ${fullName}
Email: ${email}
Phone: ${phone}

Message:
${message}

---
Spice Catering Services
Warehouse 130-103, King Key Stores
Dubai Investment Park 2
Phone: 050 744 0148
Email: spicysquarecatering@gmail.com
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to customer
    const customerMailOptions = {
      from: `${process.env.EMAIL_FROM_PREFIX || 'Spice Catering'} <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank You for Contacting Spice Catering',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #FFF8E7;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #A9861B 0%, #D4AF37 100%);
              color: white;
              padding: 40px 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 32px;
              font-weight: bold;
            }
            .content {
              padding: 40px 30px;
            }
            .content p {
              color: #373737;
              font-size: 16px;
              margin-bottom: 15px;
            }
            .highlight-box {
              background: linear-gradient(135deg, #FFF8E7 0%, #FFE4B5 100%);
              padding: 25px;
              border-radius: 10px;
              margin: 25px 0;
              border-left: 4px solid #A9861B;
            }
            .cta-button {
              display: inline-block;
              background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
              color: white;
              text-decoration: none;
              padding: 15px 35px;
              border-radius: 25px;
              font-weight: bold;
              margin: 20px 0;
              text-align: center;
            }
            .contact-info {
              background-color: #FFF8E7;
              padding: 20px;
              border-radius: 8px;
              margin-top: 20px;
            }
            .footer {
              background-color: #2C1810;
              color: #E5D4B5;
              padding: 25px;
              text-align: center;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🙏 Thank You!</h1>
            </div>
            
            <div class="content">
              <p>Dear ${fullName},</p>
              
              <p>Thank you for contacting <strong>Spice Catering</strong>! We've received your message and appreciate your interest in our authentic Indian cuisine.</p>
              
              <div class="highlight-box">
                <p style="margin: 0; font-weight: bold; color: #A9861B;">📧 Your Message Has Been Received</p>
                <p style="margin: 10px 0 0 0;">Our team will review your inquiry and get back to you within 24 hours. We're excited to serve you!</p>
              </div>
              
              <p>In the meantime, you can:</p>
              <ul>
                <li>Browse our menu and monthly mess packages</li>
                <li>Order directly via WhatsApp for faster service</li>
                <li>Call us at <strong>050 744 0148</strong></li>
              </ul>
              
              <center>
                <a href="https://wa.me/0507440148" class="cta-button">
                  📱 Order on WhatsApp
                </a>
              </center>
              
              <div class="contact-info">
                <p style="margin: 0 0 10px 0; font-weight: bold; color: #A9861B;">📍 Visit Us:</p>
                <p style="margin: 0;">Warehouse 130-103, King Key Stores<br>
                Dubai Investment Park 2</p>
                <p style="margin: 15px 0 0 0;"><strong>Phone:</strong> 050 744 0148<br>
                <strong>Email:</strong> spicysquarecatering@gmail.com</p>
              </div>
              
              <p style="margin-top: 25px;">We look forward to serving you with our delicious, authentic Indian meals!</p>
              
              <p style="margin-top: 20px;">Warm regards,<br>
              <strong>The Spice Catering Team</strong></p>
            </div>
            
            <div class="footer">
              <p><strong>Spice Catering Services</strong></p>
              <p>Authentic Indian Cuisine • Fresh Daily Preparation • Home Delivery</p>
              <p style="margin-top: 15px; opacity: 0.8;">© ${new Date().getFullYear()} Spice Catering. All Rights Reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Dear ${fullName},

Thank you for contacting Spice Catering! We've received your message and appreciate your interest in our authentic Indian cuisine.

Your message has been received and our team will review your inquiry and get back to you within 24 hours.

In the meantime, you can:
- Browse our menu and monthly mess packages
- Order directly via WhatsApp for faster service: https://wa.me/0507440148
- Call us at 050 744 0148

Visit Us:
Warehouse 130-103, King Key Stores
Dubai Investment Park 2

Phone: 050 744 0148
Email: spicysquarecatering@gmail.com

We look forward to serving you with our delicious, authentic Indian meals!

Warm regards,
The Spice Catering Team

---
Spice Catering Services
Authentic Indian Cuisine • Fresh Daily Preparation • Home Delivery
© ${new Date().getFullYear()} Spice Catering. All Rights Reserved.
      `,
    };

    // Send confirmation email to customer
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        error:
          'Failed to send message. Please try again or contact us directly.',
      },
      { status: 500 }
    );
  }
}
