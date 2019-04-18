/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      title: 'Browse Docs',
      content: ``,
    },

  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Imprint</h1>
          </header>


          <h2>Responsible for all content according to § 10 paragraph 3 MDStV:</h2>
          <p>Torsten Link<br/>
          Georg-Wolff-Straße 8<br/>
          63454 Hanau<br/>
          Germany</p>

          <p>Email: <a href="mailto:torstenlink@gmx.de" target="_blank" rel="noopener">torstenlink@gmx.de</a></p>

          <h2>Disclaimer</h2>

          <p>These internet pages are non-binding service pages and are set up for the purpose
          of providing general information only. We make an effort to provide you with precise
          and updated information. We do not accept any responsibility for the editorial contents,
          in particular the Internet pages of third parties who are designated with references (links).</p>

         <p>Furthermore, we do not issue any guarantee with regard to the completeness,
         correctness and updated status of the information provided by us. Any liability
         for damage, also direct and/or indirect consequential damage, that results from the
         use of the information published herein, is not accepted in any case of liability.</p>

         <p>This disclaimer of liability applies also for information and intellectual contents
         of third parties which result through reference to other Internet pages of third parties.</p>


        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
