import { Canvas, useLoader, Vector3 } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import classNames from 'classnames';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import React from 'react';
import { Donut } from '../donut';
import { Text } from '../text';
import { Camera } from '../camera';
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
    const textTexture = useLoader(TextureLoader, '/textures/matcaps/matcap-1.png');
    const donutTexture = useLoader(TextureLoader, '/textures/matcaps/matcap-1.png');
    const hashtagTexture = useLoader(TextureLoader, '/textures/matcaps/matcap-2.png');
    
    return (
        <div className={classNames('application', className)}>
            <Canvas>
                <Camera />
                <OrbitControls maxDistance={8} minDistance={1} />
                {[...Array(donutsNumber).keys()].map((index) => (
                    <Donut
                        key={index}
                        texture={donutTexture}
                        position={getDonutPosition()}
                        initialRotation={Math.random()}
                    />
                ))}
                <Center>
                    <Text text="Ruggero Cino" texture={textTexture} size={0.5} />
                </Center>
                <Center position={[0, -0.6, 0]}>
                    <Text text="#threejsjourney" texture={hashtagTexture} size={0.25} />
                </Center>
            </Canvas>
        </div>
    );
};