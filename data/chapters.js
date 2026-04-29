// Pacing 海味藏冰箱 — 章節資料 single source of truth
// 兩種模式（簡報 / 自學）共用此資料
// featured: true = 視訊簡報 10 分鐘精選

const AMIS_GLOSSARY = [
  { word: 'Mipacing', zh: '潛水射魚', def: '阿美族男人在海裡用魚槍打魚的傳統文化', audio: 'mipacing' },
  { word: 'Pacing', zh: '魚槍 / 射魚', def: '木頭做的魚槍，用橡皮筋彈力射出魚標', audio: 'pacing' },
  { word: 'Mipacingay', zh: '會潛水射魚的人', def: '熟練的潛水獵人', audio: 'mipacingay' },
  { word: 'Pa\'araw no folad', zh: '朔月（新月）', def: '看不到月亮的晚上，魚最好抓的時候', audio: 'paaraw' },
  { word: 'Taway', zh: '上弦月', def: '半圓的月亮（前半月）', audio: 'taway' },
  { word: 'Canglalan', zh: '滿月', def: '月亮最圓最亮，魚會躲深水裡', audio: 'canglalan' },
  { word: 'Masakalaw', zh: '下弦月', def: '半圓的月亮（後半月）', audio: 'masakalaw' },
  { word: 'Salimpo', zh: '部落名', def: '臺東長濱的阿美族部落', audio: 'salimpo' },
  { word: 'Kilang no Kiyafes', zh: '芭樂樹幹', def: '做魚槍的木頭，輕又有彈性', audio: 'kilang' },
  { word: 'Tilefes', zh: '櫸木', def: '另一種做魚槍的木頭', audio: 'tilefes' },
  { word: 'Faki', zh: '叔叔／伯伯', def: '對男性長輩的尊稱', audio: 'faki' },
  { word: 'Fayi', zh: '阿姨／姑姑', def: '對女性長輩的尊稱', audio: 'fayi' },
  { word: 'Akong', zh: '阿公', def: '對年長男性的尊稱', audio: 'akong' },
  { word: 'Singsi', zh: '老師', def: '日語借詞，學識淵博的人', audio: 'singsi' },
  { word: 'Kaka', zh: '哥哥／姊姊', def: '對年長同輩的尊稱', audio: 'kaka' },
  { word: 'Tatafik', zh: '鯊魚', def: '深海大魚', audio: 'tatafik' },
  { word: 'Lokedaw', zh: '獅子魚', def: '有神經毒，不能徒手抓', audio: 'lokedaw' },
  { word: 'Fati\'alos', zh: '石斑', def: '常躲在石縫裡的魚', audio: 'fatialos' },
  { word: 'Kaperecay', zh: '鸚哥魚', def: '保育類，鱗片很厚', audio: 'kaperecay' },
  { word: 'Fice\'ki', zh: '白毛 / 黑毛', def: '常見潮間帶魚種', audio: 'ficeki' },
  { word: 'Kong', zh: '河豚', def: '可食用，但要小心料理', audio: 'kong' },
  { word: 'Kakahong', zh: '飛魚', def: '會飛離水面的魚', audio: 'kakahong' },
  { word: 'Sela\'', zh: '呼吸／氣息', def: '生命的氣息', audio: 'sela' },
  { word: 'Pasela\'', zh: '休息／喘氣', def: '回到水面換氣休息', audio: 'pasela' },
  { word: 'Malileng', zh: '頭暈', def: '二氧化碳累積太多會頭暈', audio: 'malileng' },
  { word: 'Komaing', zh: '身體軟綿綿', def: '身體沒力氣的感覺', audio: 'komaing' },
  { word: 'Sapihokhok', zh: '埋伏射魚', def: '安靜躲在石頭旁等魚游近', audio: 'sapihokhok' },
  { word: 'La\'ed', zh: '距離', def: '魚跟你之間的距離', audio: 'laed' },
  { word: 'Ngala\'', zh: '空隙', def: '海中的空間或縫隙', audio: 'ngalaa' },
  { word: 'Pacingko', zh: '彈弓魚槍', def: '日治時代的魚槍（日語借詞）', audio: 'pacingko' }
];

const ELDERS = [
  { id: 'adiyaw', name: 'Faki Adiyaw', role: '青年獵人 · 思想家', quote: '這個問題不是阿美族的問題，是大多數漢人社會的價值觀問題。', detail: '反思漁獵文化與現代社會衝突；提出漁獵倫理「只拿夠用的」、「分享給沒收穫的同伴」。', img: 'assets/img/field/field_03.jpg' },
  { id: 'fuyan', name: 'Singsi Fuyan', role: '中壯年 · 翻譯官', quote: '做什麼事，就要拿什麼裝備，這樣才會事半功倍！', detail: '把傳統技術轉譯成現代語言，講解中性浮力、橡皮筋彈性、偽裝策略。', img: 'assets/img/field/field_05.jpg' },
  { id: 'faol', name: 'Akong Faol', role: '耆老 · 海底辭典', quote: '海底每一塊石頭，我都認得。', detail: '六十年的水下觀察，能用阿美語叫出每一種魚的名字、躲在哪、什麼季節出現。', img: 'assets/img/field/field_07.jpg' },
  { id: 'lakaw', name: 'Fayi Lakaw', role: '女性獵人 · 破規者', quote: '以前的漁獵沒有女生，我是偷學的。', detail: '打破「漁獵是男人的事」這個傳統規範，用身體實踐學會 Mipacing。', img: 'assets/img/field/field_08.jpg' },
  { id: 'kaysang', name: 'Kaka Kaysang', role: '青年示範者', quote: '上岸不是認輸，是規矩。', detail: '帶領研究團隊實際下海，示範 Sapihokhok（埋伏射魚）技術。', img: 'assets/img/field/field_09.jpg' }
];

const CHAPTERS = [
  // 0. 封面
  {
    id: 'cover', num: 0, title: '耆老好會 · Pacing 海味藏冰箱', subtitle: '解密阿美族 Mipacing 漁獵文化的科學智慧',
    featured: true,
    presentMode: {
      heading: '耆老好會 · Pacing 海味藏冰箱',
      subheading: '解密阿美族 Mipacing 漁獵文化的科學智慧',
      meta: '臺東縣 Salimpo 阿美山海文化實驗小學 · 114 學年度科學展覽',
      team: '研究團隊：舞絲艾·瑟拉、萬鎧丞、林知樂、林知禮',
      teachers: '指導老師：陳祈宏、賴奕芸',
      bgImage: 'assets/img/field/field_01.jpg'
    },
    learnMode: {
      welcome: '哈囉！歡迎來到 Mipacing 的世界！',
      intro: '你知道嗎？阿美族的阿公們，光是用一支木頭做的魚槍，就能在海裡打到魚，而且打中的位置剛剛好！這背後其實藏著很多科學的祕密。讓我們一起來揭開這些祕密吧！',
      hint: '👇 點下面的章節導覽，從第 1 章開始學',
      bgImage: 'assets/img/field/field_01.jpg'
    },
    amisHighlight: 'Mipacing'
  },

  // 1. 為什麼研究
  {
    id: 'why', num: 1, title: '為什麼要研究 Mipacing？',
    featured: true,
    presentMode: {
      heading: '為什麼研究 Mipacing？',
      keypoints: [
        { icon: '🌊', title: '文化在消失', text: '會 Mipacing 的耆老越來越少，年輕人都到都市去了' },
        { icon: '🔬', title: '科學在身邊', text: '阿公的智慧裡藏著浮力、光學、生理學' },
        { icon: '🤿', title: '我們想下海', text: '我們是 Salimpo 的孩子，海是我們的家' }
      ],
      image: 'assets/img/field/field_02.jpg'
    },
    learnMode: {
      story: [
        { title: '小時候的疑問', text: '從小看著阿公背著魚槍下海，我一直很好奇：為什麼阿公要先看月亮才下水？為什麼他的魚槍射那麼遠？為什麼他每次都打得到魚，我自己嘗試卻射不到？' },
        { title: '原來是科學', text: '在學校上自然課的時候，老師講到「光的折射」，講到「浮力」，講到「呼吸跟肺活量」⋯⋯咦？這些不就是阿公在做的事嗎？阿公雖然沒念過大學，但他做的事都符合科學！' },
        { title: '我們的任務', text: '所以我們決定，要用科學的眼睛，把阿公口中的智慧記錄下來，做成科學實驗來證明它。這樣以後就算阿公不在了，我們也可以把這些智慧傳下去。' }
      ],
      image: 'assets/img/field/field_02.jpg'
    },
    amisHighlight: 'Mipacing'
  },

  // 2. 研究問題與假設
  {
    id: 'qhypoth', num: 2, title: '我們想問什麼？',
    featured: true,
    presentMode: {
      heading: '研究問題與假設',
      mainQ: '阿美族 Mipacing 文化裡，藏著什麼科學原理？',
      subQs: [
        { num: 'Q1', text: '為什麼要看月亮決定下水時機？', exp: '實驗 1' },
        { num: 'Q2', text: '魚槍為什麼用木頭做？', exp: '實驗 2' },
        { num: 'Q3', text: '為什麼瞄準魚卻打不中？', exp: '實驗 3' },
        { num: 'Q4', text: '為什麼說「失手兩次就要上岸」？', exp: '實驗 4' },
        { num: 'Q5', text: '阿公的漁獵方式跟其他漁法比，誰最永續？', exp: '實驗 5' }
      ]
    },
    learnMode: {
      explain: {
        title: '什麼是「假設」？',
        text: '科學家在做實驗前，會先猜「我覺得結果可能會是這樣」，這個猜測就叫做「假設」。然後做實驗來看看猜得對不對。',
        examples: [
          '假設：水越深，看到的魚位置和真實位置的偏差越大 → 實驗證明 ✅',
          '假設：海水的浮力比淡水大 → 實驗證明 ✅',
          '假設：休息 30 秒，身體就能恢復 → 實驗證明錯誤 ❌（要更久）'
        ]
      },
      explainVar: {
        title: '什麼是「變因」？',
        text: '做實驗時，「我們改變的東西」叫操縱變因，「我們要量的結果」叫應變變因，「不能變的東西」叫控制變因。',
        example: '例：折射實驗中，水深是「操縱變因」，看到的偏差量是「應變變因」，硬幣大小是「控制變因」。'
      }
    }
  },

  // 3. 研究方法地圖
  {
    id: 'methods', num: 3, title: '我們是怎麼做研究的？',
    presentMode: {
      heading: '研究方法 · 四步驟流程',
      flow: [
        { step: 1, icon: '👴', label: '耆老訪談', text: '訪問 5 位耆老，把他們的話錄下來' },
        { step: 2, icon: '🧪', label: '實驗設計', text: '把耆老說的話變成可以測量的實驗' },
        { step: 3, icon: '📊', label: '現場驗證', text: '到海邊和實驗室，做 5 個科學實驗' },
        { step: 4, icon: '🌟', label: '文化整合', text: '把科學數據和阿美族文化連結起來' }
      ]
    },
    learnMode: {
      timeline: [
        { date: '1 月', task: '訪問 Faki Adiyaw 和 Singsi Fuyan，了解魚槍跟潛水裝備' },
        { date: '2 月', task: '設計 5 個科學實驗，找實驗器材' },
        { date: '3 月', task: '訪問 Akong Faol 和 Fayi Lakaw，到海邊現場做實驗' },
        { date: '4 月', task: '跟 Kaka Kaysang 一起下海實作 Mipacing' },
        { date: '4 月底', task: '把所有資料整理寫成報告' }
      ]
    }
  },

  // 4. 實驗 1
  {
    id: 'exp1', num: 4, title: '實驗 1 · 月亮告訴我們的事',
    featured: true,
    presentMode: {
      heading: '實驗 1 · 月亮 × 潮汐 × 魚',
      elderQuote: { who: 'Akong Faol', text: '無月亮的晚上最好，魚躲在石縫不會亂跑。' },
      findings: [
        { title: '朔月／滿月', detail: '大潮，潮差 1.8–2.2 m', tag: '🐟 適合' },
        { title: '上／下弦月', detail: '小潮，潮差 0.8–1.2 m', tag: '🐠 普通' },
        { title: '亮月夜', detail: '魚會逃到深處', tag: '⚠️ 不易' }
      ],
      conclusion: '耆老看月相判斷潮汐 = 古代的「月相曆」'
    },
    learnMode: {
      story: '阿美族的阿公會看月亮決定要不要下海。為什麼？因為月亮的「引力」會把海水往它的方向拉，月亮特別圓或特別不圓的時候（滿月或新月），地球、月球、太陽排成一直線，海水被拉得最高、退得最低，這就叫做「大潮」。大潮時水流變化大，魚的行為也跟著變。',
      moonTable: [
        { phase: '🌑 新月', amis: 'Pa\'araw no folad', tide: '大潮', fish: '無月光，魚躲石縫', mipacing: '⭐ 最佳' },
        { phase: '🌓 上弦月', amis: 'Taway', tide: '小潮', fish: '魚活動中等', mipacing: '✓ 可以' },
        { phase: '🌕 滿月', amis: 'Canglalan', tide: '大潮', fish: '月光太亮，魚逃深處', mipacing: '✗ 不易' },
        { phase: '🌗 下弦月', amis: 'Masakalaw', tide: '小潮', fish: '前半夜可下水', mipacing: '✓ 可以' }
      ],
      interactive: 'moonTide',
      tooltip: [
        { word: '引力', def: '看不見的「拉力」，月亮會把地球的水往它的方向拉' },
        { word: '潮差', def: '海水漲到最高，跟退到最低的高度差' }
      ]
    },
    amisHighlight: ['Pa\'araw no folad', 'Canglalan']
  },

  // 5. 實驗 2
  {
    id: 'exp2', num: 5, title: '實驗 2 · 魚槍的祕密',
    featured: true,
    presentMode: {
      heading: '實驗 2 · 浮力 × 密度 × 中性浮力',
      elderQuote: { who: 'Singsi Fuyan', text: '穿這麼厚不配鉛塊會浮在上面，要配到剛好「中性浮力」。' },
      findings: [
        { title: '木頭密度', detail: '0.6–0.7 g/cm³', tag: '< 海水' },
        { title: '海水密度', detail: '1.025 g/cm³', tag: '基準' },
        { title: '白鐵密度', detail: '7.8 g/cm³', tag: '> 海水' }
      ],
      data: [
        { label: '淡水中', value: 17.4, unit: 'g' },
        { label: '海水中', value: 17.5, unit: 'g' }
      ],
      conclusion: '木頭浮、鐵沉、加重「剛好」就能停在水中間'
    },
    learnMode: {
      story: '阿公的魚槍是用「芭樂木」或「櫸木」做的，為什麼不用鐵？因為木頭比海水「輕」（密度小），就算魚槍脫手了，它會浮在海面上，不會沉到海底找不到。但是潛水的人穿著厚厚的防寒衣會浮在水面，沒辦法潛下去。所以他們要在身上綁「鉛塊」，剛好把多餘的浮力抵消掉，這就叫做「中性浮力」——身體不會浮也不會沉，剛好停在你想停的地方。',
      diagram: { title: '阿基米德原理', text: '物體在水裡會被水推一個力（浮力），這個力等於「物體擠開的水的重量」。' },
      interactive: 'buoyancy',
      tooltip: [
        { word: '密度', def: '同樣大小，誰比較重 = 密度大' },
        { word: '中性浮力', def: '在水裡剛好不浮也不沉，停在中間' }
      ]
    },
    amisHighlight: ['Kilang no Kiyafes', 'Tilefes']
  },

  // 6. 實驗 3
  {
    id: 'exp3', num: 6, title: '實驗 3 · 水裡的眼睛會騙你',
    featured: true,
    presentMode: {
      heading: '實驗 3 · 光折射 × 射擊補償',
      elderQuote: { who: 'Faki Adiyaw', text: '水裡的眼睛會騙你，要往下壓才能命中魚。' },
      findings: [
        { title: '水深 20 cm', detail: '偏差 46 mm（約 4.6 cm）', tag: '近距離' },
        { title: '水深 30 cm', detail: '偏差 70 mm（約 7 cm）', tag: '遠距離' },
        { title: '理論誤差', detail: '< 1.1%', tag: '吻合斯涅爾定律' }
      ],
      conclusion: '水越深 → 偏差越大 → 要往下壓越多'
    },
    learnMode: {
      story: '你有沒有看過玻璃杯裡的吸管？看起來是「彎」的，對不對？其實吸管是直的，是光線在水跟空氣的交界「轉了個彎」，讓你的眼睛被騙了。在海裡也是一樣，魚的位置看起來「比較淺、比較近」，但其實牠在更深的地方。',

      // 詳細原理
      principleTitle: '🔬 為什麼光會「轉彎」？',
      principleSteps: [
        { num: 1, icon: '⚡', title: '光在不同地方跑得不一樣快', text: '光在空氣裡跑得很快（每秒 30 萬公里）；到水裡會變慢，只剩約 75% 的速度。' },
        { num: 2, icon: '↪️', title: '速度變了，方向就轉彎', text: '光從水跑出空氣時，因為速度突然變快，方向會「轉一個彎」。這個現象叫「折射」。' },
        { num: 3, icon: '🚲', title: '想像腳踏車衝進泥地', text: '你騎腳踏車從柏油路衝進泥地，車輪一邊還轉、一邊打滑，整輛車就會自然轉彎。光也是同樣的道理！' },
        { num: 4, icon: '🧠', title: '你的大腦被騙了', text: '大腦不知道光彎折過，以為光是「直直」過來的。它把光線往回延長，計算出的位置就「比實際淺、比實際近」。' }
      ],

      // 3 種觀察情境
      scenariosTitle: '👁️ 3 種觀察情境的差異',
      scenariosIntro: '同樣一條魚，從不同地方看會有不同的視覺偏差。Mipacing 獵人最常用的是情境 3。',
      scenarios: [
        {
          id: 'A', label: '🏖️ 情境 1：站在岸上往水裡看', icon: '🧍‍♂️',
          eyeIn: '空氣中', fishIn: '水中',
          effect: '看到的魚 → 比實際位置「淺」（更靠近水面）+ 「近」（更靠近你）',
          aim: '⬇️ 要瞄準看到位置的「下方一點」',
          why: '光從水中出來時被折射，視覺位置往上偏。要射真實的魚，槍口要往下壓。',
          color: '#4FA3C7'
        },
        {
          id: 'B', label: '🤿 情境 2：完全潛在水裡，裸眼看', icon: '👀',
          eyeIn: '水中', fishIn: '水中',
          effect: '看到的魚 = 實際位置（沒有折射！）但裸眼在水裡看不清楚，會模糊',
          aim: '👀 直接瞄準看到位置（裸眼幾乎不偏）',
          why: '光在同一個介質（水）裡走，沒有過界，所以不折射。但人眼不適合水中對焦，畫面糊糊的。',
          color: '#0B3D5C'
        },
        {
          id: 'C', label: '😎 情境 3：戴蛙鏡潛水（Mipacing 最常用）', icon: '🥽',
          eyeIn: '蛙鏡裡的空氣', fishIn: '水中',
          effect: '看到的魚 → 變大 1.33 倍 + 距離只有實際距離的 75%（看起來「比較大、比較近」）',
          aim: '🎯 近距離：瞄準看到位置的「下方一點」｜遠距離：「再多壓一點」',
          why: '蛙鏡裡是空氣，光從水→玻璃→空氣，跟情境 1 的物理一樣。所以耆老的「往下壓」對戴蛙鏡的潛水獵人也適用。',
          color: '#E89B3C'
        }
      ],

      // 阿公口訣的科學解析
      aimSummary: {
        title: '🎯 阿公的口訣：「往下壓才能命中」',
        text: 'Faki Adiyaw 說：「水裡的眼睛會騙你，要往下壓才能命中魚。」這句話對應到三個科學事實：',
        points: [
          '✅ 折射讓你看到的魚「比實際位置淺」 → 要瞄準下方修正',
          '✅ 距離越遠，折射偏差越大 → 遠的魚要「壓越多」（實驗：20cm→偏 4.6cm；30cm→偏 7cm）',
          '⚖️ 同時魚標飛行會被重力下墜，但在 Mipacing 近距離（1-2 公尺）內，「折射偏差」比「重力下墜」大很多',
          '👉 所以淨結果：**要瞄準看到位置的「下方一點」**，距離越遠壓越多'
        ]
      },

      whyTitle: '為什麼會這樣？',
      whyText: '光在空氣中跑得比較快，到水裡會變慢，所以從水裡出來時方向會「彎折」。我們的大腦以為光是直直過來的，所以判斷錯位置。',
      interactive: 'refraction',
      tooltip: [
        { word: '折射', def: '光從一種透明物質進到另一種，方向會變' },
        { word: '斯涅爾定律', def: '科學家算出折射有多少的數學公式' }
      ]
    },
    amisHighlight: ['Pacing']
  },

  // 7. 實驗 4
  {
    id: 'exp4', num: 7, title: '實驗 4 · 連續失手兩次就上岸',
    featured: true,
    presentMode: {
      heading: '實驗 4 · CO₂ 累積 × 第一破點',
      elderQuote: { who: 'Fayi Lakaw', text: '連續失手兩次，一定要上岸。這個規矩救過很多人的命。' },
      findings: [
        { title: '基準閉氣', detail: '50.6 秒', tag: 'Baseline' },
        { title: '第一次後', detail: '50.8 秒（正常）', tag: 'OK' },
        { title: '30 秒後再潛', detail: '41.6 秒（縮短 18.1%）', tag: '⚠️ 危險' }
      ],
      data: [
        { label: '靜息心率', value: 88.2, unit: 'bpm' },
        { label: '第一次後', value: 96.6, unit: 'bpm' },
        { label: '第二次後', value: 101.0, unit: 'bpm' }
      ],
      conclusion: '只休息 30 秒不夠 → CO₂ 累積 → 要強制上岸'
    },
    learnMode: {
      story: '當我們憋氣的時候，身體會一直製造「二氧化碳」（CO₂）。CO₂ 累積到某個程度，身體會大喊「我要呼吸！」這個點叫做「第一破點」（FBP）。如果你沒上岸繼續憋氣，最危險的事情會發生——上升的時候血液裡的氧氣突然急速下降，腦子缺氧，人就昏倒了，這叫「淺水昏迷」。',
      tableTitle: '我們的實驗結果',
      tableData: [
        { label: '安靜坐著（基準）', fbp: '50.6 秒', heart: '88 bpm' },
        { label: '第一次下潛', fbp: '50.8 秒', heart: '97 bpm' },
        { label: '只休息 30 秒，第二次下潛', fbp: '41.6 秒 ⬇', heart: '101 bpm ⬆' },
        { label: '休息 30 分鐘後', fbp: '68.2 秒 🚀', heart: '回到基準' }
      ],
      whyTitle: '為什麼要「上岸」而不是「水面換氣」？',
      whyText: '在水面上換氣，身體還是處於水中環境，肌肉緊繃，CO₂ 代謝慢。離開水、放鬆身體、深呼吸，才能真的把 CO₂ 排乾淨。',
      interactive: 'co2timer',
      tooltip: [
        { word: 'CO₂', def: '我們呼出來的氣體，二氧化碳' },
        { word: '第一破點 FBP', def: '身體第一次大喊「我要呼吸」的時候' },
        { word: '淺水昏迷', def: '上升時血氧突然下降，腦缺氧昏倒' }
      ]
    },
    amisHighlight: ['Sela\'', 'Pasela\'', 'Malileng']
  },

  // 8. 實驗 5（重寫：5 種漁法大比較）
  {
    id: 'exp5', num: 8, title: '實驗 5 · 5 種漁法大比較',
    featured: true,
    presentMode: {
      heading: '實驗 5 · 為什麼 Mipacing 比現代漁法更永續？',
      elderQuote: { who: 'Faki Adiyaw', text: '簍子做太大會被笑貪心。我們的魚槍打到魚是一槍斃命，珊瑚礁不會被弄壞。' },
      summary: '5 種漁法 × 8 個面向 × 1 個答案：Mipacing 在每一項永續指標上都領先',
      conclusion: 'Mipacing 不是落後的傳統，是領先千年的永續科學'
    },
    learnMode: {
      story: '阿公說「簍子做太大會被笑貪心」。我們把全世界 5 種主要漁法擺在一起比較才發現——阿美族用的方法，竟然在「選擇性、副漁獲、棲地保護、永續性」每一項都贏！這不是巧合，是阿美族人觀察大海幾百年累積出來的科學智慧。',
      hint: '👇 滑桿可切換看不同漁法的雷達圖（越外圈越永續）'
    },
    amisHighlight: ['Mipacing', 'Pasela\'']
  },

  // 9. 跨實驗整合
  {
    id: 'synth', num: 9, title: '整合 · Mipacing 完整流程',
    presentMode: {
      heading: '一次 Mipacing 的完整流程',
      flow: [
        { step: 1, color: '#0B3D5C', icon: '🌙', label: '看月相 / 潮汐', exp: '實驗 1' },
        { step: 2, color: '#4FA3C7', icon: '🎒', label: '準備裝備', exp: '實驗 2' },
        { step: 3, color: '#4FA3C7', icon: '⚖️', label: '調中性浮力', exp: '實驗 2' },
        { step: 4, color: '#E89B3C', icon: '🎯', label: '光折射補償', exp: '實驗 3' },
        { step: 5, color: '#C2452D', icon: '💨', label: '監控體能', exp: '實驗 4' },
        { step: 6, color: '#4A7C59', icon: '🌱', label: '永續取用', exp: '實驗 5' }
      ]
    },
    learnMode: {
      story: '原來 Mipacing 不只是「下海打魚」這麼簡單。阿公從出門前就在用科學：看月亮判斷潮汐、選對的木頭做槍、配重達到中性浮力、瞄準時往下壓、累了就上岸、最後只拿夠用的回家。整個過程是一套完整的科學系統！',
      summary: '阿公們不需要拿過諾貝爾獎，他們的智慧就是科學。'
    }
  },

  // 10. TEK 對話對照表
  {
    id: 'tek', num: 10, title: '耆老的話 = 科學的話 = 我們的對話',
    featured: true,
    presentMode: {
      heading: '耆老知識 × 科學原理 × 我們的對話',
      table: [
        { elder: '看月亮決定下水', science: '月球引力 → 潮汐', data: '潮差表（實驗 1）' },
        { elder: '木頭浮鐵沉', science: '密度比較', data: '0.6 g/cm³ vs 7.8 g/cm³' },
        { elder: '配鉛塊到剛好', science: '中性浮力', data: '17.4 g vs 17.5 g（淡/海水）' },
        { elder: '水裡眼睛會騙你', science: '光的折射', data: '20cm→46mm；30cm→70mm' },
        { elder: '失手兩次就上岸', science: 'CO₂ 累積', data: 'FBP 縮短 18.1%' },
        { elder: '只拿夠用的', science: '最大永續產量', data: '副漁獲 0% vs 拖網 40-60%' }
      ]
    },
    learnMode: {
      story: '我們把所有的耆老智慧、科學原理、實驗數據放在一起對照，發現一件神奇的事——阿公講的每一句話，都對應到一個科學原理，而且我們做的實驗結果都跟阿公說的一樣！這不是「用科學審查文化」，是「用兩種語言講同一件事」。'
    }
  },

  // 11. 阿美語小辭典
  {
    id: 'glossary', num: 11, title: '阿美語小辭典',
    presentMode: {
      heading: '阿美語關鍵詞',
      featured: ['Mipacing', 'Pa\'araw no folad', 'Sapihokhok', 'Pasela\'', 'Sela\'']
    },
    learnMode: {
      hint: '👇 點擊每張卡片，可以聽阿公怎麼念'
    }
  },

  // 12. 小測驗
  {
    id: 'quiz', num: 12, title: '小測驗 · 我學到什麼？',
    skipInPresent: true,
    learnMode: {
      hint: '答對 8 題以上可以拿到「小耆老獎章」！',
      questions: [
        { q: '為什麼阿公的魚槍要用木頭做，不用鐵做？', options: ['木頭比較好看', '木頭會浮起來，脫手了不會沉到海底', '鐵會生鏽', '木頭比較便宜'], answer: 1, explain: '木頭密度比海水小，浮力大於重力 → 浮在水面，不會弄丟。' },
        { q: '在海水中達到中性浮力，需要的配重比淡水中…', options: ['一樣多', '比較少', '比較多（因為海水浮力大）', '不一定'], answer: 2, explain: '海水密度 1.025 > 淡水 1.000，浮力較大，需要更多配重抵消。' },
        { q: '為什麼要瞄準「魚頭上方一點」才打得中？', options: ['因為魚會逃跑', '因為光在水裡折射，魚的真實位置比看到的位置低', '因為魚會躲', '因為魚槍會抖'], answer: 1, explain: '光線從水到空氣會折射，眼睛看到的位置偏高，要往下修正。' },
        { q: '水深越深，視覺偏差會：', options: ['越小', '越大', '不變', '消失'], answer: 1, explain: '水深 20cm 偏差 46mm，水深 30cm 偏差 70mm — 越深越大！' },
        { q: '「Pa\'araw no folad」在阿美語是什麼意思？', options: ['滿月', '新月（朔月）', '太陽', '海洋'], answer: 1, explain: '新月時月亮看不到，是 Mipacing 最佳時機。' },
        { q: '為什麼「連續失手兩次就要上岸」？', options: ['失敗很丟臉', '身體 CO₂ 累積太多，可能會淺水昏迷', '魚槍壞了', '怕被罵'], answer: 1, explain: 'CO₂ 累積會導致判斷力下降，最終可能淺水昏迷溺水。' },
        { q: '休息 30 秒和休息 30 分鐘，第二次閉氣時間：', options: ['一樣久', '30 秒就足夠', '30 分鐘後反而更久（超恢復）', '休息越久越短'], answer: 2, explain: '實驗顯示 30 分鐘後可達 68.2 秒，比原本 50.6 秒還久！' },
        { q: '為什麼阿美族人不抓「帶卵的母魚」？', options: ['味道不好', '保護下一代，讓族群可以繁衍', '魚太小', '不能吃'], answer: 1, explain: '保護繁殖能力 = 永續海洋的科學智慧。' },
        { q: '5 種漁法中，副漁獲（誤抓）比例最高的是？', options: ['Mipacing', '釣魚', '底拖網', '養殖'], answer: 2, explain: '底拖網副漁獲 40-60%，蝦拖網甚至 80-90%。Mipacing 接近 0%。' },
        { q: '阿美族「分享」漁獲給沒收穫的同伴，這在科學上的意義是：', options: ['只是禮貌', '降低個體捕撈壓力，社會性漁獲管制', '怕被搶走', '習慣'], answer: 1, explain: '透過文化規範自然控制漁獲量，比政府法規還早上千年！' }
      ]
    }
  },

  // 13. Q&A 準備區（新增章節）
  {
    id: 'qa', num: 13, title: 'Q&A 準備區 · 評審會問什麼？',
    skipInPresent: true,
    learnMode: { useQAData: true }
  },

  // 14. 致謝（變第 14 章）
  {
    id: 'credits', num: 14, title: '致謝 · 田野紀錄',
    featured: true,
    presentMode: {
      heading: '謝謝陪我們的人',
      elders: ELDERS,
      thanks: ['Salimpo 阿美山海文化實驗小學', '指導老師：陳祈宏、賴奕芸', '我們的家人']
    },
    learnMode: {
      thankYou: '謝謝你看完！',
      gallery: [
        'assets/img/field/field_01.jpg',
        'assets/img/field/field_02.jpg',
        'assets/img/field/field_03.jpg',
        'assets/img/field/field_04.jpg',
        'assets/img/field/field_05.jpg',
        'assets/img/field/field_06.jpg',
        'assets/img/field/field_07.jpg',
        'assets/img/field/field_08.jpg',
        'assets/img/field/field_09.jpg'
      ],
      refs: [
        '蔡政良（2015）。Micinko／Mipacin（打魚）。原住民族文獻第 23 期',
        '蔡政良（2023）。第五道浪之後：阿美族水下獵人的海洋知識。臺東：史前文化博物館',
        'Pauly et al. (1998). Fishing down marine food webs. Science, 279, 860-863',
        'Lindholm & Lundgren (2009). Breath-hold diving physiology. J Appl Physiol, 106, 284-292',
        'Berkes (2018). Sacred Ecology (4th ed.). Routledge',
        '中央氣象署潮汐預報系統'
      ]
    }
  }
];

window.CHAPTERS = CHAPTERS;
window.AMIS_GLOSSARY = AMIS_GLOSSARY;
window.ELDERS = ELDERS;
