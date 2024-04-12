import {Link} from 'react-router-dom';
export default function Root() {
    return (
      <>
        <div id="Root">
            <h1>homepage</h1>
            <Link to='/produtos'>Produtos</Link>
        </div>
      </>
    );
  }