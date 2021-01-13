How to create a basic graphql server

Make all /graphql route to point to graphql server by giving it a graphQltHttp function

create a schema

    Types: a graphqlobjecttype funtion with the name of the type and the expected fields

    RootQuery: type of rootQuery, name is RootQueryTyp field {type: a query type, args(query arg) and resolver: actual code to the query using the params from args}
