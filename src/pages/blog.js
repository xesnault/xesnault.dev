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

function PostPreview({post}) {

  const theme = useContext(ThemeContext);
	return (
		<div className="post">
			<h2 className="title">{post.title}</h2>
			<p>{post.description}</p>
			<span className="date">{post.date}</span>
			<style jsx>{`
				.post {
					border-top: 1px solid grey;
					padding: 8px;
				}

				.post:hover {
					background-color: rgb(75, 75, 75);
				}

				.date {
					display: block;
					font-size: 0.75rem;
					margin-bottom: 8px;
					color:  ${theme.selected.text};
					opacity: 0.5;
				}
			`}</style>
		</div>
	) 
}

function List({posts}) {
  const theme = useContext(ThemeContext);

  return (
    <div className="list-wrapper">
      <div className="list">
        <h1>Blog</h1>
        <p>My progress</p>
        <p>{posts.length} post{posts.length > 1 ? "s" : ""}.</p>
        <div className='posts'>
          {posts.map((post) => (
            <Link to={post.fields.slug}>
			  <PostPreview post={post.frontmatter}/>
            </Link>
          ))}
        </div>
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

        .posts {
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
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/.\/blog\/./"}}) {
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
