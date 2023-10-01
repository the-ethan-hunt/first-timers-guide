# Firebase NoSQL Database with Firebase Realtime Database

Firebase is a mobile and web application development platform by Google that provides various services including a realtime NoSQL database.

## What is a NoSQL Database?

NoSQL databases are non-tabular databases and store data differently than traditional relational databases. NoSQL databases come in various types based on their data model:

- **Document Databases**: Each entry is a document with properties and values (e.g., JSON, MongoDB).
- **Key-Value Stores**: Simple key-value pair storage (e.g., Redis, DynamoDB).
- **Wide-Column Databases**: Store data in columns rather than rows (e.g., Cassandra, HBase).
- **Graph Databases**: Store data in nodes and edges (e.g., Neo4j).

### Difference between SQL and NoSQL databases

...

## Firebase Realtime Database

The Firebase Realtime Database is a cloud-hosted NoSQL database that lets you store and sync data between your users in real-time. Here are some key features:

- Data is stored as JSON and synchronized in real-time to every connected client.
- Realtime listeners can be used to subscribe to data changes.
- Offline data persistence is supported so data is available even when offline.
- Data is stored as JSON documents organized by key-value pairs.

...

### Structuring Data

Data in the Realtime Database is organized into hierarchical JSON objects as key-value pairs. Keys can contain alphanumerics, underscores, dots, and Unicode characters. Values can be strings, numbers, booleans, arrays, or other nested objects.

Some guidelines for structuring data:

- Data should be structured as flatly as possible for efficiency. Nested data can make querying slower.
- Unique IDs from authentication like UID can be used to store data per user.
- Use push IDs to generate automatic keys for new data like messages in chat.
- Add metadata like createdAt timestamp for data ordering.

...

### Security Rules

The Realtime Database provides flexible declarative rules to define complex access controls. Rules are defined per node as JSON objects. Some capabilities:

- Validate data when written or read.
- Control access per user account with auth variables.
- Granular read/write rules down to operation and data attributes.
- Cascade rules inheritance to simplify rulesets.

...

## Summary

In summary, the Firebase Realtime Database provides a flexible cloud-hosted NoSQL database for mobile and web apps. Its realtime synchronization, offline support, and security rules make it a good choice for collaborative applications.
