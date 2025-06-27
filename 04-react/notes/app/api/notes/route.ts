import { NextResponse } from "next/server";
//import { PrismaClient } from "@prisma/client";
import { PrismaClient } from '../../generated/prisma/client'
const prisma = new PrismaClient();

export async function GET(request) {
    /**
    const notes =[
        {id:0, text: "Notiz"},
        {id: 1, text: "andere"}
    ]*/

    const notes = await prisma.note.findMany()
    return NextResponse.json(notes, { status: 200 })
}

export async function POST(request) {
    const data = await request.json()
    const pk = await prisma.note.create({ data })
    return NextResponse.json(pk, { status: 201 })
}