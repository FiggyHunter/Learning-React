/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png") x
- rating ("5.0") x
- reviewCount (6) x
- country (Whatever you want) x
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

export default function Card({
  img,
  rating,
  reviewCount,
  location,
  title,
  price,
}) {
  return (
    <section className="card">
      <div className="image-container">
        <img src={img} />
        <div className="label">Sold Out</div>
      </div>
      <div className="card-description">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
        >
          <path
            d="M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z"
            fill="#FE395C"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="2"
            viewBox="0 0 2 2"
            fill="none"
          >
            <circle cx="1" cy="1" r="1" fill="#918E9B" />
          </svg>
        </svg>
        <div className="rating">
          {rating}
          <span className="light"> ({reviewCount}) </span>
        </div>
        <div className="country">
          <span className="light">{location}</span>
        </div>
      </div>
      <h3> {title}</h3>
      <h2>
        <b>From ${price}</b> <span className="light">/ person</span>
      </h2>
    </section>
  );
}
