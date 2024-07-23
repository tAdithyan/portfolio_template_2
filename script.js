function sendEmail(){
Email.send({
Host: "smtp.elasticemail.com",
Username: "vishnukarippilly@gmail.com",
Password: "MyPasswordIsChainReaction",
To: "vishnukarippilly@gmail.comq",
From: document.getElementById('email').value,
Subject: "New Contact Us Message",
Body: `Name: ${document.getElementById('name').value}<br>Email: ${document.getElementById('email').value}<br>Message: ${document.getElementById('message').value}`
}).then(
message => alert("Message sent successfully!")
).catch(
error => alert("Failed to send message: " + error)
);
}
