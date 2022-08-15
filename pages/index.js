import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

import Link from "next/link"
import utilStyle from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>
          私は学生です
        </p>
      </section>

      <section className={`${utilStyle.headingMd} $utilStyle.padding1px`}>
        <h2>エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              ></img>
            </Link>
            <Link href="">
              <a className={utilStyle.boldText}>タイトル1</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>8/15, 2022</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail02.jpg"
                className={styles.thumbnailImage}
              ></img>
            </Link>
            <Link href="">
              <a className={utilStyle.boldText}>タイトル1</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>8/15, 2022</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail03.jpg"
                className={styles.thumbnailImage}
              ></img>
            </Link>
            <Link href="">
              <a className={utilStyle.boldText}>タイトル1</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>8/15, 2022</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail04.jpg"
                className={styles.thumbnailImage}
              ></img>
            </Link>
            <Link href="">
              <a className={utilStyle.boldText}>タイトル1</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>8/15, 2022</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
