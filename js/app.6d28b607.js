(function(){"use strict";var e={8933:function(e,a,t){var n=t(5130),i=t(6768);const o={id:"app"},r={class:"content-wrapper"};function s(e,a,t,n,s,l){const d=(0,i.g2)("Sidebar"),c=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)("div",o,[(0,i.bF)(d),(0,i.Lk)("div",r,[(0,i.bF)(c)])])}const l={class:"sidebar"};function d(e,a,t,n,o,r){const s=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("div",l,[a[8]||(a[8]=(0,i.Lk)("h2",null,"Deliveries",-1)),(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[(0,i.bF)(s,{to:"/"},{default:(0,i.k6)((()=>a[0]||(a[0]=[(0,i.eW)("Main")]))),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(s,{to:"/entrega1/seleccion_modelo"},{default:(0,i.k6)((()=>a[1]||(a[1]=[(0,i.eW)("Delivery 1")]))),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(s,{to:"/entrega2/eda"},{default:(0,i.k6)((()=>a[2]||(a[2]=[(0,i.eW)("Delivery 2")]))),_:1}),(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[(0,i.bF)(s,{to:"/entrega2/eda"},{default:(0,i.k6)((()=>a[3]||(a[3]=[(0,i.eW)("Data Description")]))),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(s,{to:"/entrega2/exogenos"},{default:(0,i.k6)((()=>a[4]||(a[4]=[(0,i.eW)("External Repositories")]))),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(s,{to:"/entrega2/visualizacion"},{default:(0,i.k6)((()=>a[5]||(a[5]=[(0,i.eW)("Data Visualization")]))),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(s,{to:"/entrega2/limpieza"},{default:(0,i.k6)((()=>a[6]||(a[6]=[(0,i.eW)("Data Cleansing")]))),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(s,{to:"/entrega2/imputacion"},{default:(0,i.k6)((()=>a[7]||(a[7]=[(0,i.eW)("Data Imputation")]))),_:1})])])])])])}var c={name:"page_sidebar"},u=t(1241);const v=(0,u.A)(c,[["render",d],["__scopeId","data-v-11f5e8a5"]]);var h=v,p={components:{Sidebar:h}};const m=(0,u.A)(p,[["render",s]]);var b=m,f=t(1387);const g={class:"container"},y={class:"actions"};function k(e,a,t,n,o,r){const s=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("div",g,[a[2]||(a[2]=(0,i.Lk)("div",{class:"header"},[(0,i.Lk)("h1",null,"Master's Degree Data Mining Project")],-1)),a[3]||(a[3]=(0,i.Lk)("div",{class:"content"},[(0,i.Lk)("p",null," This project is part of the Data Mining Course for the Master's Degree in Computer Engineering at Universidad del Norte. It addresses the use of stock data to evaluate its behavior and estimate future prices. Through machine learning models, we aim to predict with accuracy the stock prices of a company. "),(0,i.Lk)("p",null," Here you can explore the different deliveries of the project, this includes analysis, visualizations and usage of predictive models that have been trained for this purpose. ")],-1)),(0,i.Lk)("div",y,[(0,i.bF)(s,{to:"/entrega1/seleccion_modelo",class:"btn"},{default:(0,i.k6)((()=>a[0]||(a[0]=[(0,i.eW)("See Delivery 1")]))),_:1}),(0,i.bF)(s,{to:"/entrega2/eda",class:"btn"},{default:(0,i.k6)((()=>a[1]||(a[1]=[(0,i.eW)("See Delivery 2")]))),_:1})]),a[4]||(a[4]=(0,i.Lk)("div",{class:"footer"},[(0,i.Lk)("p",null,"© 2024 Data Mining Project")],-1))])}var D={name:"LandingPage"};const w=(0,u.A)(D,[["render",k],["__scopeId","data-v-01ba0f0d"]]);var L=w;const _={class:"container"};function I(e,a,t,n,o,r){return(0,i.uX)(),(0,i.CE)("div",_,a[0]||(a[0]=[(0,i.Fv)('<div class="header" data-v-251b357c><h1 data-v-251b357c>Delivery 1: Model Selection</h1></div><div class="content" data-v-251b357c><p data-v-251b357c> The proposal for the project of Data Mining course in the Computer Engineer Master&#39;s Degree is estimating stock using both historical values and external variables such as interest rates, economic indices, and other macroeconomic factors. The goal is to estimate the stock price of a company (NVIDIA in this case) using a machine learning model trained with this multi-sourced data. </p><h3 data-v-251b357c>Chosen Model: <a href="https://en.wikipedia.org/wiki/Gradient_boosting" target="_blank" data-v-251b357c>Gradient Boosting Machine (GBM)</a></h3><h3 data-v-251b357c>Justification:</h3><p data-v-251b357c> GBM models are highly effective for handling structured tabular data, which is the common structure used for storing financial and macroeconomic data. Additionally, it has the capability to work with a large number of categorical and numerical variables [1], which is ideal for a scenario like this project, where descriptions of various factors need to be taken into account. Functionally, GBM builds a series of decision trees where each subsequent tree attempts to correct the errors of the previous ones. While this model offers high accuracy, robustness against overfitting, and the ability to capture nonlinear relationships, achieving this comes with a high computational cost. However, it can be argued that these advantages outweigh the costs. Moreover, there are lighter versions, such as LightGBM, that offer faster processing and require fewer computational resources. </p><h3 data-v-251b357c>Relevance:</h3><p data-v-251b357c> GBMs such as XGBoost are frequently used in the financial field for tasks such as asset value prediction, risk assessment, and anomaly detection. These features make GBMs a relevant choice for predicting stock behavior, as it can handle multiple exogenous variables and incorporate nonlinear relationships between these variables and stock prices. Recent studies have shown that GBMs outperforms other machine learning models (including deep learning models) in terms of accuracy and efficiency for financial problems [2]. Additionally, its ability to handle imbalanced data is particularly useful when dealing with real financial data, which tends to have asymmetric distributions. </p><h3 data-v-251b357c>Libraries:</h3><ul data-v-251b357c><li data-v-251b357c><a href="https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingClassifier.html" target="_blank" data-v-251b357c>Scikit-learn:</a> Machine Learning library that includes a GBM implementation.</li><li data-v-251b357c><a href="https://xgboost.readthedocs.io/en/stable/" target="_blank" data-v-251b357c>XGBoost:</a> An efficient and scalable implementation of GBM.</li><li data-v-251b357c><a href="https://lightgbm.readthedocs.io/en/stable/" target="_blank" data-v-251b357c>LightGBM:</a> Lighter and quicker implementation of GBM.</li><li data-v-251b357c><a href="https://catboost.ai/" target="_blank" data-v-251b357c>CatBoost:</a> GBM library specialized for handling categorical variables.</li></ul><h3 data-v-251b357c>References:</h3><ol data-v-251b357c><li data-v-251b357c> M. Reyners, &quot;An Introduction to Gradient Boosting,&quot; Winter School on Quantitative Finance, Univ. of Amsterdam, 2019 Available: <a href="https://staff.fnwi.uva.nl/p.j.c.spreij/winterschool/19ReynersPaper.pdf" data-v-251b357c>https://staff.fnwi.uva.nl/p.j.c.spreij/winterschool/19ReynersPaper.pdf</a>. [Accessed: 18-aug-2024]. </li><li data-v-251b357c> M. Schmitt, &quot;Deep Learning vs. Gradient Boosting: Benchmarking state-of-the-art machine learning algorithms for credit scoring,&quot; arXiv, May 2022. Available: <a href="https://arxiv.org/abs/2205.10535" data-v-251b357c>https://arxiv.org/abs/2205.10535</a>. [Accessed: 18-aug-2024]. </li><li data-v-251b357c> Main Dataset: &quot;NVIDIA Corporation (NVDA),&quot; yahoo! finance: <a href="https://finance.yahoo.com/quote/NVDA/" data-v-251b357c>https://finance.yahoo.com/quote/NVDA/</a>. [Accessed: 18-aug-2024]. </li></ol></div><div class="footer" data-v-251b357c> Delivery date: August 18, 2024 <br data-v-251b357c> Developed by: Giuliano Frieri </div>',3)]))}var C={name:"seleccion_modelo"};const A=(0,u.A)(C,[["render",I],["__scopeId","data-v-251b357c"]]);var S=A,F=t(4232);const M={class:"container"},E={class:"content"};function j(e,a,t,n,o,r){return(0,i.uX)(),(0,i.CE)("div",M,[a[7]||(a[7]=(0,i.Lk)("div",{class:"header"},[(0,i.Lk)("h1",null,"Delivery 2: Exploratory Data Analysis (EDA)")],-1)),(0,i.Lk)("div",E,[(0,i.Lk)("p",null,[(0,i.eW)(" Observations: "+(0,F.v_)(o.numberOfRows)+" ",1),a[0]||(a[0]=(0,i.Lk)("br",null,null,-1)),(0,i.eW)(" Variables: "+(0,F.v_)(o.numberOfColumns),1)]),a[3]||(a[3]=(0,i.Lk)("h2",null,"General Data Description",-1)),a[4]||(a[4]=(0,i.Lk)("h4",null,"Variable List and Data Types",-1)),(0,i.Lk)("table",null,[a[1]||(a[1]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th",null,"Variable"),(0,i.Lk)("th",null,"Type")])],-1)),(0,i.Lk)("tbody",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.dataTypes,((e,a)=>((0,i.uX)(),(0,i.CE)("tr",{key:a},[(0,i.Lk)("td",null,(0,F.v_)(a),1),(0,i.Lk)("td",null,(0,F.v_)(e),1)])))),128))])]),a[5]||(a[5]=(0,i.Lk)("h4",null,"Variable Descriptions",-1)),(0,i.Lk)("ul",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.variableDescriptions,((e,a)=>((0,i.uX)(),(0,i.CE)("li",{key:a},[(0,i.Lk)("strong",null,(0,F.v_)(a)+":",1),(0,i.eW)(" "+(0,F.v_)(e),1)])))),128))]),a[6]||(a[6]=(0,i.Lk)("h4",null,"Summary Statistics for Numerical Variables",-1)),(0,i.Lk)("table",null,[a[2]||(a[2]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th",null,"Variable"),(0,i.Lk)("th",null,"Count"),(0,i.Lk)("th",null,"Mean"),(0,i.Lk)("th",null,"Std"),(0,i.Lk)("th",null,"Min"),(0,i.Lk)("th",null,"25%"),(0,i.Lk)("th",null,"50%"),(0,i.Lk)("th",null,"75%"),(0,i.Lk)("th",null,"Max")])],-1)),(0,i.Lk)("tbody",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.summaryStats,((e,a)=>((0,i.uX)(),(0,i.CE)("tr",{key:a},[(0,i.Lk)("td",null,(0,F.v_)(a),1),(0,i.Lk)("td",null,(0,F.v_)(e.count),1),(0,i.Lk)("td",null,(0,F.v_)(e.mean),1),(0,i.Lk)("td",null,(0,F.v_)(e.std),1),(0,i.Lk)("td",null,(0,F.v_)(e.min),1),(0,i.Lk)("td",null,(0,F.v_)(e.q25),1),(0,i.Lk)("td",null,(0,F.v_)(e.q50),1),(0,i.Lk)("td",null,(0,F.v_)(e.q75),1),(0,i.Lk)("td",null,(0,F.v_)(e.max),1)])))),128))])])]),a[8]||(a[8]=(0,i.Lk)("div",{class:"footer"},[(0,i.eW)(" Delivery date: September 15, 2024 "),(0,i.Lk)("br"),(0,i.eW)(" Developed by: Giuliano Frieri ")],-1))])}var x={name:"exploratory-data-analysis",data(){return{numberOfRows:0,numberOfColumns:0,dataTypes:{},summaryStats:{},variableDescriptions:{Date:"Date of the value in ISO 8601 datetime format (YYYY-MM-DDTHH:mm+TZD)","Adj Close":"Adjusted closing price after market factors in USDs",Close:"Closing price of the stock for the day in USDs",High:"Highest price of the stock for the day in USDs",Low:"Lowest price of the stock for the day in USDs",Open:"Opening price of the stock for the day in USDs",Volume:"Total number of shares traded (in millions)"}}},methods:{async loadJsonData(){try{const e=await fetch("/data/jsons/nvda_stock.json"),a=await e.json();this.numberOfRows=a.length,this.numberOfColumns=Object.keys(a[0]||{}).length,this.dataTypes=Object.keys(a[0]||{}).reduce(((e,t)=>(e[t]=typeof a[0][t],e)),{}),this.summaryStats=this.calculateSummaryStats(a),console.log("Data loaded successfully:",a),console.log("Summary Statistics:",this.summaryStats)}catch(e){console.error("Failed to load JSON data:",e)}},calculateSummaryStats(e){const a={},t=Object.keys(e[0]||{}),n=t.filter((a=>"number"===typeof e[0][a]));return n.forEach((t=>{const n=e.map((e=>e[t])).filter((e=>!isNaN(e)&&null!==e&&void 0!==e));if(n.length>0){const e=n.length,i=n.reduce(((e,a)=>e+a),0)/e,o=Math.sqrt(n.reduce(((e,a)=>e+(a-i)**2),0)/e),r=[...n].sort(((e,a)=>e-a)),s=a=>r[Math.floor(a/100*(e-1))];a[t]={count:e,mean:i.toFixed(6),std:o.toFixed(6),min:Math.min(...n).toFixed(6),q25:s(25).toFixed(6),q50:s(50).toFixed(6),q75:s(75).toFixed(6),max:Math.max(...n).toFixed(6)}}else a[t]={count:0,mean:"N/A",std:"N/A",min:"N/A",q25:"N/A",q50:"N/A",q75:"N/A",max:"N/A"}})),a}},mounted(){this.loadJsonData()}};const P=(0,u.A)(x,[["render",j],["__scopeId","data-v-e2f9c2ac"]]);var G=P;const V={class:"container"};function R(e,a,t,n,o,r){return(0,i.uX)(),(0,i.CE)("div",V,a[0]||(a[0]=[(0,i.Fv)('<div class="header" data-v-ee4be2ae><h1 data-v-ee4be2ae>Delivery 2: External Data</h1></div><div class="content" data-v-ee4be2ae><p data-v-ee4be2ae> The next external data repositories can be used to enrich the project&#39;s analysis: </p><h2 data-v-ee4be2ae>StockAnalysis.com</h2><h3 data-v-ee4be2ae>Repository:</h3><ul data-v-ee4be2ae><li data-v-ee4be2ae><a href="https://stockanalysis.com/stocks/nvda/employees/" target="_blank" data-v-ee4be2ae>NVIDIA Employees</a></li></ul><h3 data-v-ee4be2ae>Relevance:</h3><p data-v-ee4be2ae> Understanding a company&#39;s employee trends can provide insight into it&#39;s operational health and strategic direction. Workforce changes often correlate with broader financial and market performance, offering additional context for stock price behavior. </p><h3 data-v-ee4be2ae>Impact:</h3><p data-v-ee4be2ae> Incorporating employee data enhances the model&#39;s ability to capture company-specific factors that may influence stock prices. Workforce dynamics, combined with external macroeconomic indicators, provide a holistic view of performance, improving the predictive accuracy of the model. </p><h2 data-v-ee4be2ae>Yahoo! Finance</h2><h3 data-v-ee4be2ae>Repositories:</h3><ul data-v-ee4be2ae><li data-v-ee4be2ae><a href="https://finance.yahoo.com/quote/%5EGSPC/" target="_blank" data-v-ee4be2ae>Standard &amp; Poor&#39;s 500 Index (S&amp;P 500)</a></li><li data-v-ee4be2ae><a href="https://finance.yahoo.com/quote/%5EVIX/" target="_blank" data-v-ee4be2ae>Chicago Board Options Exchange Volatility Index (VIX)</a></li></ul><h3 data-v-ee4be2ae>Relevance:</h3><ul data-v-ee4be2ae><li data-v-ee4be2ae>The S&amp;P 500 reflects overall market trends, offering context for stock performance within the broader market.</li><li data-v-ee4be2ae>The VIX measures market volatility and investor sentiment, providing insight into how uncertainty affects stock prices.</li></ul><h3 data-v-ee4be2ae>Impact:</h3><p data-v-ee4be2ae> Incorporating these indices enhances the model&#39;s ability to capture market-wide trends (S&amp;P 500) and volatility-driven risks (VIX), improving accuracy and robustness in predicting stock price under different economic conditions. </p><h2 data-v-ee4be2ae>Federal Reserve Economic Data</h2><h3 data-v-ee4be2ae>Repositories:</h3><ul data-v-ee4be2ae><li data-v-ee4be2ae><a href="https://fred.stlouisfed.org/series/GDP" target="_blank" data-v-ee4be2ae>Gross Domestic Product (GPD)</a></li><li data-v-ee4be2ae><a href="https://fred.stlouisfed.org/series/UNRATE" target="_blank" data-v-ee4be2ae>Unemployment Rate (UNRATE)</a></li><li data-v-ee4be2ae><a href="https://fred.stlouisfed.org/series/CPIAUCSL" target="_blank" data-v-ee4be2ae>Consumer Price Index (CPI)</a></li><li data-v-ee4be2ae><a href="https://fred.stlouisfed.org/series/FEDFUNDS" target="_blank" data-v-ee4be2ae>Federal Funds Effective Rate (FEDFUNDS)</a></li></ul><h3 data-v-ee4be2ae>Relevance:</h3><ul data-v-ee4be2ae><li data-v-ee4be2ae>GDP reflects overall economic performance, highlighting growth or contraction trends that can influence stock prices.</li><li data-v-ee4be2ae>The Unemployment Rate indicates labor market health, which impacts consumer spending and investor confidence, key drivers of stock performance.</li><li data-v-ee4be2ae>CPI measures inflation, affecting purchasing power, costs, and profit margins, directly influencing stock valuations.</li><li data-v-ee4be2ae>The Federal Funds Rate represents monetary policy stance, influencing borrowing costs and market liquidity, critical for stock market dynamics.</li></ul><h3 data-v-ee4be2ae>Impact:</h3><p data-v-ee4be2ae> Including these indicators allows the model to capture macroeconomic conditions (GDP, Unemployment, CPI) and policy-driven effects (Federal Funds Rate) that shape stock price movements. This comprehensive view improves prediction accuracy and robustness by linking stock price to broader economic forces. </p></div><div class="footer" data-v-ee4be2ae> Delivery date: September 15, 2024 <br data-v-ee4be2ae> Developed by: Giuliano Frieri </div>',3)]))}var T={name:"repositorios_externos"};const q=(0,u.A)(T,[["render",R],["__scopeId","data-v-ee4be2ae"]]);var N=q;const O={class:"container"},X={class:"content"};function B(e,a,t,n,o,r){const s=(0,i.g2)("DataVisualization");return(0,i.uX)(),(0,i.CE)("div",O,[a[0]||(a[0]=(0,i.Lk)("div",{class:"header"},[(0,i.Lk)("h1",null,"Data Visualization")],-1)),(0,i.Lk)("div",X,[(0,i.bF)(s)]),a[1]||(a[1]=(0,i.Lk)("div",{class:"footer"},[(0,i.eW)(" Delivery date: September 15, 2024 "),(0,i.Lk)("br"),(0,i.eW)(" Developed by: Giuliano Frieri ")],-1))])}const W={class:"visualization-container"};function z(e,a,t,n,o,r){return(0,i.uX)(),(0,i.CE)("div",W,a[0]||(a[0]=[(0,i.Fv)('<div class="charts" data-v-6d74a1bb><h2 data-v-6d74a1bb>NVIDIA Stock Trends</h2><canvas id="nvdaStockChart" data-v-6d74a1bb></canvas><h2 data-v-6d74a1bb>Market Comparisons: NVIDIA vs. SP500 and VIX</h2><canvas id="marketComparisonChart" data-v-6d74a1bb></canvas><h2 data-v-6d74a1bb>Economic Indicators Correlation</h2><canvas id="economicIndicatorsChart" data-v-6d74a1bb></canvas><h2 data-v-6d74a1bb>NVIDIA Employee Growth</h2><canvas id="employeeGrowthChart" data-v-6d74a1bb></canvas></div>',1)]))}var U=t(144),K=t(6912);function H(e,a,t){return{type:"line",data:{labels:e,datasets:a},options:{responsive:!0,plugins:{title:{display:!0,text:t}}}}}function J(e,a,t){return{type:"bar",data:{labels:e,datasets:a},options:{responsive:!0,plugins:{title:{display:!0,text:t}}}}}function Y(e,a){return{type:"scatter",data:{datasets:e},options:{responsive:!0,plugins:{title:{display:!0,text:a}}}}}K.t1.register(...K.$L);var Q=t(4373),Z={name:"DataVisualization",setup(){const e=(0,U.KR)([]),a=(0,U.KR)([]),t=(0,U.KR)([]),n=(0,U.KR)([]),o=(0,U.KR)([]),r=(0,U.KR)([]),s=(0,U.KR)([]),l=(0,U.KR)([]),d=async()=>{try{e.value=(await Q.A.get("/data/jsons/nvda_stock.json")).data,a.value=(await Q.A.get("/data/jsons/sp500.json")).data,t.value=(await Q.A.get("/data/jsons/vix.json")).data,n.value=(await Q.A.get("/data/jsons/unemployment.json")).data,o.value=(await Q.A.get("/data/jsons/cpi.json")).data,r.value=(await Q.A.get("/data/jsons/interest_rate.json")).data,s.value=(await Q.A.get("/data/jsons/gdp.json")).data,l.value=(await Q.A.get("/data/jsons/employees.json")).data,c()}catch(i){console.error("Failed to load data:",i)}},c=()=>{const i=e.value.map((e=>e.Date)),r=e.value.map((e=>e.Close)),s=H(i,[{label:"NVIDIA Stock Price",data:r,borderColor:"rgba(75, 192, 192, 1)",fill:!1}],"NVIDIA Stock Trends");new K.t1(document.getElementById("nvdaStockChart"),s);const d=a.value.map((e=>e.Close)),c=t.value.map((e=>e.Close)),u=H(i,[{label:"NVIDIA Stock Price",data:r,borderColor:"rgba(75, 192, 192, 1)",fill:!1},{label:"SP500",data:d.slice(0,i.length),borderColor:"rgba(153, 102, 255, 1)",fill:!1},{label:"VIX",data:c.slice(0,i.length),borderColor:"rgba(255, 159, 64, 1)",fill:!1}],"Market Comparisons");if(new K.t1(document.getElementById("marketComparisonChart"),u),Array.isArray(o.value)&&Array.isArray(n.value)){const e=[{label:"CPI vs Unemployment",data:o.value.map(((e,a)=>({x:e.CPI,y:n.value[a]?.UNRATE||null}))),backgroundColor:"rgba(255, 99, 132, 0.6)"}],a=Y(e,"Economic Indicators Correlation");new K.t1(document.getElementById("economicIndicatorsChart"),a)}else console.error("Economic indicator data is not an array or is missing.");l.value.sort(((e,a)=>new Date(e.Date)-new Date(a.Date)));const v=l.value.map((e=>e.Date)),h=l.value.map((e=>e.Employees)),p=J(v,[{label:"Employees",data:h,backgroundColor:"rgba(54, 162, 235, 0.6)"}],"NVIDIA Employee Growth");new K.t1(document.getElementById("employeeGrowthChart"),p)};return(0,i.sV)((()=>{d()})),{}}};const $=(0,u.A)(Z,[["render",z],["__scopeId","data-v-6d74a1bb"]]);var ee=$,ae={name:"visualizacion_datos",components:{DataVisualization:ee}};const te=(0,u.A)(ae,[["render",B],["__scopeId","data-v-0ce6e6fe"]]);var ne=te;const ie={class:"container"};function oe(e,a,t,n,o,r){return(0,i.uX)(),(0,i.CE)("div",ie,a[0]||(a[0]=[(0,i.Fv)('<div class="header" data-v-be488aae><h1 data-v-be488aae>Delivery 2: Data Cleansing</h1></div><div class="content" data-v-be488aae><br data-v-be488aae><h3 data-v-be488aae>1. Handling Missing Values:</h3><p data-v-be488aae> Missing values were addressed depending on the data type:</p><ul data-v-be488aae><li data-v-be488aae>For numeric columns (e.g., stock prices, VIX, S&amp;P 500), rows with missing values were dropped.</li><li data-v-be488aae>For macroeconomic indicators (e.g., GDP, CPI), forward filling was applied to propagate previous values where gaps existed.</li></ul><h3 data-v-be488aae>2. Standardizing Data Formats:</h3><p data-v-be488aae>The date column was standardized as a datetime index for all datasets. This allowed seamless integration during the merging step. Additionally:</p><ul data-v-be488aae><li data-v-be488aae>Volume data in stock datasets was normalized by dividing it into millions for better scaling.</li><li data-v-be488aae>CPI column was renamed to &quot;CPI&quot; for uniformity.</li></ul><h3 data-v-be488aae>3. Outlier Handling:</h3><p data-v-be488aae> Given that we are working with stock-related data, extreme values often represent genuine market conditions rather than errors. Preserving these factual values is critical for accurately modeling stock behavior and trends. </p><h3 data-v-be488aae>4. Consistency in Employee Data:</h3><p data-v-be488aae> Employee data was adjusted to align with fiscal year conventions: </p><ul data-v-be488aae><li data-v-be488aae>Dates for employee records were shifted to represent the start of the fiscal year.</li><li data-v-be488aae>Employee data was aggregated to yearly frequency, consistent with its role as a key feature.</li></ul></div><div class="footer" data-v-be488aae> Delivery date: September 15, 2024 <br data-v-be488aae> Developed by: Giuliano Frieri </div>',3)]))}var re={name:"limpieza_datos"};const se=(0,u.A)(re,[["render",oe],["__scopeId","data-v-be488aae"]]);var le=se;const de={class:"container"};function ce(e,a,t,n,o,r){return(0,i.uX)(),(0,i.CE)("div",de,a[0]||(a[0]=[(0,i.Fv)('<div class="header" data-v-4877ad32><h1 data-v-4877ad32>Delivery 2: Data Imputation</h1></div><div class="content" data-v-4877ad32><br data-v-4877ad32><h3 data-v-4877ad32>1. Resampling to Monthly Frequency:</h3><p data-v-4877ad32><strong data-v-4877ad32>Method:</strong> All datasets were resampled to monthly frequency: </p><ul data-v-4877ad32><li data-v-4877ad32>Stock prices (e.g., NVDA, S&amp;P 500): The last daily value of each month was retained to reflect end-of-month prices.</li><li data-v-4877ad32>VIX: Monthly averages were computed to represent overall market volatility for the month.</li></ul><h3 data-v-4877ad32>2. Imputation for Macroeconomic Data:</h3><p data-v-4877ad32><strong data-v-4877ad32>Method:</strong> For GDP and employee data: </p><ul data-v-4877ad32><li data-v-4877ad32>GDP (trimestral): Forward filling was applied to propagate trimestral values to the corresponding months.</li><li data-v-4877ad32>Employee numbers (yearly): Forward filling was applied to assign the same value across all months of the year.</li></ul><h3 data-v-4877ad32>3. Justification for Monthly Management:</h3><p data-v-4877ad32> Stocks tend to respond to monthly trends, and the majority of the data (e.g., stock prices, VIX, S&amp;P 500) originated in daily or monthly frequencies. Therefore: </p><ul data-v-4877ad32><li data-v-4877ad32>Data was standardized to monthly intervals to enable consistent integration and analysis.</li><li data-v-4877ad32>GDP (trimestral) and employee numbers (yearly) were retained as key features to provide broader economic context.</li></ul></div><div class="footer" data-v-4877ad32> Delivery date: September 15, 2024 <br data-v-4877ad32> Developed by: Giuliano Frieri </div>',3)]))}var ue={name:"imputacion_datos"};const ve=(0,u.A)(ue,[["render",ce],["__scopeId","data-v-4877ad32"]]);var he=ve;const pe=[{path:"/",component:L},{path:"/Masters-Data-Mining-Project/",component:L},{path:"/entrega1/seleccion_modelo",component:S},{path:"/entrega2/eda",component:G},{path:"/entrega2/exogenos",component:N},{path:"/entrega2/visualizacion",component:ne},{path:"/entrega2/limpieza",component:le},{path:"/entrega2/imputacion",component:he}],me=(0,f.aE)({history:(0,f.LA)(),routes:pe});var be=me;(0,n.Ef)(b).use(be).mount("#app")}},a={};function t(n){var i=a[n];if(void 0!==i)return i.exports;var o=a[n]={exports:{}};return e[n].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,n,i,o){if(!n){var r=1/0;for(c=0;c<e.length;c++){n=e[c][0],i=e[c][1],o=e[c][2];for(var s=!0,l=0;l<n.length;l++)(!1&o||r>=o)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(s=!1,o<r&&(r=o));if(s){e.splice(c--,1);var d=i();void 0!==d&&(a=d)}}return a}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,i,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var i,o,r=n[0],s=n[1],l=n[2],d=0;if(r.some((function(a){return 0!==e[a]}))){for(i in s)t.o(s,i)&&(t.m[i]=s[i]);if(l)var c=l(t)}for(a&&a(n);d<r.length;d++)o=r[d],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},n=self["webpackChunkmasters_dm_project"]=self["webpackChunkmasters_dm_project"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(8933)}));n=t.O(n)})();
//# sourceMappingURL=app.6d28b607.js.map