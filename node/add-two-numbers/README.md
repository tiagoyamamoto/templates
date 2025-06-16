# ➕ Node.js Add Two Numbers Function

Adds two numbers and returns the result.

## 🧰 Usage

### GET / or POST /

Provide numbers `a` and `b` as query parameters or JSON body.

**Parameters**

| Name | Description   | Location      | Type   | Sample Value |
| ---- | ------------- | ------------- | ------ | ------------ |
| a    | First number  | Query or Body | Number | `2`          |
| b    | Second number | Query or Body | Number | `3`          |

**Response**

Sample `200` Response:

```json
{
  "sum": 5
}
```

## ⚙️ Configuration

| Setting           | Value         |
| ----------------- | ------------- |
| Runtime           | Node (18.0)   |
| Entrypoint        | `src/main.js` |
| Build Commands    | `npm install` |
| Permissions       | `any`         |
| Timeout (Seconds) | 15            |

## 🔒 Environment Variables

No environment variables required.
