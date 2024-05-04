# 状態管理ライブラリを比較するためのプロジェクト

どの状態管理ライブラリを利用するかを判断するために、Todo リストを作成したものである。
UI はどれも同じなので、src/app/component/配下に置いている。
データの管理方法だけを各ライブラリで記載しているものである。
(src/app/各ライブラリ名)

## 対象ライブラリ

- Jotai
- Zustand
- Recoil

## 成果物

URL : https://react-state-manage-lib-compare.vercel.app/

## 所感

Jotai か Zustand が使い勝手が良いと思う。

Jotai は atom で完結しているので、各オブジェクトの操作が行いやすい。
一方で Zustand は状態と操作をそれぞれ定義した上で、同一 Store で管理する方法が卓越しているような気がする。
※ 個人的に、フォルダ構造も綺麗にできているのでは・・・。
