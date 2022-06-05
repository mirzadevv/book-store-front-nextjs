import styles from "../../styles/pages/books/search.module.css";
import Link from "next/link";
import { API_URL } from "../../config/index";
export default function Search({ result }) {
  return (
    <div className={styles.bookSearch}>
      {result.data.length === 0 && <h3> There are no result </h3>}
      {result?.data?.map((item) => (
        <div className={styles.searchItem} key={item.id}>
          <Link href={`/books/${item.id}`}>
            <div
              style={{
                backgroundImage: `url(
                ${API_URL}${item?.attributes?.image?.data[0]?.attributes?.url}
              )`,
              }}
              className={styles.imgSide}
            ></div>
          </Link>
          <div className={styles.descriptionSide}>
            <h4>
              <span style={{ color: "blue" }}>Title: </span>
              {item.attributes.title}
            </h4>
            <h4>
              <span style={{ color: "blue" }}>Description: </span>
              {item.attributes.description}
            </h4>
            <h4>
              <span style={{ color: "blue" }}>Price: </span>
              {item.attributes.price} $
            </h4>
            <h4>
              <span style={{ color: "blue" }}>Author: </span>
              {item.attributes.author?.data.attributes.full_name}
            </h4>
            <h4>
              <span style={{ color: "blue" }}>Category: </span>
              <span>{item.attributes?.category.data.attributes.title}</span>
            </h4>
            <h4>
              <span style={{ color: "blue" }}>Publisher: </span>
              <span>{item.attributes?.publisher.data.attributes.title}</span>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps({ query: { value } }) {
  const qs = require("qs");
  const query = qs.stringify(
    {
      populate: "*",
      filters: {
        $or: [
          {
            title: {
              $contains: value,
            },
          },
          {
            author: {
              full_name: {
                $contains: value,
              },
            },
          },
          {
            category: {
              title: {
                $contains: value,
              },
            },
          },
          {
            publisher: {
              title: {
                $contains: value,
              },
            },
          },
        ],
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const response = await fetch(`${API_URL}/api/books?${query}`);
  const result = await response.json();

  return {
    props: {
      result,
    },
  };
}
