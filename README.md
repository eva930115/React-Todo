# React 待辦事項清單
#### 2025/11/21


一個以 React + Vite 建立的簡約待辦清單，具備新增、刪除與完成狀態切換等基本功能，介面採卡片式設計並透過 `react-icons` 提供編輯/刪除圖示。

## 功能特色

- 管理本地 `useState` 待辦清單，預設提供兩筆示範資料。
- 於輸入欄輸入內容並送出即可新增待辦 (`CreateForm`)。
- 點擊待辦文字可切換完成狀態 (`taggleCompelted`)。
- 點擊垃圾桶圖示可刪除單筆待辦 (`deletTodo`)。
- 完成的待辦會附加 `completed` 樣式，方便視覺辨識。

## 專案結構

```
src/
├─ App.jsx              # 入口元件
├─ App.css              # 全域樣式
├─ main.jsx             # React DOM 入口
└─ components/
   ├─ TodoWrapper.jsx   # 包裝元件、狀態與行為
   ├─ CreateForm.jsx    # 新增待辦表單
   └─ Todo.jsx          # 單筆待辦項目
```

## 技術堆疊

- React 19
- Vite 7
- react-icons（UI 圖示）
- ESLint 9（基本靜態檢查）

## 環境需求

- Node.js 18 以上
- npm（或其他相容的套件管理工具）

## 安裝與執行

1. 安裝依賴：
   ```
   npm install
   ```
2. 啟動開發伺服器：
   ```
   npm run dev
   ```
   預設於 `http://localhost:5173` 服務。
3. 打包正式版本：
   ```
   npm run build
   ```
4. 預覽打包結果：
   ```
   npm run preview
   ```

## 開發說明

- 所有待辦狀態皆儲存在 `TodoWrapper`，並透過 props 下發給 `Todo` 與 `CreateForm`。
- 表單送出時會先呼叫 `preventDefault`，避免重新整理頁面。
- 切換完成狀態會複寫對應 todo 的 `isCompleted`，再由 CSS 控制樣式。

## 後續可優化方向

- 加入編輯功能與完成度篩選。
- 改以 `crypto.randomUUID()` 或其他穩定 ID。
- 將資料持久化（localStorage / 後端 API）。
- 補充元件測試或 E2E 測試腳本。
