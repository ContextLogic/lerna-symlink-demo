/* eslint-disable */
import React, { ReactElement } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { StyleSheetServer } from "aphrodite";
type DocumentProps = {
  readonly css: {
    readonly content: string;
  };
};

export default class MyDocument extends Document<DocumentProps> {
  static async getInitialProps({ renderPage }) {
    const { html, css }: any = StyleSheetServer.renderStatic(() =>
      renderPage()
    );
    const ids = css.renderedClassNames;
    return { ...html, css, ids };
  }

  render(): ReactElement {
    return (
      <Html>
        <Head>
          <style
            data-aphrodite
            dangerouslySetInnerHTML={{
              __html: this.props.css.content,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
