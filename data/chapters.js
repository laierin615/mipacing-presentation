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
      bgImage: 'assets/img/field/field_01.jpg',
      videoUrl: 'https://www.youtube.com/embed/E8U5AL7h9PY'
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

  // 3. 研究架構 × Mipacing 完整流程（原第 3 + 第 9 章合併）
  {
    id: 'methods', num: 3, title: '研究架構 × Mipacing 完整流程',
    presentMode: {
      heading: '研究方法 × Mipacing 流程',
      researchFlow: [
        { step: 1, icon: '👴', label: '耆老訪談', text: '訪問 5 位耆老，把他們的話錄下來' },
        { step: 2, icon: '🧪', label: '實驗設計', text: '把耆老說的話變成可以測量的實驗' },
        { step: 3, icon: '📊', label: '現場驗證', text: '到海邊和實驗室，做 5 個科學實驗' },
        { step: 4, icon: '🌟', label: '文化整合', text: '把科學數據和阿美族文化連結起來' }
      ],
      mipacingFlow: [
        { step: 1, color: '#0B3D5C', icon: '🌙', label: '看月相 / 潮汐', exp: '實驗 1' },
        { step: 2, color: '#4FA3C7', icon: '🎒', label: '準備裝備', exp: '實驗 2' },
        { step: 3, color: '#4FA3C7', icon: '⚖️', label: '調中性浮力', exp: '實驗 2' },
        { step: 4, color: '#E89B3C', icon: '🎯', label: '光折射補償', exp: '實驗 3' },
        { step: 5, color: '#C2452D', icon: '💨', label: '監控體能', exp: '實驗 4' },
        { step: 6, color: '#4A7C59', icon: '🌱', label: '永續取用', exp: '實驗 5' }
      ]
    },
    learnMode: {
      timeline: [
        { date: '1 月', task: '訪問 Faki Adiyaw 和 Singsi Fuyan，了解魚槍跟潛水裝備' },
        { date: '2 月', task: '設計 5 個科學實驗，找實驗器材' },
        { date: '3 月', task: '訪問 Akong Faol 和 Fayi Lakaw，到海邊現場做實驗' },
        { date: '4 月', task: '跟 Kaka Kaysang 一起下海實作 Mipacing' },
        { date: '4 月底', task: '把所有資料整理寫成報告' }
      ],
      mipacingFlowTitle: '🤿 Mipacing 完整作業流程（從研究方法對應到實際漁獵）',
      mipacingFlowIntro: '原來 Mipacing 不只是「下海打魚」這麼簡單。阿公從出門前就在用科學：看月亮判斷潮汐、選對的木頭做槍、配重達到中性浮力、瞄準時往下壓、累了就上岸、最後只拿夠用的回家。整個過程是一套完整的科學系統！',
      mipacingFlowSummary: '阿公們不需要拿過諾貝爾獎，他們的智慧就是科學。'
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

      // 潮汐物理 4 步驟原理
      principleTitle: '🌍 為什麼月亮會讓海水「漲潮」？',
      principleSteps: [
        { num: 1, icon: '🧲', title: '月亮的「引力」拉海水', text: '萬有引力公式：F = G × M_月 × m / r²。月亮雖然很遠，但它的質量會把地球的水往它的方向拉，水比土地容易被拉動，所以海水會「鼓起來」。' },
        { num: 2, icon: '🌊', title: '一天有兩次漲潮（不只一次！）', text: '月亮對著的那邊水會被拉起來；地球另一邊因為「離心力」效應，水也會凸出來。所以地球自轉一圈，每個地方會經過「面對月亮」和「背對月亮」兩次，一天漲退潮各 2 次。' },
        { num: 3, icon: '🌑🌕', title: '三點一直線就「大潮」', text: '朔月（新月）跟滿月時，太陽—月亮—地球連成一直線，太陽和月亮的引力疊加，潮差最大（1.8–2.2 m）。上、下弦月時太陽和月亮呈 90°，引力部分抵消，潮差最小（0.8–1.2 m）。' },
        { num: 4, icon: '⏱️', title: '12 小時 25 分一個循環', text: '為什麼不是剛好 12 小時？因為地球自轉時月亮也在公轉，地球要多轉 25 分鐘才能讓某點再面對月亮。所以漲退潮時間每天會晚約 50 分鐘。' }
      ],

      // 延伸思考 Q&A
      multiAngleTitle: '🤔 你可能會想問⋯⋯',
      multiAngle: [
        { q: '太陽比月亮大那麼多，為什麼月亮對潮汐影響比較大？', a: '太陽質量是月亮的 2700 萬倍，但距離也是 390 倍遠。引力受距離平方影響非常大（r²），算下來月亮的潮汐力大約是太陽的 2.2 倍。' },
        { q: '為什麼魚會跟潮汐有關？', a: '漲潮時水深變深，深水區魚游進淺區覓食；退潮時相反。「漲到一半」「退到一半」水流最強，能把石縫底棲生物沖出來，魚最活躍。' },
        { q: '月光本身對魚有影響嗎？', a: '有！滿月時月光強，魚的視覺增強會更警覺、躲到深處；新月（無月亮）夜晚最暗，魚躲在石縫不亂跑，獵人手電筒就佔優勢。這就是為什麼 Mipacing 喜歡無月夜。' },
        { q: '颱風會影響潮汐嗎？', a: '會。低氣壓會「推高」海面（氣壓潮），加上強風推浪，可造成「氣象潮」比預報多 30–50 cm。颱風期間絕對不要下水。' }
      ],

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

      // 浮力 4 步驟原理
      principleTitle: '⚖️ 阿基米德的浮力大發現',
      principleSteps: [
        { num: 1, icon: '🛁', title: '阿基米德跳出浴缸的故事', text: '兩千多年前，希臘國王要阿基米德判斷皇冠是不是純金做的，但不能熔掉。他洗澡時發現踏進浴缸水會溢出，靈光一閃跑出來大喊「Eureka（找到了）！」——他發現只要把皇冠泡水量溢出多少，就能算出體積。' },
        { num: 2, icon: '⚖️', title: '浮力 = 排開液體的重量', text: '阿基米德原理公式：F_浮 = ρ × V × g（液體密度 × 排開體積 × 重力加速度）。意思是：物體擠開多少水，水就用相同重量的力把物體往上推。' },
        { num: 3, icon: '⏫⏬', title: '比水輕就浮、比水重就沉', text: '物體密度 < 水密度 → 浮力 > 重力 → 浮起來（像木頭、保麗龍）。物體密度 > 水密度 → 浮力 < 重力 → 沉下去（像鐵、石頭）。同樣大小的東西，誰比較重就比較容易沉。' },
        { num: 4, icon: '🎯', title: '剛好相等就「中性浮力」', text: '當配重剛剛好，讓總重量等於浮力時，物體會停在水中間，不浮也不沉。這就是潛水員夢想的狀態——可以在任何深度輕鬆停留，不用一直踢水！' }
      ],

      // 延伸思考 Q&A
      multiAngleTitle: '🤔 從浮力出發的延伸思考',
      multiAngle: [
        { q: '為什麼鋼鐵造的船這麼重，卻能浮在水上？', a: '因為船是「中空」的！整艘船加上裡面的空氣，平均密度 < 水。如果把船壓扁變實心鐵塊，馬上就沉。同理：載貨太重讓平均密度超過水，船也會沉，這就是船的「載重限制」。' },
        { q: '魚靠什麼控制深度？', a: '魚有一個叫「魚鰾」（swim bladder）的器官，可以充氣或放氣改變體積。氣體多→體積大→浮力大→上升；氣體少→體積小→下沉。跟潛水員「肺部吸氣/吐氣調節深度」原理完全一樣！' },
        { q: '為什麼海水比淡水浮力大？', a: '海水有溶解的鹽（主要是 NaCl），密度約 1.025 g/cm³，比淡水（1.000）多 2.5%。同樣排開 1 升的水，海中浮力比淡水多 25 公克。所以人在死海（鹽度極高）甚至可以躺著看書！' },
        { q: '潛水艇怎麼控制浮沉？', a: '潛水艇有「壓載艙」，要下沉就讓海水灌進艙內（增加重量），要上浮就用壓縮空氣把水擠出去（減少重量）。原理跟阿美族 Mipacing 配重的中性浮力一樣，只是用大型機械版。' }
      ],

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
    id: 'exp3', num: 6, title: '實驗 3 · 水裡的眼睛',
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

      // 蛙鏡的特殊視覺效應（Mipacing 真實情境）
      maskTitle: '🥽 戴蛙鏡看水裡的魚 — 重要！',
      maskIntro: '阿美族 Mipacing 是「戴蛙鏡的水下射魚」，這跟岸上看水裡完全不同！科學測量證實，戴蛙鏡時：',
      maskEffects: [
        { icon: '🔍', title: '看起來大 33%', text: '實際 30 cm 的魚，看起來像 40 cm 大！' },
        { icon: '📏', title: '看起來近 25%', text: '實際 2 公尺遠，看起來只有 1.5 公尺。' },
        { icon: '↕️', title: '上下偏移很小', text: '水平正視時光線幾乎直線進面鏡，上下幾乎不偏（這跟岸上看水下完全不同！）' }
      ],
      maskWhy: '原因：蛙鏡裡是空氣，眼睛能對焦；但光從水穿過玻璃進入空氣腔時被「角放大」33%，所以魚看起來變大、變近。',

      // 3 種觀察情境（修正版！瞄準方向依情境而異）
      scenariosTitle: '👁️ 3 種情境，瞄準方向完全不同',
      scenariosIntro: '同樣一條魚，從不同地方看，瞄準方法完全不同！這正是 Mipacing 文化中「依情境調整」的智慧。',
      scenarios: [
        {
          id: 'A', label: '🏖️ 情境 1：岸上／水面俯視射水裡的魚', icon: '🧍‍♂️',
          eyeIn: '空氣中', fishIn: '水中',
          effect: '光從水穿到空氣會折射 → 看到的魚比實際「淺、近」',
          aim: '⬇️ 瞄看到位置的「下方」',
          why: '折射主導：視覺位置偏淺，要往下壓修正。每英尺水深要瞄下方約 6 英寸（45° 角時）。',
          when: '岸邊射魚、淺溪射魚、早期沒蛙鏡的傳統做法',
          color: '#4FA3C7'
        },
        {
          id: 'B', label: '🤿 情境 2：完全潛入水裡，裸眼看', icon: '👀',
          eyeIn: '水中', fishIn: '水中',
          effect: '同介質沒折射，但人眼水中無法對焦 → 一片模糊',
          aim: '👀 看不清楚，無法精確瞄準',
          why: '人眼角膜的折射率跟水接近，所以在水中失去對焦能力。所以才需要蛙鏡！',
          when: '幾乎無人使用',
          color: '#0B3D5C'
        },
        {
          id: 'C', label: '🥽 情境 3：戴蛙鏡水下射魚（這就是 Mipacing！）', icon: '🤿',
          eyeIn: '蛙鏡裡的空氣', fishIn: '水中',
          effect: '魚變大 33% + 變近 25%，但水平正視時上下偏移很小',
          aim: '⬆️ 瞄看到位置的「上方」（魚頭或眼睛上方）',
          why: '下墜主導：折射上下偏移很小，但魚標射出後會因重力與水的阻力而下墜。距離越遠下墜越多 → 要往上瞄。',
          when: '阿美族 Mipacing、現代自由潛水射魚（最主要的情境）',
          color: '#E89B3C'
        }
      ],

      // 第二個物理因素：箭矢下墜
      dropTitle: '⚡ 第二個關鍵物理：魚標會「下墜」',
      dropIntro: '光折射只是其中一個因素。魚槍射出後，魚標在水中飛行還會發生：',
      dropFactors: [
        { icon: '⬇️', title: '受重力下拉', text: '魚標飛行時受地心引力往下拉，飛越久掉越多。' },
        { icon: '🌊', title: '受水的阻力', text: '水比空氣濃 800 倍，會大幅減速，飛行時間變長 → 重力作用更明顯。' },
        { icon: '📐', title: '距離越遠下墜越多', text: '飛 1 公尺：下墜約 5-10 cm；飛 2 公尺：下墜約 20-40 cm。' }
      ],
      dropConclusion: '所以阿美族長輩教年輕人「瞄魚頭或眼睛上方」——這不是隨便講的，是預留魚標下墜的空間。距離越遠，要瞄越上。',

      // 阿公口訣的整合解析（兩種情境）
      aimSummary: {
        title: '🎯 阿美族的瞄準智慧（整合版）',
        text: '研究發現，瞄準方向取決於獵人在哪裡——這正是阿美族文化「依情境調整」的智慧：',
        table: [
          { situation: '🏖️ 岸上／水面射魚', aim: '⬇️ 瞄看到位置的「下方」', reason: '折射主導：視覺偏淺要下修', dominant: '光折射' },
          { situation: '🥽 戴蛙鏡水下射魚（Mipacing）', aim: '⬆️ 瞄看到位置的「上方」', reason: '下墜主導：折射偏移小、魚標會下墜', dominant: '重力下墜' }
        ],
        insight: '💡 Faki Adiyaw 在訪談中說的「壓低槍口」可能是針對某些特定情境（如淺水或斜射），而部落長輩教年輕人「瞄魚頭上方」是針對戴蛙鏡水下實戰。兩種口訣都對，只是適用情境不同。Mipacing 獵人的身體已經內化了這套「依情境切換」的物理修正術，比任何公式都直接。'
      },

      // 科學交叉驗證
      verification: {
        title: '🔍 我們怎麼確認？多方科學交叉驗證',
        sources: [
          { source: '阿美族部落耆老（田野訪談）', point: '靜止的魚要瞄頭部或眼睛上方，因為傳統魚槍射出會下墜。' },
          { source: '國際自由潛水社群（FreediveUK、Noob Spearo）', point: '戴蛙鏡水下射魚要熟悉「魚槍彈道」，知道射多遠開始下墜。' },
          { source: '潛水光學研究（Wikipedia Underwater Vision、ScubaGeek）', point: '戴蛙鏡時物體放大 33%、距離縮短 25%（光在面鏡空氣腔的角放大效應）。' },
          { source: '物理教學資料（School Physics、Brainly）', point: '岸上俯視水中魚需要往下瞄，每英尺水深瞄下方 6 英寸（45° 角射擊）。' }
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

  // 9. TEK 對話對照表（原第 10 章，合併後 num 變 9）
  {
    id: 'tek', num: 9, title: '耆老的話 = 科學的話 = 我們的對話',
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
    id: 'glossary', num: 10, title: '阿美語小辭典',
    presentMode: {
      heading: '阿美語關鍵詞',
      featured: ['Mipacing', 'Pa\'araw no folad', 'Sapihokhok', 'Pasela\'', 'Sela\'']
    },
    learnMode: {
      hint: '👇 點擊每張卡片，可以聽阿公怎麼念'
    }
  },

  // 12. 小測驗（20 題）
  {
    id: 'quiz', num: 11, title: '小測驗 · 我學到什麼？',
    skipInPresent: true,
    learnMode: {
      hint: '20 題挑戰！答對 16 題以上可以拿到「小耆老獎章」！',
      questions: [
        // ===== 阿美語詞彙類（4 題）=====
        { q: '阿美語「Mipacing」指的是什麼？', options: ['潛水射魚', '月亮', '海邊散步', '釣魚'], answer: 0, explain: 'Mipacing 是阿美族男人在海裡用魚槍打魚的傳統文化。' },
        { q: '「Pa\'araw no folad」在阿美語是什麼意思？', options: ['滿月', '新月（朔月）', '太陽', '海洋'], answer: 1, explain: '新月時月亮看不到，是 Mipacing 最佳時機。' },
        { q: '阿美語「Sapihokhok」是什麼意思？', options: ['埋伏射魚', '吃飯', '游泳', '潛水裝備'], answer: 0, explain: 'Sapihokhok 是「躲在石頭旁等魚游近」的埋伏射魚技術。' },
        { q: '阿美語「Pasela\'」的意思是？', options: ['呼吸困難', '潛得更深', '射不到魚', '休息／回水面換氣'], answer: 3, explain: 'Pasela\' 是「回到水面換氣休息」，跟 CO₂ 代謝有關。' },

        // ===== 月相 × 潮汐類（3 題）=====
        { q: '為什麼一天會有「兩次」漲退潮？', options: ['面對月亮 + 背對月亮兩側都鼓起（離心力效應）', '月亮繞地球一圈', '太陽和月亮各拉一次', '颱風造成'], answer: 0, explain: '月亮引力拉起面對月亮側的水；地球另一邊因離心力也鼓起。所以一天經過 2 個鼓起 = 漲退潮各 2 次。' },
        { q: '月亮對潮汐的影響為什麼比太陽大？', options: ['月亮比較重', '太陽其實沒影響', '太陽距離遠太多，引力受距離平方影響', '月亮會發光'], answer: 2, explain: '太陽質量是月亮 2700 萬倍，但距離也是 390 倍遠。距離平方影響大 → 月亮潮汐力是太陽的 2.2 倍。' },
        { q: '水深越深，視覺偏差會：', options: ['越小', '不變', '消失', '越大'], answer: 3, explain: '水深 20cm 偏差 46mm，水深 30cm 偏差 70mm — 越深越大！' },

        // ===== 浮力類（3 題）=====
        { q: '為什麼阿公的魚槍要用木頭（芭樂木 / 櫸木）做？', options: ['木頭密度小於海水，脫手會浮起來不會沉到海底', '木頭比較好看', '鐵會生鏽', '木頭比較便宜'], answer: 0, explain: '芭樂木密度約 0.7 g/cm³ < 海水 1.025 → 浮力 > 重力 → 浮在水面，不會弄丟。' },
        { q: '在海水中達到中性浮力，需要的配重比淡水中…', options: ['一樣多', '比較少', '比較多（因為海水浮力大）', '不一定'], answer: 2, explain: '海水密度 1.025 > 淡水 1.000，浮力較大，需要更多配重抵消。我們實驗測得：海水多需 0.1g 配重。' },
        { q: '為什麼鋼鐵造的船這麼重，卻能浮在水上？', options: ['船有引擎', '船是中空的，整體平均密度小於水', '鋼鐵比水輕', '海水太鹹'], answer: 1, explain: '空心結構 + 內部空氣讓船的「平均密度」< 水 → 浮力 > 重力。如果壓扁變實心鐵塊馬上沉。' },

        // ===== 折射類（3 題）=====
        { q: 'Faki Adiyaw 說「水裡的眼睛會騙你」，這對應的科學現象是？', options: ['錯覺', '色盲', '視力衰退', '光的折射'], answer: 3, explain: '光從水進入空氣時方向會彎折（折射），讓魚看起來「比實際位置淺、近」。' },
        { q: '戴蛙鏡看水中的魚會看起來：', options: ['變小、變遠', '一樣大', '變大 33%、變近 25%', '看不見'], answer: 2, explain: '蛙鏡裡是空氣，光從水→玻璃→空氣有「角放大」效應，看起來變大變近。' },
        { q: '為什麼戴蛙鏡水下射魚要瞄「魚頭上方一點」？', options: ['因為魚會逃', '為了好看', '阿公習慣', '為了補償魚槍下墜（重力）'], answer: 3, explain: '戴蛙鏡水下水平正視時，折射上下偏移很小，但魚標飛行會受重力下墜，所以瞄上方補償。' },

        // ===== 潛水生理類（3 題）=====
        { q: '「第一破點 FBP」是指什麼？', options: ['第一次失手', '魚槍折斷', '上岸時間', '身體第一次大喊「我要呼吸」的時間點'], answer: 3, explain: 'FBP（First Breaking Point）= 閉氣時 CO₂ 累積到讓腦幹觸發呼吸衝動的瞬間。我們實驗測得平均 50.6 秒。' },
        { q: '為什麼「連續失手兩次就要上岸」？', options: ['失敗很丟臉', '身體 CO₂ 累積太多，可能會淺水昏迷', '魚槍壞了', '怕被罵'], answer: 1, explain: 'CO₂ 累積會導致判斷力下降、視覺模糊，最終可能淺水昏迷溺水。這個禁忌救過很多人的命。' },
        { q: '休息 30 秒和休息 30 分鐘，第二次閉氣時間哪個比較久？', options: ['30 秒就足夠了', '30 分鐘但只是恢復而已', '30 分鐘反而更久（超恢復現象）', '兩個一樣'], answer: 2, explain: '實驗顯示 30 分鐘後可達 68.2 秒，比原本基準 50.6 秒還久！這就是「超恢復」現象。' },

        // ===== 永續生態類（4 題）=====
        { q: '為什麼阿美族人不抓「帶卵的母魚」？', options: ['保護下一代，讓族群可以繁衍', '味道不好', '魚太小', '不能吃'], answer: 0, explain: '保護繁殖能力 = 永續海洋的科學智慧。這是「最大永續產量」的古老實踐。' },
        { q: '5 種漁法中，副漁獲（誤抓）比例最高的是？', options: ['Mipacing', '釣魚', '底拖網', '養殖'], answer: 2, explain: '底拖網副漁獲 40-60%，蝦拖網甚至 80-90%。Mipacing 接近 0%。' },
        { q: '5 種漁法中，碳足跡（每公斤漁獲耗油量）最低的是？', options: ['底拖網', '養殖', '定置網', 'Mipacing（徒手徒泳）'], answer: 3, explain: 'Mipacing 不用引擎、不用電、不用油，幾乎零碳排，是最環保的漁法。' },
        { q: '阿美族「分享」漁獲給沒收穫的同伴，這在科學上的意義是？', options: ['降低個體捕撈壓力，形成「社會性漁獲管制」', '只是禮貌', '怕被搶走', '習慣'], answer: 0, explain: '透過文化規範自然控制漁獲量，比政府法規還早上千年！這是現代社區型漁業（CBFM）的範本。' }
      ]
    }
  },

  // 13. 問答準備區（出賽實際提問，索引置頂）
  {
    id: 'qa', num: 12, title: '問答準備區 · 出賽實問實答',
    featured: true,
    priorityNav: true,
    skipInPresent: true,
    learnMode: { useQAData: true }
  },

  // 14. 致謝（變第 14 章）
  {
    id: 'credits', num: 13, title: '致謝 · 田野紀錄',
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
