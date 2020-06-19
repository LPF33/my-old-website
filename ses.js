const aws = require('aws-sdk');

let secrets;
if (process.env.NODE_ENV === 'production') {
    secrets = process.env; // in prod the secrets are environment variables
} else {
    secrets = require('./secrets'); // in dev they are in secrets.json which is listed in .gitignore
}

const ses = new aws.SES({
    accessKeyId: secrets.AWS_KEY,
    secretAccessKey: secrets.AWS_SECRET,
    region: 'eu-central-1'
});

exports.contactMail = (topic) => {
    return ses.sendEmail({
        Source: 'MyWebsite <gameslpf0@gmail.com>', 
        Destination: {
            ToAddresses: ["gameslpf0@gmail.com"]
        },
        Message: {
            Body: {
                Text: {
                    Data: topic
                }
            },
            Subject: {
                Data: `Email from my Website`
            }
        }
    }).promise();
};