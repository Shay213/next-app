import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/buttons/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/4947406/pexels-photo-4947406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="img"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nobis
            dicta velit eveniet! Sint velit blanditiis laudantium? Quibusdam
            vero cupiditate magnam
            <br />
            <br />
            sint tempora cum, mollitia officiis minus perferendis voluptatem
            commodi. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusamus ex exercitationem ipsum aspernatur dicta quos natus quas,
            laborum repudiandae obcaecati, iste quae hic illo autem aliquid
            libero similique animi laboriosam!
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            dolorum sapiente neque. Consequuntur perferendis facilis obcaecati
            pariatur earum rerum, asperiores debitis beatae autem aliquam rem,
            atque minus, deserunt voluptatibus eaque.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            minus quas asperiores repellendus blanditiis. Iusto fugiat ipsam
            libero dolorem numquam sit consectetur, quasi dolor esse delectus
            magni enim, commodi earum.
            <br />
            <br />
            - Creative Ilustrations
            <br />
            <br />
            - Dynamic Websites
            <br />
            <br />- Fast and Handy Mobile Apps
            <br />
            <br />
          </p>
          <Button text="Contact" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
