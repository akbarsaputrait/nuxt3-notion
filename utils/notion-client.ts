import { Client } from "@notionhq/client";

// Get Environtment
const runtimeConfig = useRuntimeConfig()

const NotionClient = new Client({ auth: runtimeConfig.notionApiKey });

export default NotionClient;