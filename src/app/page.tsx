// remove use client after use
"use client";

import CategoryCarousel from "@/components/client/CategoryCarousel";













// client front page
export default function foodPage() {
  // class for category header
  const categoryHeader = "text-3xl text-semibold my-4";

  return (
    <>

      <div>
        <ul className="px-4 lg:px-8">
          <li>
            {/* <h1>categoy1</h1> */}
            <h1 className={categoryHeader}>Category 1</h1>
            {/* corosel 
                  cards
            */}
            <CategoryCarousel category="category1" />
          </li>
          <li>
            {/* <h1>categoy1</h1> */}
            <h1 className={categoryHeader}>Category 2</h1>
            {/* corosel 
                  cards
            */}
            <CategoryCarousel category="category1" />
          </li>
        </ul>
      </div>
    </>
  );
}
