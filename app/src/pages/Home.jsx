import { motion as Motion } from 'framer-motion'

export default function Home() {
  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2>Home</h2>
      <p>This is the Home page.</p>
    </Motion.div>
  )
}
