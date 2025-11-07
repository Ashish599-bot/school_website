import knex from "knex";
import knexConfig from "../../../../knexfile";
import { NextResponse } from "next/server";

const db = knex(knexConfig.development);

export async function PUT(req: Request, context: { params: Promise<{ user_id: string }> }) {
    const { user_id } = await context.params; // 👈 await the params Promise
    const id = parseInt(user_id); // convert string to number
    console.log(id)

    if (isNaN(id)) {
        return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
    }
    try {
        const { name, noOfStudent, coordinator, activity } = await req.json();

        const updated = await db('curricular')
            .update({ name, noOfStudent, coordinator, activity })
            .where({ id: id })
            .returning("*");
        return NextResponse.json({ message: "Updated successfully", updated }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Server error", error }, { status: 505 });
    }
}

export async function DELETE(req: Request, context: { params: Promise<{ user_id: string }> }) {
    const { user_id } = await context.params; // 👈 await the params Promise
    const id = parseInt(user_id);
    if (isNaN(id)) {
        return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
    }
    try {
        const del = await db('curricular').where({ id: id }).del();
        return NextResponse.json({ Message: "deleted successfully", del })
    }
    catch (error) {
        return NextResponse.json({ message: "Server error", error }, { status: 505 });
    }
}
