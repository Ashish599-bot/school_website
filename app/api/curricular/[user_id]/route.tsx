import knex from "knex";
import knexConfig from "../../../../knexfile";
import { NextResponse } from "next/server";

const db = knex(knexConfig.development);

export async function GET(
  req: Request,
  context: { params: Promise<{ user_id: string }> }
) {
  const { user_id } = await context.params;
  const id = parseInt(user_id);

  if (isNaN(id)) {
    return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
  }

  try {
    const [item] = await db("curricular").where({ id: id }).select("*");

    if (!item) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    // Ensure consistent field names in response
    const formattedItem = {
      id: item.id,
      name: item.name,
      noOfStudent: item.noOfStudent,
      coordinator: item.coordinator,
      activity: item.activity,
    };

    return NextResponse.json(
      { message: "Item fetched successfully", data: formattedItem },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  context: { params: Promise<{ user_id: string }> }
) {
  const { user_id } = await context.params; // 👈 await the params Promise
  const id = parseInt(user_id); // convert string to number
  console.log(id);

  if (isNaN(id)) {
    return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
  }
  try {
    const { name, noOfStudent, coordinator, activity } = await req.json();
    console.log("Received data for update:", {
      name,
      noOfStudent,
      coordinator,
      activity,
    });

    // Convert noOfStudent to integer if it's a string
    const updatedData = {
      name,
      noOfStudent: parseInt(noOfStudent) || noOfStudent,
      coordinator,
      activity,
    };

    console.log("Updating with data:", updatedData);
    console.log("Updating record with ID:", id);

    const updated = await db("curricular")
      .update(updatedData)
      .where({ id: id })
      .returning("*");

    console.log("Update result:", updated);
    return NextResponse.json(
      { message: "Updated successfully", updated },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 505 }
    );
  }
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ user_id: string }> }
) {
  const { user_id } = await context.params; // 👈 await the params Promise
  const id = parseInt(user_id);
  if (isNaN(id)) {
    return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
  }
  try {
    const del = await db("curricular").where({ id: id }).del();
    return NextResponse.json({ Message: "deleted successfully", del });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 505 }
    );
  }
}
