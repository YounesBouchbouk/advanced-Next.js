This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Topics Covered

- Server Actions / Mutations
- Form actions
- Form hooks
- Transition hooks
- Middleware
- Auth protection
- Server Components data fetching
- Caching Server Components data
- Memoizing Server side data calls
- Cache revalidation
- Streaming and Suspense
- Error Handling
- Parallel routing
- Rout matching
- … and much more


## Learn More

### **Step 1: Set Up Turso Database**

1. **Create a [Turso Account](https://turso.tech/)**: Sign up and create a new account on Turso if you haven't done so already.
2. **Obtain Database URL and Auth Token**:
    - Navigate to the Turso dashboard.
    - Set up a new database instance and retrieve the database URL and the authorization token.

### **Step 3: Configure Environment**

Create a **`.env`** file in the root directory of your cloned repository. Add the following lines to the file:

```bash
TURSO_CONNECTION_URL=""
TURSO_AUTH_TOKEN=""
```

Add your Turso URL and Auth token here.

### **Step 2: Initialize the Database**

Run the following command in your terminal to push the initial schema to your Turso database:

```bash
npm run db:push
```

This step ensures that your local development environment is synchronized with your database schema, setting the stage for development.


