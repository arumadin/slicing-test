import { contents } from "./data";

export async function GET() {
    return Response.json(contents)
}