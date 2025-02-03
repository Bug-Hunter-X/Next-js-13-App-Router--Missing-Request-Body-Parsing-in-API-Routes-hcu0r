# Next.js 13 App Router: Missing Request Body Parsing in API Routes

This repository demonstrates a common error in Next.js 13's App Router when handling API routes.  Specifically, the issue is that `req.body` is not automatically parsed.  This example shows the problem and provides a solution using `next/server`'s middleware.

## Problem

When using the App Router, API routes do not automatically parse the request body.  Attempting to access `req.body` directly will result in an undefined value unless you implement appropriate middleware.

## Solution

The provided solution uses `next/server`'s middleware to parse the JSON body before it reaches your API route handler.