This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.





/////

To actually capture leads, you need a backend service. Since you are using Next.js and deploying to Vercel, here are
  the best options:

   1. Formspree / Web3Forms (Easiest):
       * No backend code needed.
       * You just change the <form> action URL or send a simple POST request.
       * They handle email delivery to you.

   2. EmailJS:
       * Sends emails directly from the client-side (browser) using your Gmail/Outlook.
       * Good for small portfolios.

   3. Next.js Server Action + Database (Professional):
       * We write a server function to save the data to a database (like MongoDB or Postgres) or send an email using
         Resend/SendGrid.

  Which approach would you like to implement?
   * Option 1 (Formspree): Quickest. I'll just update the onSubmit to call their API.
   * Option 3 (Server Action + Resend): Best for a "Backend Engineer" portfolio. We create a real API route that sends
     you an email. (Requires a free Resend.com API key).