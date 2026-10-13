"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";
import { Vector3 } from "three";
import type { StereotypeLabel } from "@/data/stereotypes";
import { LabelObject } from "./LabelObject";

function Core({ complete }: { complete: boolean }) {
  const ref = useRef<Group>(null);
  useFrame(({ clock }, delta) => { if (!ref.current) return; ref.current.rotation.x += delta * (complete ? .16 : .08); ref.current.rotation.y += delta * (complete ? .2 : .12); const pulse = complete ? 1 + Math.sin(clock.elapsedTime * 1.6) * .025 : 1; ref.current.scale.lerp(new Vector3(pulse, pulse, pulse), Math.min(1, delta * 3)); });
  return <Float speed={complete ? 1.4 : 1.2} rotationIntensity={complete ? .3 : .35} floatIntensity={.35}><group ref={ref}>{complete ? <><mesh><icosahedronGeometry args={[.88, 2]} /><meshBasicMaterial color="#c7ff61" wireframe transparent opacity={.9} /></mesh><mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[1.18, .018, 6, 96]} /><meshBasicMaterial color="#f0efe9" /></mesh><mesh rotation={[0, Math.PI / 2, Math.PI / 5]}><torusGeometry args={[1.35, .014, 6, 96]} /><meshBasicMaterial color="#8150d8" /></mesh></> : <mesh><icosahedronGeometry args={[1.05, 1]} /><meshStandardMaterial color="#101014" roughness={.25} metalness={.7} wireframe /></mesh>}</group></Float>;
}

function CameraRig({ complete }: { complete: boolean }) {
  const { camera, pointer, size } = useThree();
  useFrame((_, delta) => { const mobile = size.width < 600; const target = new Vector3(complete ? 0 : pointer.x * (mobile ? .08 : .14), complete ? .05 : pointer.y * (mobile ? .06 : .1), complete ? (mobile ? 8.2 : 6.4) : (mobile ? 8 : 5.35)); camera.position.lerp(target, Math.min(1, delta * 1.8)); camera.lookAt(0, 0, 0); });
  return null;
}

const fieldSlots: Array<[number, number, number]> = [
  [-2.25, 1.35, .1], [0, 2.15, -.65], [2.2, 1.35, -.15],
  [-2.25, -.95, -.35], [-.75, -.25, -.7], [1.05, -.2, -.5],
  [2.2, -.95, .05], [-1.25, -1.95, -.4], [1.25, -1.95, -.15], [0, .65, -.8],
];

export type LabelSceneProps = { labels: StereotypeLabel[]; brokenIds: string[]; onBreak: (id: string) => void; reducedMotion?: boolean };
export default function LabelScene({ labels, brokenIds, onBreak, reducedMotion = false }: LabelSceneProps) {
  const complete = brokenIds.length === labels.length;
  const randomizedLabels = useMemo(() => {
    const availableSlots = [...fieldSlots];
    return labels.map((label, index) => {
      const slotIndex = Math.floor(Math.random() * availableSlots.length);
      const position = availableSlots.splice(slotIndex, 1)[0];
      const rotation: [number, number, number] = [0, (Math.random() - .5) * .55, (Math.random() - .5) * .28];
      return { ...label, position, rotation };
    });
  }, [labels]);
  return <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5.35], fov: 48 }} gl={{ antialias: true, alpha: true }} frameloop={reducedMotion ? "demand" : "always"}><ambientLight intensity={1.8} /><directionalLight position={[3, 4, 5]} color="#c7ff61" intensity={4.5} /><directionalLight position={[-4, -2, 3]} color="#8150d8" intensity={3.8} /><Core complete={complete} />{randomizedLabels.map((label, index) => <LabelObject key={label.id} index={index} label={label} broken={brokenIds.includes(label.id)} onBreak={() => onBreak(label.id)} />)}{!reducedMotion && <CameraRig complete={complete} />}</Canvas>;
}
