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
import { Sampler, Part, Transport } from 'tone'

const Canvas = (): JSX.Element => {
  const { width } = useWindowDimensions()
  const [wordData, setWordData] = useState<string[][]>(defaultWordData)
  const [isLoaded, setLoaded] = useState(false)
  const sampler = useRef<Sampler | null>(null)
  const part = useRef<Part | null>(null)
  const bgmPart = useRef<Part | null>(null)

  // sampler init
  useEffect(() => {
    sampler.current = new Sampler(audioData, {
      onload: () => {
        setLoaded(true)
        // part init
        part.current = new Part(
          (time, note) => {
            sampler.current?.triggerAttackRelease(note, '2n', time)
          },
          [['0:0:0', 'B1']]
        ).start()

        part.current.loop = true
        part.current.loopEnd = '8m'

        bgmPart.current = new Part(
          (time, note) => {
            sampler.current?.triggerAttackRelease(note, '8m', time)
          },
          [['0:0:0', 'A0']]
        ).start()

        bgmPart.current.loop = true
        bgmPart.current.loopEnd = '8m'

        Transport.bpm.value = 120
        Transport.loop = true
        Transport.loopEnd = '8m'
        Transport.start()
      }
    }).toDestination()
  }, [])

  // responsive
  useEffect(() => {
    setWordData(width >= 920 ? defaultWordData : responsiveWordData)
  }, [width])

  const handleClick = (e: KonvaEventObject<MouseEvent>): void => {
    // add or remove note
    const note: string | undefined = Data.find(
      data => data.word === e.target.name()
    )?.note
    const positionArray = String(Transport.position).split(':')
    positionArray[2] = Math.floor(Number(positionArray[2])).toString()
    const position = positionArray.join(':')
    if (part.current?.at(position) !== null) part.current?.remove(position)
    if (note !== undefined && e.target.name() !== '/') {
      part.current?.add(position, note)
      sampler.current?.triggerAttack(note)
    }

    // change bg color
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
