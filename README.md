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

## Register and login

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `POST`    | `/api/register`                         | Client register.                         |
| `POST`    | `/api/login`                            | Client Login.                            |

## Protected Routes with Sanctum

## GET

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `/api/user`                              | Retrieve all user data.                  |
| `GET`    | `/api/getCategories`                     | Retrieve all categories.                 |
| `GET`    | `/api/allTickets`                        | Retrieve all client tickets.             |
| `GET`    | `/api/closedTicket`                      | Retrieve all client closed tickets.      |


## POST

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `POST`    | `/api/search`                           | Search for a category.                   |
| `POST`    | `/api/Create`                           | Create a category.                       |
| `POST`    | `/api/Tickets`                          | Retrieve all client tickets.             |
| `POST`    | `/api/DeleteTicket`                     | Delete a ticket.                         |
| `POST`    | `/api/ClosingTickets`                   | Retrieve all client closed tickets.      |
| `POST`    | `/api/getUniqueIds`                     | Retrieve all client unique id.           |
| `POST`    | `/api/Respond`                          | Respond to a client ticket.              |
| `POST`    | `/api/TicketsAnswerd`                   | Retrieve all client answered unique id.  |



