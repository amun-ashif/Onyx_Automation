import { PlaywrightTestConfig } from "@playwright/test"
const config: PlaywrightTestConfig={
    timeout:60000,
    retries: 2,
    testDir: "tests/Practice/e2e",
    use:{
        headless: true,
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
