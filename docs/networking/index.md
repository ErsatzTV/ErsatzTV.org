---
uid: networking-index
title: Networking
---

## Port Numbers

By default, ErsatzTV listens on port **8409** for all requests. If desired, the following environment variables can be used to enable separate port numbers:

- `ETV_UI_PORT`: This port allows all requests, management and streaming.
- `ETV_STREAMING_PORT`: This port allows streaming requests and will block all management requests.

## Securing Management Interface

ErsatzTV supports [OpenID Connect (OIDC)](https://openid.net/developers/how-connect-works/) (e.g. Pocket ID, Keycloak, Authelia, Auth0) to secure the management interface. The following environment variables can be used to enable OIDC support:

- `OIDC__AUTHORITY` (required)
- `OIDC__CLIENTID` (required)
- `OIDC__CLIENTSECRET` (required)
- `OIDC__LOGOUTURI` (optional, needed for Auth0)

## Securing Streaming Requests

ErsatzTV supports [JSON Web Tokens (JWT)](https://en.wikipedia.org/wiki/JSON_Web_Token) to secure streaming requests. The following environment variable can be used to enable JWT support:

- `JWT__ISSUERSIGNINGKEY`

When configured, a JWT signed with the configured signing key is required to be passed in the query string as **access_token**. For example `http://localhost:8409/iptv/channels.m3u?access_token=ABCDEF`. When channels are retrieved this way, the access token will automatically be passed through to all necessary URLs.

### Issuer Signing Key

The signing key must consist of 32 random characters.

### Generating Access Tokens

http://jwtbuilder.jamiekurtz.com/ can be used to generate access tokens.

1. Under **Signed JSON Web Token** enter the issuer signing key in the **Key** field
2. Select **HS256**
3. Click **Create Signed JWT**
