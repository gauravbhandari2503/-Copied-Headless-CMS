import { GraphQLClient, gql } from 'graphql-request'

const fetchContentfulData = async () => {
  const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID!
  const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN!
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${spaceId}`

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  })

  const query = gql`
    query {
      productCollection {
        items {
          title
          price
          description {
            json
          }
          photosCollection {
            items {
              url
              title
              description
            }
          }
        }
      }
    }
  `

  const data = await graphQLClient.request(query)
  console.log(data)
  return data
}
export { fetchContentfulData }
