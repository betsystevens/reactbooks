import React, { Component } from 'react';
import { Media } from 'reactstrap';

class ListBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 0,
          image: "assets/images/changing.jpg",
          title: "Changing Stuff and Seeing What Happens",
          subtitle: "How to actually learn any new programming concept"
        },
        {
          id: 1,
          image: "assets/images/copyhorse.jpg",
          title: "Copy and Pasting from Stackoverflow",
          subtitle: "Asking yourself why you didn't think of that"
        },
        {
          id: 2,
          image: "assets/images/excuses.jpg",
          title: "Expert Excuses for Not Writing Unit Tests",
          subtitle: "Your application is a special snowflake"
        },
        {
          id: 3,
          image: "assets/images/deleting.jpg",
          title:"Deleting Code",
          subtitle: "Probably the most satisfying part of your job"
        },
        {
          id: 4,
          image: "assets/images/agile.jpg",
          title: "Agile Management",
          subtitle: "Put the 'agile' in fragile"
        },
        {
          id: 5,
          image: "assets/images/blaming.jpg",
          title: "Blaming the User",
          subtitle: "You're a 10x hacker and it must be someone else's fault"
        },
        {
          id: 6,
          image: "assets/images/buzzword.jpg",
          title: "Buzzword-first Design",
          subtitle: "Fashion-forward Developement"
        },
        {
          id: 7,
          image: "assets/images/calling.jpg",
          title: "Calling a bug a feature",
          subtitle: "We'll fix it later"
        },
        {
          id: 8,
          image: "assets/images/coding.jpg",
          title: "Coding on the Weekend",
          subtitle: "It's like weekday coding, but pants are optional"
        },
        {
          id: 9,
          image: "assets/images/getting.jpg",
          title: "Getting Around to Security Next Month",
          subtitle: "Putting off critical tasks until everyone forgets about them"
        }
      ]
    }
  }

  render() {
    const booklist = this.state.books.map((book) => {
      return (
        <div key={book.id} className="col-12 mt-5">
          <Media tag="li">
            <Media left middle>
              <Media object src={book.image} alt={book.title} />
            </Media>
            <Media body className="ml-5">
              <Media heading>{book.title}</Media>
              <p>{book.subtitle}</p>
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
}

export default ListBooks