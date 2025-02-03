```javascript
// app/api/hello/route.js
import { NextResponse } from 'next/server'

export async function POST(req) {
  const { name } = await req.json()

  if (!name) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  }

  // ... other logic ...
  return NextResponse.json({ message: `Hello ${name}` })
}
```
The solution uses `next/server`'s `NextResponse` to directly respond and `req.json()` to parse the body.  This eliminates the need for external middleware.