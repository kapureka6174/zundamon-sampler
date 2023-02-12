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
  note?: string
  audio?: string
  word: string
}

export const Data: DataType[] = [
  { word: '/' },
  { note: 'A1', audio: A1, word: 'あざす' },
  { note: 'B1', audio: B1, word: 'いっぞ' },
  { note: 'C1', audio: C1, word: 'おいす' },
  { note: 'D1', audio: D1, word: 'おっほ' },
  { note: 'E1', audio: E1, word: 'オムライス' },
  { note: 'F1', audio: F1, word: 'ゲス' },
  { note: 'G1', audio: G1, word: 'ケロッ' },
  { note: 'A2', audio: A2, word: 'コロコロ' },
  { note: 'B2', audio: B2, word: 'ずん' },
  { note: 'C2', audio: C2, word: 'チュ' },
  { note: 'D2', audio: D2, word: 'だっちゃ' },
  { note: 'E2', audio: E2, word: 'ですけど' },
  { note: 'F2', audio: F2, word: 'ですわ' },
  { note: 'G2', audio: G2, word: 'なのだ' },
  { note: 'A3', audio: A3, word: 'なすび' },
  { note: 'B3', audio: B3, word: 'にゃん' },
  { note: 'C3', audio: C3, word: 'ぱおん' },
  { note: 'D3', audio: D3, word: 'はいっ' },
  { note: 'E3', audio: E3, word: 'はっ' },
  { note: 'F3', audio: F3, word: 'ぴえん' },
  { note: 'G3', audio: G3, word: 'ヒヤシンス' },
  { note: 'A4', audio: A4, word: 'ピョン' },
  { note: 'B4', audio: B4, word: 'ピヨピヨ' },
  { note: 'C4', audio: C4, word: 'ぷっぴ' },
  { note: 'D4', audio: D4, word: 'ぽん' },
  { note: 'E4', audio: E4, word: 'マヨネーズ' },
  { note: 'F4', audio: F4, word: 'よっ' },
  { note: 'G4', audio: G4, word: 'ワロタ' },
  { note: 'A5', audio: A5, word: '何すか' },
  { note: 'B5', audio: B5, word: '今日は' },
  { note: 'C5', audio: C5, word: '太陽' }
]

export const audioData: Record<string, string> = {
  A1,
  B1,
  C1,
  D1,
  E1,
  F1,
  G1,
  A2,
  B2,
  C2,
  D2,
  E2,
  F2,
  G2,
  A3,
  B3,
  C3,
  D3,
  E3,
  F3,
  G3,
  A4,
  B4,
  C4,
  D4,
  E4,
  F4,
  G4,
  A5,
  B5,
  C5
}

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
