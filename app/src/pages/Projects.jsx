import { motion as Motion } from 'framer-motion'

export default function Projects() {
  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2>Projects</h2>
      <p>This is the Projects page.</p>
    </Motion.div>
  )
}
