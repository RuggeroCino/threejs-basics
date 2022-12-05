import React from 'react';
import { Text3D } from '@react-three/drei';
import { Texture } from 'three';

export interface ITextProps {
    text: string;
    texture: Texture;
    size: number;
};

export const Text: React.FC<ITextProps> = ({ text, size, texture }) => {
    return (
        <Text3D
            font="/typeface/helvetiker_regular.typeface.json"
            size={size}
            height={0.3}
            curveSegments={12}
            bevelEnabled={true}
            bevelThickness={0.03}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={1}
        >
            {text}
            <meshMatcapMaterial matcap={texture} />
        </Text3D>
    )
}