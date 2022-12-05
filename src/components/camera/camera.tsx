import React, { useRef } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { Camera as ICamera } from '@react-three/fiber';

export interface ICameraProps {};

export const Camera: React.FC<ICameraProps> = () => {
    const cameraRef = useRef<ICamera>();

    return (
        <PerspectiveCamera position={[-3, 1, 5]} fov={95} near={0.1} far={100} makeDefault={true} ref={cameraRef} />
    );
};