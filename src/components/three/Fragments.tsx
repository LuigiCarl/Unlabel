"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

export function Fragments({ color }: { color: string }) {
  const group = useRef<Group>(null);
  useFrame((_, delta) => { if (group.current) { group.current.rotation.z += delta * .32; const next = Math.min(group.current.scale.x * (1 + delta * .18), 2.6); group.current.scale.setScalar(next); group.current.children.forEach((piece) => { piece.position.y -= delta * .16; }); } });
  return <group ref={group}>{Array.from({ length: 8 }, (_, index) => { const angle = (index / 8) * Math.PI * 2; return <mesh key={index} position={[Math.cos(angle) * .38, Math.sin(angle) * .18, (index % 3) * .04]} rotation={[angle, angle * .4, -angle]}><tetrahedronGeometry args={[.13 + (index % 2) * .05, 0]} /><meshStandardMaterial color={color} roughness={.35} metalness={.25} transparent opacity={.82} /></mesh>; })}</group>;
}
