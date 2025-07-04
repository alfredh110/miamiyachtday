import Image from "next/image";
import styles from "./SundeckSportBoatSection.module.css";

export default function SundeckSportBoatSection() {
  return (
    <section className={styles.yachtGallerySection} id="sundeck-sport-boat">
      <h2>26' Sundeck Sport Boat (10 Guests)</h2>
      <p>
        Experience the Miami waters aboard our spacious 26' Sundeck Sport Boat, perfect for up to 10 guests. Relax, swim, and enjoy the sun with amazing skyline views.
      </p>
      <div className={styles.yachtGallery}>
        <Image
          src="/images/26-sundeck-sport-boat-1.jpg"
          alt="26' Sundeck Sport Boat with guests enjoying the water on a floating mat in Miami."
          width={750}
          height={450}
          className={styles.galleryImg}
        />
        {/* Add more images here as needed */}
      </div>
      <a href="#booking" className={styles.bookNowBtn}>Book Now</a>
    </section>
  );
}
