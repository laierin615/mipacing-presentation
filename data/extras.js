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
// ⭐ 問答準備區（初賽實際提問 11 題 + 決賽模擬追問 10 題）
// ============================================================
const QA_CARDS = {
  intro: {
    title: '⭐ 問答準備區',
    subtitle: '初賽實問實答 · 決賽模擬追問',
    note: '本區包含初賽實際提問 11 題，以及依初賽提問邏輯推想的決賽模擬提問 10 題，已整理成小學生可練習的 30-60 秒回答。',
    tip: '口訣：先回答重點，再補研究依據，最後承認限制。慢慢說、看評審、不要看老師。',
    rules: [
      '這區最重要：請先練會，再練其他章節',
      '先練初賽真題，再練決賽模擬追問',
      '問答必須由學生回答，指導老師不能代答',
      '每題抓 2-3 個重點，講清楚比講很多更好'
    ]
  },
  generalTips: [
    { title: '先講一句答案', content: '第一句先回答問題，不要先鋪太多背景。例：「我們是用光會折射這個原理來估算。」' },
    { title: '用自己的話', content: '可以用「筷子放進水杯看起來歪掉」這種生活比喻，公式放到補充就好。' },
    { title: '主動說安全', content: '下水、憋氣、受測者題目都要先講安全分工：學生不做危險水下極限測試。' },
    { title: '不確定就誠實', content: '如果被追問數字，說「這個表格標示我們會再校正」，比硬背更穩。' },
    { title: '每人主答分工', content: '科學原理由 A、研究方法由 B、文化性別由 C、傳承意義由 D，其他人只補一句。' }
  ],
  categories: [
    {
      id: 'actual-core', name: '核心題', icon: '⭐', color: '#E89B3C',
      weight: '最優先練：開場常被問，決定評審第一印象',
      intro: '這幾題要回答得像孩子真的理解研究，而不是背稿。',
      cards: [
        {
          id: 'Q1',
          q: '你們可以舉 1-2 個阿美族文化中的科學智慧嗎？',
          analysis: '評審想知道你能不能把「耆老智慧」和「科學原理」接起來。',
          keypoints: [
            '可以舉兩個例子：第一是看月亮下水，因為月相會影響潮汐，也會影響魚的警覺性。',
            '第二是射魚要往下壓，因為光從水裡到空氣會折射，魚看起來會比真正位置淺一點。',
            '我們用潮汐資料和折射實驗，把耆老的口訣和科學原理對起來。',
            '收尾可以說：科學不是取代耆老智慧，而是幫我們用另一種語言說清楚。'
          ],
          bonus: '不要只講名詞。一定要說「耆老怎麼做」和「科學怎麼解釋」。'
        },
        {
          id: 'Q2',
          q: '這次研究最重要的目的是什麼？',
          analysis: '評審想看你們是不是只在做實驗，還是理解文化保存的目的。',
          keypoints: [
            '最重要的目的是把耆老的 Mipacing 智慧記錄下來，讓下一代可以理解和傳承。',
            '很多知識原本只存在長輩的身體經驗和口傳裡，如果沒有記錄，可能會慢慢消失。',
            '我們用訪談、田野觀察和科學實驗，整理「看月亮」「往下壓」「失手兩次上岸」「只拿夠用」。',
            '收尾句：我們不是只研究怎麼打魚，而是研究人怎麼和海相處。'
          ],
          bonus: '這題語氣要穩，不要只說「為了比賽」。'
        },
        {
          id: 'Q3',
          q: '影片有海底攝影或下海畫面，你們實際下海或觀察時有什麼感受？',
          analysis: '評審想確認學生有沒有真實觀察，也想看你們有沒有注意水域安全。',
          keypoints: [
            '我們有到海邊觀察，也在安全範圍內感受水中的狀態。',
            '因為我們是小學生，真正比較深的水下紀錄主要由老師和有經驗的大人協助。',
            '學生主要做水面、岸邊觀察、拍照紀錄和訪談。',
            '最大的感受是：在水裡不能急，動作越急越耗氣，也越容易嚇跑魚。',
            '這讓我們理解 Sapihokhok，埋伏等待比一直追魚更重要。'
          ],
          bonus: '不要說「我們都下去潛水射魚」。主動說安全分工會加分。'
        }
      ]
    },
    {
      id: 'science', name: '科學原理', icon: '🔬', color: '#4FA3C7',
      weight: '容易追問：FBP、月相潮汐、折射理論值',
      intro: '這類題目要把科學變成小學生聽得懂、也說得出口的話。',
      cards: [
        {
          id: 'Q4',
          q: '在水下或憋氣模擬時，怎麼感覺空氣變少？身體有什麼反應？',
          analysis: '評審想看你是否理解 FBP，也是否知道安全停止點不是挑戰極限。',
          keypoints: [
            '我們學到 FBP，也就是第一破點，意思是閉氣時開始出現很強烈想換氣的時間點。',
            '這不代表身體真的完全沒有氧氣，而是 CO2 累積後身體發出的警訊。',
            '感覺會是想吸氣、心裡開始緊張，如果再硬撐可能頭暈。',
            '所以實驗到 FBP 就停止，不追求極限，也不在水裡測試。',
            '如果要補數據，可以說：30 秒換氣後第二次 FBP 平均縮短 18.1%。'
          ],
          bonus: '這題一定要講「安全停止點」，不要講成比誰憋氣久。'
        },
        {
          id: 'Q5',
          q: '聽到阿公說看月亮決定何時下水，你們當時有什麼感覺？',
          analysis: '評審想知道你們是否從「覺得神奇」走到「能用資料理解」。',
          keypoints: [
            '一開始覺得很神奇，好像只是老人家的經驗。',
            '後來查中央氣象署潮汐資料和月相，發現這不是迷信。',
            '朔月和滿月常常是大潮，潮差比較大；無月夜魚比較不容易發現人。',
            '有些魚會躲在石縫，獵人用手電筒比較容易看到。',
            '所以耆老看月亮，其實是在同時判斷月光、潮汐和魚類行為。'
          ],
          bonus: '可以加一句：「我們從覺得神奇，變成覺得耆老真的觀察很久。」'
        },
        {
          id: 'Q6',
          q: '折射實驗的理論偏差值是怎麼計算來的？',
          analysis: '評審想確認你知道理論值不是亂填，而是先用光學原理預測。',
          keypoints: [
            '理論偏差值不是我們用尺量出來的，而是先用「光會彎掉」這個原理去估算。',
            '因為光從水裡跑到空氣時，方向會改變，所以魚看起來的位置會比真正的位置高一點、淺一點。',
            '我們先假設看的角度和水深，再用水的折射率去算光線大概會彎多少。',
            '最後換算成「看起來的位置」和「真正位置」差幾公分。',
            '簡單說，就是用科學公式先預測一次，再拿實驗測量的結果來比較。'
          ],
          bonus: '生活比喻：就像筷子放進水杯裡，看起來會歪掉；理論偏差值就是先算它看起來會歪多少。'
        }
      ]
    },
    {
      id: 'method', name: '方法與資料', icon: '📐', color: '#4A7C59',
      weight: '要答清楚：誰受測、誰說明安全、潮汐資料怎麼用',
      intro: '這類題目重點是誠實、清楚、不要把老師的安全責任說成學生自己決定。',
      cards: [
        {
          id: 'Q7',
          q: '運動生理實驗中的五名健康高年級學生是誰？是你們自己嗎？',
          analysis: '評審想確認受測者來源與人體資料保護。',
          keypoints: [
            '報告裡用甲、乙、丙、丁、戊五個代號記錄。',
            '他們都是沒有心肺疾病、沒有自由潛水訓練經驗的國小高年級學生。',
            '因為這是身體反應和安全相關的實驗，所以不用真名，保護受測者。',
            '實際操作是在老師確認安全後進行，不是在水裡做危險測試。',
            '正式上場前，要再確認五名受測者是否包含團隊外同學。'
          ],
          bonus: '如果不確定名單，不要亂答；可以說「我們用代號保護受測者，詳細名單由老師保存」。'
        },
        {
          id: 'Q8',
          q: '實驗前說明研究目的、安全程序和 FBP 定義，是誰向受測者說明？',
          analysis: '這是安全倫理題，評審想知道不是學生自己隨便測。',
          keypoints: [
            '這部分主要由老師負責安全說明，因為涉及身體反應和安全程序。',
            '學生有參與整理 FBP 的意思、紀錄表和實驗流程。',
            '我們會用簡單的話複述：只要出現強烈想換氣的感覺就停止，不可以硬撐。',
            '老師在旁邊確認每個人都了解後，才開始記錄。',
            'FBP 是安全停止點，不是挑戰閉氣極限。'
          ],
          bonus: '不要答「都是我們說明」。涉及安全，老師主責、學生參與紀錄，這樣最穩。'
        },
        {
          id: 'Q9',
          q: '中央氣象署潮汐預報在研究中實際做了什麼？',
          analysis: '評審想確認參考文獻不是只列好看的，而是真的用進研究。',
          keypoints: [
            '我們不是只把中央氣象署放在參考文獻，而是用它查長濱地區的潮汐時間和潮差。',
            '再把潮汐資料和月相、耆老說的魚類行為做比對。',
            '像朔月和滿月通常是大潮，上弦月和下弦月是小潮。',
            '退潮比較適合潮間帶採集，漲潮和水流狀況會影響能不能下水射魚。',
            '我們也會看風浪，因為有潮汐資料不代表一定安全。'
          ],
          bonus: '可以用一句話收尾：「潮汐資料幫我們把耆老的看月亮，變成可以查得到、比對得到的資料。」'
        }
      ]
    },
    {
      id: 'culture', name: '文化與傳承', icon: '🌺', color: '#C2452D',
      weight: '高分關鍵：性別分工、年輕人的文化連結',
      intro: '這類問題不能答太簡單，要同時尊重傳統、看見現在的改變。',
      cards: [
        {
          id: 'Q10',
          q: '阿美族射魚文化有沒有性別差別？是不是只有男生可以？',
          analysis: '評審想看你能不能細膩回答傳統分工，不要把文化講扁。',
          keypoints: [
            '傳統上，Mipacing 確實常被看成男性很重要的能力。',
            '因為打魚代表勇氣、技術和照顧家庭的能力。',
            '但這不代表女生完全不能接觸海洋知識。',
            '我們研究中訪談的 Lakaw singsi 就是一位女性實踐者，她用自己的方式學習，也把知識教給下一代。',
            '所以比較準確地說：傳統上有性別分工，也有祭儀或安全規範，但現在文化傳承可以讓男生女生都一起學習尊重海、認識海。'
          ],
          bonus: '不要答成「完全沒有性別差別」。更好的說法是：傳統有分工與規範，但傳承正在改變。'
        },
        {
          id: 'Q11',
          q: '這個研究對現代年輕人有什麼啟發？',
          analysis: '評審想看研究是否能回到部落、學校和下一代。',
          keypoints: [
            '就算現在年輕人離開部落、去都市讀書或工作，也不代表文化只能留在過去。',
            '我們可以用訪談、影像、科學實驗和學校課程，把耆老知識重新整理，讓更多人看懂。',
            'Mipacing 教我們的不只是打魚，而是安全、節制、分享，還有怎麼尊重海。',
            '年輕人可以用新的方法回到文化裡。',
            '收尾句：我們不是要把自己變成以前的獵人，而是要學會用現在的方法，繼續和海、和長輩、和自己的文化連在一起。'
          ],
          bonus: '這題可以放慢講，讓評審聽到孩子真的有感覺。'
        }
      ]
    },
    {
      id: 'final-sim', name: '模擬提問區', icon: '🎯', color: '#5B3580',
      weight: '決賽推測：依初賽評審邏輯延伸，不是真實提問',
      intro: '初賽評審已經在追問「文化和科學怎麼接」「資料是不是真的用到」「學生是否真懂」「安全和倫理怎麼處理」。決賽很可能把這些問題問得更深。',
      cards: [
        {
          id: 'F1',
          q: '你們怎麼知道這些不是巧合，而是真的阿美族科學智慧？',
          analysis: '決賽評審可能會把初賽的「舉例」往更高層次追問：你們有沒有證據鏈，而不是只挑符合的例子。',
          keypoints: [
            '我們不是只用一個例子判斷，而是把耆老訪談、潮汐資料、實驗結果放在一起比對。',
            '例如看月亮下水，對應到月相、潮汐和魚類行為；瞄準修正，對應到光折射和魚標下墜。',
            '如果只有一句耆老的話，我們不會直接說它就是科學定律。',
            '我們比較小心的說法是：耆老的經驗裡有很多可以被科學解釋的部分，但文化智慧不只等於科學。'
          ],
          bonus: '可以用「三角驗證」這個詞：訪談、資料、實驗三邊都對得起來，說服力才比較高。'
        },
        {
          id: 'F2',
          q: '你們用科學解釋阿美族文化，會不會變成用科學審查文化？',
          analysis: '初賽已經問文化中的科學智慧，決賽可能追問文化倫理：你們站在什麼位置說這件事。',
          keypoints: [
            '我們不是用科學去判斷文化對不對，而是用科學幫更多人聽懂其中一部分智慧。',
            'Mipacing 還包含倫理、分享、禁忌、身體經驗和部落關係，這些不是公式可以完全說明的。',
            '科學可以解釋光為什麼折射，但不能完全解釋為什麼失手兩次要上岸背後的安全和規範。',
            '所以我們的態度是對話，不是審查；科學是一種翻譯，不是唯一答案。'
          ],
          bonus: '這題不要急著說「科學證明文化很厲害」。改說「文化本來就有價值，科學只是幫忙說明其中一部分」。'
        },
        {
          id: 'F3',
          q: '你們說水下要往下壓，又說戴蛙鏡射魚要瞄魚頭上方，到底哪個才對？',
          analysis: '這是決賽很可能抓的矛盾題。評審會看你們能不能依情境修正，而不是背單一句子。',
          keypoints: [
            '兩個說法要看情境，不是互相否定。',
            '如果人在岸上或水面上看水裡的魚，光折射會讓魚看起來比較淺，所以要往看到位置的下方修正。',
            '但 Mipacing 常是戴蛙鏡在水下射魚，水平正視時上下折射偏移比較小，魚標下墜反而變成主要問題。',
            '所以真實水下射魚常要瞄魚頭或眼睛上方，預留魚標下墜的空間。',
            '我們學到的重點是：耆老不是背公式，而是依距離、水深、角度和裝備調整身體動作。'
          ],
          bonus: '可以說：「不是一個答案打天下，而是不同情境用不同修正。」這句很適合收尾。'
        },
        {
          id: 'F4',
          q: '五位學生受測樣本很少，你們的閉氣實驗可以下結論嗎？',
          analysis: '初賽問到受測者和 FBP，決賽可能追問統計效度。',
          keypoints: [
            '我們不能說這個結果代表所有小學生，這是我們的限制。',
            '但我們用的是自己跟自己比：同一個人比較休息前、連續閉氣後、充分休息後的變化。',
            '這樣可以減少每個人肺活量不同造成的干擾。',
            '我們比較有把握說的是：在我們這組受測者中，休息太短會讓 FBP 變短，身體更容易想換氣。',
            '如果要變成更完整的研究，下一步要增加受測人數，也要更嚴格控制運動量和休息時間。'
          ],
          bonus: '主動承認「不能推論全部人」反而加分，因為這代表你知道研究限制。'
        },
        {
          id: 'F5',
          q: '如果耆老說的經驗和你們的實驗結果不一樣，你們會相信誰？',
          analysis: '這題延伸初賽的文化與科學對話，會測你們是否能處理不一致，而不是硬選邊。',
          keypoints: [
            '我們不會立刻說誰對誰錯，而是先問：是不是情境不同？',
            '耆老講的是多年真實海域經驗，裡面有水流、風浪、魚的行為和身體感覺。',
            '我們的實驗是把其中一個變因拿出來測，條件比較簡化。',
            '如果結果不一樣，可能代表我們實驗還沒把真實海裡的重要變因放進去。',
            '這時候最好的做法是再訪談、再設計實驗，而不是急著否定耆老或否定科學。'
          ],
          bonus: '可以說：「不一致不是失敗，是下一個研究問題出現了。」'
        },
        {
          id: 'F6',
          q: '你們的研究裡，哪一個實驗最需要改進？會怎麼改？',
          analysis: '決賽常問反思能力。這題不是要找錯，而是看你們有沒有研究者的誠實。',
          keypoints: [
            '我會選折射實驗或閉氣實驗來改進。',
            '折射實驗可以把觀察角度固定得更精準，也可以加入蛙鏡情境，比較岸上看和水下看的差別。',
            '閉氣實驗可以增加受測人數，也可以把運動量、休息時間和測量流程控制得更一致。',
            '我們現在的實驗適合國小科展，能說明原理；但要更接近真實 Mipacing，還需要加上海流、水溫、能見度和魚標速度。',
            '所以我們的下一步是從「原理驗證」走向「情境驗證」。'
          ],
          bonus: '回答時挑一個實驗講深就好，不要每個都說一點點。'
        },
        {
          id: 'F7',
          q: '你們怎麼證明 Mipacing 比現代漁法更永續？會不會只是文化立場？',
          analysis: '初賽問文化意義，決賽可能追問永續指標和是否偏袒。',
          keypoints: [
            '我們不是只因為它是阿美族文化就說它永續，而是用幾個指標比較。',
            'Mipacing 是目視選擇，一次通常只射一條目標魚，副漁獲很少，也不拖過海床。',
            '跟底拖網相比，它對棲地破壞小、碳排低，也比較容易避開幼魚或不該抓的魚。',
            '但我們也要承認，如果人數太多、沒有禁忌和規範，任何漁法都可能傷害海洋。',
            '所以真正永續的關鍵不是只有工具，而是技術加上節制、分享和禁忌。'
          ],
          bonus: '不要把現代漁法全部罵壞。重點是用「選擇性、副漁獲、棲地破壞、碳足跡」比較。'
        },
        {
          id: 'F8',
          q: '這個研究哪些部分是學生真的做的？哪些是老師協助的？',
          analysis: '初賽問到安全說明由誰負責，決賽可能更在意學生參與真實性。',
          keypoints: [
            '學生主要做訪談提問、紀錄整理、海邊觀察、簡單實驗操作、資料比對和口頭報告練習。',
            '涉及水域安全、深水攝影、人體安全說明和資料校正的部分，由老師或有經驗的大人協助。',
            '老師協助不是代替學生，而是保護安全、幫我們把資料整理成可以分析的格式。',
            '我們真正學到的是怎麼問問題、怎麼把耆老的話轉成實驗、怎麼看資料有沒有支持假設。',
            '所以我們可以用自己的話說出研究，不只是背老師寫的稿。'
          ],
          bonus: '這題要誠實分工。說清楚「學生做什麼」比說「都是我們做的」更可信。'
        },
        {
          id: 'F9',
          q: '這個研究最不能公開或最需要小心處理的文化內容是什麼？',
          analysis: '決賽評審可能重視文化資料倫理，尤其是原住民族知識能否被任意公開。',
          keypoints: [
            '有些知識像特定漁場位置、禁忌細節、祭儀或長輩不希望公開的內容，需要小心處理。',
            '我們可以公開的是適合教學和科展分享的部分，例如月相、浮力、折射、安全規範。',
            '如果牽涉到部落私密知識，要先問耆老和老師，不是我們想放就放。',
            '這也是我們學到的研究倫理：記錄文化不是把所有東西都搬上台，而是要尊重授權和界線。',
            '文化傳承要讓更多人理解，也要保護部落自己的知識。'
          ],
          bonus: '可以說「不是所有資料都適合公開」，這會讓評審知道你們有文化敏感度。'
        },
        {
          id: 'F10',
          q: '決賽之後，這份研究要怎麼繼續留在學校或部落？',
          analysis: '初賽問研究目的，決賽可能追問真正的後續行動。',
          keypoints: [
            '第一，我們可以把問答卡和實驗活動變成學校民族教育課程教材。',
            '第二，可以把訪談紀錄、阿美語詞彙和實驗影片整理成部落孩子看得懂的資料。',
            '第三，可以請耆老回到課堂，讓學生不是只看網頁，而是繼續跟長輩學。',
            '第四，未來可以讓下一屆學生補做更完整的潮汐紀錄、魚種觀察和安全實驗。',
            '所以這份研究不是比賽結束就結束，而是成為 Salimpo 孩子繼續認識海的起點。'
          ],
          bonus: '這題結尾可以講：「科展是開始，不是結束。」短、穩、好記。'
        }
      ]
    }
  ]
};

// ============================================================
// 🎨 實驗 3 三種觀察情境的示意圖
// ============================================================
const SCENE_SVGS = {
  A: `<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px;background:white;border-radius:12px;border:2px solid #4FA3C7">
    <rect width="520" height="120" fill="#fff8e1"/>
    <rect y="120" width="520" height="160" fill="#cde7f5"/>
    <line x1="0" y1="120" x2="520" y2="120" stroke="#0a4f6e" stroke-width="2"/>
    <text x="10" y="22" font-size="12" fill="#888">空氣</text>
    <text x="10" y="140" font-size="12" fill="#0a4f6e">水中</text>
    <text x="35" y="78" font-size="38">🧍</text>
    <text x="32" y="110" font-size="11" fill="#444" font-weight="bold">岸上獵人</text>
    <line x1="68" y1="68" x2="320" y2="190" stroke="#E89B3C" stroke-width="2" stroke-dasharray="5 3"/>
    <line x1="68" y1="68" x2="220" y2="120" stroke="#C2452D" stroke-width="2.5"/>
    <line x1="220" y1="120" x2="370" y2="240" stroke="#C2452D" stroke-width="2.5"/>
    <text x="296" y="195" font-size="24">🐟</text>
    <text x="346" y="245" font-size="24">🐟</text>
    <text x="335" y="190" font-size="11" fill="#E89B3C" font-weight="bold">← 看到（淺）</text>
    <text x="385" y="248" font-size="11" fill="#C2452D" font-weight="bold">← 實際（深）</text>
    <path d="M 322 215 L 350 245" stroke="#0B3D5C" stroke-width="3" marker-end="url(#arrA)"/>
    <text x="180" y="270" font-size="13" fill="#0B3D5C" font-weight="bold">⬇️ 瞄看到位置的下方一點</text>
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

  C: `<svg viewBox="0 0 460 270" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;background:#cde7f5;border-radius:12px;border:2px solid #E89B3C">
    <text x="10" y="20" font-size="12" fill="#0a4f6e">💧 全部都在水中</text>
    <!-- 獵人 emoji，完全不被任何標籤擋住 -->
    <text x="30" y="125" font-size="55">🤿</text>
    <text x="22" y="160" font-size="11" fill="#444" font-weight="bold">戴蛙鏡獵人</text>
    <!-- 面鏡玻璃面：垂直線 -->
    <line x1="115" y1="78" x2="115" y2="125" stroke="#0B3D5C" stroke-width="2.5"/>
    <text x="62" y="65" font-size="10" fill="#0B3D5C" font-weight="bold">面鏡玻璃 ↓</text>
    <!-- 空氣腔／水分界標籤（在獵人下方，不擋圖）-->
    <text x="50" y="180" font-size="11" fill="#E89B3C" font-weight="bold">←空氣腔</text>
    <text x="125" y="180" font-size="11" fill="#0a4f6e" font-weight="bold">水→</text>
    <!-- 視線水平虛線（從面鏡出去到看到的魚）-->
    <line x1="118" y1="98" x2="240" y2="98" stroke="#E89B3C" stroke-width="2" stroke-dasharray="5 3"/>
    <!-- 看到的魚（大）-->
    <text x="218" y="115" font-size="42">🐟</text>
    <text x="195" y="148" font-size="10" fill="#E89B3C" font-weight="bold">看到（大 33%、近 25%）</text>
    <!-- 真實的魚（小、遠）-->
    <text x="362" y="105" font-size="22">🐟</text>
    <text x="354" y="125" font-size="9" fill="#C2452D" font-weight="bold">實際（遠）</text>
    <!-- 瞄上箭頭 -->
    <path d="M 270 80 L 366 90" stroke="#0B3D5C" stroke-width="3" marker-end="url(#arrC)"/>
    <text x="275" y="58" font-size="14" fill="#0B3D5C" font-weight="bold">⬆️ 瞄上面</text>
    <text x="275" y="73" font-size="9" fill="#0B3D5C">（補償下墜）</text>
    <!-- 拋物線下墜 -->
    <path d="M 122 124 Q 230 165 360 220" stroke="#C2452D" stroke-width="2.5" fill="none" stroke-dasharray="6 3"/>
    <text x="160" y="245" font-size="11" fill="#C2452D" font-weight="bold">魚標飛行 → 受重力下墜</text>
    <text x="195" y="260" font-size="9" fill="#C2452D">距離越遠下墜越多</text>
    <defs><marker id="arrC" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><polygon points="0 0, 10 4, 0 8" fill="#0B3D5C"/></marker></defs>
  </svg>`
};

// ============================================================
// 🌍 潮汐系統圖（實驗 1）
// ============================================================
const TIDE_SYSTEM_SVG = `<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:640px;background:linear-gradient(180deg,#0d1929,#1a2540);border-radius:12px">
  <!-- 標題 -->
  <text x="220" y="22" font-size="14" fill="#FFD700" font-weight="bold">🌍 太陽 + 月亮 + 地球 = 潮汐</text>
  <!-- 分隔線 -->
  <line x1="320" y1="40" x2="320" y2="280" stroke="#444"/>

  <!-- ====== 左：大潮（朔月） ====== -->
  <text x="40" y="55" font-size="13" fill="#FFD700" font-weight="bold">⭐ 大潮（朔月／滿月）</text>
  <text x="40" y="70" font-size="10" fill="#aaa">日 - 月 - 地三點一線，引力疊加</text>
  <!-- 太陽（最右）-->
  <circle cx="290" cy="160" r="22" fill="#FFA500" stroke="#FFD700" stroke-width="2"/>
  <text x="285" y="195" font-size="10" fill="#FFD700">☀️ 太陽</text>
  <!-- 月亮（中間，朔月）-->
  <circle cx="170" cy="160" r="9" fill="#222" stroke="#f5f1d8" stroke-width="1.5"/>
  <text x="155" y="142" font-size="9" fill="#f5f1d8">🌑 朔月</text>
  <!-- 地球（最左）+ 海水鼓兩端 -->
  <ellipse cx="80" cy="160" rx="35" ry="20" fill="rgba(79,163,199,0.5)" stroke="#5fb3d9"/>
  <circle cx="80" cy="160" r="18" fill="#4A7C59" stroke="#0B3D5C" stroke-width="1.5"/>
  <text x="80" y="166" font-size="14" text-anchor="middle">🌍</text>
  <text x="55" y="195" font-size="10" fill="#fff">地球</text>
  <!-- 三點一線連線 -->
  <line x1="100" y1="160" x2="270" y2="160" stroke="#FFD700" stroke-width="0.8" stroke-dasharray="4 2"/>
  <!-- 引力標註 -->
  <text x="120" y="220" font-size="10" fill="#5fb3d9">↘ 太陽+月亮引力同方向</text>
  <text x="135" y="235" font-size="10" fill="#5fb3d9">海水鼓最高 → 大潮</text>
  <!-- 自轉箭頭（地球上）-->
  <path d="M 95 145 A 16 16 0 0 1 95 175" stroke="#FFD700" stroke-width="1.5" fill="none" marker-end="url(#rotA)"/>

  <!-- ====== 右：小潮（弦月） ====== -->
  <text x="380" y="55" font-size="13" fill="#FFD700" font-weight="bold">○ 小潮（上下弦月）</text>
  <text x="380" y="70" font-size="10" fill="#aaa">日、月成 90°，引力部分抵消</text>
  <!-- 太陽 -->
  <circle cx="600" cy="200" r="22" fill="#FFA500" stroke="#FFD700" stroke-width="2"/>
  <text x="590" y="235" font-size="10" fill="#FFD700">☀️ 太陽</text>
  <!-- 地球（中間）+ 海水鼓 -->
  <ellipse cx="490" cy="200" rx="32" ry="22" fill="rgba(79,163,199,0.5)" stroke="#5fb3d9"/>
  <circle cx="490" cy="200" r="18" fill="#4A7C59" stroke="#0B3D5C" stroke-width="1.5"/>
  <text x="490" y="206" font-size="14" text-anchor="middle">🌍</text>
  <!-- 月亮（在地球上方）-->
  <circle cx="490" cy="105" r="9" fill="#aaa" stroke="#f5f1d8"/>
  <text x="478" y="98" font-size="9" fill="#f5f1d8">🌓 弦月</text>
  <!-- 90 度 -->
  <line x1="490" y1="120" x2="490" y2="178" stroke="#FFD700" stroke-width="0.8" stroke-dasharray="4 2"/>
  <line x1="510" y1="200" x2="578" y2="200" stroke="#FFD700" stroke-width="0.8" stroke-dasharray="4 2"/>
  <path d="M 490 178 L 506 178 L 506 200" stroke="#FFD700" stroke-width="1" fill="none"/>
  <text x="510" y="190" font-size="10" fill="#FFD700">90°</text>
  <!-- 說明 -->
  <text x="380" y="265" font-size="10" fill="#5fb3d9">月亮拉直、太陽拉橫 → 部分抵消 → 潮差小</text>

  <defs><marker id="rotA" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#FFD700"/></marker></defs>
</svg>`;

// 一天兩次漲潮的離心力效應 — 動畫版（v2：大尺寸 + 太陽 + 公轉）
const TIDE_BULGE_SVG = `<div style="position:relative">
<button onclick="initTideAnimation()" style="position:absolute;top:8px;right:8px;z-index:10;padding:5px 11px;border-radius:999px;background:rgba(255,215,0,0.9);color:#0d1929;font-weight:bold;border:none;cursor:pointer;font-size:0.78rem;box-shadow:0 1px 4px rgba(0,0,0,0.3)">▶ 重播</button>
<svg id="tide-anim-svg" viewBox="0 0 1000 720" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:1000px;background:linear-gradient(180deg,#0d1929 0%,#1a2540 60%,#0d1929 100%);border-radius:16px">
  <!-- ===== 區塊 1：標題（0-50） ===== -->
  <text x="500" y="35" font-size="22" fill="#FFD700" font-weight="bold" text-anchor="middle">🌊 為什麼一天有兩次漲潮？太陽—月亮—地球系統動畫</text>

  <!-- ===== 區塊 2：太陽—月亮—地球系統（60-380） ===== -->

  <!-- 太陽（最遠在右側，大顆橙色發光）-->
  <defs>
    <radialGradient id="sunGradient">
      <stop offset="0%" stop-color="#FFEB3B"/>
      <stop offset="60%" stop-color="#FFA500"/>
      <stop offset="100%" stop-color="#FF6B00"/>
    </radialGradient>
    <marker id="tideArrG" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><polygon points="0 0, 8 4, 0 8" fill="#FFD700"/></marker>
    <marker id="tideArrR" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><polygon points="0 0, 8 4, 0 8" fill="#FF8800"/></marker>
  </defs>

  <circle cx="880" cy="220" r="55" fill="url(#sunGradient)"/>
  <circle cx="880" cy="220" r="65" fill="none" stroke="#FFA500" stroke-opacity="0.5" stroke-width="2"/>
  <circle cx="880" cy="220" r="75" fill="none" stroke="#FFA500" stroke-opacity="0.25" stroke-width="2"/>
  <text x="880" y="232" font-size="48" text-anchor="middle">☀️</text>
  <text x="880" y="305" font-size="16" fill="#FFD700" text-anchor="middle" font-weight="bold">太陽</text>
  <text x="880" y="325" font-size="11" fill="#aaa" text-anchor="middle">（很遠很遠，圖中縮放）</text>

  <!-- 太陽引力箭頭（指向地球）-->
  <line x1="822" y1="220" x2="430" y2="220" stroke="#FF8800" stroke-width="2" stroke-dasharray="6 4" stroke-opacity="0.55" marker-end="url(#tideArrR)"/>
  <text x="600" y="208" font-size="12" fill="#FF8800" text-anchor="middle">☀️ 太陽引力（弱、距離平方衰減）</text>

  <!-- 月亮公轉軌道 -->
  <ellipse cx="280" cy="220" rx="140" ry="90" fill="none" stroke="#5fb3d9" stroke-opacity="0.4" stroke-width="1.5" stroke-dasharray="3 3"/>

  <!-- 海水橢圓（鼓兩端）-->
  <ellipse cx="280" cy="220" rx="105" ry="50" fill="rgba(79,163,199,0.4)" stroke="#5fb3d9" stroke-width="2"/>

  <!-- 地球本體 -->
  <circle cx="280" cy="220" r="42" fill="#4A7C59" stroke="#0B3D5C" stroke-width="2.5"/>
  <text x="280" y="232" font-size="38" text-anchor="middle">🌍</text>

  <!-- 月亮（公轉，由 JS 控制 transform 與 emoji）-->
  <g id="tide-moon" transform="translate(420 220)">
    <circle r="14" fill="#aaa" stroke="#f5f1d8" stroke-width="1.5"/>
    <text id="tide-moon-emoji" x="0" y="6" font-size="22" text-anchor="middle">🌑</text>
  </g>

  <!-- 月亮引力箭頭（移到地球右下，不擋月亮軌道頂部）-->
  <text x="350" y="278" font-size="12" fill="#FFD700" text-anchor="middle">🌑 月亮引力（強、近）</text>

  <!-- 觀察點（自轉，JS 控制；SVG 內建脈衝 fallback）-->
  <g id="tide-observer-group">
    <circle id="tide-observer" cx="322" cy="220" r="9" fill="#C2452D" stroke="white" stroke-width="2.5">
      <animate attributeName="r" values="9;13;9" dur="1.2s" repeatCount="indefinite"/>
    </circle>
    <text id="tide-observer-label" x="338" y="225" font-size="13" fill="#C2452D" font-weight="bold">觀察點</text>
  </g>

  <!-- 自轉箭頭（地球右下小弧線，避開月亮軌道）-->
  <path d="M 320 250 A 45 45 0 0 1 320 270" stroke="#FFD700" stroke-width="2" fill="none" marker-end="url(#tideArrG)"/>
  <text x="380" y="262" font-size="12" fill="#FFD700" font-weight="bold">⟳ 地球自轉</text>

  <!-- 鼓起標註（軌道上方，y=70 / y=88，遠離月亮軌道頂 y=130）-->
  <text x="160" y="68" font-size="13" fill="#fff" font-weight="bold" text-anchor="middle">←背對月亮側</text>
  <text x="160" y="85" font-size="11" fill="#5fb3d9" text-anchor="middle">（離心力把海水甩起）</text>
  <text x="400" y="68" font-size="13" fill="#fff" font-weight="bold" text-anchor="middle">面對月亮側→</text>
  <text x="400" y="85" font-size="11" fill="#5fb3d9" text-anchor="middle">（引力把海水拉起）</text>

  <!-- 時間 + 月相（地球下方並列兩框）-->
  <rect x="80" y="338" width="180" height="44" fill="#1a2540" stroke="#FFD700" stroke-width="2" rx="8"/>
  <text id="tide-time" x="170" y="365" font-size="18" fill="#FFD700" font-weight="bold" text-anchor="middle">時間：00:00</text>

  <rect x="280" y="338" width="240" height="44" fill="#1a2540" stroke="#f5f1d8" stroke-width="2" rx="8"/>
  <text id="tide-moon-phase" x="400" y="365" font-size="16" fill="#f5f1d8" font-weight="bold" text-anchor="middle">月相：🌑 朔月（新月）</text>

  <!-- ===== 區塊 3：天文小常識三欄（420-540） ===== -->
  <line x1="40" y1="410" x2="960" y2="410" stroke="#444" stroke-width="1"/>

  <text x="500" y="438" font-size="16" fill="#5fb3d9" font-weight="bold" text-anchor="middle">📖 天文小常識</text>

  <!-- 三欄說明 -->
  <g>
    <rect x="40" y="455" width="290" height="90" fill="#1a2540" stroke="#5fb3d9" stroke-opacity="0.5" rx="8"/>
    <text x="55" y="480" font-size="14" fill="#FFD700" font-weight="bold">⟳ 自轉</text>
    <text x="55" y="500" font-size="11" fill="#fff">地球自己轉一圈 = 24 小時</text>
    <text x="55" y="518" font-size="11" fill="#aaa">每個地方輪流經過</text>
    <text x="55" y="535" font-size="11" fill="#aaa">「面對 + 背對」月亮兩次</text>
  </g>
  <g>
    <rect x="355" y="455" width="290" height="90" fill="#1a2540" stroke="#5fb3d9" stroke-opacity="0.5" rx="8"/>
    <text x="370" y="480" font-size="14" fill="#FFD700" font-weight="bold">🌑 月亮公轉</text>
    <text x="370" y="500" font-size="11" fill="#fff">月亮繞地球 = 約 27.3 天</text>
    <text x="370" y="518" font-size="11" fill="#aaa">圖中比例 10:1 加速</text>
    <text x="370" y="535" font-size="11" fill="#aaa">月相 🌑→🌒→🌓→🌔→🌕→🌖→🌗→🌘</text>
  </g>
  <g>
    <rect x="670" y="455" width="290" height="90" fill="#1a2540" stroke="#5fb3d9" stroke-opacity="0.5" rx="8"/>
    <text x="685" y="480" font-size="14" fill="#FFD700" font-weight="bold">☀️ 太陽影響</text>
    <text x="685" y="500" font-size="11" fill="#fff">太陽質量 = 月亮 2700 萬倍</text>
    <text x="685" y="518" font-size="11" fill="#aaa">但距離 390 倍遠（平方影響）</text>
    <text x="685" y="535" font-size="11" fill="#aaa">所以月亮潮汐力是太陽 2.2 倍</text>
  </g>

  <!-- ===== 區塊 4：水位變化 chart（570-680） ===== -->
  <text x="380" y="595" font-size="16" fill="#5fb3d9" font-weight="bold" text-anchor="middle">📊 觀察點的水位變化（24 小時內）</text>
  <!-- 動態潮汐類型標籤（隨月相變化）-->
  <text id="tide-type-label" x="700" y="595" font-size="16" fill="#FFD700" font-weight="bold" text-anchor="middle">⭐ 目前：大潮</text>

  <!-- chart 軸 -->
  <line x1="80" y1="610" x2="80" y2="685" stroke="#888" stroke-width="2"/>
  <line x1="80" y1="685" x2="920" y2="685" stroke="#888" stroke-width="2"/>

  <!-- Y 軸標籤 -->
  <text x="72" y="615" font-size="11" fill="#aaa" text-anchor="end">高</text>
  <text x="72" y="650" font-size="11" fill="#aaa" text-anchor="end">中</text>
  <text x="72" y="688" font-size="11" fill="#aaa" text-anchor="end">低</text>

  <!-- X 軸標籤 -->
  <text x="80" y="703" font-size="11" fill="#aaa" text-anchor="middle">0</text>
  <text x="290" y="703" font-size="11" fill="#aaa" text-anchor="middle">6</text>
  <text x="500" y="703" font-size="11" fill="#aaa" text-anchor="middle">12</text>
  <text x="710" y="703" font-size="11" fill="#aaa" text-anchor="middle">18</text>
  <text x="920" y="703" font-size="11" fill="#aaa" text-anchor="middle">24（時）</text>

  <!-- 水位曲線（JS 動態繪製） -->
  <path id="tide-curve" d="" stroke="#5fb3d9" stroke-width="3" fill="none" stroke-linecap="round"/>

  <!-- 當前水位 marker -->
  <circle id="tide-marker" cx="80" cy="610" r="8" fill="#C2452D" stroke="white" stroke-width="2.5"/>

  <!-- 兩個高峰標註 -->
  <text id="tide-peak1" x="220" y="605" font-size="13" fill="#FFD700" opacity="0" font-weight="bold" text-anchor="middle">⭐ 漲潮 1</text>
  <text id="tide-peak2" x="640" y="605" font-size="13" fill="#FFD700" opacity="0" font-weight="bold" text-anchor="middle">⭐ 漲潮 2</text>

  <!-- 結論 -->
  <text x="500" y="715" font-size="11" fill="#aaa" text-anchor="middle">⏰ 自轉一圈 = 24 小時 → 經過 2 個鼓起 → 漲退潮各 2 次（精確週期 12h 25min，因月亮也在公轉）</text>
</svg>
</div>`;

// 月相 vs 魚的行為（4 格小圖）
const MOON_FISH_SVG = `<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:640px;background:white;border-radius:12px;border:1px solid #ddd">
  <text x="220" y="22" font-size="14" fill="#0B3D5C" font-weight="bold">🌙 月相 × 魚的行為 × Mipacing 時機</text>

  <!-- 格 1：朔月 -->
  <rect x="20" y="40" width="140" height="170" fill="#1a2540" rx="8"/>
  <circle cx="90" cy="75" r="18" fill="#222" stroke="#f5f1d8" stroke-width="1.5"/>
  <text x="50" y="115" font-size="10" fill="#f5f1d8" font-weight="bold">🌑 朔月（新月）</text>
  <text x="32" y="135" font-size="9" fill="#aaa">大潮</text>
  <text x="32" y="155" font-size="9" fill="#5fb3d9">魚躲石縫不亂跑</text>
  <text x="32" y="170" font-size="9" fill="#5fb3d9">獵人手電筒佔優勢</text>
  <text x="32" y="195" font-size="11" fill="#5BA651" font-weight="bold">⭐ 最佳 Mipacing</text>

  <!-- 格 2：上弦 -->
  <rect x="180" y="40" width="140" height="170" fill="#1a2540" rx="8"/>
  <circle cx="250" cy="75" r="18" fill="#222"/>
  <path d="M 250 57 A 18 18 0 0 1 250 93" fill="#f5f1d8"/>
  <text x="200" y="115" font-size="10" fill="#f5f1d8" font-weight="bold">🌓 上弦月</text>
  <text x="192" y="135" font-size="9" fill="#aaa">小潮</text>
  <text x="192" y="155" font-size="9" fill="#5fb3d9">魚活動中等</text>
  <text x="192" y="170" font-size="9" fill="#5fb3d9">水流溫和</text>
  <text x="192" y="195" font-size="11" fill="#E89B3C" font-weight="bold">✓ 可下水</text>

  <!-- 格 3：滿月 -->
  <rect x="340" y="40" width="140" height="170" fill="#1a2540" rx="8"/>
  <circle cx="410" cy="75" r="18" fill="#f5f1d8"/>
  <text x="365" y="115" font-size="10" fill="#f5f1d8" font-weight="bold">🌕 滿月</text>
  <text x="352" y="135" font-size="9" fill="#aaa">大潮</text>
  <text x="352" y="155" font-size="9" fill="#5fb3d9">月光太亮</text>
  <text x="352" y="170" font-size="9" fill="#5fb3d9">魚警覺逃深處</text>
  <text x="352" y="195" font-size="11" fill="#C2452D" font-weight="bold">✗ 不易抓</text>

  <!-- 格 4：下弦 -->
  <rect x="500" y="40" width="120" height="170" fill="#1a2540" rx="8"/>
  <circle cx="560" cy="75" r="18" fill="#222"/>
  <path d="M 560 57 A 18 18 0 0 0 560 93" fill="#f5f1d8"/>
  <text x="514" y="115" font-size="10" fill="#f5f1d8" font-weight="bold">🌗 下弦月</text>
  <text x="510" y="135" font-size="9" fill="#aaa">小潮</text>
  <text x="510" y="155" font-size="9" fill="#5fb3d9">前半夜可下水</text>
  <text x="510" y="170" font-size="9" fill="#5fb3d9">後半夜上岸</text>
  <text x="510" y="195" font-size="11" fill="#E89B3C" font-weight="bold">✓ 部分時段</text>
</svg>`;

// ============================================================
// ⚖️ 浮力三狀態圖（實驗 2）
// ============================================================
const BUOYANCY_3_SVG = `<svg viewBox="0 0 660 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:660px;background:white;border-radius:12px;border:1px solid #ddd">
  <text x="220" y="24" font-size="14" fill="#0B3D5C" font-weight="bold">⚖️ 浮 / 中性浮力 / 沉 三種狀態</text>

  <!-- 缸 1：浮（密度小，浮力 > 重力）-->
  <rect x="30" y="50" width="160" height="170" fill="#cde7f5" stroke="#555" stroke-width="2"/>
  <line x1="30" y1="82" x2="190" y2="82" stroke="#0a4f6e" stroke-width="1.5"/>
  <text x="110" y="78" font-size="24" text-anchor="middle">🪵</text>
  <!-- 浮力箭頭（綠色，較長，靠右）-->
  <line x1="148" y1="165" x2="148" y2="115" stroke="#5BA651" stroke-width="3" marker-end="url(#upArr)"/>
  <text x="156" y="145" font-size="10" fill="#5BA651" font-weight="bold">浮力大</text>
  <!-- 重力箭頭（紅色，較短，靠左）-->
  <line x1="62" y1="105" x2="62" y2="135" stroke="#C2452D" stroke-width="2.5" marker-end="url(#dnArr)"/>
  <text x="40" y="125" font-size="10" fill="#C2452D">重力</text>
  <!-- 標籤（缸外下方，文字水平排列、不重疊）-->
  <text x="110" y="245" font-size="13" fill="#0B3D5C" font-weight="bold" text-anchor="middle">⏫ 浮起來</text>
  <text x="110" y="262" font-size="10" fill="#666" text-anchor="middle">密度 &lt; 水（0.7 g/cm³）</text>
  <text x="110" y="278" font-size="10" fill="#666" text-anchor="middle">浮力 &gt; 重力</text>

  <!-- 缸 2：中性 -->
  <rect x="240" y="50" width="160" height="170" fill="#cde7f5" stroke="#555" stroke-width="2"/>
  <line x1="240" y1="82" x2="400" y2="82" stroke="#0a4f6e" stroke-width="1.5"/>
  <text x="320" y="145" font-size="22" text-anchor="middle">⏸️</text>
  <!-- 浮力箭頭（中段、綠色）-->
  <line x1="358" y1="180" x2="358" y2="160" stroke="#5BA651" stroke-width="3" marker-end="url(#upArr)"/>
  <text x="366" y="174" font-size="9" fill="#5BA651" font-weight="bold">浮</text>
  <!-- 重力箭頭（中段、紅色）-->
  <line x1="282" y1="110" x2="282" y2="130" stroke="#C2452D" stroke-width="3" marker-end="url(#dnArr)"/>
  <text x="266" y="123" font-size="9" fill="#C2452D" font-weight="bold">重</text>
  <text x="320" y="245" font-size="13" fill="#0B3D5C" font-weight="bold" text-anchor="middle">⏸️ 中性浮力</text>
  <text x="320" y="262" font-size="10" fill="#666" text-anchor="middle">浮力 = 重力</text>
  <text x="320" y="278" font-size="10" fill="#666" text-anchor="middle">→ 懸停在水中</text>

  <!-- 缸 3：沉 -->
  <rect x="450" y="50" width="160" height="170" fill="#cde7f5" stroke="#555" stroke-width="2"/>
  <line x1="450" y1="82" x2="610" y2="82" stroke="#0a4f6e" stroke-width="1.5"/>
  <text x="530" y="210" font-size="22" text-anchor="middle">🪨</text>
  <!-- 重力箭頭（紅色，很長）-->
  <line x1="492" y1="100" x2="492" y2="180" stroke="#C2452D" stroke-width="3" marker-end="url(#dnArr)"/>
  <text x="468" y="148" font-size="10" fill="#C2452D" font-weight="bold">重力大</text>
  <!-- 浮力箭頭（綠色，短）-->
  <line x1="568" y1="200" x2="568" y2="185" stroke="#5BA651" stroke-width="2" marker-end="url(#upArr)"/>
  <text x="556" y="180" font-size="9" fill="#5BA651">浮力小</text>
  <text x="530" y="245" font-size="13" fill="#0B3D5C" font-weight="bold" text-anchor="middle">⏬ 沉下去</text>
  <text x="530" y="262" font-size="10" fill="#666" text-anchor="middle">密度 &gt; 水（2.5 g/cm³）</text>
  <text x="530" y="278" font-size="10" fill="#666" text-anchor="middle">浮力 &lt; 重力</text>

  <defs>
    <marker id="upArr" markerWidth="8" markerHeight="8" refX="4" refY="0" orient="auto"><polygon points="0 8, 4 0, 8 8" fill="#5BA651"/></marker>
    <marker id="dnArr" markerWidth="8" markerHeight="8" refX="4" refY="8" orient="auto"><polygon points="0 0, 4 8, 8 0" fill="#C2452D"/></marker>
  </defs>
</svg>`;

// 海水 vs 淡水浮力對比
const BUOYANCY_SALT_SVG = `<svg viewBox="0 0 540 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:540px;background:white;border-radius:12px;border:1px solid #ddd">
  <text x="170" y="22" font-size="14" fill="#0B3D5C" font-weight="bold">💧 vs 🌊 為什麼海水比淡水更浮？</text>

  <!-- 缸 1：淡水 -->
  <rect x="40" y="50" width="180" height="150" fill="#cde7f5" stroke="#555" stroke-width="2"/>
  <line x1="40" y1="80" x2="220" y2="80" stroke="#0a4f6e" stroke-width="1.5"/>
  <text x="60" y="44" font-size="11" fill="#0B3D5C" font-weight="bold">💧 淡水（密度 1.000）</text>
  <text x="115" y="135" font-size="22" text-anchor="middle">⏸️</text>
  <text x="55" y="170" font-size="10" fill="#666">瓶子總重 = 17.4 g</text>
  <text x="55" y="185" font-size="10" fill="#666">才能達中性浮力</text>

  <!-- vs 符號 -->
  <text x="245" y="135" font-size="32" fill="#E89B3C" font-weight="bold">VS</text>

  <!-- 缸 2：海水 -->
  <rect x="320" y="50" width="180" height="150" fill="#a6dff5" stroke="#555" stroke-width="2"/>
  <line x1="320" y1="80" x2="500" y2="80" stroke="#0a4f6e" stroke-width="1.5"/>
  <text x="340" y="44" font-size="11" fill="#0B3D5C" font-weight="bold">🌊 海水（密度 1.025）</text>
  <text x="395" y="135" font-size="22" text-anchor="middle">⏸️</text>
  <text x="335" y="170" font-size="10" fill="#666">瓶子總重 = 17.5 g</text>
  <text x="335" y="185" font-size="10" fill="#C2452D" font-weight="bold">需要多 0.1 g 配重！</text>

  <!-- 鹽巴粒子 -->
  <circle cx="350" cy="100" r="2" fill="#fff"/>
  <circle cx="380" cy="120" r="2" fill="#fff"/>
  <circle cx="410" cy="140" r="2" fill="#fff"/>
  <circle cx="440" cy="160" r="2" fill="#fff"/>
  <circle cx="465" cy="120" r="2" fill="#fff"/>
  <circle cx="425" cy="100" r="2" fill="#fff"/>

  <!-- 結論 -->
  <text x="60" y="220" font-size="11" fill="#0B3D5C" font-weight="bold">📌 海水有「鹽」 → 密度大 2.5% → 浮力大 → 需要更多配重才能潛下去！</text>
</svg>`;

// ============================================================
// 📖 科學名詞小辭典（國小友善版）
// 把報告裡出現的所有專有名詞「翻譯」成國小學生能懂的話
// ============================================================
const SCIENCE_TERMS = [
  // === 潛水生理（實驗 4）===
  {
    term: 'FBP（第一破點）', en: 'First Breaking Point', icon: '💨', cat: '潛水生理',
    kid: '身體第一次大喊「我要呼吸！」的時間點',
    detail: '閉氣時身體會累積二氧化碳，到達一定程度，腦幹會「按警報」逼你呼吸。那個瞬間就是 FBP。我們實驗測得：靜息基準平均 50.6 秒。',
    why: '為什麼要量這個？因為 FBP 縮短代表 CO₂ 累積太快，是「淺水昏迷」的警訊。'
  },
  {
    term: 'HR（心率）', en: 'Heart Rate', icon: '❤️', cat: '潛水生理',
    kid: '一分鐘心臟跳幾下',
    detail: '心臟跳動速度，單位是 bpm（次/分鐘）。安靜時 60-100，運動或緊張會升高。我們實驗：靜息 88 → 連續潛水後 101 bpm。',
    why: '心率上升 = 身體壓力大。連續下潛時心率持續升高 = 該上岸了。'
  },
  {
    term: 'SpO₂（血氧）', en: 'Oxygen Saturation, Peripheral', icon: '🫁', cat: '潛水生理',
    kid: '血液裡有多少氧氣',
    detail: '血液中氧氣的飽和度，單位是 %。正常 95-100%。低於 90% 是危險訊號。我們測得 97 → 96.4% 微幅下降。',
    why: '血氧太低，腦子缺氧會昏倒。這是潛水員最怕的事。'
  },
  {
    term: 'CO₂（二氧化碳）', en: 'Carbon Dioxide', icon: '💨', cat: '潛水生理',
    kid: '我們呼出來的氣',
    detail: '人呼吸時吐出 CO₂。閉氣時 CO₂ 累積在血液裡，到一定程度會觸發 FBP。代謝 CO₂ 的速度決定潛水安全。',
    why: 'CO₂ 才是身體「想呼吸」的訊號，不是缺氧。'
  },
  {
    term: '淺水昏迷（SWB）', en: 'Shallow Water Blackout', icon: '🚨', cat: '潛水生理',
    kid: '上岸時突然昏倒',
    detail: '潛水員上升的時候，血液裡的氧氣突然急速下降，腦子缺氧瞬間昏迷。如果沒人救援會溺水。是潛水最致命的意外。',
    why: '阿美族長輩教的「失手兩次就上岸」就是預防這個。'
  },
  {
    term: 'ABA 序列設計', en: 'ABA Sequence Design', icon: '🔬', cat: '研究方法',
    kid: '先測自己 → 做操作 → 再測自己',
    detail: 'A = 基準（靜息）、B = 操作（疲勞或下潛）、A = 恢復（休息後）。每個人「自己跟自己比」，可以排除個人差異。',
    why: '我們的閉氣實驗用這個設計，5 個人每人 ABA 一次，5 條曲線一致就有說服力。'
  },

  // === 物理（實驗 2、3）===
  {
    term: '阿基米德原理', en: 'Archimedes\' Principle', icon: '⚖️', cat: '物理',
    kid: '東西在水裡會被水推一個力（浮力）',
    detail: '物體在液體中受到的浮力，等於它擠開液體的重量。公式 F = ρVg。希臘人阿基米德 2200 多年前發現的。',
    why: '解釋為什麼有的東西浮、有的沉，也是潛水員配重的科學基礎。'
  },
  {
    term: '中性浮力', en: 'Neutral Buoyancy', icon: '⏸️', cat: '物理',
    kid: '在水裡剛剛好不浮也不沉，停在水中間',
    detail: '當浮力 = 重力時，物體會「停在任何深度」。潛水員調整配重達到中性浮力，能省力。我們實驗測得海水需 17.5g 配重。',
    why: '達到中性浮力的潛水員不用一直踢水，氧氣消耗最少。'
  },
  {
    term: '密度', en: 'Density', icon: '⚖️', cat: '物理',
    kid: '同樣大小，誰比較重',
    detail: '單位體積的質量（g/cm³）。木頭 0.7、水 1.0、海水 1.025、鐵 7.8。密度小於水會浮、大於水會沉。',
    why: '阿公選芭樂木做魚槍是因為 0.7 < 1.025（海水），脫手會浮。'
  },
  {
    term: '光的折射', en: 'Refraction', icon: '👁️', cat: '物理',
    kid: '光從水進到空氣會「轉彎」',
    detail: '光在不同介質（水、空氣）速度不一樣，從一個進到另一個方向會彎折。所以水裡的魚看起來「比較淺、比較近」。',
    why: '阿公說「水裡的眼睛會騙你」就是這個道理。'
  },
  {
    term: '斯涅爾定律', en: 'Snell\'s Law', icon: '📐', cat: '物理',
    kid: '計算光彎多少的數學公式',
    detail: 'n₁ sin θ₁ = n₂ sin θ₂。n 是「折射率」（光在這個介質慢多少）。水 n=1.33，空氣 n=1.00。',
    why: '我們實驗測得 20cm→偏 46mm、30cm→偏 70mm，跟公式算出來只差 1.1%。'
  },
  {
    term: '蛙鏡角放大', en: 'Mask Magnification', icon: '🥽', cat: '物理',
    kid: '戴蛙鏡看起來大 33%、近 25%',
    detail: '蛙鏡裡是空氣，光從水→玻璃→空氣有「角放大」效應。所以戴蛙鏡看物體變大、變近。',
    why: '這跟岸上看水下完全不同 — Mipacing 戴蛙鏡水下射魚要瞄上方補償下墜。'
  },
  {
    term: '拋體運動', en: 'Projectile Motion', icon: '🎯', cat: '物理',
    kid: '東西被丟出去之後會慢慢往下掉',
    detail: '魚槍射出魚標後，魚標飛行時受地心引力 + 水阻力，會「下墜」。距離越遠下墜越多。',
    why: '所以阿美族長輩教「瞄魚頭上方一點」 = 預留下墜空間。'
  },

  // === 天文（實驗 1）===
  {
    term: '潮汐力', en: 'Tidal Force', icon: '🌊', cat: '天文',
    kid: '月亮拉地球海水的力',
    detail: '月亮（和太陽）的萬有引力會把地球的海水「拉起來」。月亮影響比太陽大 2.2 倍。',
    why: '潮汐決定海水深度與流速，影響魚的行為，是 Mipacing 下水時機的關鍵。'
  },
  {
    term: '大潮', en: 'Spring Tide', icon: '⭐', cat: '天文',
    kid: '潮差最大的時候',
    detail: '朔月（新月）和滿月時，太陽—月亮—地球三點一直線，引力疊加。潮差 1.8-2.2m。臺東海域實測。',
    why: '大潮時水流變化大，魚的行為也跟著變，是 Mipacing 最佳時機。'
  },
  {
    term: '小潮', en: 'Neap Tide', icon: '○', cat: '天文',
    kid: '潮差最小的時候',
    detail: '上、下弦月時，太陽和月亮成 90°，引力部分抵消。潮差 0.8-1.2m。',
    why: '小潮時水流溫和，比較適合初學者。'
  },
  {
    term: '萬有引力', en: 'Universal Gravitation', icon: '🧲', cat: '天文',
    kid: '所有有質量的東西互相拉的力',
    detail: '公式 F = G × M × m / r²。質量越大力越大；距離越遠（平方）力越小。月亮雖小但近，所以對地球潮汐影響大。',
    why: '解釋為什麼月亮比太陽更影響潮汐。'
  },
  {
    term: '自轉', en: 'Rotation', icon: '⟳', cat: '天文',
    kid: '地球自己轉一圈',
    detail: '地球繞自己的軸旋轉，一圈 24 小時 = 一天。每個地方會輪流經過「面對月亮」和「背對月亮」兩個鼓起。',
    why: '所以一天會經過 2 個鼓起 = 漲退潮各 2 次。'
  },
  {
    term: '公轉', en: 'Revolution', icon: '🌀', cat: '天文',
    kid: '一個天體繞另一個天體轉',
    detail: '月亮繞地球公轉一圈約 27.3 天；地球繞太陽公轉一圈約 365 天。',
    why: '月亮公轉造成月相變化（朔月→上弦→滿月→下弦）。'
  },

  // === 生態（實驗 5）===
  {
    term: '副漁獲', en: 'Bycatch', icon: '🐢', cat: '生態',
    kid: '不是要的，卻一起被抓的生物',
    detail: '漁網不分種類，也會誤抓海龜、海豚、幼魚、螃蟹⋯這些都會死。底拖網副漁獲率高達 40-60%、蝦拖網 80-90%。',
    why: 'Mipacing 是「目視射擊」，副漁獲率近乎 0%。'
  },
  {
    term: '最大永續產量', en: 'Maximum Sustainable Yield (MSY)', icon: '♻️', cat: '生態',
    kid: '不會把魚抓光的最多量',
    detail: '魚每年自己會生新的小魚。如果只抓「不超過新生量」的數，魚永遠不會少。阿美族「只拿夠用的」就是這原理。',
    why: '阿美族文化規範比現代漁業法規還早千年實踐 MSY。'
  },
  {
    term: '生態棲位', en: 'Ecological Niche', icon: '🪸', cat: '生態',
    kid: '每種魚最喜歡住的地方',
    detail: '不同魚有不同棲息地：石斑躲石縫、鯊魚在開闊水域、小蝦虎在沙地。耆老知道每種魚住哪。',
    why: '獵人懂生態棲位，才知道去哪找想抓的魚。'
  },
  {
    term: 'TEK（傳統生態知識）', en: 'Traditional Ecological Knowledge', icon: '🪶', cat: '文化',
    kid: '原住民幾百年累積的生態智慧',
    detail: '原住民族對大自然的觀察與規範，雖然不靠實驗證明，但實際往往跟科學完全相符。',
    why: '我們的研究就是把阿美族 TEK 用科學語言「翻譯」出來，讓更多人聽懂。'
  }
];

// ============================================================
// 🐟 長濱海域常見魚種辨識卡（放在實驗 3 光折射補充）
// 因為 Mipacing 戴蛙鏡水下要先「辨識」魚種，才能決定瞄不瞄、射不射
// 不同魚種的鱗厚、行為、保育規範都會影響獵法
// ============================================================
const FISH_SPECIES = [
  {
    amis: 'Fati\'alos', zh: '石斑', emoji: '🐟', color: '#4A7C59',
    habitat: '石縫深處',
    feature: '靜止伏擊型，會躲在縫裡',
    note: '★ Mipacing 主要目標魚種',
    aim: '正面視覺，折射偏差小'
  },
  {
    amis: 'Co\'ing', zh: '刺尾鯛（倒吊）', emoji: '🐠', color: '#E89B3C',
    habitat: '礁石區成群',
    feature: '群游、色彩鮮豔',
    note: '常見食用魚',
    aim: '群魚移動快，需提前量'
  },
  {
    amis: 'Tadakolongay', zh: '線紋刺尾鯛（倒吊）', emoji: '🐠', color: '#FFD700',
    habitat: '礁石',
    feature: '白天快速、夜間靜止',
    note: '夜間易射',
    aim: '夜間鱗反光，注意視覺角度'
  },
  {
    amis: 'Fice\'ki', zh: '白毛 / 黑毛', emoji: '🐟', color: '#0B3D5C',
    habitat: '潮間帶',
    feature: '群游、食用魚',
    note: '★ 主要食用魚',
    aim: '中等距離，標準瞄準'
  },
  {
    amis: 'Kaperecay', zh: '鸚哥魚', emoji: '🐠', color: '#5b3580',
    habitat: '珊瑚礁',
    feature: '保育類、鱗片很厚',
    note: '⛔ 保育類，不抓！',
    aim: '若射要斜射穿鱗（傳統知識）'
  },
  {
    amis: 'Lokedaw', zh: '獅子魚', emoji: '🐡', color: '#C2452D',
    habitat: '岩縫、暗區',
    feature: '有神經毒、鰭刺',
    note: '⚠️ 禁忌徒手抓',
    aim: '可射但要小心鰭刺'
  },
  {
    amis: 'Kong', zh: '河豚', emoji: '🐡', color: '#8a5a16',
    habitat: '沙底、礁石',
    feature: '可食用，肝有劇毒',
    note: '⚠️ 料理需專業',
    aim: '射擊容易，料理難'
  },
  {
    amis: 'Tatafik', zh: '鯊魚', emoji: '🦈', color: '#3D1F1A',
    habitat: '深水區',
    feature: '大型掠食者',
    note: '⚠️ 危險，立刻上岸',
    aim: '不獵，避開為主'
  },
  {
    amis: 'Kakahong', zh: '飛魚', emoji: '🐟', color: '#4FA3C7',
    habitat: '浮面、開闊水域',
    feature: '會飛離水面',
    note: '通常用釣法',
    aim: '不下潛獵，水面釣'
  }
];

// 暴露給全域
window.FISH_SPECIES = FISH_SPECIES;
window.SCIENCE_TERMS = SCIENCE_TERMS;
window.SCENE_SVGS = SCENE_SVGS;
window.TIDE_SYSTEM_SVG = TIDE_SYSTEM_SVG;
window.TIDE_BULGE_SVG = TIDE_BULGE_SVG;
window.MOON_FISH_SVG = MOON_FISH_SVG;
window.BUOYANCY_3_SVG = BUOYANCY_3_SVG;
window.BUOYANCY_SALT_SVG = BUOYANCY_SALT_SVG;
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
