just go to https://www.burnerblock.pro/
sign up with your email & password or google account
and you'll get free 1000 credits 
generate your api key and copy the api key (you can't view it again)

use the api key to send a post request to 

https://api.burnerblock.pro/api/v1/verify

```curl
curl --location 'https://api.burnerblock.pro/api/v1/verify' \
--header 'x-api-key: your_api_key' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "hello234@anonaddy.me"
}'
```

```nodejs
const axios = require('axios');
let data = JSON.stringify({
  "email": "hello234@anonaddy.me"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.burnerblock.pro/api/v1/verify',
  headers: { 
    'x-api-key': 'your_api_key', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

```python
import requests
import json

url = "https://api.burnerblock.pro/api/v1/verify"

payload = json.dumps({
  "email": "hello234@anonaddy.me"
})
headers = {
  'x-api-key': 'your_api_key',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
```