import { Canvas, useLoader, Vector3 } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import classNames from 'classnames';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import React from 'react';
import { Donut } from '../donut';
import { Text } from '../text';
import './application.css';

export interface IApplicationProps {
    /**
     * Additional classes for the component.
     */
    className?: string;
};

const donutsNumber = 1000;
    
const getDonutPosition = ():Vector3 => [
    (Math.random() - 0.5) * 40,
    (Math.random() - 0.5) * 40,
    (Math.random() - 0.5) * 40,
];

export const Application: React.FC<IApplicationProps> = ({ className }) => {
    const texture = useLoader(TextureLoader, '/textures/matcaps/matcap-2.png');
    
    return (
        <div className={classNames('application', className)}>
            <Canvas camera={{ position: [1, 1, 2], fov: 95, near: 0.1, far: 100 }}>
                <OrbitControls maxDistance={8} minDistance={1} />
                {[...Array(donutsNumber).keys()].map((index) => (
                    <Donut
                        key={index}
                        texture={texture}
                        position={getDonutPosition()}
                        initialRotation={Math.random()}
                    />
                ))}
                <Center>
                    <Text text="Ruggero Cino" texture={texture} />
                </Center>
            </Canvas>
        </div>
    );
};