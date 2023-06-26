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
                label: "Photographer",
                name: "photographer",
                type: "string",
              },
              {
                label: "Description",
                name: "description",
                type: "string",
              },
              {
                label: "Accessibility Description",
                name: "alt",
                type: "string",
                required: true,
              },
            ],
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.alt };
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
          {
            label: "Header Image",
            name: "headerImage",
            type: "image",
          },
          {
            label: "Hero Image",
            name: "heroImage",
            type: "image",
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
      {
        name: "navbar",
        label: "Navigation Bar",
        path: "src/content/navbar",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            label: "Navigation Item",
            name: "navigationItem",
            type: "object",
            fields: [
              {
                label: "Display Name",
                name: "name",
                type: "string",
                required: true,
              },
              {
                label: "Link",
                name: "link",
                type: "string",
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
          {
            label: "Booking Link",
            name: "bookingLink",
            type: "object",
            fields: [
              {
                label: "Name",
                name: "name",
                type: "string",
                required: true,
              },
              {
                label: "Link",
                name: "link",
                type: "string",
                required: true,
              },
            ],
          },
        ],
      },
      {
        name: "footer",
        label: "Footer",
        path: "src/content/footer",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            label: "Footer Column",
            name: "footerColumn",
            type: "object",
            fields: [
              {
                label: "Column Title",
                name: "title",
                type: "string",
                required: true,
              },
              {
                label: "Column Items",
                name: "items",
                type: "object",
                fields: [
                  {
                    label: "Item Name",
                    name: "name",
                    type: "string",
                    required: true,
                  },
                  {
                    label: "Item Link",
                    name: "link",
                    type: "string",
                  },
                  {
                    label: "Link Type",
                    name: "type",
                    type: "string",
                    options: [
                      {
                        label: "Telephone",
                        value: "tel:",
                      },
                      {
                        label: "Email",
                        value: "mailto:",
                      },
                      {
                        label: "Other",
                        value: "",
                      },
                    ],
                  },
                ],
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.name };
                  },
                  min: 1,
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
        format: "json",
        label: "Friends",
        name: "friends",
        path: "src/content/friends",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "item",
            label: "Item",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "string",
                name: "details",
                label: "Details",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "links",
                label: "Links",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Name",
                  },
                  {
                    type: "string",
                    name: "url",
                    label: "URL",
                  },
                  {
                    label: "Link Type",
                    name: "type",
                    type: "string",
                    options: [
                      {
                        label: "Telephone",
                        value: "tel:",
                      },
                      {
                        label: "Email",
                        value: "mailto:",
                      },
                      {
                        label: "Other",
                        value: "",
                      },
                    ],
                  },
                ],
                ui: {
                  itemProps: (item) => {
                    return { label: item?.name };
                  },
                },
              },
            ],
          },
        ],
      },
      {
        name: "about",
        label: "About",
        format: "md",
        path: "src/pages",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            label: "Layout",
            name: "layout",
            type: "string",
            options: [
              {
                label: "Default",
                value: "../layouts/MarkdownLayout.astro",
              },
            ],
          },
          {
            label: "Hide Page",
            name: "draft",
            type: "boolean",
          },
          {
            label: "Title",
            name: "title",
            type: "string",
            required: true,
            isTitle: true,
          },
          {
            label: "Main Image",
            name: "mainImage",
            type: "image",
          },
          {
            label: "Main Content",
            name: "mainContent",
            type: "rich-text",
            required: true,
            isBody: true,
          },
        ],
      },
    ],
  },
});
