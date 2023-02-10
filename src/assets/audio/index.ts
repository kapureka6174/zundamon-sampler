import A1 from './あざす.wav'
import B1 from './いっぞ.wav'
import C1 from './おいす.wav'
import D1 from './おっほ.wav'
import E1 from './オムライス.wav'
import F1 from './ゲス.wav'
import G1 from './ケロッ.wav'
import A2 from './コロコロ.wav'
import B2 from './ずん.wav'
import C2 from './チュ.wav'
import D2 from './だっちゃ.wav'
import E2 from './ですけど.wav'
import F2 from './ですわ.wav'
import G2 from './なのだ.wav'
import A3 from './なすび.wav'
import B3 from './にゃん.wav'
import C3 from './ぱおん.wav'
import D3 from './はいっ.wav'
import E3 from './はっ.wav'
import F3 from './ぴえん.wav'
import G3 from './ヒヤシンス.wav'
import A4 from './ピョン.wav'
import B4 from './ピヨピヨ.wav'
import C4 from './ぷっぴ.wav'
import D4 from './ぽん.wav'
import E4 from './マヨネーズ.wav'
import F4 from './よっ.wav'
import G4 from './ワロタ.wav'
import A5 from './何すか.wav'
import B5 from './今日は.wav'
import C5 from './太陽.wav'

interface DataType {
  audio?: string
  word: string
}

export const Data: DataType[] = [
  { word: '/' },
  { audio: A1, word: 'あざす' },
  { audio: B1, word: 'いっぞ' },
  { audio: C1, word: 'おいす' },
  { audio: D1, word: 'おっほ' },
  { audio: E1, word: 'オムライス' },
  { audio: F1, word: 'ゲス' },
  { audio: G1, word: 'ケロッ' },
  { audio: A2, word: 'コロコロ' },
  { audio: B2, word: 'ずん' },
  { audio: C2, word: 'チュ' },
  { audio: D2, word: 'だっちゃ' },
  { audio: E2, word: 'ですけど' },
  { audio: F2, word: 'ですわ' },
  { audio: G2, word: 'なのだ' },
  { audio: A3, word: 'なすび' },
  { audio: B3, word: 'にゃん' },
  { audio: C3, word: 'ぱおん' },
  { audio: D3, word: 'はいっ' },
  { audio: E3, word: 'はっ' },
  { audio: F3, word: 'ぴえん' },
  { audio: G3, word: 'ヒヤシンス' },
  { audio: A4, word: 'ピョン' },
  { audio: B4, word: 'ピヨピヨ' },
  { audio: C4, word: 'ぷっぴ' },
  { audio: D4, word: 'ぽん' },
  { audio: E4, word: 'マヨネーズ' },
  { audio: F4, word: 'よっ' },
  { audio: G4, word: 'ワロタ' },
  { audio: A5, word: '何すか' },
  { audio: B5, word: '今日は' },
  { audio: C5, word: '太陽' }
]

const DEFEAULT_COLUMN = 8
const RESPONSIVE_COLUMN = 4

const initData = (column: number): string[][] => {
  const wordData = Data.map(data => data.word)
  const data = []
  for (let i = 0; i < wordData.length / column; i++) {
    data.push(wordData.slice(i * column, i * column + column))
  }
  return data
}

export const defaultWordData = initData(DEFEAULT_COLUMN)
export const responsiveWordData = initData(RESPONSIVE_COLUMN)
