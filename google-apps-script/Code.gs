/**
 * BotrixAI Contact Form Google Apps Script
 * This script handles form submissions from your website and stores them in Google Sheets
 */

// Configuration
const SHEET_NAME = 'Contact Form Submissions';
const EXPECTED_HEADERS = [
  'Timestamp',
  'Name', 
  'Email',
  'Phone',
  'Country Code',
  'Inquiry Type',
  'Message',
  'Source',
  'Status'
];

/**
 * Main function to handle POST requests from your website
 */
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    if (!data.name || !data.email) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          error: 'Name and email are required fields'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get or create the spreadsheet
    const sheet = getOrCreateSheet();
    
    // Prepare the row data - ensure phone number is treated as text
    const phoneNumber = data.phone ? String(data.phone) : '';
    const countryCode = data.countryCode ? String(data.countryCode) : '+91';
    
    const rowData = [
      new Date().toISOString(), // Timestamp
      data.name || '',
      data.email || '',
      phoneNumber, // Phone as string
      countryCode, // Country code as string
      data.inquiryType || 'General Inquiry',
      data.message || '',
      data.source || 'Website Contact Form',
      'New' // Status
    ];
    
    // Add the data to the sheet
    const lastRow = sheet.getLastRow() + 1;
    sheet.getRange(lastRow, 1, 1, rowData.length).setValues([rowData]);
    
    // Format phone number columns as text to prevent formula errors
    sheet.getRange(lastRow, 4).setNumberFormat('@'); // Phone column
    sheet.getRange(lastRow, 5).setNumberFormat('@'); // Country code column
    
    // Send email notification (optional)
    sendNotificationEmail(data);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Form submission recorded successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: 'Internal server error: ' + error.message
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Get existing sheet or create a new one with proper headers
 */
function getOrCreateSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    // Create new sheet
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    
    // Add headers
    sheet.getRange(1, 1, 1, EXPECTED_HEADERS.length).setValues([EXPECTED_HEADERS]);
    
    // Format headers
    const headerRange = sheet.getRange(1, 1, 1, EXPECTED_HEADERS.length);
    headerRange.setBackground('#00D563');
    headerRange.setFontColor('#FFFFFF');
    headerRange.setFontWeight('bold');
    headerRange.setHorizontalAlignment('center');
    
    // Set column widths
    sheet.setColumnWidth(1, 150); // Timestamp
    sheet.setColumnWidth(2, 120); // Name
    sheet.setColumnWidth(3, 180); // Email
    sheet.setColumnWidth(4, 120); // Phone
    sheet.setColumnWidth(5, 100); // Country Code
    sheet.setColumnWidth(6, 120); // Inquiry Type
    sheet.setColumnWidth(7, 300); // Message
    sheet.setColumnWidth(8, 150); // Source
    sheet.setColumnWidth(9, 80);  // Status
    
    // Freeze header row
    sheet.setFrozenRows(1);
    
    // Format phone number columns as text to prevent formula errors
    sheet.getRange(2, 4, 1000, 1).setNumberFormat('@'); // Phone column (format first 1000 rows)
    sheet.getRange(2, 5, 1000, 1).setNumberFormat('@'); // Country code column (format first 1000 rows)
  }
  
  return sheet;
}

/**
 * Send email notification when form is submitted (optional)
 */
function sendNotificationEmail(data) {
  try {
    // Configure your notification email here
    const NOTIFICATION_EMAIL = 'your-email@botrixai.com'; // Change this to your email
    
    if (!NOTIFICATION_EMAIL || NOTIFICATION_EMAIL === 'your-email@botrixai.com') {
      return; // Skip if email not configured
    }
    
    const subject = `New Contact Form Submission - ${data.name}`;
    const body = `
      A new contact form submission has been received:
      
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.countryCode} ${data.phone}
      Inquiry Type: ${data.inquiryType}
      Message: ${data.message}
      
      Submitted at: ${new Date().toLocaleString()}
      Source: ${data.source}
      
      Please respond to this inquiry promptly.
      
      --
      BotrixAI Contact Form System
    `;
    
    MailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
  } catch (error) {
    console.error('Error sending notification email:', error);
    // Don't throw error - form submission should still succeed
  }
}

/**
 * Test function to verify the setup
 */
function testSetup() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '1234567890',
    countryCode: '+91',
    inquiryType: 'Test Inquiry',
    message: 'This is a test submission to verify the Google Sheets integration.',
    source: 'Test'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}

/**
 * Function to get all submissions (for API access)
 */
function getAllSubmissions() {
  try {
    const sheet = getOrCreateSheet();
    const data = sheet.getDataRange().getValues();
    
    if (data.length <= 1) {
      return { success: true, data: [] };
    }
    
    const headers = data[0];
    const submissions = data.slice(1).map(row => {
      const submission = {};
      headers.forEach((header, index) => {
        submission[header] = row[index];
      });
      return submission;
    });
    
    return { success: true, data: submissions };
  } catch (error) {
    console.error('Error getting submissions:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Function to update submission status
 */
function updateSubmissionStatus(rowIndex, status) {
  try {
    const sheet = getOrCreateSheet();
    const statusColumn = EXPECTED_HEADERS.indexOf('Status') + 1;
    
    sheet.getRange(rowIndex + 2, statusColumn).setValue(status); // +2 because sheet is 1-indexed and has header
    
    return { success: true, message: 'Status updated successfully' };
  } catch (error) {
    console.error('Error updating status:', error);
    return { success: false, error: error.message };
  }
}
