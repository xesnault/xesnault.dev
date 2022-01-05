import React from "react"
import {graphql, Link} from "gatsby"
import { useState, useContext, useEffect } from 'react';
import MenuBar from "../components/MenuBar"
import {Helmet} from "react-helmet"

import {ThemeContext, themes} from "../themes/themes";
import Layout from "../components/Layout"
import Contact from "../components/Contact"
//import { node } from "prop-types";
//import SEO from "../components/seo"

import _JSXStyle from "styled-jsx/style"

function List({posts}) {

  const theme = useContext(ThemeContext);

  return (
    <div className="list-wrapper">
      <div className="list">
        <h1>Resources</h1>
        <p>Explaining, teaching, sharing.</p>
        <p>{posts.length} resource{posts.length > 1 ? "s" : ""}.</p>
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
              </tr>
            </Link>
          ))}
        </table>
      </div>
      <style jsx>{`
        .list-wrapper {
          flex: 1;
          background-color: ${theme.selected.background};
          color: ${theme.selected.text};
          padding: 32px;
        }

        .list {
          border: 1px solid grey;
          border-radius: 8px;
          background-color: rgb(50, 50, 50);
          padding: 16px;
          margin: 64px;
        }

        span {
          color: ${theme.selected.text};
        }

        table, td, tr
        {
          padding: 16px;

          border-collapse: collapse;
          border: 0px solid grey;
          
        }

        tr {
          border-top: 1px solid grey;
          
        }

        tr:hover {
          background-color: rgb(100, 120, 120);
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
          <title>Resources - Xavier "Vyn" Esnault</title>
      </Helmet>
      <MenuBar fixed forceShowBackground/>
      <div className="main">
        <List posts={posts}/>
        <Contact/>
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}</style>
    </Layout>
  )
}

export const query = graphql`
  query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/.\/resources\/./"}}) {
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
