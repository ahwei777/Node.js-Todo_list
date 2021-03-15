# Node.js - Todo-List

![](https://)
> 網站連結 : https://

## 索引
- [簡介](#簡介)
- [使用技術](#使用技術)
- [API 文件](#API-文件)
- [資料庫關聯](#資料庫關聯)
- [部署平台](#部署平台)
- [專案架構](#專案架構)
- [專案安裝流程](#專案安裝流程)
- [聲明](#聲明)
- [版本紀錄](#版本紀錄)

## 簡介

## 使用技術
- 後端框架
    - Express.js
- 其他套件
    - bcrypt - 密碼雜湊處理
    - cors - 實現跨域請求
    - dotenv - 集中管理環境變數及避免不同程式共用
    - jsonwebtoken - 使用者身分驗證及權限管理
    - sequelize & sequelize-cli - 使用 ORM 方式操作資料庫並提升建構速度
    - swagger-ui-express & swagger-autogen - 自動化生成 API 文件並以 GUI 呈現

## API 文件
[Todo-List API Server]()（by [Swagger-autogen](https://www.npmjs.com/package/swagger-autogen)）

![](https://)

## 資料庫關聯

![](https://)

## 部署平台

- 部署於 AWS EC2 ubuntu
- 配合 Cloudflare 協助 SSL 加密
- 配合 nginx reverse proxy & PM2 於背景執行

## 專案架構

```
├── config/                    # 資料庫連線設定
├── controllers/               # 處理資料互動邏輯
├── middleware/                # 自定義 middleware
├── migrations/                # 資料庫變動紀錄
├── models/                    # 定義資料庫模型與關聯
├── routes/                    # 子路由設定
├── seeders/                   # demo 資料
├── index.js                   # 程式主要入口點
├── package.json               # module 及 script 設定
├── package-lock.json
└── README.md
```

## 專案安裝流程

1. clone 此專案至本機
``` 
$ git clone https://github.com/ahwei777/GaGiO-backend.git
```

2. 安裝相依套件
```
$ npm install
```

3. 建立 config/config.json，輸入本機資料庫帳號密碼及資料庫名稱
```
{
  "development": {
    "username": "本機資料庫帳號",
    "password": "本機資料庫密碼",
    "database": "本機資料庫名稱",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "",
    "password": "",
    "database": "",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "",
    "password": "",
    "database": "",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

4. 建立環境變數檔案 .env，內容為：
```
SECRET='任意自訂字串'
```

5. 於本機建立與 config.json 內同名資料庫

6. 於資料庫中建立 table
```
$ npm run migrate
```

7. 於資料庫中插入初始 demo 資料
```
$ npm run seed
```

8. 環境設置完畢，於本機運行專案（預設 port:8088）
```
$ npm run start
```

## 聲明
本專案僅作為個人練習用途，所引用之內容不作任何商業用途使用。

[MIT](https://choosealicense.com/licenses/mit/)

## 版本紀錄

- 1.0 - 2021.
	- 完成基本功能
  - 完成 API 及資料庫文件