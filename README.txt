#Docker環境の起動
docker-compose up -d 


docker exec -it sereal_nuxt_1 sh #←ターミナルに入る

#####dockerターミナルで######

#パッケージインストール
yarn --cwd ./app install


#nuxtのビルド。（開発用起動はyarn --cwd ./app dev ）
yarn --cwd ./app build 


#firebase
firebase login
firebase serve # ←ローカルテスト起動
firebase deploy # ←デプロイ
