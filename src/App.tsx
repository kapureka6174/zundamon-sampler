import Canvas from './Canvas'
import * as Tone from 'tone'
import { useState } from 'react'

const App = (): JSX.Element => {
  const [checked, setChecked] = useState(false)
  return (
    <div>
      {!checked ? (
        <button
          type="button"
          onClick={() => {
            Tone.start()
              .then(value => {
                setChecked(true)
              })
              .catch(err => {
                console.log(err)
              })
          }}
        >
          スタート
        </button>
      ) : (
        <Canvas />
      )}
    </div>
  )
}

export default App
