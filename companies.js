const data = [
/* ===================== A. QUANT / HFT / PROP ===================== */
{
  category: "🔥 A. Quant / HFT / Prop Trading (₹50L → ₹2CR)",
  companies: [
    ["Jane Street", "Quant Trader, SWE, Research"],
    ["Citadel", "Quant Dev, Research"],
    ["Citadel Securities", "Trading Systems"],
    ["Hudson River Trading", "Low-latency SWE"],
    ["Jump Trading", "C++ / Quant Dev"],
    ["Five Rings Capital", "Quant Trader"],
    ["Optiver", "Trader, SWE"],
    ["IMC Trading", "Quant Dev"],
    ["Flow Traders", "Trading Systems"],
    ["Tower Research Capital", "HFT Engineer"],
    ["Da Vinci Derivatives", "Trader"],
    ["QuadEye", "Quant Dev"],
    ["Quantbox Research", "Research"],
    ["Graviton Research Capital", "Quant Research"],
    ["NK Securities", "Trading Systems"],
    ["AlphaGrep", "Quant Dev"],
    ["Squarepoint Capital", "Quant Dev"],
    ["WorldQuant", "Research"],
    ["SIG", "Quant Trading"],
    ["DRW", "Trading Tech"],
    ["Akuna Capital", "Options Trading"],
    ["Belvedere Trading", "Quant Trading"],
    ["Virtu Financial", "Market Making"],
    ["Old Mission Capital", "Trader"],
    ["Wolverine Trading", "Options"],
    ["iRage Capital", "Quant Dev"],
    ["Aarna Capital", "Quant"],
    ["APT Portfolio", "Research"],
    ["Millennium", "Quant Tech"],
    ["Point72", "Cubist / Tech"],
    ["Schonfeld", "Quant"],
    ["Arcesium", "Platform Engineering"]
  ]
},

/* ===================== B. FINANCE / IB / MARKET TECH ===================== */
{
  category: "🧠 B. Finance / IB / Market Tech (₹30–60 LPA)",
  companies: [
    ["Bloomberg LP", "SWE, Systems"],
    ["BNY Mellon", "Platform / Quant Tech"],
    ["Goldman Sachs", "Strats / Markets Tech"],
    ["JP Morgan", "Athena / Markets"],
    ["Morgan Stanley", "Strats"],
    ["DE Shaw", "Tech / Research"],
    ["BlackRock", "Aladdin"],
    ["Citibank", "Institutional Tech"],
    ["Barclays", "IB Tech"],
    ["UBS", "Analytics"],
    ["Nomura", "Markets Tech"],
    ["Deutsche Bank", "Trading Tech"],
    ["HSBC", "Global Tech"],
    ["State Street", "Quant Analytics"],
    ["Refinitiv", "Market Data"],
    ["LSEG", "Core Infra"],
    ["ICE", "Trading Infra"],
    ["FactSet", "Elite SWE"],
    ["Morningstar", "Data Infra"],
    ["BNP Paribas", "Front-office Tech"],
    ["Societe Generale", "Markets Tech"],
    ["RBC Capital Markets", "Quant Tech"],
    ["Jefferies", "Trading Tech"],
    ["Macquarie", "Commodities Tech"]
  ]
},

/* ===================== C. BIG TECH ===================== */
{
  category: "🌍 C. Tier-1 Global Tech (₹35–70+ CTC)",
  companies: [
    ["Google", "Software Engineer"],
    ["Meta", "Software Engineer"],
    ["Microsoft", "Software Engineer"],
    ["Apple", "Systems / Silicon"],
    ["Amazon", "AWS / Core"],
    ["Uber", "Platform"],
    ["Netflix", "Backend"],
    ["Stripe", "Infra"],
    ["Databricks", "Data Platform"],
    ["Salesforce", "Core Platform"],
    ["Adobe", "ML / Platform"],
    ["LinkedIn", "Distributed Systems"],
    ["ByteDance", "Infra"],
    ["Snowflake", "Data Infra"],
    ["Palantir", "Backend"],
    ["Airbnb", "Platform"],
    ["Dropbox", "Core Infra"],
    ["X (Twitter)", "Backend"],
    ["Pinterest", "Data"],
    ["Reddit", "Backend"],
    ["Zoom", "Infra"],
    ["Cloudflare", "Security"],
    ["Figma", "Platform"],
    ["Canva", "Backend"],
    ["OpenAI", "Research / SWE"],
    ["Anthropic", "Research"]
  ]
},

/* ===================== D. FINTECH / SAAS ===================== */
{
  category: "💳 D. Fintech / SaaS (₹30–45 LPA)",
  companies: [
    ["Visa", "Platform Engineer"],
    ["Mastercard", "Core Payments"],
    ["PhonePe", "Backend"],
    ["Google Pay", "Payments"],
    ["Razorpay", "Infra"],
    ["CRED", "Backend"],
    ["Groww", "Platform"],
    ["Zerodha", "Trading Systems"],
    ["Upstox", "Backend"],
    ["CoinSwitch", "Infra"],
    ["Juspay", "Low-latency"],
    ["Pine Labs", "Payments"],
    ["Postman", "Platform"],
    ["BrowserStack", "Infra"],
    ["Nutanix", "Systems"],
    ["Sprinklr", "Backend"],
    ["Freshworks", "Elite SWE"]
  ]
},

/* ===================== E. INDIAN PRODUCT ===================== */
{
  category: "🛒 E. Indian / Global Product Companies",
  companies: [
    ["Flipkart", "Core Tech"],
    ["Meesho", "Platform"],
    ["Swiggy", "Infra"],
    ["Zomato", "Platform"],
    ["Myntra", "Backend"],
    ["MakeMyTrip", "Core Systems"],
    ["Dream11", "Data"],
    ["ShareChat", "ML Infra"],
    ["InMobi", "AdTech"],
    ["Udaan", "Backend"],
    ["Hotstar", "Streaming Tech"]
  ]
},

/* ===================== F. SEMICONDUCTOR ===================== */
{
  category: "🧪 F. Semiconductor / Systems",
  companies: [
    ["NVIDIA", "Systems / ML"],
    ["Qualcomm", "DSP / Systems"],
    ["Intel", "R&D"],
    ["ARM", "Architecture"],
    ["Broadcom", "Systems"],
    ["Texas Instruments", "Embedded"],
    ["Micron", "Memory Systems"],
    ["Synopsys", "EDA R&D"],
    ["Cadence", "EDA"],
    ["ASML", "Core Systems"]
  ]
}
];

const content = document.getElementById("content");

data.forEach(section => {
  const div = document.createElement("div");
  div.className = "category";

  let html = `<h2>${section.category}</h2><table>
    <tr><th>Company</th><th>Possible Roles</th></tr>`;

  section.companies.forEach(c => {
    html += `<tr><td>${c[0]}</td><td>${c[1]}</td></tr>`;
  });

  html += "</table>";
  div.innerHTML = html;
  content.appendChild(div);
});
