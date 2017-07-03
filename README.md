AIRLALA-UI was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents
- [What is AIRLALA](#what-is-airlala)
- [Platform](#platform)
- [How to run AIRLALA-UI](#how-to-run-airlala-ui)
- [Build AIRLALA from scratch](#build-airlala-from-scratch)
- [DATABASE design](#database)
- [Business flow](#business-flow)
- [Development Team](#development-team)
  - [Hiep Tran](https://github.com/kaeljune)
  - [Thinh Bui](https://github.com/bdthinh)
  - [Tan Dao](https://github.com/daoduytan)

## Contents

### <a name="what-is-airlala">What is AIRLALA</a>
**AirLala.com** is a machine learning powered marketplace to help matchmake international buyers (travellers and small business owners) to local artisans and micro-SMEs effectively and efficiently. In fact, if business owners or travellers (from North America or Europe) come to Asia to source local products, especially handmade products, they will face a huge problem due to languages barriers, logistical problems, and time consuming. AirLala.com make the sourcing local products become transparent, accessible, and affordable.

Innnovativeness:
  - In frontier and emerging markets, local artisans and micro-SMEs lack of technical expertise, strategic partners, and funding to make their business sustainable and scalable. By leveraging machine learning, AirLala can help local artisans and micro-SMEs to reach the right customers with the most affordable budget. 
  - AirLala can help local artisans and micro-SMEs to build their credit history, which will be useful in the long-term. (They can use this credit history to present to traditional financial institutions, potential investors, or online crowd-funding to raise capitals)

Business model: AirLala makes money by charging a percentage-based service fee to international buyers who purchase products on the platform, while also taking a commission from local artisans and micro-SMEs when their products are sold.

### <a name="platform">Platform</a>
AirLaLa would be built in web and mobile platform with micro-services architecture.
  - Authentication: Firebase
  - Database: Firebase (key-value database)
  - Backend: Cloud functions with Firebase (JS)
  - Frontend: ReactJS in redux ecosystem enhanced with ReactiveX
  - Mobile: React Native
  - Design: Adobe DX
This repository contains AIRLALA frontend source code which belongs to AIRLALA team.

### <a name="how-to-run-airlala-ui">How to run AIRLALA-UI</a>
AIRLALA-UI is created by `create-react-app` and packages managed with `yarn`.
```js
yarn
yarn start
```

### <a name="build-airlala-from-scratch">Build AIRLALA from scratch</a>
...in construction

### <a name="database">DATABASE design</a>
In Airlala, `users` and `products` are the core components.

`users`

|prop|type|Options|Role|
|--- |--- |--- |--- |
|email|String|`eg.` example@mail.com|user's email required to input after login successfully|
|phone|String|`eg.` +84123456789|user phone number used to register AIRLALA|
|firstName|String|`eg.` Thinh|user's firstName required to input after login successfully|
|lastName|String|`eg.` Bui|user's lastName required to input after login successfully|
|code|String|`eg.` '9681'|code returned from Twillo 3rd party used to verify phone number|
|codeValid|boolean|`true \| false`|as the code is OTP, codeValid tells system the code is yet valid or not|
|logoUrl|String|`eg.` https://avatars2.githubusercontent.com/u/4838237?v=3&s=96|local Artisan business logo URL|
|avatarUrl|String|`eg.` https://avatars2.githubusercontent.com/u/4838237?v=3&s=96|user avatar URL|
|description|Text|`eg.` AirLala can help local artisans and micro-SMEs to build their credit history,...|Tell us about yourself or your business if you're artisan|
|nationality|String|`eg.` Vietnam|user nationality|
|type|enum|`user\|artisan\|admin`|authorization in AIRLALA system|
