
# 📚 API Documentation

## Base URL
```
http://localhost:5000/api/books
```

---

### 1. ➕ Create a Book  
**POST** `/api/books`

**Sample Request:**
```bash
curl -X POST http://localhost:5000/api/books \
-H "Content-Type: application/json" \
-d '{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "genre": "Fiction",
  "publishedYear": 1988
}'
```

**Sample Response:**
```json
{
  "_id": "664fe65ee7a58f740c524cf9",
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "genre": "Fiction",
  "publishedYear": 1988
}
```

---

### 2. 📖 Get All Books  
**GET** `/api/books`

**Sample Request:**
```bash
curl http://localhost:5000/api/books
```

**Sample Response:**
```json
[
  {
    "_id": "664fe65ee7a58f740c524cf9",
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "genre": "Fiction",
    "publishedYear": 1988
  }
]
```

---

### 3. ✏️ Update a Book  
**PUT** `/api/books/:id`

**Sample Request:**
```bash
curl -X PUT http://localhost:5000/api/books/664fe65ee7a58f740c524cf9 \
-H "Content-Type: application/json" \
-d '{
  "title": "The Alchemist (Updated)",
  "author": "Paulo Coelho",
  "genre": "Spiritual Fiction",
  "publishedYear": 1989
}'
```

**Sample Response:**
```json
{
  "_id": "664fe65ee7a58f740c524cf9",
  "title": "The Alchemist (Updated)",
  "author": "Paulo Coelho",
  "genre": "Spiritual Fiction",
  "publishedYear": 1989
}
```

---

### 4. ❌ Delete a Book  
**DELETE** `/api/books/:id`

**Sample Request:**
```bash
curl -X DELETE http://localhost:5000/api/books/664fe65ee7a58f740c524cf9
```

**Sample Response:**
```json
{
  "message": "Book deleted successfully"
}
```
