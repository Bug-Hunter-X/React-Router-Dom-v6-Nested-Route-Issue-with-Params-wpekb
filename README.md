# React Router Dom v6 Nested Route Issue with Params

This repository demonstrates a bug in React Router Dom v6 where nested routes within a parent route using URL parameters fail to render correctly.  The issue arises when trying to nest routes under a route that uses parameters in its path. 

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Navigate to `/users/1`. You'll see the User component, but any nested routes will not render.

## Solution

The solution involves using the `useParams` hook correctly within the parent component and ensuring the nested routes' paths are relative to the parent route.

## Additional Notes

This issue highlights the importance of carefully structuring routes when using parameters in React Router Dom v6.  Always make sure your nested routes are properly defined relative to their parent routes.  Incorrect usage can lead to unexpected route matching behaviors. 