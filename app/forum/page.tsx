import Link from 'next/link'
import { Button } from '@/components/ui/button'

const forumTopics = [
  { id: 1, title: "My experience with ProstaVive", author: "John Doe", replies: 15 },
  { id: 2, title: "Questions about dosage", author: "Mike Smith", replies: 8 },
  { id: 3, title: "ProstaVive and exercise", author: "David Johnson", replies: 12 },
]

export default function Forum() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">ProstaVive Community Forum</h1>
      <div className="mb-8">
        <Button asChild>
          <Link href="/forum/new">Start New Topic</Link>
        </Button>
      </div>
      <div className="space-y-4">
        {forumTopics.map(topic => (
          <div key={topic.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/forum/${topic.id}`} className="text-blue-600 hover:underline">
                {topic.title}
              </Link>
            </h2>
            <p>Started by: {topic.author}</p>
            <p>Replies: {topic.replies}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

