## Personal Finance Management System

**Project for Study and Portfolio Purposes**  
This personal finance management system is developed for study purposes during the Full Stack Week and is intended to be part of a portfolio for showcasing skills in Next.js, PostgreSQL, Stripe, and OpenAI integrations.

---

A personal finance management system where users can track their income and expenses. The system includes a login system via [Clerk](https://clerk.com/), data storage in a PostgreSQL database, integration with the [Stripe](https://stripe.com/br) payment service for subscription management, and an AI-powered feature to generate monthly financial reports for Premium users via the [OpenAI Developer Platform](https://platform.openai.com/docs/overview).

## Features

- **User Authentication**: Login via [Clerk](https://clerk.com/).
- **Income & Expense Tracking**: Manage and record personal income and expenses.
- **Subscription Model**: Subscription payment handled via [Stripe](https://stripe.com/br).
  - **Free Version**: Basic finance tracking features. There is a limit of 10 transactions per day.
  - **Premium Version**: Additional feature to generate monthly financial reports powered by AI. Unlimited transactions.
- **AI Reports**: Premium users can generate monthly financial reports using the [OpenAI API](https://platform.openai.com/docs/overview).
- **Database**: Data stored in a PostgreSQL database for secure and persistent storage.

## Integrations

1. **Clerk** for user authentication.
2. **Stripe** for subscription management (payment and billing).
3. **OpenAI Developer Platform** for AI-powered financial report generation.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

To get started with the project, follow these steps:

### 1. Install dependencies

Install the required dependencies:

```bash
npm install
```

### 2. Environment Variables Setup

Before running the project locally, you need to set up some environment variables. Follow the steps below:

1. **Create a `.env` file**:
   Copy the `.env.sample` file to `.env`:

   ```bash
   cp .env.sample .env
   ```

1. **Obtain the API keys**:

   - **Clerk**: Create an account at [Clerk](https://clerk.com/) and obtain your API key.
   - **Stripe**: Create an account at [Stripe](https://stripe.com) and obtain your secret API key.
   - **OpenAI**: Create an account at [OpenAI](https://platform.openai.com) and obtain your API key.

1. **Set the environment variables** in the `.env` file with the keys you obtained.

### 3. Set up Stripe

Install the [Stripe CLI](https://docs.stripe.com/stripe-cli?install-method=windows) if you haven't already.

Log in to Stripe:

```bash
stripe login --api-key <your-secret-key>
```

Create a webhook to listen for Stripe events:

```bash
stripe listen --forward-to http://localhost:3000/api/webhooks/stripe
```

Copy the generated key to the environment variable `STRIPE_WEBHOOK_SECRET`

### 4. Set up the PostgreSQL database

Ensure that you have PostgreSQL installed and running.
You can use Docker to easily run PostgreSQL if necessary.
Configure the database connection in your `.env` file.

Start docker with PostgreSQL

```bash
docker compose up -d
```

Run Prisma migrations to set up your database:

```bash
npx prisma migrate dev
```

### 5. Run the development server

Now, you can start the development server:

```bash
npm run dev
```

### 6. Open the app

Now, open the app in your browser at [http://localhost:3000](http://localhost:3000).

---

## Premium Subscription

This system offers a **Premium Version** that includes additional features such as **monthly financial reports powered by AI**. To access this feature, you need to subscribe via Stripe.

- Users who subscribe to the **Premium Version** can generate monthly financial reports using the [OpenAI API](https://platform.openai.com/docs/overview) and unlimited transactions.

## Learn More

To learn more about how this project works, or if you wish to contribute, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Prisma Documentation](https://www.prisma.io/docs) - Documentation for Prisma ORM (used for database interactions).
- [Stripe Documentation](https://stripe.com/docs) - Stripe's documentation for managing payments and subscriptions.
- [OpenAI Documentation](https://platform.openai.com/docs/overview) - Learn more about the API used for generating financial reports.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - Your feedback and contributions are welcome!

---

## Deploy on Vercel

To deploy the app, you can use the [Vercel platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
