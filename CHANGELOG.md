# Changelog

## [12.0.0](https://github.com/MailOnline/google-ad-manager-api/compare/google-ad-manager-api-v11.1.0...google-ad-manager-api-v12.0.0) (2026-03-25)


### ⚠ BREAKING CHANGES

* dropping support for node@20
* **state:** Removed version v202408
* **state:** Removed versions v202402,v202405
* **state:** Removed version v202311
* **state:** Removed version v202308
* **state:** Removed version v202305
* Replaced the requirement of JWT config with a custom autorization method.
* **state:** Removed version v202302
* iterate() will use paginate under the hood and inherit it's options.
* **state:** Removed version v202211
* When importing the library, you don't import a version. Just the API.

### Features

* add function to download report ([aeef998](https://github.com/MailOnline/google-ad-manager-api/commit/aeef9983fb8d6ecd60c86e52c6219fe67f8e28d2))
* add iterate method ([4e72222](https://github.com/MailOnline/google-ad-manager-api/commit/4e722229c0581ff84f785d8f99f9d8ffb2498007))
* add new getbystatement function ([6354493](https://github.com/MailOnline/google-ad-manager-api/commit/63544930696f34327e136ae79a9ef6813d81b825))
* add query function ([5725c10](https://github.com/MailOnline/google-ad-manager-api/commit/5725c10008d71630c2f575168427c7dacbfc878a))
* allow any kind of google authentication ([34216b4](https://github.com/MailOnline/google-ad-manager-api/commit/34216b417656802831dd56f9baca6110f1df1b7e)), closes [#299](https://github.com/MailOnline/google-ad-manager-api/issues/299)
* basic value api ([af7f31c](https://github.com/MailOnline/google-ad-manager-api/commit/af7f31cb58cab4b2e812edb01519c10f37a46e4c))
* export all enums in service namespaces ([7d2c2f6](https://github.com/MailOnline/google-ad-manager-api/commit/7d2c2f610603234c0a33305fe3d59653dd434f26))
* export enumerable strings as enums ([fa44b23](https://github.com/MailOnline/google-ad-manager-api/commit/fa44b238d74e2932fb815286656d78a40e54a4e2))
* export the new runreport functions ([2f4e9fb](https://github.com/MailOnline/google-ad-manager-api/commit/2f4e9fb5941f01ecd68df9b3cfb936d3f0243feb))
* option to expose value type ([8472298](https://github.com/MailOnline/google-ad-manager-api/commit/847229897397fa1c5fe4964f0461e1210c2bfdc2))
* paginate to receive pages of items ([0bfb6b2](https://github.com/MailOnline/google-ad-manager-api/commit/0bfb6b29f9fa4914d0f544083a32c94501153777))
* **paginate:** ability to use query return type ([e54ea5b](https://github.com/MailOnline/google-ad-manager-api/commit/e54ea5baa6b7e11cadb7286ad13d8c25dde4f7f9))
* **report:** add status check interval ([b411d66](https://github.com/MailOnline/google-ad-manager-api/commit/b411d66a2f63fd97dce754097a36d9761806d0b7))
* **state:** update ([4029587](https://github.com/MailOnline/google-ad-manager-api/commit/402958781055033cea1af1d7cf7a4c365e4450d0))
* **state:** update ([f6c00ea](https://github.com/MailOnline/google-ad-manager-api/commit/f6c00ea8d45b2d9e012a3caea4a21e088c87b6d8))
* **state:** update gam api ([a548d14](https://github.com/MailOnline/google-ad-manager-api/commit/a548d1499db623f0fc52569ecf097d69a2ccf886))
* **state:** update gam api ([454cf8c](https://github.com/MailOnline/google-ad-manager-api/commit/454cf8ccfe0dc0055c866293cacdb49ab319334a))
* **state:** update gam api ([79636f1](https://github.com/MailOnline/google-ad-manager-api/commit/79636f1118898951d4c337e960b3ce8ac3a8afb8))
* **state:** update gam api ([20034db](https://github.com/MailOnline/google-ad-manager-api/commit/20034db8ba7e577cf1a0ce719deff3dff0e27a07))
* **state:** update gam api ([159184c](https://github.com/MailOnline/google-ad-manager-api/commit/159184c0f18fb2328302148abe0c370f8750de92))
* **state:** update gam api ([b9194f5](https://github.com/MailOnline/google-ad-manager-api/commit/b9194f54e5689cf91faa41381e0e12b18e1c1502))
* **state:** update gam api ([ff5aea9](https://github.com/MailOnline/google-ad-manager-api/commit/ff5aea9cc9efa0872358d1cc500a1dad3c476996))
* **state:** update gam api ([728f4fd](https://github.com/MailOnline/google-ad-manager-api/commit/728f4fd717714a1c0f440d098ad5e12b425c461f))
* **state:** update gam api  ([67250e9](https://github.com/MailOnline/google-ad-manager-api/commit/67250e9128ba5fdd9659895a6c418ab96a8e3861))
* typed enums ([650280a](https://github.com/MailOnline/google-ad-manager-api/commit/650280a89b0c4f174dda267ef7493e07d5100be0))


### Bug Fixes

* allow higher versions of google-auth-library ([3736420](https://github.com/MailOnline/google-ad-manager-api/commit/373642003ed635b6349c7ff56a3d6688fb2ded36))
* credentials typing ([535aff5](https://github.com/MailOnline/google-ad-manager-api/commit/535aff5faa7e35a1f0f0caf3e3f5dcf44f13517e))
* **deps:** update dependency assert-never to v1.3.0 ([ab52681](https://github.com/MailOnline/google-ad-manager-api/commit/ab526812c9aedd4b20cf6aec20f96a07235c61d6))
* **deps:** update dependency google-auth-library to v9.10.0 ([798ea67](https://github.com/MailOnline/google-ad-manager-api/commit/798ea6700994fd00aed8eb705fdcbcf6773ebc9e))
* **deps:** update dependency google-auth-library to v9.11.0 ([2c43bfe](https://github.com/MailOnline/google-ad-manager-api/commit/2c43bfefb5b4bf0b26607e656bdd6a63c5e6e82d))
* **deps:** update dependency google-auth-library to v9.12.0 ([547979e](https://github.com/MailOnline/google-ad-manager-api/commit/547979ec1080da36318a8b8488c1a8a7a5864646))
* **deps:** update dependency google-auth-library to v9.13.0 ([7799437](https://github.com/MailOnline/google-ad-manager-api/commit/7799437d7d9e269936fbab4b7fa015db6913a95e))
* **deps:** update dependency google-auth-library to v9.14.0 ([61b671c](https://github.com/MailOnline/google-ad-manager-api/commit/61b671c2381990450b2350413403ffd4c565e3cf))
* **deps:** update dependency google-auth-library to v9.14.1 ([08e7d36](https://github.com/MailOnline/google-ad-manager-api/commit/08e7d3692f72f21c40ecf9f5e55085849a16a94b))
* **deps:** update dependency google-auth-library to v9.2.0 ([e79d7a6](https://github.com/MailOnline/google-ad-manager-api/commit/e79d7a6aceb9378cbd2e683d2aee0b2f9ac5cd16))
* **deps:** update dependency google-auth-library to v9.3.0 ([2cc120b](https://github.com/MailOnline/google-ad-manager-api/commit/2cc120be957bbf09d3710006a15ab1ee5093e919))
* **deps:** update dependency google-auth-library to v9.4.0 ([4997dbb](https://github.com/MailOnline/google-ad-manager-api/commit/4997dbb2b658f9797f57b49daf63b9f8cd9b9b58))
* **deps:** update dependency google-auth-library to v9.4.1 ([abeac03](https://github.com/MailOnline/google-ad-manager-api/commit/abeac037b39e3b877613ed9441731b6b9b14ee4f))
* **deps:** update dependency google-auth-library to v9.4.2 ([0a37bca](https://github.com/MailOnline/google-ad-manager-api/commit/0a37bcaa557cd37b4caa7cc275f705dbf25381ab))
* **deps:** update dependency google-auth-library to v9.5.0 ([6ecd655](https://github.com/MailOnline/google-ad-manager-api/commit/6ecd655badfc81f97c2737ef575a9dff847e72ff))
* **deps:** update dependency google-auth-library to v9.6.0 ([85ef607](https://github.com/MailOnline/google-ad-manager-api/commit/85ef6079ac1a7bfd98b49819c6df73739b96dbd1))
* **deps:** update dependency google-auth-library to v9.6.1 ([35baba0](https://github.com/MailOnline/google-ad-manager-api/commit/35baba031773a4ab9f7a6ac32809bfc32aecf1fa))
* **deps:** update dependency google-auth-library to v9.6.2 ([4353660](https://github.com/MailOnline/google-ad-manager-api/commit/43536602d01797f5593f6f02a011b06d3ed41e3b))
* **deps:** update dependency google-auth-library to v9.6.3 ([be7e803](https://github.com/MailOnline/google-ad-manager-api/commit/be7e8037816e6ccbd52776efc19f6b5611cd18c3))
* **deps:** update dependency google-auth-library to v9.7.0 ([1ecf837](https://github.com/MailOnline/google-ad-manager-api/commit/1ecf83785e769dc2a3cccb6573b6f0df39a44794))
* **deps:** update dependency google-auth-library to v9.8.0 ([d5048bc](https://github.com/MailOnline/google-ad-manager-api/commit/d5048bc24a98425a5cded4b6194f8cc2c25f4c61))
* **deps:** update dependency google-auth-library to v9.9.0 ([14908a4](https://github.com/MailOnline/google-ad-manager-api/commit/14908a49b9660f60ff1deb077f7fb00c2d5a4b95))
* **deps:** update dependency soap to v1.0.1 ([ab9f19f](https://github.com/MailOnline/google-ad-manager-api/commit/ab9f19f0acd4f2f223dca83ecdf5e0b543fc0067))
* **deps:** update dependency tslib to v2.6.3 ([0cd6e1b](https://github.com/MailOnline/google-ad-manager-api/commit/0cd6e1b3f2d39592257ae2168d7105098ba5c21e))
* **deps:** update dependency tslib to v2.7.0 ([bdf3fb3](https://github.com/MailOnline/google-ad-manager-api/commit/bdf3fb337405af7d78d147472fcd2853fddfc5a0))
* **formatValue:** replace all quotes ([03ea7a4](https://github.com/MailOnline/google-ad-manager-api/commit/03ea7a4449623a852a42ff6ba402332d80bf8510))
* lazy auth ([208602f](https://github.com/MailOnline/google-ad-manager-api/commit/208602fda00002a548ea914d857d48f11a24a8bd))
* pagination ([4983f1c](https://github.com/MailOnline/google-ad-manager-api/commit/4983f1c39e111e4a93c545a18a09a41f7d77453d))
* **pql:** space before order ([23e4284](https://github.com/MailOnline/google-ad-manager-api/commit/23e4284556169ddd57462c177dd4d71a9bd45bb5))
* **report:** jobids are strings ([79b53c7](https://github.com/MailOnline/google-ad-manager-api/commit/79b53c7b62741e74a942f31bb2fb6d27333da847))
* **statement:** unionize method names ([55e4c91](https://github.com/MailOnline/google-ad-manager-api/commit/55e4c91c80705f36f8d4f6f10d1faa931807d882))
* typing of query ([1eae2ca](https://github.com/MailOnline/google-ad-manager-api/commit/1eae2ca9a07c7da346a8f975f6c0435bbba0c819))
* upgrade wsdl-tclient ([e2cda8c](https://github.com/MailOnline/google-ad-manager-api/commit/e2cda8c7aec94bd8dec61308907c7394c2c15983))
* use globally exceptable github dep syntax ([22416df](https://github.com/MailOnline/google-ad-manager-api/commit/22416dfca6db44f6b10c742182d7ca486f00f050))


### Performance Improvements

* reduce calls to authorize ([65b1e70](https://github.com/MailOnline/google-ad-manager-api/commit/65b1e70193edecc1a08ed1fe15e0ddb220c20a17))


### Miscellaneous Chores

* bump node ([9bb2aa6](https://github.com/MailOnline/google-ad-manager-api/commit/9bb2aa68ab6e2731dae7a70995556ea39057d806))


### Code Refactoring

* only export one version ([86fcf5c](https://github.com/MailOnline/google-ad-manager-api/commit/86fcf5c2492006626f5bf626efb7dc48d3400257))
