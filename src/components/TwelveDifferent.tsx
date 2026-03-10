import React from 'react'
import useTwelveDifferent from '../hook/useTwelveDifferent'

interface TwelveDifferentNode {
  no: number
  title: string
  descriptions: {
    internal: {
      content: string
    }
  }
}

const TwelveDifferent: React.FC = () => {
  const nodes: TwelveDifferentNode[] = useTwelveDifferent()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {nodes.map((node) => (
        <div
          key={node.no}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl font-bold text-emerald-500 shrink-0">
              {String(node.no).padStart(2, '0')}
            </span>
            <div>
              <h4 className="text-lg font-bold mb-2">{node.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {node.descriptions?.internal?.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TwelveDifferent
