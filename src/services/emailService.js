import emailjs from '@emailjs/browser'

// EmailJS configuration (keep as fallback)
const EMAILJS_SERVICE_ID = 'service_portfolio'
const EMAILJS_TEMPLATE_ID = 'template_contact'
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'

// Only initialize EmailJS if we have a valid key
if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'your_public_key_here') {
  emailjs.init(EMAILJS_PUBLIC_KEY)
}

const API_BASE = import.meta.env.VITE_API_BASE_URL || ''

// Primary: POST to backend /api/contact
export const sendEmail = async (formData) => {
  // Try server first
  try {
    const res = await fetch(`${API_BASE}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message }),
    })

    if (res.ok) {
      return { success: true, message: 'Message sent via server.' }
    }
    // fall through to EmailJS if server responds with non-OK
    console.warn('Server responded with', res.status)
  } catch (err) {
    console.warn('Server send failed, falling back to EmailJS:', err)
  }

  // Fallback: try EmailJS only if properly configured
  if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'your_public_key_here') {
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'amanuelmark747@gmail.com',
        reply_to: formData.email,
      }

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )

      // EmailJS returns an array-like success response in many setups; treat as success if no error
      if (response) {
        return { success: true, message: 'Message sent via EmailJS.' }
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
    }
  }

  // Final fallback: open mail client
  const subject = `Portfolio Contact from ${formData.name}`
  const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
  const mailtoLink = `mailto:amanuelmark747@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
  window.open(mailtoLink, '_blank')

  return { success: false, message: 'Could not send automatically — opened mail client as fallback.' }
}

// Fallback function for mailto links
export const sendEmailFallback = (formData) => {
  const subject = `Portfolio Contact from ${formData.name}`
  const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
  const mailtoLink = `mailto:amanuelmark747@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
  window.open(mailtoLink, '_blank')
  return { success: false, message: 'Opened mail client as fallback.' }
}
