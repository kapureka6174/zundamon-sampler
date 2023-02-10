import { type KonvaEventObject } from 'konva/lib/Node'
import { Shape } from 'konva/lib/Shape'
import { Stage, Layer, Rect, Text, Group } from 'react-konva'
import { defaultWordData, responsiveWordData } from './assets/audio'
import useWindowDimensions from './useWindowDimensions'
import { useState, useEffect } from 'react'

const Canvas = (): JSX.Element => {
  const { width } = useWindowDimensions()
  const [wordData, setWordData] = useState<string[][]>(defaultWordData)

  useEffect(() => {
    setWordData(width >= 920 ? defaultWordData : responsiveWordData)
  }, [width])

  const handleClick = (e: KonvaEventObject<MouseEvent>): void => {
    // console.log(e.target.attrs.text)
    const rect = e.target
    if (rect instanceof Shape) {
      rect?.fill('yellow')
      rect?.to({
        fill: 'white',
        duration: 0.05
      })
    }
  }

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
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
