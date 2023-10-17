import { NextResponse } from "next/server";
import { getRandomProducts } from "@/features/createProduct";
import type { NextApiRequest } from "next";
import type { ProductProps } from "@/features/types";
import { addProduct } from "@/features/createProduct";

export function GET() {
    const products = getRandomProducts(2)

    return NextResponse.json(
        { data: Array.from(products)},
        { status: 200 },
    )
}

export function POST(request: NextApiRequest) {
    const { body } = request;
    const newProduct = JSON.parse(String(body)) as ProductProps;

    addProduct(newProduct);

    const products = getRandomProducts(2);

    return NextResponse.json(
        { data: Array.from(products) },
        { status: 200 }
    );
}