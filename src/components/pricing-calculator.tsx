import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Minus, Plus } from "lucide-react"

export default function PricingCalculator() {
  return (
    <div className="buddy-gradient rounded-xl p-6 text-white">
      <h2 className="text-2xl font-bold mb-6">Calculate Price and Order a Custom Work</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="mb-2 text-sm">Type of Work</p>
          <Select>
            <SelectTrigger className="bg-white text-black border-none">
              <SelectValue placeholder="Application Essay" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="essay">Application Essay</SelectItem>
              <SelectItem value="research">Research Paper</SelectItem>
              <SelectItem value="case-study">Case Study</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <p className="mb-2 text-sm">Academic Level</p>
          <Select>
            <SelectTrigger className="bg-white text-black border-none">
              <SelectValue placeholder="Undergraduate/Bachelor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high-school">High School</SelectItem>
              <SelectItem value="undergraduate">Undergraduate/Bachelor</SelectItem>
              <SelectItem value="masters">Master&apos;s</SelectItem>
              <SelectItem value="phd">PhD</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <p className="mb-2 text-sm">Deadline</p>
          <Select>
            <SelectTrigger className="bg-white text-black border-none">
              <SelectValue placeholder="Select Deadline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="6h">6 Hours</SelectItem>
              <SelectItem value="12h">12 Hours</SelectItem>
              <SelectItem value="24h">24 Hours</SelectItem>
              <SelectItem value="48h">2 Days</SelectItem>
              <SelectItem value="3d">3 Days</SelectItem>
              <SelectItem value="7d">7 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <p className="mb-2 text-sm">Pages</p>
          <div className="flex items-center bg-white rounded-md">
            <Button variant="ghost" className="h-10 w-10 p-0 text-black hover:bg-gray-100 rounded-l-md rounded-r-none">
              <Minus className="h-4 w-4" />
            </Button>
            <div className="flex-1 text-center text-black">1 page/275 words</div>
            <Button variant="ghost" className="h-10 w-10 p-0 text-black hover:bg-gray-100 rounded-r-md rounded-l-none">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm">Your Price</p>
          <div className="flex items-center">
            <span className="text-sm line-through mr-2">$19.50</span>
            <span className="text-xl font-bold">$15.00</span>
          </div>
        </div>
        <Button className="bg-[#1a1a2e] hover:bg-[#16162b] text-white">Order Now</Button>
      </div>
    </div>
  )
}