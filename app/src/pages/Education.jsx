import { motion as Motion } from 'framer-motion'

export default function Education() {
  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2>Education</h2>
      <p>This is the Education page.</p>
    </Motion.div>
  )
}
