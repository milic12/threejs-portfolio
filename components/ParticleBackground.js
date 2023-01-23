import Particles from 'react-particles'
import configParticles from './config/particlesConfig'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'

const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(() => {}, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={configParticles}
    />
  )
}

export default ParticlesBackground
