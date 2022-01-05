/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const {createFilePath} = require("gatsby-source-filesystem")

exports.onCreateNode = ({node, getNode, actions}) => {
    if (node.internal.type != "MarkdownRemark")
        return
    const {createNodeField} = actions
    createNodeField({
        node,
        name: "slug",
        value: createFilePath({node, getNode}).replace(/\s+/g, '-').toLowerCase()
    })
}

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;
    const results = await graphql(`
        query {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/.\/posts\/./"}}) {
                nodes {
                    html
                    frontmatter {
                        date
                        title
                        description
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    `)
    let posts = results.data.allMarkdownRemark.nodes

    posts.forEach((post) => {
        createPage({
            path: post.fields.slug,
            component: path.resolve("./src/templates/Post/index.js"),
            context: {
                title: post.frontmatter.title,
                description: post.frontmatter.description,
                content: post.html
            }
        })
    })

    const results2 = await graphql(`
        query {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/.\/resources\/./"}}) {
                nodes {
                    html
                    frontmatter {
                        date
                        title
                        description
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    `)
    let resources = results2.data.allMarkdownRemark.nodes

    resources.forEach((post) => {
        createPage({
            path: post.fields.slug,
            component: path.resolve("./src/templates/Post/index.js"),
            context: {
                title: post.frontmatter.title,
                description: post.frontmatter.description,
                content: post.html
            }
        })
    })
}