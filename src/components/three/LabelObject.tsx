"use client";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { CanvasTexture, SRGBColorSpace } from "three";
import type { Group, Mesh } from "three";
import type { StereotypeLabel } from "@/data/stereotypes";
import { Fragments } from "./Fragments";

export function LabelObject({ label, broken, onBreak, index }: { label: StereotypeLabel; broken: boolean; onBreak: () => void; index: number }) {
  const group = useRef<Group>(null); const card = useRef<Mesh>(null); const [hovered, setHovered] = useState(false);
  const labelTexture = useMemo(() => {
    const canvas = document.createElement("canvas"); canvas.width = 1024; canvas.height = 256;
    const context = canvas.getContext("2d");
    if (context) {
      context.clearRect(0, 0, canvas.width, canvas.height); context.fillStyle = "#101014"; context.textAlign = "center"; context.textBaseline = "middle";
      let size = 92; do { context.font = `700 ${size}px "Space Grotesk", Arial, sans-serif`; size -= 4; } while (context.measureText(label.phrase).width > 900 && size > 44);
      context.fillText(label.phrase, canvas.width / 2, canvas.height / 2 + 4);
    }
    const texture = new CanvasTexture(canvas); texture.colorSpace = SRGBColorSpace; texture.needsUpdate = true; return texture;
  }, [label.phrase]);
  useEffect(() => () => labelTexture.dispose(), [labelTexture]);
  useFrame(({ clock }, delta) => { if (!group.current || broken) return; group.current.position.y = label.position[1] + Math.sin(clock.elapsedTime * .65 + index * 1.7) * .1; group.current.rotation.z = label.rotation[2] + Math.sin(clock.elapsedTime * .35 + index) * .035; if (card.current) { const target = hovered ? 1.08 : 1; const next = card.current.scale.x + (target - card.current.scale.x) * Math.min(1, delta * 8); card.current.scale.setScalar(next); } });
  return <group ref={group} position={label.position} rotation={label.rotation}>{broken ? <Fragments color={label.color} /> : <mesh ref={card} onClick={(event) => { event.stopPropagation(); onBreak(); }} onPointerOver={(event) => { event.stopPropagation(); setHovered(true); document.body.style.cursor = "pointer"; }} onPointerOut={() => { setHovered(false); document.body.style.cursor = ""; }}><boxGeometry args={[1.72, .52, .1]} /><meshStandardMaterial color={label.color} roughness={.35} metalness={.12} /><mesh position={[0, 0, .056]}><planeGeometry args={[1.58, .395]} /><meshBasicMaterial map={labelTexture} transparent toneMapped={false} /></mesh></mesh>}</group>;
}
