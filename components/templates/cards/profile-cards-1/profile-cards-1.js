import Image from "next/image";
import Link from "next/link";
import getConfig from "next/config";
import { Preheading } from "@/elements";

export default function ProfileCards1({ content }) {
  if (!content) return <></>;
  let { collections } = { ...content };
  let data = null;
  const { publicRuntimeConfig } = getConfig();
  const DEFAULT_COLS = 3;
  const cols = (data && data.columns) || DEFAULT_COLS;
  if (!collections) {
    throw new Error("No template collections");
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let items;
  let limit;
  if (collection) {
    items = collection.items;
    limit = collection.limit || items.length;
  }

  return (
    <section id="profile-cards-1" className="template flex items-stretch p-0">
      <div className="w-1/3 self-stretch bg-[url('/images/bg-1.png')] bg-cover bg-center bg-no-repeat">
        <div className="h-96"></div>
        <div className="h-96"></div>
      </div>
      <div className="w-2/3 py-16 flex justify-center bg-[url('/images/deco-bg.png')] bg-cover bg-center bg-no-repeat">
        {items &&
          items.slice(0, limit).map((item, i) => (
            <div
              className="flex flex-col w-64 items-center justify-center"
              key={i}
            >
              <div className="relative h-32 w-32 transition-opacity rounded-full">
                <Image
                  className="rounded-full"
                  src={`${publicRuntimeConfig.BACKEND_URL || ""}${
                    item.attributes?.profileImage?.data.attributes.url
                  }`}
                  layout="fill"
                  objectFit="cover"
                  alt={item.attributes.fullName}
                />
              </div>
              <div className="p-8 text-center">
                <span className={`preheading blank left`}>
                  {item.attributes.position}
                </span>
                <Preheading attributes={item.attributes}></Preheading>
                <Link href={`/authors/${item.attributes.slug}`}>
                  <a className="no-underline">
                    <h3 className="mb-4 hover:text-gray-700 dark:hover:text-gray-200">
                      {item.attributes.fullName}
                    </h3>
                  </a>
                </Link>
                <p>{item.attributes.excerpt}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
