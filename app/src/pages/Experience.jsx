import { motion as Motion } from 'framer-motion'

export default function Experience() {
  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2>Experience</h2>
      <p>This is the Experience page.</p>
    </Motion.div>
  )
}
