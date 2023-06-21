import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "34c283a2-78a1-472a-8d66-8bc8bd0c7ac0", // Get this from tina.io
  token: "429e3263af663b4f42809b534a2356d59e00cb00", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "menus",
        label: "Menus",
        path: "src/content/menus",
        format: "json",
        fields: [
          {
            label: "Title",
            name: "title",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            label: "Picture Menu On",
            name: "pictureOrText",
            type: "boolean",
          },
          {
            label: "Menu Picture",
            type: "image",
            name: "menuPicture",
          },
          {
            label: "Subsection",
            name: "subsection",
            type: "object",
            required: true,
            fields: [
              {
                label: "Title",
                name: "title",
                type: "string",
              },
              {
                label: "Menu Items",
                name: "menuItems",
                type: "object",
                fields: [
                  {
                    label: "Item Name",
                    name: "name",
                    type: "string",
                    required: true,
                  },
                  {
                    label: "Item Description",
                    name: "description",
                    type: "string",
                  },
                  {
                    label: "Item Price",
                    name: "price",
                    type: "number",
                    required: true,
                  },
                ],
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.name };
                  },
                },
              },
            ],
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
          },
        ],
      },
      {
        name: "gallery",
        label: "Gallery",
        path: "src/content/gallery",
        format: "json",
        fields: [
          {
            label: "Title",
            name: "title",
            type: "string",
            required: true,
            isTitle: true,
          },
          {
            label: "Photo Entry",
            name: "photoentry",
            type: "object",
            fields: [
              {
                label: "Photo",
                name: "photo",
                type: "image",
                required: true,
              },
              {
                label: "Mouseover Text",
                name: "mouseovertext",
                type: "string",
              },
              {
                label: "Accessibility Description",
                name: "description",
                type: "string",
                required: true,
              },
            ],
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.mouseovertext };
              },
            },
          },
        ],
      },
    ],
  },
});
