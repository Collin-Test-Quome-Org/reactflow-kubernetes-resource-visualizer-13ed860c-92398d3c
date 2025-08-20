import { useState } from 'react'
import { KubeResourceGraph, Resource } from '@/components/KubeResourceGraph'
import { ResourceDetailPanel } from '@/components/ResourceDetailPanel'
import { motion } from 'framer-motion'

export function VisualizerPage() {
  const [selected, setSelected] = useState<Resource | null>(null)

  return (
    <motion.div
      className="max-w-7xl mx-auto mt-8 flex gap-8"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex-[2] min-w-0">
        <KubeResourceGraph onSelect={setSelected} selectedId={selected?.id} />
      </div>
      <div className="flex-1 min-w-[340px]">
        <ResourceDetailPanel resource={selected} onClose={() => setSelected(null)} />
      </div>
    </motion.div>
  )
}
