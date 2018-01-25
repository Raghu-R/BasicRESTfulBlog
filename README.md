To set up this blog
 1. Install Node.js
 2. Clone the repository
 3. Run npm start


Example usage:
1. Get posts
   curl "http://localhost:3000/posts"
2. Post data 
   curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": ""}' "http://localhost:3000/posts"
3. Update data
   curl -H 'Content-Type: application/json' -X PUT -d '{"name": "Top 10 ES6 Features Every Developer Must Know", "url":"http://webapplog.com/es6", "text": ""}' "http://localhost:3000/posts/0"
4. Delete data
   curl -X DELETE "http://localhost:3000/posts/0"