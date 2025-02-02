import { AlertTriangle } from 'lucide-react'

export function YouTubeDisclaimer() {
  return (
    <div className="bg-gray-100 border-l-4 border-gray-300 p-4 my-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-gray-500" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-gray-600">
            <strong className="font-medium text-gray-700">Disclaimer:</strong> The YouTube video embedded on this page is owned by its respective creator and is used for informational purposes only. The inclusion of this video does not imply endorsement of ProstaVive or this website by the video creator. ProstaVive and its affiliates are not responsible for the content of external videos.
          </p>
        </div>
      </div>
    </div>
  )
}

