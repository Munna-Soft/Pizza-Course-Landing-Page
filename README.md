<!-- GitAds-Verify: W7S3ENIOGDDEQW6CDOD3NWS8ZQ5NW1W8 -->
## GitAds Sponsored
[![Sponsored by GitAds](https://gitads.dev/v1/ad-serve?source=munna-soft/pizza-course-landing-page@github)](https://gitads.dev/v1/ad-track?source=munna-soft/pizza-course-landing-page@github)

# 🍕 Pizza Course Landing Page

একটি আধুনিক, রেসপনসিভ এবং দ্রুত লোডিং **বাংলা ল্যান্ডিং পেজ** যা তৈরি করা হয়েছে
**Vite + React + TypeScript + Tailwind CSS + shadcn/ui** ব্যবহার করে।

এই প্রজেক্টটি সম্পূর্ণ **Static SPA (Single Page Application)** —
কোনো Backend বা Database সংযুক্ত নেই।

---

## 🔗 See Live Preview on below link 👇👇  
👉 [Full Webpage View as Image](/documentation/FullPageSS.png)
👉 [Full Webpage View as PDF](/documentation/FullPagePDF.pdf)

---

## 🛠️ Tech Stack  

- ⚡ **Vite** — Fast build & dev server
- ⚛️ **React 18**
- 🧠 **TypeScript**
- 🎨 **Tailwind CSS**
- 🧩 **shadcn/ui**
- 🎬 **Framer Motion**
- 🧭 **React Router DOM**
- 📦 **Lucide Icons**

---

## 🛠️ Setup Process (Mustbe Required)  

1. Clone this repo:  
   ```bash
   git clone https://github.com/Munna-Soft/Pizza-Course-Landing-Page.git
   ```  
   **or** download the repository as a `.zip` & extract with winrar or 7zip. 

---

### 🔄 Install Dependencies  

2. Open Project Directory & run **cmd** in directory url section or open project as vs code terminal
    ```sh
    npm install
    ```
    OR
    ```sh
    npm install i
    ```
    ⏳ This may take 1–2 minutes on first install. </br>
-   If Face any error try below Command
    ```sh
    npm install --legacy-peer-deps
    ```

### 🧑‍💻 Run Project Locally 🚀  

3. Open Project Directory & run **cmd** in directory url section or open project as vs code terminal
    ```sh
    npm run dev
    ```
- The app will run on: default
    ```sh
    http://localhost:8080
    ```
    ⚠️ If the port is different, check `vite.config.ts` & vite port configure
    ```sh
        server: {
          port: 8080,
    }
    ```
    ⚠️ If the port is busy try below Command
    ```sh
    npm run dev -- --port 3001
    ```

## 🏗️ Build for Production (cPanel / Shared Hosting)  

0. Open Project Directory & run **cmd** in directory url section or open project as vs code terminal
    ```sh
    npm run build
    ```
- After running this command, a dist/ folder will be generated.

## 🌐 Deploy to cPanel / Shared Hosting  

### Step 1: Create Domain or Subdomain  
    Ex: https://course.yourdomain.com

### Step 2: Upload Build Files  
- Open cPanel → File Manager
- Navigate to the domain's root folder (public_html or subdomain folder)
- Upload all contents inside the dist/ folder
- 👉 Make sure index.html is directly inside the root folder

### Step 3: Fix SPA Routing (.htaccess)  
- Create a .htaccess file in the root directory and paste the following code:
    ```sh
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
    ```
    Or Upload already build htaccess file from `documentation/ → .htaccess`

---

## 👨‍💻 Author  
🛠️ Develop and maintaince by [Munna MasterMind](https://facebook.com/The.Munna) & [Portfolio](https://munna-soft.github.io/Portfolio) 👈  
🌍 Open-source and free for all creators.  

## 📜 License  
Released under the **MIT License**. See [LICENSE](LICENSE) for details.  
   ```
   Copyright (c) 2025 Munna MasterMind
   ```

<div align="center">

## ☕ Support the Project  
If my project help you, please ⭐ star my repos —  
It motivates me to build **more awesome systems**! & consider buying me a coffee via **Binance Pay**:   

[![Binance Pay](https://img.shields.io/badge/Binance%20Pay-788233021-fcd535?style=for-the-badge&logo=binance&logoColor=white)](https://github.com/Munna-Soft)  

🚀 Every contribution keeps me motivated and helps me improve this project!  

</div>

## 🤝 Contribution  
Pull requests and issues are welcome if you want to improve or suggest new features.

## GitAds Sponsored
[![Sponsored by GitAds](https://gitads.dev/v1/ad-serve?source=munna-soft/pizza-course-landing-page@github)](https://gitads.dev/v1/ad-track?source=munna-soft/pizza-course-landing-page@github)