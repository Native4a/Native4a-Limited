#!/bin/bash
# 清除 Gatsby 緩存和構建文件

echo "清除 Gatsby 緩存..."
rm -rf .cache
echo "✓ .cache 已刪除"

echo "清除 Gatsby 構建文件..."
rm -rf public
echo "✓ public 已刪除"

echo ""
echo "✅ 緩存已清除！"
echo "現在請運行: gatsby develop 或 npm run develop"
