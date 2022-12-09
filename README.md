# vite-and-vanilla

「npm create vite@latest」で Vanilla & JavaScript を選択した結果から、ディレクトリ構成にテコ入れをしたものです。
作成当時の vite のバージョンは 3.2.3 です。
初期設定が面倒な場合に clone して活用できます。

## ディレクトリ

通常はトップディレクトリに index.html が配置されますが、それを src フォルダ内へお引越しさせました。
ビルド時はトップディレクトリに dist フォルダが生成されます。

## node_modules

- Sass を-D オプションで入れています。
