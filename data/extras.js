// 進階學術內容、漁法比較、Q&A 準備區
// 與 chapters.js 配合使用

// ============================================================
// 📚 深入學術內容（4 個實驗）
// ============================================================
const ACADEMIC_DEEPDIVE = {
  exp1: {
    formula: {
      math: 'ΔH = H_max − H_min　|　F ∝ (M_moon / r³) × cos(2θ)',
      explanation: '日月地連成一線時引潮力疊加產生大潮；上下弦月時抵消產生小潮。'
    },
    derivation: [
      '大潮（Spring tide）：朔望時日月引力疊加，臺東海域實測潮差 1.8–2.2 m。',
      '小潮（Neap tide）：上下弦月時太陽與月球引潮力垂直抵消，潮差降至 0.8–1.2 m。',
      '半日潮週期：地球自轉一圈，每點面對與背向月球各產生一次高潮，週期 12h 25min。',
      '潮間帶魚類在「漲到一半／退到一半」最活躍，因水流速最大，底棲生物被沖出石縫。',
      '「無月之夜」= 朔月大潮 + 黑暗（魚不易發現獵人影子）= Mipacing 最佳窗口。'
    ],
    errorSources: [
      '訪談記憶誤差：耆老可能將數十年印象與近年混淆，需 ≥5 位交叉訪談。',
      '潮位站空間外推：成功港、新港潮位站距 Salimpo 部落 5–10 km，需加註誤差。',
      '氣象潮干擾：颱風或低氣壓會使潮位多 30–50 cm。',
      '魚類行為多因子：水溫、光照、繁殖期均會影響活動，難單獨歸因月相。',
      '阿美語月相詞對應的天文月相可能因部落而異，需文獻交叉驗證。'
    ],
    advancedDiscussion: [
      '生物時鐘與月相鎖相：Takemura et al. (2010) 證實熱帶魚生殖節律可被月光「夾帶」（entrainment）。',
      'TEK 與漁業管理：Berkes 提出傳統生態知識可補充科學在「長時序、低頻事件」的盲點，是 SDG 14 重點。',
      '蔡政良（2023）證實阿美族 mikesi/mipacin 知識體系包含 200+ 種魚種辨識。',
      '氣候變遷下傳統曆法挑戰：海平面與洋流改變使部分月相—魚類規則失準。',
      '公民科學：可將部落觀察上傳 iNaturalist，讓 TEK 進入主流科學循環。'
    ],
    citations: [
      { author: '蔡政良', year: 2015, title: 'Micinko／Mipacin（打魚）：阿美族的海洋文化與潛水射魚文化初探', source: '《原住民族文獻》第 23 期，頁 2–6' },
      { author: '蔡政良', year: 2023, title: '第五道浪之後：阿美族水下獵人的海洋知識與傳統海域的保育與管理', source: '臺東：國立臺灣史前文化博物館' },
      { author: 'Takemura, A., Rahman, M.S., & Park, Y.J.', year: 2010, title: 'External and internal controls of lunar-related reproductive rhythms in fishes', source: 'Journal of Fish Biology, 76(1), 7–26' },
      { author: 'Berkes, F.', year: 2018, title: 'Sacred Ecology (4th ed.)', source: 'New York: Routledge' },
      { author: '中央氣象署', year: 2025, title: '114 年潮汐表', source: '臺北：交通部中央氣象署' }
    ]
  },

  exp2: {
    formula: {
      math: 'F_浮 = ρ_液 × V_排 × g　（阿基米德原理）　|　中性浮力：F_浮 = W_total',
      explanation: '物體在液體中受到的浮力等於它排開液體的重量；當浮力恰等於物體總重時，物體即懸停水中。'
    },
    derivation: [
      '密度比較決定沉浮：物體密度 < 液體 → 浮；> → 沉；= → 中性懸停。',
      '木頭浮的原因：芭樂木／櫸木密度 0.6–0.7 g/cm³ ≪ 海水 1.025 g/cm³，脫手仍會浮回。',
      '海水比淡水浮力大：實驗 17.5 g vs 17.4 g（差 0.1 g），換算 65 kg 潛水員多 1.6 kg 浮力。',
      '配重黃金比：完整裝備潛水員海水中需總體重 5–10% 的鉛塊。',
      '體積控制深度：肺部吸氣 → 浮力增；吐氣 → 下沉。耆老靠呼吸量微調深度，節省氧氣。'
    ],
    errorSources: [
      '電子秤精度：家用秤通常 ±0.1 g，量測 17.4 vs 17.5 g 在誤差邊緣。',
      '鹽水濃度配製：自製模擬海水若鹽量 ±5%，會掩蓋真實變化。',
      '水溫影響密度：每升 10°C 密度降 0.003 g/cm³。',
      '木材含水率：泡水後芭樂木吸水使密度上升。',
      '氣泡附著：浮沉子表面殘留氣泡會使浮力測量偏大。'
    ],
    advancedDiscussion: [
      '生物啟發工程：魚的鰾（swim bladder）即天然浮力調節器，潛水艇用「壓縮空氣艙」原理相同。',
      '海洋觀測浮標：Argo 計畫 4000+ 顆浮標利用密度配重達「等密度面停留」。',
      '永續材料學：木製魚槍 100% 生物降解；塑膠漁具會碎成微塑膠。',
      '阿基米德原理（公元前 250 年）至今仍是船舶、熱氣球、水庫的基礎。',
      '彈性能轉換：橡皮筋魚槍將彈性位能 ½kx² 轉動能 ½mv²。'
    ],
    citations: [
      { author: 'Halliday, D., Resnick, R., & Walker, J.', year: 2021, title: 'Fundamentals of Physics (12th ed.), Chapter 14: Fluids', source: 'Hoboken: Wiley' },
      { author: 'Vogel, S.', year: 2013, title: 'Comparative Biomechanics: Life\'s Physical World (2nd ed.)', source: 'Princeton University Press' },
      { author: '林明瑞、許智芬', year: 2008, title: '國小學童浮力概念之研究', source: '《科學教育學刊》16(1)，頁 51–82' },
      { author: 'Argo Programme Office', year: 2023, title: 'Argo: A Global Array of Profiling Floats Annual Report', source: 'UNESCO/IOC' }
    ]
  },

  exp3: {
    formula: {
      math: 'n₁ sin θ₁ = n₂ sin θ₂　（斯涅爾定律）　|　n_water ≈ 1.33,  n_air ≈ 1.00',
      explanation: '光從一介質進入另一介質會依折射率比值彎折；水中物體經折射後看起來「更淺、更近」。'
    },
    derivation: [
      '視覺深度公式：d_real ≈ d_apparent × (n_water/n_air) ≈ 1.33 × 視覺深度（垂直觀看時）。',
      '斜角觀看的非線性放大：觀察角度越大，偏差量越非線性增加。',
      '小角度近似的線性關係：20 cm → 46 mm，30 cm → 70 mm，偏差約水深 23%（理論 25%，誤差 < 1.1%）。',
      '「往下壓」= 對 Snell 公式的直覺逆運算，視覺差異 ≈ 1/4 水深。',
      '空氣—面鏡—水三介質鏈：戴蛙鏡時光經 3 次折射，但因面鏡薄、平面，淨效應與裸眼相近。'
    ],
    errorSources: [
      '觀察角度未控制：頭部高低、距離不同會改變入射角，需用攝影機固定。',
      '水的純度：自來水含氯與雜質會微幅改變折射率（< 0.5%）。',
      '量測尺與水面平行度：傾斜 5° 可造成 ±2 mm 讀數誤差。',
      '波浪／漣漪：水面不平整會散射光線，需確保水面靜止 30 秒以上。',
      '眼球到水面距離：30 cm vs 60 cm 視差幾何不同。'
    ],
    advancedDiscussion: [
      '全反射與 Snell\'s Window：水下仰望只能在 ±48.6° 圓錐內進入，超出為全反射。',
      '大氣折射：日落時太陽看起來「比實際高」（折射 0.5°）。',
      '光纖通訊：海底光纖利用全反射讓光在玻璃纖維中傳遞。',
      '射水魚（archerfish）演化出大腦補償機制，自動修正折射射出水柱擊落獵物。',
      '水下機器人 ROV 需即時計算 Snell 修正才能精確抓取目標。'
    ],
    citations: [
      { author: 'Hecht, E.', year: 2017, title: 'Optics (5th ed.), Chapter 4: Refraction', source: 'Boston: Pearson' },
      { author: 'Tipler, P.A., & Mosca, G.', year: 2008, title: 'Physics for Scientists and Engineers (6th ed.), Vol. 2, Chapter 32', source: 'New York: W.H. Freeman' },
      { author: 'Land, M.F., & Nilsson, D.E.', year: 2012, title: 'Animal Eyes (2nd ed.)', source: 'Oxford University Press' },
      { author: 'Schuster, S., et al.', year: 2004, title: 'Archer fish learn to compensate for complex optical distortions', source: 'Current Biology, 14(17), 1565–1568' }
    ]
  },

  exp4: {
    formula: {
      math: 'P_aCO₂ × V_a = constant　（肺泡氣體交換）　|　FBP @ PaCO₂ ≈ 50 mmHg',
      explanation: '閉氣時 CO₂ 持續累積，當動脈分壓達 50 mmHg 時腦幹強迫產生「呼吸衝動」，此即第一破點 FBP。'
    },
    derivation: [
      'CO₂ 才是憋氣終止訊號（不是缺氧）：腦幹延髓化學感受器主要對 PaCO₂ 反應。',
      '過度換氣會降低 CO₂ 但延遲警報，反而增加「未警告即昏迷」風險。',
      '連續潛水累積：30 秒間隔不夠代謝 CO₂，第二次 FBP 縮短 18.1%。',
      '超恢復現象：充分休息 30 分鐘後 FBP 反提升至 68.2 秒（+34.8%），符合運動生理學恢復—超恢復曲線。',
      '心率指標：靜息 88.2 → 一次後 96.6 → 二次後 101 bpm，反映交感神經激活。'
    ],
    errorSources: [
      '個體差異：肺活量、體脂率、訓練程度不同，FBP 基準差異可達 ±30%，需以個人變化率分析。',
      'ABA 序列順序效應：第二次測量可能因「習慣化」自然延長，需對照組排除。',
      '環境因素：水溫低於 25°C 會觸發潛水反射延長閉氣時間。',
      '主觀停止判定：FBP 由受測者自報，存在主觀偏誤。',
      '倫理風險：實驗不可推到真正昏迷邊緣，故無法量測完整 SBP。'
    ],
    advancedDiscussion: [
      '潛水反射（Mammalian Dive Reflex）：臉部入冷水觸發三叉神經反射，心率減緩 10–25%。',
      '競技自由潛水世界紀錄已達 11 分 35 秒（A. Ferrari 2024），訓練「鈍化 CO₂ 敏感度」。',
      '臨床麻醉 pre-oxygenation：用 100% O₂ 沖洗肺部，延長安全呼吸暫停時間。',
      '太空醫學 EVA 前的氮氣排除使用類似氣體交換動力學。',
      '耆老「2 次失手必上岸」= 古代版 PADI Freediver 教科書「never dive alone, observe FBP shift」原則。'
    ],
    citations: [
      { author: 'Lindholm, P., & Lundgren, C.E.G.', year: 2009, title: 'The physiology and pathophysiology of human breath-hold diving', source: 'Journal of Applied Physiology, 106(1), 284–292' },
      { author: 'Bain, A.R., et al.', year: 2018, title: 'Physiology of static breath holding in elite apneists', source: 'Experimental Physiology, 103(5), 635–651' },
      { author: 'Schagatay, E., & Andersson, J.P.A.', year: 2023, title: 'Effects of hyperventilation on oxygenation, apnea breaking points, diving response', source: 'European Journal of Applied Physiology, 123(10), 2189–2202' },
      { author: 'Pollock, N.W. (Ed.)', year: 2007, title: 'Breath-Hold Diving: Proceedings of UHMS/DAN 2006 Workshop', source: 'Durham, NC: Divers Alert Network' }
    ]
  }
};

// ============================================================
// 📐 假設、變因、步驟（4 個實驗的研究方法結構化資料）
// ============================================================
const METHOD_DETAILS = {
  exp1: {
    hypothesis: {
      text: '阿美族耆老憑「月相」判斷下水時機，這個傳統知識符合月球引力造成的潮汐規律。',
      result: '✅ 驗證成立 — 朔月／滿月對應大潮（潮差 1.8–2.2 m），與耆老「無月夜最佳」一致。'
    },
    variables: {
      manipulated: '月相（朔月／上弦月／滿月／下弦月）',
      responding: '潮差（公尺）、魚類行為（活動度／躲藏度）',
      controlled: ['同一觀測站（成功港）', '同一季節（冬末春初）', '排除颱風日', '同一觀測時段（清晨／黃昏）']
    },
    steps: [
      '訪談 5 位耆老（Adiyaw、Fuyan、Faki、Lakaw、Kaysang），錄音記錄月相—魚類—下水時機的觀察',
      '蒐集中央氣象署 2025 年 11 月至 2026 年 3 月的潮汐預報資料',
      '建立「月相—潮汐—魚類行為」三向度比對表',
      '把耆老口述的阿美族語月相詞（Pa\'araw no folad、Taway 等）對應到天文月相',
      '分類整理：工具與技術、魚種辨識、時機判斷、保存與處理、倫理與禁忌'
    ]
  },

  exp2: {
    hypothesis: {
      text: '海水的浮力比淡水大，所以在海水中達到「中性浮力」需要的配重比淡水多。',
      result: '✅ 驗證成立 — 海水 17.5 g vs 淡水 17.4 g，多 0.1 g 配重才能停在水中間。'
    },
    variables: {
      manipulated: '水的種類（淡水 / 模擬海水 / 高濃度鹽水）',
      responding: '達到中性浮力所需的配重質量（g）',
      controlled: ['同一浮沉子模型', '同一水溫（室溫 25°C）', '同一水桶容量', '中性浮力判定標準（10 秒內漂移 ≤ 3 cm）']
    },
    steps: [
      '製作浮沉子：小藥瓶外包薄海綿模擬防寒衣，用電子秤記錄空瓶總質量',
      '配製三種水溶液：淡水 1.000、海水 1.025、高濃度 1.050 g/cm³',
      '改用滴管逐滴加水（每滴 0.05 ml）做精細配重，比硬幣（每個 3.8 g）精度高 10 倍以上',
      '中性浮力判定：浮沉子放入中央深度，10 秒內位移不超過 3 公分判定成立',
      '每種水溶液重複測 3 次，取平均配重質量',
      '繪製「水密度 × 配重質量」散布圖，看到清晰的線性正相關'
    ]
  },

  exp3: {
    hypothesis: {
      text: '水越深，光折射造成的視覺偏差越大，這就是為什麼耆老說「遠的魚要往下壓越多」。',
      result: '✅ 驗證成立 — 水深 20 cm 偏差 46 mm，30 cm 偏差 70 mm，與斯涅爾定律理論值誤差 < 1.1%。'
    },
    variables: {
      manipulated: '水深（5、10、15、20、25、30 cm）',
      responding: '硬幣的視覺抬高量（mm）= 真實深度 − 表觀深度',
      controlled: ['觀察角度固定（用手機架）', '同一枚硬幣', '同一容器與水', '排除波浪干擾（靜置 30 秒）']
    },
    steps: [
      '透明水族箱外壁貼直尺，箱底放硬幣並立牙籤標記實際位置',
      '用手機架固定觀察位置，從螢幕觀看以確保角度一致',
      '逐次加水到 5/10/15/20/25/30 cm，各記錄硬幣的「表觀位置」',
      '計算視覺抬高量 = 表觀高度 − 實際高度，每深度重複 3 次取平均',
      '用斯涅爾定律 d\' = d × tan(θ_air)/tan(θ_water) 計算理論值',
      '繪製「水深 × 視覺抬高量」折線圖，與理論值對比'
    ]
  },

  exp4: {
    hypothesis: {
      text: 'H1：30 秒換氣間隔不足以代謝 CO₂，第二次下潛 FBP 會顯著縮短。\nH2：30 分鐘充分休息後 FBP 不僅恢復，可能出現「超恢復」（比基準更長）。',
      result: '✅ H1 成立（縮短 18.1%）｜🚀 H2 超預期成立（恢復至 +34.8%）'
    },
    variables: {
      manipulated: '連續疲勞狀態（A 靜息基準 → B 第一次後 → C 30 秒後第二次 → D 30 分鐘後再次）',
      responding: 'FBP 閉氣時間（秒）、心率（bpm）、血氧 SpO₂（%）',
      controlled: ['同一受測者自己跟自己比（受試者內設計）', '同一血氧儀／碼表', '靜息 5 分鐘後才測基準', '室溫一致']
    },
    steps: [
      '招募 5 名健康高年級學生（無心肺疾病、無自由潛水訓練）',
      '【階段一】基準測量：靜息 5 分鐘，測 FBP、HR、SpO₂',
      '【階段二第一輪】第一次下潛閉氣至 FBP → 30 秒換氣間隔（模擬「心急獵人」）→ 第二次下潛閉氣至 FBP',
      '【階段三】完全休息 30 分鐘',
      '【階段四第二輪】重複階段二序列（驗證恢復效果）',
      '記錄表 A-E：基準、第一輪 FBP、第一輪 HR/SpO₂、第二輪 FBP、比較表',
      '計算「FBP 縮短量／縮短比例」與「心率上升幅度」'
    ]
  }
};

// ============================================================
// 🎣 實驗五：5 種漁法大比較
// ============================================================
const FISHING_METHODS = [
  {
    id: 'mipacing', name: 'Mipacing（阿美族潛水射魚）', icon: '🤿', color: '#0B3D5C',
    intro: '潛水獵人閉氣下潛，用木製魚槍逐一鎖定目標魚種，看清楚才射、一槍一條。完全選擇性，幾乎沒有副漁獲，也不破壞海底地貌。',
    examples: '阿美族 Salimpo 部落、菲律賓 Bajau 海人'
  },
  {
    id: 'gillnet', name: '定置網／三層刺網', icon: '🕸️', color: '#4FA3C7',
    intro: '把長條形的網牆固定在海中，魚游過去就被網絲卡住或纏住。網具被動等待，但只要尺寸對的魚都會中招，無法挑選種類。',
    examples: '臺灣沿岸最常見的小規模漁法'
  },
  {
    id: 'trawl', name: '底拖網（Bottom Trawling）', icon: '🚢', color: '#C2452D',
    intro: '漁船拖著巨大網袋掃過海床，把所有經過的生物連同礁石、海草一起捲入。是全球公認對海洋生態破壞最嚴重的漁法之一。',
    examples: '遠洋漁業、底棲魚商業捕撈'
  },
  {
    id: 'destructive', name: '毒魚／電魚／炸魚', icon: '☠️', color: '#3D1F1A',
    intro: '使用氰化物、電擊器或炸藥讓魚集體昏迷或死亡浮上水面再撿拾。一次殺傷整個生態系，包含珊瑚、卵與幼魚。臺灣已立法禁止。',
    examples: '東南亞部分海域、非法漁業'
  },
  {
    id: 'aquaculture', name: '現代水產養殖', icon: '🏭', color: '#7B5E3C',
    intro: '在陸上池塘或海上箱網大量飼養單一魚種，依賴飼料、抗生素與電力。雖然不直接傷害野生族群，但飼料魚粉來自捕撈，且廢水會汙染近海。',
    examples: '臺灣台南虱目魚、屏東石斑魚'
  }
];

const COMPARE_DIMENSIONS = [
  { id: 'selectivity', name: '選擇性',     desc: '能不能挑特定魚種與大小',          icon: '🎯' },
  { id: 'bycatch',     name: '副漁獲',     desc: '誤抓非目標生物的比例',            icon: '🐢' },
  { id: 'habitat',     name: '棲地破壞',   desc: '對珊瑚、海床、海草床的影響',      icon: '🪸' },
  { id: 'sustain',     name: '永續性',     desc: '長期是否會耗盡資源',              icon: '♻️' },
  { id: 'carbon',      name: '碳足跡',     desc: '每公斤漁獲的燃油消耗與碳排',      icon: '⛽' },
  { id: 'culture',     name: '文化價值',   desc: '是否承載傳統知識與認同',          icon: '🪶' },
  { id: 'labor',       name: '勞動強度',   desc: '對人體體能與技術的要求',          icon: '💪' },
  { id: 'season',      name: '季節敏感度', desc: '是否依潮汐、月相、繁殖期調整',    icon: '🌙' }
];

const COMPARE_MATRIX = [
  { method: 'Mipacing', selectivity: ['極高', '逐隻目視鎖定'], bycatch: ['近零', '幾乎為 0%，誤射可放回'], habitat: ['無破壞', '不接觸海床'], sustain: ['高', '閉氣自然控管漁獲量'], carbon: ['極低', '徒手徒泳零碳排'], culture: ['極高', '承載 mipacingay 知識'], labor: ['極高', '需 2 分鐘閉氣與多年訓練'], season: ['極高', '依月相、潮汐、繁殖期'] },
  { method: '定置網／刺網', selectivity: ['低', '依網目篩選，無法挑種類'], bycatch: ['中高', '約 20-40%，含海龜混獲'], habitat: ['中', '錨點磨損海床、幽靈漁網'], sustain: ['中', '管理得當可維持'], carbon: ['中', '需小船布網與收網'], culture: ['中', '部分為傳統漁業'], labor: ['中', '中度體力'], season: ['中', '依季節調整網位'] },
  { method: '底拖網', selectivity: ['極低', '所有經過的生物全部捕撈'], bycatch: ['極高', '40-60%，蝦拖網達 80-90%'], habitat: ['極嚴重', '剷平珊瑚礁、攪起沉積物'], sustain: ['極低', '導致全球底棲魚崩潰'], carbon: ['極高', '每 kg 漁獲耗油 3-5 倍'], culture: ['低', '工業化操作'], labor: ['低（自動化）', '機械作業為主'], season: ['低', '全年無休、忽略繁殖季'] },
  { method: '毒魚／電魚／炸魚', selectivity: ['零', '無差別殺傷所有生物'], bycatch: ['極高', '80-100%，幼魚與卵也死'], habitat: ['災難級', '炸藥摧毀珊瑚數十年'], sustain: ['極低', '一次作業使該海域數年無魚'], carbon: ['中', '化學品多為化石燃料'], culture: ['無／負', '已立法禁止'], labor: ['低', '幾乎無體能門檻'], season: ['低', '無視自然節律'] },
  { method: '現代水產養殖', selectivity: ['高（單一物種）', '只養一種，造成基因單一化'], bycatch: ['間接高', '飼料魚粉來自下雜魚'], habitat: ['中高', '紅樹林開挖、廢水汙染'], sustain: ['中', '依賴飼料、藥物、能源'], carbon: ['中高', '飼料生產+曝氣耗能'], culture: ['低', '商業生產'], labor: ['中', '需餵食、巡池'], season: ['低', '人為控溫繞過季節'] }
];

const RADAR_DATA = {
  axes: ['選擇性', '低副漁獲', '棲地友善', '族群永續', '低碳', '文化價值'],
  series: [
    { method: 'Mipacing',         color: '#0B3D5C', values: [10, 10, 10, 9, 10, 10] },
    { method: '定置網／刺網',     color: '#4FA3C7', values: [4,  5,  6,  6, 6,  5]  },
    { method: '底拖網',           color: '#C2452D', values: [1,  1,  1,  2, 1,  2]  },
    { method: '毒魚／電魚／炸魚', color: '#3D1F1A', values: [0,  0,  0,  1, 4,  0]  },
    { method: '現代水產養殖',     color: '#7B5E3C', values: [7,  4,  4,  5, 4,  3]  }
  ]
};

const ECO_NARRATIVE = {
  title: '生態學家怎麼看？',
  paragraphs: [
    '從漁業科學角度，永續漁業的核心是「最大永續產量」（Maximum Sustainable Yield, MSY）——讓每年捕撈量不超過族群自然增加量。Mipacing 之所以接近完美永續有三個原因。',
    '**第一，零副漁獲**。底拖網副漁獲比例可達 40-60%，熱帶蝦拖網甚至 80-90%；Mipacing 是「目視—鎖定—射擊」的選擇性漁法，誤射近乎為零。',
    '**第二，保留生態系功能**。底拖網會剷平珊瑚礁與海綿等「生態系工程師」物種，使整個食物網崩塌；Mipacing 不接觸海床，所有底棲生物完整保留。',
    '**第三，內建族群保護機制**。阿美族規範禁止抓帶卵母魚與懷卵母蟹（保護生殖力），加上閉氣自然限制單次漁獲量（約 2 分鐘 × 數次／日），形成比現代法規早千年的「社會性—生理性雙重 MSY 控制」。'
  ]
};

const FISHING_LIMITATIONS = [
  { icon: '📉', title: '漁獲量小，無法供應大規模市場', text: '一位 mipacingay 一天約 3-8 條魚，僅夠家庭與分享。Mipacing 是「夠用」的哲學，不是「產業」的解方。' },
  { icon: '🎓', title: '對潛水技術要求極高', text: '需 2 分鐘以上閉氣、中性浮力控制、光折射補償、水下定向。一般人需 3-5 年訓練，與「拋網就能抓」門檻不同。' },
  { icon: '🌀', title: '受天氣與安全限制', text: '湧浪、海流、能見度都會讓潛水變致命；冬季東北季風期幾乎無法作業。每年實際可下水約 80-120 天。' },
  { icon: '⚖️', title: '不是「不發展」，而是「另一條路」', text: 'Mipacing 不是要取代所有漁業，而是提供指標：所有漁法都應朝「高選擇性、低副漁獲、低棲地破壞」改革。' }
];

const FISHING_REFERENCES = [
  { citation: 'Pauly, D., Christensen, V., Dalsgaard, J., Froese, R., & Torres, F. (1998). Fishing down marine food webs. Science, 279(5352), 860-863.', note: '經典漁業生態學論文，提出「向食物網下層捕撈」現象，工業化漁業耗盡頂級掠食者，是比較工業漁法 vs 選擇性漁法的核心理論依據。' },
  { citation: 'Watling, L., & Norse, E. A. (1998). Disturbance of the seabed by mobile fishing gear: a comparison to forest clearcutting. Conservation Biology, 12(6), 1180-1197.', note: '量化比較底拖網與森林皆伐的破壞程度，全球每年遭拖網掃過的海床面積遠超陸地森林砍伐。' },
  { citation: 'Cinner, J. E., et al. (2012). Comanagement of coral reef social-ecological systems. PNAS, 109(14), 5219-5222.', note: '研究全球 42 個珊瑚礁漁業社區，證明傳統社群共管（含原住民漁獵知識）優於純政府管制。' }
];

// ============================================================
// 💬 TEK 對話論述（每行耆老的話 vs 科學的話 vs 對話心得）
// ============================================================
const TEK_DIALOGUE = [
  {
    elder: '看月亮決定下水',
    science: '月球引力 → 潮汐',
    data: '潮差表（實驗 1）',
    dialogue: '耆老用「月相」做時機判斷，現代科學用「潮汐表」做時機判斷——兩者都對，只是阿美族的版本免費、不需訊號、世代相傳。'
  },
  {
    elder: '木頭浮鐵沉',
    science: '密度比較',
    data: '0.6 vs 7.8 g/cm³',
    dialogue: '耆老沒讀過阿基米德，卻知道「材料密度小於海水才會浮」——這是用幾百年的水中經驗內化的物理定律。'
  },
  {
    elder: '配鉛塊到剛好',
    science: '中性浮力',
    data: '17.4 g vs 17.5 g（淡水/海水）',
    dialogue: '0.1 公克的差異，耆老用「身體感」就能調整；我們用電子秤花了一節課才量到。身體知識不輸科學儀器。'
  },
  {
    elder: '水裡眼睛會騙你',
    science: '光的折射（斯涅爾定律）',
    data: '20cm→46mm；30cm→70mm',
    dialogue: '耆老不需要 sin θ 公式，他們的肌肉記憶就是「公式」——這是身體做出來的光學校正，比任何方程式都直接。'
  },
  {
    elder: '失手兩次就上岸',
    science: 'CO₂ 累積、淺水昏迷預防',
    data: 'FBP 縮短 18.1%',
    dialogue: '這條規則救過很多人的命。它不是迷信，是用無數生命換來的安全閾值——比現代潛水教科書還早建立。'
  },
  {
    elder: '只拿夠用的',
    science: '最大永續產量、副漁獲',
    data: 'Mipacing 0% vs 拖網 40-60%',
    dialogue: '阿美族的「反貪心原則」是「社會性漁獲管制」——透過文化規範自然控制漁獲量，比政府法規早千年。'
  }
];

// ============================================================
// 🎤 Q&A 準備區（4 類共 15 張卡片）
// ============================================================
const QA_CARDS = {
  intro: {
    title: '🎤 視訊問答準備區',
    subtitle: '10 分鐘問答訓練營 · 評審會問什麼？',
    tip: '口訣：先承認、再轉化、最後反問。不要慌、不要快，每題回答 30-60 秒。',
    rules: [
      '問答必須由學生回答，指導老師不能代答',
      '簡報 10 分鐘 + 問答 10 分鐘',
      '評審會挑：研究方法、科學原理、文化內涵、雙向對話'
    ]
  },
  generalTips: [
    { title: '回答節奏', content: '30-60 秒一題，不要塞太滿。寧可講 2 個 keypoint 講清楚，也不要 5 個都講不完。' },
    { title: '黃金句型', content: '「您問的這個問題很關鍵，我們有想過⋯⋯」開頭穩住節奏，然後分點回答。' },
    { title: '不會就承認', content: '「這個我們現在還沒驗證，但我們的下一步會是 OOO」——誠實比硬掰加分。' },
    { title: '團隊分工', content: '事先約定：科學原理由 A 同學主答、文化由 B、方法由 C，其他人「補充」不要打斷。' },
    { title: '禁忌動作', content: '不要看老師、不要說「老師說⋯⋯」、不要全部用唸的。要看評審、用自己的話、有眼神交流。' }
  ],
  categories: [
    {
      id: 'A', name: '科學原理類', icon: '🔬', color: '#4FA3C7',
      weight: '對應評分：科學知識內涵 20%',
      intro: '評審會用「為什麼」「怎麼證明」「誤差怎麼來」追問。要敢說「這個我們還沒驗證，但設計排除了 OO 干擾」。',
      cards: [
        {
          id: 'A1',
          q: '你們折射實驗用硬幣，但真實情境是魚會游動，這樣的實驗結果可以類比嗎？',
          analysis: '測試你是否分得清「驗證原理」與「驗證情境」，能不能說清楚控制變因的邏輯。',
          keypoints: [
            '我們實驗的目的是「驗證折射本身」——光從水到空氣會折射，這是物理規則，跟魚動不動沒關係。',
            '為了「精確量到折射量」，必須先讓被觀察物靜止；如果魚一直游，我們就分不出「視覺偏移」是折射還是魚移動。',
            '這叫做「控制變因」——先排除動的干擾，才能單獨量到折射效應。',
            '我們測了 5、10、15、20、25、30 cm 六個水深，發現「水越深、視覺抬高量越大」，這個趨勢在動態下也會成立。',
            '下一階段我們想用「水中拉動的紙魚」做延伸實驗，把動態因素加回來。'
          ],
          bonus: '可以反問評審：「如果一開始就用會動的魚，您覺得我們要怎麼分辨偏移是因為折射、還是因為魚游了？」展現你懂實驗設計層次。'
        },
        {
          id: 'A2',
          q: '你們說折射讓魚「看起來偏高」、重力讓魚槍「實際偏低」，那兩個誤差會剛好互相抵消嗎？',
          analysis: '測試你能不能誠實面對「定性」與「定量」的差別，不要過度宣稱。',
          keypoints: [
            '我們說的是「方向相反」，不是「剛好抵消」——這是兩個不同層次的結論。',
            '方向相反有科學根據：折射讓眼睛看到的位置偏高，拋體運動讓魚槍實際軌跡偏低。',
            '但「剛好抵消」需要剛好的距離、水深、出槍速度——不是隨便瞄都會中。',
            'Faki 阿公的「瞄頭那邊」是幾十年練習得到的「經驗修正量」，不同距離他會調整。',
            '我們的實驗證明了「方向會抵消」，但「修正量」是阿公的身體記憶，科學還沒能完全量化。'
          ],
          bonus: '主動承認科學限制反而加分。可以說：「這正是耆老智慧無法被書本完全取代的地方。」'
        },
        {
          id: 'A3',
          q: '你們的接尺反應時間實驗用 t = √(2h/g) 公式換算，但學生反應時的手指張開角度不一樣，會影響結果嗎？',
          analysis: '測試你對「誤差來源」是否有認真分析，評審最愛聽出意外的細節。',
          keypoints: [
            '會！這是我們有想過的誤差來源——手指張開越大，「夾合距離」越長，反應時間就會被高估。',
            '我們的控制方法是：同一個學生「自己跟自己比」（ABA 設計），手指習慣固定。',
            '另外做 5 次取「修剪平均」（去頭去尾、取中間 3 次），把偶然的張太開或太緊剔除。',
            't = √(2h/g) 算的是「自由落下時間」，跟「夾住的瞬間反應時間」嚴格說不一樣，差約 0.01-0.02 秒。',
            '但我們關心的是「疲勞前後的相對變化」，不是絕對值，所以這個誤差會被抵消。'
          ],
          bonus: '說出「我們關心的是相對變化不是絕對值」會讓評審眼睛一亮——這是大學生才會的觀念。'
        },
        {
          id: 'A4',
          q: '你們的浮沉子實驗用滴管加水當配重，但真實的潛水員是用鉛塊，這兩個的「重量分布」不一樣，會影響結論嗎？',
          analysis: '測試你懂不懂「模型」和「真實情境」的差距，評審想看你能不能誠實回答。',
          keypoints: [
            '會有差！鉛塊集中在腰帶，水則均勻分布在瓶內，「重心位置」不一樣。',
            '但我們驗證的是「總配重 vs 水的密度」這個關係——這個物理規律不會因為配重在哪裡而改變。',
            '阿基米德原理說：浮力 = 排開水的重量。這個跟配重位置無關，只看「總重量」。',
            '所以我們的圖（密度越大、配重越重）結論可以類比到真實潛水員。',
            '但「平衡感」「穩定度」這些跟重心有關的問題，我們的模型確實不能回答——這是限制。'
          ],
          bonus: '可以提：「真實潛水員把鉛塊配在腰部，是因為腰是身體重心，這樣翻身比較容易。」展現你想過真實場域。'
        }
      ]
    },
    {
      id: 'B', name: '研究方法類', icon: '📐', color: '#4A7C59',
      weight: '對應評分：研究方法與步驟 30%（分數最高！）',
      intro: '這類問題分數最重。評審會挑「樣本」「重複次數」「控制變因」的漏洞。要勇敢承認局限，但說明「為什麼這樣設計合理」。',
      cards: [
        {
          id: 'B1',
          q: '你們的閉氣與疲勞實驗只測了少數幾位學生，樣本是不是太少？這樣有統計意義嗎？',
          analysis: '測試你懂不懂科展和「論文研究」的差別——小樣本怎麼還能講出有意義的話。',
          keypoints: [
            '承認：樣本確實少，我們不會宣稱結果可以推廣到全部小學生。',
            '但我們用的是「ABA 連續序列設計」——每個人「靜息→疲勞→恢復」自己跟自己比，這是受試者內設計（within-subject）。',
            '這種設計的優點是：每個人是自己的對照組，不會被「個人差異」干擾——5 個人的 5 條 ABA 曲線一致，結論就有力。',
            '30 秒換氣間隔的設計，是參考耆老 Fuyan 訪談說的「下水前要先深呼吸幾下」——這是文化依據。',
            '下一階段我們希望招募 20-30 位志願者重做，這樣才能變成真正的統計研究。'
          ],
          bonus: '說出「受試者內設計（within-subject）」這個詞，評審會立刻覺得你超越科展水準。背起來！'
        },
        {
          id: 'B2',
          q: '你們的生態觀察說「不放誘餌」是為了避免干擾，但這樣魚會不會根本不出現？',
          analysis: '測試你會不會兩難思考——任何決定都有 trade-off，你能不能解釋清楚。',
          keypoints: [
            '兩難確實存在：放誘餌會吸引「不住在這的魚」，不放誘餌可能拍到的數量少。',
            '我們選擇：寧可拍少一點，也要拍「真實住在這裡的魚」——研究問題是「不同地形住不同魚」，不是「哪裡魚最多」。',
            '為了補救「拍太少」，設計「3 輪 × 20 分鐘」重複觀察，提高出現機率。',
            '攝影機放下 5 分鐘後才開始計算，讓魚從受驚嚇恢復——這是動物行為學的標準做法。',
            '結論不是「哪裡魚多」，而是「不同地形、出現的魚種類不一樣」，這個用無誘餌設計才能驗證。'
          ],
          bonus: '可以提：「BBC 紀錄片拍野生動物也是這樣，寧可等很久，也不放誘餌。」連結到熟悉的場景。'
        },
        {
          id: 'B3',
          q: '六個實驗都做完之後，你們怎麼把結果「整合」？會不會只是六個獨立的小實驗？',
          analysis: '這題是「整合性」的關鍵題。評審會問你們有沒有想過「整體性」。',
          keypoints: [
            '六個實驗對應 Mipacing 的「完整作業流程」：環境判讀 → 裝備選擇 → 浮力調控 → 瞄準修正 → 體能管理 → 生態地圖。',
            '我們做了「耆老知識 × 科學原理 × 實驗數據」對照表，每行是一位耆老的話、對應的物理規則、對應的數據。',
            '這張表展示：Mipacing 不是「靠經驗瞎打」，而是整合光學、流體力學、運動生理學的綜合技術。',
            '我們也誠實列出「還沒能驗證的部分」——例如 Faki 阿公對魚個性的描述，科學還做不到。',
            '故事線是：「耆老的身體知識，可以被科學理解，但不能被科學取代。」'
          ],
          bonus: '引用 Adiyaw 老師的話：「科學是一種詮釋，不是唯一解答。」展現你懂這個研究的格局。'
        },
        {
          id: 'B4',
          q: '你們的「控制變因」會不會把耆老的真實情境簡化太多？真實的海有海流、水溫、能見度變化。',
          analysis: '測試你能不能誠實回答「實驗 vs 真實」的限制，評審其實在等你說「對，這正是限制」。',
          keypoints: [
            '完全同意！實驗室的條件是「乾淨的、簡化的」，真實的海是「複雜的、多變的」。',
            '我們的實驗先驗證「最基本的物理規則」——折射、阿基米德、拋體，這些原理在任何條件下都成立。',
            '但「修正量」「最佳策略」會隨情境變動，所以耆老的價值在這裡——他們腦中有一套「在地化的調整公式」。',
            '如果以後升級研究，可以加上「水溫變化」「能見度」這些變因，但目前是國小階段能做到的。',
            '這個限制反而證明了：耆老的「身體記憶」不能被簡單實驗取代——他們處理「全參數同時變動」的真實系統。'
          ],
          bonus: '把「限制」翻轉成「研究價值」是高段。可以說：「正是因為科學沒辦法處理這麼多變數，所以耆老智慧才不可或缺。」'
        }
      ]
    },
    {
      id: 'C', name: '原民知識 × 對話', icon: '🌺', color: '#C2452D',
      weight: '對應評分：原民知識 20% + 雙向對話 25% = 45%（最重要！）',
      intro: '評分最重的兩塊加起來！評審會問你「站在哪一邊」「有沒有把文化當工具」。要記得：你是「平等對話的橋」，不是「翻譯員」。',
      cards: [
        {
          id: 'C1',
          q: '你們是不是把阿美族文化當成「科學的附庸」？用科學去「驗證」耆老的知識，會不會反而把文化貶低？',
          analysis: '這是最尖銳的文化倫理題。評審想知道你站在哪一邊——是科學中心主義，還是真正尊重多元知識體系。',
          keypoints: [
            '不是！我們不是「用科學審判文化」，是「用科學翻譯一部分文化」，讓不認識阿美族的人也能聽懂。',
            'Adiyaw 老師說過：「不是阿美族需要被科學證明，是漢人社會的價值觀需要被反問。」',
            'Mipacing 是「完整的知識體系」——包含技術、生態、倫理、信仰、社群關係，科學只能解釋一個面向。',
            '我們的實驗能解釋「為什麼瞄魚頭上方」，但解釋不了「為什麼失手兩次要上岸」背後的禁忌（Malun）倫理觀。',
            '我們是「用科學打開一扇門」，讓漢人社會看到阿美族智慧的厚度，不是「用科學審查阿美族」。'
          ],
          bonus: '強烈推薦背起來反問：「您不會問漢醫『經絡有沒有被科學證明』才認可它的價值，對吧？」這個反問非常有力。'
        },
        {
          id: 'C2',
          q: '你們訪問的耆老只有 4 位，代表得了整個阿美族 Mipacing 文化嗎？',
          analysis: '測試你對文化「在地性」「多樣性」的敏感度。',
          keypoints: [
            '代表不了！我們研究的是「Salimpo 部落 4 位耆老」的 Mipacing 知識，不是泛阿美族。',
            '阿美族有南勢、海岸、秀姑巒、卑南、恆春五大群，每個部落生態不同，技術也不同。',
            '我們的研究是「個案研究」（case study），價值在「深度」而非「廣度」。',
            '我們希望這份研究變成「方法範本」——其他部落想做自己的版本，可以參考。',
            '報告中我們會特別標註「Salimpo 部落版本」，不會誤導以為是全部阿美族的做法。'
          ],
          bonus: '可以提：「這就像研究『阿嬤的菜』，不能說全台灣阿嬤都這樣煮——但這位阿嬤的智慧值得被記錄。」'
        },
        {
          id: 'C3',
          q: '如果耆老的知識和你們的科學實驗結果「不一致」，你們會相信誰？',
          analysis: '經典的「忠誠考驗」，評審想看你會不會盲目選邊站。',
          keypoints: [
            '都不會「直接相信」——會先問：「為什麼不一致？」',
            '可能性一：我們的實驗設計有漏洞，沒考慮到耆老在真實情境中處理的變因。',
            '可能性二：耆老講的是「特定條件下的經驗」，我們的實驗是「一般化的物理規則」，兩個其實在講不同的事。',
            '可能性三：確實有一方錯誤——這時要再驗證、再訪談，不能武斷下結論。',
            '我們學到：「不一致」往往是「最有意思的研究發現」，不是要急著選邊，是要繼續挖。'
          ],
          bonus: '可以說：「科學家最興奮的時刻，就是『跟預期不一致』的時候——因為那代表又要學新東西了。」'
        },
        {
          id: 'C4',
          q: '你們是漢人學生（或非阿美族學生）嗎？用「外人」眼光研究阿美族文化，會不會有文化挪用問題？',
          analysis: '高難度倫理題。評審想知道你有沒有反思自己的位置。',
          keypoints: [
            '我們的團隊有阿美族同學，也有漢人同學——這本身就是「對話」的一部分。',
            '我們做的不是「研究阿美族」，是「跟阿美族耆老一起研究 Mipacing」——耆老是共同研究者，不是被研究對象。',
            '從計畫一開始就和 Adiyaw 老師討論「什麼可以講、什麼不適合公開」，有些禁忌（Malun）我們不會寫進報告。',
            '研究成果會回到部落——我們會做阿美族語版本的簡報，送給耆老和部落學校。',
            '我們不是「擁有」這份知識，是「被授權傳遞」——這個區別很重要。'
          ],
          bonus: 'Adiyaw 老師教過「Maro\'ay ko faloco\'（心要放得平）」——研究者要把自己放低，讓耆老的聲音站起來。'
        }
      ]
    },
    {
      id: 'D', name: '應用與意義', icon: '🎯', color: '#E89B3C',
      weight: '對應評分：作品構想 5% + 整體呼應',
      intro: '結尾的提問。評審想看你的研究會不會「真的有用」、有沒有想過未來。',
      cards: [
        {
          id: 'D1',
          q: '這個研究對保存 Mipacing 文化有什麼具體幫助？還是只是把它「博物館化」了？',
          analysis: '測試你的研究有沒有「行動意義」，不是學術自嗨。',
          keypoints: [
            '幫助一：把耆老口述經驗「結構化記錄」——耆老會老，但結構化的影像、數據、實驗模型可以世代相傳。',
            '幫助二：讓部落小孩用「自己熟悉的語言」（科學）重新認識自己的文化，不會覺得「Mipacing 是過時的」，而是「超酷的整合科學」。',
            '幫助三：讓漢人小孩有一個「可以聽懂的入口」——例如同學看完展覽，可能想學阿美語、想去部落參觀。',
            '我們刻意「不把 Mipacing 翻成博物館展品」——所有實驗都連結到「現在還在做」的活動。',
            '下一步希望變成「部落小學的文化課程教材」，讓 Mipacing 真的進到課本裡。'
          ],
          bonus: '可以說：「博物館是把文化『放進玻璃櫃』，我們是把文化『拉回到課堂、海邊、廚房』。」'
        },
        {
          id: 'D2',
          q: '如果有海洋資源管理機關（漁業署）看到你們的研究，你們希望他們做什麼？',
          analysis: '測試你有沒有想過「研究 → 政策」的連結，展現研究的公共性。',
          keypoints: [
            '希望一：承認「原住民族傳統生態知識（TEK）」是合法的科學依據，不只是「文化保存議題」。',
            '希望二：在制定漁業規範時，參考耆老的「禁忌（Malun）」——「失手兩次上岸」這樣的安全守則可能比一般法規更精細。',
            '希望三：支持部落自己訓練「文化×科學」雙軌的青年漁人，不是只有「執照制」的西方標準。',
            'Mipacing 是「最早期的永續漁業」——一條一條打，不會像流刺網一次帶走整群。',
            '如果政策能「向耆老學」，台灣的海洋永續可能比歐美更早做到。'
          ],
          bonus: '可以連結 SDGs——SDG 14（海洋生態）+ SDG 4（教育公平）。展現你的視野不只在學校。'
        },
        {
          id: 'D3',
          q: '整個研究做下來，你們學到最重要的一件事是什麼？',
          analysis: '終極大魔王！這題決定評審對你的「人」的印象，不只看你的「研究」。',
          keypoints: [
            '我以前覺得「科學」和「文化」是兩個世界——學校教的是「真的」，部落講的是「故事」。做完這個研究我發現：耆老的話也是「真的」，只是用不同的語言講。',
            '我學到「謙虛」很重要——科學不是萬能的，有些事情耆老身體裡的知識比書本還準。',
            '我也學到「不要急著選邊」——當科學和文化不一致時，最有意思的事情才剛要發生。',
            '最珍貴的是，我認識了 Adiyaw、Fuyan、Faki、Lakaw 四位耆老，他們不只是研究對象，是我的老師。',
            'Mipacing 對我來說不再是「展覽裡的文化」，是「我認識的長輩在做的事」——這個情感連結，是科展報告寫不出來的。'
          ],
          bonus: '說耆老名字時用阿美族語的正確發音。如果可以用阿美語結尾，例如「Aray（感謝）」，會非常加分！'
        }
      ]
    }
  ]
};

// ============================================================
// 🎨 實驗 3 三種觀察情境的示意圖
// ============================================================
const SCENE_SVGS = {
  A: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:480px;background:white;border-radius:12px;border:2px solid #4FA3C7">
    <rect width="400" height="100" fill="#fff8e1"/>
    <rect y="100" width="400" height="120" fill="#cde7f5"/>
    <line x1="0" y1="100" x2="400" y2="100" stroke="#0a4f6e" stroke-width="2"/>
    <text x="10" y="20" font-size="12" fill="#888">☀️ 空氣</text>
    <text x="10" y="120" font-size="12" fill="#0a4f6e">💧 水中</text>
    <text x="38" y="62" font-size="40">🧍</text>
    <text x="42" y="93" font-size="10" fill="#666">岸上獵人</text>
    <line x1="68" y1="63" x2="248" y2="138" stroke="#E89B3C" stroke-width="2" stroke-dasharray="5 3"/>
    <line x1="68" y1="63" x2="188" y2="100" stroke="#C2452D" stroke-width="2.5"/>
    <line x1="188" y1="100" x2="298" y2="184" stroke="#C2452D" stroke-width="2.5"/>
    <text x="222" y="142" font-size="24">🐟</text>
    <text x="222" y="162" font-size="9" fill="#E89B3C" font-weight="bold">看到的（淺）</text>
    <text x="278" y="194" font-size="24">🐟</text>
    <text x="276" y="212" font-size="9" fill="#C2452D" font-weight="bold">實際的（深）</text>
    <path d="M 248 152 L 282 188" stroke="#0B3D5C" stroke-width="3" marker-end="url(#arrA)"/>
    <text x="310" y="170" font-size="13" fill="#0B3D5C" font-weight="bold">⬇️ 瞄下</text>
    <defs><marker id="arrA" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><polygon points="0 0, 10 4, 0 8" fill="#0B3D5C"/></marker></defs>
  </svg>`,

  B: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:480px;background:#cde7f5;border-radius:12px;border:2px solid #0B3D5C">
    <text x="10" y="22" font-size="12" fill="#0a4f6e">💧 全部都在水中</text>
    <text x="50" y="115" font-size="50">👀</text>
    <text x="50" y="160" font-size="11" fill="#444" font-weight="bold">水中裸眼</text>
    <defs><filter id="blur1"><feGaussianBlur stdDeviation="4"/></filter></defs>
    <circle cx="280" cy="105" r="42" fill="#5fb3d9" fill-opacity="0.25"/>
    <text x="255" y="120" font-size="36" filter="url(#blur1)">🐟</text>
    <line x1="135" y1="105" x2="220" y2="105" stroke="#888" stroke-width="2" stroke-dasharray="3 3"/>
    <text x="180" y="180" font-size="13" fill="#444" font-weight="bold">畫面糊糊看不清</text>
    <text x="160" y="198" font-size="10" fill="#666">人眼角膜在水中無法對焦（折射率太接近）</text>
  </svg>`,

  C: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:480px;background:#cde7f5;border-radius:12px;border:2px solid #E89B3C">
    <text x="10" y="20" font-size="12" fill="#0a4f6e">💧 全部都在水中</text>
    <text x="40" y="100" font-size="50">🤿</text>
    <text x="42" y="138" font-size="11" fill="#444" font-weight="bold">戴蛙鏡獵人</text>
    <rect x="48" y="62" width="42" height="22" fill="white" stroke="#0B3D5C" stroke-width="1.5" rx="3"/>
    <text x="54" y="78" font-size="9" fill="#0B3D5C" font-weight="bold">空氣腔</text>
    <line x1="95" y1="92" x2="225" y2="92" stroke="#E89B3C" stroke-width="2" stroke-dasharray="5 3"/>
    <text x="195" y="108" font-size="42">🐟</text>
    <text x="178" y="142" font-size="10" fill="#E89B3C" font-weight="bold">看到（大 33%、近 25%）</text>
    <text x="312" y="100" font-size="22">🐟</text>
    <text x="304" y="120" font-size="9" fill="#C2452D" font-weight="bold">實際（遠）</text>
    <path d="M 240 75 L 314 88" stroke="#0B3D5C" stroke-width="3" marker-end="url(#arrC)"/>
    <text x="248" y="58" font-size="14" fill="#0B3D5C" font-weight="bold">⬆️ 瞄上面</text>
    <text x="248" y="73" font-size="9" fill="#0B3D5C">（補償下墜）</text>
    <path d="M 105 112 Q 200 145 305 200" stroke="#C2452D" stroke-width="2.5" fill="none" stroke-dasharray="6 3"/>
    <text x="130" y="225" font-size="11" fill="#C2452D" font-weight="bold">魚標飛行 → 受重力下墜</text>
    <text x="252" y="240" font-size="9" fill="#C2452D">距離越遠下墜越多</text>
    <defs><marker id="arrC" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><polygon points="0 0, 10 4, 0 8" fill="#0B3D5C"/></marker></defs>
  </svg>`
};

// 暴露給全域
window.SCENE_SVGS = SCENE_SVGS;
window.ACADEMIC_DEEPDIVE = ACADEMIC_DEEPDIVE;
window.METHOD_DETAILS = METHOD_DETAILS;
window.FISHING_METHODS = FISHING_METHODS;
window.COMPARE_DIMENSIONS = COMPARE_DIMENSIONS;
window.COMPARE_MATRIX = COMPARE_MATRIX;
window.RADAR_DATA = RADAR_DATA;
window.ECO_NARRATIVE = ECO_NARRATIVE;
window.FISHING_LIMITATIONS = FISHING_LIMITATIONS;
window.FISHING_REFERENCES = FISHING_REFERENCES;
window.TEK_DIALOGUE = TEK_DIALOGUE;
window.QA_CARDS = QA_CARDS;
