# kingoloto-client

[![Greenkeeper badge](https://badges.greenkeeper.io/rem42/kingoloto-client.svg)](https://greenkeeper.io/)

A client for kingoloto using node

[![npm](https://img.shields.io/npm/v/kingoloto-client.svg)](https://www.npmjs.com/package/kingoloto-client)
[![npm](https://img.shields.io/npm/dt/kingoloto-client.svg)](https://www.npmjs.com/package/kingoloto-client)
[![install size](https://packagephobia.now.sh/badge?p=kingoloto-client)](https://packagephobia.now.sh/result?p=kingoloto-client)
[![Greenkeeper badge](https://badges.greenkeeper.io/rem42/kingoloto-client.svg)](https://greenkeeper.io/)

## Installation 
```sh
npm install kingoloto-client --save
```
## Usage
### TypeScript

```typescript
import {Kingoloto} from "kingoloto-client";

Kingoloto.init('email@email.com', 'password')
.then((client: Kingoloto) => {
    // code
});
```
