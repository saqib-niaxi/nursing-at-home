import nodemailer from 'nodemailer'

function createTransporter() {
  return nodemailer.createTransport({
    host:   process.env.SMTP_HOST   || 'smtp.gmail.com',
    port:   parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

export async function sendAdminAlert(data) {
  const transporter = createTransporter()
  await transporter.sendMail({
    from:    `"HomeCare Bookings" <${process.env.SMTP_USER}>`,
    to:      process.env.ADMIN_EMAIL || process.env.SMTP_USER,
    subject: `New Booking Request — ${data.service} from ${data.name}`,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #FAFAF8; border-radius: 16px;">
        <div style="background: linear-gradient(135deg, #7C3AED, #A78BFA); border-radius: 12px; padding: 24px; margin-bottom: 24px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Booking Request</h1>
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          ${[
            ['Name',     data.name],
            ['Phone',    data.phone],
            ['Email',    data.email],
            ['Service',  data.service],
            ['Date',     data.date],
            ['Address',  data.address],
            ['Notes',    data.message || 'N/A'],
          ].map(([label, value]) => `
            <tr>
              <td style="padding: 10px 16px; background: #F5F3EF; font-weight: 600; color: #374151; border-radius: 6px; width: 120px; font-size: 14px;">${label}</td>
              <td style="padding: 10px 16px; color: #4B5563; font-size: 14px;">${value}</td>
            </tr>
          `).join('<tr><td colspan="2" style="height: 6px;"></td></tr>')}
        </table>
        <p style="color: #9CA3AF; font-size: 12px; margin-top: 24px; text-align: center;">
          Received at ${new Date().toLocaleString()} — Please respond within 30 minutes.
        </p>
      </div>
    `,
  })
}

export async function sendUserConfirmation(data) {
  const transporter = createTransporter()
  await transporter.sendMail({
    from:    `"HomeCare" <${process.env.SMTP_USER}>`,
    to:      data.email,
    subject: `Booking Confirmed — ${data.service} on ${data.date}`,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #FAFAF8; border-radius: 16px;">
        <div style="background: linear-gradient(135deg, #7C3AED, #A78BFA); border-radius: 12px; padding: 24px; margin-bottom: 24px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Booking Request Received!</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 15px;">We'll confirm within 30 minutes</p>
        </div>

        <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
          Hi <strong>${data.name}</strong>,<br><br>
          Thank you for booking with HomeCare. We've received your request and our care coordinator will be in touch shortly to confirm your appointment details.
        </p>

        <div style="background: white; border-radius: 12px; padding: 20px; border: 1px solid #E5E7EB; margin-bottom: 24px;">
          <h3 style="margin: 0 0 16px; color: #111827; font-size: 16px;">Your Booking Summary</h3>
          <p style="margin: 6px 0; color: #6B7280; font-size: 14px;"><strong style="color: #374151;">Service:</strong> ${data.service}</p>
          <p style="margin: 6px 0; color: #6B7280; font-size: 14px;"><strong style="color: #374151;">Preferred Date:</strong> ${data.date}</p>
          <p style="margin: 6px 0; color: #6B7280; font-size: 14px;"><strong style="color: #374151;">Address:</strong> ${data.address}</p>
        </div>

        <p style="color: #6B7280; font-size: 14px; line-height: 1.6;">
          Need to make changes? Contact us at <a href="tel:+18001234567" style="color: #7C3AED;">+1 (800) 123-4567</a> or reply to this email.
        </p>

        <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #E5E7EB; text-align: center; color: #9CA3AF; font-size: 12px;">
          © ${new Date().getFullYear()} HomeCare — Premium Nursing At Home
        </div>
      </div>
    `,
  })
}
