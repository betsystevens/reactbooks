import React from 'react';
import { Media } from 'reactstrap';

function ListBooks (props) {

  const imgStyle = {
    height: 250,
    width: 190
  } 
  const pStyle = {
    fontStyle: 'italic',
    fontSize: 20 
  }
  const booklist = props.books.map((book) => {
    return (
      <div key={book.id} className="col-12 mt-5">
        <Media className="border-bottom" tag="li">
          <Media left className="border border-dark">
            <Media object src={book.image} alt={book.title} style={imgStyle} />
          </Media>
          <Media body className="m-5">
            <Media heading>{book.title}</Media>
            <p className="mt-5" style={pStyle} >{book.subtitle}</p>
          </Media>
        </Media>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <Media list>
          {booklist}
        </Media>
      </div>
    </div>
  );
}

export default ListBooks