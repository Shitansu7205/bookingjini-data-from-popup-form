const nodemailer = require('nodemailer');

const home = (req, res) => {
    res.send('Home Rouete');
};



const bookingjini = async (req, res) => {
    const data = req.body;
    console.log(data);
    console.log("Data received successfully....");

    // Create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, // Your email
            pass: process.env.EMAIL_PASSWORD // Your email password or app password
        }
    });

    // Setup email data
    let mailOptions = {
        from: `"${data.name}" <${process.env.EMAIL}>`, // Sender address
        to: 'shitansukumargochhayat@gmail.com ', // List of receivers
        cc: 'abhilipsadas25433@gmail.com', // Optional: List of CC recipients
        bcc: 'abhilipsadas25433@gmail.com', // Optional: List of BCC recipients
        subject: 'New Enquiry From Website', // Subject line
        text: `You have a new Enquiry from your form submission:\n\nName: ${data.fullname}\nProperty Name: ${data.property}\nEmail: ${data.email}\nContact Number: ${data.phone}\nProperty Location: ${data.location}`, // Plain text body
        
    };

    try {
        // Send mail with defined transport object
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        res.status(200).send({ message: 'Email sent successfully', data });
    } catch (error) {
        console.error('Error sending email: ', error);
        res.status(500).send({ message: 'Error sending email', error });
    }
};

module.exports = { home , bookingjini };

