# vite-and-vanilla

「npm create vite@latest」で Vanilla & JavaScript を選択した結果から、ディレクトリ構成にテコ入れをしたものです。
vite のバージョンは 4.0.4 です。
初期設定が面倒な場合に clone して活用できます。

## 手順

- Template 用のリポジトリになっていますので、まずは「Use this template」から自分のリポジトリとして作成します。
- 作成したリポジトリを git clone で取り寄せます。
- npm install します。
- head タグや body タグ内にあるテキストを削除します。
- style.scss 内のスタイリングを削除します。

### ディレクトリについて

通常はトップディレクトリに index.html が配置されますが、それを src フォルダ内へお引越しさせました。
ビルド時はトップディレクトリに dist フォルダが生成されます。

### node_modules について

- Sass を-D オプションで入れています。
