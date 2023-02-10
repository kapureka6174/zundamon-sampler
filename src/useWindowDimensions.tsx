import { useState, useEffect } from 'react'

interface windowDimensions {
  width: number
  height: number
}

const useWindowDimensions = (): windowDimensions => {
  const getWindowDimensions = (): windowDimensions => {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height
    }
  }

  const [windowDimensions, setWindowDimensions] = useState<windowDimensions>(
    getWindowDimensions()
  )
  useEffect(() => {
    const onResize = (): void => {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])
  return windowDimensions
}

export default useWindowDimensions
