import Link from "next/link"
import styles from '../styles/BlogCard.module.css'

export default function BlogCard({tilte, author, coverPhoto, datePublished, slug}){
  return(
    <div className={styles.card}>
      <Link href={"/posts/" + slug}>
        <div className={styles.imgContainer}>
          <div>{author.name}</div>
          <div>{coverPhoto.url}</div>
        </div>
      </Link>
    </div>
  )
}