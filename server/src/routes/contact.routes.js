import { Router } from 'express'
import { handleContact } from '../controllers/contact.controller.js'
import { validate, contactSchema } from '../middleware/validate.js'

const router = Router()

router.post('/', validate(contactSchema), handleContact)

export default router
