import React from "react"
import {graphql, Link} from "gatsby"
import { useState, useContext, useEffect } from 'react';
import MenuBar from "../components/MenuBar"
import {Helmet} from "react-helmet"

import {ThemeContext, themes} from "../themes/themes";
import Layout from "../components/Layout"
//import { node } from "prop-types";
//import SEO from "../components/seo"

import _JSXStyle from "styled-jsx/style"

function List({posts}) {

  const theme = useContext(ThemeContext);

  return (
    <div className="list">
      <h1>Posts</h1>
      <p>Explaining, teaching, sharing.</p>
      <p>{posts.length} post{posts.length > 1 ? "s" : ""}.</p>
      <table>
        {posts.map((post) => (
          <Link to={post.fields.slug}>
            <tr key={post.id}>
              <td>
                  <span>{post.frontmatter.title}</span>
              </td>
              <td>
                <span>{post.frontmatter.description}</span>
              </td>
              <td>
                <span>{post.frontmatter.date}</span>
              </td>
            </tr>
          </Link>
        ))}
      </table>
      <style jsx>{`
        .list {
          background-color: ${theme.selected.background};
          color: ${theme.selected.text};
          min-height: 100vh;
          padding: 64px;
        }
        span {
          color: ${theme.selected.text};
        }

        table, td, tr
        {
          padding: 16px;

          border-collapse: collapse;
          border: 1px solid grey;
          border-radius: 8px;
        }

        table {
          width: 100%;
        }

        tr {
          white-space: nowrap
        }

        td:nth-child(2) {
          width: 100%;
        }
      `}</style>
    </div>
  )
}

const Posts = ({data}) => {

  let posts = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <Helmet>
          <title>Blog - Xavier "Vyn" Esnault</title>
      </Helmet>
      <MenuBar fixed forceShowBackground/>
      <List posts={posts}/>
    </Layout>
  )
}

export const query = graphql`
  query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/.\/posts\/./"}}) {
          nodes {
              html
              frontmatter {
                  date(formatString: "MMMM Do, YYYY")
                  title
                  description
              }
              fields {
                  slug
              }
          }
      }
  }
`

export default Posts
