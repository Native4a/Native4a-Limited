#!/bin/bash

# 提交主页翻译功能更改
git add src/pages/index.tsx src/locales/en.json src/locales/zh.json src/locales/ja.json

git commit -m "feat: 添加主页翻译功能 - 支持英文、中文和日文"

echo "翻译更改已提交到 Git"
