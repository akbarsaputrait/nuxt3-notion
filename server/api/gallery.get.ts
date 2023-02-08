import NotionClient from "~~/utils/notion-client";

// Get Environment
const runtimeConfig = useRuntimeConfig()
const database_id = `${runtimeConfig.notionDatabaseId}`;
const attrs = ['Files & media', 'Name']
let payload: any[] = [];

async function getImages() {
  const data = await NotionClient.databases.query({
    database_id: database_id,
  });
  return data;
}

getImages().then((data) => {
  payload =   transform(data.results);
});

function transform(payload: any[]) {
  return payload.map((data) => {
    let properties = null;
    if (data.properties) {
      properties = {
        title: null,
        image: null,
      };
      for (const [key, value] of Object.entries(data.properties)) {
        if (attrs.includes(key)) {
          const item = value as any;
          if (item.type === 'title') {
            if (item.title.length === 1) {
              const title = item.title[0];
              properties.title = title.plain_text;
            }
          } else if (item.type === 'files') {
            if (item.files.length === 1) {
              const image = item.files[0];
              properties.image = image.file.url;
            }
          }
        }
      }
    }

    // Icon
    let icon = null;
    if (data.icon && data.icon.type === 'emoji') {
      icon = data.icon.emoji;
    }

    return { 
      id: data.id,
      created_at: data.created_time,
      updated_at: data.last_edited_time,
      icon,
      properties,
    };
  });
}

export default defineEventHandler(() => payload);