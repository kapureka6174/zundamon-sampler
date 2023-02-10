import { type KonvaEventObject } from 'konva/lib/Node'
import { Shape } from 'konva/lib/Shape'
import { Stage, Layer, Rect, Text, Group } from 'react-konva'
import {
  Data,
  audioData,
  defaultWordData,
  responsiveWordData
} from './assets/audio'
import useWindowDimensions from './useWindowDimensions'
import { useState, useEffect, useRef } from 'react'
import { Sampler } from 'tone'

const Canvas = (): JSX.Element => {
  const { width } = useWindowDimensions()
  const [wordData, setWordData] = useState<string[][]>(defaultWordData)
  const [isLoaded, setLoaded] = useState(false)
  const sampler = useRef<Sampler | null>(null)

  useEffect(() => {
    sampler.current = new Sampler(audioData, {
      onload: () => {
        setLoaded(true)
      }
    }).toDestination()
  }, [])

  useEffect(() => {
    setWordData(width >= 920 ? defaultWordData : responsiveWordData)
  }, [width])

  const handleClick = (e: KonvaEventObject<MouseEvent>): void => {
    const note: string | undefined = Data.find(
      data => data.word === e.target.name()
    )?.note

    if (note !== undefined) {
      sampler.current?.triggerAttack(note)
    }

    const rect = e.target
    if (rect instanceof Shape) {
      rect?.fill('yellow')
      rect?.to({
        fill: 'white',
        duration: 0.03
      })
    }
  }

  return (
    <Stage
      visible={isLoaded}
      width={window.innerWidth}
      height={window.innerHeight}
    >
      <Layer opacity={0.4}>
        {wordData.map((wordLists, y) => {
          return wordLists.map((word, x) => {
            return (
              <Group
                key={x}
                x={x * (window.innerWidth / wordLists.length)}
                y={y * (window.innerHeight / wordData.length)}
                onClick={(e: KonvaEventObject<MouseEvent>) => {
                  handleClick(e)
                }}
              >
                <Text
                  width={window.innerWidth / wordLists.length}
                  height={window.innerHeight / wordData.length}
                  align="center"
                  verticalAlign="middle"
                  fontSize={24}
                  text={word}
                  stroke="black"
                />
                <Rect
                  width={window.innerWidth / wordLists.length}
                  height={window.innerHeight / wordData.length}
                  stroke="black"
                  fill="white"
                  name={word}
                />
              </Group>
            )
          })
        })}
      </Layer>
    </Stage>
  )
}

export default Canvas
