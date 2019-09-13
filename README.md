# kingoloto-client

[![Greenkeeper badge](https://badges.greenkeeper.io/rem42/kingoloto-client.svg)](https://greenkeeper.io/)

A client for kingoloto using node

## Installation 
```sh
npm install kingoloto-client --save
```
## Usage
### TypeScript
```typescript
import {Credentials} from "bananalotto-client";
import {KingolotoClient} from "kingoloto-client";

const credential = new Credentials();
credential.email = 'email@email.com';
credential.password = 'password';

KingolotoClient.init(credential)
.then((client: KingolotoClient) => {
    // code
});
```
