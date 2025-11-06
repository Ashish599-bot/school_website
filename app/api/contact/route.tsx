import knex from "knex";
import knexConfig from "@/knexfile";

const kn = knex(knexConfig.development);

export async function GET() {
  try {
    const getDetails = await kn("school").select("*").orderBy("id");
    return Response.json({ getDetails });
  } catch (error) {
    console.error("Error fetching data:", error);
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const { name, email, contact_Number, year_experience, job_title } =
    await req.json();

  if (!name || !email || !contact_Number || !year_experience || !job_title) {
    return Response.json({ error: "All fields are required" }, { status: 400 });
  }

  try {
    const [postDetails] = await kn("school")
      .insert({ name, email, contact_Number, year_experience, job_title })
      .returning("*");

    return Response.json(
      { message: "Details added successfully", data: postDetails },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting data:", error);
    return Response.json({ error: "Failed to add details" }, { status: 500 });
  }
}
