import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function loadGLTFModel(
  scene,
  path,
  options = { receiveShadow: false, castShadow: false }
) {
  const loader = new GLTFLoader()

  return new Promise((resolve, reject) => {
    loader.load(
      path,
      gltf => {
        const object = gltf.scene
        object.name = 'gltfModel'
        object.receiveShadow = options.receiveShadow
        object.castShadow = options.castShadow
        scene.add(object)

        resolve(gltf) // Resolve the promise with the gltf object
      },
      undefined,
      error => {
        reject(error) // Reject the promise if there's an error
      }
    )
  })
}
