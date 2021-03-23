/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
        PUBLIC_URL: string,
        REACT_APP_AIRTABLE_API_KEY: string,
        REACT_APP_AIRTABLE_BASE_ID: string,
        REACT_APP_AIRTABLE_TABLE_NAME: string,
        REACT_APP_AUTH0_DOMAIN: string,
        REACT_APP_AUTH0_SECRET: string
        REACT_APP_AUTH0_CLIENT_ID: string,
        REACT_APP_COOKIE_SECRET: string,
    }
}