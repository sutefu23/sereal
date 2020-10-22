#Docker環境の起動
docker-compose up -d 


docker exec -it sereal_nuxt_1 sh #←ターミナルに入る

#####dockerターミナルで######

#パッケージインストール
yarn --cwd ./app install


#nuxtのビルド。（開発用起動はyarn --cwd ./app dev ）
yarn --cwd ./app build 

#静的ファイルの生成
yarn --cwd ./app generate 

#firebase
firebase login
firebase serve -o 0.0.0.0  # ←ローカルテスト起動
firebase deploy # ←デプロイ
