import { NextRequest, NextResponse } from 'next/server'

// Configuration - Direct Google Apps Script Web App URL
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxFrPc5Hg9T_4n2ytInP4KCZHlLDWy1fKM9WXcxDFZkVyyJlCO89lqRRMbj0bv1Qn002g/exec'

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required' },
        { status: 400 }
      )
    }
    
    // Validate Google Apps Script URL
    if (!GOOGLE_APPS_SCRIPT_URL) {
      console.error('Google Apps Script URL not configured')
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      )
    }
    
    // Prepare the data to send to Google Sheets
    // Extract phone number without country code from the formatted phone string
    let phoneOnly = body.phone?.trim() || '';
    const countryCode = body.countryCode || '+91';
    
    // If phone includes country code, extract just the number
    if (phoneOnly.startsWith(countryCode)) {
      phoneOnly = phoneOnly.substring(countryCode.length).trim();
    }
    
    const submissionData = {
      timestamp: new Date().toISOString(),
      name: body.name?.trim() || '',
      email: body.email?.trim() || '',
      phone: phoneOnly, // Just the phone number without country code
      countryCode: countryCode, // Country code separately
      inquiryType: body.inquiryType || body.option || 'General Inquiry',
      message: body.message?.trim() || '',
      source: 'Website Contact Form'
    }
    
    // Send data to Google Apps Script
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData),
    })
    
    if (!response.ok) {
      throw new Error(`Google Apps Script responded with status: ${response.status}`)
    }
    
    const result = await response.json()
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Form submitted successfully! We\'ll get back to you soon.'
      })
    } else {
      throw new Error(result.error || 'Unknown error from Google Apps Script')
    }
    
  } catch (error) {
    console.error('Error submitting form:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Unable to submit form. Please try again later or contact us directly.' 
      },
      { status: 500 }
    )
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
