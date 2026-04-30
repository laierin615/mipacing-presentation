# 阿美族 Mipacing 漁獵文化科展網頁簡報

## 🎯 專案概要

臺東縣 Salimpo 阿美山海文化實驗小學 114 學年度科展網頁簡報。雙模式（🎤 簡報 / 🧒 自學），14 章內容含 5 個互動模擬器、潮汐動畫、Q&A 準備區、20 題小測驗、20 個科學名詞辭典。

- **線上網址**：https://laierin615.github.io/mipacing-presentation/
- **GitHub**：https://github.com/laierin615/mipacing-presentation
- **本機路徑**：`/Users/laierin/Downloads/04_阿美族文化資源/漁獵專題科展研究/mipacing-presentation/`

## 📂 檔案結構

```
mipacing-presentation/
├── index.html              # 主檔，所有 CSS+JS（~5000 行）
├── data/
│   ├── chapters.js         # 14 章內容（cover, why, qhypoth, methods, exp1-5, tek, glossary, quiz, qa, credits）
│   └── extras.js           # SCIENCE_TERMS、FISH_SPECIES、SCENE_SVGS、TIDE_BULGE_SVG 等
├── assets/
│   ├── img/doc/            # 8 張 docx 內嵌圖
│   ├── img/field/          # 9 張田野照片（IMG_*.jpg 壓縮版）
│   └── audio/narration/    # 30 個阿美語 m4a 音檔（語音功能已移除，檔案保留）
└── .github/workflows/pages.yml  # GitHub Pages 自動部署
```

## 🏗️ 技術棧

- **單一 HTML 檔**：Tailwind CDN + Chart.js CDN + Vanilla JS（不用打包工具）
- **資料分離**：chapters.js 跟 extras.js 由 `<script>` 載入
- **Hash routing**：`#/ch/0` 到 `#/ch/13`
- **localStorage**：記錄已造訪章節（`mipacing_visited`）

## 📖 章節結構（14 章）

| # | id | 標題 | featured | 特色 |
|---|---|------|---------|------|
| 0 | cover | 封面 | ⭐ | YouTube 影片嵌入 |
| 1 | why | 為什麼研究 Mipacing | ⭐ | 3 段繪本敘事 |
| 2 | qhypoth | 我們想問什麼？ | ⭐ | 假設+變因解釋 |
| 3 | methods | 研究架構 × Mipacing 完整流程 |  | 兩部分流程合併 |
| 4 | exp1 | 月亮告訴我們的事 | ⭐ | 潮汐動畫（太陽月地公轉自轉+月相+潮差） |
| 5 | exp2 | 魚槍的祕密 | ⭐ | 浮沉子互動 |
| 6 | exp3 | 水裡的眼睛會騙你 | ⭐ | 折射滑桿+9 種魚種辨識 |
| 7 | exp4 | 連續失手兩次就上岸 | ⭐ | CO₂ 計時器 |
| 8 | exp5 | 5 種漁法大比較 | ⭐ | 雷達圖 |
| 9 | tek | 耆老的話 = 科學的話 | ⭐ | 6 條對話對照 |
| 10 | glossary | 阿美語小辭典 |  | 30 詞 + 20 個科學名詞 + 鸚哥魚 3 影片 |
| 11 | quiz | 小測驗 |  | 20 題 |
| 12 | qa | Q&A 準備區 |  | 15 張卡，4 類 |
| 13 | credits | 致謝 | ⭐ | 5 位耆老 + 田野相簿 lightbox |

## 🎨 設計系統

### 5 種來源標籤（重要！每個內容區塊都該有）
- 🔬 `research` 來自原研究（綠）— 實驗實測、訪談原話
- 📚 `knowledge` 延伸知識補充（藍）— 物理常識、教學比喻
- 🔍 `verified` 文獻交叉驗證（黃）— 國際學術／自由潛水社群
- 💭 `interpret` 研究團隊整合（紫）— 對兩種知識的解讀
- 🎯 `practice` 練習用題目（紅）— 模擬問答、自我練習

helper：`srcTag('research')` 或 `srcTag('verified', '🔍 自訂文字')`

### 章節 Hero Banner
每章上方有大型漸層 banner（`hero-theme-{id}` 14 種主題色）+ 浮動 emoji icon + CHAPTER 編號 + 副標。

### 互動元件
- 5 個 mini-game：moonTide、buoyancy、refraction、co2timer、ecosystem
- 折射模擬器加情境提示
- 浮沉子達成中性浮力觸發 confetti
- 測驗 16/20+ 觸發 confetti

## 🚀 部署流程

```bash
cd /Users/laierin/Downloads/04_阿美族文化資源/漁獵專題科展研究/mipacing-presentation
git add -A
git -c user.email="laierin615@ttct.edu.tw" -c user.name="laierin615" commit -m "..."
git push
# GitHub Actions 自動部署，等 1-2 分鐘
```

驗證部署：
```bash
gh run list --repo laierin615/mipacing-presentation --limit 1
/usr/bin/curl -s -o /dev/null -w "HTTP %{http_code}\n" "https://laierin615.github.io/mipacing-presentation/"
```

## ⚠️ 重要規則（從過去對話累積）

1. **內容真實性**：千萬不能編撰。延伸內容一定要用 `srcTag()` 明確標示。雷達圖等基於文獻評估必須註明「相對評估、非實驗實測」。
2. **語音功能已移除**：`speakBtn()` 回傳空字串，不要加回去
3. **iframe 用 m4a 已不顯示**：保留檔案但 UI 不用
4. **國小友善表達**：FBP → 「想呼吸警報」，HR → 「心跳速度」等
5. **動畫排版**：所有字跟圖案不能重疊；月亮軌道頂 y=130 附近不要放標籤
6. **章節進度標記**：用 `mipacing_visited` localStorage 持久化

## 🐛 已知 quirk

- `mcp__Claude_Preview__preview_screenshot` 在頁面滾動後常常截到空白 — 用 `preview_eval` 透過 DOM 驗證代替
- `setupFadeIn` 用 IntersectionObserver + setTimeout fallback（preview tool 中 IO 不立即觸發）
- 動畫初始化用 `tryInit` 重試（最多 20 次）等 SVG 載入

## 📝 內容來源真實性審查（重要！）

來自原報告／實測：阿美語 30 詞、5 位耆老引言、實驗 1-4 數據、TEK 對照表

我團隊整合（要明示）：
- 實驗 5 雷達圖 0-10 分評分
- TEK 對話心得
- 「📚 延伸閱讀清單」（學術引用，非原研究引用）
- 折射章「3 情境分析」「魚標下墜」（多方文獻交叉驗證）
- Q&A 準備區（推測評審可能問題）
- 物理 4 步驟原理（教學常識，非原研究）

## 🎬 動畫關鍵數據

潮汐動畫（實驗 1）：
- 自轉 6 秒一圈、公轉 60 秒一圈，比例 10:1（真實 27.3:1，加速展示）
- 月相 8 段：🌑→🌒→🌓→🌔→🌕→🌖→🌗→🌘
- 振幅 = 0.4 + 0.6 × |cos(moonRad)|（朔/滿大潮 1.0；上下弦小潮 0.4）
- 太陽 (880, 220) r=55、地球 (280, 220) r=42、月亮軌道 rx=140 ry=90
