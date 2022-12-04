import React from 'react';
import { Text3D } from '@react-three/drei';
import { Texture } from 'three';

export interface ITextProps {
    text: string;
    texture: Texture;
};

export const Text: React.FC<ITextProps> = ({ text, texture }) => {
    return (
        <Text3D
            font="/typeface/helvetiker_regular.typeface.json"
            size={0.5}
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