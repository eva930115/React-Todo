# React 待辦事項清單
#### 2025/11/21 [參考教學](https://www.youtube.com/watch?v=aBTiZfShe-4)


一個以 React + Vite + Express + MongoDB 建立的全端待辦清單應用，具備新增、編輯、刪除與完成狀態切換等功能，資料持久化儲存於 MongoDB 資料庫，介面採卡片式設計並透過 `react-icons` 提供編輯/刪除圖示。

## 功能特色

- 連接 MongoDB 資料庫，所有待辦資料持久化儲存。
- 於輸入欄輸入內容並送出即可新增待辦 (`CreateForm`)。
- 點擊編輯圖示可進入編輯模式，修改待辦內容 (`EditTodo`)。
- 點擊待辦文字可切換完成狀態 (`taggleCompelted`)。
- 點擊垃圾桶圖示可刪除單筆待辦 (`deletTodo`)。
- 完成的待辦會附加 `completed` 樣式，方便視覺辨識。

## 專案結構

```
React-Todo/
├─ backend/
│  ├─ index.js          # Express 後端伺服器、MongoDB 連接與 API 路由
│  └─ package.json      # 後端依賴套件
├─ src/
│  ├─ App.jsx           # 入口元件
│  ├─ App.css           # 全域樣式
│  ├─ main.jsx          # React DOM 入口
│  └─ components/
│     ├─ TodoWrapper.jsx # 包裝元件、狀態管理與 API 呼叫
│     ├─ CreateForm.jsx  # 新增待辦表單
│     ├─ Todo.jsx        # 單筆待辦項目
│     └─ EditTodo.jsx    # 編輯待辦表單
└─ package.json         # 前端依賴套件
```

## 技術堆疊

### 前端
- React 19
- Vite 7
- react-icons（UI 圖示）
- ESLint 9（基本靜態檢查）

### 後端
- Node.js + Express 5
- MongoDB + Mongoose 9
- CORS（跨域資源共享）
- dotenv（環境變數管理）

## 環境需求

- Node.js 18 以上
- npm（或其他相容的套件管理工具）
- MongoDB 資料庫（本地安裝或 MongoDB Atlas 雲端服務）

## 安裝與執行

### 1. 環境變數設定

在 `backend/` 目錄下建立 `.env` 檔案，設定 MongoDB 連接字串：

```
MONGO_URL=your_mongodb_connection_string
```

例如本地 MongoDB：
```
MONGO_URL=mongodb://localhost:27017/todo-app
```

或 MongoDB Atlas：
```
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/todo-app
```

### 2. 安裝依賴

**前端：**
```bash
npm install
```

**後端：**
```bash
cd backend
npm install
```

### 3. 啟動應用

**啟動後端伺服器（終端機 1）：**
```bash
cd backend
npm run dev
```
後端服務於 `http://localhost:3001` 運行。

**啟動前端開發伺服器（終端機 2）：**
```bash
npm run dev
```
前端預設於 `http://localhost:5173` 服務。

### 4. API 端點

後端提供以下 RESTful API：

- `GET /todos` - 取得所有待辦事項
- `POST /todos` - 新增待辦事項
- `PUT /todos/:id` - 更新待辦事項（內容或完成狀態）
- `DELETE /todos/:id` - 刪除待辦事項

### 5. 打包與預覽

**打包正式版本：**
```bash
npm run build
```

**預覽打包結果：**
```bash
npm run preview
```

## 開發說明

- 所有待辦狀態皆儲存在 `TodoWrapper` 的 `useState`，並透過 props 下發給子元件。
- 初次載入時透過 `useEffect` 從後端 API 取得所有待辦資料。
- 所有 CRUD 操作（新增、讀取、更新、刪除）皆透過 `fetch` API 與後端通訊。
- 表單送出時會先呼叫 `preventDefault`，避免重新整理頁面。
- 編輯功能透過 `isEditing` 狀態切換顯示模式，點擊編輯圖示進入編輯表單。
- 切換完成狀態會透過 PUT 請求更新資料庫，再由 CSS 控制樣式顯示。
- 後端使用 Mongoose Schema 定義待辦資料結構（content、isCompleted、createdAt）。

## 後續可優化方向

- 加入完成度篩選功能（全部/進行中/已完成）。
- 加入錯誤處理與載入狀態提示。
- 加入資料驗證（前端與後端）。
- 實作使用者認證與多使用者支援。
- 補充元件測試或 E2E 測試腳本。
- 優化 API 回應格式與錯誤訊息。
