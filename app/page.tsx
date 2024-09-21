import { About } from "@/components/About";
import LiquidacionCompra from "@/components/LiquidacionCompra/LiquidacionCompra";
import ParticleRing from "@/components/ParticleRing/ParticleRing";
import Utilcon from "@/components/Utilcon/Utilcon";

export default function Home() {
  return (
    <div>
      <ParticleRing />
      <About />
      <Utilcon />
      <LiquidacionCompra />
    </div>
  );
}
