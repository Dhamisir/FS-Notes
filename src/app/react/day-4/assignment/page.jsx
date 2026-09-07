import { ReactLesson } from "@/app/react/components/ReactLesson";
import { Callout } from "@/components/notes/Callout";

export const metadata = { title: "React Day 4 API Assignment" };

export default function Day4Assignment() {
  return (
    <ReactLesson backHref="/react/day-4" title="🎯 Day 4 Assignment: Product Dashboard">
      <Callout variant="reactIntro">
        <p className="text-sm text-[#2c3e50]">
          Build a product dashboard using Axios, useEffect, useState, and
          <code> https://dummyjson.com/products</code>.
        </p>
      </Callout>
      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-[#2c3e50]">Requirements</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm text-muted-foreground">
          <li>Install and import Axios.</li>
          <li>Fetch ten products once when the component mounts.</li>
          <li>Show loading and error messages.</li>
          <li>Render image, title, category, and price using <code>map()</code>.</li>
          <li>Add a form that sends a POST request to create a product.</li>
          <li>Add an Edit button that sends a PATCH request.</li>
          <li>Add a Delete button that sends a DELETE request.</li>
          <li>Update local state after each simulated write so the UI changes.</li>
          <li>Keep every request inside a separate handler function.</li>
        </ol>
      </section>
      <Callout variant="reactPractice">
        <b>Bonus</b>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
          <li>Add product search using the DummyJSON search endpoint.</li>
          <li>Fetch one product using a dynamic route and <code>useParams()</code>.</li>
          <li>Disable action buttons while a request is running.</li>
        </ul>
      </Callout>
    </ReactLesson>
  );
}
