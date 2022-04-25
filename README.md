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

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



<!-- <SearchContext.Provider value={{cte}}>
      <div className="relative space-y-6 md:mb-12">
        <h1 className="text-center text-5xl">How can we Help?</h1>
        {isSmall ? (
          <div className="">
            <div className="flex h-16 items-center rounded bg-white md:w-[30rem] lg:w-[40rem]">
              {/* <SearchIcon className="ml-2 w-14 text-gray-400" /> */}
              <input
                type="text"
                placeholder="Search for a specific topic here..."
                className="w-80 px-2 font-poppins outline-none"
                onChange={getSearchedValue}
                // onKeyUp={}
              />
              <div className="flex h-10 w-1/2 justify-end">
                <button className="mr-2 rounded-md bg-blue-500 px-10 font-poppins text-white">
                  Search
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-16 w-[25rem]  items-center rounded bg-white md:h-16 md:w-[40rem]">
            {/* <SearchIcon className="ml-2 w-14 text-gray-400" /> */}
            <input
              type="text"
              placeholder="Search for a specific topic here..."
              className="w-80 px-2 py-4 font-poppins outline-none"
            />
          </div>
        )}
        {hidden && <DropList />}
      </div>
      </SearchContext.Provider> -->