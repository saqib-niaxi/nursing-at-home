import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, CheckCircle, Send, Lock } from 'lucide-react'
import toast from 'react-hot-toast'
import { pageTransition, staggerContainer, fadeUp } from '../animations/variants'
import { Button } from '../components/ui/Button'
import { submitContact } from '../services/api'

const schema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  phone:   z.string().min(7, 'Please enter a valid phone number'),
  email:   z.string().email('Please enter a valid email'),
  service: z.string().min(1, 'Please select a service'),
  date:    z.string().min(1, 'Please select a preferred date'),
  address: z.string().min(10, 'Please enter your full address'),
  message: z.string().optional(),
})

const services = [
  'Post-Op Care', 'Elder Care', 'Pediatric Care',
  'Wound Care', 'IV Therapy', 'Palliative Care',
  'Diabetes Care', 'Cardiac Care', 'Other',
]

const contactInfo = [
  { icon: Phone,         label: 'Phone',    value: '+92 320 2067666', href: 'tel:+923202067666' },
  { icon: Mail,          label: 'Email',    value: 'hello@carehome.com', href: 'mailto:hello@carehome.com' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+92 320 2067666', href: 'https://wa.me/923202067666' },
  { icon: MapPin,        label: 'Office',   value: '123 Healthcare Blvd, New York, NY 10001', href: '#' },
]

export default function Contact() {
  const [submitted, setSubmitted]   = useState(false)
  const [searchParams]              = useSearchParams()
  const preselectedService          = searchParams.get('service') || ''

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { service: preselectedService },
  })

  const onSubmit = async (data) => {
    try {
      await submitContact(data)
      setSubmitted(true)
      reset()
      toast.success('Booking request sent successfully!')
    } catch {
      toast.error('Something went wrong. Please try again or call us directly.')
    }
  }

  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-hero-gradient">
        <div className="container-xl text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label">
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-6xl text-gray-900 mt-3 mb-4"
          >
            {preselectedService ? `Book ${preselectedService}` : 'Book your nurse today'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Fill in the form below and our care coordinator will confirm your booking within 30 minutes.
          </motion.p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="card p-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </motion.div>
                    <h2 className="font-heading font-bold text-2xl text-gray-900 mb-3">Booking Request Sent!</h2>
                    <p className="text-gray-500 mb-6">
                      We've received your request and will contact you within 30 minutes to confirm your nurse and appointment details. Check your email for a confirmation.
                    </p>
                    <Button variant="violet" onClick={() => setSubmitted(false)}>
                      Submit Another Request
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="card p-8"
                  >
                    <h2 className="font-heading font-bold text-xl text-gray-900 mb-2">Appointment Request</h2>

                    {/* Auto-filled service banner */}
                    {preselectedService && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 bg-violet-50 border border-violet-200 rounded-2xl px-4 py-3 mb-6"
                      >
                        <div className="w-8 h-8 rounded-xl bg-violet-600 flex items-center justify-center shrink-0">
                          <Lock className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-violet-500 font-heading font-medium">Service auto-selected</p>
                          <p className="text-sm text-violet-800 font-heading font-bold">{preselectedService}</p>
                        </div>
                        {/* Hidden input carries the value for react-hook-form */}
                        <input type="hidden" {...register('service')} />
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-heading font-medium text-gray-700 mb-1.5">Full Name *</label>
                          <input {...register('name')} placeholder="John Smith" className="input-field" />
                          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                        </div>
                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-heading font-medium text-gray-700 mb-1.5">Phone Number *</label>
                          <input {...register('phone')} placeholder="+1 (555) 000-0000" className="input-field" />
                          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Email */}
                        <div>
                          <label className="block text-sm font-heading font-medium text-gray-700 mb-1.5">Email Address *</label>
                          <input {...register('email')} type="email" placeholder="john@example.com" className="input-field" />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>
                        {/* Date — shown here only when service is pre-selected */}
                        {preselectedService && (
                          <div>
                            <label className="block text-sm font-heading font-medium text-gray-700 mb-1.5">Preferred Date *</label>
                            <input {...register('date')} type="date" className="input-field" min={new Date().toISOString().split('T')[0]} />
                            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                          </div>
                        )}
                      </div>

                      {/* Service dropdown + Date — only shown when NOT pre-selected from URL */}
                      {!preselectedService && (
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-heading font-medium text-gray-700 mb-1.5">Service Needed *</label>
                            <select {...register('service')} className="input-field">
                              <option value="">Select a service...</option>
                              {services.map((s) => <option key={s} value={s}>{s}</option>)}
                            </select>
                            {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-heading font-medium text-gray-700 mb-1.5">Preferred Date *</label>
                            <input {...register('date')} type="date" className="input-field" min={new Date().toISOString().split('T')[0]} />
                            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                          </div>
                        </div>
                      )}

                      {/* Address */}
                      <div>
                        <label className="block text-sm font-heading font-medium text-gray-700 mb-1.5">Home Address *</label>
                        <input {...register('address')} placeholder="123 Main St, New York, NY 10001" className="input-field" />
                        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-heading font-medium text-gray-700 mb-1.5">Additional Notes</label>
                        <textarea
                          {...register('message')}
                          rows={4}
                          placeholder="Any special requirements or questions for your nurse..."
                          className="input-field resize-none"
                        />
                      </div>

                      <Button type="submit" variant="violet" loading={isSubmitting} className="w-full justify-center text-base py-3.5">
                        <Send className="w-4 h-4" />
                        {isSubmitting ? 'Sending...' : 'Send Booking Request'}
                      </Button>

                      <p className="text-center text-xs text-gray-400">
                        We'll confirm within 30 minutes. Your info is kept private and secure.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card p-6"
              >
                <motion.h3 variants={fadeUp} className="font-heading font-bold text-gray-900 mb-5">Contact Us Directly</motion.h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      variants={fadeUp}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center shrink-0 group-hover:bg-violet-600 transition-colors">
                        <info.icon className="w-4 h-4 text-violet-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-heading font-medium">{info.label}</p>
                        <p className="text-sm text-gray-700 font-heading font-semibold leading-tight">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="font-heading font-bold text-gray-900 mb-4">Care Hours</h3>
                <div className="space-y-2.5 text-sm">
                  {[
                    { day: 'Monday – Friday',  hours: '6:00 AM – 10:00 PM' },
                    { day: 'Weekends',         hours: '8:00 AM – 8:00 PM' },
                    { day: 'Emergency Care',   hours: '24 / 7 Available' },
                  ].map((row) => (
                    <div key={row.day} className="flex items-center justify-between">
                      <span className="text-gray-500">{row.day}</span>
                      <span className={`font-heading font-semibold ${row.hours.includes('24') ? 'text-violet-600' : 'text-gray-900'}`}>
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
              >
                <div className="h-40 bg-cream-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-violet-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-400 font-heading">123 Healthcare Blvd</p>
                    <p className="text-xs text-gray-400">New York, NY 10001</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
