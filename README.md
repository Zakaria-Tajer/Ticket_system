This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Backend with Laravel

You can start by navigating to `ticket_project/backend`

```bash
php artisan serve
```

## Folder structure

![Alt text](<public/Screenshot%20(52).png>)

## API endpoints

## Post

```bash
For registration /register
For Login /login
```

## Protected Routes with Sanctum

## GET

```bash
GET All client details /user
GET All Categories /getCategories
GET All client tickets /allTickets
GET All client closed tickets /closedTicket
```

## POST

```bash
Search for a category /search
Create a category /Create
Create a ticket /createTicket

GET All tickets /Tickets
Delete a ticket /DeleteTicket
Close a ticket /ClosingTickets
GET client unique_id /getUniqueIds
Respond to client tickets /Respond
GET answered tickets /TicketsAnswerd

```
