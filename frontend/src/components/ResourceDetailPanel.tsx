import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Resource } from './KubeResourceGraph'
import { motion } from 'framer-motion'
import { Info } from 'lucide-react'

const statusColor = {
  Running: 'bg-green-500',
  Pending: 'bg-yellow-500',
  Failed: 'bg-red-500',
  Succeeded: 'bg-blue-500',
  Unknown: 'bg-gray-400',
}

export function ResourceDetailPanel({ resource, onClose }: { resource: Resource | null, onClose: () => void }) {
  if (!resource) return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center h-full text-center text-muted-foreground"
    >
      <Info className="w-10 h-10 mb-2 opacity-40" />
      <span className="font-mono">Select a resource to view details</span>
    </motion.div>
  )

  return (
    <motion.div
      key={resource.id}
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 80, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 150, damping: 25 }}
    >
      <Card className="shadow-xl border-2 border-indigo-100 bg-white/90">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="font-mono text-indigo-900 text-lg flex items-center gap-2">
            <span className={`inline-block w-3 h-3 rounded-full ${statusColor[resource.status]}`} />
            {resource.kind}: <span className="font-bold">{resource.name}</span>
          </CardTitle>
          <Button variant="ghost" onClick={onClose} id="close-detail-panel">Close</Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <div>
              <span className="font-mono text-xs">Status:</span>{' '}
              <Badge variant="outline" className={`border-none ${statusColor[resource.status]}`}>{resource.status}</Badge>
            </div>
            <div>
              <span className="font-mono text-xs">Resource ID:</span> <span className="font-mono text-sm">{resource.id}</span>
            </div>
            <div>
              <span className="font-mono text-xs">Kind:</span> <span className="font-mono text-sm">{resource.kind}</span>
            </div>
            <div>
              <span className="font-mono text-xs">Name:</span> <span className="font-mono text-sm">{resource.name}</span>
            </div>
            {/* Add more fake details for demo */}
            <div>
              <span className="font-mono text-xs">Created:</span> <span className="font-mono text-sm">2024-06-01T10:42:00Z</span>
            </div>
            <div>
              <span className="font-mono text-xs">Owner:</span> <span className="font-mono text-sm">system:admin</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
