// Content for /zh/geo/. Strings support **bold**, [text](url) and 【待補：…】 placeholders
// (rendered with a yellow highlight by GeoRichText). Keep FAQ text identical to geo-page-schema.json.

export const GEO_URL = 'https://nativeaaaa.com.hk/zh/geo/'
export const GEO_TITLE =
  'GEO公司香港｜AI 搜尋優化服務（ChatGPT／Google AI Overview）｜Native4a'
export const GEO_DESCRIPTION =
  'Native4a 提供香港 GEO（生成式引擎優化）服務，令你的品牌出現在 Google AI Overview、AI Mode、Gemini、Perplexity 及 ChatGPT 的答案中。服務包括站內 SEO 文章、程式碼安裝及供應商 Backlinks，簽約設達標承諾。WhatsApp 6460 2996。'

export const WHATSAPP_GEO_URL =
  'https://wa.me/85264602996?text=' +
  encodeURIComponent('你好，我想了解GEO服務及免費AI能見度檢查')
export const TEL_URL = 'tel:+85264602996'

export const H1 = '香港 GEO 服務｜令你的品牌出現在 AI 答案之中'

export const ANSWER =
  '**GEO（生成式引擎優化）是令 ChatGPT、Google AI Overview、Gemini 及 Perplexity 在回答客戶問題時引用及推薦你品牌的優化工作。Native4a 以 SEO 文章、結構化資料及第三方 Backlinks 為你做 GEO，簽約設達標承諾。**'

export const TRUST_ITEMS = [
  { label: '作者', text: '【待補：MC 真實中英文全名】，Native4a 創辦人【待補：職銜】，從事香港 SEO【待補：年資，須與 LinkedIn 一致】' },
  { label: '審閱', text: '【待補：審閱同事姓名／職銜，或刪除此行】' },
  { label: '適用對象', text: '想在 AI 搜尋中被推薦的香港中小企、服務業及電商' },
  { label: '最後更新', text: '2026 年 10 月' },
] as const

export const TOC = [
  { id: 'what-is-geo', label: 'GEO 是什麼？三分鐘速覽' },
  { id: 'geo-vs-seo', label: 'GEO 同 SEO 有咩分別？' },
  { id: 'ai-platforms', label: '香港應該優化哪些 AI 平台？' },
  { id: 'who-should', label: '哪類公司最適合做 GEO？' },
  { id: 'process', label: 'Native4a GEO 5 步流程' },
  { id: 'services', label: 'GEO 服務內容一覽' },
  { id: 'cases', label: '真實案例：hypnosis.hk、PAT CPA' },
  { id: 'no-promise', label: '我們不會承諾的事' },
  { id: 'not-yet', label: '什麼情況下其實不應急著做 GEO？' },
  { id: 'faq', label: '常見問題（10 條）' },
  { id: 'contact', label: '需要我們協助？' },
] as const

export const WHAT_IS_GEO = {
  paragraphs: [
    '截至 2026 年，越來越多香港用戶在 Google 搜尋時直接看 AI Overview 的摘要，或者打開 ChatGPT、Gemini、Perplexity 問「香港邊間公司好」。AI 回答時只會引用少數幾個來源；如果你的網站不在其中，客戶可能連你的名字都看不到。',
    'GEO（Generative Engine Optimization，生成式引擎優化）的目標，就是令 AI 在回答與你行業相關的問題時，**認得你、相信你，並引用你**。',
  ],
  highlightsTitle: '重點速覽',
  highlights: [
    '**GEO 不是取代 SEO**：AI 主要從已被搜尋引擎收錄、排名良好的網頁中抽取答案，所以扎實的 SEO 仍然是 GEO 的基礎。',
    '**AI 喜歡「答案型」內容**：開頭直接回答問題、有比較表、有清晰步驟、有 FAQ、有具體資料的頁面，較容易被引用。',
    '**品牌資料要一致**：公司名稱、地址、電話、服務在網站、Google 商家檔案及第三方網站上要完全一致，AI 才能確認「你是誰」。',
    '**第三方提及很重要**：AI 會參考其他網站對你的介紹，包括行業文章、比較清單及媒體報導。',
    '**要用固定問題量度**：我們每月用同一批 AI 問題重測，並附上 AI 原文截圖及引用網址，不靠感覺判斷成效。',
  ],
  note:
    '**Native4a 的實務觀察**：很多公司以為 GEO 是「買 AI 廣告」，其實 AI 答案不能購買。真正決定你會否被推薦的，是你的網站有沒有一頁內容能夠直接回答客戶的問題。',
}

export const COMPARISON = {
  head: ['項目', '傳統 SEO', 'GEO（生成式引擎優化）'],
  rows: [
    ['目標', '在 Google 搜尋結果排名靠前', '被 AI 答案引用、提及或推薦'],
    ['出現位置', 'Google 十條藍色連結', 'Google AI Overview／AI Mode、Gemini、Perplexity、ChatGPT'],
    ['用戶行為', '搜尋 → 比較幾個網站 → 點擊', '直接提問 → 閱讀 AI 總結 → 聯絡被推薦的品牌'],
    ['內容重點', '關鍵字覆蓋、文章長度、內部連結', '答案先行、比較表、FAQ、具體數字、可引用的事實'],
    ['技術重點', '網速、手機版、索引', '以上全部，加上結構化資料（Schema）、llms.txt、AI 爬蟲存取、品牌實體一致'],
    ['站外重點', 'Backlinks 數量與質素', 'Backlinks 加上第三方品牌提及（比較清單、行業文章）'],
    ['成效量度', '關鍵字排名、自然流量', '固定 AI 問題的提及率、引用網址、AI 原文截圖，加上排名與流量'],
  ],
  conclusion:
    '**結論**：SEO 令你「被找到」，GEO 令你「被推薦」。兩者用同一套基礎，所以 Native4a 的 GEO 服務已包括站內 SEO 文章及 Backlinks。',
}

export const PLATFORMS = {
  items: [
    { name: 'Google AI Overview／AI Mode', text: '香港用戶最常接觸的 AI 答案，直接出現在 Google 搜尋結果頂部。由於它以 Google 索引為基礎，SEO 表現好的網頁較易被引用，是我們的首要目標。' },
    { name: 'Gemini', text: 'Google 的 AI 助手，同樣依賴 Google 的搜尋資料，與 AI Overview 的優化方向相近。' },
    { name: 'Perplexity', text: '每個答案都列明引用來源，適合追蹤「AI 有沒有引用你的網址」，也是重視資料準確度用戶常用的工具。' },
    { name: 'ChatGPT', text: '知名度最高，使用情況視乎你的客群（例如年輕、科技或跨境客戶用得較多）。我們會按你的行業決定投入比重。' },
  ],
  note: '我們不會承諾某一個平台「一定推薦你」，而是按你客戶實際使用的平台分配工作，並每月公開所有平台的重測結果。',
}

export const WHO_SHOULD = [
  '客戶在決定前會先「問人／問 AI」的服務業，例如裝修、維修、搬屋、補習、醫療美容、專業服務（會計、法律、顧問）',
  '已有網站，但 AI 問起你的行業時從未提及你',
  '同行已開始出現在 AI 答案中，你想在市場未飽和前搶先',
  '已經做 SEO，想令同一批內容同時在 AI 搜尋中產生效果',
]

export const PROCESS = [
  { title: '建立 AI 能見度基線', text: '與你一同揀選 20–40 條客戶真實會問的問題（例如「香港邊間 XX 公司好？」「XX 收費幾多？」），在 Google AI Overview／AI Mode、Gemini、Perplexity 及 ChatGPT 逐條提問，記錄你及對手有沒有被提及，並截圖存檔。' },
  { title: '技術及品牌實體修正', text: '檢查 robots.txt 是否容許 AI 爬蟲、修正 canonical 及 sitemap、安裝 Organization／Service／FAQPage 等結構化資料、加入 llms.txt，並統一網站、Google 商家檔案及社交平台上的公司名稱、地址及電話。程式碼安裝已包括在服務內。' },
  { title: '答案型內容及 FAQ', text: '按基線問題撰寫及加長站內 SEO 文章：開頭直接回答、加入比較表、步驟、服務資料及 FAQ。我們參考自己驗證過的長文結構（見下方 PAT CPA 及 hypnosis.hk 案例）。' },
  { title: '第三方提及及 Backlinks', text: '透過供應商 Backlinks 及行業相關的繁體中文文章，增加權威網站對你品牌的提及及連結，令 AI 從多個來源確認你的專業。' },
  { title: '每月重測及報告', text: '每月用同一批問題重測，報告附 AI 原文截圖、引用網址、提及率變化，以及 Google 排名與流量，再按結果調整下一個月的內容方向。' },
]

export const CHECK = '✅'

export const SERVICES = {
  intro: '按行業競爭程度及需要報價，WhatsApp 6460 2996 查詢。',
  head: ['項目', '基本方案', '進階方案', '全面方案'],
  rows: [
    ['追蹤 AI 問題數量', '【待補：例如 20 條】', '【待補】', '【待補：例如 40 條】'],
    ['每月站內 SEO 文章', '【待補：篇數／字數】', '【待補】', '【待補】'],
    ['程式碼安裝（Schema、llms.txt 等）', CHECK, CHECK, CHECK],
    ['供應商 Backlinks', '【待補：每月條數】', '【待補】', '【待補】'],
    ['每月 AI 重測報告（附截圖及引用網址）', CHECK, CHECK, CHECK],
    ['達標承諾', `${CHECK}【待補：承諾內容】`, CHECK, CHECK],
    ['合約期', '【待補：例如 6／12 個月】', '【待補】', '【待補】'],
  ],
  addonTitle: '附加：中文 Backlinks',
  addonHead: ['項目', '條款'],
  addonRows: [['中文 Backlinks 100 條', '毋須簽約，可單獨購買，詳情見[反向連結服務](/zh/backlinks/)']],
  promise:
    '**達標承諾說明**：【待補：清楚寫明承諾的量度指標（例如指定關鍵字排名或指定 AI 問題提及率）、量度方法、期限，以及未達標時的安排（例如免費延長服務／退款比例）】。承諾以合約條款為準。',
}

export const CASES = {
  note: '以下案例只會寫入可驗證的真實數字。所有【待補】位置必須在上線前填好，否則請隱藏該數字欄。',
  items: [
    {
      title: '案例一：hypnosis.hk（Hypnosis Academy）｜「催眠」「催眠課程」',
      rows: [
        ['客戶', 'Hypnosis Academy（hypnosis.hk），香港催眠治療師證書課程'],
        ['目標關鍵字', '催眠、催眠課程'],
        ['基線（改版前，2026 年 4 月）', '課程頁 /hypnosis/ 約 4,500 字，沒有 H1、沒有結構化資料、只有約 4 個 H2 及 7 條 FAQ。排名：【待補：2026 年 4 月「催眠」「催眠課程」排名】'],
        ['我們做了什麼', '保留原有課程內容，在下方加入約 4,600 字的「2026 香港催眠課程指南」，結構參考我們為 PAT CPA 驗證過的長文格式，包括答案先行速覽、作者及審閱資料、費用表、5 步流程、常見失誤、官方認證來源及 10 條 FAQ，並加入 Course 及 FAQPage 結構化資料。'],
        ['結果', '改版後排名表現理想。【待補：改版後「催眠」「催眠課程」排名及日期】【待補：Google AI Overview／Gemini／Perplexity／ChatGPT 提及截圖及日期】'],
        ['連結', '[https://www.hypnosis.hk/hypnosis/](https://www.hypnosis.hk/hypnosis/) 【待補：確認客戶同意公開名稱及連結】'],
      ],
    },
    {
      title: '案例二：PAT CPA（patcpa.com.hk）｜公司註冊指南',
      rows: [
        ['客戶', 'PAT CPA，香港會計師事務所'],
        ['目標關鍵字', '香港公司註冊、公司註冊費用【待補：確認實際目標關鍵字】'],
        ['基線', '【待補：開始前排名／流量／AI 提及情況及日期】'],
        ['我們做了什麼', '撰寫約 5,000 字的「香港公司註冊費用 2026」長文：標題包含關鍵字、年份及具體政府收費；首段直接回答；費用與時間比較表；5 步註冊流程；「什麼情況下不應急著成立公司」等決策段落；作者 CPA 資歷信任框；官方資料來源；10 條 FAQ；以及 Article、FAQPage、BreadcrumbList 結構化資料。'],
        ['結果', '【待補：排名前後數字及日期】【待補：AI Overview／Perplexity／ChatGPT 引用截圖及日期】'],
        ['連結', '【待補：文章網址】【待補：確認客戶同意公開】'],
      ],
    },
  ],
  footer: '我們把這兩個案例的長文結構整理成內部範本，應用於每一位 GEO 客戶。',
}

export const NO_PROMISE = {
  lead: '**我們不保證 ChatGPT（或任何 AI）一定推薦你。**',
  text: 'AI 答案每次都可能不同，亦會隨平台更新而改變，任何人都無法控制。市面上聲稱「保證 ChatGPT 推薦」或「保證 AI 第一位」的服務，反而應該小心。',
  canPromiseTitle: '我們可以承諾的是：',
  canPromise: [
    '每月按合約完成約定的站內文章、程式碼安裝及 Backlinks 工作',
    '用固定問題公開重測，報告附 AI 原文截圖及引用網址，不會只挑好看的結果',
    '合約內列明的達標指標（見上方「達標承諾說明」）',
    '只用合規方法：不會製造假評論，不會要求你以優惠換評論（此舉違反 Google 政策，可能導致評論被刪）',
  ],
}

export const NOT_YET = {
  items: [
    '你的網站仍未被 Google 收錄，或基本 SEO 問題（例如網站打不開、手機版損壞）未處理：應先修好網站。',
    '你的行業客戶幾乎不會在網上搜尋或問 AI：GEO 的效益會較有限，可先考慮其他渠道。',
    '你期望一個月內見到 AI 推薦：GEO 需要時間累積內容和第三方提及，一般要以數個月計。',
  ],
  note: '判斷要不要做 GEO，關鍵不只是「AI 是不是潮流」，而是你的客戶在決定前會不會先問 AI。',
}

export const FAQ = [
  { q: 'GEO 是什麼？同 SEO 有什麼不同？', a: 'GEO（生成式引擎優化）是令 ChatGPT、Google AI Overview、Gemini 及 Perplexity 等 AI 在回答問題時引用或推薦你品牌的優化工作。SEO 的目標是在搜尋結果排名靠前，GEO 的目標是被 AI 答案引用。兩者基礎相同，所以 Native4a 的 GEO 服務已包括 SEO 文章及 Backlinks。' },
  { q: 'GEO 收費多少？', a: '價格視乎行業競爭程度及追蹤問題數量而定，請 WhatsApp 6460 2996 查詢報價。中文 Backlinks 可單獨購買，毋須簽約。' },
  { q: 'GEO 幾耐見效？', a: '一般需要數個月。技術修正及結構化資料可在首月完成，但 AI 要重新爬取網頁、累積第三方提及後才會較穩定地引用你。我們每月重測，讓你看到每一步的變化。【待補：如有實際案例平均時間，可在此加入】' },
  { q: '香港用得到 ChatGPT 嗎？還需要優化 ChatGPT 嗎？', a: '香港用戶可透過不同方式使用 ChatGPT，不過香港最常接觸的 AI 答案是 Google AI Overview 及 AI Mode。所以我們首先優化 Google 生態（AI Overview、AI Mode、Gemini），再按你的客群決定 ChatGPT 及 Perplexity 的投入比重。' },
  { q: '你們保證 ChatGPT 一定會推薦我嗎？', a: '不保證。AI 答案會不斷變化，沒有人可以控制。我們承諾的是按合約完成工作、公開每月重測結果，以及合約內列明的達標指標。' },
  { q: 'GEO 成效如何量度？', a: '我們在開始前與你揀選 20–40 條固定問題，在各 AI 平台逐條提問並截圖，作為基線。之後每月用同一批問題重測，比較提及率、引用網址及排名變化，報告附 AI 原文截圖。' },
  { q: '已經有 SEO 公司，還需要另外做 GEO 嗎？', a: '不一定要換公司，但要確認現有 SEO 有沒有處理答案型內容、結構化資料、llms.txt、品牌資料一致及第三方提及。如果沒有，AI 未必會引用你。Native4a 的 GEO 已包括 SEO 工作，可以一併處理。' },
  { q: '需要改動我的網站嗎？', a: '需要少量改動，例如加入結構化資料、llms.txt、修正 canonical 及新增或加長文章。程式碼安裝已包括在服務內，我們會先列出改動清單，經你確認後才進行。' },
  { q: '哪些行業最適合做 GEO？', a: '客戶在決定前會先比較或「問人」的行業最適合，例如裝修、維修、搬屋、補習、醫療美容、會計及法律等專業服務，以及教育課程。' },
  { q: '可以先試做嗎？', a: '可以先 WhatsApp 6460 2996 索取免費 AI 能見度檢查：我們會用數條與你行業相關的問題，看看 AI 現時有沒有提及你及你的對手。【待補：確認是否提供免費檢查及檢查內容】' },
]

export const CONTACT = {
  text: '想知道 AI 現時怎樣介紹你的行業、有沒有提及你？WhatsApp 我們，提供你的網站及行業，我們會先做一次 AI 能見度檢查。',
  company: 'Native4a（NATIVE ADV LTD）',
  address: '新界葵涌葵昌路26-38號 豪華工業大廈22樓',
  phone: '6460 2996',
  email: 'native4a.inquiry@gmail.com',
}

export const AUTHOR = {
  photo: '【待補：作者相片，alt =「MC 全名 Native4a 創辦人」】',
  name: '【待補：MC 中英文全名】',
  role: 'Native4a 創辦人',
  bio: '【待補：2–3 句簡介：入行年份、專注行業、曾負責的代表案例。年資須與 LinkedIn（2017 年成立）及網站版權年份一致】',
  linkedin: '【待補：MC 個人 LinkedIn 網址】',
}

export const RELATED = [
  '[SEO 服務](/zh/seo/)',
  '[中文反向連結 Backlinks](/zh/backlinks/)',
  '[站外優化](/zh/off-page/)',
  '[肥仔關鍵字計算機](/zh/seo-smart-kit/)',
  '[聯絡我們](/zh/contact-us/)',
  '【待補：hypnosis.hk 及 PAT CPA 獨立案例頁網址（第 2 週製作）】',
]

export const SOURCES = [
  'Google Search Central：AI 功能與你的網站 [https://developers.google.com/search/docs/appearance/ai-features](https://developers.google.com/search/docs/appearance/ai-features)',
  'Google 評論政策（禁止以獎賞換取評論）[https://support.google.com/contributionpolicy/answer/7400114](https://support.google.com/contributionpolicy/answer/7400114)',
  'Schema.org：Service、FAQPage [https://schema.org/](https://schema.org/)',
]

export const DISCLAIMER =
  '本頁內容僅供一般參考，個別成效因行業及競爭情況而異，服務內容及達標承諾以合約為準。'
