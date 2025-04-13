import { FileText, Clock } from "lucide-react"

export default function DocumentCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 buddy-card">
      <h3 className="text-lg font-bold mb-2">Lorem ipsum dolor sit amet consectetur.</h3>
      <p className="text-sm text-gray-600 mb-4">
        Lorem ipsum dolor sit amet consectetur. Morbi integer tempus odio ut fusce pulvinar. Purus in eget vitae posuere
        laoreet nec. Maecenas tincidunt aliquot pretium eu ornare. At ultricies porttitor mauris sem. Mauris leo
        venenatis.
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-purple-600">
          <FileText className="h-4 w-4 mr-1" />
          <span className="text-xs">Words: 514</span>
        </div>
        <div className="flex items-center text-purple-600">
          <Clock className="h-4 w-4 mr-1" />
          <span className="text-xs">Pages: 02</span>
        </div>
      </div>
    </div>
  )
}
