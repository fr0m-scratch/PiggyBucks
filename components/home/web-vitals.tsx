import { motion } from "framer-motion";
import CountingNumbers from "@/components/shared/counting-numbers";
import internal from "stream";

export default function WebVitals(
  {
    vCount =100,
  }: {
    vCount: number;
  }
) {

  return (
    <div className="relative h-full w-full">
      <motion.svg
        className="absolute inset-0 m-auto"
        viewBox="0 0 100 100"
        width={140}
        height={140}
      >
        <motion.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
          strokeWidth={7}
          strokeDasharray="0 1"
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          cx="50"
          cy="50"
          r="45"
          fill="black"
          stroke="#7700C8"
        />
      </motion.svg>
      <CountingNumbers
        value= {vCount}
        duration={2500}
        className="absolute inset-0 mx-auto flex items-center justify-center font-display text-5xl text-yellow-300"
      />
    </div>
  );
}
