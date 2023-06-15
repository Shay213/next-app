import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum lorem ipsum</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa
            cumque iusto natus corrupti veritatis eligendi voluptatibus aperiam
            vitae repellendus? Sequi aut temporibus illo quisquam perferendis
            ut, pariatur debitis voluptatem.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/8910681/pexels-photo-8910681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>test user</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/8910681/pexels-photo-8910681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
          placeat officia vel, velit eum vitae. Fuga veniam a corporis unde
          facere, deleniti voluptates officiis aliquam nesciunt maiores,
          accusantium, porro quam.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
