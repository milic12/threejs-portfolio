import React, { useCallback, useEffect, useRef, useState } from 'react'
import { LoadingSpinner, SpinnerContainer } from './loader'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/loadGLTFAvatar'

const PersonalAvatar = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()
  const mixer = useRef(null) // Store the mixer here for animations

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [])

  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      refRenderer.current = renderer
      const scene = new THREE.Scene()

      const target = new THREE.Vector3(-0.5, 1.2, 0)
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      )

      const scale = scH * 0.0005 + 1.5
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = false
      controls.target = target

      // Load the GLB model
      loadGLTFModel(scene, '/avatar.glb', {
        receiveShadow: false,
        castShadow: false
      })
        .then(gltf => {
          // Check for animations and create an animation mixer
          if (gltf.animations && gltf.animations.length > 0) {
            mixer.current = new THREE.AnimationMixer(gltf.scene)
            const action = mixer.current.clipAction(gltf.animations[0]) // Play the first animation
            action.play()
          } else {
            console.warn('No animations found in the model.')
          }

          scene.add(gltf.scene)
          animate()
          setLoading(false)
        })
        .catch(error => {
          console.error('Error loading GLB model:', error)
          setLoading(false)
        })

      let req = null
      const clock = new THREE.Clock()

      const animate = () => {
        req = requestAnimationFrame(animate)

        const delta = clock.getDelta()

        // Update mixer on each frame if it exists
        if (mixer.current) {
          mixer.current.update(delta)
        }

        controls.update()
        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <SpinnerContainer ref={refContainer}>
      {loading && <LoadingSpinner />}
    </SpinnerContainer>
  )
}

export default PersonalAvatar
