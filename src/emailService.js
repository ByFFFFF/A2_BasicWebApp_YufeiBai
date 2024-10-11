import postmark from 'postmark'

const client = new postmark.ServerClient('01e582c2-eb76-488a-bd32-d6c8f3bd7484')

export const sendEmail = async (to, subject, body) => {
  try {
    const response = await client.sendEmail({
      From: 'm41012003@zznoo.com',
      To: to,
      Subject: subject,
      HtmlBody: body,
      MessageStream: 'a3_basicwebapp_yufeibai'
    })

    console.log('Email sent successfully:', response)
    return response
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}

console.log('Postmark client initialized:', client)
