import React from 'react';

const BookList = () => {
  const books = [
    { id: 1, name: 'Book 1', price: '$10', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRQBc2A_gj-sCIvK3Kdle3UcaQ3npJ9y0eHw&s' },
    { id: 2, name: 'Book 2', price: '$15', imageUrl: 'https://th.bing.com/th/id/OIP.yDePIbO4Lg1Imb8OspF-ggHaLM?w=178&h=269&c=7&r=0&o=5&pid=1.7' },
    { id: 3, name: 'Book 3', price: '$21', imageUrl: 'https://th.bing.com/th/id/OIP.Nhs2i3aPnNYbL3navWk5GwHaLf?w=178&h=247&c=7&r=0&o=5&pid=1.7'},
    { id: 4, name: 'Book 4', price: '$17', imageUrl: 'https://th.bing.com/th/id/OIP.8TD_d_dRAQZ9nMWBjjB8pwHaLe?w=178&h=247&c=7&r=0&o=5&pid=1.7'},
    { id: 5, name: 'Book 5', price: '$11', imageUrl: 'https://th.bing.com/th/id/OIP.IHxEM3Rdp_ydxVVyAiQZYAHaLp?w=178&h=250&c=7&r=0&o=5&pid=1.7'},
    { id: 6, name: 'Book 6', price: '$25', imageUrl: 'https://th.bing.com/th/id/OIP.Pnhv1abLs10qfQt_9KVIqQHaLN?w=178&h=269&c=7&r=0&o=5&pid=1.7'},
    { id: 7, name: 'Book 7', price: '$19', imageUrl: 'https://th.bing.com/th?id=OIP.CFcr77um4CHi5D2z-M87ygHaLL&w=203&h=307&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' },
    { id: 8, name: 'Book 8', price: '$25', imageUrl: 'https://th.bing.com/th?id=OIP.5yD4rkfNfcuYTHtoErlUYwHaLL&w=203&h=307&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' },
    { id: 9, name: 'Book 9', price: '$33', imageUrl: 'https://th.bing.com/th?id=OIP.OoAl690Iup8yqMEjOSHdWgHaJv&w=217&h=286&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'},
    { id: 10, name: 'Book 10', price:'$13', imageUrl: 'https://th.bing.com/th?id=OIP.r6T5qDSPDohIIOm1ee6_vgHaL6&w=197&h=317&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'},
    { id: 11, name: 'Book 11', price: '$22', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4qaHEY8tC1ZHOBb4osAUAm8Clb5XtCYb9kg&s'},
    { id: 12, name: 'Book 12', price: '$19', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjIXlbbtxHpr_MkSBRhC-83xITjUcvc_0Mrw&s' },
    { id: 13, name: 'Book 13', price: '$14', imageUrl: 'https://th.bing.com/th/id/OIP.PE28zzU1PSQoKRf2t6Qe2AHaLH?w=178&h=267&c=7&r=0&o=5&pid=1.7' },
    { id:14, name: 'Book 14', price: '$30', imageUrl: 'https://th.bing.com/th/id/OIP.WzE-E8yRGRVI9R2PNkYEfgAAAA?w=178&h=262&c=7&r=0&o=5&pid=1.7'},
    { id: 15, name: 'Book 15', price:'$12', imageUrl: 'https://th.bing.com/th/id/OIP.uFS1Y_a6DkWD5TM_eAstVAHaLu?w=178&h=282&c=7&r=0&o=5&pid=1.7'},
  ];

  const imageStyle = {
    width: '250px', 
    height: '300px',
    border:'20px solid black'
  };

  const imageContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#eef2e2',
    paddingLeft:'4%'
  };

  const imageContainerItemStyle = {
    flex: '20%', 
    fontSize:'30px',
    fontWeight:'500',
    paddingTop:'3%',
    margin:'0%',
  };

  return (
    <>
     <h1>List of Books</h1>
      <div style={imageContainerStyle}>
        {books.map(book => (
          <div style={imageContainerItemStyle} key={book.id}>
            <img style={imageStyle} src={book.imageUrl} alt={book.name} />
            <p>Name: {book.name}</p>
            <p>Price: {book.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookList;

