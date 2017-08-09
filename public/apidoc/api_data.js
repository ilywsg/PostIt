define({ "api": [
  {
    "type": "post",
    "url": "/api/user/signin",
    "title": "Login user",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of registered user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"username\": \"johadi\",\n  \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n  {\n   \"status\": 200,\n   \"data\": {\n      \"token\": \"xyz.abc.123.hgf\"\n      \"message\": \"Sign in successful\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/auth.js",
    "groupTitle": "Authentication",
    "name": "PostApiUserSignin"
  },
  {
    "type": "post",
    "url": "/api/group",
    "title": "Create a group",
    "group": "Group",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"x-auth\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Group title</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\"name\": \"Andela\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 CREATED\n{\n  \"id\": 1,\n  \"name\": \"Andela\",\n  \"updated_at\": \"2016-02-10T15:46:51.778Z\",\n  \"created_at\": \"2016-02-10T15:46:51.778Z\",\n  \"creator_id\": 5\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/group.js",
    "groupTitle": "Group",
    "name": "PostApiGroup"
  },
  {
    "type": "post",
    "url": "/api/group/:groupId/user",
    "title": "Add user to group",
    "group": "Group",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"x-auth\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "Id",
            "description": "<p>of group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\"name\": \"Ortwel\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 CREATED\n{\n  \"message\": \"User added successfully\",\n  \"addedUser\": \"Ortwel\",\n  \"addedBy\": \"johadi\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/group.js",
    "groupTitle": "Group",
    "name": "PostApiGroupGroupidUser"
  },
  {
    "type": "get",
    "url": "/api/group/:groupId/message",
    "title": "Get group messages",
    "group": "Message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"x-auth\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "Id",
            "description": "<p>of group</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"count\": 2,\n    \"pages\": 1,\n    \"rows\": [{\n      \"id\": 1,\n      \"message\": \"Programming is in the mind\",\n      \"updated_at\": \"2017-06-10T15:46:51.778Z\",\n      \"created_at\": \"2017-06-10T15:46:51.778Z\",\n      \"User\": {\n        \"id\": 3,\n        \"username\": \"johadi\",\n        \"fullname\": \"jimoh hadi\"\n      }\n    },\n    {\n      \"id\": 4,\n      \"message\": \"I love Programming\",\n      \"updated_at\": \"2017-05-10T15:46:51.778Z\",\n      \"created_at\": \"2017-05-10T15:46:51.778Z\",\n      \"User\": {\n        \"id\": 6,\n        \"username\": \"mary\",\n        \"fullname\": \"john mary\"\n      }\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/group.js",
    "groupTitle": "Message",
    "name": "GetApiGroupGroupidMessage"
  },
  {
    "type": "get",
    "url": "/api/group/:groupId/message/:messageId",
    "title": "Get a message in a group",
    "group": "Message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"x-auth\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "Id",
            "description": "<p>of group</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n   {\n      \"id\": 4,\n      \"message\": \"I love Programming\",\n      \"updated_at\": \"2017-05-10T15:46:51.778Z\",\n      \"created_at\": \"2017-05-10T15:46:51.778Z\",\n      \"User\": {\n        \"id\": 6,\n        \"username\": \"mary\",\n        \"fullname\": \"john mary\"\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/group.js",
    "groupTitle": "Message",
    "name": "GetApiGroupGroupidMessageMessageid"
  },
  {
    "type": "post",
    "url": "/api/group/:groupId/message",
    "title": "POST messages to group",
    "group": "Message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"x-auth\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "Id",
            "description": "<p>of group</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>to send to group</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 CREATED\n\n  \"created successfully\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/group.js",
    "groupTitle": "Message",
    "name": "PostApiGroupGroupidMessage"
  },
  {
    "type": "post",
    "url": "/api/group/message-read",
    "title": "POST update status of message whether read or not",
    "group": "Message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"x-auth\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "Id",
            "description": "<p>of message</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>of a group</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n\n  true",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/group.js",
    "groupTitle": "Message",
    "name": "PostApiGroupMessageRead"
  },
  {
    "type": "get",
    "url": "/api/group/:groupId/group-users",
    "title": "Get group members",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"x-auth\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "Id",
            "description": "<p>of group</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 7,\n    \"name\": \"andela\"\n    \"count\": 2,\n    \"pages\": 1,\n    \"Users\": [{\n      \"id\": 1,\n      \"username\": \"johadi\",\n      \"fullname\": \"jimoh hadi\",\n    },\n    {\n      \"id\": 3,\n      \"username\": \"sanni\",\n      \"fullname\": \"ali sanni\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/group.js",
    "groupTitle": "User",
    "name": "GetApiGroupGroupidGroupUsers"
  },
  {
    "type": "get",
    "url": "/api/group/user/board",
    "title": "Get user's unread messages in all joined groups",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"x-auth\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"count\": 2,\n    \"pages\": 1,\n    \"messages\": [\n      {\n        \"id\": 12,\n        \"body\": \"No man is an island espcially in learning\",\n        \"User\": {\n         \"username\": \"johadi\",\n         \"fullname\": \"jimoh hadi\"\n        },\n        \"Group\": {\n          \"id\": 5,\n          \"name\": \"sport\"\n        }\n      },\n     {\n        \"id\": 9,\n        \"body\": \"There is no limitation in learning\",\n        \"User\": {\n         \"username\": \"sanni\",\n         \"fullname\": \"muhammed sanni\"\n        },\n        \"Group\": {\n          \"id\": 17,\n          \"name\": \"programming\"\n        }\n      }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/group.js",
    "groupTitle": "User",
    "name": "GetApiGroupUserBoard"
  },
  {
    "type": "get",
    "url": "/api/group/user/groups",
    "title": "Get user's groups",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"x-auth\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"username\": \"johadi\",\n    \"fullname\": \"jimoh hadi\",\n    \"count\": 2,\n    \"pages\": 1,\n    \"Groups\": [{\n      \"id\": 1,\n      \"name\": \"andela\",\n      \"creator_id\": 8,\n    },\n    {\n      \"id\": 3,\n      \"name\": \"sport\",\n      \"creator_id\": 2\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/group.js",
    "groupTitle": "User",
    "name": "GetApiGroupUserGroups"
  },
  {
    "type": "get",
    "url": "/api/users?search=joh",
    "title": "Get at most 10 users in the application that match the search term only",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"x-auth\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n   [\n      {\n        \"id\": 1,\n        \"username\": \"johadi\",\n        \"fullname\": \"jimoh hadi\",\n        \"email\": \"johadi@test.com\",\n      },\n     {\n        \"id\": 5,\n        \"username\": \"john121\",\n        \"fullname\": \"john daniel\",\n        \"email\": \"john@test.com\",\n      },\n    ],",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/group.js",
    "groupTitle": "User",
    "name": "GetApiUsersSearchJoh"
  },
  {
    "type": "get",
    "url": "/api/users?search=joh&groupId=3",
    "title": "Get at most 10 users in the application that match the search term and userId of a group",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>of authenticated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"x-auth\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"allUsers\": [\n      {\n        \"id\": 1,\n        \"username\": \"johadi\",\n        \"fullname\": \"jimoh hadi\",\n        \"email\": \"johadi@test.com\",\n      },\n     {\n        \"id\": 5,\n        \"username\": \"john121\",\n        \"fullname\": \"john daniel\",\n        \"email\": \"john@test.com\",\n      },\n    ],\n    groupUsersId: [1,4,6,8,9,0]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/group.js",
    "groupTitle": "User",
    "name": "GetApiUsersSearchJohGroupid3"
  },
  {
    "type": "post",
    "url": "/api/user/signup",
    "title": "Register a new user",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>Name of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>Mobile number of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"fullname\": \"Jimoh Hadi\",\n  \"username\": \"Johadi\",\n  \"mobile\": \"0816304xxxx\",\n  \"email\": \"jimoh@program.com\",\n  \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"data\": {\n   \"id\": 1,\n  \"fullname\": \"Jimoh Hadi\",\n  \"email\": \"john@program.com\",\n  \"username\": \"Johdi\",\n  \"mobile\": \"0816304xxxx\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/routes/auth.js",
    "groupTitle": "User",
    "name": "PostApiUserSignup"
  }
] });
