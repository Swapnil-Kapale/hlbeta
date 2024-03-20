const nodemailer = require("nodemailer");

async function sendStatusMail(to, rName, cName, jobTitle, company, status)
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
    if(status=="interested")
        {
            const interestedHtml = `
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
            <p style="margin: 0; margin-bottom: 16px;">Dear ${cName}</p>
            <p style="margin: 0;">We hope this email finds you well. We're thrilled to inform you that a recruiter has expressed interest in your application for ${jobTitle} at ${company} through HireLink! Congratulations on catching their eye with your impressive qualifications and experience.
            <br>
            Here's what you can expect next: 
            <br>
            The recruiter will be reaching out to you soon to discuss your application further, potentially scheduling an interview or requesting additional information. Take this opportunity to prepare by reviewing the job description and researching the company. Stay connected and responsive to emails and notifications from HireLink, as the recruiter may provide further instructions. Remember, we're here to support you every step of the way, so don't hesitate to reach out if you have any questions or need assistance.<br/><br/>Best regards,<br/><br/><br/>hirelink © 2024 Team Dracarys.</p>
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
                subject: `Recruited is interested in your application: ${cName} for ${jobTitle} position`,
                text: "This is a plain text email",
                html: interestedHtml,
            };
            let info = await transporter.sendMail(mailOptions);    
            console.log("Message sent to recruiter: %s", info.messageId);
        }
    else if(status=="accepted")
        {
            const acceptedHtml = `
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
            <p style="margin: 0; margin-bottom: 16px;">Dear ${rName}</p>
            <p style="margin: 0;">I hope this email finds you well. We are writing to inform you that ${cName} has accepted the offer for the ${jobTitle} position at your company.
            We are thrilled to have ${cName} join our team and believe that their skills and experience will make a valuable contribution to your organization. We will proceed with the necessary onboarding steps and keep you updated on their progress. Thank you for your efforts in identifying and engaging with top talent with HireLink. We appreciate your partnership throughout the hiring process.<br/><br/>Best regards,<br/><br/><br/>hirelink © 2024 Team Dracarys.</p>
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
                subject: `Candidate Acceptance: ${cName} for ${jobTitle} position`,
                text: "This is a plain text email",
                html: acceptedHtml,
            };
            let info = await transporter.sendMail(mailOptions);    
            console.log("Message sent to recruiter: %s", info.messageId);
        }
    else if(status=="rejected")
        {
            const rejectedHtml = `
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
            <p style="margin: 0; margin-bottom: 16px;">Dear ${rName}</p>
            <p style="margin: 0;">We hope this email finds you well. We regret to inform you that ${cName} has declined the offer for the ${jobTitle} position at ${company}.
            While we are disappointed with this outcome, we appreciate your efforts in considering ${cName} for the role. We will continue our search for qualified candidates and keep you updated on our progress.
            Thank you for your support throughout the hiring process. If you have any questions or require further assistance, please don't hesitate to reach out.<br/><br/>Best regards,<br/><br/><br/>hirelink © 2024 Team Dracarys.</p>
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
                subject: `Candidate Decline: ${cName} for ${jobTitle} position`,
                text: "This is a plain text email",
                html: rejectedHtml,
            };
            let info = await transporter.sendMail(mailOptions);    
            console.log("Message sent to recruiter: %s", info.messageId);
        }
    else if(status=="interviewInvite")
        {
            const interviewInvite = `
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
            <p style="margin: 0; margin-bottom: 16px;">Dear ${cName}</p>
            <p style="margin: 0;">We hope this email finds you well. We are pleased to inform you that we would like to invite you to interview for the ${jobTitle} position at ${company}.<br>
            Interview Details:
            <ul>
            <li>Date: [Date of Interview]</li>
            <li>Time: [Time of Interview]</li>
            <li>Duration: [Duration of Interview]</li>
            <li>Location: [Location of Interview, if applicable]</li>
            <li>Virtual Meeting Link: [Link to Virtual Meeting, if applicable]</li>
            </ul>
            Instructions:
            <ul>
            Please confirm your availability for the scheduled interview by replying to this email at your earliest convenience.
            <li>If you have any scheduling conflicts or require accommodations, please let us know, by replying to this mail and we will do our best to accommodate your needs.</li>
            <li>Prior to the interview, please take some time to review the job description and familiarize yourself with the company and culture.</li>
            <li>If the interview will be conducted virtually, ensure that you have a stable internet connection and a quiet, distraction-free environment for the duration of the meeting.</li>
            </ul>
            If you have any questions or require further information, please don't hesitate to reach out.<br/><br/>Best regards,<br/><br/><br/>hirelink © 2024 Team Dracarys.</p>
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
                subject: `Invitation for Interview: ${cName} for ${jobTitle} position`,
                text: "This is a plain text email",
                html: interviewInvite,
            };
            let info = await transporter.sendMail(mailOptions);    
            console.log("Message sent to recruiter: %s", info.messageId);
        }
        else if(status=="finalJobOffer")
        {
            const finalJobOffer = `
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
            <p style="margin: 0; margin-bottom: 16px;">Dear ${cName}</p>
            <p style="margin: 0;">We're excited to share some fantastic news with you! We're thrilled to inform you that you have received an offer for the position of ${jobTitle}.
            <br>
            Attached to this email, you'll find the official offer letter, outlining all the details regarding your employment. Please take some time to review the offer letter carefully. If you have any questions or need clarification on any aspect, don't hesitate to reach out to us.
            <br>
            To accept this offer, simply sign the offer letter and return it to us by [Offer Acceptance Deadline]. Once we receive your acceptance, we'll proceed with the necessary onboarding steps to prepare for your start date.
            <br>
            Congratulations on this exciting opportunity, and we look forward to welcoming you aboard! If you have any further questions or need assistance, feel free to contact us anytime.<br/><br/>Best regards,<br/><br/><br/>hirelink © 2024 Team Dracarys.</p>
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
                subject: `Congratulations! You've Received an Offer for ${jobTitle} Position at ${company}`,
                text: "This is a plain text email",
                html: finalJobOffer,
            };
            let info = await transporter.sendMail(mailOptions);    
            console.log("Message sent to recruiter: %s", info.messageId);
        }
        else if(status=="finalReject")
        {
            const finalReject = `
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
            <p style="margin: 0; margin-bottom: 16px;">Dear ${cName}</p>
            <p style="margin: 0;">We hope this email finds you well. We regret to inform you that after careful consideration, the company has chosen to move forward with other candidates for the ${jobTitle} position.
            <br>
            We appreciate the time and effort you put into your application. If you have any questions or would like feedback, feel free to reach out.
            <br>
            Stay connected with us for more amazing apportunities.<br/><br/>Best regards,<br/><br/><br/>hirelink © 2024 Team Dracarys.</p>
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
                subject: `Application Update: ${jobTitle} Position at ${company}`,
                text: "This is a plain text email",
                html: finalReject,
            };
            let info = await transporter.sendMail(mailOptions);    
            console.log("Message sent to recruiter: %s", info.messageId);
        }
}

// Example usage:
const to = "shantanurankhambe@gmail.com";
const subject = "Hello, World!";
const text = "This is a plain text email";
// const role = "candidate";
// const name = "Shantanu";
const cName = "Shantanu";
const rName = "Johny";
const jobTitle = "CEO";
const company = "Apple";
const status = "interested";

// sendStatusMail(to, rName, cName, jobTitle, company, status);

export default sendStatusMail;