AIRLALA-UI was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents
- [What is AIRLALA](#what-is-airlala)
- [Platform](#platform)
- [How to run AIRLALA-UI](#how-to-run-airlala-ui)
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

### <a name="database">DATABASE design</a>
AIRLALA Database uses FIREBASE, a key-value DATABASE. Every __table__ has primary key as a unique key.

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
|type|enum|`traveller\|artisan\|admin`|authorization in AIRLALA system|

`products`

|prop|type|Options|Role|
|--- |--- |--- |--- |
|artisanKey|String|`eg.` KkM5FaqJjyMgC1y4FBK|uniqueKey generated in user with `traveller` type|
|name|String|`eg.` Bamboo pen|product's name|
|description|Text|`eg.` Products are tailor-made, manufactured and designed in Vietnam|product's description|
|images|Firebase array|`{ key: value }`|list of product's images|
|sexes|String|`eg.` 'male,female,unisex'|sexes that products fits in|
|styles|String|`eg.` 'elegant,conventional,intellectual,fun,practical'|styles that product fits in|
|ages|String|`eg.` '16,60' |minAge,maxAge that product fits in|
|locations|String|`eg.` 'HCM, HN'|locations that product is able to be delivered to|
|occasions|String|`eg.` 'apology,flirt,thank you'|occasions that product fits in|
|relationships|String|`eg.` 'friend, partner'|relationships that product fits in|
|price|Decimal|`eg.` 10.2|Price in USD|

`requests`

|prop|type|Options|Role|
|--- |--- |--- |--- |
|userKey|String|`eg.` KkM5FaqJjyMgC1y4FBK|uniqueKey generated in user with `traveller` type|
|location|String|`eg.` HCM|location to deliver products|
|ages|String|`eg.` '18,24'|ageRange of receiver that you wanna find products to fit in|
|photoUrl|String|`eg.` https://avatars1.githubusercontent.com/u/11946183?v=3&s=460|any photo of receiver|
|name|String|`eg.` Hiep Tran|name of receiver|
|phone|String|`eg.` +8412322121 |phone of receiver|
|relationship|String|`eg.` Friend|your relationship with receiver|
|occasion|String|`eg.` Birthday|you want to gift by which occasion|
|sex|enum|`male\|female\|unisex`|receiver's sex|
|details|String||describle your receiver personality details|
|priceRange|String|`eg.` '20,50'|priceRange that you want to seek for gifts|
|interests|String|`eg.` 'technology, art'|receiver's interests|
|styles|String|`eg.` 'elegant,conventional,intellectual,fun,practical'|receiver's styles|
|products|Firebase array|{productKey: productKey}|list of seeked products returned by AI powered system|
|status|enum|`Looking for gift\|Gift's ready\|Ordered\|Shipping\|Delivered`|processing status of request|


`carts`

|prop|type|Options|Role|
|--- |--- |--- |--- |
|requestKey|String|`eg.` KkM5FaqJjyMgC1y4FBK|uniqueKey generated in a request|
|orders|Firebase array|`{ products: { productKey, price, quantity, status }, payment: {} }`|order created while user process checkout any products in his/her request|
|status|enum|`PreOrder\|Ordered\|Shipping\|Delivered`|processing status of the order|

#### Schema
![AIRLALA Schema](https://firebasestorage.googleapis.com/v0/b/airlala-7b1b2.appspot.com/o/Screen%20Shot%202017-07-04%20at%2000.44.15.png?alt=media&token=86e304dc-5211-48e1-864a-3cfcebd37a09)

### <a name="business-flow">Business Flow</a>
Scenarios:
- [x] Sign up(#signup-scenario)
- [x] Login(#login-scenario)
- [x] Edit profile(#edit-profile-scenario)
- [x] Profile(#profile-scenario)
- [x] Request gifts(#request-gifts-scenario)
- [x] View requests(#view-requests-scenario)
- [x] View request status(#view-request-status-scenario)
- [x] View gifts when request's gifts are ready(#view-gifts-scenario)
- [x] Checkout(#checkout-scenario)
- [x] Confirm order(#confirm-order-scenario)
- [x] Additional checkout(#additional-checkout-scenario)

**<a name="signup-scenario">SIGN UP</a>**

> Given I am a traveller  
> And I know about airlala.com  
> When I visit airlala homepage  
> Then I should be able to get started sign up with my phone number  
> Or I should be able to sign up with my Facebook/ Twitter account  

**<a name="login-scenario">LOGIN</a>**

> Given I am a traveller  
> And I just sign up with my phone number  
> Then I should receive 4-digits code to my phone via SMS from Twillo  
> Then I should be able to fill in 4-digits code to login  
> Then I should be redirected to Edit Profile page for the first time login  
> Or I should be redirect to Requests page  

> Given I am a traveller  
> And I just sign up with my Facebook/ Twitter account  
> Then I should be redirected to Edit Profile page for the first time login  
> Or I should be redirect to Requests page  

**<a name="edit-profile-scenario">EDIT PROFILE</a>**

> Given I logged in as traveller  
> And I am forward to Edit Profile page  
> Then I should be able to edit my information: email, password, firstName, lastName  
> When I save my information  
> Then I should be forward to Requests page  

**<a name="profile-scenario">PROFILE</a>**

> Given I logged in as traveller  
> And I am at profile page  
> Then I should view my current information  
> And I should be able to go to EDIT PROFILE page  
> And I should be able to go to TOS, FAQ,... page  

**<a name="view-requests-scenario">VIEW REQUESTS</a>**

> Given I logged in as traveller  
> And I am at Requests page  
> Then I should be able to view my requests  
> And I should be able to request gifts  
> When I request gift
> Then I should be forward to REQUEST page

**<a name="request-gifts-scenario">REQUEST GIFTS</a>**

> Given I logged in as traveller  
> And I just action request gifts in VIEW REQUESTS page  
> Then I should be forward to REQUEST page  
> Then I should see a lot of criteria to get the gifts recommendation: receiver's `name`, `age`, `sex`, `photo`, `phone`, `styles`, and `interests`; gift by `occasion`; `relationship` with receiver; `priceRange` of gifts; and even `details` about the gifts or occasion to gift  
> And after I choose/ fill in all of criteria  
> Then my request should be created and processed  
> And I only need to wait the recommendation  
> And I would be forwarded to VIEW REQUESTS page  

**<a name="view-request-status-scenario">VIEW REQUEST STATUS</a>**

> Given I logged in as traveller  
> And I am at VIEW REQUESTS page  
> Then I should be able to view my request status  
> When I click on REQUEST to view request status  
> Then I should be forwarded to REQUEST STATUS page  
> And I should see the information and status of my request: request gifts to whom, request is in `LOOKING`, `GIFTS READY`, `ORDERED`, `SHIPPING`, or `DELIVERED`  

**<a name="view-gifts-scenario">VIEW GIFTS WHEN REQUEST'S GIFTS ARE READY</a>**

> Given I requested gifts  
> And I am waiting for the recommendation  
> When the recommendation is ready  
> Then I should be notified that GIFTS ARE READY  
> Then I should be able to view the recommendation  
> When I click on `GIFTS ARE READY` REQUEST  
> Then I should be forwarded to PRODUCTS page  
> And I should see a list of products with images, description in details, and price  
> And I should be able to check them out directly  

**<a name="checkout-scenario">CHECKOUT</a>**

> Given I am at PRODUCT page  
> When I choose a product to check it out  
> Then I should see a cart with my items inside  
> And I should see the quantity and current price of each items along with total cost  
> Then I should see the CONFIRM ORDER action  

**<a name="confirm-order-scenario">CONFIRM ORDER</a>**

> Given I checked out some items  
> When I choose action CONFIRM ORDER  
> Then my order should be locked with quantity and price of each item in order IN AN AMOUNT OF TIME  
> And I should be fowarded to PAYMENT page to put in shipping address and choose kind of payment  
> When I fill in all of fields  
> Then my order should be created and processed   
> And I should be forward to REQUEST DETAILS page  

**<a name="additional-checkout-scenario">ADDITIONAL CHECKOUT</a>**

> Given I finished ordering items  
> And I have desire to order more items from old recommendation  
> When I am at VIEW REQUESTS page  
> Then I should be able to VIEW PRODUCTS of any request  
> And I can make other checkouts and confirmation  
