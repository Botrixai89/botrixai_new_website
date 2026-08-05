import { NextRequest, NextResponse } from 'next/server'

// Configuration - Replace with your Google Apps Script Web App URL
const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL || 'YOUR_APPS_SCRIPT_URL_HERE'

export async function GET(request: NextRequest) {
  try {
    // Validate environment variable
    if (!GOOGLE_APPS_SCRIPT_URL || GOOGLE_APPS_SCRIPT_URL === 'YOUR_APPS_SCRIPT_URL_HERE') {
      console.error('Google Apps Script URL not configured')
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      )
    }
    
    // Call Google Apps Script to get submissions
    const response = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?action=getAllSubmissions`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    if (!response.ok) {
      throw new Error(`Google Apps Script responded with status: ${response.status}`)
    }
    
    const result = await response.json()
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        data: result.data || []
      })
    } else {
      throw new Error(result.error || 'Unknown error from Google Apps Script')
    }
    
  } catch (error) {
    console.error('Error fetching submissions:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Unable to fetch submissions. Please try again later.' 
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
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
