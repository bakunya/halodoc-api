# [halodoc](https://halodoc.com) api

Unofficial API and Web Scraping from halodoc.com

## pre-request

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
#### 1. GET localhost:3000/articles/page/:count
Get list of articles
```url
GET localhost:3000/articles/page/1
```
#### 2. GET /article-content/:slug/:external_id
Get article content
```url
GET localhost:3000/article-content/ini-10-makanan-sumber-vitamin-d-bantu-cegah-osteoporosis/a338dbd3-75c0-4051-a550-e4366a4e26fa
```

#### 3. GET localhost:3000/article/similar/:external_id
Get similar article
```url
GET localhost:3000/article/similar/a338dbd3-75c0-4051-a550-e4366a4e26fa
```
#### 4. GET localhost:3000/medicine/categories
Get list of medicine categories
```url
GET localhost:3000/medicine/categories
```
#### 5. GET localhost:3000/medicine/categories/:slug/page/:count
Get detail category of medicine
```url
GET localhost:3000/medicine/categories/produk-susu/page/1
```
#### 6. GET /medicine/detail/:slug
Get medicine product
```url
GET localhost:3000/medicine/detail/nutrilon-royal-3-madu-susu-pertumbuhan-bubuk-400-gr
```
#### 7. GET localhost:3000/medicine/similar/:slug
Get similar product of medicine product
```url
GET localhost:3000/medicine/similar/nutrilon-royal-3-madu-susu-pertumbuhan-bubuk-400-gr
```
#### 8. GET localhost:3000/doctor/:slug
Get doctor profile
```url
GET localhost:3000/doctor/dr-andry-ganesha-rombe
```
#### 9. GET localhost:3000/hospital/:slug
Get hospital profile
```url
GET localhost:3000/hospital/rsup-dr-sardjito
```
#### 10. GET localhost:3000/hospital/departements/:slug
Get hospital departements
```url
GET localhost:3000/hospital/departements/rsup-dr-sardjito
```
#### 11. PUT localhost:3000/hospital/locations-sugestion
Get location suggestion
```url
PUT localhost:3000/hospital/locations-sugestion
```
```json
{
  search: "jakarta"
}
```
#### 12. PUT localhost:3000/hospital/location
Get hospital location
```url
PUT localhost:3000/hospital/location
```
```json
{
  district: "value_must_be_get_from_localhost:3000/hospital/location_on_key_district",
  region: "value_must_be_get_from_localhost:3000/hospital/location_on_key_region",
  city: "value_must_be_get_from_localhost:3000/hospital/location_on_key_city",
  search: "jakarta"
}
```

## Source
[halodoc.com](https://halodoc.com)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/) \
Any responsibility beyond the responsibility of the developer.
