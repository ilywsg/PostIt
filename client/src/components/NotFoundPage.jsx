import React from 'react';
/**
 * class NotFound page declaration
 */
export default class NotFoundPage extends React.Component {
  /**
   * @return {void} void
   */
  componentDidMount() {
    const body = document.getElementById('body');
    const app = document.getElementById('app');
    if (body.className === 'body' || app.className === 'site-wrapper') {
      app.className = '';
    }
    body.style.backgroundImage = 'none';
    body.style.color = 'black';
  }

  /**
   * Renders component
   * @return {XML} XML
   */
  render() {
    return (
        <div className="text-center">
          <h2>Oops! 404, page not found</h2>
          <p>We are sorry! the page you are looking for does not exist.</p>
        </div>
    );
  }
}
