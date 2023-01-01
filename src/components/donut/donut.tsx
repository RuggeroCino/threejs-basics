import { useFrame, Vector3 } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Mesh, Texture } from 'three';

export interface IDonutProps {
    texture: Texture;
    position: Vector3;
    initialRotation: number;
}

export const Donut: React.FC<IDonutProps> = ({ texture, position, initialRotation }) => {
    const donutRef = useRef<Mesh>(null);
    const rotationProperty = initialRotation < 0.5 ? 'y' : 'x';

    useFrame((state, delta) => {
        if (donutRef.current) {
            donutRef.current.rotation[rotationProperty] += (delta / 2);
        }
    })

    return (
        <mesh
            position={position}
            rotation={[initialRotation,initialRotation,initialRotation]}
            scale={Math.random() + 0.2}
            ref={donutRef}
        >
            <torusGeometry args={[0.3, 0.2, 20, 45]} />
            <meshMatcapMaterial matcap={texture} />
        </mesh>
    )
}