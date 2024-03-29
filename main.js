let scene, camera, renderer, cube;

const init = () => {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.SphereGeometry(2, 200, 200);
  // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  const texture = new THREE.TextureLoader().load('textures/MoonText.jpg');
  const material = new THREE.MeshBasicMaterial({ map: texture });

  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;
};

const animate = () => {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.003;
  cube.rotation.y += 0.003;

  renderer.render(scene, camera);
};

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener('resize', onWindowResize, false);

init();
animate();
