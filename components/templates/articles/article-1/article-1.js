import { format } from "date-fns";
import Image from "next/image";
import getConfig from "next/config";
import Link from "next/link";
import { Tag } from "@/elements";
import ReactMarkdown from "react-markdown";

export default function Article1({ content }) {
  if (!content) return <></>;
  let { item } = { ...content };
  const { publicRuntimeConfig } = getConfig();
  let author = null;
  if (item.attributes.author) {
    author = item.attributes.author.data.attributes;
  }
  return (
    <article id="article-1" className="template">
      {item && (
        <div className="max-w-screen-xl mx-auto">
          <header className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <Link href="/">
                <a className="no-underline hover:underline">
                  <p className="mb-0 text-sm">{item.attributes.category}</p>
                </a>
              </Link>
            </div>
            <h1 className="mb-10">{item.attributes.title}</h1>
            {author && (
              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    className="rounded-full"
                    src={`${publicRuntimeConfig.BACKEND_URL || ""}${
                      author?.profileImage?.data.attributes.url
                    }`}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
                <div>
                  <p className="mb-0 font-bold text-black capitalize">
                    {author.fullName}
                  </p>
                  <p className="mb-0 text-sm capitalize">
                    {author.position || "Writer"}
                  </p>
                </div>
              </div>
            )}
          </header>
          <div className="relative my-20">
            <Image
              src={`${publicRuntimeConfig.BACKEND_URL || ""}${
                item.attributes?.image?.data.attributes.url
              }`}
              width={item.attributes.image.data.attributes.width}
              height={item.attributes.image.data.attributes.height}
              layout="responsive"
              alt=""
            />
          </div>
          <ReactMarkdown
            className="text-primary-20 sm:ml-6 lg:ml-12 mb-20 lg:max-w-2xl lg:pr-4 leading-7 line-break"
            children={item.attributes.content.replace(/\n/gi, "&nbsp; \n")}
          />

          <div className="max-w-2xl mx-auto">
            {item.tags && (
              <div className="grid grid-flow-col gap-2 mb-4 auto-cols-max">
                {item.attributes.tags.map((tag) => {
                  return <Tag key={tag.tag} item={tag}></Tag>;
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
