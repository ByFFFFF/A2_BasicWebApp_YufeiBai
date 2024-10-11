import postmark from 'postmark'

const client = new postmark.ServerClient('55541eab-1a9d-495a-920e-659ca5ba4d3c')

export const sendEmail = async (to, subject, body) => {
  try {
    const response = await client.sendEmail({
      From: 'ybai0043@student.monash.edu',
      To: to,
      Subject: subject,
      HtmlBody: body,
      MessageStream: 'a3'
    })

    console.log('Email sent successfully:', response)
    return response
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}
