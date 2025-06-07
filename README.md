# 光る剣 (micro:bit)

このプロジェクトは、BBC micro:bitとNeoPixel LEDを使用した光る剣を実装したものです。

## 概要

micro:bitの動きセンサーを活用し、デバイスの傾きや動きに応じてLEDストリップの色が変化する光る剣のおもちゃです。LEDを複数のセクションに分けて制御することで、より複雑で美しい光のエフェクトを実現しています。

## 機能

- 傾きや動きに応じた色の変化
- 複数のLEDセクションによる多彩な表現
- 剣先と柄部分で異なる色の表示
- 動きに連動した光のエフェクト
- 低消費電力モード

## 使用方法

1. [MakeCode エディタ](https://makecode.microbit.org/)を開く
2. 「読み込む」をクリックし、このリポジトリからダウンロードした .hex ファイルを選択
3. または、「インポート」→「URLから読み込む」を選択し、このリポジトリのURLを入力
4. micro:bitにダウンロードして使用
5. NeoPixel LEDストリップを接続し、剣の形状に取り付けて使用

## ハードウェア要件

- BBC micro:bit
- NeoPixel LEDストリップ（30個のLED、WS2812B推奨）
- 電源（単三電池3-4本または充電式バッテリー）
- ジャンパーワイヤー
- 剣の形状の外装（透明または半透明の素材推奨）

## 配線方法

```
micro:bit Pin 0 --- NeoPixel DIN（データ入力）
micro:bit GND ---- NeoPixel GND（グランド）
外部電源 -------- NeoPixel VCC（電源）
外部電源GND ----- micro:bit GND
```

注意: 30個のLEDを駆動するには外部電源が必要です。

## 操作方法

### 動きセンサー操作
- 左に傾ける: 剣先が緑色、柄が青色
- 右に傾ける: 剣先が青色、柄が緑色
- 上に傾ける（ロゴが上）: 剣先が赤色、柄が青色
- 下に傾ける（ロゴが下）: 剣先が黄色、柄が青色

## コードの説明

```typescript
// NeoPixel LEDストリップの初期化（Pin 0に接続、30個のLED）
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
// LEDを2つのセクションに分割
let range0: neopixel.Strip = strip.range(0, 7)  // 剣先部分（0-6番目のLED）
let range1: neopixel.Strip = strip.range(7, 8)  // 柄部分（7-29番目のLED）

// 各種ジェスチャーに対する色の設定
input.onGesture(Gesture.TiltLeft, function () {
    range0.showColor(neopixel.colors(NeoPixelColors.Green))
    range1.showColor(neopixel.colors(NeoPixelColors.Blue))
})
input.onGesture(Gesture.TiltRight, function () {
    range0.showColor(neopixel.colors(NeoPixelColors.Blue))
    range1.showColor(neopixel.colors(NeoPixelColors.Green))
})
input.onGesture(Gesture.LogoUp, function () {
    range0.showColor(neopixel.colors(NeoPixelColors.Red))
    range1.showColor(neopixel.colors(NeoPixelColors.Blue))
})
input.onGesture(Gesture.LogoDown, function () {
    range0.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range1.showColor(neopixel.colors(NeoPixelColors.Blue))
})
```

## カスタマイズ

コード内の以下の部分を編集することで、動作をカスタマイズできます：

- LEDの総数（現在は30個）
- セクションの分割方法（現在は0-6と7-29）
- 各ジェスチャーに対応する色
- 特殊エフェクトの追加（ボタン操作など）
- アニメーションパターンの追加

## 拡張アイデア

- 音センサーとの連携で音に反応する剣
- 加速度に応じた明るさの変化
- 複数の剣を無線通信で連携させる
- バッテリー残量表示機能
- より複雑な光のパターンやアニメーション

## 製作のヒント

1. 透明なプラスチックパイプにLEDストリップを挿入
2. 剣の柄部分にmicro:bitと電池を収納
3. 半透明の素材でディフューザーを作成し、光を拡散
4. 衝撃から保護するためのクッション材を追加

## 注意事項

- LEDは明るいので、直接見ないようにしてください
- 多数のLEDを使用するため、必ず外部電源を使用してください
- 剣を振り回す際は周囲の安全に注意してください

## ライセンス

MIT

## 作者

msyk9038
