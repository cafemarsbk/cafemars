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
        format: "json",
        label: "Home Page",
        name: "home_page",
        path: "src/content/home",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
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
            label: "Hero Image",
            required: true,
          },
          {
            type: "image",
            name: "hoverImage",
            label: "Hero Hover Image",
            required: true,
          },
          {
            type: "boolean",
            name: "hideAbout",
            label: "Hide About Section",
          },
          {
            type: "object",
            name: "about",
            label: "About Section",
            list: true,
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body Text",
              },
              {
                type: "string",
                name: "button",
                label: "Button Label",
              },
              {
                type: "string",
                name: "link",
                label: "URL/Link",
              },
            ],
          },
          {
            type: "boolean",
            name: "hideDetails",
            label: "Hide Details Section",
          },
          {
            type: "object",
            name: "details",
            label: "Details",
            list: true,
            fields: [
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "body",
                label: "Body Text",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
              {
                type: "string",
                name: "button",
                label: "Button Label",
                required: true,
              },
              {
                type: "string",
                name: "link",
                label: "URL/Link",
                required: true,
              },
            ],
          },
          {
            type: "boolean",
            name: "hideCTA",
            label: "Hide CTA Section",
          },
          {
            type: "object",
            name: "cta",
            label: "CTA",
            list: true,
            fields: [
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "rich-text",
                name: "body",
                label: "Body",
                required: true,
              },
              {
                type: "image",
                name: "image",
                label: "Image",
                required: true,
              },
              {
                type: "string",
                name: "button",
                label: "Button Label",
                required: true,
              },
              {
                type: "string",
                name: "link",
                label: "URL/Link",
                required: true,
              },
            ],
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
                  {
                    label: "Icon",
                    name: "icon",
                    type: "string",
                    options: [
                      {
                        label: "Instagram",
                        value: "/instagram.svg",
                      },
                      {
                        label: "Phone",
                        value: "/phone.svg",
                      },
                      {
                        label: "Email",
                        value: "/email.svg",
                      },
                      {
                        label: "Pin",
                        value: "/location.svg",
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
            label: "Coming Soon",
            name: "isDraft",
            type: "boolean",
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
        label: "About & FAQ",
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
      {
        format: "json",
        label: "Jobs",
        name: "jobs",
        path: "src/content/jobs",
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
                return { label: item.title ? item.title : "Job Name" };
              },
            },
            fields: [
              {
                type: "boolean",
                name: "draft",
                label: "Draft",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
              },
              {
                type: "rich-text",
                name: "extendedDescription",
                label: "Extended Description",
                required: true,
              },
              {
                type: "string",
                name: "link",
                label: "Link (job name)",
                required: true,
              },
            ],
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
          {
            label: "Menus",
            name: "main",
            type: "boolean",
          },
          {
            label: "Gallery",
            name: "gallery",
            type: "boolean",
          },
          {
            label: "Contact",
            name: "contact",
            type: "boolean",
          },
          {
            label: "Friends",
            name: "friends",
            type: "boolean",
          },
          {
            label: "About",
            name: "about",
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
                label: "Details",
                name: "details",
                type: "string",
                required: true,
              },
            ],
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.details };
              },
            },
          },
          {
            label: "Address Display Text",
            name: "address",
            type: "string",
          },
          {
            label: "Address Link",
            name: "addressLink",
            type: "string",
          },
          {
            label: "Phone Display Text",
            name: "phone",
            type: "string",
          },
          {
            label: "Phone Link",
            name: "phoneLink",
            type: "string",
          },
          {
            label: "Instagram Display Text",
            name: "instagram",
            type: "string",
          },
          {
            label: "Instagram Link",
            name: "instagramLink",
            type: "string",
          },
          {
            label: "Email",
            name: "email",
            type: "string",
          },
        ],
      },
      {
        name: "policies",
        label: "Policies",
        path: "src/content/policies",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            label: "Title",
            name: "title",
            type: "string",
            required: true,
          },
          {
            label: "Body",
            name: "body",
            type: "rich-text",
            required: true,
          },
        ],
      },
    ],
  },
});
