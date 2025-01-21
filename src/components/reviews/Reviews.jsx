import useReviews from "../../hooks/useReviews";
import Box from "../box/Box";

import styles from "./reviews.module.css";


const Reviews = () => {
  const { reviews, loading, error } = useReviews();

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.reviewContainer}>
      <ul className={styles.reviewList}>
        {reviews.map((review) => (
          <li key={review._id}>
              
            <Box title={review.name} color={"#829B97"} width={"35vw"} height={"500px"}>
              <div>
              <h3>{review.stay}</h3>
              <p>{review.review}</p>{review.review}
              </div>
              </Box>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
