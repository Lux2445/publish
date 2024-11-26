import { useState } from "react";
import "./four-section.css";

export const FourSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Имом Салимов",
      role: "Покупатель",
      rating: 5,
      comment:
        "Быстро и качественно! Отдал ноутбук на ремонт, думал, что придется ждать неделю, но сделали за два дня. Все работает как новый спасибо мастерам!",
    },
    {
      id: 2,
      name: "Махина Сафарова",
      role: "Покупатель",
      
      rating: 4,
      comment:
        "Отличный сервис! Поменяли жесткий диск и перенесли все данные без потерь. Теперь компьютер работает быстрее, чем раньше. Буду рекомендовать друзьям!",
    },
    {
      id: 3,
      name: "Рустам Зоиров",
      role: "Покупатель",
      rating: 5,
      comment:
        "Профессиональный подход! Сломался системный блок, думал, что не починят. Но ребята не только исправили проблему, но и дали рекомендации по уходу. Благодарю!",
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newEntry = {
      id: comments.length + 1,
      name: "New User",
      role: "Customer",
      rating: newRating,
      comment: newComment,
    };

    setComments([...comments, newEntry]);
    setNewComment("");
    setNewRating(5);
    setHoveredRating(0);
  };

  return (
    <div className="testimonials">
      <h2>What customers say</h2>
      <p>Facibus orci luctus et ultrices posuere cubilia curae.</p>
      <div className="testimonials-grid">
        {comments.map((comment) => (
          <div className="testimonial-card" key={comment.id}>
            <div className="testimonial-rating">
              {"★".repeat(comment.rating)}{" "}
              {"☆".repeat(5 - comment.rating)}
            </div>
            <p className="testimonial-comment">{comment.comment}</p>
            <div className="testimonial-header">
              {/* <img
                src={comment.avatar}
                alt={comment.name}
                className="testimonial-avatar"
              /> */}
              <div>
                <h4>{comment.name}</h4>
                <span>{comment.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="add-comment">
        <h3>Add your comment</h3>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
        ></textarea>
        <div className="rating-input">
          <label>Rating: </label>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${
                  (hoveredRating || newRating) >= star ? "active" : ""
                }`}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setNewRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <button onClick={handleAddComment}>Submit</button>
      </div>
    </div>
  );
};

export default FourSection;
