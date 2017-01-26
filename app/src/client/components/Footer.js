import React from 'react';
import Link from './Link';
import inBrowser from '../inBrowser';

if (inBrowser) {
  require('./Footer.css');
}

const FooterLink = ({target, text}) => (
  <li>
    <Link to={target}>{text}</Link>
  </li>
);

const StaticFooterLink = ({target, text}) => (
  <li>
    <a href={target}>{text}</a>
  </li>
);

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="four columns">
              <h6>Content Library</h6>
              <ul>
                <FooterLink target="/blog" text="Blog" />
                <FooterLink target="/wiki" text="Wiki" />
                <FooterLink target="/snippets" text="Snippets" />
                <FooterLink target="/tags" text="Tags" />
                <FooterLink target="/search" text="Search" />
              </ul>
            </div>
            <div className="four columns">
              <h6>External</h6>
              <ul>
                <StaticFooterLink target="https://github.com/Terrafarm" text="GitHub" />
                <StaticFooterLink target="https://twitter.com/_terrafarm" text="Twitter" />
              </ul>
            </div>
            <div className="four columns">
              <h6>Colophon</h6>
              <p>
                <a href="/pages/about">About Terrafarm</a>
                <br /><a href="http://rojobuffalo.com">Ryan Blakeley</a>, Technical Founder
              </p>
              {/* TODO link to /pages/legal here */}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
