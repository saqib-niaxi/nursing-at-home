import { sendAdminAlert, sendUserConfirmation } from '../services/email.service.js'

export async function handleContact(req, res) {
  try {
    const data = req.body

    // Send both emails in parallel (non-blocking — don't fail if email fails)
    await Promise.allSettled([
      sendAdminAlert(data),
      sendUserConfirmation(data),
    ])

    res.status(200).json({
      success: true,
      message: 'Booking request received. We will contact you within 30 minutes.',
    })
  } catch (err) {
    console.error('Contact handler error:', err)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
}
