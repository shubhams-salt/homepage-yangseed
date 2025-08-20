import BlogCard from "./BlogCard";
import BlogPostHeader from "./BlogPostHeader";

const BLOGS_LIST = [
  {
    img: "blog-1",
    date: "Aug 17, 2026",
    title:
      "Praesent dapibus neque id cursus faucibus tortor neque egestas auguae",
    description:
      "Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus.",
  },
  {
    img: "blog-2",
    date: "Aug 17, 2026",
    title:
      "Praesent dapibus neque id cursus faucibus tortor neque egestas auguae",
    description:
      "Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus.",
  },
  {
    img: "blog-3",
    date: "Aug 17, 2026",
    title:
      "Praesent dapibus neque id cursus faucibus tortor neque egestas auguae",
    description:
      "Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus.",
  },
];

export default function BlogPostContainer() {
  return (
    <div className="flex flex-col gap-12 md:gap-14 lg:gap-16 max-w-[1224px] my-12 px-5 md:my-20 md:px-10 lg:my-24 lg:mx-auto w-full">
      <BlogPostHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOGS_LIST.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
}
