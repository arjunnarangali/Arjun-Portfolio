import { motion } from "framer-motion"
import { Badge } from "@/components/atoms/badge"
import { cn } from "@/lib/cn"
import { fadeInUp } from "@/lib/motion"

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description: string
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">{description}</p>
    </motion.div>
  )
}
