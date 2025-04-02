# JobSensai

![image](https://github.com/user-attachments/assets/965b7d50-80c9-487e-a420-d89fd9dd22aa)


**JobSensai** simplifies job hunting with smart AI-driven resume building, personalized career coaching, and seamless user onboarding. Whether you're crafting the perfect CV, practicing mock interviews, or generating a compelling cover letter, JobSensai guides you every step of the way—effortlessly. Get hired, the smart way!

🔗 **Live Demo:** [JobSensai](https://jobsensai.vercel.app/)

## 🚀 Project Showcase

### Key Features:
![image](https://github.com/user-attachments/assets/4d41409a-9997-4e8f-ba59-6eb12ea675e0)


- **AI Resume Builder** – Generate professional resumes using AI or Markdown.
- **Mock Interviews** – Practice with AI-generated interview questions.
- **Performance Tracking** – Track quiz results and interview performance.
- **Cover Letter Generator** – Generate customized cover letters with AI.
- **User Authentication** – Secure authentication using Clerk.
- **Industry Insights** – Get weekly AI-generated insights.

## 🛠 Tech Stack

- **Frontend:** React 19+ (Next.js) with Tailwind CSS
- **Backend:** Prisma, NeonDB, Inngest
- **Authentication and Profile Management:** Clerk
- **AI Integration:** Gemini API
- **UI Components:** Shadcn UI

---

## 📌 Development Roadmap

### ✅ **Project Setup**

1. **Setup Next.js and Shadcn UI** – Configure Next.js with Tailwind and install Shadcn components.
2. **App Layout** – Implement the base structure and layout.

### 🔐 **User Authentication**

3. **Integrate Clerk Authentication** – Secure user sign-in/sign-up.
4. **Custom Login/Sign-Up Page** – Design a seamless authentication UI.

### 💾 **Backend & Database Setup**

5. **Configure Prisma & NeonDB** – Setup database schema.
6. **Database Design & Models** – Store users, resumes, interview results, and insights.
7. **Store Users in DB** – Persist authentication details securely.

### 🌐 **Routing & Pages**

8. **Onboarding Page & APIs** – User onboarding with form validation.
9. **Landing Page** – Design a visually engaging introduction.
10. **Interview Preparation Page** – Create an AI-driven interview practice module.

### 🧠 **AI Features & APIs**

11. **Gemini AI Setup** – Connect with Gemini API for AI-powered insights.
12. **Industry Insights Generator** – Automate weekly industry insights.
13. **Resume Builder** – AI-driven resume generation & Markdown support.
14. **Cover Letter Generator** – Generate AI-powered cover letters.

### 📊 **Mock Interview & Performance Tracking**

15. **Mock Interview UI** – Interactive quiz-based interview simulation.
16. **Generate AI Interview Questions** – Dynamic questions tailored for users.
17. **Quiz Results & Performance Stats** – Track and analyze performance trends.

### 🔄 **Automation & Deployment**

18. **Cron Jobs for Weekly Insights (Inngest)** – Automate industry insights delivery.
19. **Deployment** – Deploy using Vercel.

---

## 🏗 Installation & Setup

### Prerequisites:

- Node.js (v18+)
- Yarn or npm
- NeonDB & Prisma setup
- Clerk API keys
- Gemini API key

### Steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/jobsensai.git
   cd jobsensai
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Set up environment variables:
   ```sh
   cp .env.example .env
   # Add API keys for Clerk, NeonDB, Gemini, etc.
   ```
4. Run the database migrations:
   ```sh
   npx prisma migrate dev --name init
   ```
5. Start the development server:
   ```sh
   npm run dev  # or yarn dev
   ```

---

## 📂 Project Structure

```
/jobsensai
│── public/               # Static assets
│── src/
│   ├── components/       # UI components
│   ├── pages/            # Next.js pages
│   ├── hooks/            # Custom hooks
│   ├── utils/            # Utility functions
│   ├── api/              # API integrations
│   ├── styles/           # Global styles (Tailwind)
│   ├── db/               # Prisma database setup
│── .env.example          # Environment variables example
│── next.config.js        # Next.js config
│── tailwind.config.js    # Tailwind config
│── package.json          # Dependencies
│── README.md             # Project documentation
```

---

## 🔥 Contributing

1. Fork the repository.
2. Create a new branch (`feature/new-feature`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to your branch (`git push origin feature/new-feature`).
5. Create a Pull Request.

---

## 🙌 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [Clerk Authentication](https://clerk.dev/)
- [Gemini API](https://ai.google.com/gemini/)
- [Inngest](https://www.inngest.com/)
- [Shadcn UI](https://ui.shadcn.com/)

---

📧 **Need Help?** Feel free to open an issue or reach out!

