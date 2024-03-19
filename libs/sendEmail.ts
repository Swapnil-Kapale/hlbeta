const nodemailer = require("nodemailer");

async function sendEmail(to, text, role, name)
{
// export async function POST(request: NextRequest) {
    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "gmail",
        secure: true, // enforcing secure transfer
        auth: {
        user: "hirelink06@gmail.com",
        pass: "nfrp fspj hrxx jdof",
        },
    });
    if(role=="candidate")
        {
            const candidateHtml = `
            <!DOCTYPE html>
            <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
            <head>
            <title></title>
            <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!--><!--<![endif]-->
            <style>
                    * {
                        box-sizing: border-box;
                    }
                    body {
                        margin: 0;
                        padding: 0;
                    }
                    a[x-apple-data-detectors] {
                        color: inherit !important;
                        text-decoration: inherit !important;
                    }
                    #MessageViewBody a {
                        color: inherit;
                        text-decoration: none;
                    }
                    p {
                        line-height: inherit
                    }
                    .desktop_hide,
                    .desktop_hide table {
                        mso-hide: all;
                        display: none;
                        max-height: 0px;
                        overflow: hidden;
                    }
                    .image_block img+div {
                        display: none;
                    }
                    @media (max-width:620px) {
                        .desktop_hide table.icons-inner {
                            display: inline-block !important;
                        }
                        .icons-inner {
                            text-align: center;
                        }
                        .icons-inner td {
                            margin: 0 auto;
                        }
                        .mobile_hide {
                            display: none;
                        }
                        .row-content {
                            width: 100% !important;
                        }
                        .stack .column {
                            width: 100%;
                            display: block;
                        }
                        .mobile_hide {
                            min-height: 0;
                            max-height: 0;
                            max-width: 0;
                            overflow: hidden;
                            font-size: 0px;
                        }
                        .desktop_hide,
                        .desktop_hide table {
                            display: table !important;
                            max-height: none !important;
                        }
                    }
                </style>
            </head>
            <body style="background-color: #111111; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
            <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #111111; background-image: url('images/45589a42-2982-408e-84ae-bb6d46a38fad.png'); background-position: top center; background-size: auto; background-repeat: no-repeat;" width="100%">
            <tbody>
            <tr>
            <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tbody>
            <tr>
            <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px; margin: 0 auto;" width="600">
            <tbody>
            <tr>
            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
            <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tr>
            <td class="pad" style="width:100%;">
            <div align="center" class="alignment" style="line-height:10px">
            <div style="max-width: 600px;"><img src="https://i.postimg.cc/nz9zLjGN/wave.png" style="display: block; height: auto; border: 0; width: 100%;" width="600"/></div>
            </div>
            </td>
            </tr>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tr>
            <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
            <div align="center" class="alignment" style="line-height:10px">
            <div style="max-width: 180px;"><img src="https://i.postimg.cc/DyJWzNB8/dark-logo.png" style="display: block; height: auto; border: 0; width: 100%;" width="180"/></div>
            </div>
            </td>
            </tr>
            </table>
            <table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
            <tr>
            <td class="pad">
            <div style="color:#ffffff;direction:ltr;font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
            <p style="margin: 0; margin-bottom: 16px;">Dear ${name}</p>
            <p style="margin: 0;">At HireLink, we're revolutionizing recruitment by providing personalized job recommendations, a seamless application process, real-time application tracking, and dedicated support. Our platform matches you with opportunities that align with your skills and aspirations, simplifies the application process with resume upload, keeps you informed every step of the way, and offers assistance through our AI-powered chatbot. Say hello to personalized career opportunities with HireLink!<br/><br/>Best regards,<br/><br/><br/>hirelink © 2024 Team Dracarys.</p>
            </div>
            </td>
            </tr>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" class="image_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tr>
            <td class="pad" style="width:100%;">
            <div align="left" class="alignment" style="line-height:10px">
            <div style="max-width: 224px;"><img src="https://see.fontimg.com/api/renderfont4/W7jn/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SGxpbms/halimun.png" style="display: block; height: auto; border: 0; width: 100%;" width="224"/></div>
            </div>
            </td>
            </tr>
            </table>
            <div class="spacer_block block-5" style="height:60px;line-height:60px;font-size:1px;"></div>
            <div class="spacer_block block-6" style="height:60px;line-height:60px;font-size:1px;"></div>
            <div class="spacer_block block-7" style="height:60px;line-height:60px;font-size:1px;"></div>
            <div class="spacer_block block-8" style="height:60px;line-height:60px;font-size:1px;"></div>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
            <tbody>
            <tr>
            <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px; margin: 0 auto;" width="600">
            <tbody>
            <tr>
            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
            <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tr>
            <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
            <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tr>
            <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
            <!--[if !vml]><!-->
            <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;"><!--<![endif]-->
            <tr>
            </tr>
            </table>
            </td>
            </tr>
            </table>
            </td>
            </tr>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table><!-- End -->
            </body>
            </html>`;
            let mailOptions = {
                from: "hirelink06@gmail.com",
                to: to,
                subject: "Elevate Your Career Journey with Us!",
                text: text,
                html: candidateHtml,
            };
            let info = await transporter.sendMail(mailOptions);    
            console.log("Message sent to candidate: %s", info.messageId);
        }
    else if(role=="recruiter")
        {
            const recruiterHtml = `
            <!DOCTYPE html>
            <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
            <head>
            <title></title>
            <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!--><!--<![endif]-->
            <style>
                    * {
                        box-sizing: border-box;
                    }
                    body {
                        margin: 0;
                        padding: 0;
                    }
                    a[x-apple-data-detectors] {
                        color: inherit !important;
                        text-decoration: inherit !important;
                    }
                    #MessageViewBody a {
                        color: inherit;
                        text-decoration: none;
                    }
                    p {
                        line-height: inherit
                    }
                    .desktop_hide,
                    .desktop_hide table {
                        mso-hide: all;
                        display: none;
                        max-height: 0px;
                        overflow: hidden;
                    }
                    .image_block img+div {
                        display: none;
                    }
                    @media (max-width:620px) {
                        .desktop_hide table.icons-inner {
                            display: inline-block !important;
                        }
                        .icons-inner {
                            text-align: center;
                        }
                        .icons-inner td {
                            margin: 0 auto;
                        }
                        .mobile_hide {
                            display: none;
                        }
                        .row-content {
                            width: 100% !important;
                        }
                        .stack .column {
                            width: 100%;
                            display: block;
                        }
                        .mobile_hide {
                            min-height: 0;
                            max-height: 0;
                            max-width: 0;
                            overflow: hidden;
                            font-size: 0px;
                        }
                        .desktop_hide,
                        .desktop_hide table {
                            display: table !important;
                            max-height: none !important;
                        }
                    }
                </style>
            </head>
            <body style="background-color: #111111; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
            <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #111111; background-image: url('images/45589a42-2982-408e-84ae-bb6d46a38fad.png'); background-position: top center; background-size: auto; background-repeat: no-repeat;" width="100%">
            <tbody>
            <tr>
            <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tbody>
            <tr>
            <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px; margin: 0 auto;" width="600">
            <tbody>
            <tr>
            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
            <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tr>
            <td class="pad" style="width:100%;">
            <div align="center" class="alignment" style="line-height:10px">
            <div style="max-width: 600px;"><img src="https://i.postimg.cc/nz9zLjGN/wave.png" style="display: block; height: auto; border: 0; width: 100%;" width="600"/></div>
            </div>
            </td>
            </tr>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tr>
            <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
            <div align="center" class="alignment" style="line-height:10px">
            <div style="max-width: 180px;"><img src="https://i.postimg.cc/DyJWzNB8/dark-logo.png" style="display: block; height: auto; border: 0; width: 100%;" width="180"/></div>
            </div>
            </td>
            </tr>
            </table>
            <table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
            <tr>
            <td class="pad">
            <div style="color:#ffffff;direction:ltr;font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
            <p style="margin: 0; margin-bottom: 16px;">Dear ${name}</p>
            <p style="margin: 0;">At HireLink, we simplify recruitment by offering advanced AI-driven candidate matching, a diverse talent pool spanning various industries, and an intuitive platform for effortless job posting, application review, and candidate management. Our insightful analytics provide valuable insights to optimize your hiring strategies, ensuring efficiency and success. Join us to build your high-performing team with ease and confidence.<br/><br/>Best regards,<br/><br/><br/>hirelink © 2024 Team Dracarys.</p>
            </div>
            </td>
            </tr>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" class="image_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tr>
            <td class="pad" style="width:100%;">
            <div align="left" class="alignment" style="line-height:10px">
            <div style="max-width: 224px;"><img src="https://see.fontimg.com/api/renderfont4/W7jn/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SGxpbms/halimun.png" style="display: block; height: auto; border: 0; width: 100%;" width="224"/></div>
            </div>
            </td>
            </tr>
            </table>
            <div class="spacer_block block-5" style="height:60px;line-height:60px;font-size:1px;"></div>
            <div class="spacer_block block-6" style="height:60px;line-height:60px;font-size:1px;"></div>
            <div class="spacer_block block-7" style="height:60px;line-height:60px;font-size:1px;"></div>
            <div class="spacer_block block-8" style="height:60px;line-height:60px;font-size:1px;"></div>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
            <tbody>
            <tr>
            <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px; margin: 0 auto;" width="600">
            <tbody>
            <tr>
            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
            <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tr>
            <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
            <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tr>
            <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
            <!--[if !vml]><!-->
            <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;"><!--<![endif]-->
            <tr>

            </tr>
            </table>
            </td>
            </tr>
            </table>
            </td>
            </tr>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table><!-- End -->
            </body>
            </html>`;
            let mailOptions = {
                from: "hirelink06@gmail.com",
                to: to,
                subject: "Transform Your Hiring Process with Us!",
                text: text,
                html: recruiterHtml,
            };
            let info = await transporter.sendMail(mailOptions);    
            console.log("Message sent to recruiter: %s", info.messageId);
        }
}

// Example usage:
const to = "shantanurankhambe@gmail.com";
const subject = "Hello, World!";
const text = "This is a plain text email";
const role = "candidate";
const name = "Shantanu";

// sendEmail(to, subject, text, role, name).catch(console.error);

export default sendEmail;