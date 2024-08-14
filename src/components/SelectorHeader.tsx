import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "./ui/switch"
import Image from "next/image"

const SelectorHeader = () => {
  return (
    <header className="py-2 flex justify-between items-center px-10">
      <div>
        <Image 
          src='/cloudSun.svg'
          alt="Icono de la pagina"
          width={50}
          height={50}
        />
      </div>
      <div>
        <Select>
          <SelectTrigger className="w-[180px] bg-[#0b142e] text-white">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent className="bg-[#0b142e] text-white border-none">
            <SelectItem value="argentina">Argentina</SelectItem>
            <SelectItem value="brasil">Brasil</SelectItem>
            <SelectItem value="uruguay">Uruguay</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Switch />
      </div>
    </header>
  )
}

export default SelectorHeader