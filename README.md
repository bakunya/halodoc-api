# [halodoc](https://halodoc.com) api
Unofficial API and Web Scraping from halodoc.com


## Support creator & developer
Treat me a cup of coffee [in here](https://trakteer.id/bakunya/tip)

## Terms of Service
### This software is only used for educational.
### Any responsibility beyond the responsibility of the developer.

## Pre-request

#### 1. [Node.js](https://nodejs.org/) has installed on your machine
#### 2. [NPM](https://npmjs.com/) has installed on your machine

## Installation

Use the package manager [npm](https://npmjs.com/) to install dependencies.

```bash
npm install
```

## Usage

```bash
npm start
```

server will running on port 3000

## Routing
#### GET /articles-trending
Get list of articles
```url
GET /articles-trending
```

#### GET /articles/page/:count
Get list of articles
```url
GET /articles/page/1
```
#### GET /article-content/:slug/:external_id
Get article content
```url
GET /article-content/ini-10-makanan-sumber-vitamin-d-bantu-cegah-osteoporosis/a338dbd3-75c0-4051-a550-e4366a4e26fa
```

#### GET /article/similar/:external_id
Get similar article
```url
GET /article/similar/a338dbd3-75c0-4051-a550-e4366a4e26fa
```

#### GET /medicine/categories
Get list of medicine categories
```url
GET /medicine/categories
```

#### GET /medicine/categories/:slug/page/:count
Get detail category of medicine
```url
GET /medicine/categories/produk-susu/page/1
```

#### GET /medicine/detail/:slug
Get medicine product
```url
GET /medicine/detail/nutrilon-royal-3-madu-susu-pertumbuhan-bubuk-400-gr
```

#### GET /medicine/similar/:slug
Get similar product of medicine product
```url
GET /medicine/similar/nutrilon-royal-3-madu-susu-pertumbuhan-bubuk-400-gr
```
####  GET /doctor/specialities
Get location suggestion
Max count is 500
```url
PUT /doctor/specialities/:count/
```

#### GET /doctor/:slug
Get doctor profile
```url
GET /doctor/dr-andry-ganesha-rombe
```

#### GET /hospital/:slug
Get hospital profile
```url
GET /hospital/rsup-dr-sardjito
```

####  GET /hospital/departments/:slug
Get hospital departments
```url
GET /hospital/departments/rsup-dr-sardjito
```

####  PUT /doctor/search
Get location suggestion
```url
PUT /doctor/search
```
```js
{
  region: "jakarta",
  speciality: "" // Value must be from slug of /doctor/specialities request,
  page: 1
}
```

####  PUT /hospital/locations-sugestion
Get location suggestion
```url
PUT /hospital/locations-sugestion
```
```js
{
  search: "jakarta"
}
```

#### PUT /hospital/location
Get hospital location
```url
PUT /hospital/location
```
```js
{
  district: "" // "Value must be from name of district key from /hospital/locations-sugestion response",
  region: "" // "Value must be from name of region key from /hospital/locations-sugestion response",
  city: "" // "Value must be from name of city key from /hospital/locations-sugestion response",
  search: "jakarta"
}
```

## Source
[halodoc.com](https://halodoc.com)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)