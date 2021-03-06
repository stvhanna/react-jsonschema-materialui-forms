module.exports = {
  schema: {
    definitions: {
      Thing: {
        type: "object",
        properties: {
          name: {
            type: "string",
            default: "Default name",
          },
        },
      },
    },
    type: "object",
    properties: {
      listOfStrings: {
        type: "array",
        title: "A list of strings",
        items: {
          type: "string",
          default: "bazinga",
        },
      },
      multipleChoicesCheckboxes: {
        type: "array",
        title: `A multiple choices list<br/><img height="100" width="100" src="https://retailedge.intel.com/api/blog/image/e9cdee68-7d7b-4462-a3f0-b13156fc41e8"/>`,
        items: {
          type: "string",
          enum: ["foo", "bar", "fuzz", "qux"],
        },
        uniqueItems: true,
      },
      anyOfCheckBox: {
        type: "string",
        title: "daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        oneOf: [
          {
            type: "integer",
            title: `one <img height="100" width="100" src="https://blog.braingainmag.com/wp-content/uploads/2016/08/6-Tech-Terms-You-Can-Use-Without-Being-a-Techie.jpg"/>`,
            help:
              "Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1 Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1Help for option 1",
            enum: ["foo"],
          },
          {
            type: "integer",
            title: "two",
            help: "Help for option 2",
            enum: ["bar"],
          },
          {
            type: "integer",
            title: "three",
            enum: ["fuzz"],
          },
        ],

        uniqueItems: true,
      },
      multipleChoicesList: {
        type: "array",
        title: "A multiple choices list",
        items: {
          type: "string",
          enum: ["foo", "bar", "fuzz", "qux"],
        },
        uniqueItems: true,
      },
      fixedItemsList: {
        type: "array",
        title: "A list of fixed items",
        items: [
          {
            title: "A string value",
            type: "string",
            default: "lorem ipsum",
          },
          {
            title: "a boolean value",
            type: "boolean",
          },
        ],
        additionalItems: {
          title: "Additional item",
          type: "number",
        },
      },
      minItemsList: {
        type: "array",
        title: "A list with a minimal number of items",
        minItems: 3,
        items: {
          $ref: "#/definitions/Thing",
        },
      },
      defaultsAndMinItems: {
        type: "array",
        title: "List and item level defaults",
        minItems: 5,
        default: ["carp", "trout", "bream"],
        items: {
          type: "string",
          default: "unidentified",
        },
      },
      nestedList: {
        type: "array",
        title: "Nested list",
        items: {
          type: "array",
          title: "Inner list",
          items: {
            type: "string",
            default: "lorem ipsum",
          },
        },
      },
      unorderable: {
        title: "Unorderable items",
        type: "array",
        items: {
          type: "string",
          default: "lorem ipsum",
        },
      },
      unremovable: {
        title: "Unremovable items",
        type: "array",
        items: {
          type: "string",
          default: "lorem ipsum",
        },
      },
      noToolbar: {
        title: "No add, remove and order buttons",
        type: "array",
        items: {
          type: "string",
          default: "lorem ipsum",
        },
      },
      fixedNoToolbar: {
        title: "Fixed array without buttons",
        type: "array",
        items: [
          {
            title: "A number",
            type: "number",
            default: 42,
          },
          {
            title: "A boolean",
            type: "boolean",
            default: false,
          },
        ],
        additionalItems: {
          title: "A string",
          type: "string",
          default: "lorem ipsum",
        },
      },
    },
  },
  uiSchema: {
    listOfStrings: {
      items: { "ui:emptyValue": "" },
    },
    multipleChoicesCheckboxes: {
      "ui:widget": "checkboxes",
      "ui:options": {
        color: "primary",
      },
    },
    anyOfCheckBox: {
      "ui:widget": "radio",
      "ui:help": "dfaada",
    },
    multipleChoicesList: {
      "ui:widget": "select",
      "ui:options": { shortLabel: "multiple choices list", label: false },
    },
    fixedItemsList: {
      items: [
        { "ui:widget": "textarea" },
        {
          "ui:widget": "select",
          "ui:options": { shortLabel: "fixed items list", label: false },
        },
      ],
      additionalItems: {
        "ui:widget": "updown",
      },
    },
    unorderable: {
      "ui:options": {
        orderable: false,
      },
    },
    unremovable: {
      "ui:options": {
        removable: false,
      },
    },
    noToolbar: {
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false,
      },
    },
    fixedNoToolbar: {
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false,
      },
    },
  },
  formData: {
    listOfStrings: ["foo", "bar"],
    multipleChoicesCheckboxes: ["foo", "bar"],
    multipleChoicesList: ["foo", "bar"],
    fixedItemsList: ["Some text", true, 123],
    nestedList: [["lorem", "ipsum"], ["dolor"]],
    unorderable: ["one", "two"],
    unremovable: ["one", "two"],
    noToolbar: ["one", "two"],
    fixedNoToolbar: [42, true, "additional item one", "additional item two"],
  },
};
