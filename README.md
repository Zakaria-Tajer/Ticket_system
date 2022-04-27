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

| Method | URL             | Description      |
| ------ | --------------- | ---------------- |
| `POST` | `/api/register` | Client register. |
| `POST` | `/api/login`    | Client Login.    |

## Protected Routes with Sanctum

## GET

| Method | URL                  | Description                         |
| ------ | -------------------- | ----------------------------------- |
| `GET`  | `/api/user`          | Retrieve all user data.             |
| `GET`  | `/api/getCategories` | Retrieve all categories.            |
| `GET`  | `/api/allTickets`    | Retrieve all client tickets.        |
| `GET`  | `/api/closedTicket`  | Retrieve all client closed tickets. |

## POST

| Method | URL                   | Description                             |
| ------ | --------------------- | --------------------------------------- |
| `POST` | `/api/search`         | Search for a category.                  |
| `POST` | `/api/Create`         | Create a category.                      |
| `POST` | `/api/Tickets`        | Retrieve all client tickets.            |
| `POST` | `/api/DeleteTicket`   | Delete a ticket.                        |
| `POST` | `/api/ClosingTickets` | Retrieve all client closed tickets.     |
| `POST` | `/api/getUniqueIds`   | Retrieve all client unique id.          |
| `POST` | `/api/Respond`        | Respond to a client ticket.             |
| `POST` | `/api/TicketsAnswerd` | Retrieve all client answered unique id. |

## Headers

| Header key     |                         Description                             |
| ------         | ---------------------------------------------------------------- |
| `Accept`       | This header is required by all endpoints. It’s used to identify the request as our own and for versioning our endpoints. Default value: application/vnd.nodes.v1+json.|
| `Authorization`| The authorized user’s token. This is used to gain access to protected endpoint.|





## Examples

Just to round it all off, here’s a few examples of how our response will return

#### A user data

```
{
	"id": 2,
	"username": "jhon",
	"email": "k@jhon.com",
	"password": "$2y$10$i1h8UbjBmpK87e9ZSH4UueSmhQpHOnnqZVrl2ww2uQAOMfnXSLneS",
	"passwordConfirmation": "$2y$10$Z63ZpfhV7\/NfU50aUmp.mupfBHrt132aFKYl363Y1JNVJspiinRqO",
	"created_at": "2022-04-26T23:43:39.000000Z",
	"updated_at": "2022-04-26T23:43:39.000000Z",
	"role": "client_User"
}

```

#### All client tickets

```
[
	{
		"id": 1,
		"uniques_id": "826ac4a437",
		"Ticket_Title": "jdejdijeiidjiejdijeijd",
		"ticket_text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet, sem id semper cursus, dolor velit volutpat est, a faucibus massa nisi maximus tortor. Sed eu consectetur risus",
		"category": "Hardware",
		"status": "closed",
		"clients_id": 2,
		"created_at": "2022-04-27T00:01:44.000000Z",
		"updated_at": "2022-04-27T00:01:44.000000Z"
	},
	{
		"id": 2,
		"uniques_id": "8ec863e2ba",
		"Ticket_Title": "here",
		"ticket_text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet, sem id semper cursus, dolor velit volutpat est, a faucibus massa nisi maximus tortor. Sed eu consectetur risus,",
		"category": "Software",
		"status": "unknown",
		"clients_id": 2,
		"created_at": "2022-04-27T10:43:28.000000Z",
		"updated_at": "2022-04-27T10:43:28.000000Z"
	},
	{
		"id": 3,
		"uniques_id": "72acfc9d89",
		"Ticket_Title": "services",
		"ticket_text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet, sem id semper cursus, dolor velit volutpat est, a faucibus massa nisi maximus tortor. Sed eu consectetur risus,",
		"category": "Service Request",
		"status": "not yet solved",
		"clients_id": 3,
		"created_at": "2022-04-27T11:16:36.000000Z",
		"updated_at": "2022-04-27T11:16:36.000000Z"
	}
]

```

#### All Categories

```
[
	{
		"category": "Software"
	},
	{
		"category": "Hardware"
	},
	{
		"category": "General Problem"
	},
	{
		"category": "Product Problem"
	},
	{
		"category": "Incidents"
	}
]

```

