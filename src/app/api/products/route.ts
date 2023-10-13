import { NextResponse } from "next/server";
import { getRandomProducts } from "@/features/createProduct";

export function GET() {
    const products = getRandomProducts(5)

    return NextResponse.json(
        { data: Array.from(products)},
        { status: 200 },
    )
}
