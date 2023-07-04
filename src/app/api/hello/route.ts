import {key} from "@/utils/instance"

export async function GET(request: Request) {
  return new Response(key)
}
