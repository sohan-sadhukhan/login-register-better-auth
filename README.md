# 🔐 Auth App (Better Auth + Next.js)

A modern authentication application built using **Next.js 16**, **Better Auth**, **Prisma ORM**, and **Tailwind CSS**. Includes full authentication, profile settings, password updates, and secure account deletion.

---

## ✨ Features

### 🔐 Authentication

- 🔑 User Login & Registration using Better Auth
- 🛡️ Secure password hashing with Argon2
- 📧 Email + Password authentication
- ✔️ Validation using Zod + React Hook Form
- 🔄 Automatic session management (login, logout, refresh)

### 👤 User Settings Dashboard

#### 🔧 Edit Personal Information

- ✏️ Update Name
- 📩 Update Email
- ✔️ Fully validated forms
- 🔔 Toast notifications for success/error

#### 🔑 Change Password

- 🔐 Update password securely
- 🧪 Requires current password
- ✔️ Validates new & confirm password
- 📢 Clear feedback messages

#### ☠️ Danger Zone — Delete Account

- 🗑️ Permanently delete user account
- ⚠️ Removes **ALL** associated data

---

## 📦 Tech Stack

### 🎨 Frontend

- ⚛️ Next.js 16
- 🔵 React 19
- 🎨 Tailwind CSS 4
- 🎛️ Shadcn
- 📝 React Hook Form
- 🧩 Zod

### 🛠️ Backend

- 🔐 Better Auth
- 🗄️ Prisma ORM
- 🛡️ Argon2 hashing

---

## 🚀 Getting Started

### Prerequisites

- Node.js 22.x (LTS recommended)
- npm 11.x or later (included with Node.js)
- Git for version control

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/sohan-sadhukhan/login-register-better-auth.git
cd login-register-better-auth
```

### 2. Set up environment variables:

```bash
cp .env.example .env
```

### 3. Install Dependencies

Install all required packages using your preferred package manager:

```bash
# With npm
npm install

# With yarn
yarn install

# With pnpm
pnpm install

# With bun
bun install
```

### 4. Set Up the Database

Run Prisma migrations to set up your database schema:

```bash
# Run database migrations
npx prisma migrate dev --name init

##  Generate Prisma Client
npx prisma generate
```

### 5. Start the Development Server

Once dependencies are installed and the database is set up, launch the local server:

```bash
# With npm
npm run dev

# With yarn
yarn dev

# With pnpm
pnpm dev

# With Bun
bun dev
```

Open [http://localhost:3000](http://localhost:3000/) in your browser to see the application.

---
