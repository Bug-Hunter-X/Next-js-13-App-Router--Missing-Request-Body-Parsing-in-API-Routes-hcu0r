```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // Some logic that might throw an error
  if (req.method === 'POST') {
    if (!req.body.name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    // ... other logic ...
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
```
This API route uses the `req.body` which is not parsed automatically with the Next.js 13's App Router. This can cause errors if you're not correctly parsing the body.