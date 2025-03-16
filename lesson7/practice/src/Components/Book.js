import React from "react";

class Book extends React.Component {
  render() {
    return (
      <div>
        <p>
          <img src={this.props.src} alt="Изображение"></img>
        </p>
        <p>Название: {this.props.name}</p>
        <p>Автор: {this.props.author}</p>
      </div>
    );
  }
}

export default Book;
