# Todo-List

Node.js, Express, MySQL，RESTful API，CRUD

## Features
1.  使用者可以建立自己的帳號
2.  使用者可以使用自己的Facebook帳號登入
3.  使用者可以建立備忘清單
4.  使用者可以瀏覽全部的備忘錄清單
5.  使用者可以新增一筆備忘清單
6.  使用者可以刪除一筆備忘清單
7.  使用者可以修改一筆備忘清單

## 安裝環境

+ Node.js v10.15.3
+ Express ^4.17.1
+ Express-handlebars ^3.1.0
+ nodemon ^1.19.2
+ sequelize-cli ^5.5.1
+ sequelize ^5.19.2
+ mysql2 ^1.7.0
+ method-override ^3.0.0
+ bcryptjs ^2.4.3
+ connect-flash ^0.1.1
+ dotenv ^8.1.0
+ express-session ^1.16.2
+ method-override ^3.0.0
+ body-parser ^1.19.0
+ passport ^0.4.0
+ passport-facebook ^3.0.0
+ passport-local ^1.0.0

## 安裝步驟
1. 依照git clone下載資料夾
```
$ git clone https://github.com/KerwinJhong/todo-sequelize.git
```
2. 從終端機安裝npm套件，輸入以下指令
```
$ npm install
```
3. 設定config/config.json如下
```
"development": {
  "username": "root",
  "password": "<Your_MySQL_Workbench_password>",
  "database": "todo_sequelize",
  "host": "127.0.0.1",
  "dialect": "mysql",
  "operatorsAliases": false
}
```
4. 執行 migration
```
$ [~/todo-sequelize] $ npx sequelize db:migrate
```
5. 在根目錄建立 .env
```
FACEBOOK_ID=xxxxxxxx
FACEBOOK_SECRET=xxxxxxxx
FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
```
6. 執行專案
```
$ [~/expense-tracker] npm run dev
```
7. 輸入網址
```
http://localhost:3000
```

## 專案內容
+ Todo-List
![image](https://github.com/KerwinJhong/todo-sequelize/blob/master/KerwinWeb.png)

## 作者
[Kerwin Jhong](https://github.com/KerwinJhong)

