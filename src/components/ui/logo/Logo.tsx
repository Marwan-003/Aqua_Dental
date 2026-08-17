import { WaterDrop } from "@mui/icons-material"

function Logo({color = "text-(--primary-700)" } :{color ?: string}) {
  return (
    <div className={`flex items-center gap-2 text-2xl font-bold ${color} outfit `}>
        <WaterDrop fontSize="large" />
        <span>
            Aqua Dental
        </span>
    </div>
  )
}

export default Logo