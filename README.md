# Node.js - Todo-List

![](https://github.com/ahwei777/for-GaGiO-README/blob/main/toods/todos.png?raw=true)
> 網站連結 : https://todos.ahwei777.tw/login  
測試帳號： jeff / jeff

## 索引
- [簡介](#簡介)
- [使用技術](#使用技術)
- [部署平台](#部署平台)
- [專案架構](#專案架構)
- [專案安裝流程](#專案安裝流程)
- [聲明](#聲明)
- [版本紀錄](#版本紀錄)

## 簡介
使用框架 Express.js 練習的簡易 MVC 架構 todo-list。

## 使用技術
- 後端框架
    - Express.js
- 其他套件
    - bcrypt - 密碼雜湊處理
    - cors - 實現跨域請求
    - connect-flash - 管理跨頁面提示訊息（成功/錯誤）
    - dotenv - 集中管理環境變數並避免不同程式共用
    - express-session - 管理登入狀態
    - hbs - 渲染模板引擎
    - sequelize & sequelize-cli - 使用 ORM 方式操作資料庫並提升開發速度

## 部署平台

- 部署於 AWS EC2 ubuntu
- 配合 nginx reverse proxy & PM2 於背景執行

## 專案架構

```
├── config/                    # 資料庫連線設定
├── controllers/               # 定義資料互動邏輯
├── middleware/                # 自訂 middleware
├── migrations/                # 資料庫變動紀錄
├── models/                    # 定義資料庫模型與關聯
├── routes/                    # 子路由設定
├── seeders/                   # demo 資料
├── static/                    # 靜態資源（.css／.js／圖片）
├── views/                     # 畫面模板（.hbs）
├── index.js                   # 程式主要入口點
├── package.json               # module 及 script 設定
├── package-lock.json
└── README.md
```

## 專案安裝流程

1. clone 此專案至本機
``` 
$ git clone https://github.com/ahwei777/Node.js-Todo_list.git
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

6. 於資料庫中建立 table 並插入初始 demo 資料
```
$ npm run init
```

7. 環境設置完畢，於本機運行專案（預設 port：8088）
```
$ npm run start
```

## 聲明
本專案僅作為個人練習用途，所引用之內容不作任何商業用途使用。

[MIT](https://choosealicense.com/licenses/mit/)
