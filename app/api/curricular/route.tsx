import { NextResponse } from "next/server";

import knex from 'knex';
import knexConfig from '../../../knexfile';

const db = knex(knexConfig.development);

export async function GET() {
    const data = await db('curricular').select('*');
    return NextResponse.json({ Message: "succcessfull", data }, { status: 200 });
};

export async function POST(request: Request) {
    const { name, noOfStudent, coordinator, activity } = await request.json();

    if (!name || !noOfStudent || !coordinator || !activity) {
        return NextResponse.json({ message: "Require all fields" }, { status: 400 });
    }

    try {
        const update = await db('curricular')
            .insert({ name, noOfStudent, coordinator, activity })
            .returning("*");

        return NextResponse.json({ message: "Posted successfully", update }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to post data" }, { status: 500 });
    }
};