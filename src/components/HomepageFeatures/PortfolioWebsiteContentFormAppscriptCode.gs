

function doPost(e) {
  const sheet = SpreadsheetApp.openById('YOUR_GOOGLE_SHEETS_ID').getSheetByName('Sheet1');
  const formData = e.parameter;

  const name = formData.name;
  const email = formData.email;
  const message = formData.message;
  
  try {
    // Append data to the spreadsheet
    sheet.appendRow([name, email, message]);

    // Send an email notification
    const recipient = 'contact.hackathonmj@gmail.com'; // Replace with your email
    const subject = `New Contact Form Submission Portfolio website Name: ${name}`;
    const body = `Hey Meet New Contact Form Submission\n\n\n\n\nName: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`;
    MailApp.sendEmail(recipient, subject, body);
    
    // Send a confirmation email to the user
    const userSubject = 'Thank You for Your Contact Form Submission';
    const userBody = `You have responded\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}.\n\n\n\n\nThank you for contacting me.\n\nI have received your message and will get back to you soon.\n\n\n Thank You !!! 😊🙏`;
    MailApp.sendEmail(email, userSubject, userBody);

    // Return a success response
    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return an error response
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', message: error.message }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Allow CORS for GET requests if needed
  return ContentService.createTextOutput('GET method is not supported.')
                       .setMimeType(ContentService.MimeType.TEXT);
}



