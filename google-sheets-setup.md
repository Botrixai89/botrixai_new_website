# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for your BotrixAI contact form.

## 📋 **Prerequisites**
- Google account
- Google Sheets access
- Google Apps Script access

## 🔧 **Step 1: Create Google Spreadsheet**

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "BotrixAI Contact Form Submissions"
4. Keep the sheet open - you'll need it in the next steps

## 📝 **Step 2: Set up Google Apps Script**

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the content from `google-apps-script/Code.gs`
4. Save the project (Ctrl+S or Cmd+S)
5. Name your project "BotrixAI Contact Form Handler"

## 🔗 **Step 3: Connect Script to Spreadsheet**

1. In your Apps Script project, click on "Resources" or the settings gear icon
2. Click "Cloud Platform Project" or "Google Cloud Platform Project"
3. Create a new project or use an existing one
4. Go back to your script
5. In the code, you'll see `SpreadsheetApp.getActiveSpreadsheet()`
6. Alternative method - bind to specific spreadsheet:
   - Get your spreadsheet ID from the URL: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - Replace `SpreadsheetApp.getActiveSpreadsheet()` with `SpreadsheetApp.openById('YOUR_SPREADSHEET_ID')`

## 🚀 **Step 4: Deploy as Web App**

1. In Google Apps Script, click "Deploy" → "New deployment"
2. Click the gear icon next to "Type" and select "Web app"
3. Fill in the deployment details:
   - **Description**: "BotrixAI Contact Form API"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone" (for public form submissions)
4. Click "Deploy"
5. **Important**: Copy the Web App URL - you'll need this!
6. The URL will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`

## 🔐 **Step 5: Update Your Website Code**

1. The Google Apps Script URL is already integrated in the code at `app/api/submit-contact/route.ts`
2. If you need to update the URL in the future, simply edit line 4 in that file:
```javascript
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_NEW_SCRIPT_ID/exec'
```

3. Replace `YOUR_NEW_SCRIPT_ID` with the actual script ID from your Web App URL
4. No environment variables needed! 🎉

## ✅ **Step 6: Test the Integration**

1. In Google Apps Script, run the `testSetup()` function:
   - Select `testSetup` from the function dropdown
   - Click the play button (▶️)
   - Check if a test entry appears in your Google Sheet

2. Test from your website:
   - Fill out the contact form on your website
   - Submit the form
   - Check if the data appears in your Google Sheet

## 📊 **What Data Gets Collected**

Your Google Sheet will have these columns:
- **Timestamp**: When the form was submitted
- **Name**: Customer's name
- **Email**: Customer's email address  
- **Phone**: Customer's phone number
- **Country Code**: Phone country code (e.g., +91)
- **Inquiry Type**: Type of inquiry selected
- **Message**: Customer's message
- **Source**: Always "Website Contact Form"
- **Status**: Initially "New" - you can update this manually

## 📧 **Optional: Email Notifications**

To receive email notifications when forms are submitted:

1. In the Google Apps Script code, find this line:
```javascript
const NOTIFICATION_EMAIL = 'your-email@botrixai.com';
```

2. Replace `'your-email@botrixai.com'` with your actual email address

3. Save and redeploy the script

## 🔄 **Updating the Script**

When you need to update the script:
1. Make changes in Google Apps Script
2. Save the changes
3. Go to "Deploy" → "Manage deployments"
4. Click the edit icon (pencil) next to your deployment
5. Change the version to "New version"
6. Click "Deploy"

## 🛠️ **Troubleshooting**

### Common Issues:

1. **"Permission denied" errors**:
   - Make sure the script is deployed with "Execute as: Me"
   - Ensure "Who has access" is set to "Anyone"

2. **Data not appearing in sheet**:
   - Check if the sheet name matches `'Contact Form Submissions'`
   - Verify the Web App URL is correct in your `.env.local`

3. **CORS errors**:
   - The Apps Script deployment should handle CORS automatically
   - If issues persist, check the deployment settings

4. **Form submission fails**:
   - Check the browser console for error messages
   - Verify the API route file exists at `app/api/submit-contact/route.ts`
   - Ensure the environment variable is set correctly

### Testing Script Manually:

Run this in Google Apps Script console to test:
```javascript
function manualTest() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '1234567890',
    countryCode: '+91',
    inquiryType: 'General Inquiry',
    message: 'Test message',
    source: 'Manual Test'
  };
  
  const mockEvent = {
    postData: { contents: JSON.stringify(testData) }
  };
  
  const result = doPost(mockEvent);
  console.log(result.getContent());
}
```

## 🎉 **Success!**

Once set up correctly, your contact form will:
- ✅ Automatically save all submissions to Google Sheets
- ✅ Send email notifications (if configured)
- ✅ Provide real-time data collection
- ✅ Allow easy data export and analysis
- ✅ Maintain submission history

## 📞 **Need Help?**

If you encounter issues during setup:
1. Check the troubleshooting section above
2. Verify all URLs and IDs are correct
3. Test the individual components (script, API, form)
4. Check Google Apps Script logs for error details
