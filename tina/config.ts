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
                label: "Pasta Menu Image",
                name: "pastaImage",
                type: "string",
                options: [
                  {
                    value: "/photos/snacks_o8cu6x.svg",
                    label: "Green Pasta",
                  },
                  {
                    value: "/photos/before_d7e91s.svg",
                    label: "Pink Pasta",
                  },
                  {
                    value: "/photos/pasta_drr2wp.svg",
                    label: "Yellow Pasta",
                  },
                  {
                    value: "/photos/big_i8isdj.svg",
                    label: "Blue Pasta",
                  },
                ],
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
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
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
      {
        name: "sitesettings",
        label: "Site Settings",
        path: "src/content/sitesettings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            label: "Maintenance Mode",
            name: "maintenanceMode",
            type: "boolean",
          },
        ],
      },
      {
        name: "businessinfo",
        label: "Business Information",
        path: "src/content/businessinfo",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            label: "Opening Hours",
            name: "openingHours",
            type: "object",
            fields: [
              {
                label: "Day",
                name: "day",
                type: "string",
                options: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
              },
              {
                label: "Opening Time",
                name: "openingTime",
                type: "string",
              },
              {
                label: "Closing Time",
                name: "closingTime",
                type: "string",
              },
            ],
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.day };
              },
            },
          },
        ],
      },
    ],
  },
});

// Monday: Closed
// Tuesday: Closed
// Wednesday: 5:30pm - 9pm
// Thursday: 5:30pm - 9pm
// Friday: 5:30pm - 9pm
// Saturday: 5:30pm - 10pm
// Sunday: 3pm - 6:30pm
