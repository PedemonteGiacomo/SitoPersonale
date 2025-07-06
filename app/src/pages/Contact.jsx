import { motion as Motion } from 'framer-motion'

export default function Contact() {
  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2>Contact</h2>
      <p>This is the Contact page.</p>
    </Motion.div>
  )
}
