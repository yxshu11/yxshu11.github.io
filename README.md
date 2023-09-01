# macthodology

[macthodology.com](https://macthodology.com)

## Install

### Clone the repository

```shell
git clone git@github.com:yxshu11/yxshu11.github.io.git
cd yxshu11.github.io
```

### Setup

Install the following version NodeJs:

```shell
asdf install nodejs 18.17.1
```

Install all the dependecies:

```shell
yarn install
```

### Configure ENV

Configure all the environment variable in `.env` file:

```
NUXT_PUBLIC_SITE_URL='https://macthodology.com'
NUXT_PUBLIC_CTF_SPACE_ID=''
NUXT_PUBLIC_CTF_CDA_ACCESS_TOKEN=''
NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY=''
```


## Development
### Local Development Server

Start the development server on `http://localhost:3000`:

```shell
# yarn
yarn dev
```

### Production Envrionment

Build the application for production:

```shell
yarn build
```

Locally preview production build:

```shell
yarn preview
```

### Deployment

Generate the Nuxt Application and asset:

```shell
yarn generate
```

Deploy to GitHub pages:

```shell
yarn deploy
```
