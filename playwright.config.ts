import { PlaywrightTestConfig } from "@playwright/test"
const config: PlaywrightTestConfig={
    timeout:60000,
    retries: 3,
    use:{
        headless: true,
        viewport: { width: 1280, height: 720},
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure',
        screenshot:'only-on-failure',
        trace:'retain-on-failure'

    },
    projects:[
        {
            name:"Chromium",
            use: {browserName: "chromium"}

        },
        {
            name:"FireFox",
            use: {browserName: "firefox"}

        },
        {
            name:"Webkit",
            use: {browserName: "webkit"}

        }

    ]

}

export default config
