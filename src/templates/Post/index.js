import React from "react"
import Layout from "../../components/Layout"
import MenuBar from "../../components/MenuBar"
import {Helmet} from "react-helmet"

import "./prismjs.css"
import "./post-content.css"
import { useState, useContext, useEffect } from 'react';
import Contact from "../../components/Contact"

import {ThemeContext, themes} from "../../themes/themes";

import _JSXStyle from "styled-jsx/style"

function Post({post}) {
  const theme = useContext(ThemeContext);

  return (
    <div className="post">
      <div className="content post-content" dangerouslySetInnerHTML={{__html: post.content}}/>
      <style jsx>{`
        .post {
          background-color: ${theme.selected.background};
          color: ${theme.selected.text};

          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        .content {
          margin-top: 0px;
          background-color: rgb(50, 50, 50);
			padding: 16px;
			width: 95%;
        }

        @media screen and (min-width: 992px) {
          .content {
            padding: 16px;
            margin-top: 64px;
            width: 722px;
            border: 1px solid grey;
            border-radius: 8px;
          }
        }

      `}</style>
    </div>
  )
}

export default function BlogPost({pageContext}) {
  return (
    <Layout>
        <Helmet>
            <title>{pageContext.title} - Xavier "Vyn" Esnault</title>
        </Helmet>
        <MenuBar fixed forceShowBackground/>
        <Post post={pageContext}/>
        <Contact/>
    </Layout>
  )
}
