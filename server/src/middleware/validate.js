import { z } from 'zod'

export const contactSchema = z.object({
  name:    z.string().min(2),
  phone:   z.string().min(7),
  email:   z.string().email(),
  service: z.string().min(1),
  date:    z.string().min(1),
  address: z.string().min(10),
  message: z.string().optional(),
})

export function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body)
    if (!result.success) {
      return res.status(400).json({
        success: false,
        errors: result.error.flatten().fieldErrors,
      })
    }
    req.body = result.data
    next()
  }
}
