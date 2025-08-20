import { motion } from 'framer-motion'
import { ResourceNode } from '@/components/ResourceNode'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Fake resource data for demonstration
type Resource = {
  id: string
  kind: string
  name: string
  status: 'Running' | 'Pending' | 'Failed' | 'Succeeded' | 'Unknown'
  children?: Resource[]
}

const demoGraph: Resource = {
  id: 'cluster',
  kind: 'Cluster',
  name: 'production-cluster',
  status: 'Running',
  children: [
    {
      id: 'ns-1',
      kind: 'Namespace',
      name: 'frontend',
      status: 'Running',
      children: [
        {
          id: 'deploy-1',
          kind: 'Deployment',
          name: 'web-app',
          status: 'Running',
          children: [
            {
              id: 'pod-1',
              kind: 'Pod',
              name: 'web-app-abc123',
              status: 'Running',
            },
            {
              id: 'pod-2',
              kind: 'Pod',
              name: 'web-app-def456',
              status: 'Pending',
            },
          ],
        },
      ],
    },
    {
      id: 'ns-2',
      kind: 'Namespace',
      name: 'backend',
      status: 'Running',
      children: [
        {
          id: 'deploy-2',
          kind: 'Deployment',
          name: 'api',
          status: 'Running',
          children: [
            {
              id: 'pod-3',
              kind: 'Pod',
              name: 'api-xyz789',
              status: 'Failed',
            },
          ],
        },
      ],
    },
  ],
}

const statusColor = {
  Running: 'bg-green-500',
  Pending: 'bg-yellow-500',
  Failed: 'bg-red-500',
  Succeeded: 'bg-blue-500',
  Unknown: 'bg-gray-400',
}

function renderResourceTree(resource: Resource, level = 0, onSelect: (r: Resource) => void, selectedId?: string) {
  return (
    <motion.div
      key={resource.id}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: level * 0.05 }}
      className={`ml-${level * 6} mt-2`}
    >
      <div
        className={`flex items-center gap-2 cursor-pointer transition hover:bg-secondary/30 rounded px-2 py-1 ${selectedId === resource.id ? 'ring-2 ring-indigo-500' : ''}`}
        onClick={() => onSelect(resource)}
        tabIndex={0}
        aria-label={`View details for ${resource.kind} ${resource.name}`}
        role="button"
        id={`resource-node-${resource.id}`}
      >
        <span className={`inline-block w-2 h-2 rounded-full ${statusColor[resource.status]}`} />
        <span className="font-mono text-xs text-muted-foreground">{resource.kind}:</span>
        <span className="font-semibold text-sm">{resource.name}</span>
        <Badge variant="outline" className={`border-none ${statusColor[resource.status]}`}>{resource.status}</Badge>
      </div>
      {resource.children && (
        <div className="ml-6 border-l border-muted-foreground/10">
          {resource.children.map(child => renderResourceTree(child, level + 1, onSelect, selectedId))}
        </div>
      )}
    </motion.div>
  )
}

export function KubeResourceGraph({ onSelect, selectedId }: { onSelect: (r: Resource) => void, selectedId?: string }) {
  return (
    <Card className="shadow-xl border-2 border-indigo-100 bg-white/80">
      <CardHeader>
        <CardTitle className="font-mono text-indigo-900 tracking-tight text-2xl flex items-center gap-2">
          <span role="img" aria-label="Kubernetes network">🔗</span> Cluster Graph
        </CardTitle>
      </CardHeader>
      <CardContent>
        {renderResourceTree(demoGraph, 0, onSelect, selectedId)}
      </CardContent>
    </Card>
  )
}

export type { Resource }
