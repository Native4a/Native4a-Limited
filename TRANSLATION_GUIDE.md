# 📚 Translation Quick Reference Guide

## How to Add New Translations

### Step 1: Add to Language Files

#### English (`src/locales/en.json`)
```json
{
  "namespace": {
    "newKey": "English text here"
  }
}
```

#### Japanese (`src/locales/ja.json`)
```json
{
  "namespace": {
    "newKey": "日本語テキストをここに入力"
  }
}
```

#### Chinese (`src/locales/zh.json`)
```json
{
  "namespace": {
    "newKey": "中文文本在这里"
  }
}
```

### Step 2: Use in Component

```jsx
import { useTranslation } from 'react-i18next'

const MyComponent = () => {
  const { t } = useTranslation()
  
  return (
    <div>
      <h1>{t('namespace.newKey')}</h1>
    </div>
  )
}

export default MyComponent
```

## Naming Conventions

### Naming Pattern
`namespace.category.itemName`

### Examples
- `buttons.watchVideo` - Button labels
- `contactForm.firstName` - Form fields
- `pricing.pricingOne.title` - Pricing tier titles
- `pricing.pricingOne.feature1` - Pricing features
- `xiaohongshuu.step1Title` - Service step titles
- `iconList.email` - Contact information labels
- `footer.copyright` - Footer content

### Best Practices
1. **Use camelCase** for keys
2. **Group related items** under same namespace
3. **Use descriptive names** that indicate content type
4. **Number features sequentially** (feature1, feature2, etc.)
5. **Use consistent naming** across languages (same key structure)

## Component Translation Template

### Before (Hardcoded)
```jsx
const PriceOne = () => {
  return (
    <div>
      <h2>中競爭度行業</h2>
      <span>5500</span>
      <p>50頂層外連至您的網站</p>
    </div>
  )
}
```

### After (Translated)
```jsx
import { useTranslation } from 'react-i18next'

const PriceOne = () => {
  const { t } = useTranslation()
  
  const features = [
    t('pricing.pricingOne.feature1'),
    t('pricing.pricingOne.feature2'),
    // ... more features
  ]
  
  return (
    <div>
      <h2>{t('pricing.pricingOne.title')}</h2>
      <span>{t('pricing.pricingOne.price')}</span>
      {features.map((feature, idx) => (
        <p key={idx}>{feature}</p>
      ))}
    </div>
  )
}
```

## Common Patterns

### Arrays of Content
When you have multiple items of the same type:

```json
{
  "pricing": {
    "pricingOne": {
      "feature1": "First feature",
      "feature2": "Second feature",
      "feature3": "Third feature"
    }
  }
}
```

### Nested Namespaces
For organized structure:

```json
{
  "contact": {
    "form": {
      "firstName": "First Name",
      "lastName": "Last Name"
    },
    "info": {
      "email": "Email",
      "phone": "Phone"
    }
  }
}
```

### Dynamic Content
For form questions or service steps:

```json
{
  "contactForm": {
    "question1": "First question?",
    "question2": "Second question?",
    "question3": "Third question?"
  }
}
```

## Debugging Tips

### Check Translation Exists
```jsx
const { t, i18n } = useTranslation()

console.log('Current language:', i18n.language)
console.log('Translation:', t('namespace.key'))
```

### List All Keys
```jsx
const { t } = useTranslation()
console.log(t('', { returnObjects: true }))
```

### Test Missing Key Fallback
If key doesn't exist, you'll see: `namespace.key`

## Language Switching Example

```jsx
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  
  return (
    <div>
      <button onClick={() => i18n.changeLanguage('en')}>
        English
      </button>
      <button onClick={() => i18n.changeLanguage('ja')}>
        日本語
      </button>
      <button onClick={() => i18n.changeLanguage('zh')}>
        中文
      </button>
    </div>
  )
}
```

## File Structure Reference

```
src/
├── locales/
│   ├── en.json          # English translations
│   ├── ja.json          # Japanese translations
│   └── zh.json          # Chinese translations
├── components/
│   ├── button/
│   │   ├── watchVideo/
│   │   │   └── index.js (uses t('buttons.watchVideo'))
│   │   └── quoteNow/
│   │       └── index.js (uses t('buttons.quoteNow'))
│   ├── contactAs/
│   │   ├── form.js      (uses various contactForm keys)
│   │   └── iconList.js  (uses iconList keys)
│   ├── Form/
│   │   └── Tryform.js   (uses contactForm keys)
│   ├── backlinkPriceTable/
│   │   ├── price_one/
│   │   ├── price_two/
│   │   ├── price_three/
│   │   └── price_four/  (all use pricing.* keys)
│   └── slickSlider/
│       └── xiaohongshuSlider/
│           └── index.js (uses xiaohongshuu keys)
```

## Recent Updates

### Components with Full i18n Support
- ✅ Watch Video Button
- ✅ Quote Now Button
- ✅ Contact Form (Tryform)
- ✅ Contact Form (form.js)
- ✅ Contact Info List (iconList)
- ✅ Pricing Tables (price_one through price_four)
- ✅ Xiaohongshu Slider

### Translation Keys Added
- 173+ new keys across all languages
- Pricing features (48 total: 12 per tier × 4 tiers)
- Service descriptions (5 steps × 3 fields = 15 descriptions)
- Form fields and questions (13 form-related keys)
- Buttons and common UI (5 button keys)
- Contact information (6 location/contact keys)

## Migration Checklist

When converting a component to use translations:

- [ ] Import `useTranslation` hook
- [ ] Add `const { t } = useTranslation()` to component
- [ ] Identify all hardcoded text strings
- [ ] Create translation keys following naming convention
- [ ] Add keys to all locale files (en.json, ja.json, zh.json)
- [ ] Replace hardcoded strings with `t('namespace.key')`
- [ ] Test with language switcher
- [ ] Verify all languages display correctly
- [ ] Remove any old translation logic (if migrating from old system)

