# 肥仔計算機 (SEO Smart Kit - Fatty Index Calculator)

## 概述
肥仔計算機是一個 SEO 關鍵詞評分工具，用於幫助評估關鍵詞的優化價值。該計算器通過分析 4 個關鍵指標，計算一個綜合評分（0-10分），以判斷該關鍵詞是否值得優化。

## 計算公式

### 1. 搜尋量 (Search Volume) - volCalc
**函數位置**: `src/pages/seo-smart-kit.js` 第 42-57 行

```javascript
VolumeCalc = (event) => {
  const volume = event.target.value.trim()
  let volCalc = 0
  if (volume >= 1000) {
    volCalc = 4
  } else if (volume >= 320) {
    volCalc = 3
  } else if (volume >= 200) {
    volCalc = 2
  } else if (volume >= 100) {
    volCalc = 1
  } else {
    volCalc = 0
  }
  this.setState({ lastVolumeValue: volume, volCalc: volCalc }, this.updateSum)
}
```

**評分規則**:
| 搜尋量 (Volume) | 得分 |
|---|---|
| ≥ 1,000 | 4 分 |
| 320 - 999 | 3 分 |
| 200 - 319 | 2 分 |
| 100 - 199 | 1 分 |
| < 100 | 0 分 |

---

### 2. 三個月變化 (3 Months Change) - quarCalc
**函數位置**: `src/pages/seo-smart-kit.js` 第 59-78 行

```javascript
QuarterCalc = (event) => {
  let quarter = event.target.value.trim()
  let quarCalc = 0
  if (quarter === '' || isNaN(quarter)) {
    quarter = ''
  } else {
    quarter = Number(quarter)
    if (quarter >= 20) {
      quarCalc = 2
    } else if (quarter >= 0) {
      quarCalc = 1
    } else {
      quarCalc = 0
    }
  }
  this.setState(
    { lastQuarValue: quarter, quarCalc: quarCalc },
    this.updateSum
  )
}
```

**評分規則**:
| 三個月變化百分比 | 得分 |
|---|---|
| ≥ 20% | 2 分 |
| 0% - 19% | 1 分 |
| < 0% (負增長) | 0 分 |

**說明**: 表示關鍵詞搜尋量在過去三個月的增長趨勢。正增長表示關鍵詞人氣上升。

---

### 3. 年度變化 (Yearly Change) - yearCalc
**函數位置**: `src/pages/seo-smart-kit.js` 第 80-96 行

```javascript
YearCalc = (event) => {
  let year = event.target.value.trim()
  let yearCalc = 0
  if (year === '' || isNaN(year)) {
    year = ''
  } else {
    year = Number(year)
    if (year >= 20) {
      yearCalc = 3
    } else if (year >= 1) {
      yearCalc = 1
    } else {
      yearCalc = 0
    }
  }
  this.setState({ lastYearValue: year, yearCalc: yearCalc }, this.updateSum)
}
```

**評分規則**:
| 年度變化百分比 | 得分 |
|---|---|
| ≥ 20% | 3 分 |
| 1% - 19% | 1 分 |
| < 1% (無增長或負增長) | 0 分 |

**說明**: 表示關鍵詞搜尋量過去一年的長期增長趨勢。年度增長≥20%表示該關鍵詞在長期內保持穩定的人氣增長。

---

### 4. 競爭指數 (Competition Score) - compCalc
**函數位置**: `src/pages/seo-smart-kit.js` 第 98-112 行

```javascript
CompetitionCalc = (event) => {
  const comp = Number(event.target.value)
  let compCalc = 0
  if (comp >= 80) {
    compCalc = 0
  } else if (comp <= 79) {
    compCalc = 1
  } else {
    compCalc = 0
  }
  this.setState(
    { lastCompetitionValue: comp, compCalc: compCalc },
    this.updateSum
  )
}
```

**評分規則**:
| 競爭指數 (Competition) | 得分 |
|---|---|
| ≤ 79 | 1 分 |
| ≥ 80 | 0 分 |

**說明**: 競爭指數越低越好。≤79 表示競爭相對較低，更容易獲得排名。≥80 表示競爭激烈，不建議優化。

---

## 綜合評分 (Total Score - vqycSum)

**函數位置**: `src/pages/seo-smart-kit.js` 第 138-152 行

```javascript
updateSum = () => {
  const { volCalc, quarCalc, yearCalc, compCalc } = this.state
  const sum = volCalc + quarCalc + yearCalc + compCalc
  this.setState({ vqycSum: sum }, () => {
    if (this.state.vqycSum >= 7) {
      this.setState({ textColor: '#0ca959' })  // 綠色
    } else if (this.state.vqycSum >= 5 && this.state.vqycSum <= 6) {
      this.setState({ textColor: '#faab00' })  // 黃色
    } else if (this.state.vqycSum >= 0 && this.state.vqycSum <= 4) {
      this.setState({ textColor: '#eb4131' })  // 紅色
    } else {
      this.setState({ textColor: 'black' })
    }
  })
}
```

### 總分計算公式
```
總分 (vqycSum) = volCalc + quarCalc + yearCalc + compCalc
```

### 最高得分範圍
- **最高得分**: 4 + 2 + 3 + 1 = **10 分**
- **最低得分**: 0 + 0 + 0 + 0 = **0 分**

### 評分等級和建議

| 總分 | 顏色 | 建議 | 含義 |
|---|---|---|---|
| 7-10 | 🟢 綠色 | **必做 (MUST DO)** | 優化該關鍵詞的高優先級，很有機會獲得排名 |
| 5-6 | 🟡 黃色 | **自行決定 (SELF DECIDE)** | 可選擇優化，需視資源情況決定 |
| 0-4 | 🔴 紅色 | **放棄 (GIVE UP)** | 不建議優化，ROI 較低 |

---

## 計算邏輯詳解

### 示例 1: 高分關鍵詞
```
關鍵詞: "香港 SEO 公司"
- 搜尋量: 1,500 → volCalc = 4
- 三個月變化: 25% → quarCalc = 2
- 年度變化: 35% → yearCalc = 3
- 競爭指數: 45 → compCalc = 1

總分 = 4 + 2 + 3 + 1 = 10 分 ✅ 綠色 - 必做
```

### 示例 2: 中等分關鍵詞
```
關鍵詞: "SEO 教學"
- 搜尋量: 350 → volCalc = 3
- 三個月變化: 10% → quarCalc = 1
- 年度變化: 15% → yearCalc = 1
- 競爭指數: 65 → compCalc = 1

總分 = 3 + 1 + 1 + 1 = 6 分 🟡 黃色 - 自行決定
```

### 示例 3: 低分關鍵詞
```
關鍵詞: "非常冷門的詞"
- 搜尋量: 80 → volCalc = 0
- 三個月變化: -5% → quarCalc = 0
- 年度變化: -2% → yearCalc = 0
- 競爭指數: 85 → compCalc = 0

總分 = 0 + 0 + 0 + 0 = 0 分 🔴 紅色 - 放棄
```

---

## 使用場景

### 適用於
- ✅ 評估新關鍵詞的優化價值
- ✅ 優先排序關鍵詞列表
- ✅ 幫助決定是否投入資源優化特定關鍵詞
- ✅ SEO 策略規劃和預算分配

### 限制
- ❌ 不考慮內容相關性
- ❌ 不考慮現有排名位置
- ❌ 不考慮轉化率
- ❌ 不考慮行業特性

---

## 技術實現

**文件路徑**: `src/pages/seo-smart-kit.js`
**組件類型**: React Class Component
**狀態管理**: React State
**計算觸發**: 輸入框 onChange 事件

### 核心狀態變量
```javascript
state = {
  lastVolumeValue: '',      // 搜尋量輸入值
  lastQuarValue: '',        // 三個月變化輸入值
  lastYearValue: '',        // 年度變化輸入值
  lastCompetitionValue: '', // 競爭指數輸入值
  volCalc: 0,               // 搜尋量得分
  quarCalc: 0,              // 三個月變化得分
  yearCalc: 0,              // 年度變化得分
  compCalc: 0,              // 競爭指數得分
  vqycSum: 0,               // 總分
  Keyword: '',              // 關鍵詞
  textColor: 'black',       // 顯示顏色
  savedData: [],            // 保存的記錄
}
```

### 主要方法
- `VolumeCalc()` - 計算搜尋量評分
- `QuarterCalc()` - 計算三個月變化評分
- `YearCalc()` - 計算年度變化評分
- `CompetitionCalc()` - 計算競爭指數評分
- `updateSum()` - 更新總分和顏色
- `saveAllCalc()` - 保存計算結果
- `resetSavedData()` - 重置已保存數據

---

## 建版本
**Build Version**: v3.1.240911-1824 by Native4A

---

## 相關資源
- 頁面地址: `/seo-smart-kit/`
- 永久版購買: [SEO 懶人包 - 7天上首頁其實唔難](https://shop.nativeaaaa.com.hk/product/seo%e6%87%b6%e4%ba%ba%e5%8c%85_7%e5%a4%a9%e4%b8%8a%e9%a6%96%e9%a0%81%e5%85%b6%e5%af%a6%e5%94%94%e9%9b%a3/)
- 教學影片: [YouTube - SEO Smart Kit 使用教程](https://www.youtube.com/embed/9hDiSH3NSGQ)

---

## 更新日期
- **創建日期**: 2024年9月11日
- **最後更新**: 2026年7月16日
