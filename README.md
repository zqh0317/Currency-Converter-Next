# 日本語の紹介 [English version follows after Japanese]　【中文版请拉至最后】  
## 🌍 為替レート換算器（Next.js版）

👋 こんにちは、私は **鄭綺慧（ジェン・チフイ）** です。フロントエンド開発者として、React エコシステムに特化し、効率的で保守しやすいアプリケーションの構築を得意としています。
本プロジェクトは、**独自に開発した為替レート換算 Web アプリケーション** であり、**世界の通貨換算** に対応し、**過去の為替レートデータを可視化** することで、ユーザーがレートの傾向を直感的に理解できるようにしています。

## 📌 プロジェクトの背景 & 目的

国際旅行や貿易の増加に伴い、多くのユーザーが **便利で正確なリアルタイム** 為替レートを必要としています。

本プロジェクトの目的は以下の通りです：
- ✅ **リアルタイム換算**：直感的で素早い為替レート変換を提供し、最新のレートを即座に確認可能。
- 📊 **過去の為替レートの可視化**：指定期間のレート変動をグラフで表示し、トレンドを把握。

要件分析、UI 設計、フロントエンド開発を独自に行い、為替データの取得にはサードパーティ API を利用しました。

## 🛠️ スクリーンショット & 使用方法

### PC 版
<img src="https://github.com/user-attachments/assets/2bd1741f-b228-4bba-920b-9ea4067e05bc">

### モバイル版
<img src="https://github.com/user-attachments/assets/3893ece1-44e0-4d0f-84cd-b7f23d6877cd" width="400">

### 使用方法
1️⃣ **通貨の選択**：入力欄で **元の通貨** と **変換先の通貨** を選択（150 以上の通貨に対応）  
2️⃣ **金額の入力**：変換したい金額を入力（リアルタイム計算）  
3️⃣ **結果の確認**：変換結果が即時に表示され、**過去の為替レートトレンドグラフ** も提供  
4️⃣ **データの可視化**：グラフ下のボタンをクリックすると、過去 **1 週間 / 1 か月 / 3 か月 / 6 か月 / 1 年** のレート変動を確認可能  

## 🚀 **技術スタック**
| **技術**        | **説明**                                                 |
|-----------------|----------------------------------------------------------|
| Next.js 15      | フロントエンドフレームワーク、SSR（サーバーサイドレンダリング）対応でパフォーマンスとSEOを向上 |
| TypeScript      | 静的型チェックによりコードの可読性と保守性を向上           |
| Sass            | 変数、Mixin、モジュール化を活用して、スタイルの再利用性を高めるUI設計 |
| Recharts        | インタラクティブな折れ線グラフを使用し、過去の為替レートを可視化 |
| exchangerate.host | 信頼性と網羅性のある為替データを提供する外部API           |

## 💡 **特徴**

### 🌿 **モジュール化開発**
- **コンポーネント分割:** 各機能モジュールを独立して実装し、コードの結合度を下げ、再利用性を向上  
- **Sassプリプロセッサ:** **変数**を使用してスタイルを一元管理し、UIデザインの一貫性と保守性を向上  
- **TypeScript対応:** コンポーネントとAPIに厳密な型を適用し、実行時エラーを削減  

### 📊 **データ可視化**
- **動的折れ線グラフ:** Rechartsを用いて過去の為替レート推移を可視化  
- **多期間のトレンド分析:** 1週間 / 1ヶ月 / 3ヶ月 / 6ヶ月 / 1年など、複数期間の為替変動を比較可能  

### 📱 **レスポンシブデザイン**
- **自動レイアウト調整:** 小画面でコンポーネント配置を自動調整し、モバイル体験を向上  
- **グラフの動的調整:** 画面サイズに基づいてグラフサイズを調整し、可読性を確保  

### ⚙️ **パフォーマンス最適化**
- **SSR:** Next.jsのサーバーサイドレンダリングにより、ページ読み込み速度とSEOを向上  
- **データ永続化:** `localStorage`を利用してユーザーの設定を保存し、利便性を向上  
- **スマートキャッシュ:** 過去の為替データをキャッシュして、重複リクエストを防ぎ、パフォーマンスを最適化
   
## 📬 連絡先
- 🔗 GitHub: https://github.com/zqh0317?tab=repositories
- 📧 Email: zhengqihui0317@gmail.com
- 💼 Linkedin: https://www.linkedin.com/in/qihui-zheng-ab2618275/



# Enlish Version of Project Introduction
# 🌍 Currency Converter (Next.js Version)

👋 Hi, I'm Qihui Zheng, a frontend developer specializing in the React ecosystem. I focus on building efficient and maintainable frontend applications.  
This project is an **independently developed currency conversion web application** that supports **global currency exchange** and provides **historical exchange rate data visualization** to help users better understand currency trends.

## 📌 Project Background & Goals  
With the rise of cross-border travel and international trade, more users need **convenient and accurate real-time** exchange rate queries.

This project's goals are:  
- ✅ **Real-time currency conversion**: Provide an intuitive and fast exchange rate conversion experience, allowing users to stay updated with the latest rates.  
- 📊 **Historical exchange rate visualization**: Display exchange rate trends over selected periods to help users track currency fluctuations.  

I independently completed the **requirement analysis, UI design, and frontend development**, using a third-party API to fetch exchange rate data.

## 🛠️ Screenshots & Usage  

### Desktop Version  
<img src="https://github.com/user-attachments/assets/2bd1741f-b228-4bba-920b-9ea4067e05bc">

### Mobile Version  
<img src="https://github.com/user-attachments/assets/3893ece1-44e0-4d0f-84cd-b7f23d6877cd" width="400">

### How to Use  
1️⃣ **Select Currencies**: Choose **base currency** and **target currency** from the input fields (supports 150+ global currencies).  
2️⃣ **Enter Amount**: Input the amount to convert (real-time calculation).  
3️⃣ **View Results**: The system instantly displays the converted amount and provides a **historical exchange rate trend chart**.  
4️⃣ **Data Visualization**: Click the buttons below the trend chart to view exchange rate trends for the past **1 week / 1 month / 3 months / 6 months / 1 year**.  

## 🚀 **Technology Stack**
| Technology     | Description                                            |
|----------------|--------------------------------------------------------|
| Next.js 15     | Frontend framework with SSR (Server-Side Rendering) for better performance and SEO |
| TypeScript     | Static type checking for improved code readability and maintainability |
| Sass           | UI design with variables, mixins, and modularization for better style reuse |
| Recharts       | Data visualization with interactive line charts to display historical exchange rates |
| exchangerate.host | External API providing reliable and comprehensive exchange rate data |

## 💡 **Highlights**

### 🌿 **Modular Development**
- **Component-Based Design:** All functional modules are independently encapsulated, reducing code coupling and enhancing reusability  
- **Sass Preprocessing:** Manage styles with **variables** for consistent UI design and easier maintenance  
- **TypeScript Support:** Strict typing for components and APIs, reducing runtime errors  

### 📊 **Data Visualization**
- **Dynamic Line Charts:** Visualize historical exchange rate trends using Recharts  
- **Multi-Period Trend Analysis:** Supports exchange rate comparisons across different periods (1 week, 1 month, 3 months, 6 months, 1 year)  

### 📱 **Responsive Design**
- **Adaptive Layout:** Automatically adjusts component layout on smaller screens for better mobile experience  
- **Dynamic Chart Resizing:** Adjusts chart size based on screen width to ensure readability  

### ⚙️ **Performance Optimization**
- **SSR:** Leverages Next.js server-side rendering to improve page load speed and SEO  
- **Data Persistence:** Uses `localStorage` to save user preferences and enhance user experience  
- **Smart Caching:** Caches historical exchange rate data to avoid redundant requests and optimize performance

## 📬 Contact
- 🔗 GitHub: https://github.com/zqh0317?tab=repositories
- 📧 Email: zhengqihui0317@gmail.com
- 💼 Linkedin: https://www.linkedin.com/in/qihui-zheng-ab2618275/



# 中文版项目简介
# 🌍 汇率转换器（Next.js版）

👋 你好，我是郑绮慧，一名前端开发者，专注于 React 生态，擅长构建高效、可维护的前端应用。
本项目是一个 **独立开发的汇率换算web application**，支持 **全球货币换算**，并提供 **历史汇率数据的可视化**，帮助用户更直观地了解汇率趋势。

## 📌 项目背景 & 目标
随着跨境旅行和国际贸易的增长，越来越多的用户需要 **便捷、精准的实时**汇率查询。

本项目的目标是：
- ✅ 实时汇率换算：提供直观、快速的汇率转换体验，帮助用户随时掌握最新汇率。
- 📊 历史汇率数据可视化：按指定周期查看历史汇率变动趋势图，把握汇率变动情况

我独立完成了需求分析，UI设计和前端开发，并使用第三方api请求汇率数据。

## 🛠️ 页面截图 & 使用方法

### 电脑端
<img src="https://github.com/user-attachments/assets/2bd1741f-b228-4bba-920b-9ea4067e05bc">

### 手机端
<img src="https://github.com/user-attachments/assets/3893ece1-44e0-4d0f-84cd-b7f23d6877cd" width="400">

### 使用方法
1️⃣ **选择货币**：在输入框中选择 **原货币** 和 **目标货币**（支持全球 150+ 货币）  
2️⃣ **输入金额**：输入需要换算的金额（实时计算）  
3️⃣ **查看结果**：系统即时显示转换后的金额，并提供对应的 **历史汇率趋势图**  
4️⃣ **数据可视化**：点击趋势图下方的按钮，自由选择查看最近 1周 / 1 个月 / 3 个月 / 6个月 / 1 年的汇率变动图表    

## 🚀 **技术栈**
| 技术     | 说明                                     |
|----------------|----------------------------------------------|
| Next.js 15     | 前端框架，支持 SSR（服务端渲染），提升性能和 SEO |
| TypeScript     | 静态类型检查，提高代码可读性和维护性          |
| Sass           | UI 设计，使用变量、Mixin、模块化拆分，提高样式复用性 |
| Recharts       | 图表可视化，交互式折线图，展示历史汇率趋势    |
| exchangerate.host | 外部 API，提供可靠、全面的汇率数据         |

## 💡 **亮点**

### 🌿 **模块化开发**
- **组件拆分**：所有功能模块独立封装，降低代码耦合度，提高可复用性  
- **Sass 预处理**：使用 **变量** 管理样式，易于统一整体 UI 风格，同时提高可维护性  
- **TypeScript 支持**：为组件和 API 定义严格的类型，减少运行时错误  

### 📊 **数据可视化**
- **动态折线图**：基于 Recharts 可视化展示历史汇率走势  
- **多时段趋势分析**：支持 1 周 / 1 个月 / 3 个月 / 6 个月 / 1 年等时间段的汇率变化对比  

### 📱 **响应式设计**
- **自适应布局**：在小屏幕上自动调整组件排版，提升移动端体验  
- **趋势图动态适配**：根据屏幕宽度调整图表尺寸，确保最佳可读性  

### ⚙️ **性能优化**
- **SSR**：通过 Next.js 服务端渲染，提高页面加载速度和SEO  
- **数据持久化**：使用 `localStorage` 记录用户偏好，提高用户体验  
- **智能缓存**：缓存历史汇率数据，避免重复请求，优化性能  

 ## 📬 联系方式
- 🔗 GitHub: https://github.com/zqh0317?tab=repositories
- 📧 Email: zhengqihui0317@gmail.com
- 💼 Linkedin: https://www.linkedin.com/in/qihui-zheng-ab2618275/








