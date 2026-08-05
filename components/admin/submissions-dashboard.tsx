"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RefreshCw, Download, Filter } from "lucide-react"

interface Submission {
  Timestamp: string
  Name: string
  Email: string
  Phone: string
  'Country Code': string
  'Inquiry Type': string
  Message: string
  Source: string
  Status: string
}

export default function SubmissionsDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const fetchSubmissions = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/submissions')
      
      if (!response.ok) {
        throw new Error('Failed to fetch submissions')
      }
      
      const data = await response.json()
      
      if (data.success) {
        setSubmissions(data.data || [])
      } else {
        throw new Error(data.error || 'Unknown error')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load submissions')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const filteredSubmissions = submissions.filter(submission => {
    if (filter === 'all') return true
    return submission.Status?.toLowerCase() === filter.toLowerCase()
  })

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'in-progress': return 'bg-yellow-100 text-yellow-800'
      case 'completed': return 'bg-green-100 text-green-800'
      case 'closed': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const exportToCSV = () => {
    if (submissions.length === 0) return

    const headers = Object.keys(submissions[0])
    const csvContent = [
      headers.join(','),
      ...submissions.map(row => 
        headers.map(header => 
          `"${String(row[header as keyof Submission] || '').replace(/"/g, '""')}"`
        ).join(',')
      )
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `contact-submissions-${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Contact Form Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <RefreshCw className="w-6 h-6 animate-spin mr-2" />
            <span>Loading submissions...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Contact Form Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-red-500 mb-4">Error: {error}</p>
            <Button onClick={fetchSubmissions} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Retry
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Contact Form Submissions</CardTitle>
              <CardDescription>
                {submissions.length} total submissions
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button onClick={fetchSubmissions} variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button onClick={exportToCSV} variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              All ({submissions.length})
            </Button>
            <Button
              variant={filter === 'new' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('new')}
            >
              New ({submissions.filter(s => s.Status?.toLowerCase() === 'new').length})
            </Button>
            <Button
              variant={filter === 'in-progress' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('in-progress')}
            >
              In Progress ({submissions.filter(s => s.Status?.toLowerCase() === 'in-progress').length})
            </Button>
          </div>

          <div className="space-y-4">
            {filteredSubmissions.length === 0 ? (
              <p className="text-center text-gray-500 py-8">No submissions found</p>
            ) : (
              filteredSubmissions.map((submission, index) => (
                <Card key={index} className="border-l-4 border-l-[#00D563]">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-lg">{submission.Name}</h3>
                        <Badge className={getStatusColor(submission.Status)}>
                          {submission.Status || 'New'}
                        </Badge>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(submission.Timestamp).toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-medium">{submission.Email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="font-medium">
                          {submission['Country Code']} {submission.Phone}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Inquiry Type</p>
                        <p className="font-medium">{submission['Inquiry Type']}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Source</p>
                        <p className="font-medium">{submission.Source}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Message</p>
                      <p className="text-gray-800 bg-gray-50 p-3 rounded-lg">
                        {submission.Message}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
