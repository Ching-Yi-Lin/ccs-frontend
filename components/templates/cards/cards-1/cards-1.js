import { ButtonLink, Preheading } from "@/elements";

export default function Cards1({ content }) {
  if (!content) return <></>;
  let { collections } = content;
  if (!collections) {
    throw new Error(
      `No collections attribute provided in sections.json for template`
    );
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let items;
  if (collection) {
    items = collection.items;
  }

  return (
    <section id="cards-1" className="template bg-green-50">
      <div className="max-w-screen-xl mx-auto py-10">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-2 px-10">
          {items &&
            items.map((item, i) => (
              <div
                key={i}
                className="p-8 border border-gray-200 rounded-lg dark:border-gray-700"
              >
                <h3 className="mb-4">{item.attributes.title}</h3>
                <p className="mb-10">{item.attributes.blurb}</p>
              </div>
            ))}
        </div>
        <div className="flex justify-center mt-10">
          <ButtonLink
            key={"secondary"}
            attributes={{
              type: "secondary",
              label: "View our classes",
              url: "/services",
            }}
          ></ButtonLink>
        </div>
      </div>
    </section>
  );
}
