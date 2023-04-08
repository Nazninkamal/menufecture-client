import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { StepLoader } from 'three/examples/jsm/loaders/StepLoader';
import { useParams } from 'react-router-dom';


const TreeFile = () => {
    const containerRef = useRef(null);
    const { fileId } = useParams();
  
    useEffect(() => {
      const container = containerRef.current;
  
      // Create the 3D scene, camera and renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(container.clientWidth, container.clientHeight);
  
      // Add the renderer to the container element
      container.appendChild(renderer.domElement);
  
      // Create the loader and load the .step file
      const loader = new StepLoader();
      loader.load(`/api/files/${fileId}`, function (object) {
        // Create the 3D mesh and add it to the scene
        object.traverse(function (child) {
          if (child.isMesh) {
            child.material = new THREE.MeshPhongMaterial({ color: 0xffffff });
            scene.add(child);
          }
        });
  
        // Position the camera to view the mesh
        const bbox = new THREE.Box3().setFromObject(object);
        const center = bbox.getCenter(new THREE.Vector3());
        const size = bbox.getSize(new THREE.Vector3());
        camera.position.set(center.x, center.y, center.z + size.z * 2);
        camera.lookAt(center);
  
        // Add lights to the scene
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
  
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(-1, 1, 1);
        scene.add(directionalLight);
  
        // Add orbit controls to the scene
        const controls = new OrbitControls(camera, renderer.domElement);
  
        // Render the scene
        const animate = () => {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };
        animate();
      });
    }, [fileId]);
    return (
        <div ref={containerRef} />
    );
};

export default TreeFile;